import { MessageCircle } from "@/constants/icons";
import { useEffect, useMemo, useState } from "react";
import {
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
import { SectionHeader } from "@/components/SectionHeader";
import { fontFamily, spacing } from "@/constants/theme";
import {
  getAllLabScenarios,
  type LabScenario,
} from "@/data/labScenarios";
import { TRACKS } from "@/data/tracks";
import { getTrackLessonIds } from "@/lib/learnProgress";
import { useLocalize, useT } from "@/lib/i18n";
import { posthog } from "@/lib/posthog";
import { useTheme } from "@/lib/useTheme";
import { useLearningStore } from "@/store/learningStore";
import type { TrackId } from "@/types/learning";

type TrackFilter = "all" | TrackId;
type LabStatus = "available" | "in_progress" | "completed";

const AVAILABLE_TRACKS = TRACKS.filter((t) => t.available);

export default function LabScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const completeLabIds = useLearningStore((s) => s.completedLabIds);
  const startedLabIds = useLearningStore((s) => s.startedLabIds);
  const labBeatIndex = useLearningStore((s) => s.labBeatIndex);
  const completedLessonIds = useLearningStore((s) => s.completedLessonIds);
  const startLab = useLearningStore((s) => s.startLab);

  const [trackFilter, setTrackFilter] = useState<TrackFilter>("all");
  const [briefLab, setBriefLab] = useState<LabScenario | null>(null);
  const [activeLab, setActiveLab] = useState<LabScenario | null>(null);
  const [sessionReplay, setSessionReplay] = useState(false);
  const [resumeBeat, setResumeBeat] = useState(0);

  const allScenarios = getAllLabScenarios();

  useEffect(() => {
    posthog.capture("lab_viewed", {
      scenarios: allScenarios.length,
    });
  }, [allScenarios.length]);

  const scenarios = useMemo(() => {
    if (trackFilter === "all") return allScenarios;
    return allScenarios.filter((s) => s.trackId === trackFilter);
  }, [allScenarios, trackFilter]);

  const featured = useMemo(() => {
    return (
      scenarios.find(
        (s) =>
          !completeLabIds.includes(s.id) && !startedLabIds.includes(s.id)
      ) ?? null
    );
  }, [scenarios, completeLabIds, startedLabIds]);

  const inProgress = useMemo(
    () =>
      scenarios.filter(
        (s) =>
          startedLabIds.includes(s.id) && !completeLabIds.includes(s.id)
      ),
    [scenarios, startedLabIds, completeLabIds]
  );

  const available = useMemo(
    () =>
      scenarios.filter(
        (s) =>
          !completeLabIds.includes(s.id) &&
          !startedLabIds.includes(s.id) &&
          s.id !== featured?.id
      ),
    [scenarios, completeLabIds, startedLabIds, featured?.id]
  );

  const completed = useMemo(
    () => scenarios.filter((s) => completeLabIds.includes(s.id)),
    [scenarios, completeLabIds]
  );

  const doneCount = scenarios.filter((s) =>
    completeLabIds.includes(s.id)
  ).length;
  const xpLeft = scenarios
    .filter((s) => !completeLabIds.includes(s.id))
    .reduce((sum, s) => sum + s.xpReward, 0);

  const isEmpty =
    !featured &&
    inProgress.length === 0 &&
    available.length === 0 &&
    completed.length === 0;

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
      setBriefLab(lab);
      return;
    }
    setSessionReplay(status === "completed");
    setResumeBeat(
      status === "in_progress" ? labBeatIndex[lab.id] ?? 0 : 0
    );
    if (status !== "completed") {
      startLab(lab.id);
    }
    setActiveLab(lab);
  }

  function startFromBrief() {
    if (!briefLab) return;
    startLab(briefLab.id);
    setSessionReplay(false);
    setResumeBeat(0);
    setActiveLab(briefLab);
    setBriefLab(null);
  }

  function closeSession() {
    setActiveLab(null);
    setBriefLab(null);
    setResumeBeat(0);
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
          initialBeatIndex={resumeBeat}
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

        {featured ? (
          <MotionView index={0}>
            <SectionHeader title={t("lab.featured")} />
            <LabCard
              lab={featured}
              status={labStatus(featured)}
              featured
              locked={isLocked(featured)}
              onPress={() => openLab(featured)}
            />
          </MotionView>
        ) : null}

        {inProgress.length > 0 ? (
          <>
            <SectionHeader title={t("lab.inProgress")} />
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

        {available.length > 0 ? (
          <>
            <SectionHeader
              title={t("lab.available")}
              meta={
                xpLeft > 0
                  ? t("lab.xpAvailable", { xp: xpLeft })
                  : undefined
              }
            />
            {available.map((lab, i) => (
              <MotionView key={lab.id} index={i}>
                <LabCard
                  lab={lab}
                  status="available"
                  locked={isLocked(lab)}
                  onPress={() => openLab(lab)}
                />
              </MotionView>
            ))}
          </>
        ) : null}

        {completed.length > 0 ? (
          <>
            <SectionHeader title={t("lab.completed")} />
            {completed.map((lab, i) => (
              <MotionView key={lab.id} index={i}>
                <LabCard
                  lab={lab}
                  status="completed"
                  onPress={() => openLab(lab)}
                />
              </MotionView>
            ))}
          </>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pad: { padding: spacing.screen, paddingBottom: 40 },
  headerProgress: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  filters: {
    gap: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  chip: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "transparent",
  },
});
