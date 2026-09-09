import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SettingsRow } from "@/components/SettingsRow";
import { BackHeader } from "@/components/ui/BackHeader";
import { Sparkles } from "@/constants/icons";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { setAnalyticsEnabled } from "@/lib/analytics";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { usePrivacyStore } from "@/store/privacyStore";

export default function PrivacyPreferencesScreen() {
  const t = useT();
  const { colors } = useTheme();
  const analyticsEnabled = usePrivacyStore((s) => s.analyticsEnabled);

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top", "bottom"]}
    >
      <BackHeader title={t("privacy.prefsTitle")} />
      <ScrollView contentContainerStyle={styles.pad}>
        <Text style={[styles.intro, { color: colors.neutral.textSecondary }]}>
          {t("privacy.prefsIntro")}
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
        >
          <SettingsRow
            icon={Sparkles}
            label={t("privacy.analytics")}
            subtitle={t("privacy.analyticsSubtitle")}
            value={analyticsEnabled}
            onValueChange={setAnalyticsEnabled}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  pad: { padding: spacing.screen, paddingBottom: spacing.scrollBottom },
  intro: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    overflow: "hidden",
  },
});
