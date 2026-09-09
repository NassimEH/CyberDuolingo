import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LearnModuleComplete } from "@/components/learn/LearnModuleComplete";
import { LearnModuleExtras } from "@/components/learn/LearnModuleExtras";
import { LessonPath, type LessonPathItem } from "@/components/learn/LessonPath";
import { ModulePicker } from "@/components/learn/ModulePicker";
import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";
import { MotionView } from "@/components/motion/MotionView";
import { fontFamily, spacing } from "@/constants/theme";
import { LESSONS } from "@/data/lessons";
import { getTrack } from "@/data/tracks";
import { useLocalize, useT } from "@/lib/i18n";
import {
  getContentModulesForTrack,
  getNextTrackModule,
  getTrackLessonIds,
} from "@/lib/learnProgress";
import { useTheme } from "@/lib/useTheme";
import { useLearningStore } from "@/store/learningStore";
import { useTrackStore } from "@/store/trackStore";
import { useUnitStore } from "@/store/unitStore";
import type { Unit } from "@/types/learning";

type LessonFilter = "all" | "todo" | "done";

export default function LearnScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const selectedTrack = useTrackStore((s) => s.selectedTrack);
  const setSelectedTrack = useTrackStore((s) => s.setSelectedTrack);
  const setSelectedUnitId = useUnitStore((s) => s.setSelectedUnitId);
  const completedLessonIds = useLearningStore((s) => s.completedLessonIds);
  const [filter, setFilter] = useState<LessonFilter>("all");

  const track = getTrack(selectedTrack);
  const trackModules = useMemo(
    () => (selectedTrack ? getContentModulesForTrack(selectedTrack) : []),
    [selectedTrack]
  );

  const lessons = useMemo(() => {
    if (!selectedTrack) return [];
    return getTrackLessonIds(selectedTrack)
      .map((id) => LESSONS.find((l) => l.id === id))
      .filter((l): l is NonNullable<typeof l> => Boolean(l));
  }, [selectedTrack]);

  const moduleUnit: Unit | null = useMemo(() => {
    if (!selectedTrack || !track || trackModules.length === 0) return null;
    const first = trackModules[0];
    return {
      id: `track-${selectedTrack}`,
      trackId: selectedTrack,
      title: track.name,
      description: first.description,
      order: 0,
      lessonIds: trackModules.flatMap((u) => u.lessonIds),
      progressColor: track.color,
    };
  }, [selectedTrack, track, trackModules]);

  const pathItems: LessonPathItem[] = useMemo(
    () =>
      lessons.map((lesson, index) => {
        const isCompleted = completedLessonIds.includes(lesson.id);
        const isUnlocked =
          index === 0 ||
          completedLessonIds.includes(lessons[index - 1]?.id ?? "");
        const isLocked = !isCompleted && !isUnlocked;
        const isInProgress = !isCompleted && isUnlocked;
        return { lesson, index, isCompleted, isInProgress, isLocked };
      }),
    [lessons, completedLessonIds]
  );

  const filteredItems = useMemo(() => {
    switch (filter) {
      case "todo":
        return pathItems.filter((i) => !i.isCompleted);
      case "done":
        return pathItems.filter((i) => i.isCompleted);
      case "all":
        return pathItems;
      default: {
        const _exhaustive: never = filter;
        return _exhaustive;
      }
    }
  }, [filter, pathItems]);

  const done = pathItems.filter((i) => i.isCompleted).length;
  const percent =
    lessons.length > 0 ? Math.round((done / lessons.length) * 100) : 0;
  const nextModule = useMemo(
    () => (selectedTrack ? getNextTrackModule(selectedTrack) : null),
    [selectedTrack]
  );

  const minutesLeft = lessons
    .filter((l) => !completedLessonIds.includes(l.id))
    .reduce((sum, l) => sum + l.estimatedMinutes, 0);
  const xpTotal = lessons.reduce((sum, l) => sum + l.xpReward, 0);
  const xpEarned = lessons
    .filter((l) => completedLessonIds.includes(l.id))
    .reduce((sum, l) => sum + l.xpReward, 0);

  function goNextModule() {
    if (!nextModule) return;
    setSelectedUnitId(nextModule.id);
    setSelectedTrack(nextModule.trackId);
  }

  if (!selectedTrack || !moduleUnit) {
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
        contentContainerStyle={{ paddingBottom: spacing.tabScrollBottom }}
        showsVerticalScrollIndicator={false}
      >
        <MotionView index={0} variant="fade">
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Text style={[styles.h2, { color: colors.neutral.textPrimary }]}>
                {t("learn.title")}
              </Text>
              {lessons.length > 0 ? (
                <Text
                  style={[styles.percentText, { color: colors.primary.blue }]}
                >
                  {percent}%
                </Text>
              ) : null}
            </View>

            <ModulePicker />

            <Text
              style={[
                styles.moduleDesc,
                { color: colors.neutral.textSecondary },
              ]}
            >
              {L(moduleUnit.description)}
            </Text>

            {lessons.length > 0 ? (
              <>
                <AnimatedProgressBar
                  progress={percent}
                  color={colors.primary.blue}
                  trackColor={colors.neutral.border}
                  height={6}
                  style={{ marginTop: 14 }}
                />
                <View style={styles.statsRow}>
                  <View style={styles.stat}>
                    <Text
                      style={[
                        styles.statValue,
                        { color: colors.neutral.textPrimary },
                      ]}
                    >
                      {done}/{lessons.length}
                    </Text>
                    <Text
                      style={[
                        styles.statLabel,
                        { color: colors.neutral.textSecondary },
                      ]}
                    >
                      {t("learn.statLessons")}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.statDivider,
                      { backgroundColor: colors.neutral.border },
                    ]}
                  />
                  <View style={styles.stat}>
                    <Text
                      style={[
                        styles.statValue,
                        { color: colors.neutral.textPrimary },
                      ]}
                    >
                      {xpEarned}/{xpTotal}
                    </Text>
                    <Text
                      style={[
                        styles.statLabel,
                        { color: colors.neutral.textSecondary },
                      ]}
                    >
                      {t("learn.statXp")}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.statDivider,
                      { backgroundColor: colors.neutral.border },
                    ]}
                  />
                  <View style={styles.stat}>
                    <Text
                      style={[
                        styles.statValue,
                        { color: colors.neutral.textPrimary },
                      ]}
                    >
                      {minutesLeft} min
                    </Text>
                    <Text
                      style={[
                        styles.statLabel,
                        { color: colors.neutral.textSecondary },
                      ]}
                    >
                      {t("learn.statTime")}
                    </Text>
                  </View>
                </View>
              </>
            ) : null}
          </View>
        </MotionView>

        {percent === 100 && lessons.length > 0 ? (
          <LearnModuleComplete
            xpEarned={xpEarned}
            xpTotal={xpTotal}
            nextModule={nextModule}
            onNext={goNextModule}
          />
        ) : null}

        {lessons.length === 0 ? (
          <View style={styles.comingSoon}>
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
          <>
            <View style={styles.filters}>
              {(
                [
                  ["all", "learn.filterAll"],
                  ["todo", "learn.filterTodo"],
                  ["done", "learn.filterDone"],
                ] as const
              ).map(([id, key]) => {
                const active = filter === id;
                return (
                  <TouchableOpacity
                    key={id}
                    onPress={() => setFilter(id)}
                    activeOpacity={0.7}
                    style={[
                      styles.filterChip,
                      {
                        borderColor: active
                          ? colors.neutral.textPrimary
                          : colors.neutral.border,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        fontFamily: fontFamily.medium,
                        fontSize: 12,
                        color: active
                          ? colors.neutral.textPrimary
                          : colors.neutral.textSecondary,
                      }}
                    >
                      {t(key)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <LessonPath
              items={filteredItems}
              onPressLesson={(id) => router.push(`/lesson/${id}`)}
            />

            <LearnModuleExtras unit={moduleUnit} />
          </>
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
    paddingHorizontal: spacing.screen,
  },
  emptyText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
  header: {
    paddingHorizontal: spacing.screen,
    paddingTop: spacing.md,
    marginBottom: spacing.section,
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
  percentText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  moduleDesc: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 6,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
  stat: {
    flex: 1,
    alignItems: "center",
    gap: 2,
  },
  statValue: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
  statLabel: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
  },
  statDivider: {
    width: StyleSheet.hairlineWidth,
    height: 28,
  },
  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.chipGap,
    paddingHorizontal: spacing.screen,
    marginBottom: 14,
  },
  filterChip: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    backgroundColor: "transparent",
  },
  comingSoon: {
    paddingHorizontal: spacing.screen,
    paddingVertical: 32,
    alignItems: "center",
  },
  comingSoonBody: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    textAlign: "center",
  },
});
