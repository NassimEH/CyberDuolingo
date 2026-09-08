import { fontFamily, radius } from "@/constants/theme";
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
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.neutral.card,
          borderColor: colors.neutral.border,
        },
      ]}
    >
      <Text style={[styles.name, { color: colors.neutral.textPrimary }]}>
        {cert.name}
      </Text>
      <Text style={[styles.provider, { color: colors.neutral.textSecondary }]}>
        {cert.provider} · {t(`certs.domain.${cert.domain}`)}
      </Text>
      <View style={styles.metaGrid}>
        <Meta
          label={t("certs.label.level")}
          value={t(`certs.level.${cert.level}`)}
          colors={colors}
        />
        <Meta
          label={t("certs.label.price")}
          value={L(cert.priceDisplay)}
          colors={colors}
        />
        {cert.examDurationDisplay ? (
          <Meta
            label={t("certs.label.exam")}
            value={L(cert.examDurationDisplay)}
            colors={colors}
          />
        ) : null}
        {cert.validityDisplay ? (
          <Meta
            label={t("certs.label.validity")}
            value={L(cert.validityDisplay)}
            colors={colors}
          />
        ) : null}
      </View>
      {cert.recognitionNote ? (
        <Text
          style={[styles.note, { color: colors.neutral.textSecondary }]}
          numberOfLines={2}
        >
          {L(cert.recognitionNote)}
        </Text>
      ) : null}
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btn, { backgroundColor: colors.primary.blue }]}
      >
        <Text style={styles.btnText}>{t("certs.view")}</Text>
      </TouchableOpacity>
    </View>
  );
}

function Meta({
  label,
  value,
  colors,
}: {
  label: string;
  value: string;
  colors: { neutral: { textPrimary: string; textSecondary: string } };
}) {
  return (
    <View style={styles.metaItem}>
      <Text style={[styles.metaLabel, { color: colors.neutral.textSecondary }]}>
        {label}
      </Text>
      <Text style={[styles.metaValue, { color: colors.neutral.textPrimary }]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: 14,
    marginBottom: 12,
  },
  name: { fontFamily: fontFamily.semiBold, fontSize: 16 },
  provider: { fontFamily: fontFamily.regular, fontSize: 12, marginTop: 2 },
  metaGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 12,
  },
  metaItem: { width: "45%" },
  metaLabel: { fontFamily: fontFamily.regular, fontSize: 10 },
  metaValue: { fontFamily: fontFamily.medium, fontSize: 13, marginTop: 2 },
  note: { fontFamily: fontFamily.regular, fontSize: 11, marginTop: 10 },
  btn: {
    marginTop: 12,
    borderRadius: radius.md,
    paddingVertical: 10,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontFamily: fontFamily.semiBold, fontSize: 14 },
});
