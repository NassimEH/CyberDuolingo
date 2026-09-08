import { radius } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";
import type { ReactNode } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  padded?: boolean;
  accentBorder?: string;
};

export function AppCard({
  children,
  style,
  padded = true,
  accentBorder,
}: Props) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.card,
        padded && styles.padded,
        {
          backgroundColor: colors.neutral.card,
          borderColor: accentBorder ?? colors.neutral.border,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: radius.lg,
    overflow: "hidden",
  },
  padded: {
    padding: 14,
  },
});
