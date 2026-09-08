import { Bell } from "@/constants/icons";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import {
  ensureTipLog,
  useLearningStore,
} from "@/store/learningStore";
import { useLocaleStore } from "@/store/localeStore";
import { useEffect } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
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

export function NotificationsSheet({ visible, onClose }: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const logs = useLearningStore((s) => s.activityLogs);
  const locale = useLocaleStore((s) => s.locale);

  useEffect(() => {
    if (visible) ensureTipLog();
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable
          style={[
            styles.sheet,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.head}>
            <Bell size={18} color={colors.neutral.textPrimary} />
            <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
              {t("home.notifications")}
            </Text>
          </View>
          <FlatList
            data={logs}
            keyExtractor={(item) => item.id}
            style={{ maxHeight: 360 }}
            ListEmptyComponent={
              <Text
                style={{
                  color: colors.neutral.textSecondary,
                  padding: 12,
                  fontFamily: fontFamily.regular,
                }}
              >
                {t("home.notificationsEmpty")}
              </Text>
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
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text
              style={{
                color: colors.primary.blue,
                fontFamily: fontFamily.semiBold,
              }}
            >
              {t("common.back")}
            </Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(11,18,32,0.45)",
    justifyContent: "center",
    paddingHorizontal: spacing.screen,
  },
  sheet: {
    borderRadius: radius.lg,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  title: { fontFamily: fontFamily.semiBold, fontSize: 16 },
  row: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  msg: { fontFamily: fontFamily.medium, fontSize: 13 },
  time: { fontFamily: fontFamily.regular, fontSize: 11, marginTop: 4 },
  closeBtn: { alignItems: "center", paddingVertical: 12 },
});
