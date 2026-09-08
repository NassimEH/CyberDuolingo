import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { getCertification } from "@/data/certifications";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useCertificationStore } from "@/store/certificationStore";
import type { CertPathStatus, CertProgress } from "@/types/certification";

const PROGRESS_STEPS: CertProgress[] = [0, 25, 50, 75, 100];

export default function CertificationDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const cert = getCertification(id ?? "");
  const entry = useCertificationStore((s) =>
    id ? s.entries[id] : undefined
  );
  const addToPath = useCertificationStore((s) => s.addToPath);
  const setStatus = useCertificationStore((s) => s.setStatus);
  const setProgress = useCertificationStore((s) => s.setProgress);
  const markObtained = useCertificationStore((s) => s.markObtained);
  const [askObtain, setAskObtain] = useState(false);

  if (!cert) {
    return (
      <SafeAreaView style={{ flex: 1, padding: 24 }}>
        <Text>{t("certs.empty")}</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: colors.primary.blue }}>{t("common.back")}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const status: CertPathStatus | null = entry?.status ?? null;

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
    >
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="chevron-back"
            size={24}
            color={colors.neutral.textPrimary}
          />
        </TouchableOpacity>
        <Text
          style={[styles.topTitle, { color: colors.neutral.textPrimary }]}
          numberOfLines={1}
        >
          {cert.name}
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.pad}>
        <Text style={[styles.h1, { color: colors.neutral.textPrimary }]}>
          {cert.name}
        </Text>
        <Text style={[styles.provider, { color: colors.neutral.textSecondary }]}>
          {cert.provider} · {t(`certs.domain.${cert.domain}`)} ·{" "}
          {t(`certs.level.${cert.level}`)}
        </Text>

        <View style={styles.infoBlock}>
          <InfoRow
            label={t("certs.label.price")}
            value={L(cert.priceDisplay)}
            colors={colors}
          />
          {cert.examDurationDisplay ? (
            <InfoRow
              label={t("certs.label.exam")}
              value={L(cert.examDurationDisplay)}
              colors={colors}
            />
          ) : null}
          {cert.validityDisplay ? (
            <InfoRow
              label={t("certs.label.validity")}
              value={L(cert.validityDisplay)}
              colors={colors}
            />
          ) : null}
          {cert.examFormatDisplay ? (
            <InfoRow
              label={t("certs.label.format")}
              value={L(cert.examFormatDisplay)}
              colors={colors}
            />
          ) : null}
          {cert.preparationTimeDisplay ? (
            <InfoRow
              label={t("certs.label.prep")}
              value={L(cert.preparationTimeDisplay)}
              colors={colors}
            />
          ) : null}
          {cert.difficultyDisplay ? (
            <InfoRow
              label={t("certs.label.difficulty")}
              value={L(cert.difficultyDisplay)}
              colors={colors}
            />
          ) : null}
        </View>

        <Text style={[styles.section, { color: colors.neutral.textPrimary }]}>
          {t("certs.label.description")}
        </Text>
        <Text style={[styles.body, { color: colors.neutral.textSecondary }]}>
          {L(cert.description)}
        </Text>

        <Text style={[styles.section, { color: colors.neutral.textPrimary }]}>
          {t("certs.skills")}
        </Text>
        <View style={styles.skills}>
          {cert.skills.map((s, i) => (
            <View
              key={i}
              style={[
                styles.skillChip,
                {
                  backgroundColor: colors.soft.blueBg,
                  borderColor: colors.soft.blueBorder,
                },
              ]}
            >
              <Text style={{ color: colors.primary.blue, fontSize: 12 }}>
                {L(s)}
              </Text>
            </View>
          ))}
        </View>

        {cert.prerequisites?.length ? (
          <>
            <Text style={[styles.section, { color: colors.neutral.textPrimary }]}>
              {t("certs.label.prerequisites")}
            </Text>
            {cert.prerequisites.map((p, i) => (
              <Text
                key={i}
                style={[styles.body, { color: colors.neutral.textSecondary }]}
              >
                · {L(p)}
              </Text>
            ))}
          </>
        ) : null}

        <Text style={[styles.section, { color: colors.neutral.textPrimary }]}>
          {t("certs.why")}
        </Text>
        <Text style={[styles.body, { color: colors.neutral.textSecondary }]}>
          {L(cert.whyTakeIt)}
        </Text>

        {cert.officialUrl ? (
          <TouchableOpacity
            style={[styles.primary, { backgroundColor: colors.primary.blue }]}
            onPress={() => Linking.openURL(cert.officialUrl!)}
          >
            <Text style={styles.primaryText}>{t("certs.official")}</Text>
          </TouchableOpacity>
        ) : null}

        {!entry ? (
          <TouchableOpacity
            style={[styles.secondary, { borderColor: colors.neutral.border }]}
            onPress={() => addToPath(cert.id)}
          >
            <Text style={{ color: colors.primary.blue, fontFamily: fontFamily.semiBold }}>
              {t("certs.addPath")}
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={{ marginTop: 16 }}>
            <Text style={[styles.section, { color: colors.neutral.textPrimary }]}>
              {t("certs.label.status")}
            </Text>
            <View style={styles.statusRow}>
              {(["todo", "preparing", "obtained"] as CertPathStatus[]).map(
                (s) => (
                  <TouchableOpacity
                    key={s}
                    onPress={() => setStatus(cert.id, s)}
                    style={[
                      styles.statusChip,
                      {
                        backgroundColor:
                          status === s
                            ? colors.soft.blueBg
                            : colors.neutral.surface,
                        borderColor:
                          status === s
                            ? colors.primary.blue
                            : colors.neutral.border,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color:
                          status === s
                            ? colors.primary.blue
                            : colors.neutral.textSecondary,
                      }}
                    >
                      {s === "todo"
                        ? t("certs.statusTodo")
                        : s === "preparing"
                          ? t("certs.statusPreparing")
                          : t("certs.statusObtained")}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>

            {status === "preparing" || status === "todo" ? (
              <>
                <Text
                  style={[
                    styles.section,
                    { color: colors.neutral.textPrimary },
                  ]}
                >
                  {t("certs.progress")} · {entry.progress}%
                </Text>
                <AnimatedProgressBar
                  progress={entry.progress}
                  color={colors.primary.blue}
                  trackColor={colors.neutral.border}
                  height={8}
                />
                <View style={styles.progressRow}>
                  {PROGRESS_STEPS.map((p) => (
                    <TouchableOpacity
                      key={p}
                      onPress={() => {
                        setProgress(cert.id, p);
                        if (p === 100) setAskObtain(true);
                      }}
                      style={[
                        styles.pctBtn,
                        {
                          borderColor:
                            entry.progress === p
                              ? colors.primary.blue
                              : colors.neutral.border,
                        },
                      ]}
                    >
                      <Text style={{ fontSize: 12, color: colors.neutral.textPrimary }}>
                        {p}%
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            ) : null}

            {askObtain || entry.progress === 100 ? (
              <TouchableOpacity
                style={[styles.primary, { backgroundColor: colors.semantic.success }]}
                onPress={() => {
                  markObtained(cert.id);
                  setAskObtain(false);
                  Alert.alert(cert.name, t("certs.statusObtained"));
                }}
              >
                <Text style={styles.primaryText}>{t("certs.markObtained")}</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({
  label,
  value,
  colors,
}: {
  label: string;
  value: string;
  colors: { neutral: { textPrimary: string; textSecondary: string; border: string } };
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.neutral.border,
      }}
    >
      <Text style={{ color: colors.neutral.textSecondary, fontSize: 13 }}>
        {label}
      </Text>
      <Text
        style={{
          color: colors.neutral.textPrimary,
          fontFamily: fontFamily.medium,
          fontSize: 13,
          maxWidth: "60%",
          textAlign: "right",
        }}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.screen,
    paddingVertical: 10,
  },
  topTitle: {
    flex: 1,
    textAlign: "center",
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
  pad: { padding: spacing.screen, paddingBottom: 48 },
  h1: { fontFamily: fontFamily.bold, fontSize: 24 },
  provider: { fontFamily: fontFamily.regular, fontSize: 13, marginTop: 4 },
  infoBlock: { marginTop: 16 },
  section: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    marginTop: 20,
    marginBottom: 8,
  },
  body: { fontFamily: fontFamily.regular, fontSize: 14, lineHeight: 21 },
  skills: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  skillChip: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  primary: {
    marginTop: 20,
    borderRadius: radius.md,
    paddingVertical: 14,
    alignItems: "center",
  },
  primaryText: {
    color: "#fff",
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
  secondary: {
    marginTop: 12,
    borderRadius: radius.md,
    borderWidth: 1,
    paddingVertical: 14,
    alignItems: "center",
  },
  statusRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  statusChip: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  progressRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
  },
  pctBtn: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});
