import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const KEY = "stack_apple_access_token";

async function webGet(key: string): Promise<string | null> {
  try {
    if (typeof globalThis.localStorage === "undefined") return null;
    return globalThis.localStorage.getItem(key) ?? null;
  } catch {
    return null;
  }
}

async function webSet(key: string, value: string): Promise<void> {
  try {
    if (typeof globalThis.localStorage === "undefined") return;
    globalThis.localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

async function webDelete(key: string): Promise<void> {
  try {
    if (typeof globalThis.localStorage === "undefined") return;
    globalThis.localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

/** Persist Stack Apple session JWT (never Apple secrets). */
export async function saveAppleAccessToken(token: string): Promise<void> {
  if (Platform.OS === "web") {
    await webSet(KEY, token);
    return;
  }
  await SecureStore.setItemAsync(KEY, token);
}

export async function getAppleAccessToken(): Promise<string | null> {
  if (Platform.OS === "web") {
    return webGet(KEY);
  }
  try {
    return await SecureStore.getItemAsync(KEY);
  } catch {
    return null;
  }
}

export async function clearAppleAccessToken(): Promise<void> {
  if (Platform.OS === "web") {
    await webDelete(KEY);
    return;
  }
  try {
    await SecureStore.deleteItemAsync(KEY);
  } catch {
    /* ignore */
  }
}
