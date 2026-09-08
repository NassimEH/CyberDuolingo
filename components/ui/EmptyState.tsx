import { fontFamily, radius, spacing } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";
import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  description?: string;
  icon?: ReactNode;
};

export function EmptyState({ title, description, icon }: Props) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.wrap,
        {
          borderColor: colors.neutral.border,
          backgroundColor: colors.neutral.surface,
        },
      ]}
    >
      {icon}
      <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
        {title}
      </Text>
      {description ? (
        <Text
          style={[styles.desc, { color: colors.neutral.textSecondary }]}
        >
          {description}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: radius.lg,
    padding: spacing.section,
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    textAlign: "center",
  },
  desc: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
  },
});
