import type { AppIcon } from "@/constants/icons";

/** Default ink color for icons (no colored pills). */
export const ICON_INK = "#0B1220";

/** All app icons use the same ink color. */
export const ICON_COLORS: Record<AppIcon, string> = {
  flame: ICON_INK,
  zap: ICON_INK,
  book: ICON_INK,
  network: ICON_INK,
  layers: ICON_INK,
  locate: ICON_INK,
  search: ICON_INK,
  lock: ICON_INK,
  globe: ICON_INK,
  message: ICON_INK,
  home: ICON_INK,
  award: ICON_INK,
  trophy: ICON_INK,
  sparkles: ICON_INK,
  shield: ICON_INK,
  cloud: ICON_INK,
};

export function getIconColor(
  name: AppIcon,
  fallback: string = ICON_INK
): string {
  return ICON_COLORS[name] ?? fallback;
}
