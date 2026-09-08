import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

import { lucideIcons, type AppIcon } from "@/constants/icons";
import { fontFamily, radius } from "@/constants/theme";
import { enterUp } from "@/lib/motion";
import { useTheme } from "@/lib/useTheme";

type StatCardProps = {
  icon: AppIcon;
  iconColor?: string;
  label: string;
  value: string | number;
  index?: number;
};

export function StatCard({
  icon,
  iconColor,
  label,
  value,
  index = 0,
}: StatCardProps) {
  const { colors } = useTheme();
  const Icon = lucideIcons[icon] ?? lucideIcons.book;
  const tint = iconColor ?? colors.neutral.textPrimary;

  return (
    <Animated.View
      entering={enterUp(index)}
      style={[
        styles.card,
        {
          backgroundColor: colors.neutral.card,
          borderColor: colors.neutral.border,
        },
      ]}
    >
      <Icon size={22} color={tint} strokeWidth={2} />
      <Text
        style={{
          fontFamily: fontFamily.bold,
          fontSize: 20,
          color: colors.neutral.textPrimary,
          marginTop: 8,
        }}
      >
        {value}
      </Text>
      <Text
        style={{
          fontFamily: fontFamily.regular,
          fontSize: 11,
          color: colors.neutral.textSecondary,
          marginTop: 2,
        }}
      >
        {label}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: radius.md,
    padding: 14,
    borderWidth: 1,
    alignItems: "center",
  },
});
