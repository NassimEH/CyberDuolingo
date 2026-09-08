import { useMemo, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";

import { Check, ChevronDown } from "@/constants/icons";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { TRACKS } from "@/data/tracks";
import { enterUp, enterZoom } from "@/lib/motion";
import { useLocalize, useT } from "@/lib/i18n";
import { getContentModulesForTrack } from "@/lib/learnProgress";
import { useTheme } from "@/lib/useTheme";
import { useTrackStore } from "@/store/trackStore";
import { useUnitStore } from "@/store/unitStore";

const AVAILABLE_TRACKS = TRACKS.filter(
  (t) => t.available && getContentModulesForTrack(t.id).length > 0
);

export function ModulePicker() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const selectedTrack = useTrackStore((s) => s.selectedTrack);
  const setSelectedTrack = useTrackStore((s) => s.setSelectedTrack);
  const setSelectedUnitId = useUnitStore((s) => s.setSelectedUnitId);

  const current =
    AVAILABLE_TRACKS.find((tr) => tr.id === selectedTrack) ??
    AVAILABLE_TRACKS[0] ??
    null;

  const modules = useMemo(() => AVAILABLE_TRACKS, []);

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
          style={[styles.triggerText, { color: colors.neutral.textPrimary }]}
          numberOfLines={2}
        >
          {current ? L(current.name) : t("learn.selectModule")}
        </Text>
        <ChevronDown size={20} color={colors.neutral.textPrimary} />
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
              <ScrollView
                style={styles.list}
                bounces={false}
                showsVerticalScrollIndicator={false}
              >
                {modules.map((track, i) => {
                  const active = track.id === current?.id;
                  const firstUnit = getContentModulesForTrack(track.id)[0];
                  return (
                    <Animated.View key={track.id} entering={enterUp(i)}>
                      <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => {
                          setSelectedTrack(track.id);
                          if (firstUnit) setSelectedUnitId(firstUnit.id);
                          setOpen(false);
                        }}
                        style={[
                          styles.row,
                          active && { backgroundColor: colors.soft.blueBg },
                        ]}
                      >
                        <Text
                          style={[
                            styles.rowTitle,
                            { color: colors.neutral.textPrimary },
                          ]}
                          numberOfLines={2}
                        >
                          {L(track.name)}
                        </Text>
                        {active ? (
                          <Check size={18} color={colors.primary.blue} />
                        ) : null}
                      </TouchableOpacity>
                    </Animated.View>
                  );
                })}
              </ScrollView>
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
    gap: 6,
    marginTop: 12,
    alignSelf: "stretch",
    maxWidth: "100%",
  },
  triggerText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    flexShrink: 1,
    lineHeight: 24,
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
    maxHeight: "70%",
  },
  sheetTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  list: {
    flexGrow: 0,
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
  rowTitle: {
    fontFamily: fontFamily.medium,
    fontSize: 15,
    flex: 1,
  },
});
