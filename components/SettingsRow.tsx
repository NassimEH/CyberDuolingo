import { Ionicons } from "@expo/vector-icons";
import { Switch, Text, View } from "react-native";

import { colors } from "@/constants/theme";

type SettingsRowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  iconBg?: string;
  label: string;
  subtitle?: string;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  showChevron?: boolean;
};

export function SettingsRow({
  icon,
  iconColor = colors.primary.purple,
  iconBg = "#EDE9FE",
  label,
  subtitle,
  value,
  onValueChange,
  showChevron = false,
}: SettingsRowProps) {
  return (
    <View className="flex-row items-center py-3.5 px-4">
      <View
        className="w-9 h-9 rounded-xl items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <Ionicons name={icon} size={18} color={iconColor} />
      </View>
      <View className="flex-1 ml-3">
        <Text className="font-poppins-medium text-sm text-text-primary">
          {label}
        </Text>
        {subtitle ? (
          <Text className="caption mt-0.5">{subtitle}</Text>
        ) : null}
      </View>
      {onValueChange !== undefined && value !== undefined ? (
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: colors.neutral.border, true: "#C4B5FD" }}
          thumbColor={value ? colors.primary.purple : "#f4f4f5"}
        />
      ) : showChevron ? (
        <Ionicons
          name="chevron-forward"
          size={18}
          color={colors.neutral.textSecondary}
        />
      ) : null}
    </View>
  );
}
