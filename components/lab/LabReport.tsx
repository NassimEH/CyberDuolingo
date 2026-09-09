import { fontFamily, radius, spacing } from "@/constants/theme";
import type { AnswerVerdict } from "@/data/labScenarios";
import type { LabAnswerRecord } from "@/store/learningStore";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type Props = {
  perfect: boolean;
  awardedXp: number;
  answers: LabAnswerRecord[];
  takeaways: { fr: string; en: string }[];
  onReplay: () => void;
  onClose: () => void;
};

function verdictLabel(
  verdict: AnswerVerdict,
  t: (k: "lab.verdictCorrect" | "lab.verdictPartial" | "lab.verdictIncorrect") => string
) {
  switch (verdict) {
    case "correct":
      return t("lab.verdictCorrect");
    case "partial":
      return t("lab.verdictPartial");
    case "incorrect":
      return t("lab.verdictIncorrect");
    default: {
      const _exhaustive: never = verdict;
      return _exhaustive;
    }
  }
}

export function LabReport({
  perfect,
  awardedXp,
  answers,
  takeaways,
  onReplay,
  onClose,
}: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();

  const correct = answers.filter((a) => a.verdict === "correct").length;
  const incorrect = answers.filter((a) => a.verdict === "incorrect").length;
  const partial = answers.filter((a) => a.verdict === "partial").length;

  return (
    <View style={[styles.wrap, { backgroundColor: colors.neutral.background }]}>
      <ScrollView contentContainerStyle={styles.pad}>
        <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
          {perfect ? t("lab.reportPassed") : t("lab.reportFailed")}
        </Text>
        <Text style={[styles.subtitle, { color: colors.neutral.textSecondary }]}>
          {perfect ? t("lab.reportPassedHint") : t("lab.reportFailedHint")}
        </Text>

        <View
          style={[
            styles.summaryCard,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
        >
          <SummaryRow
            label={t("lab.reportCorrect")}
            value={String(correct)}
            color={colors.semantic.success}
          />
          <SummaryRow
            label={t("lab.reportPartial")}
            value={String(partial)}
            color={colors.semantic.warning}
          />
          <SummaryRow
            label={t("lab.reportIncorrect")}
            value={String(incorrect)}
            color={colors.semantic.error}
          />
          <SummaryRow
            label={t("lab.reportXp")}
            value={awardedXp > 0 ? `+${awardedXp}` : "0"}
            color={colors.primary.blue}
          />
          <SummaryRow
            label={t("lab.reportStatus")}
            value={perfect ? t("lab.statusPassed") : t("lab.statusFailed")}
            color={
              perfect ? colors.semantic.success : colors.neutral.textSecondary
            }
          />
        </View>

        <Text style={[styles.section, { color: colors.neutral.textPrimary }]}>
          {t("lab.reportAnswers")}
        </Text>
        {answers.map((a, i) => {
          const accent =
            a.verdict === "correct"
              ? colors.semantic.success
              : a.verdict === "partial"
                ? colors.semantic.warning
                : colors.semantic.error;
          return (
            <View
              key={`${a.stepId}-${i}`}
              style={[
                styles.answerCard,
                {
                  backgroundColor: colors.neutral.card,
                  borderColor: colors.neutral.border,
                },
              ]}
            >
              <Text style={[styles.answerIndex, { color: colors.neutral.textSecondary }]}>
                {t("lab.reportStep", { n: i + 1 })}
              </Text>
              <Text style={[styles.badge, { color: accent }]}>
                {verdictLabel(a.verdict, t)}
              </Text>
              <Text style={[styles.label, { color: colors.neutral.textSecondary }]}>
                {t("lab.reportYourAnswer")}
              </Text>
              <Text style={[styles.value, { color: colors.neutral.textPrimary }]}>
                {a.userText}
              </Text>
              <Text style={[styles.label, { color: colors.neutral.textSecondary }]}>
                {t("lab.reportExpected")}
              </Text>
              <Text style={[styles.value, { color: colors.neutral.textPrimary }]}>
                {L(a.expectedAnswer)}
              </Text>
              <Text style={[styles.label, { color: colors.neutral.textSecondary }]}>
                {t("lab.reportWhy")}
              </Text>
              <Text style={[styles.value, { color: colors.neutral.textPrimary }]}>
                {L(a.explanation)}
              </Text>
            </View>
          );
        })}

        <Text style={[styles.section, { color: colors.neutral.textPrimary }]}>
          {t("lab.reportTakeaways")}
        </Text>
        {takeaways.map((item, i) => (
          <Text
            key={i}
            style={[styles.takeaway, { color: colors.neutral.textPrimary }]}
          >
            • {L(item)}
          </Text>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton label={t("lab.replay")} onPress={onReplay} />
        <PrimaryButton
          label={t("lab.backToList")}
          variant="secondary"
          onPress={onClose}
        />
      </View>
    </View>
  );
}

function SummaryRow({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  const { colors } = useTheme();
  return (
    <View style={styles.summaryRow}>
      <Text style={[styles.summaryLabel, { color: colors.neutral.textSecondary }]}>
        {label}
      </Text>
      <Text style={[styles.summaryValue, { color }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  pad: {
    padding: spacing.screen,
    paddingBottom: 24,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 22,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    marginTop: 6,
    marginBottom: 16,
    lineHeight: 20,
  },
  summaryCard: {
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: 14,
    gap: 10,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
  },
  summaryValue: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
  },
  section: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    letterSpacing: -0.2,
    marginBottom: 10,
    marginTop: 4,
  },
  answerCard: {
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: 14,
    marginBottom: 10,
  },
  answerIndex: {
    fontFamily: fontFamily.medium,
    fontSize: 11,
    marginBottom: 4,
  },
  badge: {
    fontFamily: fontFamily.semiBold,
    fontSize: 13,
    marginBottom: 8,
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 11,
    marginTop: 6,
  },
  value: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
  },
  takeaway: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  footer: {
    padding: spacing.screen,
    paddingTop: 8,
    gap: 10,
  },
});
