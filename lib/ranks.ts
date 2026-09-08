import type { LocalizedString } from "@/lib/i18n/translations";

export type RankId =
  | "noob"
  | "intern"
  | "technician"
  | "junior-ops"
  | "engineer"
  | "architect"
  | "overlord"
  | "mythic";

export interface RankDef {
  id: RankId;
  minXP: number;
  title: LocalizedString;
  punchline: LocalizedString;
}

export const RANKS: RankDef[] = [
  {
    id: "noob",
    minXP: 0,
    title: { fr: "Noob réseau", en: "Network Noob" },
    punchline: {
      fr: "Tu branches le câble. Le voyage commence.",
      en: "You plug the cable. The journey starts.",
    },
  },
  {
    id: "intern",
    minXP: 50,
    title: { fr: "Stagiaire IT", en: "IT Intern" },
    punchline: {
      fr: "Tu lis les tickets. Tu poses les bonnes questions.",
      en: "You read tickets. You ask the right questions.",
    },
  },
  {
    id: "technician",
    minXP: 150,
    title: { fr: "Technicien", en: "Technician" },
    punchline: {
      fr: "Ping OK. DNS suspect. Tu sais où regarder.",
      en: "Ping OK. DNS suspicious. You know where to look.",
    },
  },
  {
    id: "junior-ops",
    minXP: 300,
    title: { fr: "Ops junior", en: "Junior Ops" },
    punchline: {
      fr: "Tu stabilises le LAN pendant que les autres panic.",
      en: "You stabilize the LAN while others panic.",
    },
  },
  {
    id: "engineer",
    minXP: 500,
    title: { fr: "Ingénieur réseau", en: "Network Engineer" },
    punchline: {
      fr: "Tu dessines des topologie qui tiennent la route.",
      en: "You design topologies that hold up.",
    },
  },
  {
    id: "architect",
    minXP: 800,
    title: { fr: "Archi packets", en: "Packet Architect" },
    punchline: {
      fr: "Chaque paquet a une histoire. Tu la connais.",
      en: "Every packet has a story. You know it.",
    },
  },
  {
    id: "overlord",
    minXP: 1200,
    title: { fr: "Seigneur du subnet", en: "Subnet Overlord" },
    punchline: {
      fr: "Les masques te doivent allégeance.",
      en: "Subnet masks owe you allegiance.",
    },
  },
  {
    id: "mythic",
    minXP: 2000,
    title: { fr: "Mythique root", en: "Root Mythic" },
    punchline: {
      fr: "Tu es root. Avec responsabilité.",
      en: "You are root. With responsibility.",
    },
  },
];

export function getRankProgress(totalXP: number) {
  let current = RANKS[0];
  let next: RankDef | null = RANKS[1] ?? null;
  for (let i = 0; i < RANKS.length; i++) {
    if (totalXP >= RANKS[i].minXP) {
      current = RANKS[i];
      next = RANKS[i + 1] ?? null;
    }
  }
  const floor = current.minXP;
  const ceiling = next?.minXP ?? floor + 1;
  const span = Math.max(ceiling - floor, 1);
  const into = Math.min(Math.max(totalXP - floor, 0), span);
  const percent = next ? Math.round((into / span) * 100) : 100;
  return { current, next, percent, xpToNext: next ? ceiling - totalXP : 0 };
}
