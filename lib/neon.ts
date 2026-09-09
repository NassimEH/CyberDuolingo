import { expoClient } from "@better-auth/expo/client";
import { createClient } from "@neondatabase/neon-js";
import { createAuthClient } from "better-auth/react";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

type Extra = {
  neonAuthUrl?: string;
  neonDataApiUrl?: string;
};

const extra = (Constants.expoConfig?.extra ?? {}) as Extra;

export const NEON_AUTH_URL =
  extra.neonAuthUrl ?? process.env.EXPO_PUBLIC_NEON_AUTH_URL ?? "";

export const NEON_DATA_API_URL =
  extra.neonDataApiUrl ?? process.env.EXPO_PUBLIC_NEON_DATA_API_URL ?? "";

/**
 * Neon Managed Auth only trusts http(s) origins (no `stack://` / `expo-origin`).
 * Set EXPO_PUBLIC_AUTH_ORIGIN for production builds; localhost remains the
 * local Expo default (must stay on Neon Auth trusted domains / allow-localhost).
 */
export function getTrustedAuthOrigin(): string {
  const configured =
    process.env.EXPO_PUBLIC_AUTH_ORIGIN ||
    (Constants.expoConfig?.extra as { authOrigin?: string } | undefined)
      ?.authOrigin;
  if (configured && /^https?:\/\//.test(configured)) {
    return configured.replace(/\/$/, "");
  }
  if (Platform.OS === "web" && typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "http://localhost:8081";
}

/** Absolute callback for email auth — avoids "Origin header is required…". */
export function getAuthCallbackURL(): string {
  return `${getTrustedAuthOrigin()}/`;
}

const plugins =
  Platform.OS === "web"
    ? []
    : [
        expoClient({
          scheme: "stack",
          storagePrefix: "stack",
          // Neon Managed Auth cookies are `__Secure-neon-auth.*`, not `better-auth.*`.
          cookiePrefix: "neon-auth",
          storage: SecureStore,
        }),
      ];

/** Better Auth client pointed at Neon Managed Auth (Expo-safe storage). */
export const authClient = createAuthClient({
  baseURL: NEON_AUTH_URL,
  plugins,
  fetchOptions: {
    headers: {
      // Managed Auth has no server-side expo() plugin to map expo-origin → Origin.
      origin: getTrustedAuthOrigin(),
    },
  },
});

/**
 * Neon Auth exposes the Data API JWT on the `set-auth-jwt` response header
 * of `/get-session`. Avoids `jwtClient` (needs crypto.subtle / jose).
 */
export async function getAccessToken(): Promise<string | null> {
  if (!NEON_AUTH_URL) return null;

  try {
    const headers: Record<string, string> = {
      Accept: "application/json",
      origin: getTrustedAuthOrigin(),
    };

    const getCookie = (
      authClient as { getCookie?: () => string | Promise<string> }
    ).getCookie;
    if (Platform.OS !== "web" && typeof getCookie === "function") {
      const cookie = await getCookie();
      if (cookie) {
        headers.cookie = cookie;
      }
    }

    const response = await fetch(`${NEON_AUTH_URL}/get-session`, {
      method: "GET",
      headers,
      credentials: "include",
    });

    const jwt =
      response.headers.get("set-auth-jwt") ??
      response.headers.get("Set-Auth-Jwt");
    if (jwt) return jwt;
  } catch {
    return null;
  }

  return null;
}

/**
 * Data API client. Auth is handled separately via `authClient` so Expo can
 * persist cookies in SecureStore; JWT is injected per request.
 */
export const db = createClient({
  dataApi: {
    url: NEON_DATA_API_URL,
    getToken: getAccessToken,
  },
});

export function isNeonConfigured() {
  return Boolean(NEON_AUTH_URL && NEON_DATA_API_URL);
}
