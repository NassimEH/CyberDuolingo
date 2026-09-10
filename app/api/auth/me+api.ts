import { getServerSql } from "@/lib/server/db";
import { jsonError, requireAppleBearer } from "@/lib/server/httpAuth";
import { revokeStackSession } from "@/lib/server/stackSession";

/** GET /api/auth/me — validate Stack Apple session + return profile basics. */
export async function GET(request: Request) {
  const auth = await requireAppleBearer(request);
  if (auth instanceof Response) return auth;

  try {
    const sql = getServerSql();
    const rows = await sql`
      SELECT user_id, email, first_name, avatar_url
      FROM public.profiles
      WHERE user_id = ${auth.userId}
      LIMIT 1
    `;
    const row = rows[0] as
      | {
          user_id: string;
          email: string | null;
          first_name: string | null;
          avatar_url: string | null;
        }
      | undefined;
    if (!row) {
      return jsonError("User not found", 404);
    }
    return Response.json({
      user: {
        id: row.user_id,
        email: row.email,
        firstName: row.first_name,
        avatarUrl: row.avatar_url,
      },
    });
  } catch (err) {
    console.error("[auth/me]", err);
    return jsonError("Server error", 500);
  }
}

/** DELETE /api/auth/me — revoke current Apple session (sign-out). */
export async function DELETE(request: Request) {
  const auth = await requireAppleBearer(request);
  if (auth instanceof Response) return auth;

  try {
    await revokeStackSession(auth.sessionId);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[auth/me DELETE]", err);
    return jsonError("Server error", 500);
  }
}
