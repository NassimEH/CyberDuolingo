import { PressScale } from "@/components/motion/PressScale";
import { fontFamily, radius } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  primary?: boolean;
  index?: number;
};

export function ChatSuggestion({
  label,
  onPress,
  primary = false,
  index = 0,
}: Props) {
  const { colors } = useTheme();

  return (
    <PressScale onPress={onPress} style={{ marginRight: 8, marginBottom: 8 }}>
      <View
        style={[
          styles.chip,
          primary ? styles.primary : styles.secondary,
          {
            backgroundColor: primary
              ? colors.primary.blue
              : colors.neutral.surface,
            borderColor: primary
              ? colors.primary.blue
              : colors.neutral.border,
          },
        ]}
      >
        {primary ? (
          <View style={styles.dot} />
        ) : (
          <Text
            style={[styles.index, { color: colors.neutral.textSecondary }]}
          >
            {index + 1}
          </Text>
        )}
        <Text
          style={[
            styles.label,
            {
              color: primary ? "#fff" : colors.neutral.textPrimary,
              fontFamily: primary ? fontFamily.semiBold : fontFamily.medium,
            },
          ]}
          numberOfLines={2}
        >
          {label}
        </Text>
      </View>
    </PressScale>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 10,
    maxWidth: 260,
    minHeight: 44,
  },
  primary: {},
  secondary: {},
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.85)",
  },
  index: {
    fontFamily: fontFamily.semiBold,
    fontSize: 11,
    width: 16,
  },
  label: {
    flexShrink: 1,
    fontSize: 13,
    lineHeight: 18,
  },
});
