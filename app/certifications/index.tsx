import { Award } from "@/constants/icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CertificationCard } from "@/components/certifications/CertificationCard";
import { BackHeader } from "@/components/ui/BackHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { fontFamily, spacing } from "@/constants/theme";
import {
  CERTIFICATIONS,
  TRACK_CERT_DOMAINS,
  filterCertifications,
} from "@/data/certifications";
import { TRACKS } from "@/data/tracks";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useTrackStore } from "@/store/trackStore";
import type { TrackId } from "@/types/learning";

/** The 3 learning modules currently offered in the app. */
const MODULE_TRACKS = TRACKS.filter((t) => t.available).map((t) => t.id);

type TrackFilter = "all" | TrackId;

function certMatchesModuleTrack(
  cert: (typeof CERTIFICATIONS)[number],
  trackId: TrackId
): boolean {
  if (cert.tracks?.includes(trackId)) return true;
  return TRACK_CERT_DOMAINS[trackId]?.includes(cert.domain) ?? false;
}

export default function CertificationsIndex() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const selectedTrack = useTrackStore((s) => s.selectedTrack);

  const initial: TrackFilter =
    selectedTrack && MODULE_TRACKS.includes(selectedTrack)
      ? selectedTrack
      : "all";

  const [trackFilter, setTrackFilter] = useState<TrackFilter>(initial);

  const list = useMemo(() => {
    if (trackFilter === "all") {
      return CERTIFICATIONS.filter((cert) =>
        MODULE_TRACKS.some((trackId) => certMatchesModuleTrack(cert, trackId))
      );
    }
    return filterCertifications({ trackId: trackFilter });
  }, [trackFilter]);

  const chips: { id: TrackFilter; label: string }[] = useMemo(
    () => [
      { id: "all", label: t("certs.filterAll") },
      ...MODULE_TRACKS.map((id) => {
        const track = TRACKS.find((tr) => tr.id === id)!;
        return { id, label: L(track.shortName) };
      }),
    ],
    [L, t]
  );

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top", "bottom"]}
    >
      <BackHeader title={t("certs.title")} />
      <View style={styles.chipsWrap}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.chips}
        >
          {chips.map((item) => {
            const on = item.id === trackFilter;
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => setTrackFilter(item.id)}
                style={[
                  styles.chip,
                  {
                    backgroundColor: on
                      ? colors.soft.blueBg
                      : colors.neutral.surface,
                    borderColor: on
                      ? colors.primary.blue
                      : colors.neutral.border,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: 13,
                    color: on
                      ? colors.primary.blue
                      : colors.neutral.textSecondary,
                  }}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.pad}
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
        ListEmptyComponent={
          <EmptyState
            icon={
              <Award
                size={28}
                color={colors.neutral.textSecondary}
                strokeWidth={2}
              />
            }
            title={t("certs.empty")}
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  chipsWrap: {
    paddingHorizontal: spacing.screen,
    paddingBottom: 8,
  },
  chips: { gap: 8, paddingRight: 8 },
  chip: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  pad: {
    paddingHorizontal: spacing.screen,
    paddingBottom: spacing.scrollBottom,
    flexGrow: 1,
  },
});
