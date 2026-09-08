import { fontFamily, spacing } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";
import type { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
  /** Secondary info on the right (non-interactive). */
  meta?: string;
  icon?: ReactNode;
};

export function SectionHeader({
  title,
  actionLabel,
  onActionPress,
  meta,
  icon,
}: SectionHeaderProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.row}>
      <View style={styles.titleRow}>
        {icon}
        <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
          {title}
        </Text>
      </View>
      {actionLabel && onActionPress ? (
        <TouchableOpacity activeOpacity={0.7} onPress={onActionPress}>
          <Text style={[styles.action, { color: colors.primary.blue }]}>
            {actionLabel}
          </Text>
        </TouchableOpacity>
      ) : meta ? (
        <Text style={[styles.meta, { color: colors.neutral.textSecondary }]}>
          {meta}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
    marginTop: spacing.sm,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
  },
  action: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
  },
  meta: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
  },
});
