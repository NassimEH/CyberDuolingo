import type { LocalizedString } from "@/lib/i18n/translations";

export type RankFamilyId =
  | "noob"
  | "intern"
  | "technician"
  | "junior-ops"
  | "engineer"
  | "architect"
  | "overlord"
  | "mythic";

export type RankGrade = 1 | 2 | 3;

export type RankId = `${RankFamilyId}-${RankGrade}`;

export interface RankDef {
  id: RankId;
  familyId: RankFamilyId;
  grade: RankGrade;
  minXP: number;
  /** Display title including roman grade, e.g. "Technicien IT II". */
  title: LocalizedString;
  /** Family name without grade (for copy / grouping). */
  familyTitle: LocalizedString;
  punchline: LocalizedString;
}

const GRADE_LABEL: Record<RankGrade, string> = {
  1: "I",
  2: "II",
  3: "III",
};

type RankFamilySeed = {
  id: RankFamilyId;
  title: LocalizedString;
  punchline: LocalizedString;
  /** minXP for grades I, II, III within this family. */
  minXP: readonly [number, number, number];
};

/**
 * Each family has 3 grades (I → II → III) before the next rank family.
 * XP thresholds are stretched so rank-ups feel earned.
 */
const RANK_FAMILIES: RankFamilySeed[] = [
  {
    id: "noob",
    title: { fr: "Noob réseau", en: "Network Noob" },
    punchline: {
      fr: "Tu branches le câble. Le voyage commence.",
      en: "You plug the cable. The journey starts.",
    },
    minXP: [0, 40, 90],
  },
  {
    id: "intern",
    title: { fr: "Stagiaire IT", en: "IT Intern" },
    punchline: {
      fr: "Tu lis les tickets. Tu poses les bonnes questions.",
      en: "You read tickets. You ask the right questions.",
    },
    minXP: [160, 250, 360],
  },
  {
    id: "technician",
    title: { fr: "Technicien IT", en: "IT Technician" },
    punchline: {
      fr: "Ping OK. DNS suspect. Tu sais où regarder.",
      en: "Ping OK. DNS suspicious. You know where to look.",
    },
    minXP: [500, 680, 900],
  },
  {
    id: "junior-ops",
    title: { fr: "Ops junior", en: "Junior Ops" },
    punchline: {
      fr: "Tu stabilises le LAN pendant que les autres panic.",
      en: "You stabilize the LAN while others panic.",
    },
    minXP: [1200, 1550, 1950],
  },
  {
    id: "engineer",
    title: { fr: "Ingénieur réseau", en: "Network Engineer" },
    punchline: {
      fr: "Tu dessines des topologies qui tiennent la route.",
      en: "You design topologies that hold up.",
    },
    minXP: [2500, 3100, 3800],
  },
  {
    id: "architect",
    title: { fr: "Archi packets", en: "Packet Architect" },
    punchline: {
      fr: "Chaque paquet a une histoire. Tu la connais.",
      en: "Every packet has a story. You know it.",
    },
    minXP: [4700, 5700, 6900],
  },
  {
    id: "overlord",
    title: { fr: "Seigneur du subnet", en: "Subnet Overlord" },
    punchline: {
      fr: "Les masques te doivent allégeance.",
      en: "Subnet masks owe you allegiance.",
    },
    minXP: [8400, 10100, 12100],
  },
  {
    id: "mythic",
    title: { fr: "Mythique root", en: "Root Mythic" },
    punchline: {
      fr: "Tu es root. Avec responsabilité.",
      en: "You are root. With responsibility.",
    },
    minXP: [14500, 17500, 21000],
  },
];

function titled(
  familyTitle: LocalizedString,
  grade: RankGrade
): LocalizedString {
  const suffix = GRADE_LABEL[grade];
  return {
    fr: `${familyTitle.fr} ${suffix}`,
    en: `${familyTitle.en} ${suffix}`,
  };
}

export const RANKS: RankDef[] = RANK_FAMILIES.flatMap((family) =>
  ([1, 2, 3] as const).map((grade) => ({
    id: `${family.id}-${grade}` as RankId,
    familyId: family.id,
    grade,
    minXP: family.minXP[grade - 1],
    title: titled(family.title, grade),
    familyTitle: family.title,
    punchline: family.punchline,
  }))
);

export function getRankProgress(totalXP: number) {
  const xp = Math.max(0, Math.floor(totalXP));
  let current = RANKS[0];
  let next: RankDef | null = RANKS[1] ?? null;

  for (let i = 0; i < RANKS.length; i++) {
    if (xp >= RANKS[i].minXP) {
      current = RANKS[i];
      next = RANKS[i + 1] ?? null;
    }
  }

  const floor = current.minXP;
  const ceiling = next?.minXP ?? floor + 1;
  const span = Math.max(ceiling - floor, 1);
  const into = Math.min(Math.max(xp - floor, 0), span);
  const percent = next ? Math.round((into / span) * 100) : 100;

  return {
    current,
    next,
    percent,
    xpToNext: next ? Math.max(ceiling - xp, 0) : 0,
    /** True when the next step changes family (III → next I). */
    isFamilyPromotion: Boolean(
      next && next.familyId !== current.familyId
    ),
  };
}
