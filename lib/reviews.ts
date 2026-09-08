import { LESSONS } from "@/data/lessons";
import type { LocalizedString } from "@/lib/i18n/translations";

export type ResolvedReview = {
  lessonId: string;
  question: LocalizedString;
};

export function resolveReview(activityId: string): ResolvedReview | null {
  for (const lesson of LESSONS) {
    const activity = lesson.activities.find((a) => a.id === activityId);
    if (activity) {
      return { lessonId: lesson.id, question: activity.question };
    }
  }
  return null;
}

export function getModuleReviews(
  reviewQuestionIds: string[],
  lessonIds: string[],
  limit = 3
) {
  const lessonSet = new Set(lessonIds);
  return reviewQuestionIds
    .map((id) => {
      const resolved = resolveReview(id);
      if (!resolved || !lessonSet.has(resolved.lessonId)) return null;
      return { id, ...resolved };
    })
    .filter((x): x is { id: string } & ResolvedReview => Boolean(x))
    .slice(0, limit);
}
