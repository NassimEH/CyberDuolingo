import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { TRACKS } from "@/data/tracks";
import { UNITS } from "@/data/units";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import type { TrackId } from "@/types/learning";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  completedLessonIds: string[];
};

const HOME_TRACK_IDS: TrackId[] = ["networking", "web", "software"];

export function ModuleProgressList({ completedLessonIds }: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();

  const rows = HOME_TRACK_IDS.map((trackId) => {
    const track = TRACKS.find((tr) => tr.id === trackId);
    const lessonIds = UNITS.filter(
      (u) => u.trackId === trackId && u.lessonIds.length > 0
    ).flatMap((u) => u.lessonIds);
    const total = lessonIds.length;
    const done = lessonIds.filter((id) =>
      completedLessonIds.includes(id)
    ).length;
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    return {
      trackId,
      title: track?.name,
      color: track?.color ?? colors.primary.blue,
      done,
      total,
      percent,
    };
  }).filter((r) => r.title && r.total > 0);

  const overallDone = rows.filter((r) => r.percent === 100).length;
  const overallTotal = rows.length;

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
        {rows.map((row) => (
          <View
            key={row.trackId}
            style={[
              styles.card,
              {
                backgroundColor: colors.neutral.card,
                borderColor: colors.neutral.border,
              },
            ]}
          >
            <View
              style={[styles.accent, { backgroundColor: row.color }]}
            />
            <View style={styles.cardBody}>
              <View style={styles.labelRow}>
                <View style={styles.titleCol}>
                  <Text
                    style={[
                      styles.label,
                      { color: colors.neutral.textPrimary },
                    ]}
                    numberOfLines={1}
                  >
                    {L(row.title ?? "")}
                  </Text>
                  <Text
                    style={[
                      styles.meta,
                      { color: colors.neutral.textSecondary },
                    ]}
                  >
                    {t("learn.unitProgress", {
                      done: row.done,
                      total: row.total,
                    })}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.pct,
                    { color: colors.neutral.textPrimary },
                  ]}
                >
                  {row.percent}%
                </Text>
              </View>
              <AnimatedProgressBar
                progress={row.percent}
                color={colors.neutral.textPrimary}
                trackColor={colors.neutral.border}
                height={6}
                style={{ marginTop: 12 }}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: spacing.xs,
    marginBottom: spacing.section,
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
  list: { gap: spacing.cardGap },
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "stretch",
  },
  accent: {
    width: 3,
  },
  cardBody: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 14,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  titleCol: { flex: 1, gap: 2 },
  label: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
  pct: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
  meta: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
});
