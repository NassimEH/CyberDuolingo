import earth from "@/assets/images/earth.png";
import mascotAuth from "@/assets/images/mascot-auth.png";
import palace from "@/assets/images/palace.png";
import streakFlame from "@/assets/images/streak-flame.png";
import treasure from "@/assets/images/treasure.png";
import { Asset } from "expo-asset";

/** Single hedgehog asset — welcome/logo were identical duplicates. */
const mascot = mascotAuth;

export const images = {
  earth,
  mascotAuth: mascot,
  mascotWelcome: mascot,
  mascotLogo: mascot,
  palace,
  streakFlame,
  treasure,
} as const;

/** Decode mascot assets into memory before first screen paint. */
export async function preloadCriticalImages() {
  await Asset.loadAsync([require("@/assets/images/mascot-auth.png")]);
}
