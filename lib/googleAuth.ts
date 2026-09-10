import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";

import { getApiBaseUrl } from "@/lib/api";

WebBrowser.maybeCompleteAuthSession();

type Extra = {
  googleWebClientId?: string;
  googleIosClientId?: string;
  googleAndroidClientId?: string;
};

function readExtra(): Extra {
  return (Constants.expoConfig?.extra ?? {}) as Extra;
}

/** Public Google OAuth Web Client ID (same as Neon Auth → Google). */
export function getGoogleWebClientId(): string {
  return (
    process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID?.trim() ||
    readExtra().googleWebClientId?.trim() ||
    ""
  );
}

export function getGoogleIosClientId(): string {
  return (
    process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID?.trim() ||
    readExtra().googleIosClientId?.trim() ||
    ""
  );
}

export function getGoogleAndroidClientId(): string {
  return (
    process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID?.trim() ||
    readExtra().googleAndroidClientId?.trim() ||
    ""
  );
}

/**
 * HTTPS redirect registered on the Google **Web** OAuth client.
 * Required by Google’s OAuth policy (custom schemes are blocked for Web clients).
 * Must match Google Cloud → Authorized redirect URIs.
 */
export function getGoogleNativeRedirectUri(): string {
  return `${getApiBaseUrl()}/api/auth/google/callback`;
}

/** Google iOS reversed client ID scheme (optional, for future native SDK). */
export function getGoogleIosReversedScheme(): string | null {
  const id = getGoogleIosClientId();
  if (!id.endsWith(".apps.googleusercontent.com")) return null;
  const prefix = id.replace(/\.apps\.googleusercontent\.com$/, "");
  if (!prefix) return null;
  return `com.googleusercontent.apps.${prefix}`;
}
