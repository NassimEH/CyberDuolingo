import type { LocalizedString } from "@/lib/i18n/translations";

export type SkillId =
  | "networking-basics"
  | "ports-protocols"
  | "dns"
  | "http-tls"
  | "security"
  | "labs";

export interface SkillDef {
  id: SkillId;
  title: LocalizedString;
  color: string;
  maxXP: number;
}

export const SKILLS: SkillDef[] = [
  {
    id: "networking-basics",
    title: { fr: "Fondamentaux réseau", en: "Network basics" },
    color: "#2563EB",
    maxXP: 200,
  },
  {
    id: "ports-protocols",
    title: { fr: "Ports & protocoles", en: "Ports & protocols" },
    color: "#0EA5E9",
    maxXP: 150,
  },
  {
    id: "dns",
    title: { fr: "DNS", en: "DNS" },
    color: "#10B981",
    maxXP: 120,
  },
  {
    id: "http-tls",
    title: { fr: "HTTP / TLS", en: "HTTP / TLS" },
    color: "#7C3AED",
    maxXP: 150,
  },
  {
    id: "security",
    title: { fr: "Sécurité", en: "Security" },
    color: "#EF4444",
    maxXP: 180,
  },
  {
    id: "labs",
    title: { fr: "Labs / Coach", en: "Labs / Coach" },
    color: "#F59E0B",
    maxXP: 200,
  },
];

export const LESSON_SKILL: Record<string, SkillId> = {
  "net-what-is-a-network": "networking-basics",
  "net-osi-tcpip": "networking-basics",
  "net-ip-addressing": "networking-basics",
  "net-devices": "networking-basics",
  "net-ports-protocols": "ports-protocols",
  "net-dns": "dns",
  "net-http-https": "http-tls",
  "net-nat-firewall": "security",
};

export function getSkill(id: SkillId) {
  return SKILLS.find((s) => s.id === id);
}
