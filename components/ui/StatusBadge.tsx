import { fontFamily } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";
import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

export type StatusBadgeVariant =
  | "default"
  | "active"
  | "completed"
  | "locked"
  | "easy"
  | "medium"
  | "hard"
  | "xp";

type Props = {
  label: string;
  variant?: StatusBadgeVariant;
  icon?: ReactNode;
  /** Text color only, no filled background. */
  flat?: boolean;
};

export function StatusBadge({
  label,
  variant = "default",
  icon,
  flat = false,
}: Props) {
  const { colors } = useTheme();

  const palette = (() => {
    switch (variant) {
      case "active":
        return { bg: colors.soft.blueBg, fg: colors.primary.blue };
      case "completed":
        return { bg: "rgba(33,193,107,0.15)", fg: colors.semantic.success };
      case "locked":
        return { bg: colors.neutral.surface, fg: colors.neutral.textSecondary };
      case "easy":
        return { bg: "rgba(33,193,107,0.12)", fg: colors.semantic.success };
      case "medium":
        return { bg: "rgba(251,191,36,0.18)", fg: "#D97706" };
      case "hard":
        return { bg: "rgba(239,68,68,0.12)", fg: colors.semantic.error };
      case "xp":
        return { bg: colors.soft.blueBg, fg: colors.primary.blue };
      case "default":
      default:
        return { bg: colors.neutral.surface, fg: colors.neutral.textSecondary };
    }
  })();

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: flat ? "transparent" : palette.bg,
          paddingHorizontal: flat ? 0 : 10,
          paddingVertical: flat ? 0 : 4,
        },
      ]}
    >
      {icon}
      <Text style={[styles.text, { color: palette.fg }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 20,
  },
  text: {
    fontFamily: fontFamily.semiBold,
    fontSize: 11,
  },
});
