import type { LocalizedString } from "@/lib/i18n/translations";
import type { TrackId } from "@/types/learning";
import type { AppIcon } from "@/constants/icons";

export interface ChatTopic {
  id: string;
  trackId: TrackId;
  title: LocalizedString;
  subtitle: LocalizedString;
  icon: AppIcon;
  introMessage: LocalizedString;
  suggestedReplies: LocalizedString[];
  tutorResponses: LocalizedString[];
}

export const CHAT_TOPICS: ChatTopic[] = [
  {
    id: "net-chat-lan",
    trackId: "networking",
    title: { fr: "Expliquer un LAN", en: "Explain a LAN" },
    subtitle: {
      fr: "Décris ton réseau local",
      en: "Describe your local network",
    },
    icon: "home",
    introMessage: {
      fr: "Salut ! Explique-moi ce qu’est un LAN, avec un exemple chez toi ou au bureau.",
      en: "Hi! Explain what a LAN is, with an example from home or the office.",
    },
    suggestedReplies: [
      { fr: "C’est mon Wi-Fi à la maison", en: "It’s my home Wi-Fi" },
      { fr: "Ça reste sur un site", en: "It stays on one site" },
    ],
    tutorResponses: [
      {
        fr: "Exact — un LAN couvre une zone limitée. Et un WAN alors ?",
        en: "Right — a LAN covers a limited area. What about a WAN?",
      },
      {
        fr: "Bien. Le client demande, le serveur répond : un classique du LAN aussi.",
        en: "Good. Client asks, server answers: a LAN classic too.",
      },
    ],
  },
  {
    id: "net-chat-dns",
    trackId: "networking",
    title: { fr: "Debugger le DNS", en: "Debug DNS" },
    subtitle: {
      fr: "Le site ne charge pas…",
      en: "The site won’t load…",
    },
    icon: "search",
    introMessage: {
      fr: "Un collègue dit « Internet est mort » mais ping d’une IP marche. Que vérifies-tu ?",
      en: "A coworker says “the Internet is dead” but pinging an IP works. What do you check?",
    },
    suggestedReplies: [
      { fr: "Je teste le DNS", en: "I test DNS" },
      { fr: "Je change de résolveur", en: "I change resolver" },
    ],
    tutorResponses: [
      {
        fr: "Oui : si l’IP répond mais pas le nom, le DNS est suspect.",
        en: "Yes: if IP replies but the name doesn’t, DNS is suspicious.",
      },
      {
        fr: "Super. DNS traduit le nom en IP avant HTTP.",
        en: "Great. DNS turns the name into an IP before HTTP.",
      },
    ],
  },
  {
    id: "net-chat-https",
    trackId: "networking",
    title: { fr: "HTTP vs HTTPS", en: "HTTP vs HTTPS" },
    subtitle: {
      fr: "Pourquoi le cadenas ?",
      en: "Why the padlock?",
    },
    icon: "lock",
    introMessage: {
      fr: "Pourquoi préfère-t-on HTTPS à HTTP sur le web moderne ?",
      en: "Why do we prefer HTTPS over HTTP on the modern web?",
    },
    suggestedReplies: [
      { fr: "Pour chiffrer le trafic", en: "To encrypt traffic" },
      { fr: "Port 443 et TLS", en: "Port 443 and TLS" },
    ],
    tutorResponses: [
      {
        fr: "Oui — TLS protège le contenu des regards indiscrets sur le réseau.",
        en: "Yes — TLS protects content from eavesdroppers on the network.",
      },
      {
        fr: "Parfait. HTTP reste le langage ; HTTPS = HTTP + TLS.",
        en: "Perfect. HTTP is still the language; HTTPS = HTTP + TLS.",
      },
    ],
  },
];

export function getChatTopicsForTrack(trackId: TrackId | null | undefined) {
  if (!trackId) return [];
  return CHAT_TOPICS.filter((t) => t.trackId === trackId);
}

/** @deprecated */
export function getChatTopicsForLanguage(code: string) {
  return getChatTopicsForTrack(code as TrackId);
}
