import { randomUUID } from "node:crypto";

import { verifyGoogleIdToken } from "@/lib/server/googleVerify";
import { getServerSql } from "@/lib/server/db";
import { mintStackSession } from "@/lib/server/stackSession";

export type GoogleAuthResult = {
  accessToken: string;
  expiresAt: string;
  user: {
    id: string;
    email: string | null;
    firstName: string | null;
    avatarUri: string | null;
    isNewUser: boolean;
  };
};

/**
 * Verify Google id_token, find-or-create Stack user by google_user_id only
 * (never merge by email), mint app session.
 */
export async function authenticateWithGoogle(
  idToken: string
): Promise<GoogleAuthResult> {
  const token = idToken?.trim();
  if (!token) {
    throw new Error("idToken is required");
  }

  const verified = await verifyGoogleIdToken(token);
  const sql = getServerSql();

  const existing = await sql`
    SELECT gi.user_id, p.email, p.first_name, p.avatar_url
    FROM public.google_identities gi
    JOIN public.profiles p ON p.user_id = gi.user_id
    WHERE gi.google_user_id = ${verified.googleUserId}
    LIMIT 1
  `;

  const existingRow = existing[0] as
    | {
        user_id: string;
        email: string | null;
        first_name: string | null;
        avatar_url: string | null;
      }
    | undefined;

  let userId: string;
  let firstName: string | null;
  let email: string | null;
  let avatarUri: string | null;
  let isNewUser = false;

  if (existingRow) {
    userId = existingRow.user_id;
    email = verified.email ?? existingRow.email;
    firstName =
      verified.name?.split(" ")[0] ||
      existingRow.first_name ||
      email?.split("@")[0] ||
      "Learner";
    avatarUri = verified.picture ?? existingRow.avatar_url;

    await sql`
      UPDATE public.google_identities
      SET
        email = COALESCE(${verified.email}, email),
        updated_at = now()
      WHERE google_user_id = ${verified.googleUserId}
    `;

    await sql`
      UPDATE public.profiles
      SET
        email = COALESCE(${verified.email}, email),
        first_name = COALESCE(${verified.name?.split(" ")[0] || null}, first_name),
        avatar_url = COALESCE(${verified.picture}, avatar_url),
        updated_at = now()
      WHERE user_id = ${userId}
    `;
  } else {
    isNewUser = true;
    userId = randomUUID();
    email = verified.email;
    firstName =
      verified.name?.split(" ")[0] || email?.split("@")[0] || "Learner";
    avatarUri = verified.picture;

    await sql`
      INSERT INTO public.profiles (user_id, email, first_name, avatar_url)
      VALUES (${userId}, ${email}, ${firstName}, ${avatarUri})
    `;

    await sql`
      INSERT INTO public.learning_progress (user_id)
      VALUES (${userId})
      ON CONFLICT (user_id) DO NOTHING
    `;

    await sql`
      INSERT INTO public.google_identities (google_user_id, user_id, email)
      VALUES (${verified.googleUserId}, ${userId}, ${email})
    `;
  }

  const session = await mintStackSession(userId, "google");

  return {
    accessToken: session.accessToken,
    expiresAt: session.expiresAt,
    user: {
      id: userId,
      email,
      firstName,
      avatarUri,
      isNewUser,
    },
  };
}
