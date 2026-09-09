import Constants from "expo-constants";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BackHeader } from "@/components/ui/BackHeader";
import { fontFamily, spacing } from "@/constants/theme";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";

export default function AboutScreen() {
  const t = useT();
  const { colors } = useTheme();
  const version = Constants.expoConfig?.version ?? "1.0.0";

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top", "bottom"]}
    >
      <BackHeader title={t("about.title")} />
      <ScrollView contentContainerStyle={styles.pad}>
        <Text style={[styles.name, { color: colors.neutral.textPrimary }]}>
          {t("brand.name")}
        </Text>
        <Text style={[styles.meta, { color: colors.neutral.textSecondary }]}>
          {t("profile.versionLabel", { version })}
        </Text>
        <Text style={[styles.body, { color: colors.neutral.textPrimary }]}>
          {t("about.body")}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  pad: { padding: spacing.screen, paddingBottom: spacing.scrollBottom },
  name: {
    fontFamily: fontFamily.bold,
    fontSize: 28,
    marginBottom: 6,
  },
  meta: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    marginBottom: 20,
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 24,
  },
});
