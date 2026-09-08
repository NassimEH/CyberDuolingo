import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";
import { fontFamily, radius, spacing } from "@/constants/theme";
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

  const overallDone = UNITS.reduce((acc, unit) => {
    return (
      acc +
      unit.lessonIds.filter((id) => completedLessonIds.includes(id)).length
    );
  }, 0);
  const overallTotal = UNITS.reduce(
    (acc, unit) => acc + unit.lessonIds.length,
    0
  );

  return (
    <View style={styles.wrap}>
      <View style={styles.headerBlock}>
        <Text
          style={[styles.sectionTitle, { color: colors.neutral.textPrimary }]}
        >
          {t("home.progress")}
        </Text>
        {overallTotal > 0 ? (
          <Text
            style={[styles.summary, { color: colors.neutral.textSecondary }]}
          >
            {overallDone}/{overallTotal}
          </Text>
        ) : null}
      </View>

      <View style={styles.list}>
        {UNITS.map((unit) => {
          const total = unit.lessonIds.length;
          const done =
            total === 0
              ? 0
              : unit.lessonIds.filter((id) => completedLessonIds.includes(id))
                  .length;
          const percent = total === 0 ? 0 : Math.round((done / total) * 100);
          return (
            <View
              key={unit.id}
              style={[
                styles.card,
                {
                  backgroundColor: colors.neutral.card,
                  borderColor: colors.neutral.border,
                },
              ]}
            >
              <View style={styles.labelRow}>
                <View
                  style={[
                    styles.dotWrap,
                    { backgroundColor: `${unit.progressColor}22` },
                  ]}
                >
                  <View
                    style={[styles.dot, { backgroundColor: unit.progressColor }]}
                  />
                </View>
                <View style={styles.titleCol}>
                  <Text
                    style={[
                      styles.label,
                      { color: colors.neutral.textPrimary },
                    ]}
                    numberOfLines={1}
                  >
                    {L(unit.title)}
                  </Text>
                  <Text
                    style={[
                      styles.meta,
                      { color: colors.neutral.textSecondary },
                    ]}
                  >
                    {total === 0
                      ? t("learn.moduleComingSoon")
                      : t("learn.unitProgress", { done, total })}
                  </Text>
                </View>
                <Text style={[styles.pct, { color: unit.progressColor }]}>
                  {percent}%
                </Text>
              </View>
              <AnimatedProgressBar
                progress={percent}
                color={unit.progressColor}
                trackColor={colors.neutral.border}
                height={10}
                style={{ marginTop: 12 }}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 4,
    marginBottom: 16,
  },
  headerBlock: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 22,
    letterSpacing: -0.3,
  },
  summary: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
  },
  list: { gap: 12 },
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: 16,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  dotWrap: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  titleCol: { flex: 1, gap: 2 },
  label: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
  pct: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
  },
  meta: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
});
