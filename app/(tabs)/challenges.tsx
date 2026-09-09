import { Trophy } from "@/constants/icons";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ChallengeCard } from "@/components/challenges/ChallengeCard";
import { ChallengeQuizModal } from "@/components/challenges/ChallengeQuizModal";
import { MotionView } from "@/components/motion/MotionView";
import { SectionHeader } from "@/components/SectionHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { ScreenHeader } from "@/components/ui/ScreenHeader";
import { fontFamily, spacing } from "@/constants/theme";
import {
  getChallenge,
  getChallengeTrackId,
  getChallengesByTrack,
  getDailyChallenge,
  type Challenge,
} from "@/data/challenges";
import { TRACKS } from "@/data/tracks";
import { getTrackLessonIds } from "@/lib/learnProgress";
import { trackEvent } from "@/lib/analytics";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useLearningStore } from "@/store/learningStore";
import type { TrackId } from "@/types/learning";

type TrackFilter = "all" | TrackId;

const AVAILABLE_TRACKS = TRACKS.filter((t) => t.available);

export default function ChallengesScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const params = useLocalSearchParams<{ focus?: string }>();
  const completed = useLearningStore((s) => s.completedChallengeIds);
  const completedLessonIds = useLearningStore((s) => s.completedLessonIds);
  const completeChallenge = useLearningStore((s) => s.completeChallenge);

  const [trackFilter, setTrackFilter] = useState<TrackFilter>("all");
  const [active, setActive] = useState<Challenge | null>(null);

  const daily = useMemo(() => getDailyChallenge(), []);

  useEffect(() => {
    const focus = typeof params.focus === "string" ? params.focus : undefined;
    if (!focus) return;
    const c = focus === daily.id ? daily : getChallenge(focus);
    if (c) openChallenge(c);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- open on focus param only
  }, [params.focus, daily]);

  function resolveChallenge(c: Challenge): Challenge {
    return c.id === daily.id ? daily : c;
  }

  const list = useMemo(
    () => getChallengesByTrack(trackFilter),
    [trackFilter]
  );

  const available = useMemo(
    () => list.filter((c) => !completed.includes(c.id) && c.id !== daily.id),
    [list, completed, daily.id]
  );
  const doneList = useMemo(
    () => list.filter((c) => completed.includes(c.id)),
    [list, completed]
  );

  const doneCount = list.filter((c) => completed.includes(c.id)).length;
  const xpLeft = list
    .filter((c) => !completed.includes(c.id))
    .reduce((sum, c) => sum + c.xpBonus, 0);
  const dailyDone = completed.includes(daily.id);

  const showDaily =
    trackFilter === "all" || getChallengeTrackId(daily) === trackFilter;

  function isLocked(c: Challenge): boolean {
    if (c.id === daily.id) return false;
    const trackId = getChallengeTrackId(c);
    const lessonIds = getTrackLessonIds(trackId);
    return !lessonIds.some((id) => completedLessonIds.includes(id));
  }

  function openChallenge(c: Challenge) {
    if (isLocked(c) && c.id !== daily.id) return;
    const challenge = resolveChallenge(c);
    setActive(challenge);
    trackEvent("challenge_started", {
      challenge_id: challenge.id,
      skill_id: challenge.skillId,
      is_daily: challenge.id === daily.id,
      xp_bonus: challenge.xpBonus,
    });
  }

  function handleQuizComplete(challenge: Challenge, score: number, xp: number) {
    const already = completed.includes(challenge.id);
    if (already) return;
    if (score < 1) {
      trackEvent("challenge_failed", {
        challenge_id: challenge.id,
        skill_id: challenge.skillId,
        score,
        is_daily: challenge.id === daily.id,
      });
      return;
    }
    completeChallenge(challenge.id, xp, challenge.skillId);
    trackEvent("challenge_completed", {
      challenge_id: challenge.id,
      skill_id: challenge.skillId,
      score,
      xp_earned: xp,
      is_daily: challenge.id === daily.id,
    });
  }

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top"]}
    >
      <ScrollView contentContainerStyle={styles.pad}>
        <ScreenHeader
          title={t("tabs.challenges")}
          subtitle={t("challenges.subtitle")}
          icon={<Trophy size={22} color={colors.neutral.textPrimary} />}
          right={
            <Text
              style={[styles.headerProgress, { color: colors.primary.blue }]}
            >
              {doneCount}/{list.length}
            </Text>
          }
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          <TouchableOpacity
            onPress={() => setTrackFilter("all")}
            activeOpacity={0.7}
            style={[
              styles.chip,
              {
                borderColor:
                  trackFilter === "all"
                    ? colors.neutral.textPrimary
                    : colors.neutral.border,
              },
            ]}
          >
            <Text
              style={{
                fontFamily: fontFamily.medium,
                fontSize: 12,
                color:
                  trackFilter === "all"
                    ? colors.neutral.textPrimary
                    : colors.neutral.textSecondary,
              }}
            >
              {t("challenges.filterAll")}
            </Text>
          </TouchableOpacity>
          {AVAILABLE_TRACKS.map((track) => {
            const activeChip = trackFilter === track.id;
            return (
              <TouchableOpacity
                key={track.id}
                onPress={() => setTrackFilter(track.id)}
                activeOpacity={0.7}
                style={[
                  styles.chip,
                  {
                    borderColor: activeChip
                      ? colors.neutral.textPrimary
                      : colors.neutral.border,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: 12,
                    color: activeChip
                      ? colors.neutral.textPrimary
                      : colors.neutral.textSecondary,
                  }}
                >
                  {L(track.shortName)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {showDaily ? (
          <MotionView index={0}>
            <SectionHeader
              title={t("challenges.featured")}
              meta={
                dailyDone
                  ? t("challenges.comeBackTomorrow")
                  : t("challenges.statDailyTodo")
              }
            />
            <ChallengeCard
              challenge={daily}
              completed={dailyDone}
              featured
              onPress={() => openChallenge(daily)}
            />
          </MotionView>
        ) : null}

        {available.length === 0 &&
        doneList.length === 0 &&
        !showDaily ? (
          <View style={{ marginTop: 12, gap: 12 }}>
            <EmptyState title={t("challenges.emptyFilter")} />
            <TouchableOpacity onPress={() => setTrackFilter("all")}>
              <Text
                style={{
                  color: colors.primary.blue,
                  fontFamily: fontFamily.medium,
                  textAlign: "center",
                }}
              >
                {t("challenges.filterAll")}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {available.length > 0 ? (
          <>
            <SectionHeader
              title={t("challenges.available")}
              meta={
                xpLeft > 0
                  ? t("challenges.xpAvailable", { xp: xpLeft })
                  : undefined
              }
            />
            {available.map((c, i) => (
              <MotionView key={c.id} index={i}>
                <ChallengeCard
                  challenge={resolveChallenge(c)}
                  completed={false}
                  locked={isLocked(c)}
                  onPress={() => openChallenge(resolveChallenge(c))}
                />
              </MotionView>
            ))}
          </>
        ) : null}

        {doneList.length > 0 ? (
          <>
            <SectionHeader
              title={t("challenges.completedSection")}
              meta={`${doneList.length}`}
            />
            {doneList.map((c, i) => (
              <MotionView key={c.id} index={i}>
                <ChallengeCard
                  challenge={resolveChallenge(c)}
                  completed
                  onPress={() => openChallenge(resolveChallenge(c))}
                />
              </MotionView>
            ))}
          </>
        ) : null}
      </ScrollView>

      {active ? (
        <ChallengeQuizModal
          challenge={active}
          isReplay={completed.includes(active.id)}
          onClose={() => setActive(null)}
          onComplete={(score, xp) => handleQuizComplete(active, score, xp)}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  pad: { padding: spacing.screen, paddingBottom: spacing.tabScrollBottom },
  headerProgress: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  filters: {
    gap: spacing.chipGap,
    paddingVertical: spacing.sm,
    alignItems: "center",
  },
  chip: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    backgroundColor: "transparent",
  },
});
