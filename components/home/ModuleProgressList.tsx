import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";
import { fontFamily } from "@/constants/theme";
import { UNITS } from "@/data/units";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  completedLessonIds: string[];
};

export function ModuleProgressList({ completedLessonIds }: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();

  return (
    <View style={styles.wrap}>
      <Text style={[styles.sectionTitle, { color: colors.neutral.textPrimary }]}>
        {t("home.progress")}
      </Text>
      {UNITS.map((unit) => {
        const total = unit.lessonIds.length;
        const done =
          total === 0
            ? 0
            : unit.lessonIds.filter((id) => completedLessonIds.includes(id))
                .length;
        const percent = total === 0 ? 0 : Math.round((done / total) * 100);
        return (
          <View key={unit.id} style={styles.row}>
            <View style={styles.labelRow}>
              <Text
                style={[styles.label, { color: colors.neutral.textPrimary }]}
                numberOfLines={1}
              >
                {L(unit.title)}
              </Text>
              <Text style={[styles.pct, { color: unit.progressColor }]}>
                {percent}%
              </Text>
            </View>
            <AnimatedProgressBar
              progress={percent}
              color={unit.progressColor}
              trackColor={colors.neutral.border}
              height={8}
            />
            {total === 0 ? (
              <Text
                style={[styles.soon, { color: colors.neutral.textSecondary }]}
              >
                {t("learn.moduleComingSoon")}
              </Text>
            ) : null}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 12 },
  sectionTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    marginBottom: 12,
  },
  row: { marginBottom: 14 },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
    gap: 8,
  },
  label: { fontFamily: fontFamily.medium, fontSize: 13, flex: 1 },
  pct: { fontFamily: fontFamily.semiBold, fontSize: 12 },
  soon: { fontFamily: fontFamily.regular, fontSize: 11, marginTop: 4 },
});
