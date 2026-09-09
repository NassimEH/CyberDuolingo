import { PressScale } from "@/components/motion/PressScale";
import { fontFamily, radius } from "@/constants/theme";
import { feedbackLight } from "@/lib/feedback";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text } from "react-native";

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
    <PressScale
      disabled={disabled}
      onPress={() => {
        void feedbackLight();
        onPress();
      }}
      style={[styles.option, { borderColor: border, backgroundColor: bg }]}
    >
      <Text style={[styles.label, { color: colors.neutral.textPrimary }]}>
        {label}
      </Text>
    </PressScale>
  );
}

const styles = StyleSheet.create({
  option: {
    borderWidth: 1.5,
    borderRadius: radius.md,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 15,
    lineHeight: 22,
  },
});
