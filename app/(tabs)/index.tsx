import { Bell } from "@/constants/icons";
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

import { DailyChallengeCard } from "@/components/home/DailyChallengeCard";
import { HomeHero } from "@/components/home/HomeHero";
import { ModuleProgressList } from "@/components/home/ModuleProgressList";
import { NotificationsSheet } from "@/components/home/NotificationsSheet";
import { ReviewSection } from "@/components/home/ReviewSection";
import { MotionView } from "@/components/motion/MotionView";
import { ProgressCard } from "@/components/ProgressCard";
import { fontFamily, radius, shadows, spacing } from "@/constants/theme";
import { getLevelProgress } from "@/data/achievements";
import { getDailyChallenge } from "@/data/challenges";
import { LESSONS } from "@/data/lessons";
import { getTrack } from "@/data/tracks";
import { useLocalize, useT } from "@/lib/i18n";
import { posthog } from "@/lib/posthog";
import { useTheme } from "@/lib/useTheme";
import { useLearningStore } from "@/store/learningStore";
import { useSessionStore } from "@/store/sessionStore";
import { useTrackStore } from "@/store/trackStore";
import { getSelectedUnit, useUnitStore } from "@/store/unitStore";

export default function HomeScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const [notifOpen, setNotifOpen] = useState(false);
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
  } = useLearningStore();

  const track = getTrack(selectedTrack);
  const unit = getSelectedUnit(selectedUnitId);
  const displayName = firstName ?? "Learner";
  const { level } = getLevelProgress(totalXP);
  const daily = useMemo(() => getDailyChallenge(), []);
  const unreadHint = activityLogs.length > 0;

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
            <View style={styles.headerLeft}>
              <Text
                style={[styles.greeting, { color: colors.neutral.textPrimary }]}
              >
                {t("home.greeting")}, {displayName}
              </Text>
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
                <Text
                  style={{
                    color: colors.semantic.streak,
                    fontFamily: fontFamily.semiBold,
                    fontSize: 13,
                  }}
                >
                  {streak} · {track ? L(track.shortName) : "Tech"}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setNotifOpen(true)}
              style={[
                styles.bellBtn,
                {
                  backgroundColor: colors.neutral.card,
                  borderColor: colors.neutral.border,
                },
              ]}
            >
              <Bell size={20} color={colors.neutral.textPrimary} />
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
        </MotionView>

        {nextLesson ? (
          <HomeHero
            eyebrow={`${t("home.continueLearning")} · ${track ? L(track.name) : "Tech"}`}
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
              styles.streakCard,
              {
                backgroundColor: colors.neutral.card,
                borderColor: colors.neutral.border,
              },
            ]}
          >
            <Text
              style={[styles.streakValue, { color: colors.semantic.streak }]}
            >
              {streak}
            </Text>
            <Text
              style={[
                styles.streakLabel,
                { color: colors.neutral.textSecondary },
              ]}
            >
              {t("profile.dayStreak")}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <ProgressCard
              label={t("home.dailyGoal")}
              xpToday={xpToday}
              dailyGoal={dailyGoal}
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

      <NotificationsSheet
        visible={notifOpen}
        onClose={() => setNotifOpen(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scrollContent: {
    paddingHorizontal: spacing.screen,
    paddingTop: 8,
    paddingBottom: 28,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.section,
  },
  headerLeft: { flex: 1, paddingRight: 12 },
  greeting: {
    fontFamily: fontFamily.bold,
    fontSize: 28,
    lineHeight: 34,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 6,
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
  bellBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  dot: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  motivation: {
    flexDirection: "row",
    gap: 10,
    marginBottom: spacing.section,
  },
  streakCard: {
    width: 88,
    borderRadius: radius.lg,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    ...shadows.card,
  },
  streakValue: {
    fontFamily: fontFamily.bold,
    fontSize: 28,
  },
  streakLabel: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    marginTop: 2,
  },
});
