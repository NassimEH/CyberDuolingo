import { getLevelProgress, xpRequiredForLevel, XP_PER_LEVEL } from "@/data/achievements";

export { getLevelProgress, xpRequiredForLevel, XP_PER_LEVEL };

export function todayKey(d = new Date()): string {
  return d.toISOString().slice(0, 10);
}

export function daysBetween(a: string, b: string): number {
  const ms = Date.parse(b) - Date.parse(a);
  return Math.round(ms / (24 * 60 * 60 * 1000));
}
