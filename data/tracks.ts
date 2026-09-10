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
