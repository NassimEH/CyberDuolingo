import { createHash, randomUUID } from "node:crypto";

import { exchangeGoogleAuthCode } from "@/lib/server/googleTokenExchange";
import { getServerSql } from "@/lib/server/db";

let tableReady: Promise<void> | null = null;

async function ensureGoogleOAuthTicketsTable(): Promise<void> {
  if (!tableReady) {
    tableReady = (async () => {
      const sql = getServerSql();
      await sql`
        CREATE TABLE IF NOT EXISTS public.google_oauth_tickets (
          id TEXT PRIMARY KEY,
          id_token TEXT NOT NULL,
          expires_at TIMESTAMPTZ NOT NULL
        )
      `;
    })().catch((err) => {
      tableReady = null;
      throw err;
    });
  }
  await tableReady;
}

function getGoogleHttpsRedirectUri(): string {
  const base =
    process.env.EXPO_PUBLIC_API_BASE_URL?.trim().replace(/\/$/, "") || "";
  if (!base) {
    throw new Error("EXPO_PUBLIC_API_BASE_URL is not configured");
  }
  return `${base}/api/auth/google/callback`;
}

/** Deterministic ticket id from OAuth state (idempotent if Google hits callback twice). */
function ticketIdFromState(state: string): string {
  return createHash("sha256").update(state).digest("hex").slice(0, 32);
}

/** state = `{nonce}.{encodeURIComponent(appReturnUrl)}` */
export function extractAppReturnUrl(state: string): string | null {
  const dot = state.indexOf(".");
  if (dot < 0) return null;
  try {
    const decoded = decodeURIComponent(state.slice(dot + 1));
    if (
      decoded.startsWith("stack:") ||
      decoded.startsWith("exp:") ||
      decoded.startsWith("exps:") ||
      decoded.includes("://")
    ) {
      return decoded;
    }
  } catch {
    return null;
  }
  return null;
}

/** Append query params without using URL() (breaks custom schemes like exp://). */
export function appendQueryToDeepLink(
  base: string,
  params: Record<string, string>
): string {
  const hashIndex = base.indexOf("#");
  const withoutHash = hashIndex >= 0 ? base.slice(0, hashIndex) : base;
  const hash = hashIndex >= 0 ? base.slice(hashIndex) : "";
  const sp = new URLSearchParams(params);
  const join = withoutHash.includes("?") ? "&" : "?";
  return `${withoutHash}${join}${sp.toString()}${hash}`;
}

/**
 * Exchange Google auth code on the HTTPS callback, stash id_token under a short ticket,
 * return deep-link URL for ASWebAuthenticationSession to dismiss.
 *
 * Idempotent on `state`: a second hit (prefetch / retry) reuses the first ticket
 * instead of re-exchanging the one-time auth code.
 */
export async function completeGoogleOAuthCallback(input: {
  code: string | null;
  error: string | null;
  state: string;
}): Promise<string | null> {
  const appReturnUrl = extractAppReturnUrl(input.state);
  if (!appReturnUrl) return null;

  if (input.error) {
    return appendQueryToDeepLink(appReturnUrl, {
      error: input.error,
    });
  }

  if (!input.code) {
    return appendQueryToDeepLink(appReturnUrl, {
      error: "missing_code",
    });
  }

  await ensureGoogleOAuthTicketsTable();
  const sql = getServerSql();
  const ticketId = ticketIdFromState(input.state);

  const existing = await sql`
    SELECT id FROM public.google_oauth_tickets
    WHERE id = ${ticketId}
      AND expires_at > NOW()
    LIMIT 1
  `;
  if (existing[0]?.id) {
    return appendQueryToDeepLink(appReturnUrl, { gt: ticketId });
  }

  try {
    const tokens = await exchangeGoogleAuthCode({
      code: input.code,
      redirectUri: getGoogleHttpsRedirectUri(),
    });

    const expiresAt = new Date(Date.now() + 3 * 60 * 1000).toISOString();
    await sql`
      INSERT INTO public.google_oauth_tickets (id, id_token, expires_at)
      VALUES (${ticketId}, ${tokens.idToken}, ${expiresAt}::timestamptz)
      ON CONFLICT (id) DO UPDATE
      SET id_token = EXCLUDED.id_token,
          expires_at = EXCLUDED.expires_at
    `;

    return appendQueryToDeepLink(appReturnUrl, { gt: ticketId });
  } catch (err) {
    // Parallel callback may have consumed the code successfully already.
    const raced = await sql`
      SELECT id FROM public.google_oauth_tickets
      WHERE id = ${ticketId}
        AND expires_at > NOW()
      LIMIT 1
    `;
    if (raced[0]?.id) {
      return appendQueryToDeepLink(appReturnUrl, { gt: ticketId });
    }
    throw err;
  }
}

export async function redeemGoogleOAuthTicket(
  ticket: string
): Promise<string | null> {
  await ensureGoogleOAuthTicketsTable();
  const sql = getServerSql();
  const rows = await sql`
    DELETE FROM public.google_oauth_tickets
    WHERE id = ${ticket}
      AND expires_at > NOW()
    RETURNING id_token
  `;
  const idToken = rows[0]?.id_token;
  return typeof idToken === "string" ? idToken : null;
}

/** Dev/debug helper — not used in hot path. */
export function fingerprintSecret(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 8);
}

/** Kept for rare debug paths. */
export function newRandomTicketId(): string {
  return randomUUID();
}
