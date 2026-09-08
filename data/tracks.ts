import type { Track } from "@/types/learning";

export const TRACKS: Track[] = [
  {
    id: "networking",
    name: { fr: "Réseau", en: "Networking" },
    shortName: { fr: "Réseau", en: "Network" },
    icon: "globe",
    color: "#2563EB",
    learners: "12.4k",
    available: true,
  },
  {
    id: "cloud",
    name: { fr: "Cloud", en: "Cloud" },
    shortName: { fr: "Cloud", en: "Cloud" },
    icon: "cloud",
    color: "#0EA5E9",
    learners: "8.1k",
    available: false,
  },
  {
    id: "security",
    name: { fr: "Sécurité", en: "Security" },
    shortName: { fr: "Sécu", en: "Sec" },
    icon: "shield",
    color: "#10B981",
    learners: "6.7k",
    available: false,
  },
  {
    id: "ai",
    name: { fr: "Intelligence artificielle", en: "Artificial Intelligence" },
    shortName: { fr: "IA", en: "AI" },
    icon: "sparkles",
    color: "#7C3AED",
    learners: "4.2k",
    available: false,
  },
  {
    id: "web",
    name: { fr: "Développement Web", en: "Web Development" },
    shortName: { fr: "Web", en: "Web" },
    icon: "layers",
    color: "#F97316",
    learners: "9.3k",
    available: true,
  },
  {
    id: "software",
    name: { fr: "Développement logiciel", en: "Software Development" },
    shortName: { fr: "Logiciel", en: "Software" },
    icon: "book",
    color: "#8B5CF6",
    learners: "7.8k",
    available: true,
  },
];

export function getTrack(id: string | null | undefined) {
  return TRACKS.find((t) => t.id === id);
}
