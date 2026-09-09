import { flushPendingRemoteSync } from "@/lib/remoteSync";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useSessionStore } from "@/store/sessionStore";
import { useSyncStore } from "@/store/syncStore";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function SyncStatusBanner() {
  const t = useT();
  const { colors } = useTheme();
  const status = useSyncStore((s) => s.status);
  const userId = useSessionStore((s) => s.userId);

  if (status !== "offline" && status !== "error") return null;

  const isOffline = status === "offline";
  const label = isOffline ? t("home.syncOffline") : t("home.syncError");

  return (
    <View
      style={[
        styles.wrap,
        {
          backgroundColor: isOffline
            ? "rgba(245, 158, 11, 0.12)"
            : colors.soft.blueBg,
          borderColor: isOffline
            ? "rgba(245, 158, 11, 0.35)"
            : colors.soft.blueBorder,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: isOffline ? "#B45309" : colors.primary.blue,
          },
        ]}
      >
        {label}
      </Text>
      {!isOffline ? (
        <TouchableOpacity
          onPress={() => void flushPendingRemoteSync(userId)}
          hitSlop={8}
        >
          <Text style={[styles.retry, { color: colors.primary.blue }]}>
            {t("home.syncRetry")}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: spacing.cardGap,
  },
  text: {
    flex: 1,
    fontFamily: fontFamily.medium,
    fontSize: 13,
    lineHeight: 18,
  },
  retry: {
    fontFamily: fontFamily.semiBold,
    fontSize: 13,
  },
});
