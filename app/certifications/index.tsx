import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CertificationCard } from "@/components/certifications/CertificationCard";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { filterCertifications } from "@/data/certifications";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import type {
  CertDomain,
  CertLevel,
  CertPriceTier,
} from "@/types/certification";

const DOMAINS: (CertDomain | "all")[] = [
  "all",
  "cybersecurity",
  "cloud",
  "networking",
  "devops",
  "programming",
  "data",
  "ai",
];

const LEVELS: (CertLevel | "all")[] = [
  "all",
  "beginner",
  "intermediate",
  "advanced",
  "expert",
];

const PRICES: (CertPriceTier | "all")[] = [
  "all",
  "free",
  "under100",
  "100to300",
  "over300",
];

export default function CertificationsIndex() {
  const t = useT();
  const { colors } = useTheme();
  const [q, setQ] = useState("");
  const [domain, setDomain] = useState<CertDomain | "all">("all");
  const [level, setLevel] = useState<CertLevel | "all">("all");
  const [price, setPrice] = useState<CertPriceTier | "all">("all");

  const list = useMemo(
    () =>
      filterCertifications({
        q,
        domain: domain === "all" ? undefined : domain,
        level: level === "all" ? undefined : level,
        priceTier: price === "all" ? undefined : price,
      }),
    [q, domain, level, price]
  );

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons
              name="chevron-back"
              size={24}
              color={colors.neutral.textPrimary}
            />
          </TouchableOpacity>
          <Text style={[styles.h2, { color: colors.neutral.textPrimary }]}>
            {t("certs.title")}
          </Text>
          <View style={{ width: 24 }} />
        </View>

        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.pad}
          ListHeaderComponent={
            <View>
              <Text
                style={[styles.sub, { color: colors.neutral.textSecondary }]}
              >
                {t("certs.subtitle")}
              </Text>
              <TextInput
                value={q}
                onChangeText={setQ}
                placeholder={t("certs.search")}
                placeholderTextColor={colors.neutral.textSecondary}
                style={[
                  styles.search,
                  {
                    borderColor: colors.neutral.border,
                    color: colors.neutral.textPrimary,
                    backgroundColor: colors.neutral.card,
                  },
                ]}
              />
              <ChipRow
                items={DOMAINS.map((d) => ({
                  id: d,
                  label:
                    d === "all"
                      ? t("certs.filterAll")
                      : t(`certs.domain.${d}`),
                }))}
                active={domain}
                onChange={(id) => setDomain(id as CertDomain | "all")}
              />
              <ChipRow
                items={LEVELS.map((d) => ({
                  id: d,
                  label:
                    d === "all"
                      ? t("certs.filterAll")
                      : t(`certs.level.${d}`),
                }))}
                active={level}
                onChange={(id) => setLevel(id as CertLevel | "all")}
              />
              <ChipRow
                items={PRICES.map((d) => ({
                  id: d,
                  label:
                    d === "all"
                      ? t("certs.filterAll")
                      : t(`certs.price.${d}`),
                }))}
                active={price}
                onChange={(id) => setPrice(id as CertPriceTier | "all")}
              />
              <TouchableOpacity
                style={[
                  styles.finder,
                  {
                    backgroundColor: colors.soft.blueBg,
                    borderColor: colors.soft.blueBorder,
                  },
                ]}
                onPress={() => router.push("/certifications/finder")}
              >
                <Text
                  style={[styles.finderTitle, { color: colors.primary.blue }]}
                >
                  {t("certs.finderCard")}
                </Text>
                <Text
                  style={[
                    styles.finderSub,
                    { color: colors.neutral.textSecondary },
                  ]}
                >
                  {t("certs.finderSub")}
                </Text>
              </TouchableOpacity>
            </View>
          }
          ListEmptyComponent={
            <Text
              style={{
                textAlign: "center",
                color: colors.neutral.textSecondary,
                marginTop: 24,
              }}
            >
              {t("certs.empty")}
            </Text>
          }
          renderItem={({ item }) => (
            <CertificationCard
              cert={item}
              onPress={() =>
                router.push({
                  pathname: "/certifications/[id]",
                  params: { id: item.id },
                })
              }
            />
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function ChipRow({
  items,
  active,
  onChange,
}: {
  items: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
}) {
  const { colors } = useTheme();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 8, paddingVertical: 6 }}
    >
      {items.map((item) => {
        const on = item.id === active;
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => onChange(item.id)}
            style={[
              styles.chip,
              {
                backgroundColor: on ? colors.soft.blueBg : colors.neutral.surface,
                borderColor: on ? colors.primary.blue : colors.neutral.border,
              },
            ]}
          >
            <Text
              style={{
                fontFamily: fontFamily.medium,
                fontSize: 12,
                color: on ? colors.primary.blue : colors.neutral.textSecondary,
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.screen,
    paddingVertical: 10,
  },
  h2: { fontFamily: fontFamily.semiBold, fontSize: 18 },
  pad: { paddingHorizontal: spacing.screen, paddingBottom: 40 },
  sub: { fontFamily: fontFamily.regular, fontSize: 14, marginBottom: 12 },
  search: {
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: fontFamily.regular,
    fontSize: 14,
    marginBottom: 8,
  },
  chip: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  finder: {
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: 14,
    marginVertical: 12,
  },
  finderTitle: { fontFamily: fontFamily.semiBold, fontSize: 15 },
  finderSub: { fontFamily: fontFamily.regular, fontSize: 12, marginTop: 4 },
});
