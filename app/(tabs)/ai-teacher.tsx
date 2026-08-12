import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LessonCard } from "@/components/LessonCard";
import { SectionHeader } from "@/components/SectionHeader";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { LESSONS } from "@/data/lessons";
import { UNITS } from "@/data/units";
import { posthog } from "@/lib/posthog";
import { useLanguageStore } from "@/store/languageStore";
import { useLearningStore } from "@/store/learningStore";
import { Lesson } from "@/types/learning";

const HOW_IT_WORKS = [
  {
    icon: "videocam" as const,
    title: "Live video lesson",
    description: "Talk face-to-face with Luna, your AI teacher.",
    color: colors.primary.purple,
    bg: "#EDE9FE",
  },
  {
    icon: "mic" as const,
    title: "Push to speak",
    description: "Hold the mic button and practice pronunciation.",
    color: colors.primary.blue,
    bg: "#DBEAFE",
  },
  {
    icon: "chatbox-ellipses" as const,
    title: "Real-time captions",
    description: "See every word as you and Luna speak.",
    color: colors.semantic.success,
    bg: "#DCFCE7",
  },
];

export default function AITeacherScreen() {
  const router = useRouter();
  const { selectedLanguage } = useLanguageStore();
  const { completedLessonIds } = useLearningStore();

  const unit = UNITS.find((item) => item.languageCode === selectedLanguage);
  const lessons = unit
    ? (unit.lessonIds
        .map((id) => LESSONS.find((lesson) => lesson.id === id))
        .filter(Boolean) as Lesson[])
    : [];

  const inProgressIndex = lessons.findIndex(
    (lesson) => !completedLessonIds.includes(lesson.id),
  );
  const nextLesson =
    inProgressIndex >= 0 ? lessons[inProgressIndex] : lessons[0] ?? null;

  const topicChips = lessons
    .flatMap((lesson) => lesson.aiTeacherPrompt.topics)
    .slice(0, 6);

  useEffect(() => {
    posthog.capture("ai_teacher_viewed", {
      language: selectedLanguage,
      lessons_available: lessons.length,
    });
  }, [selectedLanguage, lessons.length]);

  function startLesson(lesson: Lesson) {
    posthog.capture("ai_teacher_lesson_started", {
      lesson_id: lesson.id,
      source: "ai_teacher_tab",
    });
    router.push(`/lesson/${lesson.id}`);
  }

  if (!selectedLanguage || !unit) {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: colors.neutral.background }}
      >
        <View className="flex-1 items-center justify-center px-8">
          <Image
            source={images.mascotWelcome}
            contentFit="contain"
            style={{ width: 140, height: 140, marginBottom: 20 }}
          />
          <Text className="h3 text-center mb-2">Choose a language first</Text>
          <Text className="body-md text-text-secondary text-center mb-6">
            Select a language to unlock AI video lessons with Luna.
          </Text>
          <TouchableOpacity
            className="bg-lingua-purple rounded-2xl py-4 px-8"
            activeOpacity={0.85}
            onPress={() => router.push("/language-select")}
          >
            <Text className="font-poppins-semibold text-base text-white">
              Choose language
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View className="flex-row items-center justify-between mb-1">
          <Text className="h2">AI Teacher</Text>
          <View className="flex-row items-center gap-1.5 bg-[#DCFCE7] rounded-full px-3 py-1.5">
            <View className="w-2 h-2 rounded-full bg-success" />
            <Text className="font-poppins-medium text-xs text-success">
              Luna online
            </Text>
          </View>
        </View>
        <Text className="body-md text-text-secondary mb-5">
          Practice speaking with your personal AI tutor
        </Text>

        <View className="flex-row bg-lingua-purple rounded-[20px] h-[170px] mb-6 overflow-hidden">
          <View className="flex-1 py-5 pl-5 pr-2 justify-between">
            <View>
              <Text className="font-poppins text-[11px] text-white/75 mb-0.5">
                Live video lesson
              </Text>
              <Text className="font-poppins-bold text-[22px] text-white leading-7">
                {nextLesson?.title ?? "Start learning"}
              </Text>
              <Text className="font-poppins text-xs text-white/65 mt-0.5">
                {nextLesson
                  ? `${nextLesson.vocabulary.length} words · ${nextLesson.xpReward} XP`
                  : "Pick a lesson below"}
              </Text>
            </View>
            {nextLesson ? (
              <TouchableOpacity
                className="bg-white rounded-xl py-2 px-[22px] self-start flex-row items-center gap-2"
                activeOpacity={0.85}
                onPress={() => startLesson(nextLesson)}
              >
                <Ionicons name="videocam" size={16} color={colors.primary.purple} />
                <Text className="font-poppins-semibold text-[13px] text-lingua-purple">
                  Start lesson
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <Image
            source={images.mascotWelcome}
            contentFit="contain"
            style={{ width: 130, height: 170 }}
          />
        </View>

        {topicChips.length > 0 ? (
          <>
            <SectionHeader title="Quick topics" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.chipsRow}
              className="mb-6"
            >
              {topicChips.map((topic) => (
                <View key={topic} style={styles.chip}>
                  <Text className="font-poppins-medium text-xs text-lingua-purple">
                    {topic}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </>
        ) : null}

        <SectionHeader
          title="Your lessons"
          actionLabel="See all"
          onActionPress={() => router.navigate("/learn")}
        />
        <View className="gap-3 mb-6">
          {lessons.map((lesson, index) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              index={index}
              isCompleted={completedLessonIds.includes(lesson.id)}
              isInProgress={
                !completedLessonIds.includes(lesson.id) &&
                index === inProgressIndex
              }
              onPress={() => startLesson(lesson)}
            />
          ))}
        </View>

        <SectionHeader title="How it works" />
        <View className="gap-3 mb-4">
          {HOW_IT_WORKS.map((step) => (
            <View
              key={step.title}
              className="flex-row items-center bg-white rounded-2xl border border-border p-4"
              style={styles.stepCard}
            >
              <View
                className="w-11 h-11 rounded-xl items-center justify-center"
                style={{ backgroundColor: step.bg }}
              >
                <Ionicons name={step.icon} size={22} color={step.color} />
              </View>
              <View className="flex-1 ml-3">
                <Text className="font-poppins-semibold text-sm text-text-primary mb-0.5">
                  {step.title}
                </Text>
                <Text className="body-sm text-text-secondary">
                  {step.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 100,
  },
  chipsRow: {
    gap: 8,
    paddingRight: 4,
  },
  chip: {
    backgroundColor: "#EDE9FE",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  stepCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
});
