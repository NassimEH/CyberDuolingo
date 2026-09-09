import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { AchievementId } from "@/data/achievements";
import type { AnswerVerdict } from "@/data/labScenarios";
import { LESSON_SKILL, type SkillId } from "@/data/skills";
import { todayDateKey } from "@/lib/labEngine";
import { daysBetween, todayKey } from "@/lib/level";
import type { LocalizedString } from "@/lib/i18n/translations";

export type ActivityLogType =
  | "lesson_complete"
  | "xp"
  | "quiz_miss"
  | "challenge_complete"
  | "lab_complete"
  | "tip";

export interface ActivityLog {
  id: string;
  type: ActivityLogType;
  message: { fr: string; en: string };
  createdAt: string;
  meta?: Record<string, string | number>;
}

export type LabAnswerRecord = {
  stepId: string;
  userText: string;
  choiceId: string | null;
  verdict: AnswerVerdict;
  explanation: LocalizedString;
  expectedAnswer: LocalizedString;
  tutorReply: LocalizedString;
};

export type LabSessionProgress = {
  stepId: string;
  answers: LabAnswerRecord[];
};

/** Local daily quota — replace with backend gate later. */
export const DAILY_LAB_LIMIT = 2;

export const DAILY_GOAL_OPTIONS = [10, 20, 50] as const;
export type DailyGoalOption = (typeof DAILY_GOAL_OPTIONS)[number];

interface LearningState {
  xpToday: number;
  dailyGoal: number;
  totalXP: number;
  streak: number;
  streakFreezes: number;
  lastActiveDate: string | null;
  completedLessonIds: string[];
  unlockedAchievementIds: AchievementId[];
  reviewQuestionIds: string[];
  activityLogs: ActivityLog[];
  activeDays: string[];
  completedChallengeIds: string[];
  completedLabIds: string[];
  /** Labs finished with only correct answers (may or may not have earned XP). */
  perfectLabIds: string[];
  /** Labs that already granted XP (never grant twice). */
  rewardedLabIds: string[];
  startedLabIds: string[];
  labSessions: Record<string, LabSessionProgress>;
  /** YYYY-MM-DD of the daily lab counter. */
  labsDayKey: string | null;
  /** Lab ids that consumed a daily start slot today. */
  labsStartedToday: string[];
  activitySeenAt: string | null;
  skillXP: Partial<Record<SkillId, number>>;
  /** True after XP crosses dailyGoal until the user dismisses the celebration. */
  pendingGoalCelebration: boolean;
  setDailyGoal: (goal: number) => void;
  acknowledgeGoalCelebration: () => void;
  addXP: (amount: number, opts?: { silent?: boolean; skillId?: SkillId }) => void;
  completeLesson: (
    lessonId: string,
    opts?: { perfect?: boolean; modulePercent?: number; title?: { fr: string; en: string } }
  ) => void;
  recordQuizAnswer: (activityId: string, correct: boolean) => void;
  completeChallenge: (challengeId: string, xpBonus: number, skillId: SkillId) => void;
  /** Returns false if daily limit reached (new starts only). */
  startLab: (labId: string) => boolean;
  setLabSession: (labId: string, progress: LabSessionProgress) => void;
  clearLabSession: (labId: string) => void;
  finishLab: (
    labId: string,
    opts: { perfect: boolean; xpBonus: number }
  ) => { awardedXp: number };
  getDailyLabUsage: () => { used: number; limit: number; remaining: number };
  pushLog: (log: Omit<ActivityLog, "id" | "createdAt">) => void;
  touchStreak: () => void;
  markActivitySeen: () => void;
  clearAllLocalData: () => void;
}

const MAX_LOGS = 30;
const MAX_ACTIVE_DAYS = 120;

function unlock(
  current: AchievementId[],
  ids: AchievementId[]
): AchievementId[] {
  const set = new Set(current);
  for (const id of ids) set.add(id);
  return Array.from(set);
}

function computeAchievements(state: {
  completedLessonIds: string[];
  streak: number;
  totalXP: number;
  unlockedAchievementIds: AchievementId[];
  perfect?: boolean;
  modulePercent?: number;
}): AchievementId[] {
  const next: AchievementId[] = [];
  if (state.completedLessonIds.length >= 1) next.push("first_lesson");
  if (state.streak >= 3) next.push("streak_3");
  if (state.streak >= 7) next.push("streak_7");
  if (state.totalXP >= 100) next.push("xp_100");
  if ((state.modulePercent ?? 0) >= 50) next.push("module_50");
  if (state.perfect) next.push("perfect_quiz");
  return unlock(state.unlockedAchievementIds, next);
}

function withActiveDay(activeDays: string[]): string[] {
  const today = todayKey();
  if (activeDays.includes(today)) return activeDays;
  return [today, ...activeDays].slice(0, MAX_ACTIVE_DAYS);
}

function applyStreak(state: LearningState): Partial<LearningState> {
  const today = todayKey();
  const activeDays = withActiveDay(state.activeDays);
  if (state.lastActiveDate === today) {
    return { activeDays };
  }
  if (!state.lastActiveDate) {
    return {
      lastActiveDate: today,
      streak: Math.max(state.streak, 1),
      activeDays,
    };
  }
  const gap = daysBetween(state.lastActiveDate, today);
  if (gap === 1) {
    return { lastActiveDate: today, streak: state.streak + 1, activeDays };
  }
  if (gap === 2 && state.streakFreezes > 0) {
    return {
      lastActiveDate: today,
      streak: state.streak + 1,
      streakFreezes: state.streakFreezes - 1,
      activeDays,
    };
  }
  if (gap > 1) {
    return { lastActiveDate: today, streak: 1, activeDays };
  }
  return { lastActiveDate: today, activeDays };
}

function prependLog(
  logs: ActivityLog[],
  entry: Omit<ActivityLog, "id" | "createdAt">
): ActivityLog[] {
  const full: ActivityLog = {
    ...entry,
    id: `log-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
  };
  return [full, ...logs].slice(0, MAX_LOGS);
}

function bumpSkill(
  skillXP: Partial<Record<SkillId, number>>,
  skillId: SkillId | undefined,
  amount: number
) {
  if (!skillId) return skillXP;
  return {
    ...skillXP,
    [skillId]: (skillXP[skillId] ?? 0) + amount,
  };
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set, get) => ({
      xpToday: 0,
      dailyGoal: 20,
      totalXP: 0,
      streak: 0,
      streakFreezes: 1,
      lastActiveDate: null,
      completedLessonIds: [],
      unlockedAchievementIds: [],
      reviewQuestionIds: [],
      activityLogs: [],
      activeDays: [],
      completedChallengeIds: [],
      completedLabIds: [],
      perfectLabIds: [],
      rewardedLabIds: [],
      startedLabIds: [],
      labSessions: {},
      labsDayKey: null,
      labsStartedToday: [],
      activitySeenAt: null,
      skillXP: {},
      pendingGoalCelebration: false,
      setDailyGoal: (goal) =>
        set((state) => {
          const next = DAILY_GOAL_OPTIONS.includes(goal as DailyGoalOption)
            ? goal
            : state.dailyGoal;
          return {
            dailyGoal: next,
            pendingGoalCelebration:
              state.xpToday >= next ? false : state.pendingGoalCelebration,
          };
        }),
      acknowledgeGoalCelebration: () => set({ pendingGoalCelebration: false }),
      markActivitySeen: () =>
        set({ activitySeenAt: new Date().toISOString() }),
      getDailyLabUsage: () => {
        const state = get();
        const today = todayDateKey();
        const used =
          state.labsDayKey === today ? state.labsStartedToday.length : 0;
        return {
          used,
          limit: DAILY_LAB_LIMIT,
          remaining: Math.max(0, DAILY_LAB_LIMIT - used),
        };
      },
      startLab: (labId) => {
        const state = get();
        const today = todayDateKey();
        const dayIds =
          state.labsDayKey === today ? [...state.labsStartedToday] : [];
        const isResumeOrReplay =
          state.startedLabIds.includes(labId) ||
          state.completedLabIds.includes(labId) ||
          dayIds.includes(labId);

        if (isResumeOrReplay) {
          if (
            !state.startedLabIds.includes(labId) &&
            !state.completedLabIds.includes(labId)
          ) {
            set({ startedLabIds: [...state.startedLabIds, labId] });
          }
          return true;
        }

        if (dayIds.length >= DAILY_LAB_LIMIT) {
          return false;
        }

        set({
          startedLabIds: [...state.startedLabIds, labId],
          labsDayKey: today,
          labsStartedToday: [...dayIds, labId],
        });
        return true;
      },
      setLabSession: (labId, progress) =>
        set((state) => ({
          labSessions: { ...state.labSessions, [labId]: progress },
        })),
      clearLabSession: (labId) =>
        set((state) => {
          const { [labId]: _removed, ...labSessions } = state.labSessions;
          return { labSessions };
        }),
      pushLog: (log) =>
        set((state) => ({
          activityLogs: prependLog(state.activityLogs, log),
        })),
      touchStreak: () => set((state) => ({ ...state, ...applyStreak(state) })),
      addXP: (amount, opts) =>
        set((state) => {
          const streakPatch = applyStreak(state);
          const totalXP = state.totalXP + amount;
          const xpToday = state.xpToday + amount;
          const crossedGoal =
            state.dailyGoal > 0 &&
            state.xpToday < state.dailyGoal &&
            xpToday >= state.dailyGoal;
          const skillXP = bumpSkill(state.skillXP, opts?.skillId, amount);
          const merged = { ...state, ...streakPatch, totalXP, xpToday };
          const logs = opts?.silent
            ? state.activityLogs
            : prependLog(state.activityLogs, {
                type: "xp",
                message: {
                  fr: `+${amount} XP`,
                  en: `+${amount} XP`,
                },
                meta: { amount },
              });
          return {
            ...streakPatch,
            totalXP,
            xpToday,
            skillXP,
            activityLogs: logs,
            pendingGoalCelebration:
              crossedGoal || state.pendingGoalCelebration,
            unlockedAchievementIds: computeAchievements(merged),
          };
        }),
      completeLesson: (lessonId, opts) =>
        set((state) => {
          const streakPatch = applyStreak(state);
          const already = state.completedLessonIds.includes(lessonId);
          const completedLessonIds = already
            ? state.completedLessonIds
            : [...state.completedLessonIds, lessonId];
          const skillId = LESSON_SKILL[lessonId];
          const skillXP = already
            ? state.skillXP
            : bumpSkill(state.skillXP, skillId, 10);
          const title = opts?.title ?? {
            fr: "Leçon terminée",
            en: "Lesson complete",
          };
          const logs = already
            ? state.activityLogs
            : prependLog(state.activityLogs, {
                type: "lesson_complete",
                message: {
                  fr: `Leçon terminée · ${title.fr}`,
                  en: `Lesson complete · ${title.en}`,
                },
                meta: { lessonId },
              });
          const merged = {
            ...state,
            ...streakPatch,
            completedLessonIds,
            perfect: opts?.perfect,
            modulePercent: opts?.modulePercent,
          };
          return {
            ...streakPatch,
            completedLessonIds,
            skillXP,
            activityLogs: logs,
            unlockedAchievementIds: computeAchievements(merged),
          };
        }),
      recordQuizAnswer: (activityId, correct) =>
        set((state) => {
          if (correct) {
            return {
              reviewQuestionIds: state.reviewQuestionIds.filter(
                (id) => id !== activityId
              ),
            };
          }
          if (state.reviewQuestionIds.includes(activityId)) return {};
          return {
            reviewQuestionIds: [...state.reviewQuestionIds, activityId],
            activityLogs: prependLog(state.activityLogs, {
              type: "quiz_miss",
              message: {
                fr: "Notion à revoir (quiz)",
                en: "Concept to review (quiz)",
              },
              meta: { activityId },
            }),
          };
        }),
      completeChallenge: (challengeId, xpBonus, skillId) =>
        set((state) => {
          if (state.completedChallengeIds.includes(challengeId)) return {};
          const streakPatch = applyStreak(state);
          const totalXP = state.totalXP + xpBonus;
          const xpToday = state.xpToday + xpBonus;
          const crossedGoal =
            state.dailyGoal > 0 &&
            state.xpToday < state.dailyGoal &&
            xpToday >= state.dailyGoal;
          return {
            ...streakPatch,
            completedChallengeIds: [...state.completedChallengeIds, challengeId],
            totalXP,
            xpToday,
            skillXP: bumpSkill(state.skillXP, skillId, xpBonus),
            pendingGoalCelebration:
              crossedGoal || state.pendingGoalCelebration,
            activityLogs: prependLog(state.activityLogs, {
              type: "challenge_complete",
              message: {
                fr: `Défi réussi · +${xpBonus} XP`,
                en: `Challenge cleared · +${xpBonus} XP`,
              },
              meta: { challengeId, xpBonus },
            }),
            unlockedAchievementIds: computeAchievements({
              ...state,
              ...streakPatch,
              totalXP,
            }),
          };
        }),
      finishLab: (labId, opts) => {
        let awardedXp = 0;
        set((state) => {
          const streakPatch = applyStreak(state);
          const completedLabIds = state.completedLabIds.includes(labId)
            ? state.completedLabIds
            : [...state.completedLabIds, labId];
          const startedLabIds = state.startedLabIds.filter((id) => id !== labId);
          const { [labId]: _cleared, ...labSessions } = state.labSessions;
          const perfectLabIds =
            opts.perfect && !state.perfectLabIds.includes(labId)
              ? [...state.perfectLabIds, labId]
              : state.perfectLabIds;

          const canReward =
            opts.perfect && !state.rewardedLabIds.includes(labId);
          awardedXp = canReward ? opts.xpBonus : 0;
          const rewardedLabIds = canReward
            ? [...state.rewardedLabIds, labId]
            : state.rewardedLabIds;

          const totalXP = state.totalXP + awardedXp;
          const xpToday = state.xpToday + awardedXp;
          const crossedGoal =
            awardedXp > 0 &&
            state.dailyGoal > 0 &&
            state.xpToday < state.dailyGoal &&
            xpToday >= state.dailyGoal;
          const skillXP =
            awardedXp > 0
              ? bumpSkill(state.skillXP, "labs", awardedXp)
              : state.skillXP;

          const message = opts.perfect
            ? awardedXp > 0
              ? {
                  fr: `Lab réussi · +${awardedXp} XP`,
                  en: `Lab passed · +${awardedXp} XP`,
                }
              : {
                  fr: "Lab réussi (XP déjà attribuée)",
                  en: "Lab passed (XP already awarded)",
                }
            : {
                fr: "Lab terminé sans réussite",
                en: "Lab finished without a pass",
              };

          return {
            ...streakPatch,
            totalXP,
            xpToday,
            completedLabIds,
            perfectLabIds,
            rewardedLabIds,
            startedLabIds,
            labSessions,
            skillXP,
            pendingGoalCelebration:
              crossedGoal || state.pendingGoalCelebration,
            activityLogs: prependLog(state.activityLogs, {
              type: "lab_complete",
              message,
              meta: {
                labId,
                xpBonus: awardedXp,
                perfect: opts.perfect ? 1 : 0,
              },
            }),
          };
        });
        return { awardedXp };
      },
      clearAllLocalData: () =>
        set((state) => ({
          xpToday: 0,
          dailyGoal: 20,
          totalXP: 0,
          streak: 0,
          streakFreezes: 1,
          lastActiveDate: null,
          completedLessonIds: [],
          unlockedAchievementIds: [],
          reviewQuestionIds: [],
          activityLogs: [],
          activeDays: [],
          completedChallengeIds: [],
          completedLabIds: [],
          perfectLabIds: [],
          rewardedLabIds: [],
          startedLabIds: [],
          labSessions: {},
          labsDayKey: null,
          labsStartedToday: [],
          activitySeenAt: null,
          skillXP: {},
          pendingGoalCelebration: false,
        })),
    }),
    {
      name: "learning-storage",
      storage: createJSONStorage(() => AsyncStorage),
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<LearningState>;
        const completedLabIds =
          p.completedLabIds ??
          (p.activityLogs ?? [])
            .filter((l) => l.type === "lab_complete" && l.meta?.labId)
            .map((l) => String(l.meta!.labId));
        return {
          ...current,
          ...p,
          completedLabIds: Array.from(new Set(completedLabIds)),
          perfectLabIds: p.perfectLabIds ?? [],
          rewardedLabIds: p.rewardedLabIds ?? completedLabIds,
          startedLabIds: p.startedLabIds ?? [],
          labSessions: p.labSessions ?? {},
          labsDayKey: p.labsDayKey ?? null,
          labsStartedToday: p.labsStartedToday ?? [],
          activitySeenAt: p.activitySeenAt ?? null,
          pendingGoalCelebration: p.pendingGoalCelebration ?? false,
        };
      },
    }
  )
);

/** True if at least one activity log is newer than the last “seen” timestamp. */
export function hasUnreadActivity(
  logs: ActivityLog[],
  seenAt: string | null
): boolean {
  if (logs.length === 0) return false;
  if (!seenAt) return true;
  return logs.some((log) => log.createdAt > seenAt);
}

// Ensure tip exists for empty feeds (call from UI if needed)
export function ensureTipLog() {
  const state = useLearningStore.getState();
  if (state.activityLogs.length > 0) return;
  state.pushLog({
    type: "tip",
    message: {
      fr: "Termine une leçon ou un défi pour remplir ton fil d’activité.",
      en: "Finish a lesson or challenge to fill your activity feed.",
    },
  });
}
