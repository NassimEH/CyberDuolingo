import { fontFamily } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  label: string;
  active: boolean;
  onPress: () => void;
  color?: string;
};

export function FilterChip({ label, active, onPress, color }: Props) {
  const { colors } = useTheme();
  const accent = color ?? colors.primary.blue;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.chip,
        {
          backgroundColor: active ? colors.soft.blueBg : colors.neutral.surface,
          borderColor: active ? accent : colors.neutral.border,
        },
      ]}
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
    >
      <Text
        style={{
          fontFamily: fontFamily.medium,
          fontSize: 12,
          color: active ? accent : colors.neutral.textSecondary,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
