import type { LocalizedString } from "@/lib/i18n/translations";
import Constants from "expo-constants";

export type LegalSlug =
  | "privacy"
  | "terms"
  | "mentions"
  | "gdpr"
  | "data-collected"
  | "data-usage";

export type LegalDoc = {
  slug: LegalSlug;
  title: LocalizedString;
  paragraphs: LocalizedString[];
};

export const SUPPORT_EMAIL = "nassim.elhaddad2004@gmail.com";

/**
 * Public site base for App Store privacy/support URLs.
 * Set EXPO_PUBLIC_SITE_URL to your hosted origin (no trailing slash),
 * e.g. https://stack.nassimelh.me — pages at /legal/privacy.html etc.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.EXPO_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const fromExtra = (
    Constants.expoConfig?.extra as { siteUrl?: string } | undefined
  )?.siteUrl?.trim();
  if (fromExtra) return fromExtra.replace(/\/$/, "");
  return "";
}

export type LegalPublicPage = "privacy" | "terms" | "support";

export function getLegalPublicUrl(page: LegalPublicPage): string | null {
  const base = getSiteUrl();
  if (!base) return null;
  switch (page) {
    case "privacy":
      return `${base}/legal/privacy.html`;
    case "terms":
      return `${base}/legal/terms.html`;
    case "support":
      return `${base}/legal/support.html`;
    default: {
      const _exhaustive: never = page;
      return _exhaustive;
    }
  }
}

export const LEGAL_DOCS: Record<LegalSlug, LegalDoc> = {
  privacy: {
    slug: "privacy",
    title: {
      fr: "Politique de confidentialité",
      en: "Privacy policy",
    },
    paragraphs: [
      {
        fr: "Stack est une application d’apprentissage. L’authentification et la synchronisation de progression passent par Neon Auth (Better Auth) et Neon Postgres (Data API), avec des cookies de session stockés de façon sécurisée sur l’appareil (SecureStore).",
        en: "Stack is a learning app. Authentication and progress sync use Neon Auth (Better Auth) and Neon Postgres (Data API), with session cookies stored securely on-device (SecureStore).",
      },
      {
        fr: "Sur le serveur (Neon) : identifiant utilisateur, e-mail de compte, profil (prénom, avatar), progression (XP, leçons, défis, labs) et certifications suivies. Sur l’appareil : préférences (langue, thème, analytics, notifications) et cache de session.",
        en: "On the server (Neon): user id, account email, profile (name, avatar), progress (XP, lessons, challenges, labs), and certification path. On device: preferences (language, theme, analytics, notifications) and session cache.",
      },
      {
        fr: "Analytics produit : PostHog (hébergeur analytics). Les événements ne sont envoyés que si tu actives les analytics dans Confidentialité → Préférences (opt-in explicite). Désactivation possible à tout moment ; l’app appelle alors opt-out côté SDK.",
        en: "Product analytics: PostHog (analytics host). Events are sent only if you enable analytics in Privacy → Preferences (explicit opt-in). You can turn them off anytime; the app then opts out via the SDK.",
      },
      {
        fr: "Nous ne vendons pas tes données. Tu peux effacer la progression locale, supprimer tes données serveur via Profil → Compte, ou contacter le support.",
        en: "We do not sell your data. You can clear local progress, delete server data via Profile → Account, or contact support.",
      },
    ],
  },
  terms: {
    slug: "terms",
    title: { fr: "Conditions d’utilisation", en: "Terms of use" },
    paragraphs: [
      {
        fr: "Stack est fournie à des fins éducatives. L’usage est sous ta responsabilité.",
        en: "Stack is provided for educational purposes. Use is at your own responsibility.",
      },
      {
        fr: "Le contenu pédagogique (leçons, quiz, labs) est fourni « en l’état ». Il ne remplace pas une formation professionnelle certifiante sauf mention contraire.",
        en: "Learning content (lessons, quizzes, labs) is provided “as is”. It does not replace certified professional training unless stated otherwise.",
      },
      {
        fr: "Tu t’engages à ne pas détourner l’app (abus, reverse engineering malveillant des APIs de secrets, etc.).",
        en: "You agree not to misuse the app (abuse, malicious reverse-engineering of secret APIs, etc.).",
      },
      {
        fr: "Un compte Neon est requis pour utiliser les fonctionnalités principales. La suppression du compte efface la progression synchronisée et te déconnecte.",
        en: "A Neon account is required for core features. Deleting your account erases synced progress and signs you out.",
      },
    ],
  },
  mentions: {
    slug: "mentions",
    title: { fr: "Mentions légales", en: "Legal notice" },
    paragraphs: [
      {
        fr: "Application : Stack — projet éducatif mobile (Expo / React Native).",
        en: "Application: Stack — educational mobile project (Expo / React Native).",
      },
      {
        fr: `Édition : projet pédagogique. Contact : ${SUPPORT_EMAIL}`,
        en: `Publisher: educational project. Contact: ${SUPPORT_EMAIL}`,
      },
      {
        fr: "Hébergement des données applicatives : Neon (Auth + Postgres). Analytics produit (opt-in) : PostHog (événements d’usage, sans publicité).",
        en: "Application data hosting: Neon (Auth + Postgres). Product analytics (opt-in): PostHog (usage events, no advertising).",
      },
    ],
  },
  gdpr: {
    slug: "gdpr",
    title: { fr: "Droits RGPD", en: "GDPR rights" },
    paragraphs: [
      {
        fr: "Selon le RGPD, tu disposes notamment des droits d’accès, de rectification, d’effacement et d’opposition au traitement.",
        en: "Under GDPR you have rights including access, rectification, erasure, and objection to processing.",
      },
      {
        fr: "Dans l’app : Modifier mes infos, Supprimer mes données (locale), Supprimer mon compte (serveur + déconnexion), et opposition aux analytics via Confidentialité → Préférences (PostHog opt-out).",
        en: "In the app: Edit profile, Delete my data (local), Delete my account (server wipe + sign-out), and object to analytics via Privacy → Preferences (PostHog opt-out).",
      },
      {
        fr: `Pour toute demande complémentaire (y compris relative aux données éventuelles chez PostHog), contacte le support : ${SUPPORT_EMAIL}.`,
        en: `For further requests (including any data that may exist in PostHog), contact support: ${SUPPORT_EMAIL}.`,
      },
    ],
  },
  "data-collected": {
    slug: "data-collected",
    title: { fr: "Données collectées", en: "Data we collect" },
    paragraphs: [
      {
        fr: "Compte Neon : e-mail, mot de passe (hashé côté auth), prénom, avatar optionnel.",
        en: "Neon account: email, password (hashed by auth), first name, optional avatar.",
      },
      {
        fr: "Progression synchronisée : XP, leçons / défis / labs terminés, certifications suivies.",
        en: "Synced progress: XP, completed lessons / challenges / labs, certification path.",
      },
      {
        fr: "PostHog (uniquement si analytics activées) : événements d’usage (écrans consultés, leçons / défis / labs démarrés ou terminés, actions produit), identifiant utilisateur technique, propriétés non nominatives (ex. parcours choisi, prénom d’affichage). Pas d’e-mail envoyé à PostHog. Pas de tracking publicitaire tiers.",
        en: "PostHog (only if analytics are enabled): usage events (screens viewed, lessons / challenges / labs started or completed, product actions), technical user id, non-nominative properties (e.g. selected track, display name). No email is sent to PostHog. No third-party ad tracking.",
      },
      {
        fr: "Nous ne collectons pas de données de paiement dans cette version.",
        en: "We do not collect payment data in this version.",
      },
    ],
  },
  "data-usage": {
    slug: "data-usage",
    title: { fr: "Utilisation des données", en: "How we use data" },
    paragraphs: [
      {
        fr: "Les données de compte et de progression servent à authentifier, synchroniser et afficher ton parcours d’apprentissage.",
        en: "Account and progress data are used to authenticate, sync, and display your learning journey.",
      },
      {
        fr: "PostHog sert uniquement à comprendre l’usage produit (funnels, rétention, bugs de parcours) afin d’améliorer Stack. Les analytics restent désactivées par défaut (opt-in) et contrôlables dans Confidentialité → Préférences.",
        en: "PostHog is used only to understand product usage (funnels, retention, journey bugs) to improve Stack. Analytics stay off by default (opt-in) and remain controllable in Privacy → Preferences.",
      },
      {
        fr: "Pas de revente de données à des annonceurs, et pas d’usage publicitaire de PostHog dans cette application.",
        en: "No resale of data to advertisers, and no advertising use of PostHog in this application.",
      },
    ],
  },
};

export function getLegalDoc(slug: string): LegalDoc | undefined {
  if (slug in LEGAL_DOCS) return LEGAL_DOCS[slug as LegalSlug];
  return undefined;
}
