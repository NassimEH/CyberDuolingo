import { Ionicons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { EmptyState } from "@/components/ui/EmptyState";
import { RequireAuth } from "@/components/RequireAuth";
import { fontFamily, spacing } from "@/constants/theme";
import { useLocalize, useT, type TranslationKey } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import {
  ensureTipLog,
  type ActivityLogType,
  useLearningStore,
} from "@/store/learningStore";
import { useLocaleStore } from "@/store/localeStore";

type FilterId = "all" | ActivityLogType;

const FILTERS: FilterId[] = [
  "all",
  "lesson_complete",
  "challenge_complete",
  "lab_complete",
];

const FILTER_LABEL_KEY: Record<(typeof FILTERS)[number], TranslationKey> = {
  all: "home.notif.all",
  lesson_complete: "home.notif.lesson",
  challenge_complete: "home.notif.challenge",
  lab_complete: "home.notif.lab",
  tip: "home.notif.tip",
  xp: "home.notif.xp",
  quiz_miss: "home.notif.quizMiss",
};

function formatTime(iso: string, locale: "fr" | "en") {
  try {
    return new Date(iso).toLocaleString(locale === "fr" ? "fr-FR" : "en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

export default function NotificationsScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const locale = useLocaleStore((s) => s.locale);
  const logs = useLearningStore((s) => s.activityLogs);
  const markActivitySeen = useLearningStore((s) => s.markActivitySeen);
  const [filter, setFilter] = useState<FilterId>("all");

  useFocusEffect(
    useCallback(() => {
      ensureTipLog();
      markActivitySeen();
    }, [markActivitySeen])
  );

  const filtered = useMemo(
    () => (filter === "all" ? logs : logs.filter((log) => log.type === filter)),
    [filter, logs]
  );

  return (
    <RequireAuth>
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top", "bottom"]}
    >
      <View style={styles.headerBlock}>
        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={styles.backRow}
          accessibilityRole="button"
          accessibilityLabel={t("common.back")}
        >
          <Ionicons
            name="chevron-back"
            size={22}
            color={colors.neutral.textPrimary}
          />
          <Text
            style={[styles.backLabel, { color: colors.neutral.textPrimary }]}
          >
            {t("common.back")}
          </Text>
        </TouchableOpacity>

        <View style={styles.titleRow}>
          <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
            {t("home.notifications")}
          </Text>
          <Text
            style={[styles.countText, { color: colors.neutral.textPrimary }]}
          >
            {filtered.length}
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.chipsScroll}
          contentContainerStyle={styles.chips}
        >
          {FILTERS.map((id) => {
            const active = filter === id;
            return (
              <TouchableOpacity
                key={id}
                onPress={() => setFilter(id)}
                activeOpacity={0.7}
                style={[
                  styles.chip,
                  {
                    borderColor: active
                      ? colors.neutral.textPrimary
                      : colors.neutral.border,
                  },
                ]}
                accessibilityRole="button"
                accessibilityState={{ selected: active }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: 12,
                    color: active
                      ? colors.neutral.textPrimary
                      : colors.neutral.textSecondary,
                  }}
                >
                  {t(FILTER_LABEL_KEY[id])}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <EmptyState
              title={t("home.notificationsEmpty")}
              description={t("home.notif.emptyHint")}
            />
          </View>
        }
        renderItem={({ item }) => (
          <View
            style={[
              styles.row,
              { borderBottomColor: colors.neutral.border },
            ]}
          >
            <Text
              style={[styles.msg, { color: colors.neutral.textPrimary }]}
              numberOfLines={3}
            >
              {L(item.message)}
            </Text>
            <Text
              style={[styles.time, { color: colors.neutral.textSecondary }]}
            >
              {formatTime(item.createdAt, locale)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
    </RequireAuth>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  headerBlock: {
    paddingHorizontal: spacing.screen,
    paddingTop: 4,
    paddingBottom: 4,
    flexGrow: 0,
    flexShrink: 0,
  },
  backRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    alignSelf: "flex-start",
    marginBottom: 16,
    paddingVertical: 4,
  },
  backLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 15,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 16,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
    lineHeight: 30,
    flex: 1,
  },
  countText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  chipsScroll: {
    flexGrow: 0,
    flexShrink: 0,
    marginBottom: 8,
  },
  chips: {
    gap: spacing.chipGap,
    paddingRight: spacing.xs,
    alignItems: "center",
  },
  chip: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    backgroundColor: "transparent",
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: spacing.screen,
    paddingTop: 4,
    paddingBottom: spacing.scrollBottom,
    flexGrow: 1,
  },
  emptyWrap: {
    paddingTop: 32,
  },
  row: {
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  msg: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 20,
  },
  time: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 16,
    marginTop: 4,
  },
});
