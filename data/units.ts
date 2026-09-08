import type { Unit } from "@/types/learning";

export const UNITS: Unit[] = [
  {
    id: "net-fundamentals",
    trackId: "networking",
    title: {
      fr: "Fondamentaux des réseaux",
      en: "Network Fundamentals",
    },
    description: {
      fr: "Les bases pour comprendre comment les machines communiquent.",
      en: "The basics of how machines talk to each other.",
    },
    order: 1,
    progressColor: "#2563EB",
    lessonIds: [
      "net-what-is-a-network",
      "net-osi-tcpip",
      "net-ip-addressing",
      "net-devices",
      "net-ports-protocols",
      "net-dns",
      "net-http-https",
      "net-nat-firewall",
    ],
  },
  {
    id: "net-advanced",
    trackId: "networking",
    title: {
      fr: "Réseaux avancés",
      en: "Advanced Networking",
    },
    description: {
      fr: "Routage, VLAN, QoS et architectures d’entreprise.",
      en: "Routing, VLANs, QoS, and enterprise architectures.",
    },
    order: 2,
    progressColor: "#0EA5E9",
    lessonIds: [],
  },
  {
    id: "sec-basics",
    trackId: "security",
    title: {
      fr: "Cybersécurité",
      en: "Cybersecurity",
    },
    description: {
      fr: "Menaces, chiffrement et bonnes pratiques de sécurité.",
      en: "Threats, encryption, and security best practices.",
    },
    order: 3,
    progressColor: "#10B981",
    lessonIds: [],
  },
  {
    id: "ai-basics",
    trackId: "ai",
    title: {
      fr: "Intelligence artificielle",
      en: "Artificial Intelligence",
    },
    description: {
      fr: "Concepts IA, ML et cas d’usage tech.",
      en: "AI concepts, ML, and tech use cases.",
    },
    order: 4,
    progressColor: "#7C3AED",
    lessonIds: [],
  },
];

export function getUnitsForTrack(trackId: string) {
  return UNITS.filter((u) => u.trackId === trackId).sort(
    (a, b) => a.order - b.order
  );
}

export function getUnitById(unitId: string | null | undefined) {
  if (!unitId) return UNITS[0];
  return UNITS.find((u) => u.id === unitId) ?? UNITS[0];
}
