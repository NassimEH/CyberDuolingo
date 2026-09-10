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
  return configured;
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
  });

  const appleUserId = typeof payload.sub === "string" ? payload.sub : null;
  if (!appleUserId) {
    throw new Error("Apple token missing subject");
  }

  if (nonce) {
    // Apple puts SHA-256(nonce) (hex) in the identity token, not the raw nonce.
    const expected = createHash("sha256").update(nonce).digest("hex");
    const tokenNonce = typeof payload.nonce === "string" ? payload.nonce : null;
    if (!tokenNonce || tokenNonce !== expected) {
      throw new Error("Apple token nonce mismatch");
    }
  }

  const email = typeof payload.email === "string" ? payload.email : null;
  const emailVerified =
    payload.email_verified === true ||
    payload.email_verified === "true";
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
