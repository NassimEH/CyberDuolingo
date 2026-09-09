import { useEffect, useMemo, useRef, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LessonChrome } from "@/components/lesson/LessonChrome";
import { QuizOption } from "@/components/ui/QuizOption";
import { fontFamily, radius, spacing } from "@/constants/theme";
import type { Challenge } from "@/data/challenges";
import {
  feedbackComplete,
  feedbackError,
  feedbackSuccess,
} from "@/lib/feedback";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";

const TIMER_BY_DIFFICULTY = {
  easy: 10,
  medium: 15,
  hard: 20,
} as const;

type Props = {
  challenge: Challenge;
  isReplay: boolean;
  onClose: () => void;
  onComplete: (score: number, xpEarned: number) => void;
};

export function ChallengeQuizModal({
  challenge,
  isReplay,
  onClose,
  onComplete,
}: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const questionSeconds =
    TIMER_BY_DIFFICULTY[challenge.difficulty] ?? TIMER_BY_DIFFICULTY.medium;

  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(questionSeconds as number);

  const checkedRef = useRef(checked);
  const showResultRef = useRef(showResult);
  checkedRef.current = checked;
  showResultRef.current = showResult;

  const total = challenge.questions.length;
  const q = challenge.questions[qIndex];
  const progressPct =
    total > 0
      ? Math.round(((qIndex + (checked ? 1 : 0)) / total) * 100)
      : 0;

  const score = useMemo(() => answers.filter(Boolean).length, [answers]);

  const xpEarned = useMemo(() => {
    if (isReplay || score === 0 || total === 0) return 0;
    return Math.round((challenge.xpBonus * score) / Math.max(total, 1));
  }, [isReplay, score, challenge.xpBonus, total]);

  const displayPct = showResult
    ? 100
    : Math.max(
        progressPct,
        Math.round(((qIndex + 1) / Math.max(total, 1)) * 100)
      );

  useEffect(() => {
    if (showResult || checked) return;

    setSecondsLeft(questionSeconds);
    const id = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [qIndex, showResult, checked, questionSeconds]);

  useEffect(() => {
    if (secondsLeft > 0) return;
    if (checkedRef.current || showResultRef.current) return;

    // Timeout = wrong answer on this question only; quiz continues.
    setAnswers((prev) => [...prev, false]);
    setChecked(true);
    void feedbackError();
  }, [secondsLeft]);

  function handlePrimary() {
    if (!q) return;

    if (!checked) {
      if (selected === null) return;
      const ok = selected === q.correctIndex;
      setAnswers((prev) => [...prev, ok]);
      setChecked(true);
      if (ok) void feedbackSuccess();
      else void feedbackError();
      return;
    }

    const isLast = qIndex >= total - 1;
    if (!isLast) {
      setQIndex((i) => i + 1);
      setSelected(null);
      setChecked(false);
      setSecondsLeft(questionSeconds);
      return;
    }

    void feedbackComplete();
    setShowResult(true);
  }

  function handleFinishResult() {
    onComplete(score, xpEarned);
    onClose();
  }

  function handleChromeClose() {
    if (showResult) {
      if (score > 0 || isReplay) {
        handleFinishResult();
      } else {
        onClose();
      }
      return;
    }
    onClose();
  }

  function handleRetry() {
    setQIndex(0);
    setSelected(null);
    setChecked(false);
    setAnswers([]);
    setShowResult(false);
    setSecondsLeft(questionSeconds);
  }

  const stepLabel = showResult
    ? t("challenges.resultTitle")
    : t("challenges.progress", { current: qIndex + 1, total });

  const primaryLabel = checked
    ? qIndex < total - 1
      ? t("lesson.continue")
      : t("challenges.finish")
    : t("lesson.check");

  const timerUrgent = secondsLeft <= 3;
  const lost = score === 0;

  return (
    <Modal visible animationType="slide" onRequestClose={handleChromeClose}>
      <View
        style={[
          styles.safe,
          {
            backgroundColor: colors.neutral.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <LessonChrome
          breadcrumb={L(challenge.title)}
          percent={displayPct}
          stepLabel={stepLabel}
          onClose={handleChromeClose}
        />

        {showResult ? (
          <View style={styles.resultWrap}>
            <View style={styles.resultBody}>
              <Text
                style={[
                  styles.resultTitle,
                  {
                    color: colors.neutral.textPrimary,
                  },
                ]}
              >
                {t("challenges.resultTitle")}
              </Text>
              <Text
                style={[styles.resultScore, { color: colors.neutral.textPrimary }]}
              >
                {t("challenges.resultScore", {
                  score,
                  total,
                })}
              </Text>
              <Text
                style={[
                  styles.resultXp,
                  {
                    color:
                      xpEarned > 0
                        ? colors.semantic.success
                        : colors.neutral.textSecondary,
                  },
                ]}
              >
                {t("challenges.resultXp", { xp: xpEarned })}
              </Text>
            </View>
            {lost && !isReplay ? (
              <>
                <TouchableOpacity
                  style={[
                    styles.primaryBtn,
                    { backgroundColor: colors.primary.blue },
                  ]}
                  onPress={handleRetry}
                >
                  <Text style={styles.primaryBtnText}>
                    {t("challenges.retry")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.secondaryBtn,
                    { borderColor: colors.neutral.border },
                  ]}
                  onPress={onClose}
                >
                  <Text
                    style={[
                      styles.secondaryBtnText,
                      { color: colors.neutral.textPrimary },
                    ]}
                  >
                    {t("common.back")}
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={[
                    styles.primaryBtn,
                    { backgroundColor: colors.primary.blue },
                  ]}
                  onPress={handleFinishResult}
                >
                  <Text style={styles.primaryBtnText}>
                    {t("challenges.finish")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.secondaryBtn,
                    { borderColor: colors.neutral.border },
                  ]}
                  onPress={handleRetry}
                >
                  <Text
                    style={[
                      styles.secondaryBtnText,
                      { color: colors.neutral.textPrimary },
                    ]}
                  >
                    {t("challenges.retry")}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        ) : (
          <>
            <ScrollView
              contentContainerStyle={styles.pad}
              keyboardShouldPersistTaps="handled"
            >
              {q ? (
                <>
                  {!checked ? (
                    <View
                      style={[
                        styles.timerBadge,
                        {
                          backgroundColor: timerUrgent
                            ? "rgba(239,68,68,0.12)"
                            : colors.soft.blueBg,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.timerText,
                          {
                            color: timerUrgent
                              ? colors.semantic.error
                              : colors.primary.blue,
                          },
                        ]}
                      >
                        {t("challenges.timer", { seconds: secondsLeft })}
                      </Text>
                    </View>
                  ) : null}
                  <Text
                    style={[styles.h2, { color: colors.neutral.textPrimary }]}
                  >
                    {L(q.question)}
                  </Text>
                  {q.options.map((opt, idx) => (
                    <QuizOption
                      key={idx}
                      label={L(opt)}
                      selected={selected === idx}
                      checked={checked}
                      correct={idx === q.correctIndex}
                      onPress={() => {
                        if (!checked) setSelected(idx);
                      }}
                    />
                  ))}
                  {checked ? (
                    <Text
                      style={[
                        styles.explanation,
                        { color: colors.neutral.textSecondary },
                      ]}
                    >
                      {L(q.explanation)}
                    </Text>
                  ) : null}
                </>
              ) : null}
            </ScrollView>
            <TouchableOpacity
              style={[
                styles.primaryBtn,
                {
                  backgroundColor: colors.primary.blue,
                  opacity: selected === null && !checked ? 0.5 : 1,
                },
              ]}
              disabled={selected === null && !checked}
              onPress={handlePrimary}
            >
              <Text style={styles.primaryBtnText}>{primaryLabel}</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  pad: {
    paddingHorizontal: spacing.screen,
    paddingTop: 20,
    paddingBottom: 24,
    flexGrow: 1,
  },
  timerBadge: {
    alignSelf: "center",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 16,
  },
  timerText: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
  },
  h2: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
    lineHeight: 31,
    marginBottom: 16,
  },
  explanation: {
    marginTop: 12,
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 24,
  },
  primaryBtn: {
    marginHorizontal: spacing.screen,
    marginBottom: 12,
    borderRadius: radius.md,
    paddingVertical: 16,
    alignItems: "center",
  },
  primaryBtnText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: "#fff",
  },
  secondaryBtn: {
    marginHorizontal: spacing.screen,
    marginBottom: 16,
    borderRadius: radius.md,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
  },
  secondaryBtnText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  resultWrap: {
    flex: 1,
  },
  resultBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.screen,
  },
  resultTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 22,
    marginBottom: 8,
    textAlign: "center",
  },
  resultHint: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 20,
  },
  resultScore: {
    fontFamily: fontFamily.bold,
    fontSize: 36,
    marginBottom: 8,
  },
  resultXp: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
});
