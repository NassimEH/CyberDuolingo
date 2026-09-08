import { IconBadge } from "@/components/IconBadge";
import { MotionView } from "@/components/motion/MotionView";
import { images } from "@/constants/images";
import { TRACKS } from "@/data/tracks";
import { useLocalize, useT } from "@/lib/i18n";
import { posthog } from "@/lib/posthog";
import { useTrackStore } from "@/store/trackStore";
import type { Track, TrackId } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TrackSelectScreen() {
  const t = useT();
  const L = useLocalize();
  const setSelectedTrack = useTrackStore((s) => s.setSelectedTrack);
  const [selectedId, setSelectedId] = useState<TrackId>("networking");
  const [search, setSearch] = useState("");

  const filtered = TRACKS.filter((track) =>
    L(track.name).toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item, index }: { item: Track; index: number }) => {
    const isSelected = item.id === selectedId;
    const disabled = !item.available;
    return (
      <MotionView index={index}>
        <TouchableOpacity
          onPress={() => {
            if (!disabled) setSelectedId(item.id);
          }}
          disabled={disabled}
          className={`flex-row items-center py-3.5 px-3.5 bg-white border-[1.5px] rounded-[14px] ${
            isSelected
              ? "bg-[rgba(37,99,235,0.08)] border-lingua-purple"
              : "border-transparent"
          }`}
          activeOpacity={0.8}
          style={{ opacity: disabled ? 0.5 : 1 }}
        >
          <IconBadge name={item.icon} size="md" />
          <View className="flex-1 ml-3">
            <Text className="font-poppins-semibold text-base text-text-primary">
              {L(item.name)}
            </Text>
            <Text className="body-sm text-text-secondary">
              {disabled
                ? t("trackSelect.comingSoon")
                : `${item.learners} · Tech`}
            </Text>
          </View>
          {isSelected && !disabled ? (
            <View className="w-6.5 h-6.5 rounded-full bg-lingua-purple items-center justify-center">
              <Ionicons name="checkmark" size={14} color="#fff" />
            </View>
          ) : (
            <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
          )}
        </TouchableOpacity>
      </MotionView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="flex-row items-center px-4 py-3">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-8 h-8 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={24} color="#001328" />
        </TouchableOpacity>
        <Text className="flex-1 text-center font-poppins-semibold text-lg text-text-primary">
          {t("trackSelect.title")}
        </Text>
        <View className="w-8" />
      </View>

      <Text className="px-4 body-md text-text-secondary mb-3">
        {t("trackSelect.subtitle")}
      </Text>

      <View className="px-4 mb-4">
        <View className="flex-row items-center bg-surface rounded-2xl px-4 py-3">
          <Ionicons name="search-outline" size={18} color="#9ca3af" />
          <TextInput
            style={styles.searchInput}
            placeholder={t("trackSelect.search")}
            placeholderTextColor="#9ca3af"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <Text className="px-4 font-poppins-semibold text-base text-text-primary mb-2">
        {t("trackSelect.popular")}
      </Text>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View className="h-px bg-gray-200" />}
      />

      <View className="px-4 pt-3 pb-3">
        <TouchableOpacity
          className="bg-lingua-purple rounded-2xl items-center py-4"
          activeOpacity={0.85}
          testID="language-confirm-button"
          onPress={() => {
            const selected = TRACKS.find((tr) => tr.id === selectedId);
            posthog.capture("track_selected", {
              track_id: selectedId,
              track_name: selected ? L(selected.name) : selectedId,
            });
            setSelectedTrack(selectedId);
            router.replace("/");
          }}
        >
          <Text className="font-poppins-semibold text-base text-white">
            {t("trackSelect.continue")}
          </Text>
        </TouchableOpacity>
      </View>

      <Image source={images.earth} style={styles.earthImage} resizeMode="cover" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#001328",
    padding: 0,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  earthImage: {
    width: "100%",
    height: 130,
  },
});
