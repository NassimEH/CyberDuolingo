import earth from "@/assets/images/earth.png";
import brandLogo from "@/assets/images/logo-stack.png";
import mascotAuth from "@/assets/images/mascot-auth.png";
import palace from "@/assets/images/palace.png";
import streakFlame from "@/assets/images/streak-flame.png";
import treasure from "@/assets/images/treasure.png";
import { Asset } from "expo-asset";

/** Hedgehog mascot used in auth / welcome illustrations. */
const mascot = mascotAuth;

export const images = {
  earth,
  /** Official Stack mark (stores, splash, headers). */
  brandLogo,
  mascotAuth: mascot,
  mascotWelcome: mascot,
  /** @deprecated Prefer `brandLogo` — kept for existing call sites. */
  mascotLogo: brandLogo,
  palace,
  streakFlame,
  treasure,
} as const;

/** Decode critical brand assets before first screen paint. */
export async function preloadCriticalImages() {
  await Asset.loadAsync([
    require("@/assets/images/logo-stack.png"),
    require("@/assets/images/mascot-auth.png"),
  ]);
}
