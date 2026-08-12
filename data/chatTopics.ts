import { LanguageCode } from "@/types/learning";

export interface ChatTopic {
  id: string;
  languageCode: LanguageCode;
  title: string;
  subtitle: string;
  emoji: string;
  introMessage: string;
  suggestedReplies: string[];
  tutorResponses: string[];
}

export const CHAT_TOPICS: ChatTopic[] = [
  {
    id: "es-order-coffee",
    languageCode: "es",
    title: "Order at a café",
    subtitle: "Practice ordering drinks politely",
    emoji: "☕",
    introMessage:
      "¡Hola! Imagine we're at a café in Madrid. What would you like to order?",
    suggestedReplies: [
      "Un café con leche, por favor.",
      "¿Qué recomiendas?",
      "Quisiera un té verde.",
    ],
    tutorResponses: [
      "¡Muy bien! Your pronunciation is clear. Try adding \"por favor\" at the end for extra politeness.",
      "Great effort! In Spain, \"café con leche\" is the most popular morning drink.",
      "Nice vocabulary! You could also say \"Me gustaría...\" to sound more formal.",
    ],
  },
  {
    id: "es-talk-about-day",
    languageCode: "es",
    title: "Talk about your day",
    subtitle: "Share what you did today",
    emoji: "🌤️",
    introMessage:
      "¿Cómo estuvo tu día? Tell me one thing you did today — in Spanish!",
    suggestedReplies: [
      "Hoy fui al parque.",
      "Estudié español por la mañana.",
      "Comí paella con mis amigos.",
    ],
    tutorResponses: [
      "Excellent! You used the preterite correctly. Can you add when you did it?",
      "I love that! Try connecting ideas with \"y también\" to extend your answer.",
      "Well done! Your sentence structure is natural. Keep going!",
    ],
  },
  {
    id: "fr-at-restaurant",
    languageCode: "fr",
    title: "At the restaurant",
    subtitle: "Order food and ask for the bill",
    emoji: "🥐",
    introMessage:
      "Bonjour! Vous êtes au restaurant. Que souhaitez-vous commander?",
    suggestedReplies: [
      "Je voudrais une salade, s'il vous plaît.",
      "L'addition, s'il vous plaît.",
      "Qu'est-ce que vous recommandez?",
    ],
    tutorResponses: [
      "Parfait! \"Je voudrais\" is the polite way to order in French.",
      "Très bien! Remember that \"s'il vous plaît\" makes any request sound courteous.",
      "Excellent! You're building real restaurant confidence.",
    ],
  },
  {
    id: "fr-introduce-yourself",
    languageCode: "fr",
    title: "Introduce yourself",
    subtitle: "Name, origin, and hobbies",
    emoji: "🙋",
    introMessage:
      "Enchanté! Présentez-vous — comment vous appelez-vous?",
    suggestedReplies: [
      "Je m'appelle Alex.",
      "Je viens de France.",
      "J'aime la musique et le sport.",
    ],
    tutorResponses: [
      "Super! Now try adding \"Et toi?\" to ask the other person back.",
      "Great introduction! \"Je viens de...\" is perfect for saying where you're from.",
      "Nice! Link your hobbies with \"J'aime... et aussi...\"",
    ],
  },
  {
    id: "ja-self-intro",
    languageCode: "ja",
    title: "Self introduction",
    subtitle: "Basic 自己紹介 practice",
    emoji: "🇯🇵",
    introMessage:
      "はじめまして! Try introducing yourself in Japanese.",
    suggestedReplies: [
      "はじめまして。Alex です。",
      "よろしく おねがいします。",
      "アメリカ から きました。",
    ],
    tutorResponses: [
      "Great start! Always follow with よろしくお願いします.",
      "Perfect! That's the essential phrase for first meetings.",
      "Well done! Your particles are in the right places.",
    ],
  },
  {
    id: "ja-order-food",
    languageCode: "ja",
    title: "Order ramen",
    subtitle: "Practice at an izakaya",
    emoji: "🍜",
    introMessage:
      "いらっしゃいませ! What would you like to order at this ramen shop?",
    suggestedReplies: [
      "ラーメン を ください。",
      "みず を ください。",
      "おすすめ は なん です か?",
    ],
    tutorResponses: [
      "Nice! をください is the standard way to request something.",
      "Good! You can also say お水をお願いします for water.",
      "Excellent question! おすすめは何ですか is very natural.",
    ],
  },
];

export function getChatTopicsForLanguage(languageCode: LanguageCode | null) {
  if (!languageCode) return CHAT_TOPICS;
  return CHAT_TOPICS.filter((topic) => topic.languageCode === languageCode);
}
