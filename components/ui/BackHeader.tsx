import type { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { fontFamily, spacing } from "@/constants/theme";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";

type Props = {
  title: string;
  right?: ReactNode;
};

export function BackHeader({ title, right }: Props) {
  const t = useT();
  const { colors } = useTheme();

  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        onPress={() => router.back()}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        style={styles.backRow}
        accessibilityRole="button"
        accessibilityLabel={t("common.back")}
      >
        <Ionicons
          name="chevron-back"
          size={22}
          color={colors.neutral.textPrimary}
        />
        <Text style={[styles.backLabel, { color: colors.neutral.textPrimary }]}>
          {t("common.back")}
        </Text>
      </TouchableOpacity>
      <View style={styles.titleRow}>
        <Text
          style={[styles.title, { color: colors.neutral.textPrimary }]}
          numberOfLines={2}
        >
          {title}
        </Text>
        {right}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: spacing.screen,
    paddingTop: 4,
    paddingBottom: spacing.sm,
  },
  backRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginBottom: spacing.sm,
    alignSelf: "flex-start",
  },
  backLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 15,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 22,
    flex: 1,
  },
});
