import type { LucideIcon } from "@/constants/icons";
import { Bell, ChevronRight, Volume2 } from "@/constants/icons";
import { Switch, Text, View } from "react-native";

import { fontFamily } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";

type SettingsRowProps = {
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  label: string;
  subtitle?: string;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  showChevron?: boolean;
};

export function SettingsRow({
  icon: Icon,
  iconColor,
  iconBg,
  label,
  subtitle,
  value,
  onValueChange,
  showChevron = false,
}: SettingsRowProps) {
  const { colors } = useTheme();
  const resolvedIconColor = iconColor ?? colors.neutral.textPrimary;
  const resolvedIconBg = iconBg ?? "transparent";

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: resolvedIconBg,
        }}
      >
        <Icon size={18} color={resolvedIconColor} strokeWidth={2} />
      </View>
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text
          style={{
            fontFamily: fontFamily.medium,
            fontSize: 14,
            color: colors.neutral.textPrimary,
          }}
        >
          {label}
        </Text>
        {subtitle ? (
          <Text
            style={{
              fontFamily: fontFamily.regular,
              fontSize: 11,
              color: colors.neutral.textSecondary,
              marginTop: 2,
            }}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>
      {onValueChange !== undefined && value !== undefined ? (
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: colors.neutral.border, true: colors.soft.blueBorder }}
          thumbColor={value ? colors.primary.blue : "#f4f4f5"}
        />
      ) : showChevron ? (
        <ChevronRight size={18} color={colors.neutral.textSecondary} />
      ) : null}
    </View>
  );
}

export const settingsIcons = { Bell, Volume2 };
