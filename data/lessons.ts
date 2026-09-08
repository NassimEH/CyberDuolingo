import type { Lesson } from "@/types/learning";
import { SOFTWARE_LESSONS } from "@/data/lessons/software";
import { WEB_LESSONS } from "@/data/lessons/web";

const NETWORKING_LESSONS: Lesson[] = [
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
    estimatedMinutes: 16,
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
          fr: "Un réseau n’est pas « Internet » : Internet est un type de réseau (WAN public).",
          en: "A network is not “the Internet”: the Internet is one kind of network (a public WAN).",
        },
        calloutKind: "key",
      },
      {
        id: "net-what-s5",
        title: {
          fr: "Analogie : le courrier",
          en: "Analogy: the mail",
        },
        body: {
          fr: "Imagine un service postal. Les adresses trouvent les destinataires, les facteurs transportent les lettres, et les centres de tri choisissent le chemin. En réseau : adresses IP, paquets, routeurs.",
          en: "Imagine a postal service. Addresses find recipients, carriers move letters, and sorting centers choose the path. On a network: IP addresses, packets, routers.",
        },
        analogy: {
          fr: "LAN = quartier ; WAN = réseau national de la poste.",
          en: "LAN = neighborhood; WAN = national postal network.",
        },
      },
      {
        id: "net-what-s6",
        title: {
          fr: "Cas concret : regarder une vidéo",
          en: "Concrete case: watching a video",
        },
        body: {
          fr: "Ton téléphone (client) demande un flux à un serveur. La requête sort de ton LAN via le routeur, traverse Internet (WAN), puis les données reviennent.",
          en: "Your phone (client) requests a stream from a server. The request leaves your LAN via the router, crosses the Internet (WAN), then data returns.",
        },
        bullets: [
          {
            fr: "Client : ton app / navigateur",
            en: "Client: your app / browser",
          },
          {
            fr: "Serveur : infrastructure du service vidéo",
            en: "Server: video service infrastructure",
          },
          {
            fr: "Réseau : le chemin entre les deux",
            en: "Network: the path between them",
          },
        ],
      },
      {
        id: "net-what-s7",
        title: {
          fr: "Erreur fréquente",
          en: "Common mistake",
        },
        body: {
          fr: "Beaucoup disent « le Wi‑Fi est Internet ». Le Wi‑Fi n’est qu’un accès local (LAN). Internet commence après ta box, côté FAI.",
          en: "Many say “Wi‑Fi is the Internet.” Wi‑Fi is only local access (LAN). The Internet starts after your gateway, on the ISP side.",
        },
        callout: {
          fr: "Wi‑Fi ≠ Internet. Wi‑Fi = accès radio local.",
          en: "Wi‑Fi ≠ Internet. Wi‑Fi = local radio access.",
        },
        calloutKind: "mistake",
        miniExercise: {
          prompt: {
            fr: "Cite 3 appareils sur ton LAN et 1 service sur Internet.",
            en: "Name 3 devices on your LAN and 1 Internet service.",
          },
          hint: {
            fr: "Ex. téléphone, PC, TV · et YouTube.",
            en: "E.g. phone, PC, TV · and YouTube.",
          },
        },
      },
      {
        id: "net-what-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu sais définir un réseau, distinguer LAN/WAN, et expliquer client-serveur. Ces idées reviennent partout ensuite.",
          en: "You can define a network, distinguish LAN/WAN, and explain client-server. These ideas return everywhere next.",
        },
        bullets: [
          {
            fr: "Réseau = appareils qui échangent des données",
            en: "Network = devices that exchange data",
          },
          {
            fr: "LAN local, WAN longue distance",
            en: "LAN local, WAN long distance",
          },
          {
            fr: "Client demande, serveur fournit",
            en: "Client requests, server provides",
          },
        ],
        callout: {
          fr: "Objectif : expliquer un réseau sans jargon inutile.",
          en: "Goal: explain a network without useless jargon.",
        },
        calloutKind: "tip",
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
    estimatedMinutes: 18,
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
          fr: "Chaque couche ajoute (puis retire) sa propre enveloppe autour des données.",
          en: "Each layer adds (then removes) its own envelope around the data.",
        },
        calloutKind: "key",
      },
      {
        id: "net-osi-s5",
        title: {
          fr: "Analogie : l'immeuble postal",
          en: "Analogy: the postal building",
        },
        body: {
          fr: "Imagine un courrier qui monte les étages d'un immeuble. Au rez-de-chaussée on gère le transport physique ; plus haut on trie les adresses ; en haut on lit le contenu du message. Chaque étage ignore les détails des autres, mais tous sont nécessaires.",
          en: "Imagine mail climbing the floors of a building. The ground floor handles physical transport; higher floors sort addresses; the top reads the message content. Each floor ignores the others' details, yet all are required.",
        },
        analogy: {
          fr: "OSI = plan des 7 étages ; TCP/IP = immeuble réel d'Internet (4 étages utiles).",
          en: "OSI = 7-floor blueprint; TCP/IP = the real Internet building (4 useful floors).",
        },
      },
      {
        id: "net-osi-s6",
        title: {
          fr: "Cas concret : ouvrir une page web",
          en: "Concrete case: opening a web page",
        },
        body: {
          fr: "Ton navigateur (application) envoie du HTTP. TCP découpe et numérote. IP achemine vers le serveur. Ethernet ou Wi‑Fi porte les bits. Au retour, on défait les enveloppes dans l'ordre inverse.",
          en: "Your browser (application) sends HTTP. TCP segments and numbers. IP routes to the server. Ethernet or Wi‑Fi carries the bits. On the way back, envelopes are removed in reverse order.",
        },
        bullets: [
          {
            fr: "Application : HTTP / HTTPS",
            en: "Application: HTTP / HTTPS",
          },
          {
            fr: "Transport : TCP",
            en: "Transport: TCP",
          },
          {
            fr: "Internet : IP · Accès : Wi‑Fi / Ethernet",
            en: "Internet: IP · Access: Wi‑Fi / Ethernet",
          },
        ],
      },
      {
        id: "net-osi-s7",
        title: {
          fr: "Erreur fréquente",
          en: "Common mistake",
        },
        body: {
          fr: "Beaucoup croient qu'Internet « tourne en OSI à 7 couches ». En pratique, on déploie TCP/IP. OSI reste un vocabulaire précieux (couche 2, couche 3) pour diagnostiquer, pas le schéma exact des paquets Internet.",
          en: "Many believe the Internet “runs on 7-layer OSI.” In practice we deploy TCP/IP. OSI remains useful vocabulary (layer 2, layer 3) for troubleshooting, not the exact Internet packet blueprint.",
        },
        callout: {
          fr: "OSI = carte mentale · TCP/IP = ce qui circule vraiment.",
          en: "OSI = mental map · TCP/IP = what actually flows.",
        },
        calloutKind: "mistake",
        miniExercise: {
          prompt: {
            fr: "Place HTTP, TCP et IP dans le modèle TCP/IP (3 couches).",
            en: "Place HTTP, TCP, and IP in the TCP/IP model (3 layers).",
          },
          hint: {
            fr: "Application → Transport → Internet.",
            en: "Application → Transport → Internet.",
          },
        },
      },
      {
        id: "net-osi-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu peux expliquer pourquoi on découpe en couches, situer les protocoles clés, et décrire l'encapsulation. C'est la grille de lecture de toutes les leçons réseau suivantes.",
          en: "You can explain why we split into layers, place key protocols, and describe encapsulation. This is the reading grid for every networking lesson that follows.",
        },
        bullets: [
          {
            fr: "OSI = 7 couches de référence",
            en: "OSI = 7 reference layers",
          },
          {
            fr: "TCP/IP = 4 couches pratiques",
            en: "TCP/IP = 4 practical layers",
          },
          {
            fr: "Encapsulation = enveloppes successives",
            en: "Encapsulation = successive envelopes",
          },
        ],
        callout: {
          fr: "En panne : demande-toi « à quelle couche ça casse ? »",
          en: "When troubleshooting: ask “which layer is breaking?”",
        },
        calloutKind: "tip",
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
      {
        id: "net-osi-q7",
        type: "multiple-choice",
        question: {
          fr: "Internet s'appuie surtout sur quel modèle en pratique ?",
          en: "In practice, the Internet mainly relies on which model?",
        },
        options: [
          { fr: "TCP/IP", en: "TCP/IP" },
          { fr: "OSI uniquement à 7 couches déployées", en: "OSI with all 7 layers deployed" },
          { fr: "USB uniquement", en: "USB only" },
          { fr: "Aucun modèle", en: "No model" },
        ],
        correctAnswer: { fr: "TCP/IP", en: "TCP/IP" },
        hint: {
          fr: "OSI reste surtout une référence pédagogique.",
          en: "OSI remains mainly a teaching reference.",
        },
        explanation: {
          fr: "Explication : les protocoles d'Internet suivent la suite TCP/IP ; OSI sert de vocabulaire.",
          en: "Explanation: Internet protocols follow the TCP/IP suite; OSI is vocabulary.",
        },
      },
      {
        id: "net-osi-q8",
        type: "multiple-choice",
        question: {
          fr: "Lors de l'encapsulation, que se passe-t-il à l'envoi ?",
          en: "During encapsulation, what happens on send?",
        },
        options: [
          {
            fr: "Chaque couche ajoute des en-têtes",
            en: "Each layer adds headers",
          },
          {
            fr: "Toutes les adresses IP sont effacées",
            en: "All IP addresses are erased",
          },
          {
            fr: "Le Wi‑Fi est désactivé",
            en: "Wi‑Fi is turned off",
          },
          {
            fr: "Le DNS est supprimé",
            en: "DNS is deleted",
          },
        ],
        correctAnswer: {
          fr: "Chaque couche ajoute des en-têtes",
          en: "Each layer adds headers",
        },
        hint: {
          fr: "Pense aux enveloppes imbriquées.",
          en: "Think nested envelopes.",
        },
        explanation: {
          fr: "Explication : à l'envoi on empile les en-têtes ; à la réception on les retire.",
          en: "Explanation: on send we stack headers; on receive we remove them.",
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
    estimatedMinutes: 17,
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
          fr: "IPv4 d'abord : format, masque, privé vs public. IPv6 viendra ensuite.",
          en: "IPv4 first: format, mask, private vs public. IPv6 comes later.",
        },
        calloutKind: "key",
      },
      {
        id: "net-ip-s5",
        title: {
          fr: "Analogie : immeuble et appartement",
          en: "Analogy: building and apartment",
        },
        body: {
          fr: "Le masque sépare « l'immeuble » (réseau) de « l'appartement » (hôte). Deux appareils dans le même immeuble se parlent localement ; pour sortir vers un autre quartier, il faut le concierge (la passerelle / le routeur).",
          en: "The mask separates the “building” (network) from the “apartment” (host). Two devices in the same building talk locally; to reach another neighborhood you need the concierge (gateway / router).",
        },
        analogy: {
          fr: "192.168.1.0/24 = un immeuble · .10 et .20 = deux appartements.",
          en: "192.168.1.0/24 = one building · .10 and .20 = two apartments.",
        },
      },
      {
        id: "net-ip-s6",
        title: {
          fr: "Cas concret : ton téléphone chez toi",
          en: "Concrete case: your phone at home",
        },
        body: {
          fr: "Sur le Wi‑Fi, ton téléphone reçoit souvent une IP privée (ex. 192.168.1.42). Sur Internet, les sites voient l'IP publique de ta box. Les deux coexistent grâce au NAT.",
          en: "On Wi‑Fi, your phone often gets a private IP (e.g. 192.168.1.42). On the Internet, sites see your gateway's public IP. Both coexist thanks to NAT.",
        },
        bullets: [
          {
            fr: "Privée : unique dans ton LAN",
            en: "Private: unique on your LAN",
          },
          {
            fr: "Publique : visible hors de chez toi",
            en: "Public: visible outside your home",
          },
          {
            fr: "Masque : qui est « dans le même réseau »",
            en: "Mask: who is “on the same network”",
          },
        ],
      },
      {
        id: "net-ip-s7",
        title: {
          fr: "Erreur fréquente",
          en: "Common mistake",
        },
        body: {
          fr: "Confondre adresse privée et publique. Une IP en 192.168.x.x n'est pas « ton IP Internet ». De même, 256 dans un octet n'est jamais valide en IPv4.",
          en: "Mixing private and public addresses. A 192.168.x.x IP is not “your Internet IP.” Likewise, 256 in an octet is never valid in IPv4.",
        },
        callout: {
          fr: "192.168.x.x = LAN · IP publique = côté FAI / Internet.",
          en: "192.168.x.x = LAN · public IP = ISP / Internet side.",
        },
        calloutKind: "mistake",
        miniExercise: {
          prompt: {
            fr: "Classe : 10.0.0.5 · 8.8.8.8 · 192.168.1.999 (privé, public, ou invalide).",
            en: "Classify: 10.0.0.5 · 8.8.8.8 · 192.168.1.999 (private, public, or invalid).",
          },
          hint: {
            fr: "10.x et 192.168.x = privé · 999 > 255 = invalide.",
            en: "10.x and 192.168.x = private · 999 > 255 = invalid.",
          },
        },
      },
      {
        id: "net-ip-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu sais lire une IPv4, comprendre le masque, et distinguer privé/public. Ces bases rendent le DNS, le NAT et le routage beaucoup plus clairs.",
          en: "You can read an IPv4 address, understand the mask, and tell private from public. These basics make DNS, NAT, and routing much clearer.",
        },
        bullets: [
          {
            fr: "IP = identité logique sur le réseau",
            en: "IP = logical identity on the network",
          },
          {
            fr: "Masque = frontière réseau / hôte",
            en: "Mask = network / host boundary",
          },
          {
            fr: "NAT relie privé et public",
            en: "NAT bridges private and public",
          },
        ],
        callout: {
          fr: "Astuce : vérifie toujours si l'IP est privée avant de « la chercher sur Internet ».",
          en: "Tip: always check whether an IP is private before “looking it up on the Internet.”",
        },
        calloutKind: "tip",
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
      {
        id: "net-ip-q6",
        type: "multiple-choice",
        question: {
          fr: "Deux PC avec 192.168.1.10 et 192.168.1.20 (masque 255.255.255.0) sont…",
          en: "Two PCs with 192.168.1.10 and 192.168.1.20 (mask 255.255.255.0) are…",
        },
        options: [
          {
            fr: "Sur le même réseau local",
            en: "On the same local network",
          },
          {
            fr: "Forcément sur deux continents",
            en: "Necessarily on two continents",
          },
          {
            fr: "Sans adresse IP",
            en: "Without an IP address",
          },
          {
            fr: "Toujours hors ligne",
            en: "Always offline",
          },
        ],
        correctAnswer: {
          fr: "Sur le même réseau local",
          en: "On the same local network",
        },
        hint: {
          fr: "Le masque /24 garde les trois premiers octets pour le réseau.",
          en: "A /24 mask keeps the first three octets for the network.",
        },
        explanation: {
          fr: "Explication : avec 255.255.255.0, 192.168.1.x forme le même réseau.",
          en: "Explanation: with 255.255.255.0, 192.168.1.x is the same network.",
        },
      },
      {
        id: "net-ip-q7",
        type: "multiple-choice",
        question: {
          fr: "Combien de bits utilise IPv6 ?",
          en: "How many bits does IPv6 use?",
        },
        options: [
          { fr: "128", en: "128" },
          { fr: "32", en: "32" },
          { fr: "16", en: "16" },
          { fr: "8", en: "8" },
        ],
        correctAnswer: { fr: "128", en: "128" },
        hint: {
          fr: "Beaucoup plus qu'IPv4 pour éviter la pénurie.",
          en: "Far more than IPv4 to avoid shortage.",
        },
        explanation: {
          fr: "Explication : IPv6 utilise 128 bits ; IPv4 en utilise 32.",
          en: "Explanation: IPv6 uses 128 bits; IPv4 uses 32.",
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
    estimatedMinutes: 16,
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
          fr: "Connecté sans sites = souvent un problème DNS, pas « Internet mort ».",
          en: "Connected but no sites = often a DNS issue, not “dead Internet.”",
        },
        calloutKind: "key",
      },
      {
        id: "net-dns-s5",
        title: {
          fr: "Analogie : l'annuaire",
          en: "Analogy: the phone book",
        },
        body: {
          fr: "Tu cherches « Pizza du coin » et l'annuaire te donne le numéro. Le DNS fait la même chose : nom lisible → adresse technique. Sans annuaire, tu pourrais encore appeler… si tu connais déjà le numéro (l'IP).",
          en: "You look up “Corner Pizza” and the directory gives the number. DNS does the same: readable name → technical address. Without a directory you could still call… if you already know the number (the IP).",
        },
        analogy: {
          fr: "Nom de domaine = nom dans l'annuaire · IP = numéro de téléphone.",
          en: "Domain name = directory listing · IP = phone number.",
        },
      },
      {
        id: "net-dns-s6",
        title: {
          fr: "Exemple de requête",
          en: "Sample query",
        },
        body: {
          fr: "Les outils de diagnostic interrogent le DNS et affichent l'enregistrement. Voici une forme typique de ce que tu pourrais voir en ligne de commande.",
          en: "Diagnostic tools query DNS and show the record. Here is a typical shape of what you might see on the command line.",
        },
        codeExample: {
          language: "bash",
          code: "nslookup example.com\n# → Address: 93.184.216.34\n\n# ou : dig example.com A +short",
          caption: {
            fr: "Résolution d'un nom vers un enregistrement A (IPv4).",
            en: "Resolving a name to an A record (IPv4).",
          },
        },
      },
      {
        id: "net-dns-s7",
        title: {
          fr: "Erreur fréquente",
          en: "Common mistake",
        },
        body: {
          fr: "Croire que le DNS « transporte » les pages web. Le DNS ne fait que donner l'IP. Ensuite HTTP/HTTPS parle au serveur. Autre piège : un cache DNS obsolète peut montrer une vieille IP après un changement.",
          en: "Believing DNS “carries” web pages. DNS only returns the IP. Then HTTP/HTTPS talks to the server. Another trap: a stale DNS cache can show an old IP after a change.",
        },
        callout: {
          fr: "DNS = traduction · HTTP = contenu.",
          en: "DNS = translation · HTTP = content.",
        },
        calloutKind: "mistake",
        miniExercise: {
          prompt: {
            fr: "Ordre les étapes : tape l'URL → DNS → TCP/HTTPS → page affichée.",
            en: "Order the steps: type URL → DNS → TCP/HTTPS → page shown.",
          },
          hint: {
            fr: "Sans IP, pas de connexion au serveur web.",
            en: "Without an IP, no connection to the web server.",
          },
        },
      },
      {
        id: "net-dns-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu comprends le rôle du DNS, la hiérarchie des noms, le cache et le diagnostic de base. C'est un des premiers réflexes quand « le web ne marche pas ».",
          en: "You understand DNS's role, name hierarchy, caching, and basic diagnosis. It is one of the first reflexes when “the web isn't working.”",
        },
        bullets: [
          {
            fr: "Nom → IP via résolveur et serveurs",
            en: "Name → IP via resolver and servers",
          },
          {
            fr: "A / AAAA = types d'enregistrements clés",
            en: "A / AAAA = key record types",
          },
          {
            fr: "Cache accélère, mais peut vieillir",
            en: "Cache speeds things up, but can go stale",
          },
        ],
        callout: {
          fr: "Astuce : teste une IP connue pour séparer panne DNS et panne réseau.",
          en: "Tip: try a known IP to separate DNS failure from network failure.",
        },
        calloutKind: "tip",
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
      {
        id: "net-dns-q7",
        type: "multiple-choice",
        question: {
          fr: "Qui interroge souvent le DNS en premier sur ton appareil ?",
          en: "Who often queries DNS first on your device?",
        },
        options: [
          {
            fr: "Un résolveur DNS (FAI ou public)",
            en: "A DNS resolver (ISP or public)",
          },
          {
            fr: "Uniquement l'imprimante",
            en: "Only the printer",
          },
          {
            fr: "Le câble HDMI",
            en: "The HDMI cable",
          },
          {
            fr: "Le ventilateur du PC",
            en: "The PC fan",
          },
        ],
        correctAnswer: {
          fr: "Un résolveur DNS (FAI ou public)",
          en: "A DNS resolver (ISP or public)",
        },
        hint: {
          fr: "Avant les serveurs autoritaires, on passe par un résolveur.",
          en: "Before authoritative servers, you go through a resolver.",
        },
        explanation: {
          fr: "Explication : le résolveur cherche (et met en cache) la réponse pour toi.",
          en: "Explanation: the resolver looks up (and caches) the answer for you.",
        },
      },
      {
        id: "net-dns-q8",
        type: "multiple-choice",
        question: {
          fr: "Le DNS livre-t-il le contenu HTML d'une page ?",
          en: "Does DNS deliver a page's HTML content?",
        },
        options: [
          {
            fr: "Non, il fournit surtout l'adresse IP",
            en: "No, it mainly provides the IP address",
          },
          {
            fr: "Oui, toujours à la place de HTTP",
            en: "Yes, always instead of HTTP",
          },
          {
            fr: "Oui, uniquement en IPv6",
            en: "Yes, only over IPv6",
          },
          {
            fr: "Oui, via le port 443 seulement",
            en: "Yes, via port 443 only",
          },
        ],
        correctAnswer: {
          fr: "Non, il fournit surtout l'adresse IP",
          en: "No, it mainly provides the IP address",
        },
        hint: {
          fr: "Ensuite HTTP/HTTPS récupère la page.",
          en: "Then HTTP/HTTPS fetches the page.",
        },
        explanation: {
          fr: "Explication : DNS traduit le nom ; le web charge le contenu ensuite.",
          en: "Explanation: DNS translates the name; the web loads content afterward.",
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
    estimatedMinutes: 18,
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
          fr: "Mots de passe et paiements : toujours via HTTPS (port 443).",
          en: "Passwords and payments: always over HTTPS (port 443).",
        },
        calloutKind: "key",
      },
      {
        id: "net-http-s5",
        title: {
          fr: "Analogie : carte postale vs lettre scellée",
          en: "Analogy: postcard vs sealed letter",
        },
        body: {
          fr: "HTTP en clair ressemble à une carte postale : le facteur (le réseau) peut lire le message. HTTPS, c'est une lettre scellée : le contenu reste privé, et le sceau (certificat) aide à vérifier l'expéditeur.",
          en: "Plain HTTP is like a postcard: the carrier (the network) can read the message. HTTPS is a sealed letter: the content stays private, and the seal (certificate) helps verify the sender.",
        },
        analogy: {
          fr: "HTTP = lisible en transit · HTTPS = chiffré + identité vérifiée.",
          en: "HTTP = readable in transit · HTTPS = encrypted + identity checked.",
        },
      },
      {
        id: "net-http-s6",
        title: {
          fr: "Exemple de requête",
          en: "Sample request",
        },
        body: {
          fr: "Une requête HTTP a une forme simple : méthode, chemin, version, puis des en-têtes. La réponse commence par un code de statut.",
          en: "An HTTP request has a simple shape: method, path, version, then headers. The response starts with a status code.",
        },
        codeExample: {
          language: "http",
          code: "GET /index.html HTTP/1.1\nHost: example.com\nAccept: text/html\n\nHTTP/1.1 200 OK\nContent-Type: text/html",
          caption: {
            fr: "Requête GET et début de réponse 200.",
            en: "GET request and start of a 200 response.",
          },
        },
      },
      {
        id: "net-http-s7",
        title: {
          fr: "Erreur fréquente",
          en: "Common mistake",
        },
        body: {
          fr: "Croire que le cadenas HTTPS garantit un site « sûr à 100 % ». HTTPS protège le canal, pas forcément le contenu ni l'honnêteté du site. Autre erreur : envoyer un mot de passe en HTTP clair.",
          en: "Believing the HTTPS lock means a site is “100% safe.” HTTPS protects the channel, not necessarily the content or the site's honesty. Another mistake: sending a password over plain HTTP.",
        },
        callout: {
          fr: "HTTPS ≠ site forcément de confiance · HTTP clair = dangereux pour les secrets.",
          en: "HTTPS ≠ automatically trustworthy site · plain HTTP = unsafe for secrets.",
        },
        calloutKind: "mistake",
        miniExercise: {
          prompt: {
            fr: "Pour un login, choisis HTTP ou HTTPS, et le port associé.",
            en: "For a login, choose HTTP or HTTPS, and the matching port.",
          },
          hint: {
            fr: "HTTPS · 443.",
            en: "HTTPS · 443.",
          },
        },
      },
      {
        id: "net-http-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu sais décrire requête/réponse, méthodes courantes, et pourquoi HTTPS + certificats comptent. C'est le langage quotidien du web.",
          en: "You can describe request/response, common methods, and why HTTPS + certificates matter. This is the everyday language of the web.",
        },
        bullets: [
          {
            fr: "Client demande, serveur répond avec un code",
            en: "Client asks, server replies with a code",
          },
          {
            fr: "GET lit · POST envoie",
            en: "GET reads · POST sends",
          },
          {
            fr: "HTTPS = HTTP + TLS (souvent 443)",
            en: "HTTPS = HTTP + TLS (often 443)",
          },
        ],
        callout: {
          fr: "Astuce : en panne web, regarde le code (404, 500) avant de blâmer le Wi‑Fi.",
          en: "Tip: when the web fails, check the status code (404, 500) before blaming Wi‑Fi.",
        },
        calloutKind: "tip",
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
      {
        id: "net-http-q6",
        type: "multiple-choice",
        question: {
          fr: "Quelle méthode HTTP envoie typiquement des données de formulaire ?",
          en: "Which HTTP method typically sends form data?",
        },
        options: [
          { fr: "POST", en: "POST" },
          { fr: "GET uniquement sans corps", en: "GET only with no body" },
          { fr: "PING", en: "PING" },
          { fr: "WIFI", en: "WIFI" },
        ],
        correctAnswer: { fr: "POST", en: "POST" },
        hint: {
          fr: "Souvent utilisée pour créer ou envoyer.",
          en: "Often used to create or submit.",
        },
        explanation: {
          fr: "Explication : POST envoie un corps de données au serveur.",
          en: "Explanation: POST sends a data body to the server.",
        },
      },
      {
        id: "net-http-q7",
        type: "multiple-choice",
        question: {
          fr: "Le cadenas HTTPS garantit-il qu'un site est honnête ?",
          en: "Does the HTTPS lock guarantee a site is honest?",
        },
        options: [
          {
            fr: "Non, il protège surtout le canal",
            en: "No, it mainly protects the channel",
          },
          {
            fr: "Oui, à 100 % toujours",
            en: "Yes, always 100%",
          },
          {
            fr: "Oui, uniquement hors ligne",
            en: "Yes, only offline",
          },
          {
            fr: "Oui, car HTTP disparaît",
            en: "Yes, because HTTP disappears",
          },
        ],
        correctAnswer: {
          fr: "Non, il protège surtout le canal",
          en: "No, it mainly protects the channel",
        },
        hint: {
          fr: "Chiffrement ≠ confiance totale dans le contenu.",
          en: "Encryption ≠ full trust in the content.",
        },
        explanation: {
          fr: "Explication : HTTPS sécurise le transport ; le site peut quand même être malveillant.",
          en: "Explanation: HTTPS secures transport; the site can still be malicious.",
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
    estimatedMinutes: 16,
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
        calloutKind: "tip",
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
      {
        id: "net-dev-s5",
        title: {
          fr: "Analogie : hall d'immeuble",
          en: "Analogy: building lobby",
        },
        body: {
          fr: "Le switch est comme les couloirs qui relient les appartements du même immeuble. Le routeur est la porte vers la rue. L'AP, c'est le Wi‑Fi dans le hall : tu te connectes sans câble, mais tu restes dans le même bâtiment.",
          en: "The switch is like hallways linking apartments in the same building. The router is the door to the street. The AP is Wi‑Fi in the lobby: you connect without a cable, yet stay in the same building.",
        },
        analogy: {
          fr: "Switch = couloirs LAN · Routeur = porte Internet · AP = Wi‑Fi local.",
          en: "Switch = LAN hallways · Router = Internet door · AP = local Wi‑Fi.",
        },
      },
      {
        id: "net-dev-s6",
        title: {
          fr: "Cas concret : bureau simple",
          en: "Concrete case: simple office",
        },
        body: {
          fr: "PC câblés → switch → routeur → Internet. Les portables se collent à un AP branché sur le même LAN. Si le Wi‑Fi tombe mais le câble marche, le souci est plutôt côté AP — pas forcément le FAI.",
          en: "Wired PCs → switch → router → Internet. Laptops join an AP on the same LAN. If Wi‑Fi dies but cable works, the issue is likely the AP — not necessarily the ISP.",
        },
        bullets: [
          {
            fr: "Câble OK, Wi‑Fi KO → suspecte l'AP",
            en: "Cable OK, Wi‑Fi down → suspect the AP",
          },
          {
            fr: "LAN OK, Internet KO → suspecte le routeur / FAI",
            en: "LAN OK, Internet down → suspect router / ISP",
          },
        ],
      },
      {
        id: "net-dev-s7",
        title: {
          fr: "Erreur fréquente",
          en: "Common mistake",
        },
        body: {
          fr: "Appeler tout « la box » sans séparer les rôles, ou croire qu'un switch « donne Internet ». Un switch seul ne route pas vers le WAN. Autre confusion : AP ≠ routeur (même si la box fait les deux).",
          en: "Calling everything “the box” without separating roles, or thinking a switch “gives Internet.” A switch alone does not route to the WAN. Another mix-up: AP ≠ router (even if the gateway does both).",
        },
        callout: {
          fr: "Switch = même réseau · Routeur = entre réseaux · AP = radio.",
          en: "Switch = same network · Router = between networks · AP = radio.",
        },
        calloutKind: "mistake",
        miniExercise: {
          prompt: {
            fr: "Pour chaque besoin, choisis : switch, routeur ou AP — (1) Wi‑Fi salon (2) 8 PC Ethernet (3) sortir sur Internet.",
            en: "For each need, choose: switch, router, or AP — (1) living-room Wi‑Fi (2) 8 Ethernet PCs (3) reach the Internet.",
          },
          hint: {
            fr: "AP · switch · routeur.",
            en: "AP · switch · router.",
          },
        },
      },
      {
        id: "net-dev-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu distingues les trois rôles et tu sais les retrouver même dans une box tout-en-un. Ce découpage accélère le diagnostic au quotidien.",
          en: "You distinguish the three roles and can still spot them inside an all-in-one gateway. That split speeds up everyday troubleshooting.",
        },
        bullets: [
          {
            fr: "Switch interconnecte le LAN",
            en: "Switch interconnects the LAN",
          },
          {
            fr: "Routeur relie LAN et Internet",
            en: "Router links LAN and Internet",
          },
          {
            fr: "AP apporte le Wi‑Fi",
            en: "AP provides Wi‑Fi",
          },
        ],
        callout: {
          fr: "Astuce : diagnostique un rôle à la fois (câble, Wi‑Fi, Internet).",
          en: "Tip: diagnose one role at a time (cable, Wi‑Fi, Internet).",
        },
        calloutKind: "tip",
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
      {
        id: "net-dev-q5",
        type: "multiple-choice",
        question: {
          fr: "Un switch seul, sans routeur, permet surtout de…",
          en: "A switch alone, without a router, mainly lets you…",
        },
        options: [
          {
            fr: "Relier des appareils sur le même LAN",
            en: "Connect devices on the same LAN",
          },
          {
            fr: "Remplacer Internet mondial",
            en: "Replace the global Internet",
          },
          {
            fr: "Créer des certificats TLS",
            en: "Create TLS certificates",
          },
          {
            fr: "Attribuer des noms de domaine",
            en: "Assign domain names",
          },
        ],
        correctAnswer: {
          fr: "Relier des appareils sur le même LAN",
          en: "Connect devices on the same LAN",
        },
        hint: {
          fr: "Il n'ouvre pas forcément la porte vers le WAN.",
          en: "It does not necessarily open the door to the WAN.",
        },
        explanation: {
          fr: "Explication : le switch interconnecte localement ; le routage vers Internet est un autre rôle.",
          en: "Explanation: the switch interconnects locally; routing to the Internet is another role.",
        },
      },
      {
        id: "net-dev-q6",
        type: "multiple-choice",
        question: {
          fr: "Le switch travaille surtout avec des adresses…",
          en: "The switch mainly works with… addresses",
        },
        options: [
          { fr: "MAC", en: "MAC" },
          { fr: "E-mail uniquement", en: "Email only" },
          { fr: "ISBN", en: "ISBN" },
          { fr: "GPS", en: "GPS" },
        ],
        correctAnswer: { fr: "MAC", en: "MAC" },
        hint: {
          fr: "Couche liaison / Ethernet.",
          en: "Data-link / Ethernet layer.",
        },
        explanation: {
          fr: "Explication : le switch forward souvent selon les adresses MAC.",
          en: "Explanation: switches often forward based on MAC addresses.",
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
    estimatedMinutes: 17,
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
        calloutKind: "key",
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
      {
        id: "net-ports-s5",
        title: {
          fr: "Analogie : immeuble et appartements",
          en: "Analogy: building and apartments",
        },
        body: {
          fr: "L'adresse IP est l'immeuble ; le port est le numéro d'appartement. Le facteur (réseau) livre au bon bâtiment, puis au bon appartement (service).",
          en: "The IP address is the building; the port is the apartment number. The carrier (network) delivers to the right building, then the right apartment (service).",
        },
        analogy: {
          fr: "IP = immeuble · Port = appartement · TCP/UDP = type de livraison.",
          en: "IP = building · Port = apartment · TCP/UDP = delivery style.",
        },
      },
      {
        id: "net-ports-s6",
        title: {
          fr: "Cas concret : une journée de trafic",
          en: "Concrete case: a day of traffic",
        },
        body: {
          fr: "Tu ouvres un site (443/TCP), résous un nom (53/UDP souvent), puis te connectes en SSH à un serveur (22/TCP). Même machine, plusieurs services, plusieurs ports.",
          en: "You open a site (443/TCP), resolve a name (often 53/UDP), then SSH to a server (22/TCP). Same machine, many services, many ports.",
        },
        bullets: [
          {
            fr: "443/TCP → HTTPS",
            en: "443/TCP → HTTPS",
          },
          {
            fr: "53/UDP → DNS",
            en: "53/UDP → DNS",
          },
          {
            fr: "22/TCP → SSH",
            en: "22/TCP → SSH",
          },
        ],
      },
      {
        id: "net-ports-s7",
        title: {
          fr: "Erreur fréquente",
          en: "Common mistake",
        },
        body: {
          fr: "Croire que « TCP est toujours mieux » ou que « UDP est inutilisable ». UDP est parfait quand la vitesse compte et qu'une perte ponctuelle est acceptable. Autre erreur : confondre port 80 et 443.",
          en: "Believing “TCP is always better” or “UDP is useless.” UDP is great when speed matters and occasional loss is OK. Another mistake: mixing up ports 80 and 443.",
        },
        callout: {
          fr: "TCP = fiabilité · UDP = légèreté · le bon choix dépend du service.",
          en: "TCP = reliability · UDP = lightness · the right choice depends on the service.",
        },
        calloutKind: "mistake",
        miniExercise: {
          prompt: {
            fr: "Associe : 22, 53, 80, 443 → SSH, DNS, HTTP, HTTPS.",
            en: "Match: 22, 53, 80, 443 → SSH, DNS, HTTP, HTTPS.",
          },
          hint: {
            fr: "22 SSH · 53 DNS · 80 HTTP · 443 HTTPS.",
            en: "22 SSH · 53 DNS · 80 HTTP · 443 HTTPS.",
          },
        },
      },
      {
        id: "net-ports-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu sais pourquoi les ports existent, quand choisir TCP ou UDP, et quels numéros revoir en priorité. C'est la base pour lire un pare-feu ou un scan de ports.",
          en: "You know why ports exist, when to choose TCP or UDP, and which numbers to review first. That is the base for reading a firewall or a port scan.",
        },
        bullets: [
          {
            fr: "IP + port = destination précise",
            en: "IP + port = precise destination",
          },
          {
            fr: "TCP fiable · UDP rapide",
            en: "TCP reliable · UDP fast",
          },
          {
            fr: "Ouvre le minimum de ports",
            en: "Open the minimum ports",
          },
        ],
        callout: {
          fr: "Astuce : apprends d'abord 22, 53, 80, 443 — le reste viendra.",
          en: "Tip: learn 22, 53, 80, 443 first — the rest will follow.",
        },
        calloutKind: "tip",
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
      {
        id: "net-ports-q6",
        type: "multiple-choice",
        question: {
          fr: "Le port 80 est typiquement associé à…",
          en: "Port 80 is typically associated with…",
        },
        options: [
          { fr: "HTTP", en: "HTTP" },
          { fr: "HTTPS uniquement", en: "HTTPS only" },
          { fr: "SSH", en: "SSH" },
          { fr: "RDP", en: "RDP" },
        ],
        correctAnswer: { fr: "HTTP", en: "HTTP" },
        hint: {
          fr: "Le web en clair, avant HTTPS.",
          en: "The plain web, before HTTPS.",
        },
        explanation: {
          fr: "Explication : HTTP utilise souvent 80 ; HTTPS utilise 443.",
          en: "Explanation: HTTP often uses 80; HTTPS uses 443.",
        },
      },
      {
        id: "net-ports-q7",
        type: "multiple-choice",
        question: {
          fr: "Pourquoi un pare-feu s'intéresse-t-il aux ports ?",
          en: "Why does a firewall care about ports?",
        },
        options: [
          {
            fr: "Pour autoriser ou bloquer des services précis",
            en: "To allow or block specific services",
          },
          {
            fr: "Pour changer la couleur du boîtier",
            en: "To change the box color",
          },
          {
            fr: "Pour créer des images",
            en: "To create images",
          },
          {
            fr: "Pour remplacer l'alimentation",
            en: "To replace the power supply",
          },
        ],
        correctAnswer: {
          fr: "Pour autoriser ou bloquer des services précis",
          en: "To allow or block specific services",
        },
        hint: {
          fr: "Chaque service écoute souvent sur un port.",
          en: "Each service often listens on a port.",
        },
        explanation: {
          fr: "Explication : filtrer par port cible le service sans tout ouvrir.",
          en: "Explanation: filtering by port targets the service without opening everything.",
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
    estimatedMinutes: 16,
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
        calloutKind: "key",
      },
      {
        id: "net-nat-s4",
        title: {
          fr: "Bonnes pratiques simples",
          en: "Simple best practices",
        },
        body: {
          fr: "Ouvre seulement les ports nécessaires (redirection / port forwarding avec prudence). Garde le firmware à jour. Sépare le Wi‑Fi invité si possible. Comprendre NAT et pare-feu, c'est déjà mieux protéger ton LAN.",
          en: "Open only needed ports (port forwarding carefully). Keep firmware updated. Use a guest Wi‑Fi if possible. Understanding NAT and firewalls already helps protect your LAN.",
        },
      },
      {
        id: "net-nat-s5",
        title: {
          fr: "Analogie : réception d'hôtel",
          en: "Analogy: hotel front desk",
        },
        body: {
          fr: "Les chambres ont des numéros internes (IP privées). L'extérieur ne connaît que l'adresse de l'hôtel (IP publique). La réception (NAT) traduit les appels et sait à quelle chambre renvoyer. Le garde (pare-feu) décide qui peut entrer.",
          en: "Rooms have internal numbers (private IPs). Outside only knows the hotel address (public IP). The front desk (NAT) translates calls and knows which room to reach. The guard (firewall) decides who may enter.",
        },
        analogy: {
          fr: "NAT = réception qui traduit · Pare-feu = règles d'entrée/sortie.",
          en: "NAT = translating front desk · Firewall = entry/exit rules.",
        },
      },
      {
        id: "net-nat-s6",
        title: {
          fr: "Cas concret : trois téléphones, une box",
          en: "Concrete case: three phones, one gateway",
        },
        body: {
          fr: "Trois téléphones sortent sur YouTube. Chacun a une IP privée différente. Sur Internet, le service voit surtout l'IP publique de la box. Le NAT suit chaque session pour ramener la bonne vidéo au bon téléphone.",
          en: "Three phones stream YouTube. Each has a different private IP. On the Internet, the service mostly sees the gateway's public IP. NAT tracks each session so the right video returns to the right phone.",
        },
        bullets: [
          {
            fr: "Sortie : privé → public",
            en: "Outbound: private → public",
          },
          {
            fr: "Retour : public → le bon hôte privé",
            en: "Return: public → the correct private host",
          },
        ],
      },
      {
        id: "net-nat-s7",
        title: {
          fr: "Erreur fréquente",
          en: "Common mistake",
        },
        body: {
          fr: "Croire que le NAT remplace un vrai pare-feu, ou ouvrir du port forwarding « pour voir » sans besoin. Le NAT aide au partage d'adresse ; la sécurité vient surtout des règles et de la surface d'attaque minimale.",
          en: "Believing NAT replaces a real firewall, or opening port forwarding “just to see” with no need. NAT helps share an address; security mostly comes from rules and a minimal attack surface.",
        },
        callout: {
          fr: "NAT masque · Pare-feu filtre · Port forward = exposition volontaire.",
          en: "NAT hides · Firewall filters · Port forward = deliberate exposure.",
        },
        calloutKind: "mistake",
        miniExercise: {
          prompt: {
            fr: "Cite 1 raison d'utiliser le NAT et 1 règle simple de pare-feu chez toi.",
            en: "Name 1 reason to use NAT and 1 simple home firewall rule.",
          },
          hint: {
            fr: "Ex. partager une IP publique · bloquer le trafic entrant non demandé.",
            en: "E.g. share one public IP · block unsolicited inbound traffic.",
          },
        },
      },
      {
        id: "net-nat-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu sais pourquoi le LAN partage une IP publique, comment un pare-feu décide, et pourquoi la redirection de ports demande de la prudence.",
          en: "You know why a LAN shares a public IP, how a firewall decides, and why port forwarding needs caution.",
        },
        bullets: [
          {
            fr: "NAT traduit privé ↔ public",
            en: "NAT translates private ↔ public",
          },
          {
            fr: "Pare-feu = règles allow/deny",
            en: "Firewall = allow/deny rules",
          },
          {
            fr: "N'expose que le nécessaire",
            en: "Expose only what is needed",
          },
        ],
        callout: {
          fr: "Astuce : avant d'ouvrir un port, demande « qui en a vraiment besoin ? »",
          en: "Tip: before opening a port, ask “who truly needs this?”",
        },
        calloutKind: "tip",
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
      {
        id: "net-nat-q5",
        type: "multiple-choice",
        question: {
          fr: "Le NAT remplace-t-il complètement un pare-feu ?",
          en: "Does NAT completely replace a firewall?",
        },
        options: [
          {
            fr: "Non, ce sont des rôles différents",
            en: "No, they are different roles",
          },
          {
            fr: "Oui, toujours",
            en: "Yes, always",
          },
          {
            fr: "Oui, uniquement la nuit",
            en: "Yes, only at night",
          },
          {
            fr: "Oui, car il crée du Wi‑Fi",
            en: "Yes, because it creates Wi‑Fi",
          },
        ],
        correctAnswer: {
          fr: "Non, ce sont des rôles différents",
          en: "No, they are different roles",
        },
        hint: {
          fr: "Traduction d'adresses ≠ filtrage de règles.",
          en: "Address translation ≠ rule filtering.",
        },
        explanation: {
          fr: "Explication : le NAT partage/masque des adresses ; le pare-feu autorise ou bloque.",
          en: "Explanation: NAT shares/hides addresses; the firewall allows or blocks.",
        },
      },
      {
        id: "net-nat-q6",
        type: "multiple-choice",
        question: {
          fr: "Sans NAT, plusieurs PC privés peinent souvent à…",
          en: "Without NAT, several private PCs often struggle to…",
        },
        options: [
          {
            fr: "Partager une seule IP publique vers Internet",
            en: "Share one public IP toward the Internet",
          },
          {
            fr: "Afficher un écran noir",
            en: "Show a black screen",
          },
          {
            fr: "Charger une police système",
            en: "Load a system font",
          },
          {
            fr: "Brancher un clavier USB",
            en: "Plug in a USB keyboard",
          },
        ],
        correctAnswer: {
          fr: "Partager une seule IP publique vers Internet",
          en: "Share one public IP toward the Internet",
        },
        hint: {
          fr: "C'est le problème que le NAT résout à la maison.",
          en: "That is the problem NAT solves at home.",
        },
        explanation: {
          fr: "Explication : le NAT permet à plusieurs hôtes privés d'utiliser une IP publique.",
          en: "Explanation: NAT lets many private hosts use one public IP.",
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

export const LESSONS: Lesson[] = [
  ...NETWORKING_LESSONS,
  ...WEB_LESSONS,
  ...SOFTWARE_LESSONS,
];

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}

export function getLessonsForUnit(unitId: string): Lesson[] {
  return LESSONS.filter((lesson) => lesson.unitId === unitId);
}
