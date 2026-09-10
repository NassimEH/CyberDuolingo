import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import type { StateStorage } from "zustand/middleware";

const memory = new Map<string, string>();

/**
 * Zustand storage that is safe during Expo web/SSR export
 * (AsyncStorage web impl touches `window`).
 */
export const persistStorage: StateStorage = {
  getItem: (name) => {
    if (Platform.OS === "web" && typeof window === "undefined") {
      return memory.get(name) ?? null;
    }
    return AsyncStorage.getItem(name);
  },
  setItem: (name, value) => {
    if (Platform.OS === "web" && typeof window === "undefined") {
      memory.set(name, value);
      return;
    }
    return AsyncStorage.setItem(name, value);
  },
  removeItem: (name) => {
    if (Platform.OS === "web" && typeof window === "undefined") {
      memory.delete(name);
      return;
    }
    return AsyncStorage.removeItem(name);
  },
};
