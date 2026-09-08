import { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";

import { Check, ChevronDown } from "@/constants/icons";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { enterUp, enterZoom } from "@/lib/motion";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { getAllModules, useUnitStore } from "@/store/unitStore";

export function ModulePicker() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const selectedUnitId = useUnitStore((s) => s.selectedUnitId);
  const setSelectedUnitId = useUnitStore((s) => s.setSelectedUnitId);
  const modules = getAllModules();
  const current =
    modules.find((m) => m.id === selectedUnitId) ?? modules[0];

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => setOpen(true)}
        style={styles.trigger}
        accessibilityRole="button"
        accessibilityLabel={t("learn.selectModule")}
      >
        <Text
          style={[styles.triggerText, { color: colors.neutral.textSecondary }]}
          numberOfLines={1}
        >
          {L(current.title)}
        </Text>
        <ChevronDown size={18} color={colors.neutral.textSecondary} />
      </TouchableOpacity>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <Animated.View entering={enterZoom()}>
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
              <Text
                style={[
                  styles.sheetTitle,
                  { color: colors.neutral.textPrimary },
                ]}
              >
                {t("learn.selectModule")}
              </Text>
              {modules.map((mod, i) => {
                const active = mod.id === current.id;
                const comingSoon = mod.lessonIds.length === 0;
                return (
                  <Animated.View key={mod.id} entering={enterUp(i)}>
                    <TouchableOpacity
                      activeOpacity={0.75}
                      onPress={() => {
                        setSelectedUnitId(mod.id);
                        setOpen(false);
                      }}
                      style={[
                        styles.row,
                        active && { backgroundColor: colors.soft.blueBg },
                      ]}
                    >
                      <View style={styles.rowText}>
                        <Text
                          style={[
                            styles.rowTitle,
                            { color: colors.neutral.textPrimary },
                          ]}
                        >
                          {L(mod.title)}
                        </Text>
                        {comingSoon ? (
                          <Text
                            style={[
                              styles.rowMeta,
                              { color: colors.neutral.textSecondary },
                            ]}
                          >
                            {t("learn.moduleComingSoon")}
                          </Text>
                        ) : null}
                      </View>
                      {active ? (
                        <Check size={18} color={colors.primary.blue} />
                      ) : null}
                    </TouchableOpacity>
                  </Animated.View>
                );
              })}
            </Pressable>
          </Animated.View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  trigger: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
    alignSelf: "flex-start",
    maxWidth: "100%",
  },
  triggerText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    flexShrink: 1,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(11, 18, 32, 0.45)",
    justifyContent: "center",
    paddingHorizontal: spacing.screen,
  },
  sheet: {
    borderRadius: radius.lg,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  sheetTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: radius.md,
    gap: 8,
  },
  rowText: { flex: 1 },
  rowTitle: {
    fontFamily: fontFamily.medium,
    fontSize: 15,
  },
  rowMeta: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    marginTop: 2,
  },
});
