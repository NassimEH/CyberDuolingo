import { Bell } from "@/constants/icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DailyChallengeCard } from "@/components/home/DailyChallengeCard";
import { DailyGoalCelebration } from "@/components/home/DailyGoalCelebration";
import { DailyGoalPicker } from "@/components/home/DailyGoalPicker";
import { HomeHero } from "@/components/home/HomeHero";
import { ModuleProgressList } from "@/components/home/ModuleProgressList";
import { ReviewSection } from "@/components/home/ReviewSection";
import { SyncStatusBanner } from "@/components/home/SyncStatusBanner";
import { WeekStrip } from "@/components/home/WeekStrip";
import { MotionView } from "@/components/motion/MotionView";
import { ProgressCard } from "@/components/ProgressCard";
import { images } from "@/constants/images";
import { fontFamily, radius, shadows, spacing } from "@/constants/theme";
import { getLevelProgress } from "@/data/achievements";
import { getDailyChallenge } from "@/data/challenges";
import { LESSONS } from "@/data/lessons";
import { getTrack } from "@/data/tracks";
import { useLocalize, useT } from "@/lib/i18n";
import { posthog } from "@/lib/posthog";
import { useTheme } from "@/lib/useTheme";
import {
  hasUnreadActivity,
  useLearningStore,
} from "@/store/learningStore";
import { useSessionStore } from "@/store/sessionStore";
import { useTrackStore } from "@/store/trackStore";
import { getSelectedUnit, useUnitStore } from "@/store/unitStore";

export default function HomeScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const firstName = useSessionStore((s) => s.firstName);
  const selectedTrack = useTrackStore((s) => s.selectedTrack);
  const selectedUnitId = useUnitStore((s) => s.selectedUnitId);
  const {
    xpToday,
    dailyGoal,
    streak,
    completedLessonIds,
    totalXP,
    reviewQuestionIds,
    activityLogs,
    activitySeenAt,
    activeDays,
    setDailyGoal,
  } = useLearningStore();
  const [goalPickerOpen, setGoalPickerOpen] = useState(false);

  const track = getTrack(selectedTrack);
  const unit = getSelectedUnit(selectedUnitId);
  const displayName = firstName ?? "Learner";
  const { level } = getLevelProgress(totalXP);
  const daily = useMemo(() => getDailyChallenge(), []);
  const unreadHint = hasUnreadActivity(activityLogs, activitySeenAt);

  const lessons = useMemo(
    () =>
      unit.lessonIds
        .map((id) => LESSONS.find((l) => l.id === id))
        .filter((l): l is NonNullable<typeof l> => Boolean(l)),
    [unit]
  );
  const done = lessons.filter((l) => completedLessonIds.includes(l.id)).length;
  const modulePercent =
    lessons.length > 0 ? Math.round((done / lessons.length) * 100) : 0;

  const nextLesson = useMemo(() => {
    return (
      lessons.find((l) => !completedLessonIds.includes(l.id)) ??
      lessons[lessons.length - 1] ??
      null
    );
  }, [lessons, completedLessonIds]);

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <MotionView index={0} variant="fade">
          <View style={styles.header}>
            <SyncStatusBanner />
            <View style={styles.headerTop}>
              <Text
                style={[styles.greeting, { color: colors.neutral.textPrimary }]}
                numberOfLines={1}
              >
                {t("home.greeting")}, {displayName}
              </Text>
              <View style={styles.headerRight}>
                <View style={styles.flamePill}>
                  <Image
                    source={images.streakFlame}
                    style={styles.flameIcon}
                    resizeMode="contain"
                  />
                  <Text
                    style={[
                      styles.flameValue,
                      { color: colors.neutral.textPrimary },
                    ]}
                  >
                    {streak}
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => router.push("/notifications")}
                  style={styles.bellBtn}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                  <Bell size={28} color={colors.neutral.textPrimary} />
                  {unreadHint ? (
                    <View
                      style={[
                        styles.dot,
                        { backgroundColor: colors.primary.blue },
                      ]}
                    />
                  ) : null}
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.metaRow}>
              <View
                style={[
                  styles.levelPill,
                  { backgroundColor: colors.soft.blueBg },
                ]}
              >
                <Text
                  style={[styles.levelText, { color: colors.primary.blue }]}
                >
                  {t("home.level", { level })}
                </Text>
              </View>
            </View>
          </View>
        </MotionView>

        <WeekStrip activeDays={activeDays} />

        {nextLesson ? (
          <HomeHero
            eyebrow={`${t("home.continueLearning")} · ${track ? L(track.name) : "Stack"}`}
            title={L(nextLesson.title)}
            meta={`${nextLesson.estimatedMinutes} ${t("lesson.minutes")} · ${modulePercent}%`}
            ctaLabel={t("home.startLesson")}
            onPress={() => {
              posthog.capture("continue_learning_tapped", {
                track_id: selectedTrack,
                lesson_id: nextLesson.id,
              });
              router.push(`/lesson/${nextLesson.id}`);
            }}
          />
        ) : null}

        <View style={styles.motivation}>
          <View
            style={[
              styles.metricCard,
              {
                backgroundColor: colors.neutral.card,
                borderColor: colors.neutral.border,
              },
            ]}
          >
            <Text
              style={[
                styles.metricValue,
                { color: colors.neutral.textPrimary },
              ]}
            >
              {completedLessonIds.length}
            </Text>
            <Text
              style={[
                styles.metricLabel,
                { color: colors.neutral.textSecondary },
              ]}
            >
              {t("profile.lessons")}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <ProgressCard
              label={t("home.dailyGoal")}
              xpToday={xpToday}
              dailyGoal={dailyGoal}
              onPress={() => setGoalPickerOpen(true)}
            />
          </View>
        </View>

        <DailyChallengeCard
          challenge={daily}
          onPress={() => router.push(`/(tabs)/challenges?focus=${daily.id}`)}
        />

        <ReviewSection reviewQuestionIds={reviewQuestionIds} />

        <ModuleProgressList completedLessonIds={completedLessonIds} />
      </ScrollView>

      <DailyGoalPicker
        visible={goalPickerOpen}
        current={dailyGoal}
        onClose={() => setGoalPickerOpen(false)}
        onSelect={(goal) => {
          setDailyGoal(goal);
          posthog.capture("daily_goal_changed", { daily_goal: goal });
        }}
      />
      <DailyGoalCelebration />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scrollContent: {
    paddingHorizontal: spacing.screen,
    paddingTop: spacing.xs,
    paddingBottom: spacing.tabScrollBottom,
  },
  header: {
    marginBottom: 14,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexShrink: 0,
  },
  greeting: {
    flex: 1,
    fontFamily: fontFamily.bold,
    fontSize: 26,
    lineHeight: 34,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 8,
  },
  levelPill: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  levelText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 12,
  },
  flamePill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  flameIcon: { width: 34, height: 34 },
  flameValue: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
  },
  bellBtn: {
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  dot: {
    position: "absolute",
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  motivation: {
    flexDirection: "row",
    gap: spacing.cardGap,
    marginBottom: spacing.section,
  },
  metricCard: {
    width: 88,
    borderRadius: radius.lg,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    ...shadows.card,
  },
  metricValue: {
    fontFamily: fontFamily.bold,
    fontSize: 28,
  },
  metricLabel: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    marginTop: 2,
  },
});
