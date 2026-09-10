import {
  deleteAppleUserData,
  pullAppleUserState,
  pushAppleUserState,
  wipeAppleLearningData,
  type ApplePushBody,
} from "@/lib/server/appleSync";
import { jsonError, requireAppleBearer } from "@/lib/server/httpAuth";
import { revokeAllUserSessions } from "@/lib/server/stackSession";

/** GET /api/sync — pull profile + learning + certs for Apple session. */
export async function GET(request: Request) {
  const auth = await requireAppleBearer(request);
  if (auth instanceof Response) return auth;

  try {
    const snapshot = await pullAppleUserState(auth.userId);
    return Response.json(snapshot);
  } catch (err) {
    console.error("[sync GET]", err);
    return jsonError("Sync pull failed", 500);
  }
}

/** PUT /api/sync — push local state for Apple session. */
export async function PUT(request: Request) {
  const auth = await requireAppleBearer(request);
  if (auth instanceof Response) return auth;

  try {
    const body = (await request.json()) as ApplePushBody;
    await pushAppleUserState(auth.userId, body);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[sync PUT]", err);
    return jsonError("Sync push failed", 500);
  }
}

/**
 * DELETE /api/sync?scope=learning|account
 * learning = wipe progress; account = delete user + revoke sessions.
 */
export async function DELETE(request: Request) {
  const auth = await requireAppleBearer(request);
  if (auth instanceof Response) return auth;

  const url = new URL(request.url);
  const scope = url.searchParams.get("scope") ?? "account";

  try {
    if (scope === "learning") {
      await wipeAppleLearningData(auth.userId);
      return Response.json({ ok: true });
    }

    if (scope === "account") {
      await revokeAllUserSessions(auth.userId);
      await deleteAppleUserData(auth.userId);
      return Response.json({ ok: true });
    }

    return jsonError("Invalid scope", 400);
  } catch (err) {
    console.error("[sync DELETE]", err);
    return jsonError("Delete failed", 500);
  }
}
