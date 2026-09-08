import { fontFamily, radius } from "@/constants/theme";
import { getRankProgress } from "@/lib/ranks";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text, View } from "react-native";

import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";

type Props = { totalXP: number };

export function RankBanner({ totalXP }: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const { current, next, percent, xpToNext } = getRankProgress(totalXP);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.neutral.card,
          borderColor: colors.neutral.border,
        },
      ]}
    >
      <Text style={[styles.label, { color: colors.neutral.textSecondary }]}>
        {t("profile.rank")}
      </Text>
      <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
        {L(current.title)}
      </Text>
      <Text style={[styles.punch, { color: colors.neutral.textSecondary }]}>
        {L(current.punchline)}
      </Text>
      {next ? (
        <>
          <Text style={[styles.next, { color: colors.primary.blue }]}>
            {t("profile.nextRank", { rank: L(next.title) })} · {xpToNext} XP
          </Text>
          <AnimatedProgressBar
            progress={percent}
            color={colors.primary.blue}
            trackColor={colors.neutral.border}
            height={6}
            style={{ marginTop: 8 }}
          />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: 14,
    marginBottom: 16,
  },
  label: { fontFamily: fontFamily.regular, fontSize: 11 },
  title: { fontFamily: fontFamily.bold, fontSize: 20, marginTop: 2 },
  punch: { fontFamily: fontFamily.regular, fontSize: 13, marginTop: 4 },
  next: { fontFamily: fontFamily.medium, fontSize: 12, marginTop: 10 },
});
