import { createHash, randomBytes, randomUUID } from "node:crypto";
import { SignJWT, jwtVerify } from "jose";

import { getServerSql } from "@/lib/server/db";

const SESSION_DAYS = 30;

export type StackAuthProvider = "apple" | "google";

function getSessionSecret(): Uint8Array {
  const secret = process.env.STACK_SESSION_SECRET?.trim();
  if (!secret || secret.length < 32) {
    throw new Error(
      "STACK_SESSION_SECRET must be set (min 32 characters) on the server"
    );
  }
  return new TextEncoder().encode(secret);
}

export function hashSessionToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export type StackSessionClaims = {
  userId: string;
  sessionId: string;
  provider: StackAuthProvider;
};

function isStackAuthProvider(value: unknown): value is StackAuthProvider {
  return value === "apple" || value === "google";
}

export async function mintStackSession(
  userId: string,
  provider: StackAuthProvider
): Promise<{
  accessToken: string;
  sessionId: string;
  expiresAt: string;
}> {
  const sql = getServerSql();
  const sessionId = randomUUID();
  const rawToken = randomBytes(32).toString("base64url");
  const tokenHash = hashSessionToken(rawToken);
  const expiresAt = new Date(
    Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000
  ).toISOString();

  await sql`
    INSERT INTO public.app_sessions (id, user_id, token_hash, auth_provider, expires_at)
    VALUES (${sessionId}::uuid, ${userId}, ${tokenHash}, ${provider}, ${expiresAt}::timestamptz)
  `;

  const accessToken = await new SignJWT({
    sid: sessionId,
    provider,
    th: tokenHash,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(userId)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DAYS}d`)
    .setIssuer("stack-app")
    .setAudience("stack-mobile")
    .sign(getSessionSecret());

  return {
    accessToken,
    sessionId,
    expiresAt,
  };
}

/** @deprecated Prefer mintStackSession(userId, "apple") */
export async function mintAppleSession(userId: string) {
  return mintStackSession(userId, "apple");
}

export async function verifyStackSession(
  accessToken: string
): Promise<StackSessionClaims | null> {
  try {
    const { payload } = await jwtVerify(accessToken, getSessionSecret(), {
      issuer: "stack-app",
      audience: "stack-mobile",
    });
    const userId = typeof payload.sub === "string" ? payload.sub : null;
    const sessionId = typeof payload.sid === "string" ? payload.sid : null;
    const tokenHash = typeof payload.th === "string" ? payload.th : null;
    if (!userId || !sessionId || !tokenHash) return null;
    if (!isStackAuthProvider(payload.provider)) return null;

    const sql = getServerSql();
    const rows = await sql`
      SELECT id, user_id, revoked_at, expires_at
      FROM public.app_sessions
      WHERE id = ${sessionId}::uuid
        AND user_id = ${userId}
        AND token_hash = ${tokenHash}
      LIMIT 1
    `;
    const row = rows[0] as
      | {
          id: string;
          user_id: string;
          revoked_at: string | null;
          expires_at: string;
        }
      | undefined;
    if (!row || row.revoked_at) return null;
    if (new Date(row.expires_at).getTime() <= Date.now()) return null;

    return { userId, sessionId, provider: payload.provider };
  } catch {
    return null;
  }
}

/** @deprecated Prefer verifyStackSession */
export async function verifyStackAppleSession(accessToken: string) {
  const claims = await verifyStackSession(accessToken);
  if (!claims || claims.provider !== "apple") return null;
  return claims;
}

export async function revokeStackSession(sessionId: string): Promise<void> {
  const sql = getServerSql();
  await sql`
    UPDATE public.app_sessions
    SET revoked_at = now()
    WHERE id = ${sessionId}::uuid AND revoked_at IS NULL
  `;
}

export async function revokeAllUserSessions(userId: string): Promise<void> {
  const sql = getServerSql();
  await sql`
    UPDATE public.app_sessions
    SET revoked_at = now()
    WHERE user_id = ${userId} AND revoked_at IS NULL
  `;
}
