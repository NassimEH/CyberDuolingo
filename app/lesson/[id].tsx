import { ExpoGoLessonFallback } from "@/components/lesson/ExpoGoLessonFallback";
import { isExpoGo } from "@/lib/is-expo-go";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState, type ComponentType } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/theme";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [VideoSession, setVideoSession] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (isExpoGo) return;

    let cancelled = false;

    import("@/components/lesson/LessonVideoSession")
      .then((module) => {
        if (!cancelled) {
          setVideoSession(() => module.default);
        }
      })
      .catch(console.error);

    return () => {
      cancelled = true;
    };
  }, []);

  if (isExpoGo) {
    return <ExpoGoLessonFallback lessonId={id ?? ""} />;
  }

  if (!VideoSession) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" color={colors.primary.purple} />
        </View>
      </SafeAreaView>
    );
  }

  return <VideoSession />;
}
