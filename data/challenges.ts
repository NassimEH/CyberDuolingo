import type { LocalizedString } from "@/lib/i18n/translations";
import type { SkillId } from "@/data/skills";
import { getUnitById } from "@/data/units";
import type { TrackId } from "@/types/learning";

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
    {
      id: "ch-web-http",
      skillId: "web-fundamentals",
      unitId: "web-fundamentals",
      title: { fr: "HTTP en situation", en: "HTTP in practice" },
      description: {
        fr: "Lire une requête et un code de statut.",
        en: "Read a request and a status code.",
      },
      difficulty: "medium",
      xpBonus: 22,
      questions: [
        {
          id: "q1",
          question: {
            fr: "Que signifie principalement un 404 ?",
            en: "What does a 404 mainly mean?",
          },
          options: [
            { fr: "Ressource introuvable", en: "Resource not found" },
            { fr: "Serveur en panne totale", en: "Server totally down" },
            { fr: "Mot de passe incorrect", en: "Wrong password" },
          ],
          correctIndex: 0,
          explanation: {
            fr: "404 = la ressource demandée n’existe pas (ou pas à cette URL).",
            en: "404 = the requested resource doesn’t exist (or not at that URL).",
          },
        },
        {
          id: "q2",
          question: {
            fr: "HTTPS ajoute surtout…",
            en: "HTTPS mainly adds…",
          },
          options: [
            { fr: "Chiffrement TLS", en: "TLS encryption" },
            { fr: "Plus de publicités", en: "More ads" },
            { fr: "Une base de données", en: "A database" },
          ],
          correctIndex: 0,
          explanation: {
            fr: "HTTPS = HTTP + TLS pour protéger le trafic.",
            en: "HTTPS = HTTP + TLS to protect traffic.",
          },
        },
      ],
    },
    {
      id: "ch-web-rest",
      skillId: "web-backend",
      unitId: "web-backend",
      title: { fr: "API REST", en: "REST API" },
      description: {
        fr: "Verbes HTTP et ressources.",
        en: "HTTP verbs and resources.",
      },
      difficulty: "medium",
      xpBonus: 24,
      questions: [
        {
          id: "q1",
          question: {
            fr: "Quel verbe crée typiquement une ressource ?",
            en: "Which verb typically creates a resource?",
          },
          options: [
            { fr: "POST", en: "POST" },
            { fr: "GET", en: "GET" },
            { fr: "HEAD", en: "HEAD" },
          ],
          correctIndex: 0,
          explanation: {
            fr: "POST est souvent utilisé pour créer ; GET pour lire.",
            en: "POST is often used to create; GET to read.",
          },
        },
      ],
    },
    {
      id: "ch-sw-git",
      skillId: "software-engineering",
      unitId: "sw-engineering",
      title: { fr: "Git essentiels", en: "Git essentials" },
      description: {
        fr: "Commit, branche, merge.",
        en: "Commit, branch, merge.",
      },
      difficulty: "easy",
      xpBonus: 20,
      questions: [
        {
          id: "q1",
          question: {
            fr: "Un commit représente…",
            en: "A commit represents…",
          },
          options: [
            {
              fr: "Un instantané du projet avec message",
              en: "A project snapshot with a message",
            },
            { fr: "Un serveur web", en: "A web server" },
            { fr: "Un certificat TLS", en: "A TLS certificate" },
          ],
          correctIndex: 0,
          explanation: {
            fr: "Le commit fige un état du code + métadonnées.",
            en: "A commit freezes a code state + metadata.",
          },
        },
      ],
    },
    {
      id: "ch-sw-solid",
      skillId: "software-architecture",
      unitId: "sw-oop-architecture",
      title: { fr: "SOLID express", en: "SOLID express" },
      description: {
        fr: "Un principe, un cas.",
        en: "One principle, one case.",
      },
      difficulty: "hard",
      xpBonus: 26,
      questions: [
        {
          id: "q1",
          question: {
            fr: "Le S de SOLID (Single Responsibility) veut dire…",
            en: "The S in SOLID (Single Responsibility) means…",
          },
          options: [
            {
              fr: "Une classe / module a une raison principale de changer",
              en: "A class/module has one main reason to change",
            },
            {
              fr: "Tout doit être dans un seul fichier",
              en: "Everything must be in one file",
            },
            {
              fr: "On n’écrit jamais de tests",
              en: "You never write tests",
            },
          ],
          correctIndex: 0,
          explanation: {
            fr: "SRP = une responsabilité claire, pas « un seul fichier ».",
            en: "SRP = one clear responsibility, not “one file”.",
          },
        },
      ],
    },
    {
      id: "ch-web-frontend",
      skillId: "web-frontend",
      unitId: "web-frontend",
      title: { fr: "Frontend express", en: "Frontend express" },
      description: {
        fr: "HTML, CSS et JavaScript : les rôles de chacun.",
        en: "HTML, CSS, and JavaScript: each one’s role.",
      },
      difficulty: "easy",
      xpBonus: 20,
      questions: [
        {
          id: "q1",
          question: {
            fr: "HTML sert surtout à…",
            en: "HTML is mainly used to…",
          },
          options: [
            {
              fr: "Structurer le contenu de la page",
              en: "Structure the page content",
            },
            {
              fr: "Styliser les couleurs uniquement",
              en: "Style colors only",
            },
            { fr: "Remplacer le serveur", en: "Replace the server" },
          ],
          correctIndex: 0,
          explanation: {
            fr: "HTML = structure (titres, paragraphes, liens). CSS = style. JS = comportement.",
            en: "HTML = structure (headings, paragraphs, links). CSS = style. JS = behavior.",
          },
        },
        {
          id: "q2",
          question: {
            fr: "Le DOM représente…",
            en: "The DOM represents…",
          },
          options: [
            {
              fr: "L’arbre d’éléments de la page manipulable en JS",
              en: "The page’s element tree that JS can manipulate",
            },
            { fr: "Un protocole réseau", en: "A network protocol" },
            { fr: "Un type de base de données", en: "A database type" },
          ],
          correctIndex: 0,
          explanation: {
            fr: "Le DOM est le modèle objet du document : JS lit et modifie les nœuds.",
            en: "The DOM is the document object model: JS reads and updates nodes.",
          },
        },
        {
          id: "q3",
          question: {
            fr: "CSS contrôle principalement l’apparence visuelle. Vrai ou faux ?",
            en: "CSS mainly controls visual appearance. True or false?",
          },
          options: [
            { fr: "Vrai", en: "True" },
            { fr: "Faux", en: "False" },
          ],
          correctIndex: 0,
          explanation: {
            fr: "Vrai : mise en page, couleurs, typo, responsive — c’est le rôle du CSS.",
            en: "True: layout, colors, type, responsive — that’s CSS’s job.",
          },
        },
      ],
    },
    {
      id: "ch-web-xss",
      skillId: "web-security",
      unitId: "web-security",
      title: { fr: "XSS & CORS", en: "XSS & CORS" },
      description: {
        fr: "Attaques navigateur et politiques d’origine.",
        en: "Browser attacks and origin policies.",
      },
      difficulty: "medium",
      xpBonus: 24,
      questions: [
        {
          id: "q1",
          question: {
            fr: "Une attaque XSS consiste typiquement à…",
            en: "An XSS attack typically consists of…",
          },
          options: [
            {
              fr: "Injecter du JS malveillant dans une page vue par d’autres",
              en: "Injecting malicious JS into a page others view",
            },
            {
              fr: "Couper le câble Ethernet",
              en: "Cutting the Ethernet cable",
            },
            {
              fr: "Changer le TTL DNS uniquement",
              en: "Only changing DNS TTL",
            },
          ],
          correctIndex: 0,
          explanation: {
            fr: "XSS = script non fiable exécuté dans le navigateur de la victime (souvent via HTML non échappé).",
            en: "XSS = untrusted script running in the victim’s browser (often via unescaped HTML).",
          },
        },
        {
          id: "q2",
          question: {
            fr: "CORS sert surtout à…",
            en: "CORS is mainly used to…",
          },
          options: [
            {
              fr: "Contrôler quelles origines peuvent appeler une API depuis le navigateur",
              en: "Control which origins can call an API from the browser",
            },
            {
              fr: "Chiffrer les disques durs",
              en: "Encrypt hard drives",
            },
            {
              fr: "Remplacer HTTPS",
              en: "Replace HTTPS",
            },
          ],
          correctIndex: 0,
          explanation: {
            fr: "CORS = politique navigateur/serveur sur les requêtes cross-origin ; ce n’est pas du chiffrement.",
            en: "CORS = browser/server policy for cross-origin requests; it’s not encryption.",
          },
        },
      ],
    },
    {
      id: "ch-sw-basics",
      skillId: "software-basics",
      unitId: "sw-fundamentals",
      title: { fr: "Algo & structures", en: "Algo & structures" },
      description: {
        fr: "Complexité et structures de données de base.",
        en: "Complexity and basic data structures.",
      },
      difficulty: "medium",
      xpBonus: 22,
      questions: [
        {
          id: "q1",
          question: {
            fr: "Une recherche dans un tableau non trié est typiquement…",
            en: "Searching an unsorted array is typically…",
          },
          options: [
            { fr: "O(n) au pire cas", en: "O(n) in the worst case" },
            { fr: "O(1) toujours", en: "Always O(1)" },
            { fr: "O(log n) sans triage", en: "O(log n) without sorting" },
          ],
          correctIndex: 0,
          explanation: {
            fr: "Sans ordre, on peut devoir parcourir tous les éléments → O(n).",
            en: "Without order, you may scan every element → O(n).",
          },
        },
        {
          id: "q2",
          question: {
            fr: "Une pile (stack) suit le principe…",
            en: "A stack follows the principle…",
          },
          options: [
            { fr: "LIFO (dernier entré, premier sorti)", en: "LIFO (last in, first out)" },
            { fr: "FIFO uniquement", en: "FIFO only" },
            { fr: "Aléatoire", en: "Random" },
          ],
          correctIndex: 0,
          explanation: {
            fr: "Stack = LIFO. Queue = FIFO.",
            en: "Stack = LIFO. Queue = FIFO.",
          },
        },
      ],
    },
    {
      id: "ch-sw-cicd",
      skillId: "software-delivery",
      unitId: "sw-delivery",
      title: { fr: "CI/CD & revue", en: "CI/CD & review" },
      description: {
        fr: "Livrer du code avec filet de sécurité.",
        en: "Ship code with a safety net.",
      },
      difficulty: "medium",
      xpBonus: 24,
      questions: [
        {
          id: "q1",
          question: {
            fr: "La CI (Continuous Integration) vise surtout à…",
            en: "CI (Continuous Integration) mainly aims to…",
          },
          options: [
            {
              fr: "Intégrer et tester souvent les changements automatiquement",
              en: "Integrate and test changes often, automatically",
            },
            {
              fr: "Éviter tout usage de Git",
              en: "Avoid using Git entirely",
            },
            {
              fr: "Remplacer les développeurs",
              en: "Replace developers",
            },
          ],
          correctIndex: 0,
          explanation: {
            fr: "CI = builds/tests automatiques à chaque changement pour détecter les régressions tôt.",
            en: "CI = automated builds/tests on each change to catch regressions early.",
          },
        },
        {
          id: "q2",
          question: {
            fr: "Une code review sert principalement à…",
            en: "A code review is mainly for…",
          },
          options: [
            {
              fr: "Partager le savoir et détecter bugs / risques avant merge",
              en: "Share knowledge and catch bugs/risks before merge",
            },
            {
              fr: "Ralentir volontairement sans but",
              en: "Slow things down with no purpose",
            },
            {
              fr: "Générer des certificats TLS",
              en: "Generate TLS certificates",
            },
          ],
          correctIndex: 0,
          explanation: {
            fr: "La revue améliore qualité, lisibilité et alignement d’équipe — pas un frein gratuit.",
            en: "Review improves quality, readability, and team alignment — not pointless friction.",
          },
        },
      ],
    },
  {
    id: "ch-net-exam-drill",
    skillId: "networking-basics",
    unitId: "net-fundamentals",
    title: { fr: "Drill examen réseau", en: "Network exam drill" },
    description: {
      fr: "5 questions serrées pour ancrer OSI, DNS, ports et subnet.",
      en: "5 tight questions to lock OSI, DNS, ports, and subnetting.",
    },
    difficulty: "medium",
    xpBonus: 25,
    questions: [
      {
        id: "q1",
        question: {
          fr: "La couche OSI qui gère les adresses IP est…",
          en: "The OSI layer that handles IP addresses is…",
        },
        options: [
          { fr: "Réseau (3)", en: "Network (3)" },
          { fr: "Transport (4)", en: "Transport (4)" },
          { fr: "Application (7)", en: "Application (7)" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "Le routage et les IP vivent à la couche 3 (réseau).",
          en: "Routing and IPs live at layer 3 (network).",
        },
      },
      {
        id: "q2",
        question: {
          fr: "Le port HTTPS par défaut est…",
          en: "The default HTTPS port is…",
        },
        options: [
          { fr: "443", en: "443" },
          { fr: "80", en: "80" },
          { fr: "22", en: "22" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "HTTP = 80, HTTPS = 443, SSH = 22.",
          en: "HTTP = 80, HTTPS = 443, SSH = 22.",
        },
      },
      {
        id: "q3",
        question: {
          fr: "DNS sert principalement à…",
          en: "DNS mainly…",
        },
        options: [
          {
            fr: "Traduire un nom en adresse IP",
            en: "Translates a name to an IP address",
          },
          {
            fr: "Chiffrer les paquets IP",
            en: "Encrypts IP packets",
          },
          {
            fr: "Attribuer des adresses MAC",
            en: "Assigns MAC addresses",
          },
        ],
        correctIndex: 0,
        explanation: {
          fr: "DNS résout les noms (ex. example.com) vers des IP.",
          en: "DNS resolves names (e.g. example.com) to IPs.",
        },
      },
      {
        id: "q4",
        question: {
          fr: "Dans 192.168.1.0/24, combien d’hôtes utilisables environ ?",
          en: "In 192.168.1.0/24, roughly how many usable hosts?",
        },
        options: [
          { fr: "254", en: "254" },
          { fr: "24", en: "24" },
          { fr: "65534", en: "65534" },
        ],
        correctIndex: 0,
        explanation: {
          fr: "/24 → 256 adresses, moins réseau et broadcast → 254 hôtes.",
          en: "/24 → 256 addresses minus network & broadcast → 254 hosts.",
        },
      },
      {
        id: "q5",
        question: {
          fr: "TCP vs UDP : TCP apporte surtout…",
          en: "TCP vs UDP: TCP mainly provides…",
        },
        options: [
          {
            fr: "Fiabilité et ordre des segments",
            en: "Reliability and ordered delivery",
          },
          {
            fr: "Moins de latence sans contrôle",
            en: "Lower latency with no control",
          },
          {
            fr: "Uniquement le chiffrement TLS",
            en: "Only TLS encryption",
          },
        ],
        correctIndex: 0,
        explanation: {
          fr: "TCP assure livraison et ordre ; UDP est plus léger et non fiable.",
          en: "TCP ensures delivery and order; UDP is lighter and unreliable.",
        },
      },
    ],
  },
  ];

export function getChallenge(id: string) {
  return CHALLENGES.find((c) => c.id === id);
}

const DAILY_XP_MULTIPLIER = 1.75;

export function getDailyChallenge(date = new Date()): Challenge {
  const key = date.toISOString().slice(0, 10);
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash + key.charCodeAt(i) * (i + 1)) % 997;
  const base = CHALLENGES[hash % CHALLENGES.length];
  return {
    ...base,
    xpBonus: Math.round(base.xpBonus * DAILY_XP_MULTIPLIER),
  };
}

export function getChallengesBySkill(skillId: SkillId | "all") {
  if (skillId === "all") return CHALLENGES;
  return CHALLENGES.filter((c) => c.skillId === skillId);
}

function skillToTrack(skillId: SkillId): TrackId {
  if (skillId.startsWith("web-")) return "web";
  if (skillId.startsWith("software-")) return "software";
  return "networking";
}

/** Resolve which learning track a challenge belongs to. */
export function getChallengeTrackId(challenge: Challenge): TrackId {
  if (challenge.unitId) {
    const unit = getUnitById(challenge.unitId);
    if (unit?.trackId) return unit.trackId;
  }
  return skillToTrack(challenge.skillId);
}

export function getChallengesByTrack(trackId: TrackId | "all") {
  if (trackId === "all") return CHALLENGES;
  return CHALLENGES.filter((c) => getChallengeTrackId(c) === trackId);
}
