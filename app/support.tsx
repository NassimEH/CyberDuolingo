import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BackHeader } from "@/components/ui/BackHeader";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { SUPPORT_EMAIL } from "@/data/legal";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";

export default function SupportScreen() {
  const t = useT();
  const { colors } = useTheme();

  function openMail() {
    void Linking.openURL(`mailto:${SUPPORT_EMAIL}`);
  }

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top", "bottom"]}
    >
      <BackHeader title={t("support.title")} />
      <View style={styles.pad}>
        <Text style={[styles.body, { color: colors.neutral.textPrimary }]}>
          {t("support.body")}
        </Text>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={openMail}
          style={[styles.btn, { borderColor: colors.neutral.border }]}
        >
          <Text style={[styles.btnText, { color: colors.primary.blue }]}>
            {SUPPORT_EMAIL}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  pad: { padding: spacing.screen, paddingBottom: spacing.scrollBottom },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 20,
  },
  btn: {
    borderWidth: 1,
    borderRadius: radius.md,
    paddingVertical: 14,
    alignItems: "center",
  },
  btnText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
});
