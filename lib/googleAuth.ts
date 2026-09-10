import type { GoogleAuthRequestConfig } from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import { Platform } from "react-native";

WebBrowser.maybeCompleteAuthSession();

type Extra = {
  googleWebClientId?: string;
  googleIosClientId?: string;
  googleAndroidClientId?: string;
};

function readExtra(): Extra {
  return (Constants.expoConfig?.extra ?? {}) as Extra;
}

/** Public Google OAuth Web Client ID (safe in the app). Same ID as Neon Console. */
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

export function isGoogleNativeConfigured(): boolean {
  if (Platform.OS === "ios") {
    return Boolean(getGoogleIosClientId() || getGoogleWebClientId());
  }
  if (Platform.OS === "android") {
    return Boolean(getGoogleAndroidClientId() || getGoogleWebClientId());
  }
  return Boolean(getGoogleWebClientId());
}

/** Hook config for expo-auth-session Google ID token flow (native). */
export function getGoogleIdTokenAuthConfig(): Partial<GoogleAuthRequestConfig> {
  const web = getGoogleWebClientId();
  const ios = getGoogleIosClientId() || web;
  const android = getGoogleAndroidClientId() || web;
  return {
    webClientId: web || undefined,
    iosClientId: ios || undefined,
    androidClientId: android || undefined,
    clientId: web || ios || android || undefined,
  };
}
