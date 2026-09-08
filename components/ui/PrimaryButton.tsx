import { fontFamily, radius } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  type StyleProp,
  type ViewStyle,
} from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  style?: StyleProp<ViewStyle>;
};

export function PrimaryButton({
  label,
  onPress,
  disabled = false,
  loading = false,
  variant = "primary",
  style,
}: Props) {
  const { colors } = useTheme();
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const inactive = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={inactive}
      onPress={onPress}
      style={[
        styles.base,
        isPrimary && { backgroundColor: colors.primary.blue },
        isSecondary && {
          backgroundColor: colors.neutral.card,
          borderWidth: 1,
          borderColor: colors.neutral.border,
        },
        variant === "ghost" && { backgroundColor: "transparent" },
        inactive && { opacity: 0.5 },
        style,
      ]}
      accessibilityRole="button"
      accessibilityState={{ disabled: inactive }}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? "#fff" : colors.primary.blue} />
      ) : (
        <Text
          style={[
            styles.label,
            {
              color: isPrimary
                ? "#fff"
                : isSecondary
                  ? colors.neutral.textPrimary
                  : colors.primary.blue,
            },
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.md,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
  },
  label: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
});
