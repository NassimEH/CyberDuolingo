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
    teaserTopics: [
      { fr: "LAN / WAN", en: "LAN / WAN" },
      { fr: "DNS & ports", en: "DNS & ports" },
      { fr: "Subnetting", en: "Subnetting" },
    ],
  },
  {
    id: "cloud",
    name: { fr: "Cloud", en: "Cloud" },
    shortName: { fr: "Cloud", en: "Cloud" },
    icon: "cloud",
    color: "#0EA5E9",
    learners: "8.1k",
    available: false,
    teaserTopics: [
      { fr: "IAM & régions", en: "IAM & regions" },
      { fr: "Stockage objet", en: "Object storage" },
      { fr: "Architectures HA", en: "HA architectures" },
    ],
  },
  {
    id: "security",
    name: { fr: "Sécurité", en: "Security" },
    shortName: { fr: "Sécu", en: "Sec" },
    icon: "shield",
    color: "#10B981",
    learners: "6.7k",
    available: false,
    teaserTopics: [
      { fr: "Menaces & risques", en: "Threats & risk" },
      { fr: "Auth & secrets", en: "Auth & secrets" },
      { fr: "Defense in depth", en: "Defense in depth" },
    ],
  },
  {
    id: "ai",
    name: { fr: "Intelligence artificielle", en: "Artificial Intelligence" },
    shortName: { fr: "IA", en: "AI" },
    icon: "sparkles",
    color: "#7C3AED",
    learners: "4.2k",
    available: false,
    teaserTopics: [
      { fr: "Prompts utiles", en: "Useful prompts" },
      { fr: "RAG de base", en: "Basic RAG" },
      { fr: "Limites des LLM", en: "LLM limits" },
    ],
  },
  {
    id: "web",
    name: { fr: "Développement Web", en: "Web Development" },
    shortName: { fr: "Web", en: "Web" },
    icon: "layers",
    color: "#F97316",
    learners: "9.3k",
    available: true,
    teaserTopics: [
      { fr: "HTTP & APIs", en: "HTTP & APIs" },
      { fr: "Auth JWT", en: "JWT auth" },
      { fr: "Front / back", en: "Front / back" },
    ],
  },
  {
    id: "software",
    name: { fr: "Développement logiciel", en: "Software Development" },
    shortName: { fr: "Logiciel", en: "Software" },
    icon: "book",
    color: "#8B5CF6",
    learners: "7.8k",
    available: true,
    teaserTopics: [
      { fr: "Git & revue", en: "Git & review" },
      { fr: "Tests", en: "Testing" },
      { fr: "CI/CD", en: "CI/CD" },
    ],
  },
];

export function getTrack(id: string | null | undefined) {
  return TRACKS.find((t) => t.id === id);
}
