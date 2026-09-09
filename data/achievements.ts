import type { LocalizedString } from "@/lib/i18n/translations";
import type { AppIcon } from "@/constants/icons";

export type AchievementId =
  | "first_lesson"
  | "streak_3"
  | "streak_7"
  | "xp_100"
  | "module_50"
  | "perfect_quiz";

export interface Achievement {
  id: AchievementId;
  icon: AppIcon;
  title: LocalizedString;
  description: LocalizedString;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first_lesson",
    icon: "award",
    title: { fr: "Première leçon", en: "First lesson" },
    description: {
      fr: "Termine ta première leçon",
      en: "Complete your first lesson",
    },
  },
  {
    id: "streak_3",
    icon: "flame",
    title: { fr: "3 jours de série", en: "3-day streak" },
    description: {
      fr: "Apprends 3 jours d’affilée",
      en: "Learn 3 days in a row",
    },
  },
  {
    id: "streak_7",
    icon: "flame",
    title: { fr: "Semaine complète", en: "Full week" },
    description: {
      fr: "Maintiens une série de 7 jours",
      en: "Keep a 7-day streak",
    },
  },
  {
    id: "xp_100",
    icon: "zap",
    title: { fr: "100 XP", en: "100 XP" },
    description: {
      fr: "Cumule 100 XP au total",
      en: "Earn 100 total XP",
    },
  },
  {
    id: "module_50",
    icon: "trophy",
    title: { fr: "Mi-parcours", en: "Halfway" },
    description: {
      fr: "Atteins 50 % du module",
      en: "Reach 50% of the module",
    },
  },
  {
    id: "perfect_quiz",
    icon: "sparkles",
    title: { fr: "Quiz parfait", en: "Perfect quiz" },
    description: {
      fr: "Réussis toutes les questions d’une leçon",
      en: "Answer every question correctly in a lesson",
    },
  },
];

/** Base XP to clear level 1 → 2. Each next level costs +XP_LEVEL_STEP more. */
export const XP_BASE_LEVEL = 80;
export const XP_LEVEL_STEP = 20;

/** @deprecated Prefer xpRequiredForLevel — kept for callers expecting a constant. */
export const XP_PER_LEVEL = XP_BASE_LEVEL;

/** XP needed to go from `level` to `level + 1` (1-indexed). */
export function xpRequiredForLevel(level: number): number {
  const safe = Math.max(1, Math.floor(level));
  return XP_BASE_LEVEL + (safe - 1) * XP_LEVEL_STEP;
}

export function getLevelProgress(totalXP: number) {
  let remaining = Math.max(0, Math.floor(totalXP));
  let level = 1;
  let need = xpRequiredForLevel(level);

  while (remaining >= need) {
    remaining -= need;
    level += 1;
    need = xpRequiredForLevel(level);
  }

  const percent = need > 0 ? Math.round((remaining / need) * 100) : 100;
  return {
    level,
    xpIntoLevel: remaining,
    xpForNext: need,
    percent: Math.min(100, Math.max(0, percent)),
  };
}
