import type { LocalizedString } from "@/lib/i18n/translations";
import type { AppIcon } from "@/constants/icons";
import type { TrackId } from "@/types/learning";

export interface LabBeat {
  /** User reply keywords / suggested index that unlock this beat */
  matchSuggestedIndex?: number;
  reply: LocalizedString;
}

export interface LabScenario {
  id: string;
  trackId: TrackId;
  title: LocalizedString;
  subtitle: LocalizedString;
  icon: AppIcon;
  introMessage: LocalizedString;
  suggestedReplies: LocalizedString[];
  /** Ordered tutor replies as the user progresses through suggestions / free text */
  tutorBeats: LocalizedString[];
  xpReward: number;
}

export const LAB_SCENARIOS: LabScenario[] = [
  {
    id: "lab-dns-incident",
    trackId: "networking",
    title: { fr: "Incident DNS", en: "DNS incident" },
    subtitle: {
      fr: "Le site ne charge plus…",
      en: "The site won’t load…",
    },
    icon: "search",
    introMessage: {
      fr: "Un collègue dit « Internet est mort ». Ping d’une IP publique marche. Par où commences-tu ?",
      en: "A coworker says “the Internet is dead.” Pinging a public IP works. Where do you start?",
    },
    suggestedReplies: [
      { fr: "Je teste la résolution DNS", en: "I test DNS resolution" },
      { fr: "Je change de résolveur (1.1.1.1)", en: "I switch resolver (1.1.1.1)" },
      { fr: "Je regarde le câble uniquement", en: "I only check the cable" },
    ],
    tutorBeats: [
      {
        fr: "Oui — IP OK + noms KO ⇒ DNS. Que fais-tu ensuite ?",
        en: "Yes — IP OK + names fail ⇒ DNS. What’s next?",
      },
      {
        fr: "Changer de résolveur est un bon test. Si ça marche, le résolveur habituel est en cause.",
        en: "Switching resolver is a solid test. If it works, the usual resolver is at fault.",
      },
      {
        fr: "Le câble compte, mais ici le ping IP marche déjà : le chemin L3 existe. Recadre sur le DNS.",
        en: "Cables matter, but IP ping already works: L3 path exists. Refocus on DNS.",
      },
      {
        fr: "Lab terminé : tu as isolé le DNS. Bravo.",
        en: "Lab done: you isolated DNS. Nice work.",
      },
    ],
    xpReward: 14,
  },
  {
    id: "lab-home-lan",
    trackId: "networking",
    title: { fr: "Expliquer ton LAN", en: "Explain your LAN" },
    subtitle: {
      fr: "Décris ta topologie maison",
      en: "Describe your home topology",
    },
    icon: "home",
    introMessage: {
      fr: "Décris-moi ton réseau à la maison : box, Wi‑Fi, appareils. Qu’est-ce qui est le LAN ?",
      en: "Describe your home network: gateway, Wi‑Fi, devices. What is the LAN?",
    },
    suggestedReplies: [
      {
        fr: "Tout ce qui est derrière ma box",
        en: "Everything behind my gateway",
      },
      { fr: "Internet public entier", en: "The whole public Internet" },
      { fr: "Seulement mon téléphone", en: "Only my phone" },
    ],
    tutorBeats: [
      {
        fr: "Exact : le LAN, c’est le côté privé derrière la box. Et le WAN ?",
        en: "Right: the LAN is the private side behind the gateway. And the WAN?",
      },
      {
        fr: "Internet / le lien FAI, c’est plutôt le WAN. Le LAN reste local.",
        en: "Internet / the ISP link is more WAN. The LAN stays local.",
      },
      {
        fr: "Un seul téléphone peut être sur le LAN, mais le LAN inclut souvent plusieurs hôtes.",
        en: "One phone can be on the LAN, but a LAN often includes many hosts.",
      },
      {
        fr: "Bien joué — tu différencies LAN et WAN.",
        en: "Well done — you distinguish LAN and WAN.",
      },
    ],
    xpReward: 12,
  },
  {
    id: "lab-https-choice",
    trackId: "networking",
    title: { fr: "HTTP ou HTTPS ?", en: "HTTP or HTTPS?" },
    subtitle: {
      fr: "Pourquoi le cadenas",
      en: "Why the padlock",
    },
    icon: "lock",
    introMessage: {
      fr: "Tu déploies une page de login. Tu choisis HTTP:80 ou HTTPS:443 ? Pourquoi ?",
      en: "You’re shipping a login page. HTTP:80 or HTTPS:443? Why?",
    },
    suggestedReplies: [
      {
        fr: "HTTPS pour chiffrer et authentifier",
        en: "HTTPS to encrypt and authenticate",
      },
      { fr: "HTTP c’est plus rapide donc OK", en: "HTTP is faster so it’s fine" },
      { fr: "Peu importe le port", en: "The port doesn’t matter" },
    ],
    tutorBeats: [
      {
        fr: "Oui — TLS protège les identifiants en transit et aide à vérifier le serveur.",
        en: "Yes — TLS protects credentials in transit and helps verify the server.",
      },
      {
        fr: "La vitesse ne justifie pas d’envoyer des mots de passe en clair.",
        en: "Speed doesn’t justify sending passwords in the clear.",
      },
      {
        fr: "Le port importe pour le service attendu ; 443 = HTTPS par convention.",
        en: "The port matters for the expected service; 443 = HTTPS by convention.",
      },
      {
        fr: "Lab validé : login = HTTPS.",
        en: "Lab cleared: login = HTTPS.",
      },
    ],
    xpReward: 14,
  },
  {
    id: "lab-firewall-min",
    trackId: "networking",
    title: { fr: "Ouvrir le minimum", en: "Open the minimum" },
    subtitle: {
      fr: "Port forwarding prudent",
      en: "Careful port forwarding",
    },
    icon: "shield",
    introMessage: {
      fr: "On te demande d’exposer un service maison. Quelle approche ?",
      en: "You’re asked to expose a home service. What’s the approach?",
    },
    suggestedReplies: [
      {
        fr: "Un seul port utile, le temps nécessaire",
        en: "One needed port, only as long as required",
      },
      { fr: "Tout ouvrir de 1 à 65535", en: "Open everything 1–65535" },
      { fr: "Désactiver le pare-feu", en: "Disable the firewall" },
    ],
    tutorBeats: [
      {
        fr: "Parfait — surface d’attaque minimale.",
        en: "Perfect — minimal attack surface.",
      },
      {
        fr: "Tout ouvrir est dangereux. Recadre sur le besoin réel.",
        en: "Opening everything is dangerous. Refocus on real need.",
      },
      {
        fr: "Sans filtre, tu perds une couche de défense. On garde le pare-feu.",
        en: "Without a filter you lose a defense layer. Keep the firewall.",
      },
      {
        fr: "Lab terminé : principe du moindre privilège réseau.",
        en: "Lab done: least privilege for the network.",
      },
    ],
    xpReward: 16,
  },
];

export function getLabScenariosForTrack(trackId: TrackId | null | undefined) {
  if (!trackId) return LAB_SCENARIOS;
  const filtered = LAB_SCENARIOS.filter((s) => s.trackId === trackId);
  return filtered.length ? filtered : LAB_SCENARIOS;
}

export function getLabScenario(id: string) {
  return LAB_SCENARIOS.find((s) => s.id === id);
}
