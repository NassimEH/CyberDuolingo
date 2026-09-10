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
    id: "web-fundamentals",
    trackId: "web",
    title: {
      fr: "Fondamentaux du Web",
      en: "Web Fundamentals",
    },
    description: {
      fr: "Internet, client/serveur, HTTP et cycle de requête.",
      en: "Internet, client/server, HTTP, and the request lifecycle.",
    },
    order: 5,
    progressColor: "#F97316",
    lessonIds: [
      "web-internet-vs-web",
      "web-client-server",
      "web-http-https",
      "web-url-dns-request",
    ],
  },
  {
    id: "web-frontend",
    trackId: "web",
    title: {
      fr: "Frontend",
      en: "Frontend",
    },
    description: {
      fr: "HTML, CSS, JavaScript et interfaces réactives.",
      en: "HTML, CSS, JavaScript, and responsive interfaces.",
    },
    order: 6,
    progressColor: "#FB923C",
    lessonIds: [
      "web-html-basics",
      "web-css-basics",
      "web-javascript-basics",
      "web-dom-events-responsive",
    ],
  },
  {
    id: "web-backend",
    trackId: "web",
    title: {
      fr: "Backend",
      en: "Backend",
    },
    description: {
      fr: "Serveurs, API REST, auth JWT et bases de données.",
      en: "Servers, REST APIs, JWT auth, and databases.",
    },
    order: 7,
    progressColor: "#EA580C",
    lessonIds: [
      "web-server-routes",
      "web-rest-api",
      "web-auth-jwt",
      "web-databases",
    ],
  },
  {
    id: "web-security",
    trackId: "web",
    title: {
      fr: "Sécurité Web",
      en: "Web Security",
    },
    description: {
      fr: "CORS, cookies, XSS, CSRF et en-têtes de sécurité.",
      en: "CORS, cookies, XSS, CSRF, and security headers.",
    },
    order: 8,
    progressColor: "#C2410C",
    lessonIds: [
      "web-cors-cookies",
      "web-caching-cdn",
      "web-xss-csrf",
      "web-injection-headers",
    ],
  },
  {
    id: "sw-fundamentals",
    trackId: "software",
    title: {
      fr: "Fondamentaux logiciels",
      en: "Software Fundamentals",
    },
    description: {
      fr: "Bases du développement, algo et structures de données.",
      en: "Dev basics, algorithms, and data structures.",
    },
    order: 9,
    progressColor: "#8B5CF6",
    lessonIds: [
      "sw-dev-basics",
      "sw-algorithms",
      "sw-data-structures",
      "sw-programming-basics",
    ],
  },
  {
    id: "sw-oop-architecture",
    trackId: "software",
    title: {
      fr: "OOP & Architecture",
      en: "OOP & Architecture",
    },
    description: {
      fr: "POO, SOLID, patterns et architecture propre.",
      en: "OOP, SOLID, patterns, and clean architecture.",
    },
    order: 10,
    progressColor: "#A78BFA",
    lessonIds: [
      "sw-oop",
      "sw-architecture",
      "sw-solid",
      "sw-design-patterns-clean",
    ],
  },
  {
    id: "sw-engineering",
    trackId: "software",
    title: {
      fr: "Ingénierie logicielle",
      en: "Software Engineering",
    },
    description: {
      fr: "Git, tests et débogage au quotidien.",
      en: "Git, testing, and day-to-day debugging.",
    },
    order: 11,
    progressColor: "#7C3AED",
    lessonIds: [
      "sw-git-basics",
      "sw-git-workflow",
      "sw-testing",
      "sw-debugging-errors",
    ],
  },
  {
    id: "sw-delivery",
    trackId: "software",
    title: {
      fr: "Livraison & qualité",
      en: "Delivery & Quality",
    },
    description: {
      fr: "Docs API, CI/CD, revue de code et agile.",
      en: "API docs, CI/CD, code review, and agile.",
    },
    order: 12,
    progressColor: "#6D28D9",
    lessonIds: [
      "sw-api-docs",
      "sw-cicd",
      "sw-code-review-quality",
      "sw-agile",
    ],
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
