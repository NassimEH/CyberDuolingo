import { createRemoteJWKSet, jwtVerify, type JWTPayload } from "jose";

const GOOGLE_ISSUERS = [
  "https://accounts.google.com",
  "accounts.google.com",
] as const;
const GOOGLE_JWKS_URL = "https://www.googleapis.com/oauth2/v3/certs";

let googleJwks: ReturnType<typeof createRemoteJWKSet> | null = null;

function getGoogleJwks() {
  if (!googleJwks) {
    googleJwks = createRemoteJWKSet(new URL(GOOGLE_JWKS_URL));
  }
  return googleJwks;
}

function resolveGoogleAudiences(): string[] {
  const configured = [
    process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID?.trim(),
    process.env.GOOGLE_WEB_CLIENT_ID?.trim(),
    process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID?.trim(),
    process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID?.trim(),
  ].filter((v): v is string => Boolean(v));

  if (configured.length === 0) {
    throw new Error("Google client ID is not configured for token verification");
  }
  return configured;
}

export type VerifiedGoogleIdentity = {
  /** Stable Google user id (`sub`). */
  googleUserId: string;
  email: string | null;
  emailVerified: boolean;
  name: string | null;
  picture: string | null;
  payload: JWTPayload;
};

/**
 * Cryptographically verify a Google ID token (JWKS).
 * Audience must match a configured OAuth client ID (Web / iOS / Android).
 */
export async function verifyGoogleIdToken(
  idToken: string
): Promise<VerifiedGoogleIdentity> {
  const audiences = resolveGoogleAudiences();
  const { payload } = await jwtVerify(idToken, getGoogleJwks(), {
    issuer: [...GOOGLE_ISSUERS],
    audience: audiences,
  });

  const googleUserId = typeof payload.sub === "string" ? payload.sub : null;
  if (!googleUserId) {
    throw new Error("Google token missing subject");
  }

  const email = typeof payload.email === "string" ? payload.email : null;
  const emailVerified =
    payload.email_verified === true || payload.email_verified === "true";
  const name = typeof payload.name === "string" ? payload.name : null;
  const picture = typeof payload.picture === "string" ? payload.picture : null;

  return {
    googleUserId,
    email,
    emailVerified,
    name,
    picture,
    payload,
  };
}
