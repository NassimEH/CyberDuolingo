import type { LucideIcon } from "@/constants/icons";
import { ChevronRight } from "@/constants/icons";
import { Platform, StyleSheet, Switch, Text, View } from "react-native";

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
  const hasSwitch = onValueChange !== undefined && value !== undefined;
  const switchOn = hasSwitch && value;

  return (
    <View style={styles.row}>
      <View
        style={[
          styles.iconWrap,
          { backgroundColor: resolvedIconBg },
        ]}
      >
        <Icon size={18} color={resolvedIconColor} strokeWidth={2} />
      </View>
      <View style={styles.labelCol}>
        <Text style={[styles.label, { color: colors.neutral.textPrimary }]}>
          {label}
        </Text>
        {subtitle ? (
          <Text style={[styles.subtitle, { color: colors.neutral.textSecondary }]}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      {hasSwitch ? (
        <View
          style={[
            styles.switchOutline,
            { borderColor: colors.neutral.border },
          ]}
        >
          <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{
              false: colors.neutral.border,
              true: colors.primary.blue,
            }}
            thumbColor={
              Platform.OS === "ios"
                ? "#ffffff"
                : switchOn
                  ? "#ffffff"
                  : "#f3f4f6"
            }
            ios_backgroundColor={colors.neutral.border}
          />
        </View>
      ) : showChevron ? (
        <ChevronRight size={18} color={colors.neutral.textSecondary} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  labelCol: {
    flex: 1,
    marginLeft: 12,
    marginRight: 10,
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    marginTop: 2,
  },
  switchOutline: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 16,
    padding: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
