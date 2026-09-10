import { verifyStackAppleSession } from "@/lib/server/stackSession";

export function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

export async function requireAppleBearer(
  request: Request
): Promise<{ userId: string; sessionId: string } | Response> {
  const header = request.headers.get("authorization") ?? "";
  const match = /^Bearer\s+(.+)$/i.exec(header);
  if (!match?.[1]) {
    return jsonError("Unauthorized", 401);
  }
  const claims = await verifyStackAppleSession(match[1].trim());
  if (!claims) {
    return jsonError("Invalid or expired session", 401);
  }
  return { userId: claims.userId, sessionId: claims.sessionId };
}
