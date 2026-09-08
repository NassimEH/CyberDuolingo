import { fontFamily } from "@/constants/theme";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text, View } from "react-native";

type Props = { activeDays: string[]; weeks?: number };

function dateKey(d: Date) {
  return d.toISOString().slice(0, 10);
}

export function ActivityCalendar({ activeDays, weeks = 8 }: Props) {
  const t = useT();
  const { colors, darkMode } = useTheme();
  const set = new Set(activeDays);
  const today = new Date();
  const cells: { key: string; active: boolean }[] = [];
  const total = weeks * 7;
  for (let i = total - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = dateKey(d);
    cells.push({ key, active: set.has(key) });
  }

  const fill = darkMode ? "#93C5FD" : "#2563EB";
  const empty = colors.neutral.border;

  return (
    <View style={styles.wrap}>
      <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
        {t("profile.calendar")}
      </Text>
      <View style={styles.grid}>
        {cells.map((c) => (
          <View
            key={c.key}
            style={[
              styles.cell,
              { backgroundColor: c.active ? fill : empty },
            ]}
          />
        ))}
      </View>
      <Text style={[styles.hint, { color: colors.neutral.textSecondary }]}>
        {t("profile.calendarHint")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 20 },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  cell: {
    width: 12,
    height: 12,
    borderRadius: 3,
  },
  hint: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    marginTop: 8,
  },
});
