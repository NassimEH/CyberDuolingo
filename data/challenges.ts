import type { LocalizedString } from "@/lib/i18n/translations";
import type { SkillId } from "@/data/skills";

export interface ChallengeQuestion {
  id: string;
  question: LocalizedString;
  options: LocalizedString[];
  correctIndex: number;
  explanation: LocalizedString;
}

export interface Challenge {
  id: string;
  skillId: SkillId;
  unitId?: string;
  title: LocalizedString;
  description: LocalizedString;
  difficulty: "easy" | "medium" | "hard";
  xpBonus: number;
  questions: ChallengeQuestion[];
}

export const CHALLENGES: Challenge[] = [
  {
    id: "ch-lan-basics",
    skillId: "networking-basics",
    unitId: "net-fundamentals",
    title: { fr: "LAN en 60 secondes", en: "LAN in 60 seconds" },
    description: {
      fr: "Vérifie que tu tiens les bases du réseau local.",
      en: "Check that you nail local network basics.",
    },
    difficulty: "easy",
    xpBonus: 15,
    questions: [
      {
        id: "q1",
        question: {
          fr: "Un LAN couvre typiquement…",
          en: "A LAN typically covers…",
        },
        options: [
          { fr: "Une zone limitée (maison, bureau)", en: "A limited area (home, office)" },
          { fr: "Plusieurs continents uniquement", en: "Multiple continents only" },
          { fr: "Uniquement le cloud public", en: "Only the public cloud" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "LAN = Local Area Network, portée locale.",
          en: "LAN = Local Area Network, local reach.",
        },
      },
      {
        id: "q2",
        question: {
          fr: "Dans le modèle client-serveur, le client…",
          en: "In the client-server model, the client…",
        },
        options: [
          { fr: "Demande une ressource", en: "Requests a resource" },
          { fr: "Remplace toujours le DNS", en: "Always replaces DNS" },
          { fr: "Crée les adresses MAC", en: "Creates MAC addresses" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "Le client demande ; le serveur fournit.",
          en: "The client asks; the server provides.",
        },
      },
    ],
  },
  {
    id: "ch-osi-layers",
    skillId: "networking-basics",
    title: { fr: "Couches qui comptent", en: "Layers that matter" },
    description: {
      fr: "OSI / TCP-IP : situe IP, TCP et HTTP.",
      en: "OSI / TCP-IP: place IP, TCP, and HTTP.",
    },
    difficulty: "medium",
    xpBonus: 20,
    questions: [
      {
        id: "q1",
        question: { fr: "IP vit surtout à la couche…", en: "IP mainly lives at the… layer" },
        options: [
          { fr: "Réseau / Internet", en: "Network / Internet" },
          { fr: "Application seule", en: "Application only" },
          { fr: "Physique uniquement", en: "Physical only" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "IP adresse et route au niveau réseau.",
          en: "IP addresses and routes at the network layer.",
        },
      },
      {
        id: "q2",
        question: { fr: "HTTP s’appuie souvent sur…", en: "HTTP often relies on…" },
        options: [
          { fr: "TCP", en: "TCP" },
          { fr: "Uniquement ARP", en: "ARP only" },
          { fr: "SMTP exclusif", en: "SMTP exclusively" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "HTTP tourne typiquement au-dessus de TCP.",
          en: "HTTP typically runs on top of TCP.",
        },
      },
    ],
  },
  {
    id: "ch-ports",
    skillId: "ports-protocols",
    title: { fr: "Ports à connaître", en: "Ports to know" },
    description: {
      fr: "22, 53, 80, 443 — sans se tromper.",
      en: "22, 53, 80, 443 — no mix-ups.",
    },
    difficulty: "easy",
    xpBonus: 18,
    questions: [
      {
        id: "q1",
        question: { fr: "Le port 443 est associé à…", en: "Port 443 is associated with…" },
        options: [
          { fr: "HTTPS", en: "HTTPS" },
          { fr: "FTP clair", en: "Plain FTP" },
          { fr: "Telnet", en: "Telnet" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "HTTPS écoute classiquement sur 443.",
          en: "HTTPS classically listens on 443.",
        },
      },
      {
        id: "q2",
        question: { fr: "SSH utilise souvent le port…", en: "SSH often uses port…" },
        options: [
          { fr: "22", en: "22" },
          { fr: "80", en: "80" },
          { fr: "53", en: "53" },
        ],
        correctIndex: 0,
        explanation: { fr: "SSH → 22.", en: "SSH → 22." },
      },
      {
        id: "q3",
        question: { fr: "UDP est souvent préféré pour…", en: "UDP is often preferred for…" },
        options: [
          { fr: "DNS / streaming léger", en: "DNS / light streaming" },
          { fr: "Remplacer IP", en: "Replacing IP" },
          { fr: "Créer des certificats", en: "Creating certificates" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "UDP est léger ; DNS et médias l’utilisent beaucoup.",
          en: "UDP is lightweight; DNS and media use it a lot.",
        },
      },
    ],
  },
  {
    id: "ch-dns",
    skillId: "dns",
    title: { fr: "SOS DNS", en: "DNS SOS" },
    description: {
      fr: "Quand le nom ne résout pas…",
      en: "When the name won’t resolve…",
    },
    difficulty: "medium",
    xpBonus: 20,
    questions: [
      {
        id: "q1",
        question: {
          fr: "Si une IP répond mais pas example.com, tu suspectes…",
          en: "If an IP replies but example.com doesn’t, you suspect…",
        },
        options: [
          { fr: "Le DNS", en: "DNS" },
          { fr: "Le ventilateur", en: "The fan" },
          { fr: "Le clavier", en: "The keyboard" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "Nom KO + IP OK ⇒ DNS.",
          en: "Name fails + IP works ⇒ DNS.",
        },
      },
      {
        id: "q2",
        question: { fr: "Un enregistrement A mappe…", en: "An A record maps…" },
        options: [
          { fr: "Un nom vers une IPv4", en: "A name to an IPv4" },
          { fr: "Un port vers un switch", en: "A port to a switch" },
          { fr: "Un certificat vers un AP", en: "A certificate to an AP" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "A = nom → IPv4.",
          en: "A = name → IPv4.",
        },
      },
    ],
  },
  {
    id: "ch-https",
    skillId: "http-tls",
    title: { fr: "Cadenas HTTPS", en: "HTTPS padlock" },
    description: {
      fr: "HTTP vs HTTPS et rôle de TLS.",
      en: "HTTP vs HTTPS and the role of TLS.",
    },
    difficulty: "medium",
    xpBonus: 22,
    questions: [
      {
        id: "q1",
        question: { fr: "HTTPS ajoute surtout…", en: "HTTPS mainly adds…" },
        options: [
          { fr: "Le chiffrement TLS", en: "TLS encryption" },
          { fr: "Un switch physique", en: "A physical switch" },
          { fr: "Un masque /8 obligatoire", en: "A mandatory /8 mask" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "HTTPS = HTTP + TLS.",
          en: "HTTPS = HTTP + TLS.",
        },
      },
      {
        id: "q2",
        question: {
          fr: "Un certificat TLS aide à…",
          en: "A TLS certificate helps to…",
        },
        options: [
          {
            fr: "Vérifier l’identité du serveur",
            en: "Verify the server’s identity",
          },
          { fr: "Remplacer le DNS", en: "Replace DNS" },
          { fr: "Créer un LAN", en: "Create a LAN" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "Le navigateur vérifie à qui il parle.",
          en: "The browser checks whom it talks to.",
        },
      },
    ],
  },
  {
    id: "ch-nat",
    skillId: "security",
    title: { fr: "NAT & pare-feu", en: "NAT & firewall" },
    description: {
      fr: "Partage d’IP publique et filtrage basique.",
      en: "Sharing a public IP and basic filtering.",
    },
    difficulty: "hard",
    xpBonus: 25,
    questions: [
      {
        id: "q1",
        question: { fr: "Le NAT sert surtout à…", en: "NAT is mainly used to…" },
        options: [
          {
            fr: "Partager une IP publique entre appareils privés",
            en: "Share one public IP among private devices",
          },
          { fr: "Remplacer le Wi‑Fi", en: "Replace Wi‑Fi" },
          { fr: "Créer des TLD", en: "Create TLDs" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "Plusieurs hôtes privés, une IP publique.",
          en: "Many private hosts, one public IP.",
        },
      },
      {
        id: "q2",
        question: {
          fr: "Un pare-feu filtre typiquement selon…",
          en: "A firewall typically filters by…",
        },
        options: [
          { fr: "Règles (IP, port, protocole)", en: "Rules (IP, port, protocol)" },
          { fr: "La couleur du boîtier", en: "Box color" },
          { fr: "Le volume du ventilateur", en: "Fan volume" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "Autoriser / refuser selon des règles.",
          en: "Allow / deny by rules.",
        },
      },
    ],
  },
  {
    id: "ch-devices",
    skillId: "networking-basics",
    title: { fr: "Switch, routeur, AP", en: "Switch, router, AP" },
    description: {
      fr: "Qui fait quoi dans la topologie.",
      en: "Who does what in the topology.",
    },
    difficulty: "easy",
    xpBonus: 16,
    questions: [
      {
        id: "q1",
        question: {
          fr: "Qui relie surtout des PC sur le même LAN câblé ?",
          en: "What mainly connects PCs on the same wired LAN?",
        },
        options: [
          { fr: "Switch", en: "Switch" },
          { fr: "Imprimante seule", en: "Printer alone" },
          { fr: "Clavier", en: "Keyboard" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "Le switch interconnecte le LAN.",
          en: "The switch interconnects the LAN.",
        },
      },
      {
        id: "q2",
        question: {
          fr: "Qui ouvre typiquement la porte vers Internet ?",
          en: "What typically opens the door to the Internet?",
        },
        options: [
          { fr: "Routeur", en: "Router" },
          { fr: "SSD", en: "SSD" },
          { fr: "Écran", en: "Display" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "Le routeur relie LAN et WAN.",
          en: "The router links LAN and WAN.",
        },
      },
    ],
  },
  {
    id: "ch-ip",
    skillId: "networking-basics",
    title: { fr: "Adresses & masques", en: "Addresses & masks" },
    description: {
      fr: "Privé vs public, rôle du masque.",
      en: "Private vs public, role of the mask.",
    },
    difficulty: "medium",
    xpBonus: 20,
    questions: [
      {
        id: "q1",
        question: {
          fr: "192.168.x.x est typiquement…",
          en: "192.168.x.x is typically…",
        },
        options: [
          { fr: "Une plage privée", en: "A private range" },
          { fr: "Toujours publique Internet", en: "Always public Internet" },
          { fr: "Un port TCP", en: "A TCP port" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "Plages privées RFC1918.",
          en: "RFC1918 private ranges.",
        },
      },
    ],
  },
  {
    id: "ch-tcp-udp",
    skillId: "ports-protocols",
    title: { fr: "TCP vs UDP", en: "TCP vs UDP" },
    description: {
      fr: "Fiabilité contre légèreté.",
      en: "Reliability versus lightness.",
    },
    difficulty: "easy",
    xpBonus: 15,
    questions: [
      {
        id: "q1",
        question: {
          fr: "TCP privilégie surtout…",
          en: "TCP mainly favors…",
        },
        options: [
          { fr: "Fiabilité et ordre", en: "Reliability and order" },
          { fr: "Ignorer toute perte", en: "Ignoring all loss" },
          { fr: "Remplacer Ethernet", en: "Replacing Ethernet" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "TCP retransmet et ordonne.",
          en: "TCP retransmits and orders.",
        },
      },
    ],
  },
  {
    id: "ch-http-methods",
    skillId: "http-tls",
    title: { fr: "Méthodes HTTP", en: "HTTP methods" },
    description: {
      fr: "GET, POST et les codes de statut.",
      en: "GET, POST, and status codes.",
    },
    difficulty: "medium",
    xpBonus: 18,
    questions: [
      {
        id: "q1",
        question: { fr: "GET sert surtout à…", en: "GET is mainly used to…" },
        options: [
          { fr: "Lire une ressource", en: "Read a resource" },
          { fr: "Éteindre le routeur", en: "Power off the router" },
          { fr: "Créer un VLAN", en: "Create a VLAN" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "GET récupère sans modifier.",
          en: "GET retrieves without changing.",
        },
      },
      {
        id: "q2",
        question: { fr: "Un 404 signifie…", en: "A 404 means…" },
        options: [
          { fr: "Ressource introuvable", en: "Resource not found" },
          { fr: "Succès parfait", en: "Perfect success" },
          { fr: "DNS OK uniquement", en: "DNS OK only" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "404 = not found.",
          en: "404 = not found.",
        },
      },
    ],
  },
  {
    id: "ch-lab-ready",
    skillId: "labs",
    title: { fr: "Esprit lab", en: "Lab mindset" },
    description: {
      fr: "Réagir comme en incident (raisonnement).",
      en: "React like in an incident (reasoning).",
    },
    difficulty: "hard",
    xpBonus: 28,
    questions: [
      {
        id: "q1",
        question: {
          fr: "Premier réflexe si « Internet mort » mais ping IP OK ?",
          en: "First reflex if “Internet dead” but IP ping works?",
        },
        options: [
          { fr: "Vérifier le DNS", en: "Check DNS" },
          { fr: "Acheter un nouvel écran", en: "Buy a new display" },
          { fr: "Désinstaller TCP", en: "Uninstall TCP" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "Symptôme classique DNS.",
          en: "Classic DNS symptom.",
        },
      },
    ],
  },
  {
    id: "ch-security-basics",
    skillId: "security",
    title: { fr: "Hygiène pare-feu", en: "Firewall hygiene" },
    description: {
      fr: "Ouvrir le minimum de ports.",
      en: "Open the minimum ports.",
    },
    difficulty: "medium",
    xpBonus: 20,
    questions: [
      {
        id: "q1",
        question: {
          fr: "Le port forwarding doit être…",
          en: "Port forwarding should be…",
        },
        options: [
          {
            fr: "Utilisé avec prudence, seulement si nécessaire",
            en: "Used carefully, only when needed",
          },
          { fr: "Ouvert pour tous les ports", en: "Opened for all ports" },
          { fr: "Ignoré à jamais", en: "Ignored forever" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "Moins on expose, mieux c’est.",
          en: "The less you expose, the better.",
        },
      },
    ],
  },
];

export function getChallenge(id: string) {
  return CHALLENGES.find((c) => c.id === id);
}

export function getDailyChallenge(date = new Date()) {
  const key = date.toISOString().slice(0, 10);
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash + key.charCodeAt(i) * (i + 1)) % 997;
  return CHALLENGES[hash % CHALLENGES.length];
}

export function getChallengesBySkill(skillId: SkillId | "all") {
  if (skillId === "all") return CHALLENGES;
  return CHALLENGES.filter((c) => c.skillId === skillId);
}
