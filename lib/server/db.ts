import { neon } from "@neondatabase/serverless";

/**
 * Server-only SQL client (DATABASE_URL). Never import from client components.
 */
export function getServerSql() {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) {
    throw new Error("DATABASE_URL is not configured");
  }
  return neon(url);
}
