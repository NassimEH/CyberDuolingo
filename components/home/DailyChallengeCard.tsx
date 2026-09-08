import { Check, ChevronRight, Zap } from "@/constants/icons";
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
          backgroundColor: done
            ? "rgba(33,193,107,0.08)"
            : colors.neutral.card,
          borderColor: done ? colors.semantic.success : colors.neutral.border,
        },
      ]}
    >
      <View style={styles.top}>
        <View
          style={[
            styles.badge,
            {
              backgroundColor: done
                ? "rgba(33,193,107,0.15)"
                : colors.soft.blueBg,
            },
          ]}
        >
          {done ? (
            <Check size={14} color={colors.semantic.success} strokeWidth={2.5} />
          ) : (
            <Zap size={14} color={colors.primary.blue} strokeWidth={2.5} />
          )}
          <Text
            style={[
              styles.badgeText,
              {
                color: done ? colors.semantic.success : colors.primary.blue,
              },
            ]}
          >
            {done ? t("home.dailyChallengeDone") : t("home.dailyChallenge")}
          </Text>
        </View>
        {!done ? (
          <View
            style={[
              styles.xpChip,
              { backgroundColor: colors.soft.blueBg },
            ]}
          >
            <Text style={[styles.xpText, { color: colors.primary.blue }]}>
              +{challenge.xpBonus} XP
            </Text>
          </View>
        ) : null}
      </View>

      <View style={styles.body}>
        <View style={{ flex: 1, paddingRight: 8 }}>
          <Text
            style={[styles.title, { color: colors.neutral.textPrimary }]}
            numberOfLines={1}
          >
            {L(challenge.title)}
          </Text>
          <Text
            style={[styles.desc, { color: colors.neutral.textSecondary }]}
            numberOfLines={2}
          >
            {L(challenge.description)}
          </Text>
        </View>
        <View
          style={[
            styles.cta,
            {
              backgroundColor: done
                ? colors.semantic.success
                : colors.primary.blue,
            },
          ]}
        >
          {done ? (
            <Check size={18} color="#fff" strokeWidth={2.5} />
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
    marginBottom: 16,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    gap: 8,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 11,
  },
  xpChip: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  xpText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 12,
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  desc: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    marginTop: 4,
    lineHeight: 18,
  },
  cta: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
