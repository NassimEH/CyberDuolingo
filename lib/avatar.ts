import AsyncStorage from "@react-native-async-storage/async-storage";

function cacheKey(userId: string) {
  return `stack.avatar.${userId}`;
}

export function toAvatarDataUrl(base64: string, mime = "image/jpeg") {
  return `data:${mime};base64,${base64}`;
}

export async function cacheAvatarLocally(userId: string, dataUrl: string) {
  await AsyncStorage.setItem(cacheKey(userId), dataUrl);
}

export async function readCachedAvatar(
  userId: string
): Promise<string | null> {
  return AsyncStorage.getItem(cacheKey(userId));
}

export async function clearCachedAvatar(userId: string) {
  await AsyncStorage.removeItem(cacheKey(userId));
}
