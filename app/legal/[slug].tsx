import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BackHeader } from "@/components/ui/BackHeader";
import { fontFamily, spacing } from "@/constants/theme";
import { getLegalDoc } from "@/data/legal";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";

export default function LegalDocScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const doc = getLegalDoc(typeof slug === "string" ? slug : "");

  if (!doc) {
    return (
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.neutral.background }]}
        edges={["top", "bottom"]}
      >
        <BackHeader title={t("legal.notFound")} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top", "bottom"]}
    >
      <BackHeader title={L(doc.title)} />
      <ScrollView contentContainerStyle={styles.pad}>
        {doc.paragraphs.map((p, i) => (
          <Text
            key={i}
            style={[styles.p, { color: colors.neutral.textPrimary }]}
          >
            {L(p)}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  pad: { padding: spacing.screen, paddingBottom: spacing.scrollBottom },
  p: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 16,
  },
});
