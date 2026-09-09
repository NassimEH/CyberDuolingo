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
import { BackHeader } from "@/components/ui/BackHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { getCertification, getPrepTrackForCert } from "@/data/certifications";
import { getTrack } from "@/data/tracks";
import { trackEvent } from "@/lib/analytics";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useCertificationStore } from "@/store/certificationStore";
import { useTrackStore } from "@/store/trackStore";
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
  const setSelectedTrack = useTrackStore((s) => s.setSelectedTrack);
  const [askObtain, setAskObtain] = useState(false);

  if (!cert) {
    return (
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.neutral.background }]}
        edges={["top", "bottom"]}
      >
        <BackHeader title={t("certs.title")} />
        <View style={styles.pad}>
          <EmptyState
            title={t("certs.empty")}
            description={t("certs.emptyHint")}
          />
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ marginTop: 16 }}
          >
            <Text style={{ color: colors.primary.blue }}>{t("common.back")}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const status: CertPathStatus | null = entry?.status ?? null;
  const prepTrackId = getPrepTrackForCert(cert);
  const prepTrack = prepTrackId ? getTrack(prepTrackId) : null;

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top", "bottom"]}
    >
      <BackHeader title={cert.name} />

      <ScrollView contentContainerStyle={styles.pad}>
        <Text style={[styles.provider, { color: colors.primary.blue }]}>
          {cert.provider}
        </Text>
        <Text style={[styles.h1, { color: colors.neutral.textPrimary }]}>
          {cert.name}
        </Text>
        <Text style={[styles.meta, { color: colors.neutral.textSecondary }]}>
          {t(`certs.domain.${cert.domain}`)} · {t(`certs.level.${cert.level}`)}
        </Text>

        <View
          style={[
            styles.infoBlock,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
        >
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

        {prepTrack ? (
          <TouchableOpacity
            style={[
              styles.secondary,
              {
                borderColor: colors.primary.blue,
                backgroundColor: colors.soft.blueBg,
              },
            ]}
            onPress={() => {
              setSelectedTrack(prepTrack.id);
              trackEvent("certification_prepare_with_track", {
                certification_id: cert.id,
                track_id: prepTrack.id,
              });
              router.push("/(tabs)/learn");
            }}
          >
            <Text
              style={{
                color: colors.primary.blue,
                fontFamily: fontFamily.semiBold,
              }}
            >
              {t("certs.prepareWith", { track: L(prepTrack.name) })}
            </Text>
          </TouchableOpacity>
        ) : null}

        {!entry ? (
          <TouchableOpacity
            style={[styles.secondary, { borderColor: colors.neutral.border }]}
            onPress={() => {
              addToPath(cert.id);
              trackEvent("certification_added_to_path", {
                certification_id: cert.id,
                provider: cert.provider,
                domain: cert.domain,
                level: cert.level,
              });
            }}
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
                  trackEvent("certification_obtained", {
                    certification_id: cert.id,
                    provider: cert.provider,
                    domain: cert.domain,
                    level: cert.level,
                  });
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
  pad: { padding: spacing.screen, paddingBottom: spacing.scrollBottom },
  h1: { fontFamily: fontFamily.semiBold, fontSize: 24, marginTop: 4 },
  provider: {
    fontFamily: fontFamily.semiBold,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  meta: { fontFamily: fontFamily.regular, fontSize: 13, marginTop: 6 },
  infoBlock: {
    marginTop: 16,
    borderWidth: 1,
    borderRadius: radius.lg,
    paddingHorizontal: 14,
  },
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
