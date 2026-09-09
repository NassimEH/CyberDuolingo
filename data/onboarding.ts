import type { LocalizedString } from "@/lib/i18n/translations";

export type OnboardingPreviewId =
  | "welcome"
  | "home"
  | "learn"
  | "challenges"
  | "lab"
  | "profile";

export type OnboardingSlide = {
  id: string;
  preview: OnboardingPreviewId;
  eyebrow: LocalizedString;
  title: LocalizedString;
  body: LocalizedString;
};

/** Product tour: value prop + one slide per main tab. Keep copy short. */
export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: "welcome",
    preview: "welcome",
    eyebrow: { fr: "Bienvenue", en: "Welcome" },
    title: {
      fr: "La tech, enfin ludique.",
      en: "Tech learning, finally fun.",
    },
    body: {
      fr: "Stack transforme réseaux, web et logiciel en leçons courtes, défis et labs. Comme Duolingo, mais pour monter en compétence tech.",
      en: "Stack turns networking, web, and software into short lessons, challenges, and labs. Like Duolingo, built for real tech skills.",
    },
  },
  {
    id: "home",
    preview: "home",
    eyebrow: { fr: "Accueil", en: "Home" },
    title: {
      fr: "Ton cockpit du jour.",
      en: "Your daily cockpit.",
    },
    body: {
      fr: "Objectif XP, suite du parcours et rappels utiles. Ouvre l'app et tu sais exactement quoi faire ensuite.",
      en: "Daily XP goal, next lessons, and useful nudges. Open the app and know exactly what to do next.",
    },
  },
  {
    id: "learn",
    preview: "learn",
    eyebrow: { fr: "Apprendre", en: "Learn" },
    title: {
      fr: "Des leçons claires, pas des pavés.",
      en: "Clear lessons, not walls of text.",
    },
    body: {
      fr: "Modules progressifs, vocabulaire, quiz et explications. Tu avances étape par étape jusqu'à maîtriser le sujet.",
      en: "Progressive modules, vocab, quizzes, and explanations. Move step by step until the topic sticks.",
    },
  },
  {
    id: "challenges",
    preview: "challenges",
    eyebrow: { fr: "Défis", en: "Challenges" },
    title: {
      fr: "Teste-toi sous pression.",
      en: "Test yourself under pressure.",
    },
    body: {
      fr: "Quiz chronométrés pour ancrer ce que tu viens d'apprendre. Gagne de l'XP et grimpe dans ton parcours.",
      en: "Timed quizzes lock in what you just learned. Earn XP and climb through your track.",
    },
  },
  {
    id: "lab",
    preview: "lab",
    eyebrow: { fr: "Lab", en: "Lab" },
    title: {
      fr: "La pratique, sans le jargon intimidant.",
      en: "Practice without the scary jargon.",
    },
    body: {
      fr: "Scénarios guidés où tu choisis, justifie et reçois un feedback. Tu apprends à raisonner comme sur le terrain.",
      en: "Guided scenarios where you choose, justify, and get feedback. Learn to think like you would on the job.",
    },
  },
  {
    id: "profile",
    preview: "profile",
    eyebrow: { fr: "Profil", en: "Profile" },
    title: {
      fr: "XP, rang et réglages.",
      en: "XP, rank, and settings.",
    },
    body: {
      fr: "Suis ta progression, ajuste la langue et la confidentialité. Prêt ? Crée un compte ou teste tout de suite.",
      en: "Track progress, tweak language and privacy. Ready? Create an account or try it right away.",
    },
  },
];
