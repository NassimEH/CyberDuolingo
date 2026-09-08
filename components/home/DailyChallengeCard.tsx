import { Zap } from "@/constants/icons";
import { fontFamily, radius } from "@/constants/theme";
import type { Challenge } from "@/data/challenges";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useLearningStore } from "@/store/learningStore";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  challenge: Challenge;
  onPress: () => void;
};

export function DailyChallengeCard({ challenge, onPress }: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const done = useLearningStore((s) =>
    s.completedChallengeIds.includes(challenge.id)
  );

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: colors.neutral.card,
          borderColor: done ? colors.semantic.success : colors.neutral.border,
        },
      ]}
    >
      <View style={styles.row}>
        <Zap size={20} color={colors.neutral.textPrimary} />
        <View style={{ flex: 1 }}>
          <Text
            style={[styles.eyebrow, { color: colors.neutral.textSecondary }]}
          >
            {t("home.dailyChallenge")}
          </Text>
          <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
            {L(challenge.title)}
          </Text>
          <Text style={[styles.meta, { color: colors.primary.blue }]}>
            {done
              ? t("home.dailyChallengeDone")
              : `+${challenge.xpBonus} XP · ${L(challenge.description)}`}
          </Text>
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
    marginBottom: 16,
  },
  row: { flexDirection: "row", gap: 12, alignItems: "flex-start" },
  eyebrow: { fontFamily: fontFamily.regular, fontSize: 11, marginBottom: 2 },
  title: { fontFamily: fontFamily.semiBold, fontSize: 15 },
  meta: { fontFamily: fontFamily.regular, fontSize: 12, marginTop: 4 },
});
