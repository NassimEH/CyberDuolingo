import { ChevronLeft, Send } from "@/constants/icons";
import { fontFamily, radius } from "@/constants/theme";
import type { LabScenario } from "@/data/labScenarios";
import type { LocalizedString } from "@/lib/i18n/translations";
import { ChatBubble } from "@/components/ChatBubble";
import { ChatSuggestion } from "@/components/chat/ChatSuggestion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useLearningStore } from "@/store/learningStore";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
}

type Props = {
  lab: LabScenario;
  /** When true, skip XP on finish (already completed). */
  isReplay: boolean;
  /** Resume from this beat when continuing an in-progress lab. */
  initialBeatIndex?: number;
  onClose: () => void;
};

function pickUserReply(
  lab: LabScenario,
  beat: number,
  L: (s: LocalizedString) => string
): string {
  const fromBeat = lab.beatSuggestions?.[beat]?.[0];
  if (fromBeat) return L(fromBeat);
  return L(lab.suggestedReplies[0] ?? { fr: "…", en: "…" });
}

export function buildLabHistory(
  lab: LabScenario,
  beatIndex: number,
  L: (s: LocalizedString) => string
): ChatMessage[] {
  const messages: ChatMessage[] = [
    { id: "intro", role: "assistant", text: L(lab.introMessage) },
  ];
  for (let i = 0; i < beatIndex; i++) {
    const tutor = lab.tutorBeats[i];
    if (!tutor) break;
    messages.push({
      id: `u-resume-${i}`,
      role: "user",
      text: pickUserReply(lab, i, L),
    });
    messages.push({
      id: `a-resume-${i}`,
      role: "assistant",
      text: L(tutor),
    });
  }
  return messages;
}

export function LabSession({
  lab,
  isReplay,
  initialBeatIndex = 0,
  onClose,
}: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const completeLab = useLearningStore((s) => s.completeLab);
  const setLabBeatIndex = useLearningStore((s) => s.setLabBeatIndex);

  const totalBeats = lab.tutorBeats.length;
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    buildLabHistory(lab, initialBeatIndex, L)
  );
  const [beatIndex, setBeatIndex] = useState(initialBeatIndex);
  const [input, setInput] = useState("");
  const [finished, setFinished] = useState(
    initialBeatIndex >= totalBeats && totalBeats > 0
  );
  const [replayMode, setReplayMode] = useState(isReplay);
  const [earnedXp, setEarnedXp] = useState(0);
  const listRef = useRef<FlatList<ChatMessage>>(null);

  useEffect(() => {
    if (!finished) {
      setLabBeatIndex(lab.id, beatIndex);
    }
  }, [beatIndex, finished, lab.id, setLabBeatIndex]);

  const currentSuggestions = useMemo(() => {
    const fromBeats = lab.beatSuggestions?.[beatIndex];
    if (fromBeats?.length) return fromBeats;
    return lab.suggestedReplies;
  }, [lab, beatIndex]);

  const progressCurrent = Math.min(beatIndex + 1, totalBeats);
  const progressRatio = totalBeats > 0 ? progressCurrent / totalBeats : 0;

  function advance(userText: string, suggestedIndex?: number) {
    if (finished) return;
    const beat =
      lab.tutorBeats[
        Math.min(suggestedIndex ?? beatIndex, lab.tutorBeats.length - 1)
      ] ?? lab.tutorBeats[lab.tutorBeats.length - 1];

    const nextBeat = beatIndex + 1;
    const isLast = nextBeat >= lab.tutorBeats.length;

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

    if (isLast) {
      setFinished(true);
      if (replayMode) {
        setEarnedXp(0);
      } else {
        completeLab(lab.id, lab.xpReward);
        setEarnedXp(lab.xpReward);
        setReplayMode(true);
      }
    }
  }

  function handleReplay() {
    setMessages([{ id: "intro", role: "assistant", text: L(lab.introMessage) }]);
    setBeatIndex(0);
    setLabBeatIndex(lab.id, 0);
    setInput("");
    setFinished(false);
    setEarnedXp(0);
    setReplayMode(true);
  }

  if (finished) {
    return (
      <View style={[styles.result, { backgroundColor: colors.neutral.background }]}>
        <Text style={[styles.resultTitle, { color: colors.neutral.textPrimary }]}>
          {t("lab.resultTitle")}
        </Text>
        <Text style={[styles.resultXp, { color: colors.semantic.success }]}>
          {t("lab.xpEarned", { xp: earnedXp })}
        </Text>
        <View style={styles.resultActions}>
          <PrimaryButton label={t("lab.replay")} onPress={handleReplay} />
          <PrimaryButton
            label={t("lab.backToList")}
            variant="secondary"
            onPress={onClose}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <View
        style={[styles.sessionHead, { borderBottomColor: colors.neutral.border }]}
      >
        <TouchableOpacity onPress={onClose} hitSlop={12}>
          <ChevronLeft size={24} color={colors.neutral.textPrimary} />
        </TouchableOpacity>
        <Text
          style={[styles.sessionTitle, { color: colors.neutral.textPrimary }]}
          numberOfLines={1}
        >
          {L(lab.title)}
        </Text>
        <Text style={[styles.progressLabel, { color: colors.neutral.textSecondary }]}>
          {t("lab.progress", { current: progressCurrent, total: totalBeats })}
        </Text>
      </View>

      <View style={[styles.progressTrack, { backgroundColor: colors.neutral.border }]}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${Math.round(progressRatio * 100)}%`,
              backgroundColor: colors.primary.blue,
            },
          ]}
        />
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
                item.role === "assistant" ? t("lab.tutor") : undefined
              }
              index={index}
            />
          )}
        />

        <View style={styles.suggestionsWrap}>
          <Text
            style={[styles.suggestLabel, { color: colors.neutral.textSecondary }]}
          >
            {t("lab.suggested")}
          </Text>
          <View style={styles.suggestionsRow}>
            {currentSuggestions.map((reply, i) => (
              <ChatSuggestion
                key={`${beatIndex}-${i}`}
                label={L(reply)}
                primary={i === 0}
                index={i}
                onPress={() => advance(L(reply), i)}
              />
            ))}
          </View>
          <Text
            style={[styles.hint, { color: colors.neutral.textSecondary }]}
          >
            {t("lab.suggestHint")}
          </Text>
        </View>

        <View style={styles.composer}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder={t("lab.placeholder")}
            placeholderTextColor={colors.neutral.textSecondary}
            style={[
              styles.input,
              {
                backgroundColor: colors.neutral.surface,
                borderColor: colors.neutral.border,
                color: colors.neutral.textPrimary,
              },
            ]}
            onSubmitEditing={() => {
              if (input.trim()) advance(input.trim());
            }}
          />
          <TouchableOpacity
            style={[styles.send, { backgroundColor: colors.primary.blue }]}
            onPress={() => {
              if (input.trim()) advance(input.trim());
            }}
          >
            <Send size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  sessionHead: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    gap: 8,
  },
  sessionTitle: {
    flex: 1,
    textAlign: "center",
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  progressLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    minWidth: 36,
    textAlign: "right",
  },
  progressTrack: {
    height: 3,
    width: "100%",
  },
  progressFill: {
    height: 3,
  },
  suggestionsWrap: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  suggestLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    marginBottom: 8,
  },
  suggestionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  hint: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    marginTop: 8,
  },
  composer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: fontFamily.regular,
    fontSize: 14,
    minHeight: 48,
  },
  send: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 12,
  },
  resultTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 22,
  },
  resultXp: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    marginBottom: 16,
  },
  resultActions: {
    width: "100%",
    gap: 10,
  },
});
