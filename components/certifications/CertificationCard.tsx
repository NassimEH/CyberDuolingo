import { ChevronRight } from "@/constants/icons";
import { fontFamily, radius, spacing } from "@/constants/theme";
import type { Certification } from "@/types/certification";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  cert: Certification;
  onPress: () => void;
};

export function CertificationCard({ cert, onPress }: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: colors.neutral.card,
          borderColor: colors.neutral.border,
        },
      ]}
    >
      <View style={styles.row}>
        <View style={styles.body}>
          <Text
            style={[styles.name, { color: colors.neutral.textPrimary }]}
            numberOfLines={1}
          >
            {cert.name}
          </Text>
          <Text
            style={[styles.meta, { color: colors.neutral.textSecondary }]}
            numberOfLines={1}
          >
            {cert.provider} · {t(`certs.level.${cert.level}`)} ·{" "}
            {L(cert.priceDisplay)}
          </Text>
        </View>
        <ChevronRight
          size={18}
          color={colors.neutral.textSecondary}
          strokeWidth={2}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  body: { flex: 1 },
  name: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
  meta: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    marginTop: 3,
  },
});
