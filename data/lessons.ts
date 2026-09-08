import type { Lesson } from "@/types/learning";

export const LESSONS: Lesson[] = [
  {
    id: "net-what-is-a-network",
    unitId: "net-fundamentals",
    title: {
      fr: "Qu'est-ce qu'un réseau?",
      en: "What is a network?",
    },
    description: {
      fr: "Comprendre LAN, WAN, clients et serveurs, et pourquoi les machines se connectent.",
      en: "Understand LAN, WAN, clients and servers, and why machines connect.",
    },
    icon: "network",
    estimatedMinutes: 8,
    xpReward: 20,
    goals: [
      {
        description: {
          fr: "Définir un réseau informatique et son rôle",
          en: "Define a computer network and its role",
        },
        xpReward: 5,
      },
      {
        description: {
          fr: "Différencier LAN, WAN et le modèle client-serveur",
          en: "Distinguish LAN, WAN, and the client-server model",
        },
        xpReward: 5,
      },
      {
        description: {
          fr: "Identifier les composants de base d'un réseau",
          en: "Identify the basic components of a network",
        },
        xpReward: 5,
      },
    ],
    sections: [
      {
        id: "net-what-s1",
        title: {
          fr: "Une idée simple",
          en: "A simple idea",
        },
        body: {
          fr: "Un réseau informatique est un ensemble d'appareils capables d'échanger des données. PC, téléphones, serveurs, imprimantes et objets connectés peuvent tous faire partie d'un réseau. Internet est le plus grand réseau public ; ton Wi-Fi domestique en est un petit, local.",
          en: "A computer network is a set of devices that can exchange data. PCs, phones, servers, printers, and connected devices can all be part of a network. The Internet is the largest public network; your home Wi-Fi is a small, local one.",
        },
      },
      {
        id: "net-what-s2",
        diagram: "lan-wan",
        title: {
          fr: "LAN et WAN",
          en: "LAN and WAN",
        },
        body: {
          fr: "On classe souvent les réseaux selon leur portée géographique. Cette distinction aide à comprendre où les données restent locales et où elles traversent de longues distances.",
          en: "Networks are often classified by geographic reach. This distinction helps you see where data stays local and where it travels long distances.",
        },
        bullets: [
          {
            fr: "LAN (Local Area Network) : maison, bureau ou campus, sur une courte distance.",
            en: "LAN (Local Area Network): home, office, or campus, over a short distance.",
          },
          {
            fr: "WAN (Wide Area Network) : relie plusieurs sites ou villes ; Internet est un WAN.",
            en: "WAN (Wide Area Network): links multiple sites or cities; the Internet is a WAN.",
          },
          {
            fr: "Un routeur domestique relie souvent ton LAN à Internet (WAN).",
            en: "A home router often connects your LAN to the Internet (WAN).",
          },
        ],
      },
      {
        id: "net-what-s3",
        diagram: "client-server",
        title: {
          fr: "Client et serveur",
          en: "Client and server",
        },
        body: {
          fr: "Dans le modèle le plus courant, un client demande une ressource et un serveur la fournit. Ton navigateur est un client ; le site web tourne sur un serveur. Un même appareil peut parfois jouer les deux rôles selon le contexte.",
          en: "In the most common model, a client requests a resource and a server provides it. Your browser is a client; the website runs on a server. The same device can sometimes play both roles depending on the context.",
        },
      },
      {
        id: "net-what-s4",
        title: {
          fr: "Pourquoi les réseaux comptent",
          en: "Why networks matter",
        },
        body: {
          fr: "Sans réseau, chaque machine serait isolée. Les réseaux permettent le partage de fichiers, la messagerie, le cloud, le streaming et presque tous les services numériques du quotidien. Comprendre ce modèle est la base de tout le reste en réseaux.",
          en: "Without a network, each machine would be isolated. Networks enable file sharing, messaging, cloud services, streaming, and almost every everyday digital service. Understanding this model is the foundation for everything else in networking.",
        },
        callout: {
          fr: "À retenir",
          en: "Key takeaway",
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Réseau", en: "Network" },
        definition: {
          fr: "Ensemble d'appareils interconnectés qui échangent des données.",
          en: "A set of interconnected devices that exchange data.",
        },
      },
      {
        term: { fr: "LAN", en: "LAN" },
        definition: {
          fr: "Réseau local à portée limitée (maison, bureau, campus).",
          en: "Local area network with limited reach (home, office, campus).",
        },
      },
      {
        term: { fr: "WAN", en: "WAN" },
        definition: {
          fr: "Réseau étendu qui relie des sites éloignés ; Internet en est un exemple.",
          en: "Wide area network linking distant sites; the Internet is an example.",
        },
      },
      {
        term: { fr: "Client", en: "Client" },
        definition: {
          fr: "Appareil ou logiciel qui demande un service ou une ressource.",
          en: "A device or software that requests a service or resource.",
        },
      },
      {
        term: { fr: "Serveur", en: "Server" },
        definition: {
          fr: "Appareil ou logiciel qui fournit un service ou une ressource.",
          en: "A device or software that provides a service or resource.",
        },
      },
      {
        term: { fr: "Routeur", en: "Router" },
        definition: {
          fr: "Équipement qui achemine le trafic entre différents réseaux.",
          en: "A device that forwards traffic between different networks.",
        },
      },
    ],
    activities: [
      {
        id: "net-what-q1",
        type: "multiple-choice",
        question: {
          fr: "Un réseau Wi-Fi domestique est typiquement un…",
          en: "A home Wi-Fi network is typically a…",
        },
        options: [
          { fr: "LAN", en: "LAN" },
          { fr: "WAN uniquement", en: "WAN only" },
          { fr: "Satellite", en: "Satellite" },
          { fr: "VPN", en: "VPN" },
        ],
        correctAnswer: { fr: "LAN", en: "LAN" },
        hint: {
          fr: "Pense à la portée géographique.",
          en: "Think about geographic reach.",
        },
        explanation: {
          fr: "Explication : Pense à la portée géographique.",
          en: "Explanation: Think about geographic reach.",
        },
      },
      {
        id: "net-what-q2",
        type: "multiple-choice",
        question: {
          fr: "Dans le modèle client-serveur, le navigateur web est…",
          en: "In the client-server model, the web browser is…",
        },
        options: [
          { fr: "Un client", en: "A client" },
          { fr: "Un serveur", en: "A server" },
          { fr: "Un routeur", en: "A router" },
          { fr: "Un commutateur", en: "A switch" },
        ],
        correctAnswer: { fr: "Un client", en: "A client" },
        hint: {
          fr: "Qui demande la page web ?",
          en: "Who requests the web page?",
        },
        explanation: {
          fr: "Explication : Qui demande la page web ?",
          en: "Explanation: Who requests the web page?",
        },
      },
      {
        id: "net-what-q3",
        type: "multiple-choice",
        question: {
          fr: "Internet est un exemple de…",
          en: "The Internet is an example of a…",
        },
        options: [
          { fr: "WAN", en: "WAN" },
          { fr: "LAN uniquement", en: "LAN only" },
          { fr: "Câble USB", en: "USB cable" },
          { fr: "Disque dur", en: "Hard drive" },
        ],
        correctAnswer: { fr: "WAN", en: "WAN" },
        hint: {
          fr: "Il relie des réseaux du monde entier.",
          en: "It connects networks worldwide.",
        },
        explanation: {
          fr: "Explication : Il relie des réseaux du monde entier.",
          en: "Explanation: It connects networks worldwide.",
        },
      },
      {
        id: "net-what-q4",
        type: "multiple-choice",
        question: {
          fr: "Quel rôle joue typiquement un site web ?",
          en: "What role does a website typically play?",
        },
        options: [
          { fr: "Serveur", en: "Server" },
          { fr: "Client uniquement", en: "Client only" },
          { fr: "Modem", en: "Modem" },
          { fr: "Câblage", en: "Cabling" },
        ],
        correctAnswer: { fr: "Serveur", en: "Server" },
        hint: {
          fr: "Il fournit des pages aux navigateurs.",
          en: "It provides pages to browsers.",
        },
        explanation: {
          fr: "Explication : Il fournit des pages aux navigateurs.",
          en: "Explanation: It provides pages to browsers.",
        },
      },
      {
        id: "net-what-q5",
        type: "multiple-choice",
        question: {
          fr: "Quel équipement relie souvent un LAN domestique à Internet ?",
          en: "Which device often connects a home LAN to the Internet?",
        },
        options: [
          { fr: "Un routeur", en: "A router" },
          { fr: "Une clé USB", en: "A USB stick" },
          { fr: "Un écran", en: "A monitor" },
          { fr: "Un clavier", en: "A keyboard" },
        ],
        correctAnswer: { fr: "Un routeur", en: "A router" },
        hint: {
          fr: "Il achemine le trafic entre réseaux.",
          en: "It forwards traffic between networks.",
        },
        explanation: {
          fr: "Explication : Il achemine le trafic entre réseaux.",
          en: "Explanation: It forwards traffic between networks.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech bienveillante. Tu enseignes les fondamentaux des réseaux : définition d'un réseau, LAN, WAN, client et serveur. Réponds en français, clairement, avec des exemples concrets du quotidien.",
        en: "You are Nova, a friendly tech tutor. You teach network fundamentals: what a network is, LAN, WAN, client and server. Answer in English, clearly, with concrete everyday examples.",
      },
      introMessage: {
        fr: "Salut ! Je suis Nova. Aujourd'hui on explore ce qu'est un réseau. Pose-moi tes questions !",
        en: "Hi! I'm Nova. Today we explore what a network is. Ask me anything!",
      },
      topics: [
        {
          fr: "Différence entre LAN et WAN",
          en: "Difference between LAN and WAN",
        },
        {
          fr: "Modèle client-serveur",
          en: "Client-server model",
        },
        {
          fr: "Rôle du routeur à la maison",
          en: "Role of a home router",
        },
      ],
    },
  },
  {
    id: "net-osi-tcpip",
    unitId: "net-fundamentals",
    title: {
      fr: "Modèles OSI et TCP/IP",
      en: "OSI and TCP/IP models",
    },
    description: {
      fr: "Découvrir les couches OSI et TCP/IP pour comprendre comment les données circulent.",
      en: "Explore the OSI and TCP/IP layers to understand how data flows.",
    },
    icon: "layers",
    estimatedMinutes: 10,
    xpReward: 22,
    goals: [
      {
        description: {
          fr: "Expliquer pourquoi on utilise des modèles en couches",
          en: "Explain why layered models are used",
        },
        xpReward: 5,
      },
      {
        description: {
          fr: "Comparer OSI (7 couches) et TCP/IP (4 couches)",
          en: "Compare OSI (7 layers) and TCP/IP (4 layers)",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Situer IP, TCP et HTTP dans les couches",
          en: "Place IP, TCP, and HTTP in the layers",
        },
        xpReward: 7,
      },
    ],
    sections: [
      {
        id: "net-osi-s1",
        title: {
          fr: "Pourquoi des couches ?",
          en: "Why layers?",
        },
        body: {
          fr: "Les modèles en couches décomposent le réseau en rôles séparés : application, transport, adressage, liaison physique. Chaque couche s'occupe d'un problème précis, ce qui facilite la conception, le diagnostic et l'évolution des protocoles.",
          en: "Layered models split networking into separate roles: application, transport, addressing, and physical links. Each layer handles a specific problem, which makes design, troubleshooting, and protocol evolution easier.",
        },
      },
      {
        id: "net-osi-s2",
        diagram: "osi-layers",
        title: {
          fr: "Le modèle OSI",
          en: "The OSI model",
        },
        body: {
          fr: "OSI (Open Systems Interconnection) compte 7 couches. On l'utilise surtout comme référence pédagogique et pour nommer les problèmes (couche 2, couche 3, etc.).",
          en: "OSI (Open Systems Interconnection) has 7 layers. It is mainly used as a teaching reference and to name problems (layer 2, layer 3, and so on).",
        },
        bullets: [
          {
            fr: "Couches 1-2 : bits et trames (câbles, Wi-Fi, Ethernet).",
            en: "Layers 1-2: bits and frames (cables, Wi-Fi, Ethernet).",
          },
          {
            fr: "Couche 3 : adressage et routage (IP).",
            en: "Layer 3: addressing and routing (IP).",
          },
          {
            fr: "Couches 4-7 : transport jusqu'aux applications (TCP, HTTP...).",
            en: "Layers 4-7: transport up to applications (TCP, HTTP...).",
          },
        ],
      },
      {
        id: "net-osi-s3",
        diagram: "tcp-udp",
        title: {
          fr: "Le modèle TCP/IP",
          en: "The TCP/IP model",
        },
        body: {
          fr: "TCP/IP est le modèle pratique d'Internet. Il regroupe souvent en 4 couches : Application, Transport, Internet, Accès réseau. IP vit à la couche Internet ; TCP et UDP au Transport ; HTTP, DNS, HTTPS à l'Application.",
          en: "TCP/IP is the practical Internet model. It is often grouped into 4 layers: Application, Transport, Internet, and Network Access. IP lives at Internet; TCP and UDP at Transport; HTTP, DNS, and HTTPS at Application.",
        },
      },
      {
        id: "net-osi-s4",
        title: {
          fr: "Encapsulation",
          en: "Encapsulation",
        },
        body: {
          fr: "Quand tu envoies un message, chaque couche ajoute ses informations (en-têtes). À l'arrivée, les couches les retirent dans l'ordre inverse. C'est l'encapsulation : comme des enveloppes imbriquées autour des données utiles.",
          en: "When you send a message, each layer adds its own information (headers). On arrival, layers remove them in reverse order. That is encapsulation: nested envelopes around the useful data.",
        },
        callout: {
          fr: "À retenir",
          en: "Key takeaway",
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "OSI", en: "OSI" },
        definition: {
          fr: "Modèle de référence à 7 couches pour décrire les réseaux.",
          en: "A 7-layer reference model for describing networks.",
        },
      },
      {
        term: { fr: "TCP/IP", en: "TCP/IP" },
        definition: {
          fr: "Suite de protocoles et modèle pratique d'Internet (souvent 4 couches).",
          en: "The Internet protocol suite and practical model (often 4 layers).",
        },
      },
      {
        term: { fr: "Couche", en: "Layer" },
        definition: {
          fr: "Niveau du modèle avec un rôle précis (adressage, transport, etc.).",
          en: "A model level with a specific role (addressing, transport, etc.).",
        },
      },
      {
        term: { fr: "Encapsulation", en: "Encapsulation" },
        definition: {
          fr: "Ajout d'en-têtes couche par couche autour des données.",
          en: "Adding headers layer by layer around the data.",
        },
      },
      {
        term: { fr: "Protocole", en: "Protocol" },
        definition: {
          fr: "Ensemble de règles pour communiquer (ex. IP, TCP, HTTP).",
          en: "A set of rules for communication (e.g. IP, TCP, HTTP).",
        },
      },
      {
        term: { fr: "Transport", en: "Transport" },
        definition: {
          fr: "Couche qui assure l'échange fiable ou non entre applications (TCP/UDP).",
          en: "Layer that provides reliable or unreliable exchange between apps (TCP/UDP).",
        },
      },
    ],
    activities: [
      {
        id: "net-osi-q1",
        type: "multiple-choice",
        question: {
          fr: "Combien de couches compte le modèle OSI ?",
          en: "How many layers does the OSI model have?",
        },
        options: [
          { fr: "7", en: "7" },
          { fr: "4", en: "4" },
          { fr: "2", en: "2" },
          { fr: "12", en: "12" },
        ],
        correctAnswer: { fr: "7", en: "7" },
        hint: {
          fr: "C'est le modèle de référence classique.",
          en: "It is the classic reference model.",
        },
        explanation: {
          fr: "Explication : C'est le modèle de référence classique.",
          en: "Explanation: It is the classic reference model.",
        },
      },
      {
        id: "net-osi-q2",
        type: "multiple-choice",
        question: {
          fr: "À quelle couche TCP/IP se trouve typiquement HTTP ?",
          en: "At which TCP/IP layer is HTTP typically found?",
        },
        options: [
          { fr: "Application", en: "Application" },
          { fr: "Internet", en: "Internet" },
          { fr: "Physique", en: "Physical" },
          { fr: "Liaison uniquement", en: "Data link only" },
        ],
        correctAnswer: { fr: "Application", en: "Application" },
        hint: {
          fr: "HTTP sert aux applications web.",
          en: "HTTP serves web applications.",
        },
        explanation: {
          fr: "Explication : HTTP sert aux applications web.",
          en: "Explanation: HTTP serves web applications.",
        },
      },
      {
        id: "net-osi-q3",
        type: "multiple-choice",
        question: {
          fr: "Le protocole IP est surtout associé à…",
          en: "The IP protocol is mainly associated with…",
        },
        options: [
          { fr: "L'adressage et le routage", en: "Addressing and routing" },
          { fr: "Le câblage cuivre", en: "Copper cabling" },
          { fr: "L'affichage écran", en: "Screen display" },
          { fr: "Le stockage disque", en: "Disk storage" },
        ],
        correctAnswer: {
          fr: "L'adressage et le routage",
          en: "Addressing and routing",
        },
        hint: {
          fr: "Pense à la couche Internet / couche 3.",
          en: "Think Internet layer / layer 3.",
        },
        explanation: {
          fr: "Explication : Pense à la couche Internet / couche 3.",
          en: "Explanation: Think Internet layer / layer 3.",
        },
      },
      {
        id: "net-osi-q4",
        type: "multiple-choice",
        question: {
          fr: "Qu'est-ce que l'encapsulation ?",
          en: "What is encapsulation?",
        },
        options: [
          {
            fr: "Ajouter des en-têtes couche par couche",
            en: "Adding headers layer by layer",
          },
          {
            fr: "Effacer toutes les adresses IP",
            en: "Deleting all IP addresses",
          },
          {
            fr: "Couper le câble réseau",
            en: "Cutting the network cable",
          },
          {
            fr: "Désactiver le Wi-Fi",
            en: "Turning off Wi-Fi",
          },
        ],
        correctAnswer: {
          fr: "Ajouter des en-têtes couche par couche",
          en: "Adding headers layer by layer",
        },
        hint: {
          fr: "Comme des enveloppes autour du message.",
          en: "Like envelopes around the message.",
        },
        explanation: {
          fr: "Explication : Comme des enveloppes autour du message.",
          en: "Explanation: Like envelopes around the message.",
        },
      },
      {
        id: "net-osi-q5",
        type: "multiple-choice",
        question: {
          fr: "Combien de couches compte souvent le modèle TCP/IP ?",
          en: "How many layers does the TCP/IP model often have?",
        },
        options: [
          { fr: "4", en: "4" },
          { fr: "7", en: "7" },
          { fr: "1", en: "1" },
          { fr: "10", en: "10" },
        ],
        correctAnswer: { fr: "4", en: "4" },
        hint: {
          fr: "Application, Transport, Internet, Accès réseau.",
          en: "Application, Transport, Internet, Network Access.",
        },
        explanation: {
          fr: "Explication : Application, Transport, Internet, Accès réseau.",
          en: "Explanation: Application, Transport, Internet, Network Access.",
        },
      },
      {
        id: "net-osi-q6",
        type: "multiple-choice",
        question: {
          fr: "TCP se situe typiquement à la couche…",
          en: "TCP typically sits at the… layer",
        },
        options: [
          { fr: "Transport", en: "Transport" },
          { fr: "Physique", en: "Physical" },
          { fr: "Présentation uniquement", en: "Presentation only" },
          { fr: "Session uniquement", en: "Session only" },
        ],
        correctAnswer: { fr: "Transport", en: "Transport" },
        hint: {
          fr: "Avec UDP, c'est la couche entre application et IP.",
          en: "With UDP, it is the layer between application and IP.",
        },
        explanation: {
          fr: "Explication : Avec UDP, c'est la couche entre application et IP.",
          en: "Explanation: With UDP, it is the layer between application and IP.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech bienveillante. Tu enseignes les modèles OSI et TCP/IP, les couches et l'encapsulation. Réponds en français, clairement, avec des analogies simples.",
        en: "You are Nova, a friendly tech tutor. You teach the OSI and TCP/IP models, layers, and encapsulation. Answer in English, clearly, with simple analogies.",
      },
      introMessage: {
        fr: "Salut ! Je suis Nova. Aujourd'hui on démêle OSI et TCP/IP. Pose-moi tes questions !",
        en: "Hi! I'm Nova. Today we unpack OSI and TCP/IP. Ask me anything!",
      },
      topics: [
        {
          fr: "Les 7 couches OSI",
          en: "The 7 OSI layers",
        },
        {
          fr: "Les 4 couches TCP/IP",
          en: "The 4 TCP/IP layers",
        },
        {
          fr: "Où placer HTTP, TCP et IP",
          en: "Where to place HTTP, TCP, and IP",
        },
      ],
    },
  },
  {
    id: "net-ip-addressing",
    unitId: "net-fundamentals",
    title: {
      fr: "Adressage IP",
      en: "IP addressing",
    },
    description: {
      fr: "Apprendre IPv4, masques, adresses privées et le rôle d'une adresse IP.",
      en: "Learn IPv4, masks, private addresses, and the role of an IP address.",
    },
    icon: "locate",
    estimatedMinutes: 11,
    xpReward: 23,
    goals: [
      {
        description: {
          fr: "Expliquer le rôle d'une adresse IP",
          en: "Explain the role of an IP address",
        },
        xpReward: 5,
      },
      {
        description: {
          fr: "Différencier IPv4, masque et adresse privée/publique",
          en: "Distinguish IPv4, masks, and private vs public addresses",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Reconnaître une adresse IPv4 valide",
          en: "Recognize a valid IPv4 address",
        },
        xpReward: 7,
      },
    ],
    sections: [
      {
        id: "net-ip-s1",
        title: {
          fr: "À quoi sert une adresse IP ?",
          en: "What is an IP address for?",
        },
        body: {
          fr: "Une adresse IP identifie une interface sur un réseau IP, un peu comme une adresse postale pour acheminer des paquets. Sans adresse, les routeurs ne savent pas où envoyer les données.",
          en: "An IP address identifies an interface on an IP network, a bit like a postal address for delivering packets. Without an address, routers do not know where to send data.",
        },
      },
      {
        id: "net-ip-s2",
        diagram: "ip-subnet",
        title: {
          fr: "IPv4 en bref",
          en: "IPv4 in brief",
        },
        body: {
          fr: "IPv4 utilise 32 bits, souvent écrits en quatre nombres de 0 à 255 séparés par des points (ex. 192.168.1.10). Chaque appareil sur un même réseau local doit avoir une adresse unique dans ce réseau.",
          en: "IPv4 uses 32 bits, often written as four numbers from 0 to 255 separated by dots (e.g. 192.168.1.10). Each device on the same local network must have a unique address on that network.",
        },
        bullets: [
          {
            fr: "Exemple courant : 192.168.0.1 pour une box ou un routeur.",
            en: "Common example: 192.168.0.1 for a home gateway or router.",
          },
          {
            fr: "Le masque (ex. 255.255.255.0) indique quelle partie est le réseau.",
            en: "The mask (e.g. 255.255.255.0) shows which part is the network.",
          },
        ],
      },
      {
        id: "net-ip-s3",
        diagram: "nat-firewall",
        title: {
          fr: "Privé vs public",
          en: "Private vs public",
        },
        body: {
          fr: "Les adresses privées (comme 10.x.x.x, 192.168.x.x) restent à l'intérieur d'un LAN. Les adresses publiques sont visibles sur Internet. Le NAT sur le routeur permet à plusieurs appareils privés de partager une adresse publique.",
          en: "Private addresses (such as 10.x.x.x, 192.168.x.x) stay inside a LAN. Public addresses are visible on the Internet. NAT on the router lets many private devices share one public address.",
        },
      },
      {
        id: "net-ip-s4",
        title: {
          fr: "IPv6 en un mot",
          en: "IPv6 in a nutshell",
        },
        body: {
          fr: "IPv6 utilise 128 bits pour répondre à la pénurie d'adresses IPv4. Tu verras des adresses plus longues avec des deux-points. Pour cette leçon, maîtriser IPv4 et les notions privé/public suffit comme base solide.",
          en: "IPv6 uses 128 bits to address IPv4 shortage. You will see longer addresses with colons. For this lesson, mastering IPv4 and private vs public concepts is a solid foundation.",
        },
        callout: {
          fr: "À retenir",
          en: "Key takeaway",
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Adresse IP", en: "IP address" },
        definition: {
          fr: "Identifiant logique d'une interface sur un réseau IP.",
          en: "Logical identifier of an interface on an IP network.",
        },
      },
      {
        term: { fr: "IPv4", en: "IPv4" },
        definition: {
          fr: "Version d'IP à 32 bits, écrite en quatre octets (ex. 192.168.1.1).",
          en: "32-bit IP version, written as four octets (e.g. 192.168.1.1).",
        },
      },
      {
        term: { fr: "Masque de sous-réseau", en: "Subnet mask" },
        definition: {
          fr: "Indique quelle partie de l'adresse désigne le réseau.",
          en: "Shows which part of the address identifies the network.",
        },
      },
      {
        term: { fr: "Adresse privée", en: "Private address" },
        definition: {
          fr: "Adresse réservée aux réseaux locaux, non routable sur Internet.",
          en: "Address reserved for local networks, not routable on the Internet.",
        },
      },
      {
        term: { fr: "Adresse publique", en: "Public address" },
        definition: {
          fr: "Adresse unique sur Internet, attribuée par un FAI.",
          en: "Internet-unique address assigned by an ISP.",
        },
      },
      {
        term: { fr: "NAT", en: "NAT" },
        definition: {
          fr: "Traduction d'adresses permettant de partager une IP publique.",
          en: "Address translation that lets devices share a public IP.",
        },
      },
      {
        term: { fr: "IPv6", en: "IPv6" },
        definition: {
          fr: "Version d'IP à 128 bits, successeur d'IPv4.",
          en: "128-bit IP version, the successor to IPv4.",
        },
      },
    ],
    activities: [
      {
        id: "net-ip-q1",
        type: "multiple-choice",
        question: {
          fr: "Une adresse IPv4 valide ressemble à…",
          en: "A valid IPv4 address looks like…",
        },
        options: [
          { fr: "192.168.1.10", en: "192.168.1.10" },
          { fr: "192.168.1.999", en: "192.168.1.999" },
          { fr: "abc.def.ghi.jkl", en: "abc.def.ghi.jkl" },
          { fr: "192-168-1-10", en: "192-168-1-10" },
        ],
        correctAnswer: { fr: "192.168.1.10", en: "192.168.1.10" },
        hint: {
          fr: "Quatre nombres de 0 à 255 séparés par des points.",
          en: "Four numbers from 0 to 255 separated by dots.",
        },
        explanation: {
          fr: "Explication : Quatre nombres de 0 à 255 séparés par des points.",
          en: "Explanation: Four numbers from 0 to 255 separated by dots.",
        },
      },
      {
        id: "net-ip-q2",
        type: "multiple-choice",
        question: {
          fr: "192.168.0.5 est typiquement…",
          en: "192.168.0.5 is typically…",
        },
        options: [
          { fr: "Une adresse privée", en: "A private address" },
          { fr: "Une adresse publique Internet", en: "A public Internet address" },
          { fr: "Une adresse MAC", en: "A MAC address" },
          { fr: "Un nom de domaine", en: "A domain name" },
        ],
        correctAnswer: {
          fr: "Une adresse privée",
          en: "A private address",
        },
        hint: {
          fr: "La plage 192.168.x.x est réservée aux LAN.",
          en: "The 192.168.x.x range is reserved for LANs.",
        },
        explanation: {
          fr: "Explication : La plage 192.168.x.x est réservée aux LAN.",
          en: "Explanation: The 192.168.x.x range is reserved for LANs.",
        },
      },
      {
        id: "net-ip-q3",
        type: "multiple-choice",
        question: {
          fr: "À quoi sert un masque de sous-réseau ?",
          en: "What is a subnet mask used for?",
        },
        options: [
          {
            fr: "Séparer partie réseau et partie hôte",
            en: "Separate network and host parts",
          },
          {
            fr: "Chiffrer les mots de passe",
            en: "Encrypt passwords",
          },
          {
            fr: "Afficher des pages web",
            en: "Display web pages",
          },
          {
            fr: "Stocker des fichiers",
            en: "Store files",
          },
        ],
        correctAnswer: {
          fr: "Séparer partie réseau et partie hôte",
          en: "Separate network and host parts",
        },
        hint: {
          fr: "Exemple : 255.255.255.0.",
          en: "Example: 255.255.255.0.",
        },
        explanation: {
          fr: "Explication : Exemple : 255.255.255.0.",
          en: "Explanation: Example: 255.255.255.0.",
        },
      },
      {
        id: "net-ip-q4",
        type: "multiple-choice",
        question: {
          fr: "Combien de bits utilise IPv4 ?",
          en: "How many bits does IPv4 use?",
        },
        options: [
          { fr: "32", en: "32" },
          { fr: "128", en: "128" },
          { fr: "8", en: "8" },
          { fr: "64", en: "64" },
        ],
        correctAnswer: { fr: "32", en: "32" },
        hint: {
          fr: "Quatre octets de 8 bits.",
          en: "Four octets of 8 bits.",
        },
        explanation: {
          fr: "Explication : Quatre octets de 8 bits.",
          en: "Explanation: Four octets of 8 bits.",
        },
      },
      {
        id: "net-ip-q5",
        type: "multiple-choice",
        question: {
          fr: "Quel mécanisme permet à plusieurs PC d'un LAN de partager une IP publique ?",
          en: "Which mechanism lets several PCs on a LAN share one public IP?",
        },
        options: [
          { fr: "NAT", en: "NAT" },
          { fr: "DNS uniquement", en: "DNS only" },
          { fr: "HTML", en: "HTML" },
          { fr: "CSS", en: "CSS" },
        ],
        correctAnswer: { fr: "NAT", en: "NAT" },
        hint: {
          fr: "Traduction d'adresses sur le routeur.",
          en: "Address translation on the router.",
        },
        explanation: {
          fr: "Explication : Traduction d'adresses sur le routeur.",
          en: "Explanation: Address translation on the router.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech bienveillante. Tu enseignes l'adressage IP : IPv4, masques, adresses privées et publiques, NAT. Réponds en français, clairement, avec des exemples concrets.",
        en: "You are Nova, a friendly tech tutor. You teach IP addressing: IPv4, masks, private and public addresses, NAT. Answer in English, clearly, with concrete examples.",
      },
      introMessage: {
        fr: "Salut ! Je suis Nova. Aujourd'hui on parle d'adressage IP. Pose-moi tes questions !",
        en: "Hi! I'm Nova. Today we talk about IP addressing. Ask me anything!",
      },
      topics: [
        {
          fr: "Lire une adresse IPv4",
          en: "Reading an IPv4 address",
        },
        {
          fr: "Adresses privées vs publiques",
          en: "Private vs public addresses",
        },
        {
          fr: "Rôle du masque et du NAT",
          en: "Role of the mask and NAT",
        },
      ],
    },
  },
  {
    id: "net-dns",
    unitId: "net-fundamentals",
    title: {
      fr: "DNS et résolution de noms",
      en: "DNS and name resolution",
    },
    description: {
      fr: "Comprendre comment un nom de domaine devient une adresse IP.",
      en: "Understand how a domain name becomes an IP address.",
    },
    icon: "search",
    estimatedMinutes: 9,
    xpReward: 21,
    goals: [
      {
        description: {
          fr: "Expliquer le rôle du DNS",
          en: "Explain the role of DNS",
        },
        xpReward: 5,
      },
      {
        description: {
          fr: "Décrire les étapes de la résolution de noms",
          en: "Describe the steps of name resolution",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Différencier nom de domaine et adresse IP",
          en: "Distinguish a domain name from an IP address",
        },
        xpReward: 5,
      },
    ],
    sections: [
      {
        id: "net-dns-s1",
        diagram: "client-server",
        title: {
          fr: "Le carnet d'adresses d'Internet",
          en: "The Internet's address book",
        },
        body: {
          fr: "Les humains préfèrent example.com ; les machines utilisent des adresses IP. Le DNS (Domain Name System) traduit les noms lisibles en adresses IP, et parfois l'inverse.",
          en: "Humans prefer example.com; machines use IP addresses. DNS (Domain Name System) translates readable names into IP addresses, and sometimes the reverse.",
        },
      },
      {
        id: "net-dns-s2",
        diagram: "dns-lookup",
        title: {
          fr: "Comment la résolution fonctionne",
          en: "How resolution works",
        },
        body: {
          fr: "Quand tu ouvres un site, ton appareil demande souvent d'abord à un résolveur DNS (souvent celui de ton FAI ou un service public). Si la réponse n'est pas en cache, la requête remonte vers des serveurs autoritaires jusqu'à trouver l'IP.",
          en: "When you open a site, your device often first asks a DNS resolver (often your ISP's or a public service). If the answer is not cached, the query walks toward authoritative servers until it finds the IP.",
        },
        bullets: [
          {
            fr: "Cache : une réponse récente peut être réutilisée pour aller plus vite.",
            en: "Cache: a recent answer can be reused to go faster.",
          },
          {
            fr: "Enregistrement A : nom vers IPv4 ; AAAA vers IPv6.",
            en: "A record: name to IPv4; AAAA to IPv6.",
          },
        ],
      },
      {
        id: "net-dns-s3",
        title: {
          fr: "Hiérarchie des noms",
          en: "Name hierarchy",
        },
        body: {
          fr: "Les noms sont hiérarchiques : racine, TLD (.com, .fr), puis domaine, puis sous-domaines (www). Cette structure permet de déléguer la gestion des zones à différents administrateurs.",
          en: "Names are hierarchical: root, TLD (.com, .fr), then domain, then subdomains (www). This structure lets different administrators manage zones.",
        },
      },
      {
        id: "net-dns-s4",
        title: {
          fr: "Quand le DNS pose problème",
          en: "When DNS goes wrong",
        },
        body: {
          fr: "Si le DNS échoue, tu peux avoir Internet connecté mais aucun site par nom. Tester avec une IP ou changer de résolveur aide au diagnostic. Comprendre le DNS est essentiel pour le dépannage quotidien.",
          en: "If DNS fails, you may be connected yet unable to open sites by name. Testing with an IP or changing resolver helps diagnosis. Understanding DNS is essential for everyday troubleshooting.",
        },
        callout: {
          fr: "À retenir",
          en: "Key takeaway",
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "DNS", en: "DNS" },
        definition: {
          fr: "Système qui associe noms de domaine et adresses IP.",
          en: "System that maps domain names to IP addresses.",
        },
      },
      {
        term: { fr: "Nom de domaine", en: "Domain name" },
        definition: {
          fr: "Nom lisible d'un service (ex. example.com).",
          en: "Human-readable name of a service (e.g. example.com).",
        },
      },
      {
        term: { fr: "Résolveur DNS", en: "DNS resolver" },
        definition: {
          fr: "Service qui interroge le DNS pour trouver une adresse IP.",
          en: "Service that queries DNS to find an IP address.",
        },
      },
      {
        term: { fr: "Enregistrement A", en: "A record" },
        definition: {
          fr: "Association d'un nom à une adresse IPv4.",
          en: "Mapping of a name to an IPv4 address.",
        },
      },
      {
        term: { fr: "TLD", en: "TLD" },
        definition: {
          fr: "Domaine de premier niveau (.com, .org, .fr...).",
          en: "Top-level domain (.com, .org, .fr...).",
        },
      },
      {
        term: { fr: "Cache DNS", en: "DNS cache" },
        definition: {
          fr: "Mémoire temporaire des réponses DNS pour accélérer les requêtes.",
          en: "Temporary store of DNS answers to speed up queries.",
        },
      },
    ],
    activities: [
      {
        id: "net-dns-q1",
        type: "multiple-choice",
        question: {
          fr: "Le rôle principal du DNS est de…",
          en: "The main role of DNS is to…",
        },
        options: [
          {
            fr: "Traduire un nom en adresse IP",
            en: "Translate a name into an IP address",
          },
          {
            fr: "Chiffrer les disques durs",
            en: "Encrypt hard drives",
          },
          {
            fr: "Alimenter l'ordinateur",
            en: "Power the computer",
          },
          {
            fr: "Imprimer des documents",
            en: "Print documents",
          },
        ],
        correctAnswer: {
          fr: "Traduire un nom en adresse IP",
          en: "Translate a name into an IP address",
        },
        hint: {
          fr: "Comme un carnet d'adresses.",
          en: "Like an address book.",
        },
        explanation: {
          fr: "Explication : Comme un carnet d'adresses.",
          en: "Explanation: Like an address book.",
        },
      },
      {
        id: "net-dns-q2",
        type: "multiple-choice",
        question: {
          fr: "example.com est…",
          en: "example.com is…",
        },
        options: [
          { fr: "Un nom de domaine", en: "A domain name" },
          { fr: "Une adresse MAC", en: "A MAC address" },
          { fr: "Un masque de sous-réseau", en: "A subnet mask" },
          { fr: "Un câble Ethernet", en: "An Ethernet cable" },
        ],
        correctAnswer: {
          fr: "Un nom de domaine",
          en: "A domain name",
        },
        hint: {
          fr: "C'est ce que tu tapes dans le navigateur.",
          en: "It is what you type in the browser.",
        },
        explanation: {
          fr: "Explication : C'est ce que tu tapes dans le navigateur.",
          en: "Explanation: It is what you type in the browser.",
        },
      },
      {
        id: "net-dns-q3",
        type: "multiple-choice",
        question: {
          fr: "Un enregistrement A associe un nom à…",
          en: "An A record maps a name to…",
        },
        options: [
          { fr: "Une adresse IPv4", en: "An IPv4 address" },
          { fr: "Un fichier PDF", en: "A PDF file" },
          { fr: "Un mot de passe", en: "A password" },
          { fr: "Une image", en: "An image" },
        ],
        correctAnswer: {
          fr: "Une adresse IPv4",
          en: "An IPv4 address",
        },
        hint: {
          fr: "AAAA sert pour IPv6.",
          en: "AAAA is for IPv6.",
        },
        explanation: {
          fr: "Explication : AAAA sert pour IPv6.",
          en: "Explanation: AAAA is for IPv6.",
        },
      },
      {
        id: "net-dns-q4",
        type: "multiple-choice",
        question: {
          fr: "Si le DNS ne fonctionne pas, que se passe-t-il souvent ?",
          en: "If DNS fails, what often happens?",
        },
        options: [
          {
            fr: "Les sites ne s'ouvrent pas par leur nom",
            en: "Sites do not open by name",
          },
          {
            fr: "L'écran devient noir définitivement",
            en: "The screen turns permanently black",
          },
          {
            fr: "Le clavier se déconnecte",
            en: "The keyboard disconnects",
          },
          {
            fr: "Le disque est formaté",
            en: "The disk is formatted",
          },
        ],
        correctAnswer: {
          fr: "Les sites ne s'ouvrent pas par leur nom",
          en: "Sites do not open by name",
        },
        hint: {
          fr: "La connexion IP peut encore fonctionner.",
          en: "IP connectivity may still work.",
        },
        explanation: {
          fr: "Explication : La connexion IP peut encore fonctionner.",
          en: "Explanation: IP connectivity may still work.",
        },
      },
      {
        id: "net-dns-q5",
        type: "multiple-choice",
        question: {
          fr: ".com est un exemple de…",
          en: ".com is an example of a…",
        },
        options: [
          { fr: "TLD", en: "TLD" },
          { fr: "Adresse IP", en: "IP address" },
          { fr: "Protocole HTTP", en: "HTTP protocol" },
          { fr: "Port TCP", en: "TCP port" },
        ],
        correctAnswer: { fr: "TLD", en: "TLD" },
        hint: {
          fr: "Top-Level Domain.",
          en: "Top-Level Domain.",
        },
        explanation: {
          fr: "Explication : Top-Level Domain.",
          en: "Explanation: Top-Level Domain.",
        },
      },
      {
        id: "net-dns-q6",
        type: "multiple-choice",
        question: {
          fr: "À quoi sert le cache DNS ?",
          en: "What is the DNS cache for?",
        },
        options: [
          {
            fr: "Réutiliser des réponses récentes plus vite",
            en: "Reuse recent answers faster",
          },
          {
            fr: "Supprimer Internet",
            en: "Delete the Internet",
          },
          {
            fr: "Créer des adresses MAC",
            en: "Create MAC addresses",
          },
          {
            fr: "Remplacer le routeur",
            en: "Replace the router",
          },
        ],
        correctAnswer: {
          fr: "Réutiliser des réponses récentes plus vite",
          en: "Reuse recent answers faster",
        },
        hint: {
          fr: "Évite de réinterroger tout à chaque fois.",
          en: "Avoids asking everything again each time.",
        },
        explanation: {
          fr: "Explication : Évite de réinterroger tout à chaque fois.",
          en: "Explanation: Avoids asking everything again each time.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech bienveillante. Tu enseignes le DNS et la résolution de noms : enregistrements, résolveurs, hiérarchie. Réponds en français, clairement, avec des exemples concrets.",
        en: "You are Nova, a friendly tech tutor. You teach DNS and name resolution: records, resolvers, hierarchy. Answer in English, clearly, with concrete examples.",
      },
      introMessage: {
        fr: "Salut ! Je suis Nova. Aujourd'hui on explore le DNS. Pose-moi tes questions !",
        en: "Hi! I'm Nova. Today we explore DNS. Ask me anything!",
      },
      topics: [
        {
          fr: "Du nom de domaine à l'IP",
          en: "From domain name to IP",
        },
        {
          fr: "Enregistrements A et AAAA",
          en: "A and AAAA records",
        },
        {
          fr: "Diagnostiquer un problème DNS",
          en: "Diagnosing a DNS problem",
        },
      ],
    },
  },
  {
    id: "net-http-https",
    unitId: "net-fundamentals",
    title: {
      fr: "HTTP, HTTPS et le web",
      en: "HTTP, HTTPS, and the web",
    },
    description: {
      fr: "Comprendre les requêtes web, les méthodes HTTP et pourquoi HTTPS protège les échanges.",
      en: "Understand web requests, HTTP methods, and why HTTPS protects exchanges.",
    },
    icon: "lock",
    estimatedMinutes: 12,
    xpReward: 25,
    goals: [
      {
        description: {
          fr: "Décrire une requête et une réponse HTTP",
          en: "Describe an HTTP request and response",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Différencier HTTP et HTTPS",
          en: "Distinguish HTTP and HTTPS",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Expliquer le rôle des certificats TLS",
          en: "Explain the role of TLS certificates",
        },
        xpReward: 7,
      },
    ],
    sections: [
      {
        id: "net-http-s1",
        diagram: "client-server",
        title: {
          fr: "Le langage du web",
          en: "The language of the web",
        },
        body: {
          fr: "HTTP (HyperText Transfer Protocol) est le protocole que le navigateur et le serveur web utilisent pour échanger pages, images et API. Le client envoie une requête ; le serveur renvoie une réponse avec un code de statut (200, 404, 500...).",
          en: "HTTP (HyperText Transfer Protocol) is the protocol browsers and web servers use to exchange pages, images, and APIs. The client sends a request; the server returns a response with a status code (200, 404, 500...).",
        },
      },
      {
        id: "net-http-s2",
        diagram: "http-https",
        title: {
          fr: "Méthodes et URLs",
          en: "Methods and URLs",
        },
        body: {
          fr: "Une URL indique la ressource (https://example.com/page). Les méthodes HTTP précisent l'intention : GET pour lire, POST pour envoyer des données, PUT/PATCH pour mettre à jour, DELETE pour supprimer.",
          en: "A URL points to the resource (https://example.com/page). HTTP methods state the intent: GET to read, POST to send data, PUT/PATCH to update, DELETE to remove.",
        },
        bullets: [
          {
            fr: "GET : récupérer une ressource sans la modifier.",
            en: "GET: retrieve a resource without changing it.",
          },
          {
            fr: "POST : envoyer des données (formulaire, API).",
            en: "POST: send data (form, API).",
          },
        ],
      },
      {
        id: "net-http-s3",
        title: {
          fr: "Pourquoi HTTPS ?",
          en: "Why HTTPS?",
        },
        body: {
          fr: "HTTPS est HTTP protégé par TLS. Les données sont chiffrées en transit, ce qui limite l'espionnage et la modification. Le navigateur vérifie aussi un certificat pour s'assurer qu'il parle au bon serveur.",
          en: "HTTPS is HTTP protected by TLS. Data is encrypted in transit, which limits eavesdropping and tampering. The browser also checks a certificate to ensure it talks to the right server.",
        },
      },
      {
        id: "net-http-s4",
        title: {
          fr: "Ports et sécurité au quotidien",
          en: "Ports and everyday security",
        },
        body: {
          fr: "HTTP utilise souvent le port 80 ; HTTPS le port 443. Sur le web moderne, HTTPS est la norme : mots de passe, paiements et sessions doivent passer par un canal chiffré. Un cadenas dans le navigateur signale généralement une connexion HTTPS active.",
          en: "HTTP often uses port 80; HTTPS uses port 443. On the modern web, HTTPS is the norm: passwords, payments, and sessions should use an encrypted channel. A lock icon in the browser usually signals an active HTTPS connection.",
        },
        callout: {
          fr: "À retenir",
          en: "Key takeaway",
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "HTTP", en: "HTTP" },
        definition: {
          fr: "Protocole d'échange entre navigateur et serveur web.",
          en: "Protocol for exchange between browser and web server.",
        },
      },
      {
        term: { fr: "HTTPS", en: "HTTPS" },
        definition: {
          fr: "HTTP sécurisé avec chiffrement TLS.",
          en: "HTTP secured with TLS encryption.",
        },
      },
      {
        term: { fr: "TLS", en: "TLS" },
        definition: {
          fr: "Protocole qui chiffre et authentifie les échanges.",
          en: "Protocol that encrypts and authenticates exchanges.",
        },
      },
      {
        term: { fr: "URL", en: "URL" },
        definition: {
          fr: "Adresse d'une ressource sur le web.",
          en: "Address of a resource on the web.",
        },
      },
      {
        term: { fr: "GET", en: "GET" },
        definition: {
          fr: "Méthode HTTP pour lire une ressource.",
          en: "HTTP method to read a resource.",
        },
      },
      {
        term: { fr: "Certificat", en: "Certificate" },
        definition: {
          fr: "Document cryptographique prouvant l'identité du serveur.",
          en: "Cryptographic document proving the server's identity.",
        },
      },
    ],
    activities: [
      {
        id: "net-http-q1",
        type: "multiple-choice",
        question: {
          fr: "HTTPS se distingue surtout de HTTP par…",
          en: "HTTPS mainly differs from HTTP by…",
        },
        options: [
          {
            fr: "Le chiffrement TLS",
            en: "TLS encryption",
          },
          {
            fr: "Une couleur d'écran différente",
            en: "A different screen color",
          },
          {
            fr: "L'absence de serveur",
            en: "The absence of a server",
          },
          {
            fr: "L'usage exclusif d'IPv6",
            en: "Exclusive use of IPv6",
          },
        ],
        correctAnswer: {
          fr: "Le chiffrement TLS",
          en: "TLS encryption",
        },
        hint: {
          fr: "Pense à la confidentialité des échanges.",
          en: "Think about confidentiality of exchanges.",
        },
        explanation: {
          fr: "Explication : Pense à la confidentialité des échanges.",
          en: "Explanation: Think about confidentiality of exchanges.",
        },
      },
      {
        id: "net-http-q2",
        type: "multiple-choice",
        question: {
          fr: "Quelle méthode HTTP sert surtout à lire une page ?",
          en: "Which HTTP method is mainly used to read a page?",
        },
        options: [
          { fr: "GET", en: "GET" },
          { fr: "DELETE", en: "DELETE" },
          { fr: "SHUTDOWN", en: "SHUTDOWN" },
          { fr: "PRINT", en: "PRINT" },
        ],
        correctAnswer: { fr: "GET", en: "GET" },
        hint: {
          fr: "C'est la méthode la plus courante pour afficher une page.",
          en: "It is the most common method to display a page.",
        },
        explanation: {
          fr: "Explication : C'est la méthode la plus courante pour afficher une page.",
          en: "Explanation: It is the most common method to display a page.",
        },
      },
      {
        id: "net-http-q3",
        type: "multiple-choice",
        question: {
          fr: "Quel port est typiquement utilisé par HTTPS ?",
          en: "Which port is typically used by HTTPS?",
        },
        options: [
          { fr: "443", en: "443" },
          { fr: "21", en: "21" },
          { fr: "25", en: "25" },
          { fr: "3389", en: "3389" },
        ],
        correctAnswer: { fr: "443", en: "443" },
        hint: {
          fr: "HTTP clair utilise souvent 80.",
          en: "Plain HTTP often uses 80.",
        },
        explanation: {
          fr: "Explication : HTTP clair utilise souvent 80.",
          en: "Explanation: Plain HTTP often uses 80.",
        },
      },
      {
        id: "net-http-q4",
        type: "multiple-choice",
        question: {
          fr: "Un code de statut HTTP 404 signifie…",
          en: "An HTTP status code 404 means…",
        },
        options: [
          {
            fr: "Ressource introuvable",
            en: "Resource not found",
          },
          {
            fr: "Succès parfait",
            en: "Perfect success",
          },
          {
            fr: "Redirection permanente uniquement",
            en: "Permanent redirect only",
          },
          {
            fr: "Serveur éteint depuis toujours",
            en: "Server always powered off",
          },
        ],
        correctAnswer: {
          fr: "Ressource introuvable",
          en: "Resource not found",
        },
        hint: {
          fr: "La page demandée n'existe pas.",
          en: "The requested page does not exist.",
        },
        explanation: {
          fr: "Explication : La page demandée n'existe pas.",
          en: "Explanation: The requested page does not exist.",
        },
      },
      {
        id: "net-http-q5",
        type: "multiple-choice",
        question: {
          fr: "À quoi sert un certificat TLS pour un site ?",
          en: "What is a TLS certificate for on a site?",
        },
        options: [
          {
            fr: "Aider à prouver l'identité du serveur",
            en: "Help prove the server's identity",
          },
          {
            fr: "Accélérer le ventilateur",
            en: "Speed up the fan",
          },
          {
            fr: "Remplacer le DNS",
            en: "Replace DNS",
          },
          {
            fr: "Créer des adresses MAC",
            en: "Create MAC addresses",
          },
        ],
        correctAnswer: {
          fr: "Aider à prouver l'identité du serveur",
          en: "Help prove the server's identity",
        },
        hint: {
          fr: "Le navigateur vérifie à qui il parle.",
          en: "The browser checks whom it is talking to.",
        },
        explanation: {
          fr: "Explication : Le navigateur vérifie à qui il parle.",
          en: "Explanation: The browser checks whom it is talking to.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech bienveillante. Tu enseignes HTTP, HTTPS, les méthodes, les codes de statut et TLS. Réponds en français, clairement, avec des exemples du web quotidien.",
        en: "You are Nova, a friendly tech tutor. You teach HTTP, HTTPS, methods, status codes, and TLS. Answer in English, clearly, with everyday web examples.",
      },
      introMessage: {
        fr: "Salut ! Je suis Nova. Aujourd'hui on explore HTTP et HTTPS. Pose-moi tes questions !",
        en: "Hi! I'm Nova. Today we explore HTTP and HTTPS. Ask me anything!",
      },
      topics: [
        {
          fr: "Requête et réponse HTTP",
          en: "HTTP request and response",
        },
        {
          fr: "Différence HTTP / HTTPS",
          en: "HTTP vs HTTPS difference",
        },
        {
          fr: "Certificats et port 443",
          en: "Certificates and port 443",
        },
      ],
    },
  },
  {
    id: "net-devices",
    unitId: "net-fundamentals",
    title: {
      fr: "Équipements réseau",
      en: "Network devices",
    },
    description: {
      fr: "Switch, routeur et point d'accès : qui fait quoi dans une topologie.",
      en: "Switch, router, and access point: who does what in a topology.",
    },
    icon: "network",
    estimatedMinutes: 9,
    xpReward: 22,
    goals: [
      {
        description: {
          fr: "Différencier switch, routeur et AP",
          en: "Distinguish switch, router, and AP",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Situer chaque équipement dans un LAN",
          en: "Place each device in a LAN",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Relier topologie et rôles",
          en: "Connect topology and roles",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "net-dev-s1",
        title: {
          fr: "Pourquoi des équipements dédiés ?",
          en: "Why dedicated devices?",
        },
        body: {
          fr: "Dans un réseau, chaque boîtier a un métier. Comprendre switch, routeur et point d'accès (AP) évite de confondre « qui connecte les PC entre eux » et « qui ouvre la porte vers Internet ».",
          en: "In a network, each box has a job. Understanding switch, router, and access point (AP) avoids mixing up “who connects PCs together” and “who opens the door to the Internet.”",
        },
      },
      {
        id: "net-dev-s2",
        diagram: "network-devices",
        title: {
          fr: "Switch, routeur, AP",
          en: "Switch, router, AP",
        },
        body: {
          fr: "Ces trois rôles forment la topologie locale la plus courante à la maison ou au bureau.",
          en: "These three roles form the most common local topology at home or in the office.",
        },
        bullets: [
          {
            fr: "Switch : relie des appareils sur le même LAN (souvent Ethernet).",
            en: "Switch: connects devices on the same LAN (often Ethernet).",
          },
          {
            fr: "Routeur : relie des réseaux (LAN ↔ Internet) et fait souvent du NAT.",
            en: "Router: connects networks (LAN ↔ Internet) and often does NAT.",
          },
          {
            fr: "AP (Access Point) : étend le réseau en Wi‑Fi.",
            en: "AP (Access Point): extends the network over Wi‑Fi.",
          },
        ],
      },
      {
        id: "net-dev-s3",
        title: {
          fr: "Box « tout-en-un »",
          en: "All-in-one gateways",
        },
        body: {
          fr: "Ta box FAI combine souvent routeur, switch et AP. Conceptuellement, les rôles restent séparés : c'est pratique pour le diagnostic (Wi‑Fi vs câble vs accès Internet).",
          en: "Your ISP gateway often combines router, switch, and AP. Conceptually the roles stay separate: that helps troubleshooting (Wi‑Fi vs cable vs Internet access).",
        },
        callout: {
          fr: "Astuce : un problème « pas de Wi‑Fi » n'est pas forcément un problème « pas d'Internet ».",
          en: "Tip: a “no Wi‑Fi” issue is not necessarily a “no Internet” issue.",
        },
      },
      {
        id: "net-dev-s4",
        title: {
          fr: "Couches en pratique",
          en: "Layers in practice",
        },
        body: {
          fr: "Le switch travaille surtout au niveau des adresses MAC (liaison). Le routeur décide avec des adresses IP. L'AP gère la radio Wi‑Fi tout en raccordant au LAN câblé.",
          en: "The switch mostly works with MAC addresses (data link). The router decides with IP addresses. The AP handles Wi‑Fi radio while joining the wired LAN.",
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Switch", en: "Switch" },
        definition: {
          fr: "Équipement qui interconnecte des hôtes sur un même LAN.",
          en: "Device that interconnects hosts on the same LAN.",
        },
      },
      {
        term: { fr: "Routeur", en: "Router" },
        definition: {
          fr: "Équipement qui route entre réseaux IP distincts.",
          en: "Device that routes between distinct IP networks.",
        },
      },
      {
        term: { fr: "Point d'accès (AP)", en: "Access point (AP)" },
        definition: {
          fr: "Borne qui offre la connectivité Wi‑Fi au LAN.",
          en: "Device that provides Wi‑Fi connectivity to the LAN.",
        },
      },
    ],
    activities: [
      {
        id: "net-dev-q1",
        type: "multiple-choice",
        question: {
          fr: "Quel équipement relie surtout des PC sur le même LAN câblé ?",
          en: "Which device mainly connects PCs on the same wired LAN?",
        },
        options: [
          { fr: "Switch", en: "Switch" },
          { fr: "Modem satellite uniquement", en: "Satellite modem only" },
          { fr: "Imprimante", en: "Printer" },
          { fr: "Clavier", en: "Keyboard" },
        ],
        correctAnswer: { fr: "Switch", en: "Switch" },
        hint: {
          fr: "Il interconnecte des ports Ethernet locaux.",
          en: "It interconnects local Ethernet ports.",
        },
        explanation: {
          fr: "Explication : le switch interconnecte des hôtes sur le même LAN.",
          en: "Explanation: the switch interconnects hosts on the same LAN.",
        },
      },
      {
        id: "net-dev-q2",
        type: "multiple-choice",
        question: {
          fr: "Quel rôle ouvre typiquement la porte vers Internet ?",
          en: "Which role typically opens the door to the Internet?",
        },
        options: [
          { fr: "Routeur", en: "Router" },
          { fr: "Switch uniquement couche 1", en: "Layer-1-only switch" },
          { fr: "Écran", en: "Monitor" },
          { fr: "SSD", en: "SSD" },
        ],
        correctAnswer: { fr: "Routeur", en: "Router" },
        hint: {
          fr: "Il relie LAN et WAN / Internet.",
          en: "It connects LAN and WAN / Internet.",
        },
        explanation: {
          fr: "Explication : le routeur relie des réseaux distincts, souvent LAN et Internet.",
          en: "Explanation: the router connects distinct networks, often LAN and Internet.",
        },
      },
      {
        id: "net-dev-q3",
        type: "multiple-choice",
        question: {
          fr: "À quoi sert un point d'accès (AP) ?",
          en: "What is an access point (AP) for?",
        },
        options: [
          {
            fr: "Fournir le Wi‑Fi au LAN",
            en: "Provide Wi‑Fi to the LAN",
          },
          {
            fr: "Remplacer le DNS mondial",
            en: "Replace global DNS",
          },
          {
            fr: "Créer des adresses IPv6 seules",
            en: "Create IPv6 addresses only",
          },
          {
            fr: "Chiffrer uniquement les e-mails",
            en: "Encrypt only emails",
          },
        ],
        correctAnswer: {
          fr: "Fournir le Wi‑Fi au LAN",
          en: "Provide Wi‑Fi to the LAN",
        },
        hint: {
          fr: "Pense radio / sans fil.",
          en: "Think radio / wireless.",
        },
        explanation: {
          fr: "Explication : l'AP étend le réseau en Wi‑Fi.",
          en: "Explanation: the AP extends the network over Wi‑Fi.",
        },
      },
      {
        id: "net-dev-q4",
        type: "multiple-choice",
        question: {
          fr: "Une box FAI combine souvent…",
          en: "An ISP gateway often combines…",
        },
        options: [
          {
            fr: "Routeur, switch et AP",
            en: "Router, switch, and AP",
          },
          {
            fr: "Uniquement un clavier",
            en: "Only a keyboard",
          },
          {
            fr: "Seulement un écran",
            en: "Only a display",
          },
          {
            fr: "Rien du tout",
            en: "Nothing at all",
          },
        ],
        correctAnswer: {
          fr: "Routeur, switch et AP",
          en: "Router, switch, and AP",
        },
        hint: {
          fr: "Plusieurs rôles dans un seul boîtier.",
          en: "Several roles in one box.",
        },
        explanation: {
          fr: "Explication : les box tout-en-un regroupent ces rôles.",
          en: "Explanation: all-in-one gateways bundle these roles.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech. Tu expliques switch, routeur et AP avec des exemples maison/bureau. Réponds en français, simplement.",
        en: "You are Nova, a tech tutor. You explain switch, router, and AP with home/office examples. Answer in English, simply.",
      },
      introMessage: {
        fr: "Salut ! On regarde switch, routeur et AP. Qu'est-ce qui te bloque ?",
        en: "Hi! We're looking at switches, routers, and APs. What's confusing?",
      },
      topics: [
        {
          fr: "Rôle du switch",
          en: "Role of the switch",
        },
        {
          fr: "Routeur vs AP",
          en: "Router vs AP",
        },
        {
          fr: "Box tout-en-un",
          en: "All-in-one gateway",
        },
      ],
    },
  },
  {
    id: "net-ports-protocols",
    unitId: "net-fundamentals",
    title: {
      fr: "Ports et protocoles",
      en: "Ports and protocols",
    },
    description: {
      fr: "Ports courants (22, 53, 80, 443…) et différence TCP / UDP.",
      en: "Common ports (22, 53, 80, 443…) and TCP vs UDP.",
    },
    icon: "layers",
    estimatedMinutes: 10,
    xpReward: 24,
    goals: [
      {
        description: {
          fr: "Mémoriser les ports les plus utiles",
          en: "Remember the most useful ports",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Comparer TCP et UDP",
          en: "Compare TCP and UDP",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Lier service et numéro de port",
          en: "Link a service to its port number",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "net-ports-s1",
        title: {
          fr: "Pourquoi des ports ?",
          en: "Why ports?",
        },
        body: {
          fr: "Une adresse IP identifie une machine ; un numéro de port identifie une application ou un service sur cette machine. Sans ports, le système ne saurait pas si un paquet va au web, au SSH ou au DNS.",
          en: "An IP address identifies a machine; a port number identifies an application or service on that machine. Without ports, the system would not know whether a packet is for the web, SSH, or DNS.",
        },
      },
      {
        id: "net-ports-s2",
        diagram: "tcp-udp",
        title: {
          fr: "TCP et UDP",
          en: "TCP and UDP",
        },
        body: {
          fr: "TCP et UDP sont les deux grands protocoles de transport. TCP privilégie la fiabilité ; UDP la légèreté et la vitesse.",
          en: "TCP and UDP are the two main transport protocols. TCP favors reliability; UDP favors lightness and speed.",
        },
        bullets: [
          {
            fr: "TCP : connexion, retransmission, ordre (HTTP, SSH, HTTPS).",
            en: "TCP: connection, retransmission, ordering (HTTP, SSH, HTTPS).",
          },
          {
            fr: "UDP : pas de connexion lourde (DNS, streaming, jeux).",
            en: "UDP: no heavy connection (DNS, streaming, games).",
          },
        ],
      },
      {
        id: "net-ports-s3",
        title: {
          fr: "Ports à connaître",
          en: "Ports to know",
        },
        body: {
          fr: "Quelques numéros reviennent partout en admin et en cybersécurité de base.",
          en: "A few numbers show up everywhere in admin and basic security.",
        },
        bullets: [
          {
            fr: "22 : SSH · 53 : DNS · 80 : HTTP · 443 : HTTPS",
            en: "22: SSH · 53: DNS · 80: HTTP · 443: HTTPS",
          },
          {
            fr: "25 / 587 : messagerie · 3389 : Bureau à distance (RDP)",
            en: "25 / 587: mail · 3389: Remote Desktop (RDP)",
          },
        ],
        callout: {
          fr: "Les ports « bien connus » vont de 0 à 1023.",
          en: "Well-known ports range from 0 to 1023.",
        },
      },
      {
        id: "net-ports-s4",
        title: {
          fr: "Pare-feu et ports",
          en: "Firewalls and ports",
        },
        body: {
          fr: "Un pare-feu autorise ou bloque souvent le trafic selon IP, protocole et port. Savoir quel service écoute où aide à ouvrir le minimum nécessaire.",
          en: "A firewall often allows or blocks traffic by IP, protocol, and port. Knowing which service listens where helps you open only what is needed.",
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Port", en: "Port" },
        definition: {
          fr: "Numéro qui cible un service sur une machine.",
          en: "Number that targets a service on a host.",
        },
      },
      {
        term: { fr: "TCP", en: "TCP" },
        definition: {
          fr: "Transport fiable et orienté connexion.",
          en: "Reliable, connection-oriented transport.",
        },
      },
      {
        term: { fr: "UDP", en: "UDP" },
        definition: {
          fr: "Transport léger, sans garantie d'ordre ni de livraison.",
          en: "Lightweight transport without delivery or order guarantees.",
        },
      },
    ],
    activities: [
      {
        id: "net-ports-q1",
        type: "multiple-choice",
        question: {
          fr: "Quel port est typiquement utilisé par HTTPS ?",
          en: "Which port is typically used by HTTPS?",
        },
        options: [
          { fr: "443", en: "443" },
          { fr: "21", en: "21" },
          { fr: "110", en: "110" },
          { fr: "23", en: "23" },
        ],
        correctAnswer: { fr: "443", en: "443" },
        hint: { fr: "HTTP clair est souvent 80.", en: "Plain HTTP is often 80." },
        explanation: {
          fr: "Explication : HTTPS utilise en général le port 443.",
          en: "Explanation: HTTPS generally uses port 443.",
        },
      },
      {
        id: "net-ports-q2",
        type: "multiple-choice",
        question: {
          fr: "Le port 22 est associé à…",
          en: "Port 22 is associated with…",
        },
        options: [
          { fr: "SSH", en: "SSH" },
          { fr: "FTP anonyme seul", en: "Anonymous FTP only" },
          { fr: "Impression USB", en: "USB printing" },
          { fr: "Bluetooth", en: "Bluetooth" },
        ],
        correctAnswer: { fr: "SSH", en: "SSH" },
        hint: {
          fr: "Administration à distance sécurisée.",
          en: "Secure remote administration.",
        },
        explanation: {
          fr: "Explication : SSH écoute classiquement sur 22.",
          en: "Explanation: SSH classically listens on 22.",
        },
      },
      {
        id: "net-ports-q3",
        type: "multiple-choice",
        question: {
          fr: "Quel protocole privilégie la vitesse plutôt que la retransmission ?",
          en: "Which protocol favors speed over retransmission?",
        },
        options: [
          { fr: "UDP", en: "UDP" },
          { fr: "TCP uniquement", en: "TCP only" },
          { fr: "SMTP", en: "SMTP" },
          { fr: "IMAP", en: "IMAP" },
        ],
        correctAnswer: { fr: "UDP", en: "UDP" },
        hint: {
          fr: "Souvent utilisé pour DNS ou le streaming.",
          en: "Often used for DNS or streaming.",
        },
        explanation: {
          fr: "Explication : UDP est léger et sans garantie lourde.",
          en: "Explanation: UDP is lightweight without heavy guarantees.",
        },
      },
      {
        id: "net-ports-q4",
        type: "multiple-choice",
        question: {
          fr: "Le DNS utilise souvent le port…",
          en: "DNS often uses port…",
        },
        options: [
          { fr: "53", en: "53" },
          { fr: "443 uniquement", en: "443 only" },
          { fr: "8080", en: "8080" },
          { fr: "3306", en: "3306" },
        ],
        correctAnswer: { fr: "53", en: "53" },
        hint: {
          fr: "Entre 22 et 80 dans la liste classique.",
          en: "Between 22 and 80 in the classic list.",
        },
        explanation: {
          fr: "Explication : DNS utilise typiquement le port 53.",
          en: "Explanation: DNS typically uses port 53.",
        },
      },
      {
        id: "net-ports-q5",
        type: "multiple-choice",
        question: {
          fr: "TCP est surtout choisi quand on a besoin de…",
          en: "TCP is mainly chosen when you need…",
        },
        options: [
          {
            fr: "Fiabilité et ordre des données",
            en: "Reliability and data order",
          },
          {
            fr: "Ignorer totalement les pertes",
            en: "Ignore all loss entirely",
          },
          {
            fr: "Remplacer l'adresse IP",
            en: "Replace the IP address",
          },
          {
            fr: "Créer du Wi‑Fi",
            en: "Create Wi‑Fi",
          },
        ],
        correctAnswer: {
          fr: "Fiabilité et ordre des données",
          en: "Reliability and data order",
        },
        hint: {
          fr: "Pensé pour le web et SSH.",
          en: "Built for the web and SSH.",
        },
        explanation: {
          fr: "Explication : TCP retransmet et ordonne les flux.",
          en: "Explanation: TCP retransmits and orders streams.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova. Tu enseignes ports courants, TCP et UDP. Réponds en français avec des exemples concrets.",
        en: "You are Nova. You teach common ports, TCP, and UDP. Answer in English with concrete examples.",
      },
      introMessage: {
        fr: "Salut ! Ports et protocoles : pose ta question.",
        en: "Hi! Ports and protocols — ask away.",
      },
      topics: [
        { fr: "TCP vs UDP", en: "TCP vs UDP" },
        { fr: "Ports 22, 53, 80, 443", en: "Ports 22, 53, 80, 443" },
        { fr: "Pare-feu et ports", en: "Firewalls and ports" },
      ],
    },
  },
  {
    id: "net-nat-firewall",
    unitId: "net-fundamentals",
    title: {
      fr: "NAT et pare-feu",
      en: "NAT and firewall",
    },
    description: {
      fr: "Comment le LAN partage une IP publique et comment filtrer le trafic.",
      en: "How a LAN shares a public IP and how traffic is filtered.",
    },
    icon: "shield",
    estimatedMinutes: 9,
    xpReward: 22,
    goals: [
      {
        description: {
          fr: "Expliquer le rôle du NAT",
          en: "Explain the role of NAT",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Décrire un pare-feu basique",
          en: "Describe a basic firewall",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Relier LAN, NAT et Internet",
          en: "Connect LAN, NAT, and Internet",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "net-nat-s1",
        title: {
          fr: "Le problème des adresses",
          en: "The address problem",
        },
        body: {
          fr: "Chez toi, plusieurs appareils ont des IP privées. Sur Internet, ton FAI te donne souvent une seule IP publique. Il faut un mécanisme pour partager cette porte de sortie.",
          en: "At home, many devices have private IPs. On the Internet, your ISP often gives one public IP. You need a mechanism to share that exit door.",
        },
      },
      {
        id: "net-nat-s2",
        diagram: "nat-firewall",
        title: {
          fr: "NAT en image",
          en: "NAT pictured",
        },
        body: {
          fr: "Le NAT (Network Address Translation) sur le routeur traduit les adresses privées du LAN vers l'IP publique (et inverse les réponses). Les sessions sont suivies pour savoir à quel appareil renvoyer le trafic.",
          en: "NAT (Network Address Translation) on the router translates private LAN addresses to the public IP (and reverses replies). Sessions are tracked so return traffic reaches the right device.",
        },
        bullets: [
          {
            fr: "LAN → NAT/pare-feu → Internet",
            en: "LAN → NAT/firewall → Internet",
          },
          {
            fr: "Plusieurs hôtes privés, une IP publique visible",
            en: "Many private hosts, one visible public IP",
          },
        ],
      },
      {
        id: "net-nat-s3",
        title: {
          fr: "Pare-feu basique",
          en: "Basic firewall",
        },
        body: {
          fr: "Un pare-feu filtre selon des règles : autoriser ou refuser selon source, destination, protocole et port. Sur une box, le trafic entrant non sollicité est souvent bloqué par défaut.",
          en: "A firewall filters by rules: allow or deny by source, destination, protocol, and port. On a home gateway, unsolicited inbound traffic is often blocked by default.",
        },
        callout: {
          fr: "NAT ≠ sécurité complète, mais il masque les IP internes.",
          en: "NAT ≠ full security, but it hides internal IPs.",
        },
      },
      {
        id: "net-nat-s4",
        title: {
          fr: "Bonnes pratiques simples",
          en: "Simple best practices",
        },
        body: {
          fr: "Ouvre seulement les ports nécessaires (redirection / port forwarding avec prudence). Garde le firmware à jour. Sépare invitados Wi‑Fi si possible. Comprendre NAT et pare-feu, c'est déjà mieux protéger ton LAN.",
          en: "Open only needed ports (port forwarding carefully). Keep firmware updated. Use a guest Wi‑Fi if possible. Understanding NAT and firewalls already helps protect your LAN.",
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "NAT", en: "NAT" },
        definition: {
          fr: "Traduction d'adresses entre réseau privé et public.",
          en: "Address translation between private and public networks.",
        },
      },
      {
        term: { fr: "Pare-feu", en: "Firewall" },
        definition: {
          fr: "Système qui autorise ou bloque le trafic selon des règles.",
          en: "System that allows or blocks traffic by rules.",
        },
      },
      {
        term: { fr: "Port forwarding", en: "Port forwarding" },
        definition: {
          fr: "Redirection d'un port public vers un hôte du LAN.",
          en: "Redirecting a public port to a LAN host.",
        },
      },
    ],
    activities: [
      {
        id: "net-nat-q1",
        type: "multiple-choice",
        question: {
          fr: "Le NAT sert surtout à…",
          en: "NAT is mainly used to…",
        },
        options: [
          {
            fr: "Partager une IP publique entre plusieurs appareils privés",
            en: "Share one public IP among many private devices",
          },
          {
            fr: "Remplacer le Wi‑Fi",
            en: "Replace Wi‑Fi",
          },
          {
            fr: "Créer des noms de domaine",
            en: "Create domain names",
          },
          {
            fr: "Charger des polices",
            en: "Load fonts",
          },
        ],
        correctAnswer: {
          fr: "Partager une IP publique entre plusieurs appareils privés",
          en: "Share one public IP among many private devices",
        },
        hint: {
          fr: "Pense box et plusieurs téléphones.",
          en: "Think gateway and many phones.",
        },
        explanation: {
          fr: "Explication : le NAT traduit le LAN privé vers l'IP publique.",
          en: "Explanation: NAT translates the private LAN to the public IP.",
        },
      },
      {
        id: "net-nat-q2",
        type: "multiple-choice",
        question: {
          fr: "Où se trouve souvent le NAT à la maison ?",
          en: "Where is NAT often found at home?",
        },
        options: [
          { fr: "Sur le routeur / la box", en: "On the router / gateway" },
          { fr: "Dans le clavier", en: "In the keyboard" },
          { fr: "Dans l'écran seul", en: "In the display alone" },
          { fr: "Dans le chargeur", en: "In the charger" },
        ],
        correctAnswer: {
          fr: "Sur le routeur / la box",
          en: "On the router / gateway",
        },
        hint: {
          fr: "Entre ton LAN et Internet.",
          en: "Between your LAN and the Internet.",
        },
        explanation: {
          fr: "Explication : le routeur domestique fait typiquement le NAT.",
          en: "Explanation: the home router typically performs NAT.",
        },
      },
      {
        id: "net-nat-q3",
        type: "multiple-choice",
        question: {
          fr: "Un pare-feu basique filtre le trafic selon…",
          en: "A basic firewall filters traffic by…",
        },
        options: [
          {
            fr: "Des règles (IP, port, protocole…)",
            en: "Rules (IP, port, protocol…)",
          },
          {
            fr: "La couleur du boîtier",
            en: "The color of the box",
          },
          {
            fr: "La marque du câble seule",
            en: "Cable brand alone",
          },
          {
            fr: "Le volume du ventilateur",
            en: "Fan volume",
          },
        ],
        correctAnswer: {
          fr: "Des règles (IP, port, protocole…)",
          en: "Rules (IP, port, protocol…)",
        },
        hint: {
          fr: "Autoriser ou refuser.",
          en: "Allow or deny.",
        },
        explanation: {
          fr: "Explication : les règles décident ce qui passe.",
          en: "Explanation: rules decide what is allowed through.",
        },
      },
      {
        id: "net-nat-q4",
        type: "multiple-choice",
        question: {
          fr: "Le port forwarding doit être…",
          en: "Port forwarding should be…",
        },
        options: [
          {
            fr: "Utilisé avec prudence, seulement si nécessaire",
            en: "Used carefully, only when needed",
          },
          {
            fr: "Ouvert pour tous les ports toujours",
            en: "Opened for all ports always",
          },
          {
            fr: "Ignoré à jamais",
            en: "Ignored forever",
          },
          {
            fr: "Réservé aux imprimantes USB",
            en: "Reserved for USB printers",
          },
        ],
        correctAnswer: {
          fr: "Utilisé avec prudence, seulement si nécessaire",
          en: "Used carefully, only when needed",
        },
        hint: {
          fr: "Moins on expose, mieux c'est.",
          en: "The less you expose, the better.",
        },
        explanation: {
          fr: "Explication : n'ouvre que le minimum requis.",
          en: "Explanation: open only the minimum required.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova. Tu expliques NAT et pare-feu de façon simple, sans alarmisme. Réponds en français.",
        en: "You are Nova. You explain NAT and firewalls simply, without alarmism. Answer in English.",
      },
      introMessage: {
        fr: "Salut ! NAT et pare-feu : je suis là pour clarifier.",
        en: "Hi! NAT and firewalls — I'm here to clarify.",
      },
      topics: [
        { fr: "Fonctionnement du NAT", en: "How NAT works" },
        { fr: "Règles de pare-feu", en: "Firewall rules" },
        { fr: "Port forwarding", en: "Port forwarding" },
      ],
    },
  },
];

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}

export function getLessonsForUnit(unitId: string): Lesson[] {
  return LESSONS.filter((lesson) => lesson.unitId === unitId);
}
