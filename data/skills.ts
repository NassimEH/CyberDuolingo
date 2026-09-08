import type { LocalizedString } from "@/lib/i18n/translations";

export type SkillId =
  | "networking-basics"
  | "ports-protocols"
  | "dns"
  | "http-tls"
  | "security"
  | "labs"
  | "web-fundamentals"
  | "web-frontend"
  | "web-backend"
  | "web-security"
  | "software-basics"
  | "software-architecture"
  | "software-engineering"
  | "software-delivery";

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
  {
    id: "web-fundamentals",
    title: { fr: "Fondamentaux Web", en: "Web fundamentals" },
    color: "#F97316",
    maxXP: 200,
  },
  {
    id: "web-frontend",
    title: { fr: "Frontend", en: "Frontend" },
    color: "#FB923C",
    maxXP: 200,
  },
  {
    id: "web-backend",
    title: { fr: "Backend", en: "Backend" },
    color: "#EA580C",
    maxXP: 200,
  },
  {
    id: "web-security",
    title: { fr: "Sécurité Web", en: "Web security" },
    color: "#C2410C",
    maxXP: 180,
  },
  {
    id: "software-basics",
    title: { fr: "Bases logicielles", en: "Software basics" },
    color: "#8B5CF6",
    maxXP: 200,
  },
  {
    id: "software-architecture",
    title: { fr: "Architecture", en: "Architecture" },
    color: "#A78BFA",
    maxXP: 200,
  },
  {
    id: "software-engineering",
    title: { fr: "Ingénierie", en: "Engineering" },
    color: "#7C3AED",
    maxXP: 200,
  },
  {
    id: "software-delivery",
    title: { fr: "Livraison", en: "Delivery" },
    color: "#6D28D9",
    maxXP: 180,
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
  "web-internet-vs-web": "web-fundamentals",
  "web-client-server": "web-fundamentals",
  "web-http-https": "web-fundamentals",
  "web-url-dns-request": "web-fundamentals",
  "web-html-basics": "web-frontend",
  "web-css-basics": "web-frontend",
  "web-javascript-basics": "web-frontend",
  "web-dom-events-responsive": "web-frontend",
  "web-server-routes": "web-backend",
  "web-rest-api": "web-backend",
  "web-auth-jwt": "web-backend",
  "web-databases": "web-backend",
  "web-cors-cookies": "web-security",
  "web-caching-cdn": "web-security",
  "web-xss-csrf": "web-security",
  "web-injection-headers": "web-security",
  "sw-dev-basics": "software-basics",
  "sw-algorithms": "software-basics",
  "sw-data-structures": "software-basics",
  "sw-programming-basics": "software-basics",
  "sw-oop": "software-architecture",
  "sw-architecture": "software-architecture",
  "sw-solid": "software-architecture",
  "sw-design-patterns-clean": "software-architecture",
  "sw-git-basics": "software-engineering",
  "sw-git-workflow": "software-engineering",
  "sw-testing": "software-engineering",
  "sw-debugging-errors": "software-engineering",
  "sw-api-docs": "software-delivery",
  "sw-cicd": "software-delivery",
  "sw-code-review-quality": "software-delivery",
  "sw-agile": "software-delivery",
};

export function getSkill(id: SkillId) {
  return SKILLS.find((s) => s.id === id);
}
