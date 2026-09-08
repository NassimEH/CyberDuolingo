import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { fontFamily, radius, spacing } from "@/constants/theme";
import { recommendCertifications } from "@/data/certifications";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import type {
  CertDomain,
  CertLevel,
  CertPriceTier,
  CertRecommendationGoal,
} from "@/types/certification";

type Step = 0 | 1 | 2 | 3 | 4;

export default function CertificationFinder() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const [step, setStep] = useState<Step>(0);
  const [domain, setDomain] = useState<CertDomain>("cybersecurity");
  const [level, setLevel] = useState<CertLevel>("beginner");
  const [budget, setBudget] = useState<CertPriceTier>("100to300");
  const [goal, setGoal] = useState<CertRecommendationGoal>("first-job");

  const results =
    step === 4
      ? recommendCertifications({
          domain,
          level,
          priceTier: budget,
          goal,
        })
      : [];

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
    >
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => (step === 0 ? router.back() : setStep((s) => (s - 1) as Step))}>
          <Ionicons
            name="chevron-back"
            size={24}
            color={colors.neutral.textPrimary}
          />
        </TouchableOpacity>
        <Text style={[styles.h2, { color: colors.neutral.textPrimary }]}>
          {t("certs.finderTitle")}
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.pad}>
        {step === 0 ? (
          <StepOptions
            title={t("certs.finderDomain")}
            options={(
              [
                "cybersecurity",
                "cloud",
                "networking",
                "devops",
                "programming",
                "data",
                "ai",
              ] as CertDomain[]
            ).map((d) => ({ id: d, label: t(`certs.domain.${d}`) }))}
            value={domain}
            onChange={(id) => setDomain(id as CertDomain)}
            onNext={() => setStep(1)}
          />
        ) : null}
        {step === 1 ? (
          <StepOptions
            title={t("certs.finderLevel")}
            options={(
              ["beginner", "intermediate", "advanced", "expert"] as CertLevel[]
            ).map((d) => ({ id: d, label: t(`certs.level.${d}`) }))}
            value={level}
            onChange={(id) => setLevel(id as CertLevel)}
            onNext={() => setStep(2)}
          />
        ) : null}
        {step === 2 ? (
          <StepOptions
            title={t("certs.finderBudget")}
            options={(
              ["free", "under100", "100to300", "over300"] as CertPriceTier[]
            ).map((d) => ({ id: d, label: t(`certs.price.${d}`) }))}
            value={budget}
            onChange={(id) => setBudget(id as CertPriceTier)}
            onNext={() => setStep(3)}
          />
        ) : null}
        {step === 3 ? (
          <StepOptions
            title={t("certs.finderGoal")}
            options={(
              [
                "first-job",
                "specialize",
                "career-growth",
                "recognized-cert",
                "deepen",
              ] as CertRecommendationGoal[]
            ).map((d) => ({ id: d, label: t(`certs.goal.${d}`) }))}
            value={goal}
            onChange={(id) => setGoal(id as CertRecommendationGoal)}
            onNext={() => setStep(4)}
          />
        ) : null}
        {step === 4 ? (
          <View>
            <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
              {t("certs.recommend")}
            </Text>
            {results.map(({ cert, reason }) => (
              <TouchableOpacity
                key={cert.id}
                style={[
                  styles.card,
                  {
                    backgroundColor: colors.neutral.card,
                    borderColor: colors.neutral.border,
                  },
                ]}
                onPress={() =>
                  router.push({
                    pathname: "/certifications/[id]",
                    params: { id: cert.id },
                  })
                }
              >
                <Text
                  style={[styles.cardTitle, { color: colors.neutral.textPrimary }]}
                >
                  {cert.name}
                </Text>
                <Text
                  style={{
                    color: colors.neutral.textSecondary,
                    marginTop: 4,
                    fontSize: 13,
                  }}
                >
                  {L(reason)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

function StepOptions({
  title,
  options,
  value,
  onChange,
  onNext,
}: {
  title: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
  onNext: () => void;
}) {
  const t = useT();
  const { colors } = useTheme();
  return (
    <View>
      <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
        {title}
      </Text>
      {options.map((o) => (
        <TouchableOpacity
          key={o.id}
          onPress={() => onChange(o.id)}
          style={[
            styles.opt,
            {
              borderColor:
                value === o.id ? colors.primary.blue : colors.neutral.border,
              backgroundColor:
                value === o.id ? colors.soft.blueBg : colors.neutral.card,
            },
          ]}
        >
          <Text style={{ color: colors.neutral.textPrimary }}>{o.label}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[styles.next, { backgroundColor: colors.primary.blue }]}
        onPress={onNext}
      >
        <Text style={styles.nextText}>{t("certs.next")}</Text>
      </TouchableOpacity>
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
  h2: {
    flex: 1,
    textAlign: "center",
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  pad: { padding: spacing.screen, paddingBottom: 40 },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    marginBottom: 16,
  },
  opt: {
    borderWidth: 1,
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 8,
  },
  next: {
    marginTop: 16,
    borderRadius: radius.md,
    paddingVertical: 14,
    alignItems: "center",
  },
  nextText: {
    color: "#fff",
    fontFamily: fontFamily.semiBold,
  },
  card: {
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: 14,
    marginBottom: 10,
  },
  cardTitle: { fontFamily: fontFamily.semiBold, fontSize: 15 },
});
