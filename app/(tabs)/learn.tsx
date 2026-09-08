import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LessonCard } from "@/components/LessonCard";
import { ModulePicker } from "@/components/learn/ModulePicker";
import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";
import { MotionView } from "@/components/motion/MotionView";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { LESSONS } from "@/data/lessons";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useLearningStore } from "@/store/learningStore";
import { useTrackStore } from "@/store/trackStore";
import { getSelectedUnit, useUnitStore } from "@/store/unitStore";

export default function LearnScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const selectedTrack = useTrackStore((s) => s.selectedTrack);
  const selectedUnitId = useUnitStore((s) => s.selectedUnitId);
  const completedLessonIds = useLearningStore((s) => s.completedLessonIds);
  const unit = getSelectedUnit(selectedUnitId);
  const lessons = unit.lessonIds
    .map((id) => LESSONS.find((l) => l.id === id))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));
  const done = lessons.filter((l) => completedLessonIds.includes(l.id)).length;
  const percent =
    lessons.length > 0 ? Math.round((done / lessons.length) * 100) : 0;

  if (!selectedTrack) {
    return (
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      >
        <View style={styles.empty}>
          <Text
            style={[styles.emptyText, { color: colors.neutral.textSecondary }]}
          >
            {t("learn.noTrack")}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top"]}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <MotionView index={0} variant="fade">
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Text style={[styles.h2, { color: colors.neutral.textPrimary }]}>
                {t("learn.title")}
              </Text>
              <View
                style={[
                  styles.percentPill,
                  { backgroundColor: colors.soft.blueBg },
                ]}
              >
                <Text
                  style={[styles.percentText, { color: colors.primary.blue }]}
                >
                  {percent}%
                </Text>
              </View>
            </View>
            <ModulePicker />
            {lessons.length > 0 ? (
              <>
                <AnimatedProgressBar
                  progress={percent}
                  color={colors.primary.blue}
                  trackColor={colors.neutral.border}
                  height={8}
                  style={{ marginTop: 12 }}
                />
                <Text
                  style={[styles.progressMeta, { color: colors.primary.blue }]}
                >
                  {t("learn.unitProgress", { done, total: lessons.length })}
                </Text>
              </>
            ) : null}
          </View>
        </MotionView>

        <View style={styles.moduleBlock}>
          <Text
            style={[styles.moduleTitle, { color: colors.neutral.textPrimary }]}
          >
            {L(unit.title)}
          </Text>
        </View>

        <View style={styles.tabs}>
          <View
            style={[
              styles.tabActive,
              { borderBottomColor: colors.primary.blue },
            ]}
          >
            <Text
              style={[styles.tabActiveText, { color: colors.primary.blue }]}
            >
              {t("learn.lessons")}
            </Text>
          </View>
          <View style={styles.tab}>
            <Text
              style={[styles.tabText, { color: colors.neutral.textSecondary }]}
            >
              {t("learn.practice")}
            </Text>
          </View>
        </View>

        {lessons.length === 0 ? (
          <View style={styles.comingSoon}>
            <Text
              style={[
                styles.comingSoonTitle,
                { color: colors.neutral.textPrimary },
              ]}
            >
              {L(unit.title)}
            </Text>
            <Text
              style={[
                styles.comingSoonBody,
                { color: colors.neutral.textSecondary },
              ]}
            >
              {t("learn.moduleComingSoon")}
            </Text>
          </View>
        ) : (
          <View style={styles.list}>
            {lessons.map((lesson, index) => {
              const isCompleted = completedLessonIds.includes(lesson.id);
              const isInProgress =
                !isCompleted &&
                (index === 0 ||
                  completedLessonIds.includes(lessons[index - 1]?.id));
              return (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  index={index}
                  isCompleted={isCompleted}
                  isInProgress={isInProgress}
                  onPress={() => router.push(`/lesson/${lesson.id}`)}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  emptyText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
  header: {
    paddingHorizontal: spacing.screen,
    paddingTop: 16,
    marginBottom: 16,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  h2: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
  },
  percentPill: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  percentText: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },
  progressMeta: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    marginTop: 8,
  },
  moduleBlock: {
    paddingHorizontal: spacing.screen,
    marginBottom: 8,
  },
  moduleTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  tabs: {
    flexDirection: "row",
    paddingHorizontal: spacing.screen,
    marginBottom: 16,
    gap: 24,
  },
  tabActive: {
    paddingBottom: 12,
    borderBottomWidth: 2,
  },
  tabActiveText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
  },
  tab: { paddingBottom: 12 },
  tabText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
  },
  list: {
    paddingHorizontal: spacing.screen,
    gap: 12,
  },
  comingSoon: {
    paddingHorizontal: spacing.screen,
    paddingVertical: 32,
    alignItems: "center",
  },
  comingSoonTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    marginBottom: 8,
    textAlign: "center",
  },
  comingSoonBody: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    textAlign: "center",
  },
});
