import { createRemoteJWKSet, jwtVerify } from "jose";

export type AuthUser = {
  userId: string;
};

function resolveAuthBaseUrl(): string {
  return (
    process.env.NEON_AUTH_BASE_URL ||
    process.env.EXPO_PUBLIC_NEON_AUTH_URL ||
    ""
  ).replace(/\/$/, "");
}

function resolveJwksUrl(): string {
  if (process.env.NEON_AUTH_JWKS_URL) {
    return process.env.NEON_AUTH_JWKS_URL;
  }
  const base = resolveAuthBaseUrl();
  if (!base) return "";
  // Neon Managed Auth / Better Auth JWKS
  return `${base}/jwks`;
}

let jwks: ReturnType<typeof createRemoteJWKSet> | null = null;

function getJwks() {
  const url = resolveJwksUrl();
  if (!url) return null;
  if (!jwks) {
    jwks = createRemoteJWKSet(new URL(url));
  }
  return jwks;
}

/**
 * Authenticate an Expo API route from `Authorization: Bearer <Neon Data API JWT>`.
 * Never trust client-supplied X-User-Id alone.
 */
export async function requireAuthUser(
  request: Request
): Promise<AuthUser | Response> {
  const header = request.headers.get("Authorization");
  if (!header?.startsWith("Bearer ")) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = header.slice("Bearer ".length).trim();
  if (!token) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const keys = getJwks();
  if (!keys) {
    return Response.json(
      { error: "Auth is not configured on the server" },
      { status: 500 }
    );
  }

  try {
    const { payload } = await jwtVerify(token, keys, {
      // Neon JWTs may use various issuers; require a subject.
    });
    const userId =
      (typeof payload.sub === "string" && payload.sub) ||
      (typeof payload.userId === "string" && payload.userId) ||
      (typeof payload.user_id === "string" && payload.user_id) ||
      null;

    if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    return { userId };
  } catch {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export function isAuthUser(
  value: AuthUser | Response
): value is AuthUser {
  return typeof value === "object" && value !== null && "userId" in value;
}
