import { ChevronLeft, Send } from "@/constants/icons";
import { fontFamily, radius } from "@/constants/theme";
import type { LabScenario } from "@/data/labScenarios";
import { ChatBubble } from "@/components/ChatBubble";
import { ChatSuggestion } from "@/components/chat/ChatSuggestion";
import { LabReport } from "@/components/lab/LabReport";
import { LabVerdictCard } from "@/components/lab/LabVerdictCard";
import {
  getLabStep,
  isPerfectRun,
  resolveChoiceAnswer,
  resolveFreeTextAnswer,
} from "@/lib/labEngine";
import {
  feedbackComplete,
  feedbackError,
  feedbackSuccess,
} from "@/lib/feedback";
import { trackEvent } from "@/lib/analytics";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import {
  type LabAnswerRecord,
  useLearningStore,
} from "@/store/learningStore";
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

type ChatItem =
  | { id: string; kind: "message"; role: "user" | "assistant"; text: string }
  | {
      id: string;
      kind: "verdict";
      verdict: LabAnswerRecord["verdict"];
      explanation: string;
    };

type Props = {
  lab: LabScenario;
  isReplay: boolean;
  onClose: () => void;
};

function buildInitialItems(
  lab: LabScenario,
  answers: LabAnswerRecord[],
  L: (s: { fr: string; en: string }) => string
): { items: ChatItem[]; stepId: string } {
  const items: ChatItem[] = [
    {
      id: "intro",
      kind: "message",
      role: "assistant",
      text: L(lab.introMessage),
    },
  ];

  let stepId = lab.startStepId;
  for (let i = 0; i < answers.length; i++) {
    const a = answers[i]!;
    const step = getLabStep(lab, a.stepId);
    if (step) {
      items.push({
        id: `prompt-${a.stepId}-${i}`,
        kind: "message",
        role: "assistant",
        text: L(step.prompt),
      });
    }
    items.push({
      id: `u-${a.stepId}-${i}`,
      kind: "message",
      role: "user",
      text: a.userText,
    });
    items.push({
      id: `v-${a.stepId}-${i}`,
      kind: "verdict",
      verdict: a.verdict,
      explanation: L(a.explanation),
    });
    items.push({
      id: `a-${a.stepId}-${i}`,
      kind: "message",
      role: "assistant",
      text: L(a.tutorReply),
    });
    stepId = a.stepId;
    // Advance to next from stored tutor path: re-resolve next from last answer
  }

  // After answers, current step is next after last answer
  if (answers.length > 0) {
    const last = answers[answers.length - 1]!;
    const resolved =
      last.choiceId != null
        ? resolveChoiceAnswer(lab, last.stepId, last.choiceId, last.userText)
        : resolveFreeTextAnswer(lab, last.stepId, last.userText);
    const nextId = resolved?.nextStepId ?? null;
    if (nextId) {
      stepId = nextId;
      const nextStep = getLabStep(lab, nextId);
      if (nextStep) {
        items.push({
          id: `prompt-${nextId}`,
          kind: "message",
          role: "assistant",
          text: L(nextStep.prompt),
        });
      }
    } else {
      return { items, stepId: last.stepId };
    }
  } else {
    const first = getLabStep(lab, lab.startStepId);
    if (first) {
      items.push({
        id: `prompt-${lab.startStepId}`,
        kind: "message",
        role: "assistant",
        text: L(first.prompt),
      });
    }
    stepId = lab.startStepId;
  }

  return { items, stepId };
}

export function LabSession({ lab, isReplay, onClose }: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const finishLab = useLearningStore((s) => s.finishLab);
  const setLabSession = useLearningStore((s) => s.setLabSession);
  const clearLabSession = useLearningStore((s) => s.clearLabSession);
  const saved = useLearningStore((s) => s.labSessions[lab.id]);

  const initialAnswers = !isReplay && saved?.answers ? saved.answers : [];
  const bootstrap = useMemo(
    () => buildInitialItems(lab, initialAnswers, L),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- bootstrap once per mount
    [lab.id, isReplay]
  );

  const [items, setItems] = useState<ChatItem[]>(bootstrap.items);
  const [stepId, setStepId] = useState(bootstrap.stepId);
  const [answers, setAnswers] = useState<LabAnswerRecord[]>(initialAnswers);
  const [input, setInput] = useState("");
  const [finished, setFinished] = useState(false);
  const [perfect, setPerfect] = useState(false);
  const [awardedXp, setAwardedXp] = useState(0);
  const [replayMode, setReplayMode] = useState(isReplay);
  const listRef = useRef<FlatList<ChatItem>>(null);
  const idSeq = useRef(0);

  function nextId(prefix: string) {
    idSeq.current += 1;
    return `${prefix}-${idSeq.current}`;
  }

  const step = getLabStep(lab, stepId);
  const progressCurrent = Math.min(answers.length, lab.stepCount);

  useEffect(() => {
    if (finished || replayMode) return;
    setLabSession(lab.id, { stepId, answers });
  }, [answers, stepId, finished, replayMode, lab.id, setLabSession]);

  function applyResolved(
    userText: string,
    resolved: NonNullable<ReturnType<typeof resolveChoiceAnswer>>
  ) {
    if (finished) return;

    const record: LabAnswerRecord = {
      stepId: resolved.stepId,
      userText,
      choiceId: resolved.choiceId,
      verdict: resolved.verdict,
      explanation: resolved.explanation,
      expectedAnswer: resolved.expectedAnswer,
      tutorReply: resolved.tutorReply,
    };

    if (resolved.verdict === "correct") void feedbackSuccess();
    else if (resolved.verdict === "partial") void feedbackSuccess();
    else void feedbackError();

    const nextAnswers = [...answers, record];
    setAnswers(nextAnswers);

    const nextItems: ChatItem[] = [
      {
        id: nextId("u"),
        kind: "message",
        role: "user",
        text: userText,
      },
      {
        id: nextId("v"),
        kind: "verdict",
        verdict: resolved.verdict,
        explanation: L(resolved.explanation),
      },
      {
        id: nextId("a"),
        kind: "message",
        role: "assistant",
        text: L(resolved.tutorReply),
      },
    ];

    const nextStepId = resolved.nextStepId;
    if (nextStepId) {
      const nextStep = getLabStep(lab, nextStepId);
      if (nextStep) {
        nextItems.push({
          id: nextId(`prompt-${nextStepId}`),
          kind: "message",
          role: "assistant",
          text: L(nextStep.prompt),
        });
      }
      setStepId(nextStepId);
      setItems((prev) => [...prev, ...nextItems]);
      setInput("");
      return;
    }

    setItems((prev) => [...prev, ...nextItems]);
    setInput("");
    setFinished(true);
    const ok = isPerfectRun(nextAnswers);
    setPerfect(ok);
    if (ok) void feedbackComplete();
    const { awardedXp: xp } = finishLab(lab.id, {
      perfect: ok,
      xpBonus: lab.xpReward,
    });
    setAwardedXp(xp);
    setReplayMode(true);
    trackEvent("lab_completed", {
      lab_id: lab.id,
      perfect: ok,
      xp_awarded: xp,
      answer_count: nextAnswers.length,
      is_replay: isReplay,
    });
  }

  function advanceChoice(choiceId: string, label: string) {
    const resolved = resolveChoiceAnswer(lab, stepId, choiceId, label);
    if (!resolved) return;
    applyResolved(label, resolved);
  }

  function advanceFreeText(text: string) {
    const resolved = resolveFreeTextAnswer(lab, stepId, text);
    if (!resolved) return;
    applyResolved(text, resolved);
  }

  function handleReplay() {
    clearLabSession(lab.id);
    const fresh = buildInitialItems(lab, [], L);
    setItems(fresh.items);
    setStepId(fresh.stepId);
    setAnswers([]);
    setInput("");
    setFinished(false);
    setAwardedXp(0);
    setPerfect(false);
    setReplayMode(true);
  }

  if (finished) {
    return (
      <LabReport
        perfect={perfect}
        awardedXp={awardedXp}
        answers={answers}
        takeaways={lab.takeaways}
        onReplay={handleReplay}
        onClose={onClose}
      />
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
          {t("lab.progress", {
            current: Math.min(progressCurrent + 1, lab.stepCount),
            total: lab.stepCount,
          })}
        </Text>
      </View>

      <View style={[styles.progressTrack, { backgroundColor: colors.neutral.border }]}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${Math.round(Math.min(1, (answers.length + 0.2) / lab.stepCount) * 100)}%`,
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
          data={items}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16, gap: 10 }}
          onContentSizeChange={() =>
            listRef.current?.scrollToEnd({ animated: true })
          }
          renderItem={({ item, index }) => {
            if (item.kind === "verdict") {
              return (
                <LabVerdictCard
                  verdict={item.verdict}
                  explanation={item.explanation}
                />
              );
            }
            return (
              <ChatBubble
                isUser={item.role === "user"}
                message={item.text}
                senderName={
                  item.role === "assistant" ? t("lab.tutor") : undefined
                }
                index={index}
              />
            );
          }}
        />

        {step ? (
          <View style={styles.suggestionsWrap}>
            <Text
              style={[styles.suggestLabel, { color: colors.neutral.textSecondary }]}
            >
              {t("lab.suggested")}
            </Text>
            <View style={styles.suggestionsRow}>
              {step.choices.map((choice, i) => (
                <ChatSuggestion
                  key={choice.id}
                  label={L(choice.label)}
                  primary={choice.verdict === "correct"}
                  index={i}
                  onPress={() => advanceChoice(choice.id, L(choice.label))}
                />
              ))}
            </View>
            <Text style={[styles.hint, { color: colors.neutral.textSecondary }]}>
              {t("lab.suggestHint")}
            </Text>
          </View>
        ) : null}

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
              if (input.trim()) advanceFreeText(input.trim());
            }}
          />
          <TouchableOpacity
            style={[styles.send, { backgroundColor: colors.primary.blue }]}
            onPress={() => {
              if (input.trim()) advanceFreeText(input.trim());
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
});
