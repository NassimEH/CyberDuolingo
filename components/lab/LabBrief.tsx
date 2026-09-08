import { fontFamily, spacing } from "@/constants/theme";
import type { LabScenario } from "@/data/labScenarios";
import { TRACKS } from "@/data/tracks";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  lab: LabScenario;
  onStart: () => void;
  onClose: () => void;
};

export function LabBrief({ lab, onStart, onClose }: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();

  const track = TRACKS.find((tr) => tr.id === lab.trackId);
  const difficulty = lab.difficulty ?? "medium";
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
    <View style={[styles.wrap, { backgroundColor: colors.neutral.background }]}>
      <View style={styles.head}>
        <TouchableOpacity onPress={onClose} hitSlop={12}>
          <Text style={[styles.close, { color: colors.primary.blue }]}>
            {t("lab.backToList")}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.topRow}>
          <Text style={[styles.metaPrimary, { color: difficultyColor }]}>
            {t(difficultyKey)}
          </Text>
          <Text style={[styles.xp, { color: colors.primary.blue }]}>
            +{lab.xpReward} XP
          </Text>
        </View>
        <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
          {L(lab.title)}
        </Text>
        {track ? (
          <Text style={[styles.track, { color: colors.neutral.textSecondary }]}>
            {L(track.shortName)}
          </Text>
        ) : null}
        <Text style={[styles.objective, { color: colors.neutral.textPrimary }]}>
          {lab.objective ? L(lab.objective) : L(lab.subtitle)}
        </Text>
        <Text style={[styles.hint, { color: colors.neutral.textSecondary }]}>
          {L(lab.subtitle)}
        </Text>
      </View>

      <View style={styles.footer}>
        <PrimaryButton label={t("lab.briefStart")} onPress={onStart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    padding: spacing.screen,
  },
  head: {
    marginBottom: 24,
  },
  close: {
    fontFamily: fontFamily.medium,
    fontSize: 15,
  },
  body: {
    flex: 1,
    alignItems: "flex-start",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
  },
  metaPrimary: {
    fontFamily: fontFamily.semiBold,
    fontSize: 12,
  },
  xp: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    lineHeight: 24,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
  },
  track: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    marginTop: 8,
  },
  objective: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
  },
  hint: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
  },
  footer: {
    paddingBottom: 8,
  },
});
