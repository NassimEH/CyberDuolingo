import { Check, ChevronRight, Lock, Zap } from "@/constants/icons";
import { fontFamily, radius, spacing } from "@/constants/theme";
import type { LabScenario } from "@/data/labScenarios";
import { TRACKS } from "@/data/tracks";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type LabStatus = "available" | "in_progress" | "completed";

type Props = {
  lab: LabScenario;
  status: LabStatus;
  onPress: () => void;
  featured?: boolean;
  locked?: boolean;
};

export function LabCard({
  lab,
  status,
  onPress,
  featured = false,
  locked = false,
}: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();

  const track = TRACKS.find((tr) => tr.id === lab.trackId);
  const difficulty = lab.difficulty ?? "medium";
  const completed = status === "completed";

  const difficultyKey =
    difficulty === "easy"
      ? "lab.difficulty.easy"
      : difficulty === "medium"
        ? "lab.difficulty.medium"
        : "lab.difficulty.hard";

  const difficultyColor =
    difficulty === "easy"
      ? colors.semantic.success
      : difficulty === "medium"
        ? "#D97706"
        : colors.semantic.error;

  return (
    <TouchableOpacity
      activeOpacity={locked ? 1 : 0.85}
      onPress={locked ? undefined : onPress}
      disabled={locked}
      style={[
        styles.card,
        featured && styles.featured,
        {
          backgroundColor: colors.neutral.card,
          borderColor: completed
            ? colors.semantic.success
            : featured
              ? colors.primary.blue
              : colors.neutral.border,
          borderWidth: completed || featured ? 1.5 : 1,
          opacity: locked ? 0.72 : 1,
        },
      ]}
    >
      <View style={styles.topRow}>
        <View style={styles.topLeft}>
          {locked ? (
            <Text
              style={[styles.metaPrimary, { color: colors.neutral.textSecondary }]}
            >
              {t("lab.lockedHint")}
            </Text>
          ) : featured ? (
            <View style={styles.featuredLabel}>
              <Zap size={14} color={colors.primary.blue} strokeWidth={2.5} />
              <Text
                style={[styles.featuredText, { color: colors.primary.blue }]}
              >
                {t("lab.featured")}
              </Text>
            </View>
          ) : status === "in_progress" ? (
            <Text style={[styles.metaPrimary, { color: colors.primary.blue }]}>
              {t("lab.continue")}
            </Text>
          ) : completed ? (
            <Text
              style={[styles.metaPrimary, { color: colors.semantic.success }]}
            >
              {t("lab.doneStatus")}
            </Text>
          ) : (
            <Text style={[styles.metaPrimary, { color: difficultyColor }]}>
              {t(difficultyKey)}
            </Text>
          )}
        </View>
        <Text
          style={[
            featured ? styles.xpFeatured : styles.xpInline,
            { color: colors.primary.blue },
          ]}
        >
          +{lab.xpReward} XP
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyText}>
          <Text
            style={[styles.title, { color: colors.neutral.textPrimary }]}
            numberOfLines={2}
          >
            {L(lab.title)}
          </Text>
          <Text
            style={[styles.desc, { color: colors.neutral.textSecondary }]}
            numberOfLines={featured ? 3 : 2}
          >
            {lab.objective ? L(lab.objective) : L(lab.subtitle)}
          </Text>
          <View style={styles.metaRow}>
            {featured && !completed && !locked ? (
              <Text style={[styles.metaSecondary, { color: difficultyColor }]}>
                {t(difficultyKey)}
              </Text>
            ) : null}
            {featured && !completed && !locked && track ? (
              <Text
                style={[
                  styles.metaDot,
                  { color: colors.neutral.textSecondary },
                ]}
              >
                ·
              </Text>
            ) : null}
            {track && !locked ? (
              <Text
                style={[
                  styles.metaSecondary,
                  { color: colors.neutral.textSecondary },
                ]}
                numberOfLines={1}
              >
                {L(track.shortName)}
              </Text>
            ) : null}
            {completed && !locked ? (
              <View
                style={[
                  styles.replayChip,
                  { borderColor: colors.semantic.success },
                ]}
              >
                <Text
                  style={[
                    styles.replayChipText,
                    { color: colors.semantic.success },
                  ]}
                >
                  {t("lab.replay")}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <View
          style={[
            styles.cta,
            {
              backgroundColor: locked
                ? colors.neutral.border
                : completed
                  ? "transparent"
                  : colors.primary.blue,
              borderWidth: completed ? 1.5 : 0,
              borderColor: completed
                ? colors.semantic.success
                : "transparent",
            },
          ]}
        >
          {locked ? (
            <Lock size={18} color={colors.neutral.textSecondary} />
          ) : completed ? (
            <Check size={18} color={colors.semantic.success} strokeWidth={2.5} />
          ) : (
            <ChevronRight size={18} color="#fff" strokeWidth={2.5} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: 14,
    marginBottom: spacing.cardGap,
  },
  featured: {
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  topLeft: {
    flex: 1,
    paddingRight: 4,
  },
  featuredLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  featuredText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 13,
  },
  metaPrimary: {
    fontFamily: fontFamily.semiBold,
    fontSize: 12,
  },
  xpFeatured: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    lineHeight: 24,
  },
  xpInline: {
    fontFamily: fontFamily.bold,
    fontSize: 15,
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  bodyText: {
    flex: 1,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  desc: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    marginTop: 6,
    lineHeight: 18,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 10,
  },
  metaSecondary: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
  },
  metaDot: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
  },
  replayChip: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginLeft: 2,
  },
  replayChipText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 11,
  },
  cta: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
