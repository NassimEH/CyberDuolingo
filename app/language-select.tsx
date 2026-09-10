import { IconBadge } from "@/components/IconBadge";
import { MotionView } from "@/components/motion/MotionView";
import { BackHeader } from "@/components/ui/BackHeader";
import { images } from "@/constants/images";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { TRACKS } from "@/data/tracks";
import { useLocalize, useT } from "@/lib/i18n";
import { posthog } from "@/lib/posthog";
import { useTheme } from "@/lib/useTheme";
import { useTrackStore } from "@/store/trackStore";
import type { Track, TrackId } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TrackSelectScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const setSelectedTrack = useTrackStore((s) => s.setSelectedTrack);
  const currentTrack = useTrackStore((s) => s.selectedTrack);
  const [selectedId, setSelectedId] = useState<TrackId>(
    currentTrack && TRACKS.some((tr) => tr.id === currentTrack)
      ? currentTrack
      : "networking"
  );

  const modules = useMemo(() => TRACKS, []);

  const renderCard = (item: Track, index: number) => {
    const isSelected = item.id === selectedId;
    return (
      <MotionView key={item.id} index={index}>
        <TouchableOpacity
          onPress={() => setSelectedId(item.id)}
          activeOpacity={0.85}
          style={[
            styles.card,
            {
              backgroundColor: isSelected
                ? colors.soft.blueBg
                : colors.neutral.card,
              borderColor: isSelected
                ? colors.primary.blue
                : colors.neutral.border,
            },
          ]}
        >
          <IconBadge
            name={item.icon}
            size="md"
            color={colors.neutral.textPrimary}
          />
          <View style={styles.cardCopy}>
            <Text
              style={[styles.cardTitle, { color: colors.neutral.textPrimary }]}
            >
              {L(item.name)}
            </Text>
          </View>
          {isSelected ? (
            <View
              style={[styles.check, { backgroundColor: colors.primary.blue }]}
            >
              <Ionicons name="checkmark" size={14} color="#fff" />
            </View>
          ) : (
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.neutral.textSecondary}
            />
          )}
        </TouchableOpacity>
      </MotionView>
    );
  };

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top", "left", "right"]}
    >
      <BackHeader title={t("trackSelect.title")} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={[styles.subtitle, { color: colors.neutral.textSecondary }]}
        >
          {t("trackSelect.subtitle")}
        </Text>

        <Text
          style={[styles.sectionTitle, { color: colors.neutral.textPrimary }]}
        >
          {t("trackSelect.popular")}
        </Text>

        <View style={styles.list}>{modules.map(renderCard)}</View>
      </ScrollView>

      <View
        style={[
          styles.footer,
          { backgroundColor: colors.neutral.background },
        ]}
      >
        <TouchableOpacity
          style={[styles.cta, { backgroundColor: colors.primary.blue }]}
          activeOpacity={0.85}
          testID="language-confirm-button"
          onPress={() => {
            const selected = modules.find((tr) => tr.id === selectedId);
            posthog.capture("track_selected", {
              track_id: selectedId,
              track_name: selected ? L(selected.name) : selectedId,
            });
            setSelectedTrack(selectedId);
            router.replace("/");
          }}
        >
          <Text style={styles.ctaText}>{t("trackSelect.continue")}</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={images.earth}
        style={styles.earthImage}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.screen,
    paddingTop: spacing.sm,
    paddingBottom: spacing.section,
    flexGrow: 1,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing.section,
  },
  sectionTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    marginBottom: spacing.md,
  },
  list: {
    gap: spacing.md,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  cardCopy: {
    flex: 1,
  },
  cardTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  check: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    paddingHorizontal: spacing.screen,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
  },
  cta: {
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  ctaText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: "#fff",
  },
  earthImage: {
    width: "100%",
    height: 130,
  },
});
