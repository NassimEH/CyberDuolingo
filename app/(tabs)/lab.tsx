import { Check, MessageCircle } from "@/constants/icons";
import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LabCard } from "@/components/chat/LabCard";
import { LabBrief } from "@/components/lab/LabBrief";
import { LabSession } from "@/components/lab/LabSession";
import { MotionView } from "@/components/motion/MotionView";
import { ScreenHeader } from "@/components/ui/ScreenHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { fontFamily, radius, spacing } from "@/constants/theme";
import {
  getAllLabScenarios,
  type LabScenario,
} from "@/data/labScenarios";
import { TRACKS } from "@/data/tracks";
import { getTrackLessonIds } from "@/lib/learnProgress";
import { useLocalize, useT } from "@/lib/i18n";
import { posthog } from "@/lib/posthog";
import { useTheme } from "@/lib/useTheme";
import { DAILY_LAB_LIMIT, useLearningStore } from "@/store/learningStore";
import type { TrackId } from "@/types/learning";

type TrackFilter = "all" | TrackId;
type LabStatus = "available" | "in_progress" | "completed";

const AVAILABLE_TRACKS = TRACKS.filter((t) => t.available);

function ModuleSectionTitle({
  title,
  meta,
}: {
  title: string;
  meta?: string;
}) {
  const { colors } = useTheme();
  return (
    <View style={styles.headerBlock}>
      <Text style={[styles.sectionTitle, { color: colors.neutral.textPrimary }]}>
        {title}
      </Text>
      {meta ? (
        <Text style={[styles.sectionMeta, { color: colors.neutral.textSecondary }]}>
          {meta}
        </Text>
      ) : null}
    </View>
  );
}

export default function LabScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const completeLabIds = useLearningStore((s) => s.completedLabIds);
  const startedLabIds = useLearningStore((s) => s.startedLabIds);
  const completedLessonIds = useLearningStore((s) => s.completedLessonIds);
  const startLab = useLearningStore((s) => s.startLab);
  const labsDayKey = useLearningStore((s) => s.labsDayKey);
  const labsStartedToday = useLearningStore((s) => s.labsStartedToday);
  const getDailyLabUsage = useLearningStore((s) => s.getDailyLabUsage);

  const [trackFilter, setTrackFilter] = useState<TrackFilter>("all");
  const [briefLab, setBriefLab] = useState<LabScenario | null>(null);
  const [activeLab, setActiveLab] = useState<LabScenario | null>(null);
  const [sessionReplay, setSessionReplay] = useState(false);

  const allScenarios = getAllLabScenarios();

  useEffect(() => {
    posthog.capture("lab_viewed", {
      scenarios: allScenarios.length,
    });
  }, [allScenarios.length]);

  const dailyUsed = useMemo(() => {
    void labsDayKey;
    void labsStartedToday;
    return getDailyLabUsage().used;
  }, [labsDayKey, labsStartedToday, getDailyLabUsage]);

  const scenarios = useMemo(() => {
    if (trackFilter === "all") return allScenarios;
    return allScenarios.filter((s) => s.trackId === trackFilter);
  }, [allScenarios, trackFilter]);

  const inProgress = useMemo(
    () =>
      scenarios.filter(
        (s) =>
          startedLabIds.includes(s.id) && !completeLabIds.includes(s.id)
      ),
    [scenarios, startedLabIds, completeLabIds]
  );

  const sections = useMemo(() => {
    const tracks =
      trackFilter === "all"
        ? AVAILABLE_TRACKS
        : AVAILABLE_TRACKS.filter((tr) => tr.id === trackFilter);

    return tracks
      .map((track) => {
        const labs = scenarios.filter((s) => s.trackId === track.id);
        return { track, labs };
      })
      .filter((s) => s.labs.length > 0);
  }, [scenarios, trackFilter]);

  const doneCount = scenarios.filter((s) =>
    completeLabIds.includes(s.id)
  ).length;

  const isEmpty = scenarios.length === 0;

  function labStatus(lab: LabScenario): LabStatus {
    if (completeLabIds.includes(lab.id)) return "completed";
    if (startedLabIds.includes(lab.id)) return "in_progress";
    return "available";
  }

  function isLocked(lab: LabScenario): boolean {
    if (completeLabIds.includes(lab.id) || startedLabIds.includes(lab.id)) {
      return false;
    }
    const lessonIds = getTrackLessonIds(lab.trackId);
    return !lessonIds.some((id) => completedLessonIds.includes(id));
  }

  function openLab(lab: LabScenario) {
    if (isLocked(lab)) return;
    const status = labStatus(lab);
    if (status === "available") {
      const usage = getDailyLabUsage();
      if (usage.remaining <= 0) {
        Alert.alert(t("lab.dailyLimitTitle"), t("lab.dailyLimitMessage"));
        return;
      }
      setBriefLab(lab);
      return;
    }
    setSessionReplay(status === "completed");
    if (status !== "completed") {
      startLab(lab.id);
    }
    setActiveLab(lab);
  }

  function startFromBrief() {
    if (!briefLab) return;
    const ok = startLab(briefLab.id);
    if (!ok) {
      Alert.alert(t("lab.dailyLimitTitle"), t("lab.dailyLimitMessage"));
      return;
    }
    setSessionReplay(false);
    setActiveLab(briefLab);
    setBriefLab(null);
  }

  function closeSession() {
    setActiveLab(null);
    setBriefLab(null);
  }

  if (briefLab) {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: colors.neutral.background }}
      >
        <LabBrief
          lab={briefLab}
          onStart={startFromBrief}
          onClose={() => setBriefLab(null)}
        />
      </SafeAreaView>
    );
  }

  if (activeLab) {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: colors.neutral.background }}
      >
        <LabSession
          lab={activeLab}
          isReplay={sessionReplay}
          onClose={closeSession}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
      edges={["top"]}
    >
      <ScrollView contentContainerStyle={styles.pad}>
        <ScreenHeader
          title={t("tabs.lab")}
          subtitle={t("lab.subtitle")}
          icon={
            <MessageCircle size={22} color={colors.neutral.textPrimary} />
          }
          right={
            <Text
              style={[styles.headerProgress, { color: colors.primary.blue }]}
            >
              {doneCount}/{scenarios.length}
            </Text>
          }
        />

        <View
          style={[
            styles.dailyCard,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
        >
          <View style={styles.dailyRow}>
            <Text
              style={[styles.dailyLabel, { color: colors.neutral.textPrimary }]}
            >
              {t("lab.dailyLabel")}
            </Text>
            <View style={styles.dailyRight}>
              <Text
                style={[
                  styles.dailyFraction,
                  {
                    color:
                      dailyUsed >= DAILY_LAB_LIMIT
                        ? colors.semantic.warning
                        : colors.neutral.textPrimary,
                  },
                ]}
              >
                <Text style={styles.dailyUsed}>{dailyUsed}</Text>
                <Text style={{ color: colors.neutral.textSecondary }}>
                  {` / ${DAILY_LAB_LIMIT}`}
                </Text>
              </Text>
              {dailyUsed >= DAILY_LAB_LIMIT ? (
                <View
                  style={[
                    styles.dailyCheck,
                    { backgroundColor: "rgba(255, 203, 0, 0.18)" },
                  ]}
                >
                  <Check
                    size={12}
                    color={colors.semantic.warning}
                    strokeWidth={3}
                  />
                </View>
              ) : null}
            </View>
          </View>
          <View
            style={[
              styles.dailyTrack,
              { backgroundColor: colors.neutral.border },
            ]}
          >
            <View
              style={[
                styles.dailyFill,
                {
                  width: `${Math.round(
                    (Math.min(dailyUsed, DAILY_LAB_LIMIT) / DAILY_LAB_LIMIT) *
                      100
                  )}%`,
                  backgroundColor:
                    dailyUsed >= DAILY_LAB_LIMIT
                      ? colors.semantic.warning
                      : colors.primary.blue,
                },
              ]}
            />
          </View>
          {dailyUsed >= DAILY_LAB_LIMIT ? (
            <Text
              style={[styles.dailyHint, { color: colors.neutral.textSecondary }]}
            >
              {t("lab.dailyLimitShort")}
            </Text>
          ) : null}
        </View>

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
              {t("lab.filterAll")}
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

        {isEmpty ? (
          <View style={{ marginTop: 12, gap: 12 }}>
            <EmptyState title={t("lab.emptyFilter")} />
            <TouchableOpacity onPress={() => setTrackFilter("all")}>
              <Text
                style={{
                  color: colors.primary.blue,
                  fontFamily: fontFamily.medium,
                  textAlign: "center",
                }}
              >
                {t("lab.filterAll")}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {inProgress.length > 0 ? (
          <>
            <ModuleSectionTitle title={t("lab.inProgress")} />
            {inProgress.map((lab, i) => (
              <MotionView key={lab.id} index={i}>
                <LabCard
                  lab={lab}
                  status="in_progress"
                  onPress={() => openLab(lab)}
                />
              </MotionView>
            ))}
          </>
        ) : null}

        {sections.map(({ track, labs }) => {
          const incomplete = labs.filter(
            (l) => !completeLabIds.includes(l.id)
          ).length;
          return (
            <View key={track.id} style={{ marginBottom: 8 }}>
              <ModuleSectionTitle
                title={L(track.name)}
                meta={t("lab.sectionMeta", {
                  left: incomplete,
                  total: labs.length,
                })}
              />
              {labs.map((lab, i) => (
                <MotionView key={lab.id} index={i}>
                  <LabCard
                    lab={lab}
                    status={labStatus(lab)}
                    locked={isLocked(lab)}
                    onPress={() => openLab(lab)}
                  />
                </MotionView>
              ))}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pad: { padding: spacing.screen, paddingBottom: spacing.tabScrollBottom },
  headerProgress: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  dailyCard: {
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: spacing.xs,
  },
  dailyRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  dailyLabel: {
    flex: 1,
    fontFamily: fontFamily.medium,
    fontSize: 14,
  },
  dailyRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dailyFraction: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
  dailyUsed: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
  },
  dailyCheck: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  dailyTrack: {
    height: 4,
    borderRadius: 2,
    marginTop: 10,
    overflow: "hidden",
  },
  dailyFill: {
    height: "100%",
    borderRadius: 2,
  },
  dailyHint: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    marginTop: 8,
    lineHeight: 15,
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
  headerBlock: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 14,
    marginTop: spacing.xs,
  },
  sectionTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 22,
    letterSpacing: -0.3,
    flex: 1,
  },
  sectionMeta: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
  },
});
