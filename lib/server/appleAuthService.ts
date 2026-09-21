import { randomUUID } from "node:crypto";

import { verifyAppleIdentityToken } from "@/lib/server/appleVerify";
import { getServerSql } from "@/lib/server/db";
import { mintAppleSession } from "@/lib/server/stackSession";

export type AppleAuthMode = "signIn" | "signUp";

export type AppleAuthBody = {
  identityToken: string;
  nonce?: string | null;
  mode?: AppleAuthMode | null;
  /** First-auth only hints from Apple credential — never used for identity. */
  emailHint?: string | null;
  givenName?: string | null;
  familyName?: string | null;
  /** @deprecated Prefer givenName / familyName */
  fullName?: string | null;
};

export type AppleAuthResult = {
  accessToken: string;
  expiresAt: string;
  user: {
    id: string;
    email: string | null;
    firstName: string | null;
    isNewUser: boolean;
  };
};

export class AppleAccountNotFoundError extends Error {
  readonly code = "ACCOUNT_NOT_FOUND" as const;
  constructor() {
    super("APPLE_ACCOUNT_NOT_FOUND");
    this.name = "AppleAccountNotFoundError";
  }
}

function isPrivateRelayEmail(email: string | null | undefined): boolean {
  return Boolean(email?.toLowerCase().endsWith("@privaterelay.appleid.com"));
}

/**
 * Prefer Apple's given name. Never use the Hide-My-Email local-part as a name
 * (looks random: w4wrtjn4jn@privaterelay...).
 */
export function resolveAppleDisplayName(input: {
  givenName?: string | null;
  familyName?: string | null;
  fullName?: string | null;
  email?: string | null;
}): string {
  const given = input.givenName?.trim();
  if (given) return given;

  const fromFull = input.fullName?.trim();
  if (fromFull) {
    const first = fromFull.split(/\s+/).find(Boolean);
    if (first) return first;
  }

  const family = input.familyName?.trim();
  if (family) return family;

  const email = input.email?.trim();
  if (email && !isPrivateRelayEmail(email)) {
    const local = email.split("@")[0]?.trim();
    if (local && local.length >= 2) return local;
  }

  return "Learner";
}

function resolveEmail(
  tokenEmail: string | null,
  emailHint?: string | null
): string | null {
  const hint = emailHint?.trim() || null;
  if (tokenEmail) return tokenEmail;
  if (hint?.includes("@")) return hint;
  return null;
}

function shouldReplaceStoredName(
  storedFirstName: string | null,
  storedEmail: string | null,
  hasFreshAppleName: boolean
): boolean {
  if (hasFreshAppleName) return true;
  if (!storedFirstName) return true;
  if (storedFirstName === "Learner") return true;
  if (
    storedEmail &&
    isPrivateRelayEmail(storedEmail) &&
    storedFirstName === storedEmail.split("@")[0]
  ) {
    return true;
  }
  return false;
}

/**
 * Verify Apple token, find-or-create Stack user by apple_user_id only
 * (never merge by email), mint app session.
 *
 * - signIn: existing Apple identity only (else AppleAccountNotFoundError)
 * - signUp: create if missing, or sign in if already linked
 */
export async function authenticateWithApple(
  body: AppleAuthBody
): Promise<AppleAuthResult> {
  const identityToken = body.identityToken?.trim();
  if (!identityToken) {
    throw new Error("identityToken is required");
  }

  const mode: AppleAuthMode =
    body.mode === "signIn" || body.mode === "signUp" ? body.mode : "signUp";

  const verified = await verifyAppleIdentityToken(
    identityToken,
    body.nonce?.trim() || null
  );

  const sql = getServerSql();
  const existing = await sql`
    SELECT ai.user_id, p.email, p.first_name
    FROM public.apple_identities ai
    JOIN public.profiles p ON p.user_id = ai.user_id
    WHERE ai.apple_user_id = ${verified.appleUserId}
    LIMIT 1
  `;

  const existingRow = existing[0] as
    | { user_id: string; email: string | null; first_name: string | null }
    | undefined;

  const email = resolveEmail(verified.email, body.emailHint);
  const resolvedName = resolveAppleDisplayName({
    givenName: body.givenName,
    familyName: body.familyName,
    fullName: body.fullName,
    email,
  });
  const hasFreshAppleName = Boolean(
    body.givenName?.trim() || body.familyName?.trim() || body.fullName?.trim()
  );

  let userId: string;
  let isNewUser = false;
  let storedEmail: string | null;
  let storedFirstName: string;

  if (!existingRow) {
    if (mode === "signIn") {
      throw new AppleAccountNotFoundError();
    }

    isNewUser = true;
    userId = randomUUID();
    storedEmail = email;
    storedFirstName = resolvedName;

    await sql`
      INSERT INTO public.profiles (user_id, email, first_name)
      VALUES (${userId}, ${storedEmail}, ${storedFirstName})
    `;

    await sql`
      INSERT INTO public.learning_progress (user_id)
      VALUES (${userId})
      ON CONFLICT (user_id) DO NOTHING
    `;

    await sql`
      INSERT INTO public.apple_identities (
        apple_user_id,
        user_id,
        email,
        email_is_private
      )
      VALUES (
        ${verified.appleUserId},
        ${userId},
        ${storedEmail},
        ${verified.isPrivateEmail || isPrivateRelayEmail(storedEmail)}
      )
    `;
  } else {
    userId = existingRow.user_id;
    storedEmail = email ?? existingRow.email;
    storedFirstName = shouldReplaceStoredName(
      existingRow.first_name,
      existingRow.email,
      hasFreshAppleName
    )
      ? resolvedName
      : existingRow.first_name || resolvedName;

    await sql`
      UPDATE public.apple_identities
      SET
        email = COALESCE(${email}, email),
        email_is_private = ${
          verified.isPrivateEmail || isPrivateRelayEmail(storedEmail)
        },
        updated_at = now()
      WHERE apple_user_id = ${verified.appleUserId}
    `;

    await sql`
      UPDATE public.profiles
      SET
        email = COALESCE(${email}, email),
        first_name = ${storedFirstName},
        updated_at = now()
      WHERE user_id = ${userId}
    `;
  }

  const session = await mintAppleSession(userId);

  return {
    accessToken: session.accessToken,
    expiresAt: session.expiresAt,
    user: {
      id: userId,
      email: storedEmail,
      firstName: storedFirstName,
      isNewUser,
    },
  };
}
