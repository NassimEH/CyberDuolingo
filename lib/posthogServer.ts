/**
 * Lightweight server-side PostHog capture for Expo API routes.
 * Uses the same POSTHOG_PROJECT_TOKEN / POSTHOG_HOST as the mobile client.
 */
export async function captureServerEvent(
  event: string,
  distinctId: string,
  properties?: Record<string, string | number | boolean | null | undefined>
): Promise<void> {
  const apiKey = process.env.POSTHOG_PROJECT_TOKEN;
  if (!apiKey || apiKey === "phc_your_project_token_here") return;

  const host = (process.env.POSTHOG_HOST || "https://us.i.posthog.com").replace(
    /\/$/,
    ""
  );

  try {
    await fetch(`${host}/capture/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        event,
        distinct_id: distinctId,
        properties: {
          ...properties,
          $lib: "stack-expo-api",
        },
      }),
    });
  } catch {
    // Fire-and-forget — never fail the API because of analytics.
  }
}

export function distinctIdFromRequest(request: Request): string {
  return (
    request.headers.get("X-POSTHOG-DISTINCT-ID") ||
    request.headers.get("X-User-Id") ||
    "anonymous"
  );
}
