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

export const XP_PER_LEVEL = 100;

export function getLevelProgress(totalXP: number) {
  const level = Math.floor(totalXP / XP_PER_LEVEL) + 1;
  const xpIntoLevel = totalXP % XP_PER_LEVEL;
  const percent = Math.round((xpIntoLevel / XP_PER_LEVEL) * 100);
  return { level, xpIntoLevel, xpForNext: XP_PER_LEVEL, percent };
}
