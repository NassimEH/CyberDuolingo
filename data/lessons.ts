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
      fr: "Comprendre ce qu'est un réseau informatique, comment LAN et WAN se distinguent, et pourquoi clients et serveurs collaborent. Tu verras aussi comment ces idées apparaissent dès que tu ouvres une app ou regardes une vidéo en ligne.",
      en: "Understand what a computer network is, how LAN and WAN differ, and why clients and servers work together. You will also see how these ideas show up as soon as you open an app or watch a video online.",
    },
    icon: "network",
    estimatedMinutes: 21,
    xpReward: 25,
    goals: [
      {
        description: {
          fr: "Définir un réseau informatique et expliquer pourquoi les machines s'y connectent",
          en: "Define a computer network and explain why machines connect to it",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Différencier LAN, WAN et le modèle client-serveur avec des exemples concrets",
          en: "Distinguish LAN, WAN, and the client-server model with concrete examples",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Identifier les composants de base (hôtes, routeur) et éviter la confusion Wi-Fi / Internet",
          en: "Identify basic components (hosts, router) and avoid the Wi-Fi / Internet mix-up",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Expliquer le parcours d'une requête du LAN vers Internet",
          en: "Explain the path of a request from the LAN to the Internet",
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
          fr: "Un réseau informatique est un ensemble d'appareils capables d'échanger des données selon des règles communes. PC, téléphones, serveurs, imprimantes et objets connectés peuvent tous en faire partie. Internet est le plus grand réseau public ; ton Wi-Fi domestique en est un petit, local. Sans réseau, chaque machine resterait isolée : pas de mail, pas de cloud, pas de mise à jour distante.",
          en: "A computer network is a set of devices that can exchange data under shared rules. PCs, phones, servers, printers, and connected devices can all be part of one. The Internet is the largest public network; your home Wi-Fi is a small, local one. Without a network, each machine would stay isolated: no email, no cloud, no remote updates.",
        },
        bullets: [
          {
            fr: "Réseau = appareils + chemin de communication + protocoles.",
            en: "Network = devices + communication path + protocols.",
          },
          {
            fr: "L'objectif : partager ressources, messages et services.",
            en: "The goal: share resources, messages, and services.",
          },
          {
            fr: "La taille change, le principe d'échange reste le même.",
            en: "Size changes, the exchange principle stays the same.",
          },
        ],
        callout: {
          fr: "Pense « échange de données », pas seulement « Internet ».",
          en: "Think “data exchange,” not only “the Internet.”",
        },
        calloutKind: "key",
      },
      {
        id: "net-what-s2",
        diagram: "lan-wan",
        title: {
          fr: "LAN et WAN",
          en: "LAN and WAN",
        },
        body: {
          fr: "On classe souvent les réseaux selon leur portée géographique. Cette distinction aide à comprendre où les données restent locales et où elles traversent de longues distances via des opérateurs. Un LAN couvre une maison, un bureau ou un campus. Un WAN relie des sites éloignés ; Internet est le WAN public le plus connu. Ta box relie typiquement ton LAN au WAN de ton FAI.",
          en: "Networks are often classified by geographic reach. This distinction helps you see where data stays local and where it travels long distances via carriers. A LAN covers a home, office, or campus. A WAN links distant sites; the Internet is the best-known public WAN. Your gateway typically joins your LAN to your ISP’s WAN.",
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
        analogy: {
          fr: "LAN = quartier · WAN = réseau national de routes.",
          en: "LAN = neighborhood · WAN = national road network.",
        },
      },
      {
        id: "net-what-s3",
        diagram: "client-server",
        title: {
          fr: "Client et serveur",
          en: "Client and server",
        },
        body: {
          fr: "Dans le modèle le plus courant, un client demande une ressource et un serveur la fournit. Ton navigateur est un client ; le site web tourne sur un serveur. Un même appareil peut parfois jouer les deux rôles selon le contexte : un PC qui partage des fichiers agit comme serveur pour d'autres machines du LAN, tout en restant client d'Internet.",
          en: "In the most common model, a client requests a resource and a server provides it. Your browser is a client; the website runs on a server. The same device can sometimes play both roles depending on the context: a PC that shares files acts as a server for other LAN machines while still being an Internet client.",
        },
        bullets: [
          {
            fr: "Client : initie la demande (navigateur, app mobile).",
            en: "Client: starts the request (browser, mobile app).",
          },
          {
            fr: "Serveur : écoute et répond (site, API, base distante).",
            en: "Server: listens and replies (site, API, remote database).",
          },
          {
            fr: "Le même appareil peut changer de rôle selon le service.",
            en: "The same device can change roles depending on the service.",
          },
        ],
        callout: {
          fr: "Le rôle dépend du contexte, pas seulement du boîtier physique.",
          en: "The role depends on context, not only on the physical box.",
        },
        calloutKind: "tip",
      },
      {
        id: "net-what-s4",
        title: {
          fr: "Pourquoi les réseaux comptent",
          en: "Why networks matter",
        },
        body: {
          fr: "Sans réseau, chaque machine serait isolée. Les réseaux permettent le partage de fichiers, la messagerie, le cloud, le streaming et presque tous les services numériques du quotidien. En tech, comprendre ce modèle évite de confondre panne locale et panne Internet, et prépare DNS, IP, HTTP et sécurité.",
          en: "Without a network, each machine would be isolated. Networks enable file sharing, messaging, cloud services, streaming, and almost every everyday digital service. In tech, understanding this model avoids mixing local outages with Internet outages, and prepares you for DNS, IP, HTTP, and security.",
        },
        bullets: [
          {
            fr: "Presque tout service moderne suppose un réseau.",
            en: "Almost every modern service assumes a network.",
          },
          {
            fr: "Le diagnostic commence par localiser où ça casse.",
            en: "Diagnosis starts by locating where it breaks.",
          },
          {
            fr: "LAN et WAN n'ont pas les mêmes contraintes.",
            en: "LAN and WAN do not share the same constraints.",
          },
        ],
        callout: {
          fr: "Un réseau n'est pas « Internet » : Internet est un type de réseau (WAN public).",
          en: "A network is not “the Internet”: the Internet is one kind of network (a public WAN).",
        },
        calloutKind: "key",
        miniExercise: {
          prompt: {
            fr: "Liste 2 services que tu utilises sur ton LAN et 2 sur Internet.",
            en: "List 2 services you use on your LAN and 2 on the Internet.",
          },
          hint: {
            fr: "Ex. imprimante / partage de fichiers · et mail / streaming.",
            en: "E.g. printer / file share · and email / streaming.",
          },
        },
      },
      {
        id: "net-what-s5",
        title: {
          fr: "Analogie : le courrier",
          en: "Analogy: the mail",
        },
        body: {
          fr: "Imagine un service postal. Les adresses trouvent les destinataires, les facteurs transportent les lettres, et les centres de tri choisissent le chemin. En réseau : adresses IP, paquets, routeurs. Le LAN ressemble à la distribution dans un quartier ; le WAN, aux liaisons entre villes.",
          en: "Imagine a postal service. Addresses find recipients, carriers move letters, and sorting centers choose the path. On a network: IP addresses, packets, routers. The LAN is like delivery inside a neighborhood; the WAN is like links between cities.",
        },
        analogy: {
          fr: "LAN = quartier ; WAN = réseau national de la poste.",
          en: "LAN = neighborhood; WAN = national postal network.",
        },
        bullets: [
          {
            fr: "Adresse : qui reçoit le message.",
            en: "Address: who receives the message.",
          },
          {
            fr: "Paquet : le contenu découpé pour le transport.",
            en: "Packet: content split for transport.",
          },
          {
            fr: "Routeur : le centre de tri entre réseaux.",
            en: "Router: the sorting center between networks.",
          },
        ],
      },
      {
        id: "net-what-s6",
        title: {
          fr: "Cas concret : regarder une vidéo",
          en: "Concrete case: watching a video",
        },
        body: {
          fr: "Ton téléphone (client) demande un flux à un serveur. La requête sort de ton LAN via le routeur, traverse Internet (WAN), puis les données reviennent. Si le Wi-Fi est mauvais, le souci est souvent local. Si le LAN marche mais aucune vidéo ne charge, le problème peut être côté FAI, DNS ou serveur distant.",
          en: "Your phone (client) requests a stream from a server. The request leaves your LAN via the router, crosses the Internet (WAN), then data returns. If Wi-Fi is poor, the issue is often local. If the LAN works but no video loads, the problem may be ISP, DNS, or the remote server.",
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
            fr: "Réseau : le chemin entre les deux (LAN puis WAN)",
            en: "Network: the path between them (LAN then WAN)",
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
          fr: "Beaucoup disent « le Wi-Fi est Internet ». Le Wi-Fi n'est qu'un accès local (LAN). Internet commence après ta box, côté FAI. Tu peux avoir le Wi-Fi allumé sans accès Internet, ou un câble Ethernet avec Internet sans aucun Wi-Fi.",
          en: "Many say “Wi-Fi is the Internet.” Wi-Fi is only local access (LAN). The Internet starts after your gateway, on the ISP side. You can have Wi-Fi on with no Internet, or Ethernet Internet with no Wi-Fi at all.",
        },
        bullets: [
          {
            fr: "Wi-Fi = technologie d'accès radio au LAN.",
            en: "Wi-Fi = radio access technology to the LAN.",
          },
          {
            fr: "Internet = réseau mondial au-delà de ta box.",
            en: "Internet = global network beyond your gateway.",
          },
          {
            fr: "Tester câble vs Wi-Fi aide à isoler la panne.",
            en: "Testing cable vs Wi-Fi helps isolate the failure.",
          },
        ],
        callout: {
          fr: "Wi-Fi ≠ Internet. Wi-Fi = accès radio local.",
          en: "Wi-Fi ≠ Internet. Wi-Fi = local radio access.",
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
        id: "net-what-s-extra1",
        title: {
          fr: "Dépannage : rien ne charge",
          en: "Troubleshooting: nothing loads",
        },
        body: {
          fr: "Quand « Internet ne marche pas », sépare les couches. Les appareils se voient-ils encore sur le LAN (imprimante, partage) ? Le routeur répond-il ? Une page connue par IP fonctionne-t-elle ? Cet ordre évite de redémarrer au hasard et te prépare aux leçons DNS, IP et HTTP.",
          en: "When “the Internet is down,” separate the layers. Can devices still see each other on the LAN (printer, share)? Does the router reply? Does a known page by IP work? That order avoids random reboots and prepares you for DNS, IP, and HTTP lessons.",
        },
        bullets: [
          {
            fr: "1) Vérifier le lien local (câble / Wi-Fi / box allumée).",
            en: "1) Check the local link (cable / Wi-Fi / gateway powered).",
          },
          {
            fr: "2) Tester le LAN (autre appareil, page de la box).",
            en: "2) Test the LAN (another device, gateway page).",
          },
          {
            fr: "3) Tester Internet (autre réseau, hot-spot, status FAI).",
            en: "3) Test the Internet (another network, hotspot, ISP status).",
          },
        ],
        callout: {
          fr: "Diagnostique du plus proche (toi) vers le plus lointain (Internet).",
          en: "Diagnose from nearest (you) to farthest (Internet).",
        },
        calloutKind: "tip",
      },
      {
        id: "net-what-s-extra2",
        diagram: "client-server",
        title: {
          fr: "Aller plus loin : peer-to-peer et cloud",
          en: "Going deeper: peer-to-peer and cloud",
        },
        body: {
          fr: "Le modèle client-serveur domine le web, mais ce n'est pas le seul. En pair-à-pair, des machines échangent directement des rôles proches. Dans le cloud, tu restes client d'un service, sauf que le serveur est une ferme de machines gérée ailleurs. Pour débuter, garde le réflexe client-serveur : il explique la majorité des apps. Tu pourras ensuite nuancer avec d'autres architectures sans perdre le fil.",
          en: "The client-server model dominates the web, but it is not the only one. In peer-to-peer, machines exchange near-equal roles directly. In the cloud, you remain a client of a service, except the server is a farm of machines managed elsewhere. To start, keep the client-server reflex: it explains most apps. You can later add nuance with other architectures without losing the thread.",
        },
        bullets: [
          {
            fr: "Client-serveur : clair pour le web et les API.",
            en: "Client-server: clear for the web and APIs.",
          },
          {
            fr: "Peer-to-peer : échanges plus symétriques entre machines.",
            en: "Peer-to-peer: more symmetric exchanges between machines.",
          },
          {
            fr: "Cloud : le serveur est distant et souvent distribué.",
            en: "Cloud: the server is remote and often distributed.",
          },
        ],
        callout: {
          fr: "Clé : même dans le cloud, ton appareil reste en général un client.",
          en: "Key: even in the cloud, your device is usually still a client.",
        },
        calloutKind: "key",
        miniExercise: {
          prompt: {
            fr: "Classe ces cas : navigateur vers site, deux consoles en local, app vers API cloud.",
            en: "Classify these cases: browser to site, two consoles locally, app to cloud API.",
          },
          hint: {
            fr: "Client-serveur · plutôt peer · client-serveur cloud.",
            en: "Client-server · more peer-like · cloud client-server.",
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
          fr: "Tu sais définir un réseau, distinguer LAN/WAN, expliquer client-serveur, et séparer Wi-Fi d'Internet. Ces idées reviennent partout ensuite : adressage, DNS, HTTP et équipements.",
          en: "You can define a network, distinguish LAN/WAN, explain client-server, and separate Wi-Fi from the Internet. These ideas return everywhere next: addressing, DNS, HTTP, and devices.",
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
      {
        term: { fr: "Hôte", en: "Host" },
        definition: {
          fr: "Machine (PC, téléphone, serveur) connectée au réseau.",
          en: "A machine (PC, phone, server) connected to the network.",
        },
      },
      {
        term: { fr: "Paquet", en: "Packet" },
        definition: {
          fr: "Bloc de données transporté sur le réseau avec des informations d'acheminement.",
          en: "A block of data carried on the network with forwarding information.",
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
          fr: "Le Wi-Fi de la maison couvre une zone locale : c'est un LAN. Internet, derrière la box, relève du WAN.",
          en: "Home Wi-Fi covers a local area: that is a LAN. The Internet behind the gateway is WAN territory.",
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
          fr: "Le navigateur initie la requête vers le serveur qui héberge la page : c'est le rôle client.",
          en: "The browser starts the request toward the server hosting the page: that is the client role.",
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
          fr: "Internet relie des réseaux éloignés à l'échelle mondiale : c'est un WAN public.",
          en: "The Internet links distant networks worldwide: it is a public WAN.",
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
          fr: "Le site répond aux requêtes des navigateurs en fournissant pages et ressources : rôle serveur.",
          en: "The site answers browser requests by providing pages and resources: the server role.",
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
          fr: "Le routeur (souvent dans la box) fait le lien entre ton LAN et le réseau du FAI.",
          en: "The router (often inside the gateway) links your LAN to the ISP network.",
        },
      },
      {
        id: "net-what-q6",
        type: "multiple-choice",
        question: {
          fr: "Le Wi-Fi domestique, c'est…",
          en: "Home Wi-Fi is…",
        },
        options: [
          {
            fr: "Un accès radio local, pas Internet en soi",
            en: "Local radio access, not the Internet itself",
          },
          {
            fr: "Exactement synonyme d'Internet",
            en: "An exact synonym of the Internet",
          },
          {
            fr: "Uniquement un protocole de messagerie",
            en: "Only a messaging protocol",
          },
          {
            fr: "Un type de disque dur",
            en: "A type of hard drive",
          },
        ],
        correctAnswer: {
          fr: "Un accès radio local, pas Internet en soi",
          en: "Local radio access, not the Internet itself",
        },
        hint: {
          fr: "Tu peux avoir du Wi-Fi sans accès FAI.",
          en: "You can have Wi-Fi without ISP access.",
        },
        explanation: {
          fr: "Le Wi-Fi relie tes appareils au LAN. Internet arrive ensuite via le routeur et le FAI.",
          en: "Wi-Fi joins your devices to the LAN. The Internet arrives later via the router and ISP.",
        },
      },
      {
        id: "net-what-q7",
        type: "multiple-choice",
        question: {
          fr: "Deux PC qui partagent une imprimante chez toi forment surtout…",
          en: "Two PCs sharing a printer at home mainly form…",
        },
        options: [
          { fr: "Un usage typique de LAN", en: "A typical LAN use case" },
          { fr: "Un WAN obligatoire", en: "A mandatory WAN" },
          { fr: "Un satellite", en: "A satellite" },
          { fr: "Un certificat TLS", en: "A TLS certificate" },
        ],
        correctAnswer: {
          fr: "Un usage typique de LAN",
          en: "A typical LAN use case",
        },
        hint: {
          fr: "Tout reste dans la maison.",
          en: "Everything stays inside the home.",
        },
        explanation: {
          fr: "Le partage d'imprimante entre machines locales est un scénario LAN classique, sans forcément passer par Internet.",
          en: "Sharing a printer among local machines is a classic LAN scenario, without necessarily using the Internet.",
        },
      },
      {
        id: "net-what-q8",
        type: "multiple-choice",
        question: {
          fr: "Quel est le meilleur premier réflexe si « rien ne charge » ?",
          en: "What is the best first reflex if “nothing loads”?",
        },
        options: [
          {
            fr: "Séparer panne LAN et panne Internet",
            en: "Separate LAN failure from Internet failure",
          },
          {
            fr: "Changer immédiatement de pays",
            en: "Immediately change country",
          },
          {
            fr: "Supprimer toutes les adresses IP",
            en: "Delete all IP addresses",
          },
          {
            fr: "Ignorer le routeur",
            en: "Ignore the router",
          },
        ],
        correctAnswer: {
          fr: "Séparer panne LAN et panne Internet",
          en: "Separate LAN failure from Internet failure",
        },
        hint: {
          fr: "Du plus proche au plus lointain.",
          en: "From nearest to farthest.",
        },
        explanation: {
          fr: "Vérifier d'abord le lien local puis l'accès Internet évite de traiter le mauvais problème.",
          en: "Checking the local link first, then Internet access, avoids fixing the wrong problem.",
        },
      },
      {
        id: "net-what-q9",
        type: "multiple-choice",
        question: {
          fr: "Un paquet réseau, c'est surtout…",
          en: "A network packet is mainly…",
        },
        options: [
          {
            fr: "Un bloc de données acheminé sur le réseau",
            en: "A block of data forwarded on the network",
          },
          {
            fr: "Un câble physique",
            en: "A physical cable",
          },
          {
            fr: "Un écran",
            en: "A screen",
          },
          {
            fr: "Un mot de passe Wi-Fi",
            en: "A Wi-Fi password",
          },
        ],
        correctAnswer: {
          fr: "Un bloc de données acheminé sur le réseau",
          en: "A block of data forwarded on the network",
        },
        hint: {
          fr: "Analogie du courrier découpé.",
          en: "Mail-split analogy.",
        },
        explanation: {
          fr: "Les données sont découpées en paquets pour voyager entre machines via routeurs et liens.",
          en: "Data is split into packets so it can travel between machines via routers and links.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech bienveillante. Tu enseignes les fondamentaux des réseaux : définition d'un réseau, LAN, WAN, client et serveur, rôle du routeur, et la différence Wi-Fi / Internet. Réponds en français, clairement, avec des exemples concrets du quotidien et des pistes de dépannage simples.",
        en: "You are Nova, a friendly tech tutor. You teach network fundamentals: what a network is, LAN, WAN, client and server, the router’s role, and the Wi-Fi / Internet difference. Answer in English, clearly, with concrete everyday examples and simple troubleshooting tips.",
      },
      introMessage: {
        fr: "Salut ! Je suis Nova. Aujourd'hui on explore ce qu'est un réseau, LAN vs WAN, et client-serveur. Pose-moi tes questions !",
        en: "Hi! I'm Nova. Today we explore what a network is, LAN vs WAN, and client-server. Ask me anything!",
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
        {
          fr: "Wi-Fi versus Internet",
          en: "Wi-Fi versus the Internet",
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
      fr: "Comprendre pourquoi on découpe le réseau en couches, comparer OSI et TCP/IP, et situer IP, TCP et HTTP. Tu verras aussi comment l'encapsulation guide le diagnostic au quotidien.",
      en: "Understand why networks are split into layers, compare OSI and TCP/IP, and place IP, TCP, and HTTP. You will also see how encapsulation guides everyday troubleshooting.",
    },
    icon: "layers",
    estimatedMinutes: 23,
    xpReward: 27,
    goals: [
      {
        description: {
          fr: "Expliquer pourquoi on utilise des modèles en couches pour concevoir et diagnostiquer",
          en: "Explain why layered models are used for design and troubleshooting",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Comparer OSI (7 couches) et TCP/IP (4 couches) sans les confondre",
          en: "Compare OSI (7 layers) and TCP/IP (4 layers) without mixing them up",
        },
        xpReward: 10,
      },
      {
        description: {
          fr: "Situer IP, TCP et HTTP, et décrire l'encapsulation sur un exemple web",
          en: "Place IP, TCP, and HTTP, and describe encapsulation on a web example",
        },
        xpReward: 10,
      },
      {
        description: {
          fr: "Appliquer un diagnostic simple couche par couche",
          en: "Apply simple layer-by-layer troubleshooting",
        },
        xpReward: 5,
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
          fr: "Les modèles en couches décomposent le réseau en rôles séparés : application, transport, adressage, liaison physique. Chaque couche s'occupe d'un problème précis, ce qui facilite la conception, le diagnostic et l'évolution des protocoles. Si une page ne charge pas, tu peux te demander si le souci est applicatif, transport, IP ou lien local plutôt que de tout mélanger.",
          en: "Layered models split networking into separate roles: application, transport, addressing, and physical links. Each layer handles a specific problem, which makes design, troubleshooting, and protocol evolution easier. If a page will not load, you can ask whether the issue is application, transport, IP, or local link instead of mixing everything together.",
        },
        bullets: [
          {
            fr: "Séparation des responsabilités = code et équipements plus clairs.",
            en: "Separation of concerns = clearer software and devices.",
          },
          {
            fr: "Vocabulaire commun pour parler d'une panne (couche 2, couche 3…).",
            en: "Shared vocabulary to talk about failures (layer 2, layer 3…).",
          },
          {
            fr: "Diagnostic plus rapide : on isole le niveau en panne.",
            en: "Faster diagnosis: you isolate the failing level.",
          },
        ],
        callout: {
          fr: "Une couche bien isolée peut évoluer sans tout casser au-dessus.",
          en: "A well-isolated layer can evolve without breaking everything above.",
        },
        calloutKind: "key",
      },
      {
        id: "net-osi-s2",
        diagram: "osi-layers",
        title: {
          fr: "Le modèle OSI",
          en: "The OSI model",
        },
        body: {
          fr: "OSI (Open Systems Interconnection) compte 7 couches. On l'utilise surtout comme référence pédagogique et pour nommer les problèmes (couche 2, couche 3, etc.). Rarement déployé « tel quel », il reste la carte mentale partagée par beaucoup d'équipes réseau et sécu.",
          en: "OSI (Open Systems Interconnection) has 7 layers. It is mainly used as a teaching reference and to name problems (layer 2, layer 3, and so on). Rarely deployed “as is,” it remains the shared mental map for many networking and security teams.",
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
          fr: "TCP/IP est le modèle pratique d'Internet. Il regroupe souvent en 4 couches : Application, Transport, Internet, Accès réseau. IP vit à la couche Internet ; TCP et UDP au Transport ; HTTP, DNS, HTTPS à l'Application. C'est ce qui circule vraiment sur le réseau mondial.",
          en: "TCP/IP is the practical Internet model. It is often grouped into 4 layers: Application, Transport, Internet, and Network Access. IP lives at Internet; TCP and UDP at Transport; HTTP, DNS, and HTTPS at Application. This is what actually flows on the global network.",
        },
        bullets: [
          {
            fr: "Application : HTTP, DNS, SSH…",
            en: "Application: HTTP, DNS, SSH…",
          },
          {
            fr: "Transport : TCP ou UDP.",
            en: "Transport: TCP or UDP.",
          },
          {
            fr: "Internet : IP · Accès : Ethernet / Wi-Fi.",
            en: "Internet: IP · Access: Ethernet / Wi-Fi.",
          },
        ],
        callout: {
          fr: "Apprends TCP/IP pour la pratique, OSI pour le vocabulaire.",
          en: "Learn TCP/IP for practice, OSI for vocabulary.",
        },
        calloutKind: "tip",
      },
      {
        id: "net-osi-s4",
        diagram: "encapsulation",
        title: {
          fr: "Encapsulation",
          en: "Encapsulation",
        },
        body: {
          fr: "Quand tu envoies un message, chaque couche ajoute ses informations (en-têtes). À l'arrivée, les couches les retirent dans l'ordre inverse. C'est l'encapsulation : comme des enveloppes imbriquées autour des données utiles. Comprendre cela aide à lire une capture réseau et à voir où une information « apparaît ».",
          en: "When you send a message, each layer adds its own information (headers). On arrival, layers remove them in reverse order. That is encapsulation: nested envelopes around the useful data. Understanding this helps you read a network capture and see where a piece of information “appears.”",
        },
        bullets: [
          {
            fr: "À l'envoi : on empile les en-têtes couche par couche.",
            en: "On send: headers are stacked layer by layer.",
          },
          {
            fr: "À la réception : on retire les enveloppes dans l'ordre inverse.",
            en: "On receive: envelopes are removed in reverse order.",
          },
          {
            fr: "Chaque en-tête sert uniquement sa couche.",
            en: "Each header serves only its own layer.",
          },
        ],
        callout: {
          fr: "Chaque couche ajoute (puis retire) sa propre enveloppe autour des données.",
          en: "Each layer adds (then removes) its own envelope around the data.",
        },
        calloutKind: "key",
        analogy: {
          fr: "Lettre → enveloppe appartement → enveloppe immeuble → camion.",
          en: "Letter → apartment envelope → building envelope → truck.",
        },
      },
      {
        id: "net-osi-s5",
        title: {
          fr: "Analogie : l'immeuble postal",
          en: "Analogy: the postal building",
        },
        body: {
          fr: "Imagine un courrier qui monte les étages d'un immeuble. Au rez-de-chaussée on gère le transport physique ; plus haut on trie les adresses ; en haut on lit le contenu du message. Chaque étage ignore les détails des autres, mais tous sont nécessaires. Si le rez-de-chaussée est en panne, les étages du dessus ne peuvent rien livrer.",
          en: "Imagine mail climbing the floors of a building. The ground floor handles physical transport; higher floors sort addresses; the top reads the message content. Each floor ignores the others' details, yet all are required. If the ground floor fails, upper floors cannot deliver anything.",
        },
        analogy: {
          fr: "OSI = plan des 7 étages ; TCP/IP = immeuble réel d'Internet (4 étages utiles).",
          en: "OSI = 7-floor blueprint; TCP/IP = the real Internet building (4 useful floors).",
        },
        bullets: [
          {
            fr: "Rez-de-chaussée : lien physique et trames.",
            en: "Ground floor: physical link and frames.",
          },
          {
            fr: "Étages du milieu : adressage et transport.",
            en: "Middle floors: addressing and transport.",
          },
          {
            fr: "Sommet : le message applicatif que tu lis.",
            en: "Top: the application message you read.",
          },
        ],
      },
      {
        id: "net-osi-s6",
        title: {
          fr: "Cas concret : ouvrir une page web",
          en: "Concrete case: opening a web page",
        },
        body: {
          fr: "Ton navigateur (application) envoie du HTTP. TCP découpe et numérote. IP achemine vers le serveur. Ethernet ou Wi-Fi porte les bits. Au retour, on défait les enveloppes dans l'ordre inverse. Si TCP échoue, la page ne s'affiche pas même si le Wi-Fi « a l'air » connecté.",
          en: "Your browser (application) sends HTTP. TCP segments and numbers. IP routes to the server. Ethernet or Wi-Fi carries the bits. On the way back, envelopes are removed in reverse order. If TCP fails, the page will not show even if Wi-Fi “looks” connected.",
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
            fr: "Internet : IP · Accès : Wi-Fi / Ethernet",
            en: "Internet: IP · Access: Wi-Fi / Ethernet",
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
        bullets: [
          {
            fr: "OSI sert surtout de carte mentale et de vocabulaire.",
            en: "OSI mainly serves as a mental map and vocabulary.",
          },
          {
            fr: "TCP/IP décrit ce qui circule vraiment sur Internet.",
            en: "TCP/IP describes what actually flows on the Internet.",
          },
          {
            fr: "Dire « couche 3 » reste utile même hors OSI strict.",
            en: "Saying “layer 3” remains useful even outside strict OSI.",
          },
        ],
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
        id: "net-osi-s-extra1",
        title: {
          fr: "Dépannage par couche",
          en: "Layer-by-layer troubleshooting",
        },
        body: {
          fr: "Un scénario utile : le navigateur affiche une erreur, le ping vers une IP publique marche, le Wi-Fi est connecté. Le lien local (accès) et IP semblent OK ; le souci est peut-être applicatif (HTTP, DNS, certificat) ou transport. À l'inverse, si même le voisin du LAN est injoignable, regarde d'abord câble, AP ou switch.",
          en: "A useful scenario: the browser shows an error, ping to a public IP works, Wi-Fi is connected. Local link (access) and IP look OK; the issue may be application (HTTP, DNS, certificate) or transport. Conversely, if even a LAN neighbor is unreachable, check cable, AP, or switch first.",
        },
        bullets: [
          {
            fr: "Pas de lien local → couches d'accès.",
            en: "No local link → access layers.",
          },
          {
            fr: "Lien OK, pas de route → IP / passerelle.",
            en: "Link OK, no route → IP / gateway.",
          },
          {
            fr: "IP OK, service KO → transport / application.",
            en: "IP OK, service down → transport / application.",
          },
        ],
        callout: {
          fr: "Demande toujours : « à quelle couche ça casse ? »",
          en: "Always ask: “which layer is breaking?”",
        },
        calloutKind: "tip",
      },
      {
        id: "net-osi-s-extra2",
        title: {
          fr: "Aller plus loin : PDU et ports",
          en: "Going deeper: PDUs and ports",
        },
        body: {
          fr: "Chaque couche manipule une unité de données (souvent appelée PDU) : données applicatives, segments TCP, paquets IP, trames. Les ports TCP/UDP aident le transport à livrer au bon processus. Tu n'as pas besoin de tout mémoriser d'un coup : retiens que l'encapsulation empile ces unités, et que le diagnostic demande parfois de regarder à quel niveau le PDU est corrompu ou perdu.",
          en: "Each layer handles a data unit (often called a PDU): application data, TCP segments, IP packets, frames. TCP/UDP ports help transport deliver to the right process. You do not need to memorize everything at once: remember that encapsulation stacks these units, and troubleshooting sometimes means checking at which level the PDU is corrupted or lost.",
        },
        bullets: [
          {
            fr: "Application → message · Transport → segment · Internet → paquet · Accès → trame.",
            en: "Application → message · Transport → segment · Internet → packet · Access → frame.",
          },
          {
            fr: "Le port cible le service sur l'hôte (80, 443, 22...).",
            en: "The port targets the service on the host (80, 443, 22...).",
          },
          {
            fr: "Une erreur « couche N » guide l'outil (câble, IP, TCP, HTTP).",
            en: "A “layer N” error guides the tool (cable, IP, TCP, HTTP).",
          },
        ],
        callout: {
          fr: "Astuce : si tu retiens un seul mot, retiens encapsulation.",
          en: "Tip: if you keep one word, keep encapsulation.",
        },
        calloutKind: "key",
        analogy: {
          fr: "PDU = colis étiqueté à chaque étage de l'immeuble postal.",
          en: "PDU = labeled parcel at each floor of the postal building.",
        },
      },
      {
        id: "net-osi-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu peux expliquer pourquoi on découpe en couches, situer les protocoles clés, décrire l'encapsulation, et commencer un diagnostic couche par couche. C'est la grille de lecture de toutes les leçons réseau suivantes.",
          en: "You can explain why we split into layers, place key protocols, describe encapsulation, and start layer-by-layer diagnosis. This is the reading grid for every networking lesson that follows.",
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
      {
        term: { fr: "En-tête", en: "Header" },
        definition: {
          fr: "Métadonnées ajoutées par une couche (adresses, ports, numéros de séquence…).",
          en: "Metadata added by a layer (addresses, ports, sequence numbers…).",
        },
      },
      {
        term: { fr: "Accès réseau", en: "Network access" },
        definition: {
          fr: "Couche TCP/IP qui gère le lien local (Ethernet, Wi-Fi…).",
          en: "TCP/IP layer that handles the local link (Ethernet, Wi-Fi…).",
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
          fr: "OSI définit sept couches de référence, du physique jusqu'à l'application.",
          en: "OSI defines seven reference layers, from physical up to application.",
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
          fr: "HTTP est un protocole d'application : il s'appuie sur TCP (et IP) en dessous.",
          en: "HTTP is an application protocol: it rides on TCP (and IP) underneath.",
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
          fr: "IP identifie les interfaces et permet d'acheminer les paquets entre réseaux.",
          en: "IP identifies interfaces and enables forwarding packets between networks.",
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
          fr: "À l'envoi, chaque couche enveloppe les données ; à la réception, on retire les enveloppes.",
          en: "On send, each layer wraps the data; on receive, the wrappers are removed.",
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
          fr: "La présentation courante de TCP/IP regroupe le modèle en quatre couches pratiques.",
          en: "The common TCP/IP presentation groups the model into four practical layers.",
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
          fr: "TCP (comme UDP) appartient à la couche transport, entre l'application et IP.",
          en: "TCP (like UDP) belongs to the transport layer, between application and IP.",
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
          fr: "Les protocoles d'Internet suivent la suite TCP/IP ; OSI sert surtout de vocabulaire.",
          en: "Internet protocols follow the TCP/IP suite; OSI is mainly vocabulary.",
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
            fr: "Le Wi-Fi est désactivé",
            en: "Wi-Fi is turned off",
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
          fr: "À l'envoi on empile les en-têtes ; à la réception on les retire.",
          en: "On send we stack headers; on receive we remove them.",
        },
      },
      {
        id: "net-osi-q9",
        type: "multiple-choice",
        question: {
          fr: "Ping vers une IP publique OK, mais le site web échoue. Où regarder d'abord ?",
          en: "Ping to a public IP works, but the website fails. Where to look first?",
        },
        options: [
          {
            fr: "Couches application / service (HTTP, DNS, TLS…)",
            en: "Application / service layers (HTTP, DNS, TLS…)",
          },
          {
            fr: "Uniquement le câble coupé",
            en: "Only a cut cable",
          },
          {
            fr: "Le ventilateur du PC",
            en: "The PC fan",
          },
          {
            fr: "La couleur du routeur",
            en: "The router color",
          },
        ],
        correctAnswer: {
          fr: "Couches application / service (HTTP, DNS, TLS…)",
          en: "Application / service layers (HTTP, DNS, TLS…)",
        },
        hint: {
          fr: "Le chemin IP semble déjà fonctionner.",
          en: "The IP path already seems to work.",
        },
        explanation: {
          fr: "Si IP répond, le lien et le routage de base sont souvent OK : regarde DNS, HTTP ou TLS ensuite.",
          en: "If IP replies, link and basic routing are often OK: next check DNS, HTTP, or TLS.",
        },
      },
      {
        id: "net-osi-q10",
        type: "multiple-choice",
        question: {
          fr: "Lors de l'encapsulation à l'envoi, que se passe-t-il ?",
          en: "During encapsulation on send, what happens?",
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
            fr: "Le Wi-Fi est désactivé automatiquement",
            en: "Wi-Fi is turned off automatically",
          },
          {
            fr: "Le DNS remplace TCP",
            en: "DNS replaces TCP",
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
          fr: "À l'envoi on empile les en-têtes ; à la réception on les retire.",
          en: "On send we stack headers; on receive we remove them.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech bienveillante. Tu enseignes les modèles OSI et TCP/IP, les couches, l'encapsulation et le dépannage couche par couche. Réponds en français, clairement, avec des analogies simples et des exemples web concrets.",
        en: "You are Nova, a friendly tech tutor. You teach the OSI and TCP/IP models, layers, encapsulation, and layer-by-layer troubleshooting. Answer in English, clearly, with simple analogies and concrete web examples.",
      },
      introMessage: {
        fr: "Salut ! Je suis Nova. Aujourd'hui on démêle OSI, TCP/IP et l'encapsulation. Pose-moi tes questions !",
        en: "Hi! I'm Nova. Today we unpack OSI, TCP/IP, and encapsulation. Ask me anything!",
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
        {
          fr: "Diagnostiquer par couche",
          en: "Diagnosing by layer",
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
      fr: "Lire une IPv4, comprendre masques et plages privées/publiques, et relier cela au NAT du quotidien. Tu verras aussi la passerelle, les conflits d'IP et une intro simple à la notation CIDR.",
      en: "Read an IPv4 address, understand masks and private/public ranges, and connect that to everyday NAT. You will also see the gateway, IP conflicts, and a simple intro to CIDR notation.",
    },
    icon: "locate",
    estimatedMinutes: 22,
    xpReward: 28,
    goals: [
      {
        description: {
          fr: "Expliquer le rôle d'une adresse IP et reconnaître une IPv4 valide",
          en: "Explain the role of an IP address and recognize a valid IPv4 address",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Différencier masque, adresse privée et adresse publique avec des exemples",
          en: "Distinguish mask, private address, and public address with examples",
        },
        xpReward: 10,
      },
      {
        description: {
          fr: "Relier adressage local, passerelle et NAT sur un scénario domestique",
          en: "Connect local addressing, gateway, and NAT on a home scenario",
        },
        xpReward: 10,
      },
      {
        description: {
          fr: "Lire une notation CIDR simple comme /24",
          en: "Read simple CIDR notation such as /24",
        },
        xpReward: 5,
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
          fr: "Une adresse IP identifie une interface sur un réseau IP, un peu comme une adresse postale pour acheminer des paquets. Sans adresse, les routeurs ne savent pas où envoyer les données. Chaque interface active (Ethernet, Wi-Fi, VPN…) peut avoir sa propre adresse selon le réseau auquel elle est attachée.",
          en: "An IP address identifies an interface on an IP network, a bit like a postal address for delivering packets. Without an address, routers do not know where to send data. Each active interface (Ethernet, Wi-Fi, VPN…) can have its own address depending on the network it joins.",
        },
        bullets: [
          {
            fr: "Identité logique : pas le numéro gravé sur la carte (MAC).",
            en: "Logical identity: not the number burned on the NIC (MAC).",
          },
          {
            fr: "Nécessaire pour le routage entre réseaux.",
            en: "Required for routing between networks.",
          },
          {
            fr: "Une interface peut avoir plusieurs IP selon les réseaux.",
            en: "An interface can have several IPs depending on the networks.",
          },
        ],
        callout: {
          fr: "IP = « où livrer » sur le réseau logique.",
          en: "IP = “where to deliver” on the logical network.",
        },
        calloutKind: "key",
      },
      {
        id: "net-ip-s2",
        diagram: "ip-subnet",
        title: {
          fr: "IPv4 en bref",
          en: "IPv4 in brief",
        },
        body: {
          fr: "IPv4 utilise 32 bits, souvent écrits en quatre nombres de 0 à 255 séparés par des points (ex. 192.168.1.10). Chaque appareil sur un même réseau local doit avoir une adresse unique dans ce réseau. Un octet hors plage (comme 999) rend l'adresse invalide.",
          en: "IPv4 uses 32 bits, often written as four numbers from 0 to 255 separated by dots (e.g. 192.168.1.10). Each device on the same local network must have a unique address on that network. An octet out of range (like 999) makes the address invalid.",
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
          {
            fr: "Notation CIDR : 192.168.1.0/24 signifie masque 255.255.255.0.",
            en: "CIDR notation: 192.168.1.0/24 means mask 255.255.255.0.",
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
          fr: "Les adresses privées (comme 10.x.x.x, 172.16-31.x.x, 192.168.x.x) restent à l'intérieur d'un LAN. Les adresses publiques sont visibles sur Internet. Le NAT sur le routeur permet à plusieurs appareils privés de partager une adresse publique. C'est pour cela que plusieurs téléphones chez toi « sortent » avec la même IP vue de l'extérieur.",
          en: "Private addresses (such as 10.x.x.x, 172.16-31.x.x, 192.168.x.x) stay inside a LAN. Public addresses are visible on the Internet. NAT on the router lets many private devices share one public address. That is why several phones at home “appear” with the same IP from the outside.",
        },
        bullets: [
          {
            fr: "Privé : non routable tel quel sur Internet.",
            en: "Private: not routable as-is on the Internet.",
          },
          {
            fr: "Public : unique (en principe) sur Internet, fourni par le FAI.",
            en: "Public: unique (in principle) on the Internet, provided by the ISP.",
          },
          {
            fr: "NAT : plusieurs privés derrière une publique.",
            en: "NAT: many private hosts behind one public address.",
          },
        ],
        callout: {
          fr: "192.168.x.x n'est pas « ton IP Internet ».",
          en: "192.168.x.x is not “your Internet IP.”",
        },
        calloutKind: "warning",
      },
      {
        id: "net-ip-s4",
        diagram: "ip-subnet",
        title: {
          fr: "IPv6 en un mot",
          en: "IPv6 in a nutshell",
        },
        body: {
          fr: "IPv6 utilise 128 bits pour répondre à la pénurie d'adresses IPv4. Tu verras des adresses plus longues avec des deux-points. Pour cette leçon, maîtriser IPv4 et les notions privé/public suffit comme base solide. Tu croiseras IPv6 de plus en plus sur les réseaux modernes, souvent en parallèle d'IPv4.",
          en: "IPv6 uses 128 bits to address IPv4 shortage. You will see longer addresses with colons. For this lesson, mastering IPv4 and private vs public concepts is a solid foundation. You will meet IPv6 more and more on modern networks, often alongside IPv4.",
        },
        bullets: [
          {
            fr: "128 bits contre 32 en IPv4.",
            en: "128 bits versus 32 in IPv4.",
          },
          {
            fr: "Écriture avec des deux-points, pas seulement des points.",
            en: "Written with colons, not only dots.",
          },
          {
            fr: "Souvent coexiste avec IPv4 (double pile).",
            en: "Often coexists with IPv4 (dual stack).",
          },
        ],
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
          fr: "Le masque sépare « l'immeuble » (réseau) de « l'appartement » (hôte). Deux appareils dans le même immeuble se parlent localement ; pour sortir vers un autre quartier, il faut le concierge (la passerelle / le routeur). Sans le bon masque, tu te trompes de voisins et le trafic local peut échouer silencieusement.",
          en: "The mask separates the “building” (network) from the “apartment” (host). Two devices in the same building talk locally; to reach another neighborhood you need the concierge (gateway / router). With the wrong mask, you misidentify neighbors and local traffic can fail quietly.",
        },
        analogy: {
          fr: "192.168.1.0/24 = un immeuble · .10 et .20 = deux appartements.",
          en: "192.168.1.0/24 = one building · .10 and .20 = two apartments.",
        },
        bullets: [
          {
            fr: "Masque = frontière entre réseau et hôte.",
            en: "Mask = boundary between network and host.",
          },
          {
            fr: "Même immeuble = communication locale directe.",
            en: "Same building = direct local communication.",
          },
          {
            fr: "Autre quartier = passerelle obligatoire.",
            en: "Other neighborhood = gateway required.",
          },
        ],
      },
      {
        id: "net-ip-s6",
        title: {
          fr: "Cas concret : ton téléphone chez toi",
          en: "Concrete case: your phone at home",
        },
        body: {
          fr: "Sur le Wi-Fi, ton téléphone reçoit souvent une IP privée (ex. 192.168.1.42) via DHCP. Sur Internet, les sites voient l'IP publique de ta box. Les deux coexistent grâce au NAT. Si tu changes de réseau (4G), ton IP privée et publique changent : tu n'es plus sur le même LAN.",
          en: "On Wi-Fi, your phone often gets a private IP (e.g. 192.168.1.42) via DHCP. On the Internet, sites see your gateway's public IP. Both coexist thanks to NAT. If you switch networks (cellular), your private and public IPs change: you are no longer on the same LAN.",
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
          fr: "Confondre adresse privée et publique. Une IP en 192.168.x.x n'est pas « ton IP Internet ». De même, 256 dans un octet n'est jamais valide en IPv4. Autre piège : croire que deux machines avec le même masque mais des préfixes différents (192.168.1.x et 192.168.2.x en /24) sont sur le même réseau local.",
          en: "Mixing private and public addresses. A 192.168.x.x IP is not “your Internet IP.” Likewise, 256 in an octet is never valid in IPv4. Another trap: believing two machines with the same mask but different prefixes (192.168.1.x and 192.168.2.x on /24) are on the same local network.",
        },
        bullets: [
          {
            fr: "Privé ≠ publique : ne cherche pas 192.168 sur Internet.",
            en: "Private ≠ public: do not look up 192.168 on the Internet.",
          },
          {
            fr: "Chaque octet IPv4 reste entre 0 et 255.",
            en: "Each IPv4 octet stays between 0 and 255.",
          },
          {
            fr: "Même masque ne veut pas dire même préfixe réseau.",
            en: "Same mask does not mean the same network prefix.",
          },
        ],
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
        id: "net-ip-s-extra1",
        title: {
          fr: "Scénario : conflit d'IP et mauvaise passerelle",
          en: "Scenario: IP conflict and wrong gateway",
        },
        body: {
          fr: "Deux PC configurés à la main avec la même IP privée provoquent des coupures intermittentes. Une mauvaise passerelle (mauvaise IP de box) laisse le LAN fonctionner entre machines mais bloque Internet. Vérifier IP, masque et passerelle ensemble est un réflexe d'admin débutant très utile.",
          en: "Two PCs manually set to the same private IP cause intermittent outages. A wrong gateway (wrong box IP) can leave LAN-to-LAN working while blocking the Internet. Checking IP, mask, and gateway together is a very useful beginner admin habit.",
        },
        bullets: [
          {
            fr: "Conflit d'IP : deux hôtes, une même adresse.",
            en: "IP conflict: two hosts, one same address.",
          },
          {
            fr: "Passerelle incorrecte : LAN OK, Internet KO.",
            en: "Wrong gateway: LAN OK, Internet down.",
          },
          {
            fr: "Masque incorrect : « voisins » mal calculés.",
            en: "Wrong mask: “neighbors” computed incorrectly.",
          },
        ],
        callout: {
          fr: "DHCP évite beaucoup d'erreurs manuelles sur un LAN simple.",
          en: "DHCP prevents many manual mistakes on a simple LAN.",
        },
        calloutKind: "tip",
      },
      {
        id: "net-ip-s-extra2",
        title: {
          fr: "Aller plus loin : CIDR en pratique",
          en: "Going deeper: CIDR in practice",
        },
        body: {
          fr: "La notation CIDR (ex. 192.168.1.0/24) dit combien de bits appartiennent au réseau. /24 correspond souvent au masque 255.255.255.0 et à 256 adresses théoriques (moins réservées). Tu n'as pas besoin de calculer des sous-réseaux complexes ici : comprends surtout que le slash fixe la frontière réseau/hôte, comme le masque en notation pointée.",
          en: "CIDR notation (e.g. 192.168.1.0/24) says how many bits belong to the network. /24 often matches mask 255.255.255.0 and 256 theoretical addresses (minus reserved ones). You do not need complex subnet math here: mainly understand that the slash sets the network/host boundary, like the dotted mask.",
        },
        bullets: [
          {
            fr: "/24 = 24 bits réseau, reste pour les hôtes.",
            en: "/24 = 24 network bits, the rest for hosts.",
          },
          {
            fr: "Même préfixe CIDR = même réseau logique.",
            en: "Same CIDR prefix = same logical network.",
          },
          {
            fr: "Le masque pointé et le /XX décrivent la même idée.",
            en: "The dotted mask and /XX describe the same idea.",
          },
        ],
        callout: {
          fr: "Attention : /32 désigne souvent un seul hôte, pas un LAN entier.",
          en: "Watch out: /32 often means a single host, not a whole LAN.",
        },
        calloutKind: "warning",
        miniExercise: {
          prompt: {
            fr: "192.168.1.10 et 192.168.1.200 avec /24 : même réseau ? Et avec /16 ?",
            en: "192.168.1.10 and 192.168.1.200 with /24: same network? And with /16?",
          },
          hint: {
            fr: "Oui dans les deux cas ici, mais /16 est plus large.",
            en: "Yes in both cases here, but /16 is wider.",
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
          fr: "Tu sais lire une IPv4, comprendre le masque, distinguer privé/public, et relier cela à la passerelle et au NAT. Ces bases rendent le DNS, le routage et le pare-feu beaucoup plus clairs.",
          en: "You can read an IPv4 address, understand the mask, tell private from public, and connect that to the gateway and NAT. These basics make DNS, routing, and firewalls much clearer.",
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
      {
        term: { fr: "Passerelle", en: "Gateway" },
        definition: {
          fr: "Routeur de sortie du LAN vers d'autres réseaux (souvent Internet).",
          en: "Exit router from the LAN toward other networks (often the Internet).",
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
          fr: "Chaque octet IPv4 va de 0 à 255 ; 999 est invalide, et les lettres ne sont pas un format IPv4.",
          en: "Each IPv4 octet ranges from 0 to 255; 999 is invalid, and letters are not IPv4 format.",
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
          fr: "La plage 192.168.0.0/16 est réservée aux réseaux privés locaux.",
          en: "The 192.168.0.0/16 range is reserved for private local networks.",
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
          fr: "Le masque indique quels bits appartiennent au réseau et lesquels identifient l'hôte.",
          en: "The mask shows which bits belong to the network and which identify the host.",
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
          fr: "IPv4 = 4 × 8 bits = 32 bits au total.",
          en: "IPv4 = 4 × 8 bits = 32 bits total.",
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
          fr: "Le NAT traduit les adresses privées vers l'IP publique du routeur (et inverse les réponses).",
          en: "NAT translates private addresses to the router’s public IP (and reverses replies).",
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
          fr: "Avec 255.255.255.0, 192.168.1.x forme le même réseau.",
          en: "With 255.255.255.0, 192.168.1.x is the same network.",
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
          fr: "IPv6 utilise 128 bits ; IPv4 en utilise 32.",
          en: "IPv6 uses 128 bits; IPv4 uses 32.",
        },
      },
      {
        id: "net-ip-q8",
        type: "multiple-choice",
        question: {
          fr: "La passerelle par défaut sert surtout à…",
          en: "The default gateway is mainly used to…",
        },
        options: [
          {
            fr: "Sortir du LAN vers d'autres réseaux",
            en: "Leave the LAN toward other networks",
          },
          {
            fr: "Remplacer le clavier",
            en: "Replace the keyboard",
          },
          {
            fr: "Créer des fichiers PDF",
            en: "Create PDF files",
          },
          {
            fr: "Changer la résolution d'écran",
            en: "Change screen resolution",
          },
        ],
        correctAnswer: {
          fr: "Sortir du LAN vers d'autres réseaux",
          en: "Leave the LAN toward other networks",
        },
        hint: {
          fr: "Souvent l'IP de ta box sur le LAN.",
          en: "Often your gateway’s LAN IP.",
        },
        explanation: {
          fr: "Sans bonne passerelle, les paquets destinés hors du LAN ne savent pas où sortir.",
          en: "Without a correct gateway, packets meant outside the LAN do not know where to exit.",
        },
      },
      {
        id: "net-ip-q9",
        type: "multiple-choice",
        question: {
          fr: "Deux PC en 192.168.1.10 et 192.168.2.10 avec masque /24 sont…",
          en: "Two PCs at 192.168.1.10 and 192.168.2.10 with /24 masks are…",
        },
        options: [
          {
            fr: "Sur deux réseaux logiques différents",
            en: "On two different logical networks",
          },
          {
            fr: "Forcément la même machine",
            en: "Necessarily the same machine",
          },
          {
            fr: "Sans octets",
            en: "Without octets",
          },
          {
            fr: "Toujours en IPv6",
            en: "Always on IPv6",
          },
        ],
        correctAnswer: {
          fr: "Sur deux réseaux logiques différents",
          en: "On two different logical networks",
        },
        hint: {
          fr: "Compare les trois premiers octets.",
          en: "Compare the first three octets.",
        },
        explanation: {
          fr: "En /24, 192.168.1.0 et 192.168.2.0 sont des réseaux distincts ; il faut un routeur entre eux.",
          en: "On /24, 192.168.1.0 and 192.168.2.0 are distinct networks; a router is needed between them.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech bienveillante. Tu enseignes l'adressage IP : IPv4, masques, adresses privées et publiques, passerelle, NAT et erreurs courantes (conflit d'IP, adresse invalide). Réponds en français, clairement, avec des exemples concrets.",
        en: "You are Nova, a friendly tech tutor. You teach IP addressing: IPv4, masks, private and public addresses, gateway, NAT, and common mistakes (IP conflict, invalid address). Answer in English, clearly, with concrete examples.",
      },
      introMessage: {
        fr: "Salut ! Je suis Nova. Aujourd'hui on parle d'adressage IP, masques et privé/public. Pose-moi tes questions !",
        en: "Hi! I'm Nova. Today we talk about IP addressing, masks, and private/public. Ask me anything!",
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
          fr: "Rôle du masque, de la passerelle et du NAT",
          en: "Role of the mask, gateway, and NAT",
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
      fr: "Comprendre comment un nom de domaine devient une adresse IP, du résolveur local aux serveurs autoritaires. Tu apprendras aussi à lire une réponse DNS, à repérer un cache périmé et à séparer un souci de résolution d'une vraie panne réseau.",
      en: "Understand how a domain name becomes an IP address, from the local resolver to authoritative servers. You will also learn to read a DNS answer, spot a stale cache, and separate a resolution issue from a real network outage.",
    },
    icon: "search",
    estimatedMinutes: 21,
    xpReward: 26,
    goals: [
      {
        description: {
          fr: "Expliquer le rôle du DNS et pourquoi les humains utilisent des noms plutôt que des IP",
          en: "Explain DNS's role and why humans use names instead of IPs",
        },
        xpReward: 6,
      },
      {
        description: {
          fr: "Décrire les étapes de la résolution, la hiérarchie des noms et le rôle du cache",
          en: "Describe resolution steps, name hierarchy, and the cache's role",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Différencier nom de domaine, enregistrement A/AAAA et adresse IP",
          en: "Distinguish domain name, A/AAAA records, and IP address",
        },
        xpReward: 6,
      },
      {
        description: {
          fr: "Diagnostiquer un échec de résolution avec ping IP, TTL et changement de résolveur",
          en: "Diagnose resolution failure with IP ping, TTL, and changing resolver",
        },
        xpReward: 9,
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
          fr: "Les humains préfèrent taper example.com ; les machines, elles, ne communiquent qu'avec des adresses IP numériques. Le DNS (Domain Name System) fait le pont entre ces deux mondes : il traduit un nom lisible en adresse IP, et parfois l'inverse (résolution inverse). Sans cette traduction, tu devrais mémoriser des suites de chiffres pour chaque site, chaque API ou chaque serveur de mail. Le DNS rend Internet utilisable au quotidien tout en laissant le réseau router les paquets vers la bonne machine. C'est souvent la toute première étape invisible avant qu'une page web, une application mobile ou un client mail puisse se connecter. Comprendre ce rôle t'évite de confondre « le site ne répond pas » avec « je ne sais pas où envoyer la requête ».",
          en: "Humans prefer typing example.com; machines only talk using numeric IP addresses. DNS (Domain Name System) bridges those two worlds: it translates a readable name into an IP address, and sometimes the reverse (reverse lookup). Without that translation, you would memorize digit strings for every site, API, or mail server. DNS makes the Internet usable day to day while letting the network route packets to the right machine. It is often the very first invisible step before a web page, mobile app, or mail client can connect. Understanding this role keeps you from mixing up “the site is not responding” with “I do not know where to send the request.”",
        },
        bullets: [
          {
            fr: "Le nom est pour les humains ; l'IP est pour les machines et les routeurs.",
            en: "The name is for humans; the IP is for machines and routers.",
          },
          {
            fr: "Le DNS traduit, il ne transporte pas le contenu HTML ni les fichiers.",
            en: "DNS translates; it does not carry HTML content or files.",
          },
          {
            fr: "Sans résolution réussie, le navigateur ne sait pas quelle machine contacter.",
            en: "Without successful resolution, the browser does not know which machine to contact.",
          },
        ],
        callout: {
          fr: "Astuce : pense « carnet d'adresses » avant de penser « protocole web ».",
          en: "Tip: think “address book” before you think “web protocol.”",
        },
        calloutKind: "key",
        analogy: {
          fr: "example.com = nom sur la sonnette · l'IP = numéro d'appartement technique.",
          en: "example.com = name on the doorbell · the IP = technical apartment number.",
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
          fr: "Quand tu ouvres un site, ton appareil ne contacte pas directement le serveur autoritaire du domaine. Il demande d'abord à un résolveur DNS : celui configuré par ton FAI, ta box, ton entreprise, ou un service public comme 1.1.1.1 ou 8.8.8.8. Si le résolveur a déjà la réponse en cache et que le TTL n'a pas expiré, il répond immédiatement. Sinon, il interroge la hiérarchie DNS (racine, TLD, zone du domaine) jusqu'à obtenir l'enregistrement officiel, puis mémorise la réponse pour les prochaines fois. Tu n'as pas besoin d'interroger toi-même toute la chaîne à chaque clic. Comprendre ce chemin explique pourquoi un site « ne charge plus » alors que le Wi-Fi semble parfaitement OK, ou pourquoi deux personnes peuvent voir des IP différentes juste après un changement d'hébergement.",
          en: "When you open a site, your device does not contact the domain's authoritative server directly. It first asks a DNS resolver: the one set by your ISP, gateway, company, or a public service like 1.1.1.1 or 8.8.8.8. If the resolver already has the answer cached and the TTL has not expired, it replies immediately. Otherwise it queries the DNS hierarchy (root, TLD, domain zone) until it gets the official record, then remembers the answer for next time. You do not query the whole chain yourself on every click. Understanding this path explains why a site “won't load” while Wi-Fi looks perfectly fine, or why two people may see different IPs right after a hosting change.",
        },
        bullets: [
          {
            fr: "Cache : une réponse récente peut être réutilisée pour aller plus vite.",
            en: "Cache: a recent answer can be reused to go faster.",
          },
          {
            fr: "Enregistrement A : nom vers IPv4 · AAAA vers IPv6.",
            en: "A record: name to IPv4 · AAAA to IPv6.",
          },
          {
            fr: "Serveur autoritaire : source de vérité officielle pour une zone de noms.",
            en: "Authoritative server: official source of truth for a name zone.",
          },
        ],
        callout: {
          fr: "Clé : résolveur d'abord, autoritaire ensuite si le cache ne suffit pas.",
          en: "Key: resolver first, authoritative next if the cache is not enough.",
        },
        calloutKind: "key",
        miniExercise: {
          prompt: {
            fr: "Place dans l'ordre : navigateur, résolveur, serveur autoritaire, IP trouvée.",
            en: "Put in order: browser, resolver, authoritative server, IP found.",
          },
          hint: {
            fr: "Le navigateur demande ; le résolveur cherche ; l'autoritaire tranche.",
            en: "The browser asks; the resolver searches; the authoritative server decides.",
          },
        },
      },
      {
        id: "net-dns-s3",
        diagram: "dns-hierarchy",
        title: {
          fr: "Hiérarchie des noms",
          en: "Name hierarchy",
        },
        body: {
          fr: "Les noms DNS sont hiérarchiques et se lisent de droite à gauche : racine (.) · TLD (.com, .fr, .org) · domaine (example) · sous-domaines (www, mail, api). Cette structure permet de déléguer la gestion : le registre .fr ne gère pas chaque site individuellement, il indique qui est responsable de example.fr. Chaque niveau peut dire « demande au niveau suivant ». Ainsi, .com n'a pas à connaître des millions de sites ; il pointe vers le bon serveur autoritaire de zone. www.example.com et mail.example.com peuvent pointer vers des machines différentes grâce à des enregistrements distincts. C'est ce découpage qui rend le DNS scalable à l'échelle d'Internet entier, avec des milliers de zones gérées par des organisations différentes.",
          en: "DNS names are hierarchical and read right to left: root (.) · TLD (.com, .fr, .org) · domain (example) · subdomains (www, mail, api). This structure enables delegation: the .fr registry does not manage every individual site; it points to who owns example.fr. Each level can say “ask the next level.” So .com need not know millions of sites; it points to the right zone authoritative server. www.example.com and mail.example.com can point to different machines via separate records. That split is what makes DNS scalable across the entire Internet, with thousands of zones managed by different organizations.",
        },
        bullets: [
          {
            fr: "Racine → TLD → domaine → sous-domaine.",
            en: "Root → TLD → domain → subdomain.",
          },
          {
            fr: "La délégation partage la charge entre registres et administrateurs.",
            en: "Delegation shares the load across registries and administrators.",
          },
          {
            fr: "www.example.com et mail.example.com peuvent viser des serveurs différents.",
            en: "www.example.com and mail.example.com can target different servers.",
          },
        ],
        callout: {
          fr: "Attention : un sous-domaine n'est pas « un autre Internet », juste une branche du même arbre.",
          en: "Watch out: a subdomain is not “another Internet,” just a branch of the same tree.",
        },
        calloutKind: "warning",
        analogy: {
          fr: "Comme une adresse postale : pays, ville, rue, numéro (niveaux du nom).",
          en: "Like a postal address: country, city, street, number (name levels).",
        },
      },
      {
        id: "net-dns-s4",
        title: {
          fr: "Quand le DNS pose problème",
          en: "When DNS goes wrong",
        },
        body: {
          fr: "Si le DNS échoue, tu peux avoir Internet « connecté » (Wi-Fi ou Ethernet OK) mais aucun site accessible par son nom. Les applications qui utilisent des noms (navigateur, mail, la plupart des apps) restent bloquées, alors qu'un ping vers une IP publique connue (par exemple 1.1.1.1) peut encore réussir. Ce schéma sépare clairement panne de résolution et panne de chemin réseau. Changer temporairement de résolveur (vers un service public fiable) ou vider le cache DNS local sont des tests simples et réversibles. Comprendre le DNS est donc essentiel pour le dépannage quotidien : avant de redémarrer la box ou d'accuser « tout Internet », vérifie si le problème touche les noms ou les adresses IP brutes.",
          en: "If DNS fails, you may be “connected” (Wi-Fi or Ethernet OK) yet unable to reach any site by name. Apps that use names (browser, mail, most apps) stay blocked, while a ping to a known public IP (for example 1.1.1.1) may still succeed. That pattern clearly separates resolution failure from network path failure. Temporarily changing resolver (to a reliable public service) or flushing the local DNS cache are simple, reversible tests. Understanding DNS is essential for everyday troubleshooting: before rebooting the gateway or blaming “all of the Internet,” check whether the issue hits names or raw IP addresses.",
        },
        bullets: [
          {
            fr: "Symptôme classique : Wi-Fi OK, sites par nom KO.",
            en: "Classic symptom: Wi-Fi OK, sites by name fail.",
          },
          {
            fr: "Tester une IP sépare DNS et chemin réseau.",
            en: "Testing an IP separates DNS from the network path.",
          },
          {
            fr: "Changer de résolveur est un test simple et réversible.",
            en: "Changing resolver is a simple, reversible test.",
          },
        ],
        callout: {
          fr: "Connecté sans sites = souvent un problème DNS, pas « Internet mort ».",
          en: "Connected but no sites = often a DNS issue, not “dead Internet.”",
        },
        calloutKind: "key",
        miniExercise: {
          prompt: {
            fr: "Cas : ping IP OK, navigateur échoue sur les noms. Quelle piste prioritaire ?",
            en: "Case: IP ping OK, browser fails on names. Which lead comes first?",
          },
          hint: {
            fr: "Pense résolution, pas câble coupé.",
            en: "Think resolution, not a cut cable.",
          },
        },
      },
      {
        id: "net-dns-s5",
        title: {
          fr: "Analogie : l'annuaire",
          en: "Analogy: the phone book",
        },
        body: {
          fr: "Tu cherches « Pizza du coin » dans l'annuaire et tu obtiens un numéro de téléphone. Le DNS fait exactement la même chose : un nom lisible devient une adresse technique utilisable par le réseau. Sans annuaire, tu peux quand même appeler si tu connais déjà le numéro (l'IP en direct). Mais l'annuaire peut aussi être en retard : une fiche obsolète te mène au mauvais commerce ou à un numéro déconnecté. Pareil pour un cache DNS périmé après un déménagement de serveur ou un changement d'hébergement : la réponse est « encore valide » selon le TTL, mais pointe vers l'ancienne machine. Cette analogie aide à expliquer le rôle du DNS sans jargon, et à comprendre pourquoi « ça marche chez moi, pas chez toi » peut durer quelques minutes ou heures après une migration.",
          en: "You look up “Corner Pizza” in a directory and get a phone number. DNS does exactly the same: a readable name becomes a technical address the network can use. Without a directory you can still call if you already know the number (the IP directly). But the directory can lag: an outdated entry leads to the wrong shop or a disconnected number. Same for a stale DNS cache after a server move or hosting change: the answer is “still valid” per TTL, yet points to the old machine. This analogy explains DNS's role without jargon, and why “it works for me, not for you” can last minutes or hours after a migration.",
        },
        bullets: [
          {
            fr: "Chercher un nom = consulter l'annuaire.",
            en: "Looking up a name = checking the directory.",
          },
          {
            fr: "Connaître l'IP = appeler sans annuaire.",
            en: "Knowing the IP = calling without the directory.",
          },
          {
            fr: "Fiche obsolète = cache DNS trop vieux ou TTL non expiré.",
            en: "Outdated entry = DNS cache too old or TTL not expired yet.",
          },
        ],
        callout: {
          fr: "Astuce : si l'annuaire est faux, le téléphone (le réseau) peut pourtant marcher.",
          en: "Tip: if the directory is wrong, the phone (the network) can still work.",
        },
        calloutKind: "tip",
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
          fr: "Les outils de diagnostic interrogent le DNS et affichent l'enregistrement reçu. Voici une forme typique de ce que tu pourrais voir en ligne de commande avec nslookup ou dig. Ces commandes ne « réparent » rien : elles rendent visible la réponse que ton résolveur (ou un résolveur que tu choisis) renvoie pour un nom donné. Tu peux vérifier l'IP, le type d'enregistrement (A, AAAA, CNAME…) et parfois quel serveur a été interrogé. C'est utile pour confirmer qu'un nom pointe bien où tu le crois, avant de chercher plus loin dans HTTP, le firewall ou le serveur web. Si dig renvoie une IP inattendue, tu as une piste concrète : cache, mauvaise zone, ou propagation en cours.",
          en: "Diagnostic tools query DNS and show the received record. Here is a typical shape of what you might see on the command line with nslookup or dig. These commands do not “fix” anything: they make visible the answer your resolver (or one you choose) returns for a given name. You can check the IP, record type (A, AAAA, CNAME…), and sometimes which server was queried. That helps confirm a name points where you think, before digging into HTTP, the firewall, or the web server. If dig returns an unexpected IP, you have a concrete lead: cache, wrong zone, or propagation in progress.",
        },
        bullets: [
          {
            fr: "nslookup / dig : lire la réponse DNS, pas charger la page web.",
            en: "nslookup / dig: read the DNS answer, not load the web page.",
          },
          {
            fr: "Vérifie le type (A, AAAA) et l'adresse renvoyée.",
            en: "Check the type (A, AAAA) and the returned address.",
          },
          {
            fr: "Une IP inattendue peut expliquer un mauvais site ou un vieux cache.",
            en: "An unexpected IP can explain a wrong site or a stale cache.",
          },
        ],
        callout: {
          fr: "Attention : une belle réponse DNS ne prouve pas que le serveur web répond.",
          en: "Watch out: a clean DNS answer does not prove the web server answers.",
        },
        calloutKind: "warning",
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
          fr: "La confusion la plus courante : croire que le DNS « transporte » les pages web. Le DNS ne fait que donner l'IP (ou d'autres enregistrements comme MX pour le mail). Ensuite, HTTP ou HTTPS établit la connexion et échange le contenu. Autre piège : un cache DNS obsolète peut montrer une vieille IP longtemps après un changement côté serveur, surtout si le TTL était élevé. Mélanger ces étapes brouille le diagnostic : on accuse le DNS alors que le site est en panne applicative, ou l'inverse. Au-delà de A et AAAA, d'autres types existent (CNAME pour un alias, MX pour la messagerie). Tu n'as pas besoin de tout maîtriser maintenant, mais évite de réduire le DNS à « une seule IP par site ». Sépare clairement traduction du nom et échange de contenu : ce découpage reste vrai pour les API, le mail et la plupart des services réseau.",
          en: "The most common confusion: believing DNS “carries” web pages. DNS only returns the IP (or other records like MX for mail). Then HTTP or HTTPS opens the connection and exchanges content. Another trap: a stale DNS cache can show an old IP long after a server-side change, especially if TTL was high. Mixing these steps muddies diagnosis: you blame DNS when the site has an application outage, or the reverse. Beyond A and AAAA, other types exist (CNAME for an alias, MX for mail). You need not master them all now, but avoid reducing DNS to “one IP per site.” Clearly separate name translation from content exchange: that split stays true for APIs, mail, and most network services.",
        },
        bullets: [
          {
            fr: "DNS trouve l'adresse ; HTTP charge le contenu.",
            en: "DNS finds the address; HTTP loads the content.",
          },
          {
            fr: "Un cache périmé peut pointer vers une vieille machine.",
            en: "A stale cache can point to an old machine.",
          },
          {
            fr: "CNAME · MX · A : le DNS est un annuaire à plusieurs types de fiches.",
            en: "CNAME · MX · A: DNS is a directory with several record types.",
          },
        ],
        callout: {
          fr: "Erreur : DNS = traduction · HTTP = contenu. Ne les fusionne pas.",
          en: "Mistake: DNS = translation · HTTP = content. Do not merge them.",
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
        id: "net-dns-s-extra1",
        title: {
          fr: "Scénario : connecté mais les sites échouent par nom",
          en: "Scenario: connected but sites fail by name",
        },
        body: {
          fr: "Imagine cette situation : ton PC affiche « connecté », tu peux ping 1.1.1.1 ou 8.8.8.8 avec succès, mais aucun site ne s'ouvre quand tu tapes google.com ou example.com. Le navigateur affiche parfois ERR_NAME_NOT_RESOLVED ou un message équivalent. Étape 1 : confirme que le problème touche les noms (pas le lien physique). Étape 2 : vérifie quel résolveur est configuré (box, DHCP, VPN). Étape 3 : teste dig ou nslookup sur le nom qui échoue ; compare avec un résolveur public. Étape 4 : si une IP obsolète apparaît après une migration, le TTL du cache peut encore être actif : attends l'expiration, vide le cache local (ipconfig /flushdns sur Windows, ou redémarrage réseau), ou change temporairement de résolveur. Étape 5 : si tout échoue même avec un résolveur public, le souci peut être un filtrage DNS, un VPN, ou une panne chez le FAI. Ce scénario pratique te donne un plan reproductible au lieu de deviner.",
          en: "Imagine this situation: your PC shows “connected,” you can ping 1.1.1.1 or 8.8.8.8 successfully, but no site opens when you type google.com or example.com. The browser may show ERR_NAME_NOT_RESOLVED or an equivalent message. Step 1: confirm the issue hits names (not the physical link). Step 2: check which resolver is configured (gateway, DHCP, VPN). Step 3: test dig or nslookup on the failing name; compare with a public resolver. Step 4: if an outdated IP appears after a migration, cache TTL may still be active: wait for expiry, flush local cache (ipconfig /flushdns on Windows, or network restart), or temporarily change resolver. Step 5: if everything fails even with a public resolver, the issue may be DNS filtering, a VPN, or an ISP outage. This practical scenario gives you a repeatable plan instead of guessing.",
        },
        bullets: [
          {
            fr: "Ping IP OK + noms KO = piste DNS en priorité.",
            en: "IP ping OK + names fail = DNS lead first.",
          },
          {
            fr: "TTL : une réponse « encore valide » peut pointer vers l'ancienne IP.",
            en: "TTL: an answer “still valid” can point to the old IP.",
          },
          {
            fr: "Changer de résolveur public isole un souci local vs FAI.",
            en: "Switching to a public resolver isolates a local vs ISP issue.",
          },
        ],
        callout: {
          fr: "Clé : teste une IP, puis un nom, puis un autre résolveur. Dans cet ordre.",
          en: "Key: test an IP, then a name, then another resolver. In that order.",
        },
        calloutKind: "key",
        miniExercise: {
          prompt: {
            fr: "Ton ami a migré son site hier. Chez toi, dig montre l'ancienne IP. Que testes-tu en premier ?",
            en: "Your friend migrated their site yesterday. At your place, dig shows the old IP. What do you test first?",
          },
          hint: {
            fr: "Pense TTL, cache et second résolveur.",
            en: "Think TTL, cache, and a second resolver.",
          },
        },
      },
      {
        id: "net-dns-s-extra2",
        title: {
          fr: "Aller plus loin : TTL et serveurs autoritaires",
          en: "Going deeper: TTL and authoritative servers",
        },
        body: {
          fr: "Le TTL dit combien de temps une réponse peut rester en cache. Un serveur autoritaire détient la vérité pour une zone (ex. example.com). Le résolveur, lui, interroge et met en cache. Après un changement d'IP, un TTL élevé peut faire survivre l'ancienne réponse chez certains clients. Comprendre TTL + autoritaire vs résolveur évite de paniquer pendant une migration DNS.",
          en: "TTL says how long an answer may stay cached. An authoritative server holds the truth for a zone (e.g. example.com). The resolver queries and caches. After an IP change, a high TTL can keep the old answer alive for some clients. Understanding TTL plus authoritative vs resolver avoids panic during a DNS migration.",
        },
        bullets: [
          {
            fr: "Autoritaire = source de vérité de la zone.",
            en: "Authoritative = source of truth for the zone.",
          },
          {
            fr: "Résolveur = cherche et met en cache pour les clients.",
            en: "Resolver = looks up and caches for clients.",
          },
          {
            fr: "TTL bas accélère les changements, TTL haut réduit la charge.",
            en: "Low TTL speeds changes, high TTL reduces load.",
          },
        ],
        callout: {
          fr: "Astuce : avant une migration, baisse le TTL à l'avance si tu le contrôles.",
          en: "Tip: before a migration, lower TTL ahead of time if you control it.",
        },
        calloutKind: "tip",
        analogy: {
          fr: "TTL = date de péremption sur une fiche d'annuaire photocopiée.",
          en: "TTL = expiry date on a photocopied directory card.",
        },
      },
      {
        id: "net-dns-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu comprends le rôle du DNS, la hiérarchie des noms, le cache, le TTL et le diagnostic de base. C'est l'un des premiers réflexes quand « le web ne marche pas » alors que la connexion semble OK. Tu sais que la résolution précède HTTP, que dig et nslookup lisent une réponse plutôt que de deviner, et qu'un cache ou un TTL élevé peut tromper après un changement. Garde ce fil conducteur : nom → IP → service. Et quand les noms échouent mais pas les IP, pense résolveur, cache et TTL avant de redémarrer toute la box.",
          en: "You understand DNS's role, name hierarchy, cache, TTL, and basic diagnosis. It is one of the first reflexes when “the web isn't working” while the connection looks fine. You know resolution comes before HTTP, that dig and nslookup read an answer instead of guessing, and that cache or a high TTL can mislead after a change. Keep this thread: name → IP → service. And when names fail but IPs do not, think resolver, cache, and TTL before rebooting the entire gateway.",
        },
        bullets: [
          {
            fr: "Nom → IP via résolveur et serveurs autoritaires.",
            en: "Name → IP via resolver and authoritative servers.",
          },
          {
            fr: "A / AAAA = types d'enregistrements clés pour le web.",
            en: "A / AAAA = key record types for the web.",
          },
          {
            fr: "Cache accélère, mais peut vieillir · TTL fixe la durée.",
            en: "Cache speeds up, but can go stale · TTL sets the duration.",
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
          fr: "Système distribué qui associe noms de domaine et adresses IP (ou autres enregistrements).",
          en: "Distributed system that maps domain names to IP addresses (or other records).",
        },
      },
      {
        term: { fr: "Nom de domaine", en: "Domain name" },
        definition: {
          fr: "Nom lisible et hiérarchique d'un service (ex. www.example.com).",
          en: "Human-readable, hierarchical name of a service (e.g. www.example.com).",
        },
      },
      {
        term: { fr: "Résolveur DNS", en: "DNS resolver" },
        definition: {
          fr: "Service qui interroge le DNS pour ton appareil et met souvent les réponses en cache.",
          en: "Service that queries DNS for your device and often caches answers.",
        },
      },
      {
        term: { fr: "Enregistrement A", en: "A record" },
        definition: {
          fr: "Association d'un nom de domaine à une adresse IPv4.",
          en: "Mapping of a domain name to an IPv4 address.",
        },
      },
      {
        term: { fr: "TLD", en: "TLD" },
        definition: {
          fr: "Domaine de premier niveau (.com, .org, .fr…) géré par un registre.",
          en: "Top-level domain (.com, .org, .fr…) managed by a registry.",
        },
      },
      {
        term: { fr: "Cache DNS", en: "DNS cache" },
        definition: {
          fr: "Mémoire temporaire des réponses DNS pour éviter de réinterroger à chaque requête.",
          en: "Temporary store of DNS answers to avoid querying again on every request.",
        },
      },
      {
        term: { fr: "Serveur autoritaire", en: "Authoritative server" },
        definition: {
          fr: "Serveur DNS qui détient la réponse officielle pour une zone de noms donnée.",
          en: "DNS server that holds the official answer for a given name zone.",
        },
      },
      {
        term: { fr: "TTL", en: "TTL" },
        definition: {
          fr: "Durée de vie en secondes pendant laquelle une réponse DNS peut rester en cache.",
          en: "Lifetime in seconds during which a DNS answer may stay cached.",
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
          fr: "Le DNS traduit les noms lisibles en adresses IP que les machines utilisent pour router les paquets. Il ne chiffre pas, n'alimente pas et n'imprime rien.",
          en: "DNS translates readable names into IP addresses that machines use to route packets. It does not encrypt, power, or print anything.",
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
          fr: "example.com est un nom de domaine hiérarchique, pas une adresse matérielle ni un masque réseau. Les humains l'utilisent ; le DNS le traduit en IP.",
          en: "example.com is a hierarchical domain name, not a hardware address or network mask. Humans use it; DNS translates it to an IP.",
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
          fr: "L'enregistrement A (Address) lie un nom à une IPv4. Pour IPv6, on utilise l'enregistrement AAAA, pas A.",
          en: "The A (Address) record links a name to an IPv4. For IPv6, the AAAA record is used, not A.",
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
          fr: "Sans DNS, les noms ne se traduisent plus en IP : le navigateur ne sait pas où envoyer la requête. Un ping vers une IP peut encore marcher car il n'utilise pas le nom.",
          en: "Without DNS, names no longer translate to IPs: the browser does not know where to send the request. A ping to an IP may still work because it does not use the name.",
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
          fr: ".com est un TLD (Top-Level Domain), le niveau juste sous la racine DNS. Ce n'est ni une IP, ni HTTP, ni un port.",
          en: ".com is a TLD (Top-Level Domain), the level just below the DNS root. It is not an IP, HTTP, or a port.",
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
          fr: "Le cache stocke temporairement les réponses déjà obtenues pour éviter de refaire toute la chaîne de résolution à chaque visite. Cela accélère la navigation mais peut garder une vieille IP si le TTL n'a pas expiré.",
          en: "The cache temporarily stores answers already obtained to avoid repeating the full resolution chain on every visit. That speeds browsing but can keep an old IP if TTL has not expired.",
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
          fr: "Ton appareil envoie la requête à un résolveur configuré (box, FAI, ou service public). Ce résolveur cherche la réponse, la met en cache, et la renvoie au client.",
          en: "Your device sends the query to a configured resolver (gateway, ISP, or public service). That resolver looks up the answer, caches it, and returns it to the client.",
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
          fr: "DNS répond à « quelle IP pour ce nom ? ». HTTP ou HTTPS ouvre ensuite la connexion et télécharge HTML, images et API. Confondre les deux fausse le diagnostic.",
          en: "DNS answers “what IP for this name?” HTTP or HTTPS then opens the connection and downloads HTML, images, and APIs. Mixing the two skews diagnosis.",
        },
      },
      {
        id: "net-dns-q9",
        type: "multiple-choice",
        question: {
          fr: "Que signifie surtout le TTL d'une réponse DNS ?",
          en: "What does a DNS answer TTL mainly mean?",
        },
        options: [
          {
            fr: "Combien de temps la réponse peut rester en cache",
            en: "How long the answer may stay cached",
          },
          {
            fr: "La taille du disque dur du serveur",
            en: "The size of the server hard drive",
          },
          {
            fr: "Le nombre de câbles Ethernet requis",
            en: "The number of Ethernet cables required",
          },
          {
            fr: "Le mot de passe Wi-Fi du site",
            en: "The site's Wi-Fi password",
          },
        ],
        correctAnswer: {
          fr: "Combien de temps la réponse peut rester en cache",
          en: "How long the answer may stay cached",
        },
        hint: {
          fr: "Pense durée de vie en mémoire temporaire.",
          en: "Think lifetime in temporary memory.",
        },
        explanation: {
          fr: "TTL (Time To Live) indique combien de secondes un résolveur peut garder une réponse en cache avant de devoir la rafraîchir. Un TTL élevé retarde la propagation après un changement d'IP.",
          en: "TTL (Time To Live) states how many seconds a resolver may keep an answer cached before refreshing it. A high TTL delays propagation after an IP change.",
        },
      },
      {
        id: "net-dns-q10",
        type: "multiple-choice",
        question: {
          fr: "Un serveur DNS autoritaire, c'est surtout…",
          en: "An authoritative DNS server is mainly…",
        },
        options: [
          {
            fr: "La source de vérité pour une zone de noms",
            en: "The source of truth for a name zone",
          },
          {
            fr: "Un câble HDMI",
            en: "An HDMI cable",
          },
          {
            fr: "Un masque de sous-réseau",
            en: "A subnet mask",
          },
          {
            fr: "Un certificat TLS uniquement",
            en: "A TLS certificate only",
          },
        ],
        correctAnswer: {
          fr: "La source de vérité pour une zone de noms",
          en: "The source of truth for a name zone",
        },
        hint: {
          fr: "Le résolveur demande, l'autoritaire répond pour sa zone.",
          en: "The resolver asks; the authoritative answers for its zone.",
        },
        explanation: {
          fr: "L'autoritaire détient les enregistrements officiels de la zone ; le résolveur les interroge et les met en cache.",
          en: "The authoritative holds the zone's official records; the resolver queries them and caches the answers.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech bienveillante. Tu enseignes le DNS et la résolution de noms : enregistrements A/AAAA, résolveurs, hiérarchie, cache/TTL, outils (nslookup, dig) et diagnostic pas à pas (ping IP vs nom, changement de résolveur). Réponds en français, clairement, avec des exemples concrets et des analogies simples.",
        en: "You are Nova, a friendly tech tutor. You teach DNS and name resolution: A/AAAA records, resolvers, hierarchy, cache/TTL, tools (nslookup, dig), and step-by-step diagnosis (IP ping vs name, changing resolver). Answer in English, clearly, with concrete examples and simple analogies.",
      },
      introMessage: {
        fr: "Salut ! Je suis Nova. Aujourd'hui on explore le DNS, du nom jusqu'à l'IP, avec du dépannage concret. Pose-moi tes questions !",
        en: "Hi! I'm Nova. Today we explore DNS, from name to IP, with practical troubleshooting. Ask me anything!",
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
        {
          fr: "Cache, TTL et outils (nslookup, dig)",
          en: "Cache, TTL, and tools (nslookup, dig)",
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
      fr: "Comprendre les requêtes et réponses web, les méthodes HTTP, les codes de statut et pourquoi HTTPS avec TLS protège les échanges. Tu apprendras aussi à lire l'onglet Réseau des DevTools et à repérer contenu mixte ou certificat invalide.",
      en: "Understand web requests and responses, HTTP methods, status codes, and why HTTPS with TLS protects exchanges. You will also learn to read the Network tab in DevTools and spot mixed content or invalid certificates.",
    },
    icon: "lock",
    estimatedMinutes: 23,
    xpReward: 30,
    goals: [
      {
        description: {
          fr: "Décrire une requête et une réponse HTTP avec méthode, URL et code de statut",
          en: "Describe an HTTP request and response with method, URL, and status code",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Différencier HTTP et HTTPS, ports 80/443 et rôle du chiffrement TLS",
          en: "Distinguish HTTP and HTTPS, ports 80/443, and TLS encryption's role",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Expliquer le rôle des certificats TLS et les limites du cadenas navigateur",
          en: "Explain TLS certificates' role and the browser lock icon's limits",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Lire les codes de statut dans DevTools et repérer contenu mixte ou avertissement certificat",
          en: "Read status codes in DevTools and spot mixed content or certificate warnings",
        },
        xpReward: 5,
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
          fr: "HTTP (HyperText Transfer Protocol) est le protocole d'application que le navigateur et le serveur web utilisent pour échanger pages HTML, images, feuilles de style, scripts et réponses d'API. Le modèle est simple : le client envoie une requête (méthode, chemin, en-têtes) ; le serveur renvoie une réponse avec un code de statut (200 OK, 404 Not Found, 500 Internal Server Error) et éventuellement un corps (HTML, JSON, fichier). HTTP ne remplace pas DNS ni TCP : d'abord le nom devient une IP, puis TCP ouvre la connexion, puis HTTP parle « web ». Comprendre cette couche t'aide à lire les erreurs du navigateur et l'onglet Réseau des DevTools sans confondre « pas de connexion » et « page introuvable ».",
          en: "HTTP (HyperText Transfer Protocol) is the application protocol browsers and web servers use to exchange HTML pages, images, stylesheets, scripts, and API responses. The model is simple: the client sends a request (method, path, headers); the server returns a response with a status code (200 OK, 404 Not Found, 500 Internal Server Error) and optionally a body (HTML, JSON, file). HTTP does not replace DNS or TCP: first the name becomes an IP, then TCP opens the connection, then HTTP speaks “web.” Understanding this layer helps you read browser errors and the DevTools Network tab without mixing up “no connection” and “page not found.”",
        },
        bullets: [
          {
            fr: "Requête client → réponse serveur avec code de statut.",
            en: "Client request → server response with status code.",
          },
          {
            fr: "200 = succès courant · 404 = ressource absente · 500 = erreur serveur.",
            en: "200 = common success · 404 = missing resource · 500 = server error.",
          },
          {
            fr: "HTTP est au-dessus de TCP ; DNS et IP viennent avant.",
            en: "HTTP sits above TCP; DNS and IP come first.",
          },
        ],
        callout: {
          fr: "Clé : le code de statut dit si la ressource a été trouvée et servie, pas seulement si le réseau marche.",
          en: "Key: the status code tells whether the resource was found and served, not only whether the network works.",
        },
        calloutKind: "key",
        analogy: {
          fr: "Comme une conversation : tu demandes (requête), le serveur répond (réponse + code).",
          en: "Like a conversation: you ask (request), the server answers (response + code).",
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
          fr: "Une URL indique où trouver une ressource : schéma (http ou https), hôte (example.com), chemin (/page), parfois des paramètres (?id=42). Les méthodes HTTP précisent l'intention du client : GET pour lire sans modifier (afficher une page, récupérer une API), POST pour envoyer des données (formulaire, création), PUT ou PATCH pour mettre à jour, DELETE pour supprimer. En pratique, naviguer sur le web utilise surtout GET ; les applications modernes combinent GET et POST pour les API REST. Choisir la bonne méthode compte pour la sécurité et la sémantique : un GET ne devrait pas effacer une ressource côté serveur. C'est aussi ce que les outils de développement affichent dans la colonne Method de l'onglet Réseau.",
          en: "A URL shows where to find a resource: scheme (http or https), host (example.com), path (/page), sometimes parameters (?id=42). HTTP methods state the client's intent: GET to read without changing (display a page, fetch an API), POST to send data (form, creation), PUT or PATCH to update, DELETE to remove. In practice, browsing mostly uses GET; modern apps combine GET and POST for REST APIs. Choosing the right method matters for security and semantics: a GET should not delete a resource on the server. That is also what dev tools show in the Network tab's Method column.",
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
          {
            fr: "PUT/PATCH : mettre à jour · DELETE : supprimer.",
            en: "PUT/PATCH: update · DELETE: remove.",
          },
        ],
        callout: {
          fr: "Astuce : dans DevTools, la méthode et l'URL racontent ce que le navigateur a demandé.",
          en: "Tip: in DevTools, method and URL tell you what the browser asked for.",
        },
        calloutKind: "tip",
        miniExercise: {
          prompt: {
            fr: "Pour afficher une page d'accueil, quelle méthode HTTP utilises-tu en priorité ?",
            en: "To display a home page, which HTTP method do you use first?",
          },
          hint: {
            fr: "Celle qui lit sans modifier.",
            en: "The one that reads without changing.",
          },
        },
      },
      {
        id: "net-http-s3",
        diagram: "http-https",
        title: {
          fr: "Pourquoi HTTPS ?",
          en: "Why HTTPS?",
        },
        body: {
          fr: "HTTPS est HTTP protégé par TLS (Transport Layer Security). Avant d'échanger la moindre requête HTTP, client et serveur négocient un canal chiffré : les données transitent illisibles pour un espion sur le Wi-Fi public ou chez un FAI curieux. TLS limite aussi la modification en transit (un attaquant ne peut pas facilement injecter du contenu). Le navigateur vérifie en plus un certificat présenté par le serveur pour s'assurer qu'il parle bien au bon hôte (example.com et non un imposteur). HTTPS ne rend pas un site « honnête » par magie, mais il protège la confidentialité et l'intégrité du transport. C'est pourquoi mots de passe, cookies de session et paiements doivent transiter en HTTPS.",
          en: "HTTPS is HTTP protected by TLS (Transport Layer Security). Before exchanging any HTTP request, client and server negotiate an encrypted channel: data travels unreadable to an eavesdropper on public Wi-Fi or a curious ISP. TLS also limits tampering in transit (an attacker cannot easily inject content). The browser additionally checks a certificate presented by the server to ensure it talks to the right host (example.com, not an impostor). HTTPS does not magically make a site “honest,” but it protects confidentiality and integrity of transport. That is why passwords, session cookies, and payments must travel over HTTPS.",
        },
        bullets: [
          {
            fr: "TLS chiffre les échanges entre navigateur et serveur.",
            en: "TLS encrypts exchanges between browser and server.",
          },
          {
            fr: "Le certificat aide à vérifier l'identité du serveur.",
            en: "The certificate helps verify the server's identity.",
          },
          {
            fr: "Sans HTTPS, un réseau intermédiaire peut lire le trafic en clair.",
            en: "Without HTTPS, a middle network can read plain traffic.",
          },
        ],
        callout: {
          fr: "Attention : HTTPS protège le trajet, pas la qualité morale du site ni son contenu.",
          en: "Watch out: HTTPS protects the journey, not the site's moral quality or content.",
        },
        calloutKind: "warning",
        analogy: {
          fr: "HTTP = carte postale lisible · HTTPS = enveloppe chiffrée avec sceau d'identité.",
          en: "HTTP = readable postcard · HTTPS = encrypted envelope with an identity seal.",
        },
      },
      {
        id: "net-http-s4",
        title: {
          fr: "Ports et sécurité au quotidien",
          en: "Ports and everyday security",
        },
        body: {
          fr: "HTTP utilise souvent le port 80 ; HTTPS le port 443. Quand tu tapes https://example.com, le navigateur ouvre typiquement une connexion TCP vers le port 443 du serveur, puis négocie TLS, puis envoie la requête HTTP à l'intérieur du tunnel chiffré. Sur le web moderne, HTTPS est la norme : les navigateurs signalent HTTP clair comme « non sécurisé » pour les champs sensibles. Un cadenas dans la barre d'adresse indique généralement une connexion HTTPS active avec certificat valide pour le nom visité. Attention : le cadenas ne garantit pas que le site est fiable moralement, seulement que le canal est chiffré et que le certificat correspond au nom. Pour un login ou un paiement, vérifie toujours https:// et le bon domaine, pas seulement la présence d'un cadenas sur un site inconnu.",
          en: "HTTP often uses port 80; HTTPS uses port 443. When you type https://example.com, the browser typically opens a TCP connection to the server's port 443, negotiates TLS, then sends the HTTP request inside the encrypted tunnel. On the modern web, HTTPS is the norm: browsers mark plain HTTP as “not secure” for sensitive fields. A lock in the address bar usually signals an active HTTPS connection with a valid certificate for the visited name. Watch out: the lock does not guarantee the site is morally trustworthy, only that the channel is encrypted and the certificate matches the name. For login or payment, always verify https:// and the correct domain, not just a lock on an unknown site.",
        },
        bullets: [
          {
            fr: "Port 80 : HTTP en clair · Port 443 : HTTPS chiffré.",
            en: "Port 80: plain HTTP · Port 443: encrypted HTTPS.",
          },
          {
            fr: "Le schéma https:// dans l'URL engage le port 443 par défaut.",
            en: "The https:// scheme in the URL uses port 443 by default.",
          },
          {
            fr: "Cadenas = canal chiffré et nom vérifié, pas confiance totale dans le site.",
            en: "Lock = encrypted channel and verified name, not full trust in the site.",
          },
        ],
        callout: {
          fr: "Erreur fréquente : croire que « non sécurisé » sur HTTP ne concerne que les experts.",
          en: "Common mistake: thinking “not secure” on HTTP only matters to experts.",
        },
        calloutKind: "mistake",
        miniExercise: {
          prompt: {
            fr: "Tu te connectes à une banque. Quel schéma et quel port attends-tu ?",
            en: "You log into a bank. Which scheme and port do you expect?",
          },
          hint: {
            fr: "https:// et 443.",
            en: "https:// and 443.",
          },
        },
      },
      {
        id: "net-http-s5",
        title: {
          fr: "Analogie : carte postale vs lettre scellée",
          en: "Analogy: postcard vs sealed letter",
        },
        body: {
          fr: "HTTP en clair ressemble à une carte postale : le facteur, les relais réseau et quiconque écoute sur le chemin peuvent lire le message (URL, en-têtes, parfois le corps). HTTPS, c'est une lettre dans une enveloppe scellée et chiffrée : le contenu reste privé en transit. Le certificat TLS joue un rôle de sceau d'identité : le navigateur vérifie que le serveur présente bien un document signé pour le nom que tu as demandé. Si le sceau est cassé (certificat expiré, mauvais nom, autorité non reconnue), le navigateur affiche un avertissement avant de continuer. Cette analogie rappelle pourquoi un formulaire de mot de passe sur http:// est dangereux même si « personne ne regarde » : sur un réseau partagé, quelqu'un pourrait.",
          en: "Plain HTTP is like a postcard: the carrier, network relays, and anyone listening on the path can read the message (URL, headers, sometimes the body). HTTPS is a letter in a sealed, encrypted envelope: the content stays private in transit. The TLS certificate acts like an identity seal: the browser checks that the server presents a signed document for the name you requested. If the seal is broken (expired certificate, wrong name, untrusted authority), the browser shows a warning before continuing. This analogy reminds you why a password form on http:// is dangerous even if “no one is watching”: on a shared network, someone could.",
        },
        bullets: [
          {
            fr: "Carte postale = HTTP clair, lisible en transit.",
            en: "Postcard = plain HTTP, readable in transit.",
          },
          {
            fr: "Lettre scellée = HTTPS, contenu privé pendant le trajet.",
            en: "Sealed letter = HTTPS, private content during the trip.",
          },
          {
            fr: "Sceau cassé = avertissement certificat à ne pas ignorer.",
            en: "Broken seal = certificate warning you should not ignore.",
          },
        ],
        analogy: {
          fr: "HTTP = lisible en transit · HTTPS = chiffré + identité vérifiée.",
          en: "HTTP = readable in transit · HTTPS = encrypted + identity checked.",
        },
        callout: {
          fr: "Astuce : le cadenas protège le trajet, pas la confiance totale dans le contenu du site.",
          en: "Tip: the lock protects the journey, not full trust in the site's content.",
        },
        calloutKind: "tip",
      },
      {
        id: "net-http-s6",
        title: {
          fr: "Exemple de requête",
          en: "Sample request",
        },
        body: {
          fr: "Une requête HTTP a une forme textuelle simple : ligne de requête (méthode, chemin, version HTTP), puis des en-têtes (Host, Accept, Cookie), puis parfois un corps (surtout avec POST). La réponse commence par une ligne de statut (HTTP/1.1 200 OK), des en-têtes (Content-Type, Content-Length), puis le corps (HTML, JSON). Tu peux voir cette structure dans l'onglet Réseau des DevTools en cliquant sur une requête : onglet Headers pour la forme, Preview ou Response pour le contenu. Savoir lire GET /index.html et 200 OK te permet de distinguer « le serveur a répondu » de « la page n'existe pas (404) » ou « le serveur plante (500) ».",
          en: "An HTTP request has a simple text shape: request line (method, path, HTTP version), then headers (Host, Accept, Cookie), then sometimes a body (especially with POST). The response starts with a status line (HTTP/1.1 200 OK), headers (Content-Type, Content-Length), then the body (HTML, JSON). You can see this structure in the DevTools Network tab by clicking a request: Headers tab for the shape, Preview or Response for content. Knowing how to read GET /index.html and 200 OK lets you separate “the server replied” from “the page does not exist (404)” or “the server crashed (500).”",
        },
        bullets: [
          {
            fr: "Ligne de requête : méthode + chemin + version.",
            en: "Request line: method + path + version.",
          },
          {
            fr: "Ligne de statut : version + code + message.",
            en: "Status line: version + code + message.",
          },
          {
            fr: "En-têtes : Host, Content-Type, Cookie, et bien d'autres.",
            en: "Headers: Host, Content-Type, Cookie, and many more.",
          },
        ],
        callout: {
          fr: "Clé : DevTools te montre la même structure que l'exemple ci-dessous, requête par requête.",
          en: "Key: DevTools shows the same structure as the sample below, request by request.",
        },
        calloutKind: "key",
        codeExample: {
          language: "http",
          code: "GET /index.html HTTP/1.1\nHost: example.com\nAccept: text/html\n\nHTTP/1.1 200 OK\nContent-Type: text/html",
          caption: {
            fr: "Requête GET et début de réponse 200.",
            en: "GET request and start of a 200 response.",
          },
        },
        miniExercise: {
          prompt: {
            fr: "Dans l'exemple, quel est le code de statut de la réponse ?",
            en: "In the sample, what is the response status code?",
          },
          hint: {
            fr: "Regarde la ligne HTTP/1.1 … OK.",
            en: "Look at the HTTP/1.1 … OK line.",
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
          fr: "Croire que le cadenas HTTPS garantit un site « sûr à 100 % ». HTTPS protège le canal (confidentialité et intégrité en transit) et vérifie le certificat pour le nom, pas forcément la qualité du contenu ni l'honnêteté du site. Un site phishing peut aussi avoir HTTPS avec un certificat valide pour un nom trompeur (paypa1.com). Autre erreur fréquente : envoyer un mot de passe ou un token sur HTTP clair, même sur un réseau « de confiance ». Enfin, ignorer les avertissements certificat (« votre connexion n'est pas privée ») sans comprendre pourquoi : parfois c'est une horloge système fausse, parfois une attaque, parfois un certificat expiré côté serveur. Ne clique pas « Avancé » sans raison en production ou sur un réseau public.",
          en: "Believing the HTTPS lock means a site is “100% safe.” HTTPS protects the channel (confidentiality and integrity in transit) and checks the certificate for the name, not necessarily content quality or the site's honesty. A phishing site can also have HTTPS with a valid certificate for a deceptive name (paypa1.com). Another common mistake: sending a password or token over plain HTTP, even on a “trusted” network. Finally, ignoring certificate warnings (“your connection is not private”) without understanding why: sometimes it is a wrong system clock, sometimes an attack, sometimes an expired server certificate. Do not click “Advanced” without reason in production or on a public network.",
        },
        bullets: [
          {
            fr: "Cadenas ≠ site forcément honnête ou sans phishing.",
            en: "Lock ≠ automatically honest site or phishing-free.",
          },
          {
            fr: "HTTP clair = dangereux pour mots de passe et tokens.",
            en: "Plain HTTP = unsafe for passwords and tokens.",
          },
          {
            fr: "Avertissement certificat : lire avant de contourner.",
            en: "Certificate warning: read before bypassing.",
          },
        ],
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
        id: "net-http-s-extra1",
        title: {
          fr: "Scénario : DevTools, codes de statut et alertes TLS",
          en: "Scenario: DevTools, status codes, and TLS alerts",
        },
        body: {
          fr: "Tu développes ou dépannes un site. Ouvre les DevTools (F12), onglet Réseau, recharge la page. Chaque ligne montre une requête : méthode, URL, code de statut, type. Un 200 sur le document principal = page servie. Un 404 sur /ancienne-page = lien mort ou mauvaise URL, pas forcément panne Wi-Fi. Un 500 = souci côté serveur (code, base de données). Si la page est en HTTPS mais charge une image en http://, le navigateur peut bloquer le contenu mixte : la page semble cassée alors que le HTML est arrivé. Si le certificat est expiré ou émis pour un autre nom, Chrome ou Firefox affichent un écran d'avertissement avant d'afficher le site. Plan de diagnostic : regarder le code de statut, vérifier http vs https des ressources, lire le message certificat, ne pas confondre erreur applicative (404/500) et panne réseau (requête rouge, failed).",
          en: "You develop or troubleshoot a site. Open DevTools (F12), Network tab, reload the page. Each row shows a request: method, URL, status code, type. A 200 on the main document = page served. A 404 on /old-page = dead link or wrong URL, not necessarily Wi-Fi failure. A 500 = server-side issue (code, database). If the page is HTTPS but loads an image over http://, the browser may block mixed content: the page looks broken though HTML arrived. If the certificate is expired or issued for another name, Chrome or Firefox show a warning screen before displaying the site. Diagnosis plan: check status code, verify http vs https for resources, read the certificate message, do not mix application errors (404/500) with network failure (red request, failed).",
        },
        bullets: [
          {
            fr: "200 = OK · 404 = introuvable · 500 = erreur serveur.",
            en: "200 = OK · 404 = not found · 500 = server error.",
          },
          {
            fr: "Contenu mixte : HTTPS + ressource HTTP = souvent bloqué.",
            en: "Mixed content: HTTPS + HTTP resource = often blocked.",
          },
          {
            fr: "Avertissement certificat : nom, expiration ou autorité suspecte.",
            en: "Certificate warning: name, expiry, or untrusted authority.",
          },
        ],
        callout: {
          fr: "Clé : l'onglet Réseau raconte l'histoire avant de redémarrer la box.",
          en: "Key: the Network tab tells the story before rebooting the gateway.",
        },
        calloutKind: "key",
        miniExercise: {
          prompt: {
            fr: "Une page HTTPS affiche une image cassée. L'image est chargée en http://. Quelle piste ?",
            en: "An HTTPS page shows a broken image. The image is loaded over http://. What lead?",
          },
          hint: {
            fr: "Pense contenu mixte (mixed content).",
            en: "Think mixed content.",
          },
        },
      },
      {
        id: "net-http-s-extra2",
        title: {
          fr: "Redirections HTTP vers HTTPS et en-têtes utiles",
          en: "HTTP to HTTPS redirects and useful headers",
        },
        body: {
          fr: "Beaucoup de sites répondent d'abord en HTTP sur le port 80 avec un code 301 ou 302 qui renvoie vers l'URL https://. Le navigateur suit la redirection, puis négocie TLS sur 443. C'est pratique, mais la première requête en clair peut encore exposer des détails (chemin, cookies mal configurés). En production, on force HTTPS et on s'appuie sur des en-têtes comme Strict-Transport-Security (HSTS) pour que le navigateur préfère HTTPS la prochaine fois. Dans DevTools, tu verras souvent une première ligne 301/302 puis la vraie page en 200. Comprendre cette chaîne évite de croire qu'un site « n'a pas HTTPS » alors qu'il redirige simplement, ou l'inverse : qu'il est « sûr » dès la première frappe en http://.",
          en: "Many sites first answer over HTTP on port 80 with a 301 or 302 that points to the https:// URL. The browser follows the redirect, then negotiates TLS on 443. That is convenient, but the first plain request can still expose details (path, poorly configured cookies). In production, you force HTTPS and rely on headers like Strict-Transport-Security (HSTS) so the browser prefers HTTPS next time. In DevTools you will often see a first 301/302 line then the real page as 200. Understanding this chain avoids thinking a site “has no HTTPS” when it merely redirects, or the opposite: that it is “safe” from the first http:// keystroke.",
        },
        bullets: [
          {
            fr: "301/302 : redirection, souvent vers https://.",
            en: "301/302: redirect, often to https://.",
          },
          {
            fr: "HSTS dit au navigateur de préférer HTTPS ensuite.",
            en: "HSTS tells the browser to prefer HTTPS next time.",
          },
          {
            fr: "La première requête HTTP clair reste un moment sensible.",
            en: "The first plain HTTP request remains a sensitive moment.",
          },
        ],
        callout: {
          fr: "Astuce : dans l'onglet Réseau, regarde s'il y a une redirection avant le 200 final.",
          en: "Tip: in the Network tab, check whether a redirect precedes the final 200.",
        },
        calloutKind: "tip",
        analogy: {
          fr: "Comme un panneau « entrée par la porte sécurisée » après la porte ouverte du hall.",
          en: "Like a sign “enter via the secure door” after the open lobby door.",
        },
      },
      {
        id: "net-http-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu sais décrire requête et réponse HTTP, les méthodes courantes (GET, POST), les codes de statut et pourquoi HTTPS avec TLS et certificats comptent au quotidien. HTTP parle contenu web ; TLS protège le trajet ; le certificat vérifie le nom du serveur. En panne, l'onglet Réseau des DevTools montre si le souci est un 404, un 500, du contenu mixte ou un certificat refusé. Garde ce fil : DNS → TCP → TLS (si HTTPS) → HTTP. Et pour les secrets : toujours https:// sur le bon domaine, jamais http:// pour un mot de passe.",
          en: "You can describe HTTP request and response, common methods (GET, POST), status codes, and why HTTPS with TLS and certificates matter day to day. HTTP speaks web content; TLS protects the path; the certificate verifies the server name. When things fail, the DevTools Network tab shows whether the issue is a 404, a 500, mixed content, or a rejected certificate. Keep this thread: DNS → TCP → TLS (if HTTPS) → HTTP. And for secrets: always https:// on the right domain, never http:// for a password.",
        },
        bullets: [
          {
            fr: "Client demande, serveur répond avec un code.",
            en: "Client asks, server replies with a code.",
          },
          {
            fr: "GET lit · POST envoie.",
            en: "GET reads · POST sends.",
          },
          {
            fr: "HTTPS = HTTP + TLS (souvent port 443).",
            en: "HTTPS = HTTP + TLS (often port 443).",
          },
        ],
        callout: {
          fr: "Astuce : en panne web, regarde le code (404, 500) avant de blâmer le Wi-Fi.",
          en: "Tip: when the web fails, check the status code (404, 500) before blaming Wi-Fi.",
        },
        calloutKind: "tip",
      },
    ],
    vocabulary: [
      {
        term: { fr: "HTTP", en: "HTTP" },
        definition: {
          fr: "Protocole d'application d'échange entre navigateur et serveur web (requêtes et réponses).",
          en: "Application protocol for exchange between browser and web server (requests and responses).",
        },
      },
      {
        term: { fr: "HTTPS", en: "HTTPS" },
        definition: {
          fr: "HTTP sécurisé par chiffrement TLS, généralement sur le port 443.",
          en: "HTTP secured with TLS encryption, usually on port 443.",
        },
      },
      {
        term: { fr: "TLS", en: "TLS" },
        definition: {
          fr: "Protocole qui chiffre et authentifie les échanges entre client et serveur.",
          en: "Protocol that encrypts and authenticates exchanges between client and server.",
        },
      },
      {
        term: { fr: "URL", en: "URL" },
        definition: {
          fr: "Adresse complète d'une ressource web (schéma, hôte, chemin, paramètres).",
          en: "Full address of a web resource (scheme, host, path, parameters).",
        },
      },
      {
        term: { fr: "GET", en: "GET" },
        definition: {
          fr: "Méthode HTTP pour lire ou récupérer une ressource sans la modifier.",
          en: "HTTP method to read or fetch a resource without changing it.",
        },
      },
      {
        term: { fr: "Code de statut", en: "Status code" },
        definition: {
          fr: "Nombre à trois chiffres dans la réponse HTTP (ex. 200, 404, 500) indiquant le résultat.",
          en: "Three-digit number in the HTTP response (e.g. 200, 404, 500) indicating the outcome.",
        },
      },
      {
        term: { fr: "Certificat", en: "Certificate" },
        definition: {
          fr: "Document cryptographique prouvant l'identité du serveur pour un nom de domaine donné.",
          en: "Cryptographic document proving the server's identity for a given domain name.",
        },
      },
      {
        term: { fr: "Contenu mixte", en: "Mixed content" },
        definition: {
          fr: "Ressource HTTP chargée depuis une page HTTPS, souvent bloquée par le navigateur.",
          en: "HTTP resource loaded from an HTTPS page, often blocked by the browser.",
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
          fr: "HTTPS ajoute TLS au-dessus de TCP pour chiffrer et authentifier les échanges. HTTP en clair n'offre pas cette protection en transit.",
          en: "HTTPS adds TLS on top of TCP to encrypt and authenticate exchanges. Plain HTTP does not offer that protection in transit.",
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
          fr: "GET demande une ressource sans la modifier : c'est la méthode par défaut quand tu ouvres une URL dans le navigateur.",
          en: "GET requests a resource without changing it: it is the default method when you open a URL in the browser.",
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
          fr: "HTTPS utilise le port 443 par convention. Le port 80 sert surtout à HTTP en clair ; 21 est FTP, 25 SMTP, 3389 RDP.",
          en: "HTTPS conventionally uses port 443. Port 80 is mainly plain HTTP; 21 is FTP, 25 SMTP, 3389 RDP.",
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
          fr: "404 Not Found indique que le serveur a répondu mais que la ressource demandée (chemin, fichier) n'existe pas à cette URL. Ce n'est pas un code de succès (200) ni une panne réseau totale.",
          en: "404 Not Found means the server replied but the requested resource (path, file) does not exist at that URL. It is not a success code (200) nor total network failure.",
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
          fr: "Le certificat TLS est signé par une autorité de confiance et lié à un nom de domaine. Le navigateur l'utilise pour vérifier qu'il parle au bon serveur avant d'échanger des données chiffrées.",
          en: "The TLS certificate is signed by a trusted authority and bound to a domain name. The browser uses it to verify it talks to the right server before exchanging encrypted data.",
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
          fr: "POST envoie un corps de données (formulaire, JSON) au serveur. GET peut passer des paramètres dans l'URL mais POST est la méthode standard pour soumettre un formulaire.",
          en: "POST sends a data body (form, JSON) to the server. GET can pass parameters in the URL but POST is the standard method to submit a form.",
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
          fr: "HTTPS chiffre le transport et vérifie le certificat pour le nom, mais un site malveillant peut aussi avoir HTTPS. Le cadenas ne remplace pas la prudence sur le contenu et l'URL.",
          en: "HTTPS encrypts transport and checks the certificate for the name, but a malicious site can also have HTTPS. The lock does not replace caution about content and the URL.",
        },
      },
      {
        id: "net-http-q8",
        type: "multiple-choice",
        question: {
          fr: "Un code HTTP 500 indique surtout…",
          en: "An HTTP 500 code mainly indicates…",
        },
        options: [
          {
            fr: "Une erreur côté serveur",
            en: "A server-side error",
          },
          {
            fr: "Une page introuvable",
            en: "A page not found",
          },
          {
            fr: "Un succès total",
            en: "Total success",
          },
          {
            fr: "Une coupure Wi-Fi obligatoire",
            en: "A mandatory Wi-Fi outage",
          },
        ],
        correctAnswer: {
          fr: "Une erreur côté serveur",
          en: "A server-side error",
        },
        hint: {
          fr: "5xx = famille « erreur serveur ».",
          en: "5xx = “server error” family.",
        },
        explanation: {
          fr: "500 Internal Server Error signifie que le serveur a reçu la requête mais n'a pas pu la traiter (bug, base de données, configuration). 404 serait « introuvable », 200 serait succès.",
          en: "500 Internal Server Error means the server received the request but could not process it (bug, database, configuration). 404 would be “not found,” 200 would be success.",
        },
      },
      {
        id: "net-http-q9",
        type: "multiple-choice",
        question: {
          fr: "Une page HTTPS qui charge une image en http:// risque surtout…",
          en: "An HTTPS page loading an image over http:// mainly risks…",
        },
        options: [
          {
            fr: "Du contenu mixte bloqué par le navigateur",
            en: "Mixed content blocked by the browser",
          },
          {
            fr: "La suppression du certificat TLS",
            en: "Deletion of the TLS certificate",
          },
          {
            fr: "Le remplacement automatique du DNS",
            en: "Automatic DNS replacement",
          },
          {
            fr: "L'arrêt du protocole TCP",
            en: "Stopping the TCP protocol",
          },
        ],
        correctAnswer: {
          fr: "Du contenu mixte bloqué par le navigateur",
          en: "Mixed content blocked by the browser",
        },
        hint: {
          fr: "HTTPS + ressource HTTP = mixed content.",
          en: "HTTPS + HTTP resource = mixed content.",
        },
        explanation: {
          fr: "Les navigateurs modernes bloquent ou avertissent quand une page sécurisée charge des ressources actives en HTTP clair (mixed content), pour éviter des failles. L'image peut ne pas s'afficher même si le HTML est en HTTPS.",
          en: "Modern browsers block or warn when a secure page loads active resources over plain HTTP (mixed content) to avoid vulnerabilities. The image may not display even if HTML is HTTPS.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech bienveillante. Tu enseignes HTTP, HTTPS, les méthodes, les codes de statut, TLS, certificats, contenu mixte, redirections vers HTTPS et lecture de l'onglet Réseau (DevTools). Réponds en français, clairement, avec des exemples du web quotidien et des scénarios de dépannage pas à pas.",
        en: "You are Nova, a friendly tech tutor. You teach HTTP, HTTPS, methods, status codes, TLS, certificates, mixed content, redirects to HTTPS, and reading the Network tab (DevTools). Answer in English, clearly, with everyday web examples and step-by-step troubleshooting scenarios.",
      },
      introMessage: {
        fr: "Salut ! Je suis Nova. Aujourd'hui on explore HTTP et HTTPS : requêtes, codes de statut, cadenas, DevTools et contenu mixte. Pose-moi tes questions !",
        en: "Hi! I'm Nova. Today we explore HTTP and HTTPS: requests, status codes, the lock icon, DevTools, and mixed content. Ask me anything!",
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
          fr: "Certificats, port 443 et limites du cadenas",
          en: "Certificates, port 443, and lock icon limits",
        },
        {
          fr: "DevTools, codes 404/500 et contenu mixte",
          en: "DevTools, 404/500 codes, and mixed content",
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
      fr: "Tu vas comprendre le rôle du switch, du routeur et du point d'accès dans une topologie LAN, même quand tout est regroupé dans une box FAI. Tu apprendras aussi à diagnostiquer câble, Wi-Fi et Internet séparément, sans tout redémarrer au hasard.",
      en: "You will understand the roles of the switch, router, and access point in a LAN topology, even when everything is bundled in an ISP gateway. You will also learn to troubleshoot cable, Wi-Fi, and Internet separately, without randomly rebooting everything.",
    },
    icon: "network",
    estimatedMinutes: 21,
    xpReward: 27,
    goals: [
      {
        description: {
          fr: "Différencier switch, routeur et AP selon leur rôle réseau",
          en: "Distinguish switch, router, and AP by their network role",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Situer chaque équipement dans une topologie LAN typique maison ou bureau",
          en: "Place each device in a typical home or office LAN topology",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Relier topologie, couches et rôles pour lire une panne simple",
          en: "Link topology, layers, and roles to read a simple outage",
        },
        xpReward: 6,
      },
      {
        description: {
          fr: "Appliquer un arbre de décision simple quand câble, Wi-Fi ou Internet tombe",
          en: "Apply a simple decision tree when cable, Wi-Fi, or Internet fails",
        },
        xpReward: 7,
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
          fr: "Dans un réseau, chaque boîtier a un métier précis. Le switch interconnecte les machines d'un même LAN. Le routeur relie des réseaux distincts, souvent ton LAN et Internet. Le point d'accès (AP) ajoute la radio Wi-Fi au LAN câblé. Comprendre ces rôles évite de confondre « qui connecte les PC entre eux » et « qui ouvre la porte vers Internet ». Cette distinction est la base de tout dépannage réseau au quotidien, à la maison comme au bureau.",
          en: "In a network, each box has a specific job. The switch interconnects machines on the same LAN. The router connects distinct networks, often your LAN and the Internet. The access point (AP) adds Wi-Fi radio to the wired LAN. Understanding these roles avoids mixing up “who connects PCs together” and “who opens the door to the Internet.” This distinction is the foundation of everyday network troubleshooting, at home and in the office.",
        },
        bullets: [
          {
            fr: "Un réseau efficace sépare les fonctions plutôt que de tout mélanger.",
            en: "An efficient network separates functions rather than blending everything.",
          },
          {
            fr: "Chaque rôle correspond à une couche ou à une frontière réseau différente.",
            en: "Each role maps to a different layer or network boundary.",
          },
          {
            fr: "Nommer le bon rôle accélère le diagnostic avant tout redémarrage.",
            en: "Naming the right role speeds diagnosis before any reboot.",
          },
        ],
        callout: {
          fr: "Avant de « redémarrer la box », demande-toi quel rôle est en cause.",
          en: "Before “rebooting the gateway,” ask which role is involved.",
        },
        calloutKind: "key",
        analogy: {
          fr: "Trois métiers distincts dans le même bâtiment : couloirs, porte de sortie, et accès radio.",
          en: "Three distinct jobs in the same building: hallways, exit door, and radio access.",
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
          fr: "Ces trois rôles forment la topologie locale la plus courante à la maison ou au bureau. Le switch reçoit les câbles Ethernet et relaie les trames entre les hôtes du même réseau local. Le routeur possède au moins deux interfaces (LAN et WAN) et choisit comment faire transiter le trafic entre elles. L'AP se branche sur le LAN et convertit le trafic filaire en ondes radio Wi-Fi, sans forcément router vers Internet lui-même. Le schéma te montre comment ces boîtiers s'enchaînent dans une topologie simple.",
          en: "These three roles form the most common local topology at home or in the office. The switch receives Ethernet cables and relays frames between hosts on the same local network. The router has at least two interfaces (LAN and WAN) and chooses how traffic moves between them. The AP plugs into the LAN and converts wired traffic into Wi-Fi radio waves, without necessarily routing to the Internet itself. The diagram shows how these boxes chain together in a simple topology.",
        },
        bullets: [
          {
            fr: "Switch : relie des appareils sur le même LAN (souvent Ethernet).",
            en: "Switch: connects devices on the same LAN (often Ethernet).",
          },
          {
            fr: "Routeur : relie des réseaux (LAN et Internet) et fait souvent du NAT.",
            en: "Router: connects networks (LAN and Internet) and often performs NAT.",
          },
          {
            fr: "AP (Access Point) : étend le réseau en Wi-Fi sur le LAN existant.",
            en: "AP (Access Point): extends the network over Wi-Fi on the existing LAN.",
          },
        ],
        callout: {
          fr: "Même boîtier ou boîtiers séparés : les trois rôles restent conceptuellement distincts.",
          en: "Same box or separate boxes: the three roles stay conceptually distinct.",
        },
        calloutKind: "tip",
        analogy: {
          fr: "Switch = couloirs internes · Routeur = porte de sortie · AP = accès sans fil au bâtiment.",
          en: "Switch = internal hallways · Router = exit door · AP = wireless access to the building.",
        },
      },
      {
        id: "net-dev-s3",
        title: {
          fr: "Box « tout-en-un »",
          en: "All-in-one gateways",
        },
        body: {
          fr: "Ta box FAI combine souvent modem, routeur, switch et AP dans un seul boîtier. Visuellement, tu ne vois qu'une seule unité, mais conceptuellement les rôles restent séparés. C'est pratique pour l'installation, mais essentiel pour le diagnostic : un problème « pas de Wi-Fi » n'est pas forcément un problème « pas d'Internet », et vice versa. Savoir découper mentalement la box en rôles t'évite des heures de mauvaises pistes et des redémarrages inutiles.",
          en: "Your ISP gateway often combines modem, router, switch, and AP in one unit. Visually you see only one box, but conceptually the roles stay separate. That is convenient to install, but essential for troubleshooting: a “no Wi-Fi” issue is not necessarily a “no Internet” issue, and vice versa. Mentally splitting the gateway into roles saves hours of wrong leads and useless reboots.",
        },
        bullets: [
          {
            fr: "Modem : dialogue avec le réseau du FAI.",
            en: "Modem: talks to the ISP network.",
          },
          {
            fr: "Routeur + switch + AP : gèrent le LAN domestique.",
            en: "Router + switch + AP: manage the home LAN.",
          },
          {
            fr: "Un seul boîtier ne signifie pas un seul rôle à dépanner.",
            en: "One box does not mean one role to troubleshoot.",
          },
        ],
        callout: {
          fr: "Attention : « redémarrer la box » traite tous les rôles d'un coup, sans cibler la vraie cause.",
          en: "Warning: “rebooting the gateway” hits every role at once without targeting the real cause.",
        },
        calloutKind: "warning",
        miniExercise: {
          prompt: {
            fr: "Chez toi, le Wi-Fi disparaît mais un PC câblé charge encore des sites. Quel rôle de la box est surtout en cause ?",
            en: "At home, Wi-Fi disappears but a wired PC still loads sites. Which gateway role is mainly involved?",
          },
          hint: {
            fr: "Internet filaire marche : pense AP / radio, pas forcément le FAI.",
            en: "Wired Internet works: think AP / radio, not necessarily the ISP.",
          },
        },
      },
      {
        id: "net-dev-s4",
        diagram: "osi-layers",
        title: {
          fr: "Couches en pratique",
          en: "Layers in practice",
        },
        body: {
          fr: "Le switch travaille surtout au niveau des adresses MAC (couche liaison). Il apprend quels ports correspondent à quelles machines et forward les trames localement. Le routeur décide avec des adresses IP (couche réseau) et connaît la passerelle par défaut vers Internet. L'AP gère la radio Wi-Fi (couche accès) tout en raccordant les clients au LAN câblé. Quand tu sais quelle couche est touchée, tu sais quel équipement suspecter en premier, sans tout mélanger.",
          en: "The switch mostly works with MAC addresses (data-link layer). It learns which ports map to which machines and forwards frames locally. The router decides with IP addresses (network layer) and knows the default gateway toward the Internet. The AP handles Wi-Fi radio (access layer) while joining clients to the wired LAN. When you know which layer is affected, you know which device to suspect first, without mixing everything up.",
        },
        bullets: [
          {
            fr: "Switch → adresses MAC, même sous-réseau.",
            en: "Switch → MAC addresses, same subnet.",
          },
          {
            fr: "Routeur → adresses IP, frontière entre réseaux.",
            en: "Router → IP addresses, boundary between networks.",
          },
          {
            fr: "AP → liaison radio Wi-Fi vers le LAN.",
            en: "AP → Wi-Fi radio link to the LAN.",
          },
        ],
        callout: {
          fr: "Erreur fréquente : blâmer Internet alors que seule la couche radio Wi-Fi est cassée.",
          en: "Common mistake: blaming the Internet when only the Wi-Fi radio layer is broken.",
        },
        calloutKind: "mistake",
        analogy: {
          fr: "MAC = badge d'étage · IP = adresse de rue · Wi-Fi = porte radio vers le même étage.",
          en: "MAC = floor badge · IP = street address · Wi-Fi = radio door to the same floor.",
        },
      },
      {
        id: "net-dev-s5",
        title: {
          fr: "Analogie : hall d'immeuble",
          en: "Analogy: building lobby",
        },
        body: {
          fr: "Le switch est comme les couloirs qui relient les appartements du même immeuble : les résidents peuvent se rendre visite sans sortir dehors. Le routeur est la porte vers la rue : il décide qui peut quitter le bâtiment et par où revenir. L'AP, c'est le Wi-Fi dans le hall : tu te connectes sans câble, mais tu restes dans le même bâtiment tant que la porte de sortie fonctionne. Cette image t'aide à séparer panne locale et panne d'accès extérieur.",
          en: "The switch is like hallways linking apartments in the same building: residents can visit each other without going outside. The router is the door to the street: it decides who may leave the building and how to return. The AP is Wi-Fi in the lobby: you connect without a cable, yet stay in the same building as long as the exit door works. This picture helps you separate a local outage from an outside-access outage.",
        },
        bullets: [
          {
            fr: "Visites entre appartements = trafic LAN via le switch.",
            en: "Visits between apartments = LAN traffic via the switch.",
          },
          {
            fr: "Sortir dans la rue = passer par le routeur vers Internet.",
            en: "Going out to the street = going through the router to the Internet.",
          },
          {
            fr: "Se connecter sans câble dans le hall = rôle de l'AP.",
            en: "Connecting without a cable in the lobby = the AP's role.",
          },
        ],
        analogy: {
          fr: "Switch = couloirs LAN · Routeur = porte Internet · AP = Wi-Fi local.",
          en: "Switch = LAN hallways · Router = Internet door · AP = local Wi-Fi.",
        },
        callout: {
          fr: "Si les couloirs marchent mais pas la porte, le LAN est OK mais pas Internet.",
          en: "If hallways work but the door does not, the LAN is OK but not the Internet.",
        },
        calloutKind: "key",
      },
      {
        id: "net-dev-s6",
        title: {
          fr: "Cas concret : bureau simple",
          en: "Concrete case: simple office",
        },
        body: {
          fr: "Dans un petit bureau, les PC câblés se branchent sur un switch, le switch remonte vers le routeur, et le routeur sort vers Internet. Les portables se connectent à un AP branché sur le même LAN. Si le Wi-Fi tombe mais qu'un PC câblé accède encore au serveur de fichiers local, le souci est plutôt côté AP ou radio. Si personne, ni en câble ni en Wi-Fi, n'atteint Internet alors que le lien local fonctionne, regarde le routeur ou le FAI. Ce scénario te sert de modèle mental pour toute panne « réseau ».",
          en: "In a small office, wired PCs plug into a switch, the switch uplinks to the router, and the router exits to the Internet. Laptops connect to an AP on the same LAN. If Wi-Fi dies but a wired PC still reaches the local file server, the issue is likely the AP or radio side. If nobody, wired or wireless, reaches the Internet while local links work, check the router or ISP. This scenario is your mental model for any “network” outage.",
        },
        bullets: [
          {
            fr: "Câble OK, Wi-Fi KO → suspecte l'AP ou la couverture radio.",
            en: "Cable OK, Wi-Fi down → suspect the AP or radio coverage.",
          },
          {
            fr: "LAN OK, Internet KO → suspecte le routeur, la passerelle ou le FAI.",
            en: "LAN OK, Internet down → suspect the router, gateway, or ISP.",
          },
          {
            fr: "Rien ne communique en local → switch, câble ou alimentation.",
            en: "Nothing talks locally → switch, cable, or power.",
          },
        ],
        callout: {
          fr: "Teste toujours un hôte câblé avant de conclure que « tout le réseau » est mort.",
          en: "Always test a wired host before concluding that “the whole network” is dead.",
        },
        calloutKind: "tip",
        miniExercise: {
          prompt: {
            fr: "Le serveur de fichiers local répond en câble, aucun portable n'a le Wi-Fi. Par où commences-tu ?",
            en: "The local file server replies on cable, no laptop has Wi-Fi. Where do you start?",
          },
          hint: {
            fr: "LAN filaire OK → inspecte l'AP, le SSID, le mot de passe ou les interférences.",
            en: "Wired LAN OK → inspect the AP, SSID, password, or interference.",
          },
        },
      },
      {
        id: "net-dev-s7",
        title: {
          fr: "Erreur fréquente",
          en: "Common mistake",
        },
        body: {
          fr: "Beaucoup appellent tout « la box » sans séparer les rôles, ou croient qu'un switch « donne Internet ». Un switch seul ne route pas vers le WAN : il ne fait que relier des hôtes sur le même réseau. Autre confusion fréquente : AP n'est pas un routeur. Un AP étend le Wi-Fi ; le routeur décide du passage vers Internet. Même si ta box fait les deux, ce sont deux fonctions distinctes à diagnostiquer, sinon tu perds du temps sur la mauvaise piste.",
          en: "Many people call everything “the box” without separating roles, or think a switch “gives Internet.” A switch alone does not route to the WAN: it only links hosts on the same network. Another common mix-up: an AP is not a router. An AP extends Wi-Fi; the router decides passage to the Internet. Even if your gateway does both, they are two distinct functions to troubleshoot, or you waste time on the wrong lead.",
        },
        bullets: [
          {
            fr: "Un switch seul n'ouvre pas Internet.",
            en: "A switch alone does not open the Internet.",
          },
          {
            fr: "Un AP étend le Wi-Fi, il ne remplace pas forcément le routeur.",
            en: "An AP extends Wi-Fi; it does not necessarily replace the router.",
          },
          {
            fr: "« La box » cache souvent plusieurs rôles à tester un par un.",
            en: "“The box” often hides several roles to test one by one.",
          },
        ],
        callout: {
          fr: "Switch = même réseau · Routeur = entre réseaux · AP = radio.",
          en: "Switch = same network · Router = between networks · AP = radio.",
        },
        calloutKind: "mistake",
        miniExercise: {
          prompt: {
            fr: "Pour chaque besoin, choisis : switch, routeur ou AP · (1) Wi-Fi salon (2) 8 PC Ethernet (3) sortir sur Internet.",
            en: "For each need, choose: switch, router, or AP · (1) living-room Wi-Fi (2) 8 Ethernet PCs (3) reach the Internet.",
          },
          hint: {
            fr: "AP · switch · routeur.",
            en: "AP · switch · router.",
          },
        },
      },
      {
        id: "net-dev-s-extra1",
        title: {
          fr: "Arbre de décision : câble, Wi-Fi, Internet",
          en: "Decision tree: cable, Wi-Fi, Internet",
        },
        body: {
          fr: "Scénario : « Internet ne marche plus. » Commence par tester un PC câblé directement sur la box ou le switch. Si le câble fonctionne et que seul le Wi-Fi est mort, concentre-toi sur l'AP, le mot de passe Wi-Fi ou l'interférence. Si câble et Wi-Fi échouent tous les deux, vérifie le switch, l'alimentation et les voyants du routeur. Si le LAN local répond (ping vers la passerelle) mais qu'Internet reste inaccessible, le routeur ou le FAI est probablement en cause. Un rôle à la fois, dans cet ordre.",
          en: "Scenario: “The Internet is down.” Start by testing a PC wired directly to the gateway or switch. If cable works and only Wi-Fi is dead, focus on the AP, Wi-Fi password, or interference. If both cable and Wi-Fi fail, check the switch, power, and router status lights. If the local LAN responds (ping to the gateway) but the Internet stays unreachable, the router or ISP is likely involved. One role at a time, in that order.",
        },
        bullets: [
          {
            fr: "Étape 1 : câble OK ? Si oui, le LAN filaire et le switch semblent sains.",
            en: "Step 1: cable OK? If yes, wired LAN and switch look healthy.",
          },
          {
            fr: "Étape 2 : Wi-Fi OK ? Si câble oui et Wi-Fi non → AP ou config radio.",
            en: "Step 2: Wi-Fi OK? If cable yes and Wi-Fi no → AP or radio config.",
          },
          {
            fr: "Étape 3 : Internet OK ? Si LAN oui et Internet non → routeur ou FAI.",
            en: "Step 3: Internet OK? If LAN yes and Internet no → router or ISP.",
          },
        ],
        callout: {
          fr: "Diagnostique un rôle à la fois : câble, puis Wi-Fi, puis Internet.",
          en: "Diagnose one role at a time: cable, then Wi-Fi, then Internet.",
        },
        calloutKind: "warning",
        miniExercise: {
          prompt: {
            fr: "Ton laptop Wi-Fi ne charge plus de sites, mais le PC câblé du salon fonctionne. Quel équipement inspectes-tu en premier ?",
            en: "Your Wi-Fi laptop no longer loads sites, but the wired living-room PC works. Which device do you inspect first?",
          },
          hint: {
            fr: "Le LAN filaire marche : pense AP ou Wi-Fi, pas le FAI en premier.",
            en: "Wired LAN works: think AP or Wi-Fi, not the ISP first.",
          },
        },
      },
      {
        id: "net-dev-s-extra2",
        title: {
          fr: "Voyants, uplink et ports utiles",
          en: "Lights, uplink, and useful ports",
        },
        body: {
          fr: "Sur un switch ou une box, les voyants de port te disent souvent si le lien physique est vivant avant tout logiciel. Un câble mal enclenché, un port mort ou une alim coupée se voient vite. L'uplink est le lien qui remonte vers le routeur ou la box : s'il tombe, tout le LAN derrière le switch perd Internet même si les PC se voient encore entre eux. Repérer uplink, ports LAN et boutons Wi-Fi / WPS t'évite de chercher une panne « cloud » alors que le problème est un simple câble.",
          en: "On a switch or gateway, port lights often tell you whether the physical link is alive before any software. A half-seated cable, a dead port, or cut power shows up quickly. The uplink is the link back to the router or gateway: if it drops, the whole LAN behind the switch loses Internet even if PCs still see each other. Spotting uplink, LAN ports, and Wi-Fi / WPS buttons keeps you from chasing a “cloud” outage when the problem is a simple cable.",
        },
        bullets: [
          {
            fr: "Voyant éteint sur un port → câble, port ou alimentation à vérifier d'abord.",
            en: "Dark port light → check cable, port, or power first.",
          },
          {
            fr: "Uplink vers la box : s'il tombe, Internet disparaît pour tout le switch.",
            en: "Uplink to the gateway: if it drops, Internet vanishes for the whole switch.",
          },
          {
            fr: "Bouton Wi-Fi / WPS : parfois désactivé par erreur après un coup de ménage.",
            en: "Wi-Fi / WPS button: sometimes turned off by mistake after cleaning.",
          },
        ],
        callout: {
          fr: "Astuce : regarde les voyants avant d'ouvrir les réglages logiciels.",
          en: "Tip: check the lights before opening software settings.",
        },
        calloutKind: "tip",
        analogy: {
          fr: "Les voyants sont comme les témoins du tableau de bord : ils disent si le moteur tourne avant d'ouvrir le capot logiciel.",
          en: "Lights are like dashboard indicators: they say whether the engine is running before you open the software hood.",
        },
      },
      {
        id: "net-dev-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu distingues les trois rôles fondamentaux et tu sais les retrouver même dans une box tout-en-un. Ce découpage accélère le diagnostic au quotidien et te prépare aux leçons sur IP, ports et NAT. Retiens surtout l'idée que chaque panne pointe vers un rôle précis, pas vers « le réseau » en bloc. Câble, Wi-Fi, Internet : trois tests, trois pistes.",
          en: "You distinguish the three core roles and can still spot them inside an all-in-one gateway. That split speeds up everyday troubleshooting and prepares you for lessons on IP, ports, and NAT. Above all, remember that each outage points to a specific role, not to “the network” as a whole. Cable, Wi-Fi, Internet: three tests, three leads.",
        },
        bullets: [
          {
            fr: "Switch interconnecte le LAN (MAC, couche liaison).",
            en: "Switch interconnects the LAN (MAC, data link).",
          },
          {
            fr: "Routeur relie LAN et Internet (IP, NAT souvent).",
            en: "Router links LAN and Internet (IP, often NAT).",
          },
          {
            fr: "AP apporte le Wi-Fi au LAN existant.",
            en: "AP provides Wi-Fi to the existing LAN.",
          },
        ],
        callout: {
          fr: "Astuce : diagnostique un rôle à la fois (câble, Wi-Fi, Internet).",
          en: "Tip: diagnose one role at a time (cable, Wi-Fi, Internet).",
        },
        calloutKind: "tip",
      },
    ],
    vocabulary: [
      {
        term: { fr: "Switch", en: "Switch" },
        definition: {
          fr: "Équipement qui interconnecte des hôtes sur un même LAN, souvent via Ethernet.",
          en: "Device that interconnects hosts on the same LAN, often via Ethernet.",
        },
      },
      {
        term: { fr: "Routeur", en: "Router" },
        definition: {
          fr: "Équipement qui route le trafic entre réseaux IP distincts, par ex. LAN et Internet.",
          en: "Device that routes traffic between distinct IP networks, e.g. LAN and Internet.",
        },
      },
      {
        term: { fr: "Point d'accès (AP)", en: "Access point (AP)" },
        definition: {
          fr: "Borne qui offre la connectivité Wi-Fi aux clients du LAN.",
          en: "Device that provides Wi-Fi connectivity to LAN clients.",
        },
      },
      {
        term: { fr: "Adresse MAC", en: "MAC address" },
        definition: {
          fr: "Identifiant matériel utilisé surtout par le switch pour relayer les trames.",
          en: "Hardware identifier mainly used by the switch to relay frames.",
        },
      },
      {
        term: { fr: "Passerelle (gateway)", en: "Gateway" },
        definition: {
          fr: "Boîtier, souvent la box FAI, qui combine routeur, switch et parfois AP.",
          en: "Device, often the ISP box, that combines router, switch, and sometimes AP.",
        },
      },
      {
        term: { fr: "Ethernet", en: "Ethernet" },
        definition: {
          fr: "Technologie de liaison câblée dominante sur les LAN (câbles RJ45, ports switch).",
          en: "Dominant wired link technology on LANs (RJ45 cables, switch ports).",
        },
      },
      {
        term: { fr: "SSID", en: "SSID" },
        definition: {
          fr: "Nom du réseau Wi-Fi diffusé par le point d'accès.",
          en: "Wi-Fi network name broadcast by the access point.",
        },
      },
      {
        term: { fr: "Modem", en: "Modem" },
        definition: {
          fr: "Équipement qui module le signal vers le réseau de l'opérateur (fibre, câble, DSL).",
          en: "Device that modulates the signal toward the ISP network (fiber, cable, DSL).",
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
          fr: "Le switch interconnecte des hôtes sur le même LAN en relaçant les trames entre ports.",
          en: "The switch interconnects hosts on the same LAN by relaying frames between ports.",
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
          fr: "Le routeur relie des réseaux distincts, souvent le LAN domestique et Internet.",
          en: "The router connects distinct networks, often the home LAN and the Internet.",
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
            fr: "Fournir le Wi-Fi au LAN",
            en: "Provide Wi-Fi to the LAN",
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
          fr: "Fournir le Wi-Fi au LAN",
          en: "Provide Wi-Fi to the LAN",
        },
        hint: {
          fr: "Pense radio / sans fil.",
          en: "Think radio / wireless.",
        },
        explanation: {
          fr: "L'AP étend le réseau en Wi-Fi en raccordant les clients au LAN câblé existant.",
          en: "The AP extends the network over Wi-Fi by joining clients to the existing wired LAN.",
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
          fr: "Les box tout-en-un regroupent ces rôles même si tu ne vois qu'un seul appareil.",
          en: "All-in-one gateways bundle these roles even if you see only one device.",
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
          fr: "Le switch interconnecte localement ; le routage vers Internet est un autre rôle, celui du routeur.",
          en: "The switch interconnects locally; routing to the Internet is another role, the router's.",
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
          fr: "Le switch forward souvent selon les adresses MAC apprises sur chaque port.",
          en: "Switches often forward based on MAC addresses learned on each port.",
        },
      },
      {
        id: "net-dev-q7",
        type: "multiple-choice",
        question: {
          fr: "Le câble fonctionne mais le Wi-Fi est mort. Quel équipement suspectes-tu en premier ?",
          en: "Cable works but Wi-Fi is dead. Which device do you suspect first?",
        },
        options: [
          { fr: "Point d'accès (AP)", en: "Access point (AP)" },
          { fr: "Switch uniquement", en: "Switch only" },
          { fr: "Imprimante réseau", en: "Network printer" },
          { fr: "Clavier USB", en: "USB keyboard" },
        ],
        correctAnswer: { fr: "Point d'accès (AP)", en: "Access point (AP)" },
        hint: {
          fr: "Le LAN filaire marche : le souci est plutôt radio.",
          en: "Wired LAN works: the issue is likely radio-related.",
        },
        explanation: {
          fr: "Si le câble passe, le switch et le LAN semblent OK. Un Wi-Fi absent pointe vers l'AP ou sa config.",
          en: "If cable works, the switch and LAN look OK. Missing Wi-Fi points to the AP or its config.",
        },
      },
      {
        id: "net-dev-q8",
        type: "multiple-choice",
        question: {
          fr: "LAN local OK (ping passerelle), mais pas d'Internet. Où chercher ?",
          en: "Local LAN OK (ping gateway), but no Internet. Where to look?",
        },
        options: [
          {
            fr: "Routeur / box ou FAI",
            en: "Router / gateway or ISP",
          },
          {
            fr: "Uniquement le clavier",
            en: "Keyboard only",
          },
          {
            fr: "Écran du PC",
            en: "PC display",
          },
          {
            fr: "Câble HDMI",
            en: "HDMI cable",
          },
        ],
        correctAnswer: {
          fr: "Routeur / box ou FAI",
          en: "Router / gateway or ISP",
        },
        hint: {
          fr: "Le LAN répond : la frontière WAN est en cause.",
          en: "The LAN replies: the WAN boundary is involved.",
        },
        explanation: {
          fr: "Si la passerelle locale répond, le switch et le chemin filaire semblent sains. Internet implique routeur ou FAI.",
          en: "If the local gateway replies, the switch and wired path look healthy. Internet involves the router or ISP.",
        },
      },
      {
        id: "net-dev-q9",
        type: "multiple-choice",
        question: {
          fr: "Dans une box FAI tout-en-un, quels rôles sont souvent regroupés ?",
          en: "In an all-in-one ISP gateway, which roles are often combined?",
        },
        options: [
          {
            fr: "Modem, routeur, switch et souvent AP Wi-Fi",
            en: "Modem, router, switch, and often a Wi-Fi AP",
          },
          {
            fr: "Uniquement un clavier et une souris",
            en: "Only a keyboard and a mouse",
          },
          {
            fr: "Uniquement un serveur DNS mondial",
            en: "Only a global DNS server",
          },
          {
            fr: "Uniquement un disque dur externe",
            en: "Only an external hard drive",
          },
        ],
        correctAnswer: {
          fr: "Modem, routeur, switch et souvent AP Wi-Fi",
          en: "Modem, router, switch, and often a Wi-Fi AP",
        },
        hint: {
          fr: "Un seul boîtier, plusieurs fonctions réseau.",
          en: "One box, several network functions.",
        },
        explanation: {
          fr: "La box domestique concentre souvent modem, routage, ports switch et Wi-Fi pour simplifier l'installation.",
          en: "A home gateway often packs modem, routing, switch ports, and Wi-Fi to simplify setup.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech bienveillante. Tu expliques switch, routeur et AP avec des exemples maison et bureau, y compris les box tout-en-un. Tu aides à diagnostiquer câble, Wi-Fi et Internet séparément, avec un arbre de décision simple et des analogies concrètes. Réponds en français, clairement, sans jargon inutile.",
        en: "You are Nova, a friendly tech tutor. You explain switch, router, and AP with home and office examples, including all-in-one gateways. You help troubleshoot cable, Wi-Fi, and Internet separately, with a simple decision tree and concrete analogies. Answer in English, clearly, without needless jargon.",
      },
      introMessage: {
        fr: "Salut ! On décortique switch, routeur et AP, même dans une box tout-en-un. Qu'est-ce qui te bloque : topologie, rôles ou dépannage ?",
        en: "Hi! We're unpacking switch, router, and AP, even inside an all-in-one gateway. What's confusing: topology, roles, or troubleshooting?",
      },
      topics: [
        {
          fr: "Rôle du switch et adresses MAC",
          en: "Role of the switch and MAC addresses",
        },
        {
          fr: "Routeur vs AP vs box FAI",
          en: "Router vs AP vs ISP gateway",
        },
        {
          fr: "Dépannage câble / Wi-Fi / Internet",
          en: "Troubleshooting cable / Wi-Fi / Internet",
        },
        {
          fr: "Voyants, uplink et topologie bureau",
          en: "Lights, uplink, and office topology",
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
      fr: "Comprendre pourquoi les ports existent, comparer TCP et UDP, et mémoriser les numéros essentiels (22, 53, 80, 443). Tu apprendras aussi à lire une règle de pare-feu simple pour ouvrir uniquement ce qu'une application web exige vraiment.",
      en: "Understand why ports exist, compare TCP and UDP, and memorize the essential numbers (22, 53, 80, 443). You will also learn to read a simple firewall rule so you open only what a web application truly needs.",
    },
    icon: "layers",
    estimatedMinutes: 22,
    xpReward: 29,
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
      {
        description: {
          fr: "Interpréter une règle pare-feu basique (allow/deny sur un port)",
          en: "Interpret a basic firewall rule (allow/deny on a port)",
        },
        xpReward: 5,
      },
    ],
    sections: [
      {
        id: "net-ports-s1",
        diagram: "ports-map",
        title: {
          fr: "Pourquoi des ports ?",
          en: "Why ports?",
        },
        body: {
          fr: "Une adresse IP identifie une machine sur le réseau, mais une machine héberge souvent plusieurs services en parallèle : serveur web, SSH, messagerie, DNS local. Un numéro de port (de 0 à 65535) précise quelle application doit recevoir le paquet. Sans ports, le système ne saurait pas si un paquet va au web, au SSH ou au DNS. C'est la combinaison IP + port + protocole (TCP ou UDP) qui forme une destination précise, côté serveur comme côté client.",
          en: "An IP address identifies a machine on the network, but a machine often runs many services in parallel: web server, SSH, mail, local DNS. A port number (0 to 65535) specifies which application should receive the packet. Without ports, the system would not know whether a packet is for the web, SSH, or DNS. The combination IP + port + protocol (TCP or UDP) forms a precise destination, on both the server and the client side.",
        },
        bullets: [
          {
            fr: "IP = quelle machine · Port = quel service sur cette machine.",
            en: "IP = which machine · Port = which service on that machine.",
          },
          {
            fr: "Un même serveur peut écouter sur plusieurs ports simultanément.",
            en: "One server can listen on many ports at once.",
          },
          {
            fr: "La destination complète inclut aussi TCP ou UDP.",
            en: "The full destination also includes TCP or UDP.",
          },
        ],
        callout: {
          fr: "Clé : adresse complète = IP + port + TCP/UDP.",
          en: "Key: full address = IP + port + TCP/UDP.",
        },
        calloutKind: "key",
      },
      {
        id: "net-ports-s2",
        diagram: "tcp-udp",
        title: {
          fr: "TCP et UDP",
          en: "TCP and UDP",
        },
        body: {
          fr: "TCP et UDP sont les deux grands protocoles de transport au-dessus d'IP. TCP établit une connexion, numérote les segments, retransmet en cas de perte et garantit l'ordre : idéal pour le web, SSH ou le transfert de fichiers. UDP envoie des datagrammes sans connexion lourde ni garantie stricte : parfait pour le DNS, le streaming ou les jeux en ligne où la vitesse prime sur une retransmission coûteuse. Ni l'un ni l'autre n'est « toujours meilleur » : le bon choix dépend du service et de ce que tu tolères en cas de perte.",
          en: "TCP and UDP are the two main transport protocols above IP. TCP establishes a connection, numbers segments, retransmits on loss, and guarantees order: ideal for the web, SSH, or file transfer. UDP sends datagrams without a heavy connection or strict guarantees: great for DNS, streaming, or online games where speed beats costly retransmission. Neither is “always better”: the right choice depends on the service and what you tolerate when packets are lost.",
        },
        bullets: [
          {
            fr: "TCP : connexion, retransmission, ordre (HTTP, SSH, HTTPS).",
            en: "TCP: connection, retransmission, ordering (HTTP, SSH, HTTPS).",
          },
          {
            fr: "UDP : léger, sans connexion (DNS, streaming, jeux).",
            en: "UDP: lightweight, connectionless (DNS, streaming, games).",
          },
          {
            fr: "Le choix dépend du service, pas d'une règle « TCP toujours ».",
            en: "The choice depends on the service, not a “TCP always” rule.",
          },
        ],
        callout: {
          fr: "Astuce : demande « faut-il retransmettre ou aller vite ? »",
          en: "Tip: ask “must we retransmit, or go fast?”",
        },
        calloutKind: "tip",
        analogy: {
          fr: "TCP = appel téléphonique confirmé · UDP = message lancé sans accusé de réception.",
          en: "TCP = confirmed phone call · UDP = message sent without read receipt.",
        },
      },
      {
        id: "net-ports-s3",
        diagram: "ports-map",
        title: {
          fr: "Ports à connaître",
          en: "Ports to know",
        },
        body: {
          fr: "Quelques numéros reviennent partout en administration système et en cybersécurité de base. Les ports « bien connus » vont de 0 à 1023 et sont associés à des services standards. Les ports enregistrés (1024 à 49151) et dynamiques (49152 à 65535) servent aux applications ou aux sessions clientes temporaires. Commence par maîtriser le noyau dur : 22 (SSH), 53 (DNS), 80 (HTTP) et 443 (HTTPS). Ensuite, ajoute messagerie, bureau à distance et bases de données selon ton contexte.",
          en: "A few numbers show up everywhere in system administration and basic security. Well-known ports range from 0 to 1023 and map to standard services. Registered ports (1024 to 49151) and dynamic ports (49152 to 65535) serve apps or temporary client sessions. Start by mastering the core set: 22 (SSH), 53 (DNS), 80 (HTTP), and 443 (HTTPS). Then add mail, remote desktop, and databases for your context.",
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
          {
            fr: "3306 : MySQL · 5432 : PostgreSQL (bases courantes)",
            en: "3306: MySQL · 5432: PostgreSQL (common databases)",
          },
        ],
        callout: {
          fr: "Attention : un port « connu » n'est pas magiquement sécurisé.",
          en: "Watch out: a “well-known” port is not magically secure.",
        },
        calloutKind: "warning",
      },
      {
        id: "net-ports-s4",
        title: {
          fr: "Pare-feu et ports",
          en: "Firewalls and ports",
        },
        body: {
          fr: "Un pare-feu autorise ou bloque le trafic selon des critères : adresse source, adresse destination, protocole (TCP/UDP) et numéro de port. Savoir quel service écoute où t'aide à ouvrir le minimum nécessaire et à comprendre pourquoi une connexion échoue. Par défaut, beaucoup de pare-feu bloquent l'entrant non sollicité tout en laissant sortir les requêtes initiées depuis le LAN. Chaque port ouvert vers Internet est une surface d'exposition : ouvre seulement ce dont tu as vraiment besoin.",
          en: "A firewall allows or blocks traffic by criteria: source address, destination address, protocol (TCP/UDP), and port number. Knowing which service listens where helps you open only what is needed and understand why a connection fails. By default, many firewalls block unsolicited inbound traffic while letting outbound requests from the LAN pass. Each port open to the Internet is exposure surface: open only what you truly need.",
        },
        bullets: [
          {
            fr: "Règle typique : ALLOW TCP 443 depuis Internet vers le serveur web.",
            en: "Typical rule: ALLOW TCP 443 from Internet to the web server.",
          },
          {
            fr: "DENY par défaut sur l'entrant, ALLOW sur le sortant initié.",
            en: "DENY by default on inbound, ALLOW on initiated outbound.",
          },
          {
            fr: "Restreindre SSH (22) à ton IP admin, jamais à tout Internet.",
            en: "Restrict SSH (22) to your admin IP, never to all of the Internet.",
          },
        ],
        callout: {
          fr: "Astuce : avant d'ouvrir un port, demande « qui en a besoin, et depuis où ? »",
          en: "Tip: before opening a port, ask “who needs it, and from where?”",
        },
        calloutKind: "tip",
        miniExercise: {
          prompt: {
            fr: "Une règle « ALLOW inbound TCP 443 » suffit-elle pour SSH distant ?",
            en: "Does an “ALLOW inbound TCP 443” rule cover remote SSH?",
          },
          hint: {
            fr: "SSH utilise 22/TCP, pas 443.",
            en: "SSH uses 22/TCP, not 443.",
          },
        },
      },
      {
        id: "net-ports-s5",
        title: {
          fr: "Analogie : immeuble et appartements",
          en: "Analogy: building and apartments",
        },
        body: {
          fr: "L'adresse IP est l'immeuble : elle indique où livrer le colis. Le port est le numéro d'appartement : il précise quel service doit recevoir le paquet à l'intérieur. Le protocole TCP ou UDP, c'est le type de livraison (avec confirmation ou en express). Sans le numéro d'appartement, le facteur (réseau) ne sait pas si tu voulais parler au web, au SSH ou au DNS. Cette image reste utile quand tu lis un log ou une règle pare-feu : tu cherches toujours le bon appartement.",
          en: "The IP address is the building: it shows where to deliver the package. The port is the apartment number: it specifies which service should receive the packet inside. The TCP or UDP protocol is the delivery style (with confirmation or express). Without the apartment number, the carrier (network) does not know whether you meant the web, SSH, or DNS. This picture stays useful when you read a log or firewall rule: you are always looking for the right apartment.",
        },
        bullets: [
          {
            fr: "IP = immeuble (où se trouve la machine).",
            en: "IP = building (where the machine is).",
          },
          {
            fr: "Port = appartement (quel service à l'intérieur).",
            en: "Port = apartment (which service inside).",
          },
          {
            fr: "TCP/UDP = style de livraison (fiable ou rapide).",
            en: "TCP/UDP = delivery style (reliable or fast).",
          },
        ],
        callout: {
          fr: "Clé : sans port, le colis arrive au bâtiment mais pas au bon service.",
          en: "Key: without a port, the package reaches the building but not the right service.",
        },
        calloutKind: "key",
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
          fr: "Le matin, tu ouvres un site en HTTPS : ton navigateur contacte le serveur sur 443/TCP. Avant cela, le système a souvent résolu le nom de domaine via DNS, typiquement en 53/UDP. L'après-midi, tu te connectes en SSH à un serveur distant sur 22/TCP. Même machine distante, plusieurs services, plusieurs ports. Chaque flux reste indépendant grâce aux numéros de port, côté serveur et côté client (ports éphémères pour tes applications locales).",
          en: "In the morning, you open a site over HTTPS: your browser contacts the server on 443/TCP. Before that, the system often resolved the domain name via DNS, typically on 53/UDP. In the afternoon, you SSH to a remote server on 22/TCP. Same remote machine, many services, many ports. Each flow stays independent thanks to port numbers, on the server and on the client (ephemeral ports for your local apps).",
        },
        bullets: [
          {
            fr: "443/TCP → HTTPS (web chiffré)",
            en: "443/TCP → HTTPS (encrypted web)",
          },
          {
            fr: "53/UDP → DNS (résolution de noms)",
            en: "53/UDP → DNS (name resolution)",
          },
          {
            fr: "22/TCP → SSH (administration distante)",
            en: "22/TCP → SSH (remote administration)",
          },
        ],
        callout: {
          fr: "Attention : le client utilise aussi un port source, souvent temporaire.",
          en: "Watch out: the client also uses a source port, often temporary.",
        },
        calloutKind: "warning",
      },
      {
        id: "net-ports-s7",
        title: {
          fr: "Erreur fréquente",
          en: "Common mistake",
        },
        body: {
          fr: "Croire que « TCP est toujours mieux » ou que « UDP est inutilisable ». UDP est parfait quand la vitesse compte et qu'une perte ponctuelle est acceptable, comme en visioconférence ou en jeu. Autre erreur : confondre le port 80 (HTTP en clair) et le port 443 (HTTPS chiffré). Ouvrir le port 80 « pour le web » sans HTTPS expose le trafic. Enfin, ouvrir SSH (22) à tout Internet sans restriction multiplie les tentatives d'intrusion.",
          en: "Believing “TCP is always better” or “UDP is useless.” UDP is great when speed matters and occasional loss is OK, as in video calls or gaming. Another mistake: mixing up port 80 (plain HTTP) and port 443 (encrypted HTTPS). Opening port 80 “for the web” without HTTPS exposes traffic. Finally, opening SSH (22) to the whole Internet without limits multiplies intrusion attempts.",
        },
        bullets: [
          {
            fr: "UDP n'est pas « pire » : il est adapté à certains services.",
            en: "UDP is not “worse”: it fits certain services.",
          },
          {
            fr: "80 = HTTP clair · 443 = HTTPS chiffré.",
            en: "80 = plain HTTP · 443 = encrypted HTTPS.",
          },
          {
            fr: "Ouvrir 22/TCP à 0.0.0.0/0 est rarement une bonne idée.",
            en: "Opening 22/TCP to 0.0.0.0/0 is rarely a good idea.",
          },
        ],
        callout: {
          fr: "Erreur : TCP = fiabilité · UDP = légèreté · le bon choix dépend du service.",
          en: "Mistake: TCP = reliability · UDP = lightness · the right choice depends on the service.",
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
        id: "net-ports-s-extra1",
        title: {
          fr: "Scénario : ouvrir un port pour une web app",
          en: "Scenario: opening a port for a web app",
        },
        body: {
          fr: "Tu déploies une application web sur un serveur à l'adresse 203.0.113.10. Les visiteurs doivent y accéder en HTTPS. Quelle règle pare-feu appliquer ? Tu ouvres le port entrant 443/TCP vers ce serveur, et tu laisses fermés 22 (SSH) sauf depuis ton IP admin, 3306 (base de données) et tous les autres ports inutiles. Une règle simple comme « ALLOW inbound TCP 443 to 203.0.113.10 » autorise le trafic HTTPS public sans tout exposer.",
          en: "You deploy a web app on a server at 203.0.113.10. Visitors must reach it over HTTPS. Which firewall rule to apply? You open inbound port 443/TCP to that server, and keep 22 (SSH) closed except from your admin IP, 3306 (database), and all other unused ports shut. A simple rule like “ALLOW inbound TCP 443 to 203.0.113.10” allows public HTTPS traffic without exposing everything.",
        },
        bullets: [
          {
            fr: "Web public → ouvrir 443/TCP (HTTPS), pas 80 seul si possible.",
            en: "Public web → open 443/TCP (HTTPS), not 80 alone if possible.",
          },
          {
            fr: "Admin SSH → 22/TCP restreint à ton IP, jamais « tout le monde ».",
            en: "Admin SSH → 22/TCP restricted to your IP, never “everyone.”",
          },
          {
            fr: "Base de données → 3306 fermé depuis Internet, ouvert en interne seulement.",
            en: "Database → 3306 closed from the Internet, open internally only.",
          },
        ],
        callout: {
          fr: "Clé : ouvre le service public, garde l'admin et la base privés.",
          en: "Key: open the public service, keep admin and database private.",
        },
        calloutKind: "key",
        miniExercise: {
          prompt: {
            fr: "Une règle « DENY inbound TCP 22 from ANY » : peux-tu SSH depuis Internet ?",
            en: "A rule “DENY inbound TCP 22 from ANY”: can you SSH from the Internet?",
          },
          hint: {
            fr: "Si 22 entrant est bloqué pour tous, SSH distant échoue.",
            en: "If inbound 22 is blocked for everyone, remote SSH fails.",
          },
        },
      },
      {
        id: "net-ports-s-extra2",
        title: {
          fr: "Ports serveur vs ports clients",
          en: "Server ports vs client ports",
        },
        body: {
          fr: "Sur un serveur, un service « écoute » en général sur un port fixe et connu (443 pour HTTPS, 22 pour SSH). Sur ton PC, le navigateur ou le client SSH choisit souvent un port source temporaire (éphémère) pour la connexion sortante. Les logs et les outils comme netstat ou ss montrent donc deux ports : destination (service) et source (client). Comprendre cette asymétrie évite de confondre « mon application écoute sur 443 » et « ma connexion sortante part du port 51234 ».",
          en: "On a server, a service usually “listens” on a fixed, well-known port (443 for HTTPS, 22 for SSH). On your PC, the browser or SSH client often picks a temporary (ephemeral) source port for the outbound connection. Logs and tools like netstat or ss therefore show two ports: destination (service) and source (client). Understanding this asymmetry avoids mixing up “my app listens on 443” and “my outbound connection leaves from port 51234.”",
        },
        bullets: [
          {
            fr: "Serveur : port d'écoute stable et documenté.",
            en: "Server: stable, documented listening port.",
          },
          {
            fr: "Client : port source souvent éphémère et dynamique.",
            en: "Client: source port often ephemeral and dynamic.",
          },
          {
            fr: "Les règles pare-feu ciblent surtout le port du service.",
            en: "Firewall rules mostly target the service port.",
          },
        ],
        callout: {
          fr: "Astuce : dans un log, le port destination indique souvent le service visé.",
          en: "Tip: in a log, the destination port often shows the targeted service.",
        },
        calloutKind: "tip",
        analogy: {
          fr: "Serveur = guichet fixe · Client = ticket temporaire au comptoir.",
          en: "Server = fixed counter · Client = temporary ticket at the desk.",
        },
      },
      {
        id: "net-ports-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu sais pourquoi les ports existent, quand choisir TCP ou UDP, et quels numéros revoir en priorité. Tu peux lire une règle pare-feu simple et décider quel port ouvrir pour une web app, sans exposer SSH ni la base de données. C'est la base pour analyser un scan de ports, configurer un serveur ou comprendre pourquoi une connexion est refusée. Garde le fil : IP + port + protocole, et ouvre le minimum.",
          en: "You know why ports exist, when to choose TCP or UDP, and which numbers to review first. You can read a simple firewall rule and decide which port to open for a web app, without exposing SSH or the database. This is the base for analyzing a port scan, configuring a server, or understanding why a connection is refused. Keep the thread: IP + port + protocol, and open the minimum.",
        },
        bullets: [
          {
            fr: "IP + port + protocole = destination précise.",
            en: "IP + port + protocol = precise destination.",
          },
          {
            fr: "TCP fiable · UDP rapide · choix selon le service.",
            en: "TCP reliable · UDP fast · choice depends on service.",
          },
          {
            fr: "Ouvre le minimum de ports, surtout en entrant.",
            en: "Open the minimum ports, especially inbound.",
          },
        ],
        callout: {
          fr: "Astuce : apprends d'abord 22, 53, 80, 443, le reste viendra avec la pratique.",
          en: "Tip: learn 22, 53, 80, 443 first, the rest will come with practice.",
        },
        calloutKind: "tip",
      },
    ],
    vocabulary: [
      {
        term: { fr: "Port", en: "Port" },
        definition: {
          fr: "Numéro (0 à 65535) qui cible un service ou une application sur une machine.",
          en: "Number (0 to 65535) that targets a service or application on a host.",
        },
      },
      {
        term: { fr: "TCP", en: "TCP" },
        definition: {
          fr: "Protocole de transport fiable, orienté connexion, avec retransmission et ordre.",
          en: "Reliable, connection-oriented transport protocol with retransmission and ordering.",
        },
      },
      {
        term: { fr: "UDP", en: "UDP" },
        definition: {
          fr: "Protocole de transport léger, sans connexion ni garantie stricte de livraison.",
          en: "Lightweight, connectionless transport without strict delivery guarantees.",
        },
      },
      {
        term: { fr: "Port bien connu", en: "Well-known port" },
        definition: {
          fr: "Port de 0 à 1023 associé à un service standard (ex. 443 pour HTTPS).",
          en: "Port from 0 to 1023 tied to a standard service (e.g. 443 for HTTPS).",
        },
      },
      {
        term: { fr: "Règle pare-feu", en: "Firewall rule" },
        definition: {
          fr: "Instruction allow/deny filtrant le trafic par IP, protocole et port.",
          en: "Allow/deny instruction filtering traffic by IP, protocol, and port.",
        },
      },
      {
        term: { fr: "Socket", en: "Socket" },
        definition: {
          fr: "Point de communication logique : adresse IP + port + protocole de transport.",
          en: "Logical communication endpoint: IP address + port + transport protocol.",
        },
      },
      {
        term: { fr: "Port éphémère", en: "Ephemeral port" },
        definition: {
          fr: "Port temporaire choisi par le client pour une connexion sortante.",
          en: "Temporary port chosen by the client for an outbound connection.",
        },
      },
      {
        term: { fr: "Handshake TCP", en: "TCP handshake" },
        definition: {
          fr: "Échange initial (SYN, SYN-ACK, ACK) qui établit une session TCP fiable.",
          en: "Initial exchange (SYN, SYN-ACK, ACK) that establishes a reliable TCP session.",
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
          fr: "HTTPS utilise en général le port 443/TCP pour le web chiffré.",
          en: "HTTPS generally uses port 443/TCP for encrypted web traffic.",
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
          fr: "SSH écoute classiquement sur le port 22/TCP pour l'administration distante.",
          en: "SSH classically listens on port 22/TCP for remote administration.",
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
          fr: "UDP est léger et sans garantie lourde de retransmission, ce qui le rend rapide.",
          en: "UDP is lightweight without heavy retransmission guarantees, making it fast.",
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
          fr: "DNS utilise typiquement le port 53, souvent en UDP pour les requêtes simples.",
          en: "DNS typically uses port 53, often UDP for simple queries.",
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
            fr: "Créer du Wi-Fi",
            en: "Create Wi-Fi",
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
          fr: "TCP retransmet les segments perdus et garantit l'ordre, idéal pour le web et SSH.",
          en: "TCP retransmits lost segments and guarantees order, ideal for web and SSH.",
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
          fr: "HTTP utilise souvent le port 80 ; HTTPS chiffré utilise le port 443.",
          en: "HTTP often uses port 80; encrypted HTTPS uses port 443.",
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
          fr: "Filtrer par port cible un service précis sans tout ouvrir sur la machine.",
          en: "Filtering by port targets a specific service without opening everything on the host.",
        },
      },
      {
        id: "net-ports-q8",
        type: "multiple-choice",
        question: {
          fr: "Tu déploies une web app publique en HTTPS. Quel port entrant ouvrir ?",
          en: "You deploy a public web app over HTTPS. Which inbound port to open?",
        },
        options: [
          { fr: "443/TCP", en: "443/TCP" },
          { fr: "22/TCP", en: "22/TCP" },
          { fr: "3306/TCP", en: "3306/TCP" },
          { fr: "53/UDP", en: "53/UDP" },
        ],
        correctAnswer: { fr: "443/TCP", en: "443/TCP" },
        hint: {
          fr: "HTTPS = web chiffré standard.",
          en: "HTTPS = standard encrypted web.",
        },
        explanation: {
          fr: "Une web app HTTPS publique écoute sur 443/TCP. SSH (22) et MySQL (3306) restent fermés depuis Internet.",
          en: "A public HTTPS web app listens on 443/TCP. SSH (22) and MySQL (3306) stay closed from the Internet.",
        },
      },
      {
        id: "net-ports-q9",
        type: "multiple-choice",
        question: {
          fr: "Quelle combinaison forme une destination réseau précise ?",
          en: "Which combination forms a precise network destination?",
        },
        options: [
          {
            fr: "Adresse IP + port + protocole (TCP/UDP)",
            en: "IP address + port + protocol (TCP/UDP)",
          },
          {
            fr: "Nom d'utilisateur + mot de passe seulement",
            en: "Username + password only",
          },
          {
            fr: "Couleur du câble + marque du switch",
            en: "Cable color + switch brand",
          },
          {
            fr: "Adresse MAC seule, sans port",
            en: "MAC address alone, without port",
          },
        ],
        correctAnswer: {
          fr: "Adresse IP + port + protocole (TCP/UDP)",
          en: "IP address + port + protocol (TCP/UDP)",
        },
        hint: {
          fr: "IP = machine, port = service, TCP/UDP = transport.",
          en: "IP = machine, port = service, TCP/UDP = transport.",
        },
        explanation: {
          fr: "Le triplet IP + port + protocole identifie exactement quel service contacter sur quelle machine.",
          en: "The IP + port + protocol triplet exactly identifies which service to reach on which host.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech. Tu enseignes ports courants (22, 53, 80, 443), TCP vs UDP, et la lecture de règles pare-feu simples. Réponds en français avec des exemples concrets (web app, SSH, DNS). Aide l'apprenant à ouvrir le minimum de ports et à distinguer ports serveur et ports clients.",
        en: "You are Nova, a tech tutor. You teach common ports (22, 53, 80, 443), TCP vs UDP, and reading simple firewall rules. Answer in English with concrete examples (web app, SSH, DNS). Help the learner open the minimum ports and distinguish server ports from client ports.",
      },
      introMessage: {
        fr: "Salut ! Ports, protocoles et pare-feu : pose ta question, on décortique ensemble.",
        en: "Hi! Ports, protocols, and firewalls: ask your question and we will unpack it together.",
      },
      topics: [
        { fr: "TCP vs UDP et cas d'usage", en: "TCP vs UDP and use cases" },
        { fr: "Ports 22, 53, 80, 443 et autres", en: "Ports 22, 53, 80, 443 and more" },
        { fr: "Règles pare-feu et web app", en: "Firewall rules and web apps" },
        { fr: "Ports serveur vs ports clients", en: "Server ports vs client ports" },
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
      fr: "Comprendre comment plusieurs appareils du LAN partagent une seule IP publique grâce au NAT, et comment un pare-feu décide ce qui entre ou sort. Tu verras aussi pourquoi ouvrir un port (port forwarding) demande de la prudence au quotidien.",
      en: "Understand how many LAN devices share one public IP through NAT, and how a firewall decides what enters or leaves. You will also see why opening a port (port forwarding) needs everyday caution.",
    },
    icon: "shield",
    estimatedMinutes: 21,
    xpReward: 27,
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
        xpReward: 7,
      },
      {
        description: {
          fr: "Évaluer les risques d'un port forwarding domestique",
          en: "Assess the risks of home port forwarding",
        },
        xpReward: 6,
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
          fr: "Chez toi, plusieurs appareils ont des IP privées (téléphone, PC, TV, imprimante). Sur Internet, ton FAI te donne souvent une seule IP publique. Sans traduction, chaque appareil devrait avoir sa propre adresse routable, ce qui est rare et coûteux avec IPv4. Il faut donc un mécanisme pour partager cette porte de sortie unique tout en sachant à qui renvoyer les réponses. C'est exactement le problème que le NAT résout sur la box ou le routeur domestique, jour après jour, sans que tu y penses.",
          en: "At home, many devices have private IPs (phone, PC, TV, printer). On the Internet, your ISP often gives one public IP. Without translation, each device would need its own routable address, which is rare and costly with IPv4. You therefore need a mechanism to share that single exit door while still knowing who should get the replies. That is exactly the problem NAT solves on the home gateway or router, day after day, without you thinking about it.",
        },
        bullets: [
          {
            fr: "IP privée : visible seulement sur le LAN.",
            en: "Private IP: visible only on the LAN.",
          },
          {
            fr: "IP publique : visible depuis Internet.",
            en: "Public IP: visible from the Internet.",
          },
          {
            fr: "Une seule sortie publique pour plusieurs hôtes privés.",
            en: "One public exit for many private hosts.",
          },
        ],
        callout: {
          fr: "Clé : sans partage d'adresse, le LAN moderne ne tiendrait pas avec IPv4.",
          en: "Key: without address sharing, a modern LAN would not scale on IPv4.",
        },
        calloutKind: "key",
        analogy: {
          fr: "Plusieurs appartements, une seule adresse postale visible de la rue.",
          en: "Many apartments, one street address visible from outside.",
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
          fr: "Le NAT (Network Address Translation) sur le routeur traduit les adresses privées du LAN vers l'IP publique à la sortie, puis inverse le processus pour les réponses. Le routeur tient une table de sessions : il sait qu'un paquet entrant sur le port public 54321 correspond à la requête du téléphone 192.168.1.42. Sans cette mémoire courte, Internet ne pourrait pas renvoyer le trafic au bon appareil derrière la box. En pratique, NAT et filtrage cohabitent souvent dans le même boîtier.",
          en: "NAT (Network Address Translation) on the router translates private LAN addresses to the public IP on the way out, then reverses the process for replies. The router keeps a session table: it knows a packet arriving on public port 54321 matches the request from phone 192.168.1.42. Without that short-lived memory, the Internet could not return traffic to the right device behind the gateway. In practice, NAT and filtering often live together in the same box.",
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
          {
            fr: "Table de sessions : associe chaque flux sortant à un hôte privé",
            en: "Session table: maps each outbound flow to a private host",
          },
        ],
        callout: {
          fr: "Astuce : le diagramme montre la traduction, pas une sécurité magique.",
          en: "Tip: the diagram shows translation, not magical security.",
        },
        calloutKind: "tip",
      },
      {
        id: "net-nat-s3",
        diagram: "nat-firewall",
        title: {
          fr: "Pare-feu basique",
          en: "Basic firewall",
        },
        body: {
          fr: "Un pare-feu filtre selon des règles explicites : autoriser ou refuser selon source, destination, protocole (TCP/UDP) et port. Sur une box, le trafic entrant non sollicité est souvent bloqué par défaut : si personne sur le LAN n'a initié la connexion, la sonde externe est rejetée. Le trafic sortant initié depuis le LAN est en général autorisé. NAT et pare-feu travaillent côte à côte : l'un traduit les adresses, l'autre décide ce qui passe. Les confondre mène à de mauvaises décisions de sécurité.",
          en: "A firewall filters by explicit rules: allow or deny by source, destination, protocol (TCP/UDP), and port. On a home gateway, unsolicited inbound traffic is often blocked by default: if nobody on the LAN started the connection, the external probe is rejected. Outbound traffic initiated from the LAN is usually allowed. NAT and firewall work side by side: one translates addresses, the other decides what passes. Mixing them up leads to poor security decisions.",
        },
        bullets: [
          {
            fr: "Trafic entrant non demandé → souvent bloqué (DENY).",
            en: "Unsolicited inbound traffic → often blocked (DENY).",
          },
          {
            fr: "Trafic sortant initié par le LAN → souvent autorisé (ALLOW).",
            en: "Outbound traffic initiated by the LAN → often allowed (ALLOW).",
          },
          {
            fr: "Règles basées sur IP, protocole et port.",
            en: "Rules based on IP, protocol, and port.",
          },
        ],
        callout: {
          fr: "Attention : NAT ≠ sécurité complète, même s'il masque les IP internes.",
          en: "Watch out: NAT ≠ full security, even though it hides internal IPs.",
        },
        calloutKind: "warning",
        miniExercise: {
          prompt: {
            fr: "Une sonde externe frappe un port que tu n'as pas ouvert. Que fait souvent la box ?",
            en: "An external probe hits a port you did not open. What does the gateway often do?",
          },
          hint: {
            fr: "Trafic entrant non sollicité → en général DENY.",
            en: "Unsolicited inbound traffic → usually DENY.",
          },
        },
      },
      {
        id: "net-nat-s4",
        title: {
          fr: "Bonnes pratiques simples",
          en: "Simple best practices",
        },
        body: {
          fr: "Ouvre seulement les ports nécessaires via la redirection (port forwarding) et fais-le avec prudence. Garde le firmware de la box à jour pour corriger les failles connues. Active un Wi-Fi invité séparé si possible, pour isoler les appareils des visiteurs. Comprendre NAT et pare-feu, c'est déjà mieux protéger ton LAN sans installer une usine à gaz. Chaque port ouvert vers l'extérieur est une invitation potentielle à scanner ton réseau. Moins tu exposes, plus tu réduis ta surface d'attaque.",
          en: "Open only needed ports via redirection (port forwarding) and do it carefully. Keep gateway firmware updated to patch known flaws. Enable a separate guest Wi-Fi if possible to isolate visitor devices. Understanding NAT and firewalls already helps protect your LAN without overengineering. Each port opened outward is a potential invitation to scan your network. The less you expose, the smaller your attack surface.",
        },
        bullets: [
          {
            fr: "Port forwarding = exposition volontaire d'un service interne.",
            en: "Port forwarding = deliberate exposure of an internal service.",
          },
          {
            fr: "Firmware à jour · Wi-Fi invité · mots de passe forts.",
            en: "Updated firmware · guest Wi-Fi · strong passwords.",
          },
          {
            fr: "Ouvre le minimum : chaque port compte dans la surface d'attaque.",
            en: "Open the minimum: each port counts toward the attack surface.",
          },
        ],
        callout: {
          fr: "Astuce : avant d'ouvrir un port, demande « qui en a vraiment besoin, et depuis où ? »",
          en: "Tip: before opening a port, ask “who truly needs it, and from where?”",
        },
        calloutKind: "tip",
        miniExercise: {
          prompt: {
            fr: "Cite deux gestes concrets pour réduire l'exposition de ta box.",
            en: "Name two concrete steps to reduce your gateway's exposure.",
          },
          hint: {
            fr: "Firmware, Wi-Fi invité, moins de ports ouverts…",
            en: "Firmware, guest Wi-Fi, fewer open ports…",
          },
        },
      },
      {
        id: "net-nat-s5",
        title: {
          fr: "Analogie : réception d'hôtel",
          en: "Analogy: hotel front desk",
        },
        body: {
          fr: "Les chambres ont des numéros internes (IP privées). L'extérieur ne connaît que l'adresse de l'hôtel (IP publique). La réception (NAT) traduit les appels sortants et sait à quelle chambre renvoyer les réponses. Le garde (pare-feu) décide qui peut entrer depuis la rue : un visiteur non attendu est refusé, sauf si une règle explicite l'autorise. Le port forwarding, c'est réserver une ligne directe vers une chambre précise. Comprendre cette image t'aide à expliquer NAT et filtrage sans jargon inutile.",
          en: "Rooms have internal numbers (private IPs). Outside only knows the hotel address (public IP). The front desk (NAT) translates outbound calls and knows which room to reach for replies. The guard (firewall) decides who may enter from the street: an unexpected visitor is refused unless an explicit rule allows them. Port forwarding is like reserving a direct line to a specific room. This picture helps you explain NAT and filtering without useless jargon.",
        },
        bullets: [
          {
            fr: "Chambre = IP privée · Hôtel = IP publique.",
            en: "Room = private IP · Hotel = public IP.",
          },
          {
            fr: "Réception = NAT qui traduit et suit les sessions.",
            en: "Front desk = NAT that translates and tracks sessions.",
          },
          {
            fr: "Garde = pare-feu qui autorise ou refuse l'entrée.",
            en: "Guard = firewall that allows or denies entry.",
          },
        ],
        analogy: {
          fr: "NAT = réception qui traduit · Pare-feu = règles d'entrée/sortie.",
          en: "NAT = translating front desk · Firewall = entry/exit rules.",
        },
        callout: {
          fr: "Clé : une ligne directe vers une chambre (port forward) change le niveau de risque.",
          en: "Key: a direct line to a room (port forward) changes the risk level.",
        },
        calloutKind: "key",
      },
      {
        id: "net-nat-s6",
        title: {
          fr: "Cas concret : trois téléphones, une box",
          en: "Concrete case: three phones, one gateway",
        },
        body: {
          fr: "Trois téléphones regardent YouTube en même temps. Chacun a une IP privée différente (192.168.1.10, .11, .12). Sur Internet, le service vidéo voit surtout l'IP publique unique de la box. Le NAT crée trois sessions distinctes et suit quel flux vidéo retourne vers quel téléphone grâce aux ports traduits. Sans NAT, il faudrait trois IP publiques pour trois flux simultanés. Ce scénario simple montre pourquoi la table de sessions est indispensable au quotidien.",
          en: "Three phones stream YouTube at once. Each has a different private IP (192.168.1.10, .11, .12). On the Internet, the video service mostly sees the gateway's single public IP. NAT creates three distinct sessions and tracks which video stream returns to which phone via translated ports. Without NAT, you would need three public IPs for three simultaneous streams. This simple scenario shows why the session table is essential every day.",
        },
        bullets: [
          {
            fr: "Sortie : IP privée → IP publique + port traduit",
            en: "Outbound: private IP → public IP + translated port",
          },
          {
            fr: "Retour : IP publique → le bon hôte privé via la table",
            en: "Return: public IP → correct private host via the table",
          },
          {
            fr: "Plusieurs sessions peuvent partager la même IP publique.",
            en: "Many sessions can share the same public IP.",
          },
        ],
        callout: {
          fr: "Attention : du côté serveur, plusieurs clients peuvent « ressembler » à la même IP.",
          en: "Watch out: on the server side, many clients may “look like” the same IP.",
        },
        calloutKind: "warning",
        miniExercise: {
          prompt: {
            fr: "Deux téléphones streamment. Combien d'IP publiques la box montre-t-elle souvent à YouTube ?",
            en: "Two phones are streaming. How many public IPs does the gateway often show to YouTube?",
          },
          hint: {
            fr: "Une seule IP publique partagée, plusieurs sessions.",
            en: "One shared public IP, many sessions.",
          },
        },
      },
      {
        id: "net-nat-s7",
        title: {
          fr: "Erreur fréquente",
          en: "Common mistake",
        },
        body: {
          fr: "Croire que le NAT remplace un vrai pare-feu, ou ouvrir du port forwarding « pour voir » sans besoin réel. Le NAT aide au partage d'adresse et masque les IP internes, mais la sécurité vient surtout des règles de filtrage et d'une surface d'attaque minimale. Ouvrir le port 445 ou 3389 vers un NAS ou un PC sans protection forte expose ton réseau à des scans automatiques du monde entier. Traduire n'est pas filtrer : garde les deux idées séparées.",
          en: "Believing NAT replaces a real firewall, or opening port forwarding “just to see” with no real need. NAT helps share an address and hides internal IPs, but security mostly comes from filtering rules and a minimal attack surface. Opening port 445 or 3389 to a NAS or PC without strong protection exposes your network to automated scans worldwide. Translating is not filtering: keep both ideas separate.",
        },
        bullets: [
          {
            fr: "NAT masque et partage : ce n'est pas un filtre de règles.",
            en: "NAT hides and shares: it is not a rule filter.",
          },
          {
            fr: "Port forward « pour tester » élargit la surface d'attaque.",
            en: "Port forward “just to test” widens the attack surface.",
          },
          {
            fr: "Ports sensibles (445, 3389…) méritent une prudence extrême.",
            en: "Sensitive ports (445, 3389…) deserve extreme caution.",
          },
        ],
        callout: {
          fr: "Erreur : NAT masque · Pare-feu filtre · Port forward = exposition volontaire.",
          en: "Mistake: NAT hides · Firewall filters · Port forward = deliberate exposure.",
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
        id: "net-nat-s-extra1",
        title: {
          fr: "Scénario : exposer un NAS domestique",
          en: "Scenario: exposing a home NAS",
        },
        body: {
          fr: "Tu possèdes un NAS (stockage réseau) en 192.168.1.50 et tu veux y accéder depuis l'extérieur. Tu configures un port forwarding : port public 5000/TCP vers 192.168.1.50:5000. Désormais, n'importe qui sur Internet peut tenter de se connecter via ton IP publique. Risques : brute force sur les identifiants, faille non patchée du firmware NAS, données personnelles exposées. Alternatives plus sûres : VPN vers le LAN, tunnel sécurisé, ou accès via un relais chiffré plutôt qu'un port ouvert en brut.",
          en: "You own a NAS (network storage) at 192.168.1.50 and want remote access. You set port forwarding: public port 5000/TCP to 192.168.1.50:5000. Now anyone on the Internet can try to connect via your public IP. Risks: credential brute force, unpatched NAS firmware flaw, personal data exposed. Safer alternatives: VPN into the LAN, secure tunnel, or encrypted relay access rather than a raw open port.",
        },
        bullets: [
          {
            fr: "Port forwarding NAS = ton stockage devient joignable depuis Internet.",
            en: "NAS port forwarding = your storage becomes reachable from the Internet.",
          },
          {
            fr: "Scans automatiques testent les ports ouverts 24h/24.",
            en: "Automated scans probe open ports 24/7.",
          },
          {
            fr: "Préfère VPN ou accès chiffré plutôt qu'un port ouvert en clair.",
            en: "Prefer VPN or encrypted access over a raw open port.",
          },
        ],
        callout: {
          fr: "Attention : si tu ouvres un port, mets à jour le firmware et change les mots de passe par défaut.",
          en: "Watch out: if you open a port, update firmware and change default passwords.",
        },
        calloutKind: "warning",
        miniExercise: {
          prompt: {
            fr: "Ton voisin a ouvert tous les ports de sa box pour son NAS. Que lui réponds-tu ?",
            en: "Your neighbor opened all gateway ports for their NAS. What do you reply?",
          },
          hint: {
            fr: "Ouvrir tout = surface d'attaque maximale. Préfère le minimum ou un VPN.",
            en: "Opening everything = maximum attack surface. Prefer the minimum or a VPN.",
          },
        },
      },
      {
        id: "net-nat-s-extra2",
        title: {
          fr: "Lire une règle simple sur la box",
          en: "Reading a simple gateway rule",
        },
        body: {
          fr: "Dans l'interface admin, une règle ressemble souvent à : ALLOW TCP 443 depuis Internet vers 192.168.1.10, ou DENY tout le reste en entrant. Lis dans l'ordre : action (ALLOW/DENY), protocole, port, source, destination. Une règle trop large (ALLOW ANY ANY) expose beaucoup plus qu'une règle ciblée. Le NAT peut traduire l'adresse, mais c'est encore la règle de pare-feu qui autorise ou refuse le flux. Apprendre à lire ces lignes te prépare à administrer un réseau sans cliquer au hasard.",
          en: "In the admin UI, a rule often looks like: ALLOW TCP 443 from Internet to 192.168.1.10, or DENY everything else inbound. Read in order: action (ALLOW/DENY), protocol, port, source, destination. An overly broad rule (ALLOW ANY ANY) exposes far more than a targeted one. NAT may translate the address, but the firewall rule still allows or denies the flow. Learning to read these lines prepares you to administer a network without random clicking.",
        },
        bullets: [
          {
            fr: "Action · protocole · port · source · destination.",
            en: "Action · protocol · port · source · destination.",
          },
          {
            fr: "ALLOW ciblé vaut mieux qu'ALLOW ANY.",
            en: "Targeted ALLOW beats ALLOW ANY.",
          },
          {
            fr: "NAT traduit ; la règle décide encore si le flux passe.",
            en: "NAT translates; the rule still decides whether the flow passes.",
          },
        ],
        callout: {
          fr: "Clé : une règle claire et étroite limite les surprises.",
          en: "Key: a clear, narrow rule limits surprises.",
        },
        calloutKind: "key",
        analogy: {
          fr: "Règle pare-feu = consignes précises au garde de l'hôtel.",
          en: "Firewall rule = precise instructions for the hotel guard.",
        },
      },
      {
        id: "net-nat-s8",
        title: {
          fr: "Résumé",
          en: "Summary",
        },
        body: {
          fr: "Tu sais pourquoi le LAN partage une IP publique via le NAT, comment un pare-feu décide du trafic autorisé, et pourquoi la redirection de ports demande de la prudence. Le NAT masque et partage ; le pare-feu filtre ; le port forwarding expose volontairement. Combine ces trois idées pour protéger ton réseau sans paralysie, mais sans naïveté non plus. Avant d'ouvrir quoi que ce soit, demande qui en a vraiment besoin.",
          en: "You know why a LAN shares a public IP via NAT, how a firewall decides allowed traffic, and why port forwarding needs caution. NAT hides and shares; the firewall filters; port forwarding deliberately exposes. Combine these three ideas to protect your network without paralysis, but without naivety either. Before opening anything, ask who truly needs it.",
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
      {
        term: { fr: "Table de sessions", en: "Session table" },
        definition: {
          fr: "Registre du routeur qui associe chaque flux NAT à un hôte privé.",
          en: "Router registry mapping each NAT flow to a private host.",
        },
      },
      {
        term: { fr: "Surface d'attaque", en: "Attack surface" },
        definition: {
          fr: "Ensemble des points par lesquels un attaquant peut tenter d'accéder au réseau.",
          en: "Set of points through which an attacker may try to reach the network.",
        },
      },
      {
        term: { fr: "IP privée", en: "Private IP" },
        definition: {
          fr: "Adresse réservée au LAN (ex. 192.168.x.x), non routable sur Internet public.",
          en: "Address reserved for the LAN (e.g. 192.168.x.x), not routable on the public Internet.",
        },
      },
      {
        term: { fr: "IP publique", en: "Public IP" },
        definition: {
          fr: "Adresse visible sur Internet, souvent celle de ta box côté FAI.",
          en: "Address visible on the Internet, often your gateway’s ISP-facing address.",
        },
      },
      {
        term: { fr: "DMZ", en: "DMZ" },
        definition: {
          fr: "Zone exposée volontairement (souvent un hôte) entre Internet et le LAN interne.",
          en: "Deliberately exposed zone (often a host) between the Internet and the internal LAN.",
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
            fr: "Remplacer le Wi-Fi",
            en: "Replace Wi-Fi",
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
          fr: "Le NAT traduit le LAN privé vers l'IP publique pour que plusieurs hôtes partagent une sortie Internet.",
          en: "NAT translates the private LAN to the public IP so many hosts share one Internet exit.",
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
          fr: "Le routeur domestique ou la box FAI effectue typiquement le NAT entre LAN et Internet.",
          en: "The home router or ISP gateway typically performs NAT between LAN and Internet.",
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
          fr: "Autoriser ou refuser selon des critères précis.",
          en: "Allow or deny by specific criteria.",
        },
        explanation: {
          fr: "Les règles pare-feu décident ce qui passe selon source, destination, protocole et port.",
          en: "Firewall rules decide what passes by source, destination, protocol, and port.",
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
          fr: "N'ouvre que le minimum requis : chaque port forward expose un service interne à Internet.",
          en: "Open only the minimum required: each port forward exposes an internal service to the Internet.",
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
            fr: "Oui, car il crée du Wi-Fi",
            en: "Yes, because it creates Wi-Fi",
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
          fr: "Le NAT partage et masque des adresses ; le pare-feu autorise ou bloque selon des règles.",
          en: "NAT shares and hides addresses; the firewall allows or blocks by rules.",
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
          fr: "Le NAT permet à plusieurs hôtes privés d'utiliser une seule IP publique vers Internet.",
          en: "NAT lets many private hosts use one public IP toward the Internet.",
        },
      },
      {
        id: "net-nat-q7",
        type: "multiple-choice",
        question: {
          fr: "Le trafic entrant non sollicité est souvent…",
          en: "Unsolicited inbound traffic is often…",
        },
        options: [
          {
            fr: "Bloqué par défaut sur une box domestique",
            en: "Blocked by default on a home gateway",
          },
          {
            fr: "Toujours autorisé sans limite",
            en: "Always allowed without limit",
          },
          {
            fr: "Ignoré car invisible",
            en: "Ignored because invisible",
          },
          {
            fr: "Converti automatiquement en Wi-Fi",
            en: "Automatically converted to Wi-Fi",
          },
        ],
        correctAnswer: {
          fr: "Bloqué par défaut sur une box domestique",
          en: "Blocked by default on a home gateway",
        },
        hint: {
          fr: "Si personne sur le LAN n'a demandé la connexion…",
          en: "If nobody on the LAN requested the connection…",
        },
        explanation: {
          fr: "Les box bloquent en général le trafic entrant non demandé, sauf règle ou port forwarding explicite.",
          en: "Gateways generally block unsolicited inbound traffic unless an explicit rule or port forward exists.",
        },
      },
      {
        id: "net-nat-q8",
        type: "multiple-choice",
        question: {
          fr: "Tu ouvres le port 5000 vers ton NAS domestique. Quel risque principal ?",
          en: "You open port 5000 to your home NAS. What is the main risk?",
        },
        options: [
          {
            fr: "Ton NAS devient accessible depuis Internet et peut être scanné ou attaqué",
            en: "Your NAS becomes reachable from the Internet and can be scanned or attacked",
          },
          {
            fr: "Le Wi-Fi s'éteint automatiquement",
            en: "Wi-Fi turns off automatically",
          },
          {
            fr: "Toutes les IP privées deviennent publiques",
            en: "All private IPs become public",
          },
          {
            fr: "Le NAT cesse de fonctionner",
            en: "NAT stops working",
          },
        ],
        correctAnswer: {
          fr: "Ton NAS devient accessible depuis Internet et peut être scanné ou attaqué",
          en: "Your NAS becomes reachable from the Internet and can be scanned or attacked",
        },
        hint: {
          fr: "Port forwarding = exposition volontaire d'un service interne.",
          en: "Port forwarding = deliberate exposure of an internal service.",
        },
        explanation: {
          fr: "Ouvrir un port vers un NAS expose ton stockage aux scans et tentatives d'intrusion depuis Internet.",
          en: "Opening a port to a NAS exposes your storage to scans and intrusion attempts from the Internet.",
        },
      },
      {
        id: "net-nat-q9",
        type: "multiple-choice",
        question: {
          fr: "Quelle est une alternative plus sûre que le port forwarding pour accéder à un NAS hors de chez toi ?",
          en: "What is a safer alternative than port forwarding to reach a home NAS remotely?",
        },
        options: [
          {
            fr: "Un VPN vers le LAN, puis accès local au NAS",
            en: "A VPN into the LAN, then local access to the NAS",
          },
          {
            fr: "Ouvrir tous les ports de 1 à 65535",
            en: "Open every port from 1 to 65535",
          },
          {
            fr: "Désactiver entièrement le pare-feu",
            en: "Disable the firewall entirely",
          },
          {
            fr: "Publier le mot de passe admin sur un forum",
            en: "Publish the admin password on a forum",
          },
        ],
        correctAnswer: {
          fr: "Un VPN vers le LAN, puis accès local au NAS",
          en: "A VPN into the LAN, then local access to the NAS",
        },
        hint: {
          fr: "Tu te reconnectes d'abord au réseau privé, sans exposer le service.",
          en: "You first rejoin the private network without exposing the service.",
        },
        explanation: {
          fr: "Un VPN te place dans le LAN ; le NAS reste non exposé directement sur Internet.",
          en: "A VPN places you on the LAN; the NAS stays unexposed directly on the Internet.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice tech bienveillante. Tu expliques NAT, pare-feu et port forwarding de façon simple, sans alarmisme. Tu distingues traduction d'adresses et filtrage, et tu mets en garde sur l'exposition d'un NAS. Réponds en français avec des exemples concrets maison.",
        en: "You are Nova, a friendly tech tutor. You explain NAT, firewalls, and port forwarding simply, without alarmism. You distinguish address translation from filtering, and you warn about exposing a NAS. Answer in English with concrete home examples.",
      },
      introMessage: {
        fr: "Salut ! NAT, pare-feu et port forwarding : je suis là pour clarifier, surtout les risques quand on expose un service du LAN.",
        en: "Hi! NAT, firewalls, and port forwarding: I'm here to clarify, especially the risks when you expose a LAN service.",
      },
      topics: [
        { fr: "Fonctionnement du NAT et table de sessions", en: "How NAT works and session table" },
        { fr: "Règles de pare-feu entrant/sortant", en: "Inbound/outbound firewall rules" },
        { fr: "Port forwarding prudent et alternatives VPN", en: "Careful port forwarding and VPN alternatives" },
      ],
    },
  }

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
