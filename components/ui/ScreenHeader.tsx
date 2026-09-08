import { fontFamily, spacing } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";
import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  right?: ReactNode;
};

export function ScreenHeader({ title, subtitle, icon, right }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <View style={styles.titleRow}>
          {icon}
          <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
            {title}
          </Text>
        </View>
        {right}
      </View>
      {subtitle ? (
        <Text style={[styles.sub, { color: colors.neutral.textSecondary }]}>
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
  },
  sub: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20,
  },
});
