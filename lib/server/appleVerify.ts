import { createHash } from "node:crypto";
import { createRemoteJWKSet, jwtVerify, type JWTPayload } from "jose";

const APPLE_ISSUER = "https://appleid.apple.com";
const APPLE_JWKS_URL = "https://appleid.apple.com/auth/keys";

let appleJwks: ReturnType<typeof createRemoteJWKSet> | null = null;

function getAppleJwks() {
  if (!appleJwks) {
    appleJwks = createRemoteJWKSet(new URL(APPLE_JWKS_URL));
  }
  return appleJwks;
}

function resolveAppleAudiences(): string[] {
  const configured = [
    process.env.APPLE_BUNDLE_ID?.trim(),
    process.env.APPLE_CLIENT_ID?.trim(),
    process.env.APPLE_SERVICES_ID?.trim(),
  ].filter((v): v is string => Boolean(v));

  // Default to the Expo iOS bundle id used by this app.
  if (configured.length === 0) {
    return ["me.nassimelh.stack"];
  }
  // Deduplicate while preserving order.
  return [...new Set(configured)];
}

/**
 * Apple's identity-token `nonce` claim is SHA-256(rawNonce), but encoding
 * varies by platform / library:
 * - Native iOS (ASAuthorizationAppleIDRequest): typically base64 of the digest
 * - Some OIDC stacks: base64url (no padding)
 * - Some docs / backends: lowercase hex
 *
 * Comparing only hex (previous bug) rejects every valid Apple Sign-In.
 */
export function appleNonceMatches(
  rawNonce: string,
  tokenNonce: string
): boolean {
  const digest = createHash("sha256").update(rawNonce, "utf8").digest();
  const base64 = digest.toString("base64");
  const base64url = digest.toString("base64url");
  const hex = digest.toString("hex");
  const candidates = new Set([
    hex,
    hex.toUpperCase(),
    base64,
    base64.replace(/=+$/, ""),
    base64url,
    // Rare: client pre-hashed and Apple echoed the preimage as-is.
    rawNonce,
  ]);
  return candidates.has(tokenNonce);
}

export type VerifiedAppleIdentity = {
  /** Stable Apple user id (`sub`) — primary key for identity. */
  appleUserId: string;
  email: string | null;
  emailVerified: boolean;
  isPrivateEmail: boolean;
  payload: JWTPayload;
};

/**
 * Cryptographically verify an Apple identityToken.
 * Never trust client-supplied email/name without this verification.
 */
export async function verifyAppleIdentityToken(
  identityToken: string,
  nonce?: string | null
): Promise<VerifiedAppleIdentity> {
  const audiences = resolveAppleAudiences();
  const { payload } = await jwtVerify(identityToken, getAppleJwks(), {
    issuer: APPLE_ISSUER,
    audience: audiences,
    // Small clock skew for App Review devices / region lag.
    clockTolerance: 60,
  });

  const appleUserId = typeof payload.sub === "string" ? payload.sub : null;
  if (!appleUserId) {
    throw new Error("Apple token missing subject");
  }

  const rawNonce = nonce?.trim() || null;
  if (rawNonce) {
    const tokenNonce =
      typeof payload.nonce === "string" ? payload.nonce : null;
    if (!tokenNonce || !appleNonceMatches(rawNonce, tokenNonce)) {
      throw new Error("Apple token nonce mismatch");
    }
  }

  const email = typeof payload.email === "string" ? payload.email : null;
  const emailVerified =
    payload.email_verified === true || payload.email_verified === "true";
  const isPrivateEmail =
    payload.is_private_email === true ||
    payload.is_private_email === "true" ||
    Boolean(email?.endsWith("@privaterelay.appleid.com"));

  return {
    appleUserId,
    email,
    emailVerified,
    isPrivateEmail,
    payload,
  };
}
