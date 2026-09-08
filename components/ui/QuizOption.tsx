import { fontFamily, radius } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  label: string;
  selected: boolean;
  checked: boolean;
  correct: boolean;
  onPress: () => void;
  disabled?: boolean;
};

export function QuizOption({
  label,
  selected,
  checked,
  correct,
  onPress,
  disabled,
}: Props) {
  const { colors } = useTheme();

  let border = colors.neutral.border;
  let bg = colors.neutral.card;

  if (checked && selected && correct) {
    border = colors.semantic.success;
    bg = "rgba(16,185,129,0.12)";
  } else if (checked && selected) {
    border = colors.semantic.error;
    bg = "rgba(239,68,68,0.1)";
  } else if (checked && correct) {
    border = colors.semantic.success;
  } else if (selected) {
    border = colors.primary.blue;
    bg = colors.soft.blueBg;
  }

  return (
    <TouchableOpacity
      disabled={disabled || checked}
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.opt, { borderColor: border, backgroundColor: bg }]}
      accessibilityRole="button"
      accessibilityState={{ selected, disabled: disabled || checked }}
    >
      <Text style={[styles.label, { color: colors.neutral.textPrimary }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  opt: {
    borderWidth: 1,
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 8,
    minHeight: 48,
    justifyContent: "center",
  },
  label: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
  },
});
