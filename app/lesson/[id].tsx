import { LessonPlayer } from "@/components/lesson/LessonPlayer";
import { useLocalSearchParams } from "expo-router";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <LessonPlayer lessonId={id ?? ""} />;
}
