import { verifyStackSession, type StackAuthProvider } from "@/lib/server/stackSession";

export function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

/** Require a Stack session JWT (Apple or Google native). */
export async function requireStackBearer(
  request: Request
): Promise<
  | { userId: string; sessionId: string; provider: StackAuthProvider }
  | Response
> {
  const header = request.headers.get("authorization") ?? "";
  const match = /^Bearer\s+(.+)$/i.exec(header);
  if (!match?.[1]) {
    return jsonError("Unauthorized", 401);
  }
  const claims = await verifyStackSession(match[1].trim());
  if (!claims) {
    return jsonError("Invalid or expired session", 401);
  }
  return {
    userId: claims.userId,
    sessionId: claims.sessionId,
    provider: claims.provider,
  };
}

/** @deprecated Prefer requireStackBearer */
export async function requireAppleBearer(request: Request) {
  return requireStackBearer(request);
}
