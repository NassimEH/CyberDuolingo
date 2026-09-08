import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
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

import { ChatBubble } from "@/components/ChatBubble";
import { IconBadge } from "@/components/IconBadge";
import { MotionView } from "@/components/motion/MotionView";
import { PressScale } from "@/components/motion/PressScale";
import { SectionHeader } from "@/components/SectionHeader";
import { lightColors } from "@/constants/theme";
import {
  getLabScenariosForTrack,
  type LabScenario,
} from "@/data/labScenarios";
import { useLocalize, useT } from "@/lib/i18n";
import { posthog } from "@/lib/posthog";
import { useTheme } from "@/lib/useTheme";
import { useLearningStore } from "@/store/learningStore";
import { useTrackStore } from "@/store/trackStore";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
}

export default function CoachScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const selectedTrack = useTrackStore((s) => s.selectedTrack);
  const completeLab = useLearningStore((s) => s.completeLab);
  const scenarios = getLabScenariosForTrack(selectedTrack);
  const [selected, setSelected] = useState<LabScenario | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [beatIndex, setBeatIndex] = useState(0);
  const [input, setInput] = useState("");
  const [finished, setFinished] = useState(false);
  const listRef = useRef<FlatList<ChatMessage>>(null);

  useEffect(() => {
    posthog.capture("coach_viewed", {
      track: selectedTrack,
      scenarios: scenarios.length,
    });
  }, [selectedTrack, scenarios.length]);

  function openLab(lab: LabScenario) {
    setSelected(lab);
    setMessages([
      { id: "intro", role: "assistant", text: L(lab.introMessage) },
    ]);
    setBeatIndex(0);
    setInput("");
    setFinished(false);
  }

  function closeLab() {
    setSelected(null);
    setMessages([]);
  }

  function advance(userText: string, suggestedIndex?: number) {
    if (!selected || finished) return;
    const beat =
      selected.tutorBeats[
        Math.min(
          suggestedIndex ?? beatIndex,
          selected.tutorBeats.length - 1
        )
      ] ?? selected.tutorBeats[selected.tutorBeats.length - 1];

    const nextBeat = beatIndex + 1;
    const isLast = nextBeat >= selected.tutorBeats.length;

    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: "user", text: userText },
      {
        id: `a-${Date.now()}`,
        role: "assistant",
        text: L(beat),
      },
    ]);
    setBeatIndex(nextBeat);
    setInput("");

    if (isLast && !finished) {
      setFinished(true);
      completeLab(selected.id, selected.xpReward);
    }
  }

  if (selected) {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: colors.neutral.background }}
      >
        <View className="flex-row items-center px-4 py-3 border-b border-border">
          <TouchableOpacity onPress={closeLab}>
            <Ionicons
              name="chevron-back"
              size={24}
              color={colors.neutral.textPrimary}
            />
          </TouchableOpacity>
          <Text className="flex-1 text-center font-poppins-semibold text-base">
            {L(selected.title)}
          </Text>
          <View style={{ width: 24 }} />
        </View>

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <FlatList
            ref={listRef}
            data={messages}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: 16, gap: 10 }}
            onContentSizeChange={() =>
              listRef.current?.scrollToEnd({ animated: true })
            }
            renderItem={({ item, index }) => (
              <ChatBubble
                isUser={item.role === "user"}
                message={item.text}
                senderName={
                  item.role === "assistant" ? t("coach.tutor") : undefined
                }
                index={index}
              />
            )}
          />

          {!finished ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
              style={{ maxHeight: 48, marginBottom: 8 }}
            >
              {selected.suggestedReplies.map((reply, i) => (
                <TouchableOpacity
                  key={i}
                  className="rounded-full px-3 py-2 border border-border"
                  onPress={() => advance(L(reply), i)}
                >
                  <Text className="font-poppins-medium text-xs text-lingua-purple">
                    {L(reply)}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          ) : (
            <Text
              style={{
                textAlign: "center",
                marginBottom: 8,
                color: colors.semantic.success,
                fontFamily: "Poppins-Medium",
              }}
            >
              {t("coach.labComplete", { xp: selected.xpReward })}
            </Text>
          )}

          <View className="flex-row items-center px-4 pb-4 gap-2">
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder={t("coach.placeholder")}
              placeholderTextColor="#9ca3af"
              style={styles.input}
              editable={!finished}
              onSubmitEditing={() => {
                if (input.trim()) advance(input.trim());
              }}
            />
            <TouchableOpacity
              style={styles.send}
              disabled={finished}
              onPress={() => {
                if (input.trim()) advance(input.trim());
              }}
            >
              <Ionicons name="send" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text className="h2 mb-1">{t("tabs.coach")}</Text>
        <Text className="body-md text-text-secondary mb-5">
          {t("coach.subtitle")}
        </Text>
        <SectionHeader title={t("coach.scenarios")} />
        <View className="gap-3">
          {scenarios.map((lab, index) => (
            <MotionView key={lab.id} index={index}>
              <PressScale onPress={() => openLab(lab)}>
                <View className="flex-row items-center bg-white rounded-2xl border border-border p-4">
                  <IconBadge name={lab.icon} size="md" />
                  <View className="flex-1 ml-3">
                    <Text className="font-poppins-semibold text-sm">
                      {L(lab.title)}
                    </Text>
                    <Text className="caption">{L(lab.subtitle)}</Text>
                  </View>
                  <Ionicons
                    name="chevron-forward"
                    size={18}
                    color={colors.neutral.textSecondary}
                  />
                </View>
              </PressScale>
            </MotionView>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 100,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: lightColors.neutral.border,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
  send: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: lightColors.primary.blue,
    alignItems: "center",
    justifyContent: "center",
  },
});
