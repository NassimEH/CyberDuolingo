import { LessonPlayer } from "@/components/lesson/LessonPlayer";

type ExpoGoLessonFallbackProps = {
  lessonId: string;
};

/** @deprecated LessonPlayer is used for all runtimes now */
export function ExpoGoLessonFallback({ lessonId }: ExpoGoLessonFallbackProps) {
  return <LessonPlayer lessonId={lessonId} />;
}
