import type {
  AnswerVerdict,
  LabChoice,
  LabScenario,
  LabStep,
} from "@/data/labScenarios";
import type { LocalizedString } from "@/lib/i18n/translations";

export type ResolvedLabAnswer = {
  stepId: string;
  userText: string;
  choiceId: string | null;
  verdict: AnswerVerdict;
  explanation: LocalizedString;
  expectedAnswer: LocalizedString;
  tutorReply: LocalizedString;
  nextStepId: string | null;
};

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function keywordScore(text: string, keywords: string[] | undefined): number {
  if (!keywords?.length) return 0;
  const hay = normalize(text);
  let hits = 0;
  for (const raw of keywords) {
    const needle = normalize(raw);
    if (!needle) continue;
    if (hay.includes(needle)) hits += 1;
  }
  return hits;
}

export function getLabStep(
  lab: LabScenario,
  stepId: string
): LabStep | undefined {
  return lab.steps[stepId];
}

export function correctChoiceForStep(step: LabStep): LabChoice | undefined {
  return (
    step.choices.find((c) => c.verdict === "correct") ??
    step.choices.find((c) => c.verdict === "partial") ??
    step.choices[0]
  );
}

/** Resolve a chip tap by choice id. */
export function resolveChoiceAnswer(
  lab: LabScenario,
  stepId: string,
  choiceId: string,
  userText: string
): ResolvedLabAnswer | null {
  const step = getLabStep(lab, stepId);
  if (!step) return null;
  const choice = step.choices.find((c) => c.id === choiceId);
  if (!choice) return null;
  const expected = correctChoiceForStep(step);
  return {
    stepId,
    userText,
    choiceId: choice.id,
    verdict: choice.verdict,
    explanation: choice.explanation,
    expectedAnswer: expected?.label ?? choice.label,
    tutorReply: choice.tutorReply,
    nextStepId: choice.nextStepId ?? null,
  };
}

/** Match free text against choice keywords; fall back to step.fallback. */
export function resolveFreeTextAnswer(
  lab: LabScenario,
  stepId: string,
  userText: string
): ResolvedLabAnswer | null {
  const step = getLabStep(lab, stepId);
  if (!step) return null;

  let best: { choice: LabChoice; score: number } | null = null;
  for (const choice of step.choices) {
    const score = keywordScore(userText, choice.keywords);
    if (score <= 0) continue;
    if (!best || score > best.score) best = { choice, score };
  }

  if (best) {
    const expected = correctChoiceForStep(step);
    return {
      stepId,
      userText,
      choiceId: best.choice.id,
      verdict: best.choice.verdict,
      explanation: best.choice.explanation,
      expectedAnswer: expected?.label ?? best.choice.label,
      tutorReply: best.choice.tutorReply,
      nextStepId: best.choice.nextStepId ?? null,
    };
  }

  const expected = correctChoiceForStep(step);
  return {
    stepId,
    userText,
    choiceId: null,
    verdict: step.fallback.verdict,
    explanation: step.fallback.explanation,
    expectedAnswer: expected?.label ?? { fr: "Voir la correction", en: "See correction" },
    tutorReply: step.fallback.tutorReply,
    nextStepId: step.fallback.nextStepId ?? null,
  };
}

export function countVerdicts(answers: { verdict: AnswerVerdict }[]) {
  let correct = 0;
  let partial = 0;
  let incorrect = 0;
  for (const a of answers) {
    switch (a.verdict) {
      case "correct":
        correct += 1;
        break;
      case "partial":
        partial += 1;
        break;
      case "incorrect":
        incorrect += 1;
        break;
      default: {
        const _exhaustive: never = a.verdict;
        void _exhaustive;
        break;
      }
    }
  }
  return { correct, partial, incorrect };
}

/** Perfect run = every answer correct (partials count as imperfect). */
export function isPerfectRun(answers: { verdict: AnswerVerdict }[]): boolean {
  if (answers.length === 0) return false;
  return answers.every((a) => a.verdict === "correct");
}

export function todayDateKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
