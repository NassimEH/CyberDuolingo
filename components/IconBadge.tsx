import { StyleSheet, View } from "react-native";

import { lucideIcons, type AppIcon } from "@/constants/icons";
import { radius } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";

type Size = "sm" | "md" | "lg";

const SIZE_MAP = {
  sm: { box: 36, icon: 18 },
  md: { box: 44, icon: 22 },
  lg: { box: 64, icon: 30 },
};

type Props = {
  name: AppIcon;
  size?: Size;
  color?: string;
  /** @deprecated Prefer transparent default; kept for rare overrides. */
  backgroundColor?: string;
};

export function IconBadge({
  name,
  size = "md",
  color,
  backgroundColor = "transparent",
}: Props) {
  const { colors } = useTheme();
  const dim = SIZE_MAP[size];
  const Icon = lucideIcons[name] ?? lucideIcons.book;
  return (
    <View
      style={[
        styles.box,
        {
          width: dim.box,
          height: dim.box,
          borderRadius: radius.md,
          backgroundColor,
        },
      ]}
    >
      <Icon
        size={dim.icon}
        color={color ?? colors.neutral.textPrimary}
        strokeWidth={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
});
