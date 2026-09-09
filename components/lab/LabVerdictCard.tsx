import { fontFamily, radius } from "@/constants/theme";
import type { AnswerVerdict } from "@/data/labScenarios";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  verdict: AnswerVerdict;
  explanation: string;
};

export function LabVerdictCard({ verdict, explanation }: Props) {
  const t = useT();
  const { colors } = useTheme();

  const titleKey =
    verdict === "correct"
      ? "lab.verdictCorrect"
      : verdict === "partial"
        ? "lab.verdictPartial"
        : "lab.verdictIncorrect";

  const accent =
    verdict === "correct"
      ? colors.semantic.success
      : verdict === "partial"
        ? colors.semantic.warning
        : colors.semantic.error;

  const bg =
    verdict === "correct"
      ? "rgba(33, 193, 107, 0.1)"
      : verdict === "partial"
        ? "rgba(255, 203, 0, 0.12)"
        : "rgba(255, 77, 79, 0.1)";

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: bg,
          borderColor: accent,
        },
      ]}
    >
      <Text style={[styles.title, { color: accent }]}>{t(titleKey)}</Text>
      <Text style={[styles.body, { color: colors.neutral.textPrimary }]}>
        {explanation}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginVertical: 2,
    alignSelf: "stretch",
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 13,
    marginBottom: 4,
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 18,
  },
});
