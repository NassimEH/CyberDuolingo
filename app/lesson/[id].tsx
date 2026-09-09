import { useLocalSearchParams } from "expo-router";

import { RequireAuth } from "@/components/RequireAuth";
import { LessonPlayer } from "@/components/lesson/LessonPlayer";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <RequireAuth>
      <LessonPlayer lessonId={id ?? ""} />
    </RequireAuth>
  );
}
