import { randomUUID } from "node:crypto";

import { verifyAppleIdentityToken } from "@/lib/server/appleVerify";
import { getServerSql } from "@/lib/server/db";
import { mintAppleSession } from "@/lib/server/stackSession";

export type AppleAuthBody = {
  identityToken: string;
  nonce?: string | null;
  /** First-auth only hint from Apple; never trusted for identity. */
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

/**
 * Verify Apple token, find-or-create Stack user by apple_user_id only
 * (never merge by email), mint app session.
 */
export async function authenticateWithApple(
  body: AppleAuthBody
): Promise<AppleAuthResult> {
  const identityToken = body.identityToken?.trim();
  if (!identityToken) {
    throw new Error("identityToken is required");
  }

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

  let userId: string;
  let firstName: string | null;
  let email: string | null;
  let isNewUser = false;

  if (existingRow) {
    userId = existingRow.user_id;
    email = verified.email ?? existingRow.email;
    firstName =
      body.fullName?.trim() || existingRow.first_name || email?.split("@")[0] || "Learner";

    await sql`
      UPDATE public.apple_identities
      SET
        email = COALESCE(${verified.email}, email),
        email_is_private = ${verified.isPrivateEmail},
        updated_at = now()
      WHERE apple_user_id = ${verified.appleUserId}
    `;

    await sql`
      UPDATE public.profiles
      SET
        email = COALESCE(${verified.email}, email),
        first_name = COALESCE(${body.fullName?.trim() || null}, first_name),
        updated_at = now()
      WHERE user_id = ${userId}
    `;
  } else {
    isNewUser = true;
    userId = randomUUID();
    email = verified.email;
    firstName =
      body.fullName?.trim() ||
      email?.split("@")[0] ||
      "Learner";

    // Intentionally do NOT look up profiles by email — separate accounts.
    await sql`
      INSERT INTO public.profiles (user_id, email, first_name)
      VALUES (${userId}, ${email}, ${firstName})
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
        ${email},
        ${verified.isPrivateEmail}
      )
    `;
  }

  const session = await mintAppleSession(userId);

  return {
    accessToken: session.accessToken,
    expiresAt: session.expiresAt,
    user: {
      id: userId,
      email,
      firstName,
      isNewUser,
    },
  };
}
