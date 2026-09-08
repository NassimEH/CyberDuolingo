import { fontFamily, radius, spacing } from "@/constants/theme";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import type { Unit } from "@/types/learning";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  xpEarned: number;
  xpTotal: number;
  nextModule: Unit | null;
  onNext: () => void;
};

export function LearnModuleComplete({
  xpEarned,
  xpTotal,
  nextModule,
  onNext,
}: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.wrap,
        {
          backgroundColor: colors.neutral.card,
          borderColor: colors.neutral.border,
        },
      ]}
    >
      <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
        {t("learn.moduleComplete")}
      </Text>
      <Text style={[styles.meta, { color: colors.neutral.textSecondary }]}>
        {t("learn.moduleXp", { earned: xpEarned, total: xpTotal })}
      </Text>
      {nextModule ? (
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={onNext}
          style={[styles.btn, { backgroundColor: colors.primary.blue }]}
        >
          <Text style={styles.btnText}>
            {t("learn.nextModule")} · {L(nextModule.title)}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: spacing.screen,
    marginBottom: 24,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: 16,
    gap: 8,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
  },
  meta: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
  },
  btn: {
    marginTop: 8,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
  },
  btnText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
});
