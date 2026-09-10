import Constants from "expo-constants";
import { Platform } from "react-native";

/**
 * Base URL for Stack Expo API routes (`/api/auth/apple`, `/api/sync`, …).
 * Production: set EXPO_PUBLIC_API_BASE_URL to your EAS Hosting / deployed origin.
 * Dev: falls back to the Metro host from Expo.
 */
export function getApiBaseUrl(): string {
  const configured =
    process.env.EXPO_PUBLIC_API_BASE_URL?.trim() ||
    (
      Constants.expoConfig?.extra as { apiBaseUrl?: string } | undefined
    )?.apiBaseUrl?.trim();

  if (configured) {
    return configured.replace(/\/$/, "");
  }

  const hostUri = Constants.expoConfig?.hostUri;
  if (hostUri) {
    const protocol = Platform.OS === "web" ? "http" : "http";
    return `${protocol}://${hostUri}`;
  }

  if (Platform.OS === "web" && typeof window !== "undefined") {
    return window.location.origin;
  }

  return "http://localhost:8081";
}

export async function apiFetch(
  path: string,
  init: RequestInit & { accessToken?: string | null } = {}
): Promise<Response> {
  const { accessToken, headers, ...rest } = init;
  const url = `${getApiBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;
  const nextHeaders = new Headers(headers);
  if (!nextHeaders.has("Content-Type") && rest.body) {
    nextHeaders.set("Content-Type", "application/json");
  }
  if (accessToken) {
    nextHeaders.set("Authorization", `Bearer ${accessToken}`);
  }
  return fetch(url, { ...rest, headers: nextHeaders });
}
