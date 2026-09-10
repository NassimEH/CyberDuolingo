import { getServerSql } from "@/lib/server/db";

/**
 * GET /api/auth/google/diag
 * Runtime checks for Google OAuth on EAS Hosting (no secrets leaked).
 */
export async function GET() {
  const clientId =
    process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID?.trim() ||
    process.env.GOOGLE_WEB_CLIENT_ID?.trim() ||
    "";
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim() || "";
  const apiBase = process.env.EXPO_PUBLIC_API_BASE_URL?.trim().replace(/\/$/, "") || "";
  const databaseUrl = process.env.DATABASE_URL?.trim() || "";
  const stackSecret = process.env.STACK_SESSION_SECRET?.trim() || "";

  let dbOk = false;
  let dbError: string | null = null;
  let tableOk = false;
  let tableError: string | null = null;

  if (databaseUrl) {
    try {
      const sql = getServerSql();
      await sql`SELECT 1 AS ok`;
      dbOk = true;
      try {
        await sql`
          CREATE TABLE IF NOT EXISTS public.google_oauth_tickets (
            id TEXT PRIMARY KEY,
            id_token TEXT NOT NULL,
            expires_at TIMESTAMPTZ NOT NULL
          )
        `;
        tableOk = true;
      } catch (err) {
        tableError = err instanceof Error ? err.message : "table_failed";
      }
    } catch (err) {
      dbError = err instanceof Error ? err.message : "db_failed";
    }
  }

  return Response.json({
    hasGoogleClientId: Boolean(clientId),
    googleClientIdSuffix: clientId ? clientId.slice(-24) : null,
    hasGoogleClientSecret: Boolean(clientSecret),
    googleClientSecretLen: clientSecret.length,
    hasApiBaseUrl: Boolean(apiBase),
    redirectUri: apiBase ? `${apiBase}/api/auth/google/callback` : null,
    hasDatabaseUrl: Boolean(databaseUrl),
    hasStackSessionSecret: Boolean(stackSecret),
    dbOk,
    dbError,
    tableOk,
    tableError,
  });
}
