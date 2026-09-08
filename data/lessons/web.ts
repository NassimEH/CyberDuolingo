import type { Lesson } from "@/types/learning";

export const WEB_LESSONS: Lesson[] = [
  // ─── web-fundamentals ───────────────────────────────────────────
  {
    id: "web-internet-vs-web",
    unitId: "web-fundamentals",
    title: {
      fr: "Internet vs Web",
      en: "Internet vs the Web",
    },
    description: {
      fr: "Distinguer le réseau Internet des services du World Wide Web.",
      en: "Distinguish the Internet network from World Wide Web services.",
    },
    icon: "globe",
    estimatedMinutes: 16,
    xpReward: 22,
    goals: [
      {
        description: {
          fr: "Définir Internet et le Web comme deux concepts distincts",
          en: "Define the Internet and the Web as two distinct concepts",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Citer des services Internet qui ne sont pas du Web",
          en: "List Internet services that are not the Web",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Expliquer le rôle des navigateurs et des pages HTML",
          en: "Explain the role of browsers and HTML pages",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-internet-vs-web-s1",
        title: { fr: "Deux idées souvent confondues", en: "Two ideas often mixed up" },
        body: {
          fr: "Beaucoup de gens disent « Internet » pour parler d’un site web. En réalité, Internet est l’infrastructure mondiale de réseaux interconnectés. Le Web est un service qui circule sur cette infrastructure, aux côtés d’autres usages comme le mail ou le streaming.",
          en: "Many people say “Internet” when they mean a website. In reality, the Internet is the global infrastructure of interconnected networks. The Web is one service that runs on that infrastructure, alongside others like email or streaming.",
        },
        callout: {
          fr: "Internet = routes et câbles. Web = pages et liens que tu ouvres dans un navigateur.",
          en: "Internet = routes and cables. Web = pages and links you open in a browser.",
        },
        calloutKind: "key",
      },
      {
        id: "web-internet-vs-web-s2",
        title: { fr: "Internet : le réseau des réseaux", en: "Internet: the network of networks" },
        body: {
          fr: "Internet relie des millions de réseaux privés, d’entreprises et d’opérateurs. Les paquets IP voyagent de machine en machine grâce à des protocoles communs. Sans ce socle, aucun site, aucun message, aucun appel VoIP ne pourrait traverser la planète.",
          en: "The Internet connects millions of private, enterprise, and carrier networks. IP packets travel from machine to machine thanks to shared protocols. Without that foundation, no site, message, or VoIP call could cross the planet.",
        },
        bullets: [
          {
            fr: "Couche physique : fibre, cuivre, radio, satellite.",
            en: "Physical layer: fiber, copper, radio, satellite.",
          },
          {
            fr: "Adressage IP pour identifier les machines.",
            en: "IP addressing to identify machines.",
          },
          {
            fr: "Routage pour choisir le chemin des paquets.",
            en: "Routing to choose packet paths.",
          },
        ],
        diagram: "lan-wan",
      },
      {
        id: "web-internet-vs-web-s3",
        title: { fr: "Le Web : documents liés", en: "The Web: linked documents" },
        body: {
          fr: "Le World Wide Web a été inventé pour partager des documents via des hyperliens. Une page HTML peut pointer vers d’autres pages, images ou APIs. Le navigateur récupère ces ressources via HTTP(S) et les affiche.",
          en: "The World Wide Web was invented to share documents through hyperlinks. An HTML page can point to other pages, images, or APIs. The browser fetches those resources over HTTP(S) and displays them.",
        },
        analogy: {
          fr: "Internet est le système routier ; le Web est le réseau de bibliothèques reliées par des panneaux indicateurs (les liens).",
          en: "The Internet is the road system; the Web is a network of libraries connected by road signs (the links).",
        },
      },
      {
        id: "web-internet-vs-web-s4",
        title: { fr: "Autres services sur Internet", en: "Other services on the Internet" },
        body: {
          fr: "Tout ce qui passe par Internet n’est pas du Web. Email (SMTP/IMAP), SSH, FTP, jeux en ligne, DNS et VPN utilisent Internet sans être des « pages web » au sens HTML/HTTP classique.",
          en: "Not everything that travels the Internet is the Web. Email (SMTP/IMAP), SSH, FTP, online games, DNS, and VPNs use the Internet without being “web pages” in the classic HTML/HTTP sense.",
        },
        bullets: [
          { fr: "Email : échange de messages.", en: "Email: exchanging messages." },
          { fr: "SSH : administration distante sécurisée.", en: "SSH: secure remote administration." },
          { fr: "Streaming vidéo : flux dédiés, pas seulement du HTML.", en: "Video streaming: dedicated streams, not just HTML." },
        ],
        callout: {
          fr: "Dire « j’ai envoyé un mail sur le Web » est imprécis : le mail utilise Internet, pas forcément le Web.",
          en: "Saying “I sent an email on the Web” is imprecise: email uses the Internet, not necessarily the Web.",
        },
        calloutKind: "mistake",
      },
      {
        id: "web-internet-vs-web-s5",
        title: { fr: "Le navigateur, client du Web", en: "The browser, Web client" },
        body: {
          fr: "Chrome, Firefox, Safari ou Edge sont des clients HTTP. Ils demandent des URLs, interprètent HTML/CSS/JS et gèrent cookies, cache et certificats. Sans navigateur (ou outil équivalent), le Web reste inaccessible à un humain.",
          en: "Chrome, Firefox, Safari, or Edge are HTTP clients. They request URLs, interpret HTML/CSS/JS, and manage cookies, cache, and certificates. Without a browser (or equivalent tool), the Web stays unreachable for a human.",
        },
        diagram: "client-server-web",
      },
      {
        id: "web-internet-vs-web-s6",
        title: { fr: "Pourquoi la distinction compte", en: "Why the distinction matters" },
        body: {
          fr: "En tech, confondre Internet et Web mène à de mauvaises analyses : un panne DNS n’est pas « le Web cassé », et sécuriser un site n’équivaut pas à sécuriser tout Internet. Clarifier les couches aide à debuguer et à communiquer.",
          en: "In tech, mixing up Internet and Web leads to bad analysis: a DNS outage isn’t “the Web broken,” and securing a site isn’t securing the whole Internet. Clarifying layers helps you debug and communicate.",
        },
        callout: {
          fr: "Quand un site ne charge pas, demande-toi : DNS, réseau, serveur HTTP, ou bug frontend ?",
          en: "When a site won’t load, ask: DNS, network, HTTP server, or frontend bug?",
        },
        calloutKind: "tip",
      },
      {
        id: "web-internet-vs-web-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Classe mentalement ces usages : ouvrir youtube.com, envoyer un mail Outlook, te connecter en SSH à un VPS, jouer à un jeu en UDP.",
          en: "Mentally classify these uses: open youtube.com, send Outlook email, SSH into a VPS, play a UDP game.",
        },
        miniExercise: {
          prompt: {
            fr: "Lesquels sont clairement du Web ? Lesquels utilisent Internet sans être du Web ?",
            en: "Which are clearly the Web? Which use the Internet without being the Web?",
          },
          hint: {
            fr: "Le Web repose surtout sur HTTP(S) + HTML dans un navigateur.",
            en: "The Web mostly relies on HTTP(S) + HTML in a browser.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Internet", en: "Internet" },
        definition: {
          fr: "Réseau mondial interconnecté qui transporte des paquets IP.",
          en: "Global interconnected network that carries IP packets.",
        },
      },
      {
        term: { fr: "Web (WWW)", en: "Web (WWW)" },
        definition: {
          fr: "Système de documents hyperliés accessibles via HTTP(S).",
          en: "System of hyperlinked documents accessed via HTTP(S).",
        },
      },
      {
        term: { fr: "Navigateur", en: "Browser" },
        definition: {
          fr: "Application cliente qui récupère et affiche des pages web.",
          en: "Client application that fetches and displays web pages.",
        },
      },
      {
        term: { fr: "Hyperlien", en: "Hyperlink" },
        definition: {
          fr: "Référence cliquable vers une autre ressource (URL).",
          en: "Clickable reference to another resource (URL).",
        },
      },
      {
        term: { fr: "Protocole", en: "Protocol" },
        definition: {
          fr: "Règles d’échange entre machines (HTTP, SMTP, SSH…).",
          en: "Rules for exchange between machines (HTTP, SMTP, SSH…).",
        },
      },
    ],
    activities: [
      {
        id: "web-internet-vs-web-q1",
        type: "multiple-choice",
        question: {
          fr: "Le World Wide Web est…",
          en: "The World Wide Web is…",
        },
        options: [
          { fr: "Un service utilisant Internet", en: "A service that uses the Internet" },
          { fr: "Le câblage sous-marin uniquement", en: "Only undersea cabling" },
          { fr: "Un synonyme exact d’Internet", en: "An exact synonym of the Internet" },
          { fr: "Un protocole de couche 2", en: "A layer-2 protocol" },
        ],
        correctAnswer: { fr: "Un service utilisant Internet", en: "A service that uses the Internet" },
        hint: { fr: "Pense infrastructure vs application.", en: "Think infrastructure vs application." },
        explanation: {
          fr: "Le Web s’appuie sur Internet (IP, DNS, TCP…) mais n’est qu’un service parmi d’autres.",
          en: "The Web rides on the Internet (IP, DNS, TCP…) but is only one service among others.",
        },
      },
      {
        id: "web-internet-vs-web-q2",
        type: "multiple-choice",
        question: {
          fr: "Lequel n’est PAS typiquement du Web ?",
          en: "Which is NOT typically the Web?",
        },
        options: [
          { fr: "Une session SSH", en: "An SSH session" },
          { fr: "Une page HTML", en: "An HTML page" },
          { fr: "Une API REST en HTTPS", en: "A REST API over HTTPS" },
          { fr: "Un site e-commerce", en: "An e-commerce site" },
        ],
        correctAnswer: { fr: "Une session SSH", en: "An SSH session" },
        hint: { fr: "SSH sert à administrer des machines.", en: "SSH is for administering machines." },
        explanation: {
          fr: "SSH est un protocole distant sur Internet ; ce n’est pas l’écosystème HTML/HTTP du Web.",
          en: "SSH is a remote protocol on the Internet; it is not the Web’s HTML/HTTP ecosystem.",
        },
      },
      {
        id: "web-internet-vs-web-q3",
        type: "multiple-choice",
        question: {
          fr: "Quel outil est le client principal du Web pour les utilisateurs ?",
          en: "What is the main Web client for users?",
        },
        options: [
          { fr: "Le navigateur", en: "The browser" },
          { fr: "Le commutateur", en: "The switch" },
          { fr: "Le modem analogique seul", en: "The analog modem alone" },
          { fr: "Le BIOS", en: "The BIOS" },
        ],
        correctAnswer: { fr: "Le navigateur", en: "The browser" },
        hint: { fr: "Chrome, Firefox, Safari…", en: "Chrome, Firefox, Safari…" },
        explanation: {
          fr: "Le navigateur envoie des requêtes HTTP(S) et rend HTML/CSS/JS.",
          en: "The browser sends HTTP(S) requests and renders HTML/CSS/JS.",
        },
      },
      {
        id: "web-internet-vs-web-q4",
        type: "multiple-choice",
        question: {
          fr: "Internet transporte principalement des…",
          en: "The Internet mainly carries…",
        },
        options: [
          { fr: "Paquets IP", en: "IP packets" },
          { fr: "Fichiers Word uniquement", en: "Word files only" },
          { fr: "Pixels d’écran", en: "Screen pixels" },
          { fr: "Instructions CPU brutes", en: "Raw CPU instructions" },
        ],
        correctAnswer: { fr: "Paquets IP", en: "IP packets" },
        hint: { fr: "Pense au protocole Internet.", en: "Think about the Internet Protocol." },
        explanation: {
          fr: "Les données sont découpées en paquets IP routés à travers le réseau.",
          en: "Data is split into IP packets routed across the network.",
        },
      },
      {
        id: "web-internet-vs-web-q5",
        type: "multiple-choice",
        question: {
          fr: "Un hyperlien sert à…",
          en: "A hyperlink is used to…",
        },
        options: [
          { fr: "Pointer vers une autre ressource", en: "Point to another resource" },
          { fr: "Chiffrer le disque dur", en: "Encrypt the hard drive" },
          { fr: "Allouer de la RAM", en: "Allocate RAM" },
          { fr: "Remplacer le DNS", en: "Replace DNS" },
        ],
        correctAnswer: { fr: "Pointer vers une autre ressource", en: "Point to another resource" },
        hint: { fr: "C’est le « H » d’HTML : hypertexte.", en: "It’s the “H” in HTML: hypertext." },
        explanation: {
          fr: "Les liens relient pages, images, fichiers et APIs dans le Web.",
          en: "Links connect pages, images, files, and APIs on the Web.",
        },
      },
      {
        id: "web-internet-vs-web-q6",
        type: "multiple-choice",
        question: {
          fr: "Pourquoi distinguer Internet et Web en debug ?",
          en: "Why distinguish Internet and Web when debugging?",
        },
        options: [
          {
            fr: "Pour isoler réseau, DNS, HTTP ou frontend",
            en: "To isolate network, DNS, HTTP, or frontend",
          },
          { fr: "Parce que le Web n’utilise jamais Internet", en: "Because the Web never uses the Internet" },
          { fr: "Pour éviter d’utiliser HTTPS", en: "To avoid using HTTPS" },
          { fr: "Parce que DNS n’existe que hors Internet", en: "Because DNS exists only off the Internet" },
        ],
        correctAnswer: {
          fr: "Pour isoler réseau, DNS, HTTP ou frontend",
          en: "To isolate network, DNS, HTTP, or frontend",
        },
        hint: { fr: "Chaque couche peut échouer séparément.", en: "Each layer can fail separately." },
        explanation: {
          fr: "Identifier la couche en panne accélère le diagnostic (câble vs certificat vs bug JS).",
          en: "Pinpointing the failing layer speeds diagnosis (cable vs certificate vs JS bug).",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es un professeur patient qui enseigne la différence entre Internet et le Web. Utilise des analogies concrètes, corrige les confusions courantes, et reste accessible aux débutants.",
        en: "You are a patient teacher explaining the difference between the Internet and the Web. Use concrete analogies, correct common mix-ups, and stay beginner-friendly.",
      },
      introMessage: {
        fr: "Salut ! Aujourd’hui on clarifie Internet vs Web. Qu’est-ce que tu penses que c’est, pour commencer ?",
        en: "Hi! Today we clarify Internet vs Web. What do you think each one is, to start?",
      },
      topics: [
        { fr: "Infrastructure Internet", en: "Internet infrastructure" },
        { fr: "Pages et hyperliens", en: "Pages and hyperlinks" },
        { fr: "Services non-Web", en: "Non-Web services" },
      ],
    },
  },

  {
    id: "web-client-server",
    unitId: "web-fundamentals",
    title: {
      fr: "Client et serveur",
      en: "Client and server",
    },
    description: {
      fr: "Comprendre qui demande, qui répond, et où tourne le code web.",
      en: "Understand who requests, who responds, and where web code runs.",
    },
    icon: "network",
    estimatedMinutes: 17,
    xpReward: 23,
    goals: [
      {
        description: {
          fr: "Définir les rôles client et serveur",
          en: "Define client and server roles",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Situer frontend et backend dans l’architecture",
          en: "Place frontend and backend in the architecture",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Décrire une requête HTTP simple bout en bout",
          en: "Describe a simple HTTP request end to end",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-client-server-s1",
        title: { fr: "Le modèle de base", en: "The basic model" },
        body: {
          fr: "Sur le Web, le client initie presque toujours la conversation : il envoie une requête. Le serveur écoute, traite, puis renvoie une réponse (HTML, JSON, fichier…). C’est le cœur du modèle client-serveur.",
          en: "On the Web, the client almost always starts the conversation: it sends a request. The server listens, processes, then returns a response (HTML, JSON, file…). That is the heart of the client-server model.",
        },
        diagram: "client-server",
        callout: {
          fr: "Client = demandeur. Serveur = fournisseur de ressource.",
          en: "Client = requester. Server = resource provider.",
        },
        calloutKind: "key",
      },
      {
        id: "web-client-server-s2",
        title: { fr: "Qui est le client ?", en: "Who is the client?" },
        body: {
          fr: "Le navigateur est le client le plus visible, mais aussi les apps mobiles, curl, Postman ou un microservice qui appelle une API. Tout programme qui consomme une ressource distante agit comme client.",
          en: "The browser is the most visible client, but also mobile apps, curl, Postman, or a microservice calling an API. Any program that consumes a remote resource acts as a client.",
        },
        bullets: [
          { fr: "Navigateur : pages et assets.", en: "Browser: pages and assets." },
          { fr: "App mobile : APIs JSON.", en: "Mobile app: JSON APIs." },
          { fr: "Script CI : appels automatisés.", en: "CI script: automated calls." },
        ],
      },
      {
        id: "web-client-server-s3",
        title: { fr: "Qui est le serveur ?", en: "Who is the server?" },
        body: {
          fr: "Un serveur web (Nginx, Apache, Node, etc.) attend sur un port (souvent 80/443), accepte les connexions et sert des contenus ou délègue à une application. « Serveur » désigne à la fois la machine et le logiciel.",
          en: "A web server (Nginx, Apache, Node, etc.) waits on a port (often 80/443), accepts connections, and serves content or delegates to an application. “Server” means both the machine and the software.",
        },
        diagram: "client-server-web",
      },
      {
        id: "web-client-server-s4",
        title: { fr: "Frontend vs backend", en: "Frontend vs backend" },
        body: {
          fr: "Le frontend s’exécute côté client (HTML/CSS/JS dans le navigateur). Le backend s’exécute côté serveur (auth, base de données, logique métier). Les deux communiquent via HTTP(S).",
          en: "Frontend runs on the client (HTML/CSS/JS in the browser). Backend runs on the server (auth, database, business logic). They communicate over HTTP(S).",
        },
        analogy: {
          fr: "Le frontend est la salle de restaurant (ce que tu vois) ; le backend est la cuisine (préparation invisible).",
          en: "Frontend is the dining room (what you see); backend is the kitchen (invisible preparation).",
        },
      },
      {
        id: "web-client-server-s5",
        title: { fr: "Cycle d’une requête", en: "Request lifecycle" },
        body: {
          fr: "Tu tapes une URL → DNS résout le domaine → TCP/TLS → requête HTTP → le serveur répond → le navigateur parse et affiche. Comprendre ce cycle aide à localiser les erreurs (timeout, 404, CORS…).",
          en: "You type a URL → DNS resolves the domain → TCP/TLS → HTTP request → server responds → browser parses and displays. Understanding this cycle helps locate errors (timeout, 404, CORS…).",
        },
        diagram: "request-lifecycle",
        callout: {
          fr: "Un 404 vient du serveur ; un DNS fail arrive avant même HTTP.",
          en: "A 404 comes from the server; a DNS failure happens before HTTP even starts.",
        },
        calloutKind: "tip",
      },
      {
        id: "web-client-server-s6",
        title: { fr: "Stateless HTTP", en: "Stateless HTTP" },
        body: {
          fr: "Chaque requête HTTP est indépendante par défaut. Le serveur ne « se souvient » pas de toi sans cookies, tokens ou sessions. C’est volontaire : ça simplifie la scalabilité.",
          en: "Each HTTP request is independent by default. The server does not “remember” you without cookies, tokens, or sessions. That is intentional: it simplifies scalability.",
        },
        callout: {
          fr: "Croire qu’HTTP garde l’état tout seul est une erreur classique.",
          en: "Believing HTTP keeps state by itself is a classic mistake.",
        },
        calloutKind: "mistake",
        codeExample: {
          language: "http",
          code: "GET /profile HTTP/1.1\nHost: example.com\nAuthorization: Bearer eyJhbGciOi...",
          caption: {
            fr: "Sans en-tête d’auth, le serveur ne sait pas qui tu es.",
            en: "Without an auth header, the server does not know who you are.",
          },
        },
      },
      {
        id: "web-client-server-s7",
        title: { fr: "Exercice mental", en: "Mental exercise" },
        body: {
          fr: "Imagine une app de notes : liste affichée dans React, sauvegarde via API Node, données en PostgreSQL.",
          en: "Imagine a notes app: list shown in React, save via Node API, data in PostgreSQL.",
        },
        miniExercise: {
          prompt: {
            fr: "Pour chaque élément (React, API Node, Postgres), dis s’il est plutôt client, serveur applicatif ou stockage.",
            en: "For each piece (React, Node API, Postgres), say if it is mostly client, application server, or storage.",
          },
          hint: {
            fr: "React tourne dans le navigateur ; Postgres ne parle pas HTTP directement au user.",
            en: "React runs in the browser; Postgres does not speak HTTP directly to the user.",
          },
        },
      },
      {
        id: "web-client-server-s8",
        title: { fr: "Variantes modernes", en: "Modern variants" },
        body: {
          fr: "SSR, BFF, edge functions et serverless brouillent un peu la frontière, mais le principe reste : quelque chose demande, quelque chose répond. Tu apprends à nommer où s’exécute chaque bout de logique.",
          en: "SSR, BFFs, edge functions, and serverless blur the line a bit, but the principle remains: something requests, something responds. You learn to name where each piece of logic runs.",
        },
        callout: {
          fr: "SSR génère du HTML sur le serveur, mais le navigateur reste client.",
          en: "SSR generates HTML on the server, but the browser remains the client.",
        },
        calloutKind: "warning",
      },
    ],
    vocabulary: [
      {
        term: { fr: "Client", en: "Client" },
        definition: {
          fr: "Programme qui envoie des requêtes et consomme des réponses.",
          en: "Program that sends requests and consumes responses.",
        },
      },
      {
        term: { fr: "Serveur", en: "Server" },
        definition: {
          fr: "Programme ou machine qui fournit des ressources via un réseau.",
          en: "Program or machine that provides resources over a network.",
        },
      },
      {
        term: { fr: "Frontend", en: "Frontend" },
        definition: {
          fr: "Partie visible et interactive côté navigateur.",
          en: "Visible, interactive part on the browser side.",
        },
      },
      {
        term: { fr: "Backend", en: "Backend" },
        definition: {
          fr: "Logique serveur : APIs, auth, données, règles métier.",
          en: "Server logic: APIs, auth, data, business rules.",
        },
      },
      {
        term: { fr: "Stateless", en: "Stateless" },
        definition: {
          fr: "Sans mémoire entre deux requêtes, sauf mécanisme explicite.",
          en: "No memory between two requests unless an explicit mechanism is used.",
        },
      },
    ],
    activities: [
      {
        id: "web-client-server-q1",
        type: "multiple-choice",
        question: {
          fr: "Dans une visite de site, le navigateur est…",
          en: "When visiting a site, the browser is…",
        },
        options: [
          { fr: "Le client", en: "The client" },
          { fr: "Le serveur DNS uniquement", en: "The DNS server only" },
          { fr: "La base de données", en: "The database" },
          { fr: "Le certificat TLS", en: "The TLS certificate" },
        ],
        correctAnswer: { fr: "Le client", en: "The client" },
        hint: { fr: "Qui initie la requête ?", en: "Who initiates the request?" },
        explanation: {
          fr: "Le navigateur demande la ressource ; le serveur web répond.",
          en: "The browser requests the resource; the web server responds.",
        },
      },
      {
        id: "web-client-server-q2",
        type: "multiple-choice",
        question: {
          fr: "Le frontend s’exécute principalement…",
          en: "Frontend mainly runs…",
        },
        options: [
          { fr: "Dans le navigateur de l’utilisateur", en: "In the user’s browser" },
          { fr: "Uniquement dans le routeur", en: "Only inside the router" },
          { fr: "Dans le noyau Linux du datacenter", en: "In the datacenter Linux kernel" },
          { fr: "Sur le serveur DNS", en: "On the DNS server" },
        ],
        correctAnswer: { fr: "Dans le navigateur de l’utilisateur", en: "In the user’s browser" },
        hint: { fr: "HTML/CSS/JS côté user.", en: "HTML/CSS/JS on the user side." },
        explanation: {
          fr: "Même si le code est servi par un serveur, l’exécution UI est côté client.",
          en: "Even if code is served by a server, UI execution is on the client.",
        },
      },
      {
        id: "web-client-server-q3",
        type: "multiple-choice",
        question: {
          fr: "HTTP est dit « stateless » car…",
          en: "HTTP is called “stateless” because…",
        },
        options: [
          {
            fr: "Chaque requête est indépendante par défaut",
            en: "Each request is independent by default",
          },
          { fr: "Il ne peut pas transporter de JSON", en: "It cannot carry JSON" },
          { fr: "Il refuse les cookies", en: "It rejects cookies" },
          { fr: "Il n’utilise jamais TCP", en: "It never uses TCP" },
        ],
        correctAnswer: {
          fr: "Chaque requête est indépendante par défaut",
          en: "Each request is independent by default",
        },
        hint: { fr: "Sans cookie/token, pas de « mémoire ».", en: "Without cookie/token, no “memory.”" },
        explanation: {
          fr: "L’état de session doit être ajouté explicitement (cookies, JWT, sessions serveur).",
          en: "Session state must be added explicitly (cookies, JWT, server sessions).",
        },
      },
      {
        id: "web-client-server-q4",
        type: "multiple-choice",
        question: {
          fr: "Une API REST appelée par une app mobile joue le rôle de…",
          en: "A REST API called by a mobile app plays the role of…",
        },
        options: [
          { fr: "Serveur", en: "Server" },
          { fr: "Client uniquement", en: "Client only" },
          { fr: "Commutateur L2", en: "L2 switch" },
          { fr: "Navigateur", en: "Browser" },
        ],
        correctAnswer: { fr: "Serveur", en: "Server" },
        hint: { fr: "L’app mobile est le client.", en: "The mobile app is the client." },
        explanation: {
          fr: "L’API reçoit des requêtes et renvoie des réponses : c’est le serveur.",
          en: "The API receives requests and returns responses: it is the server.",
        },
      },
      {
        id: "web-client-server-q5",
        type: "multiple-choice",
        question: {
          fr: "Avant la requête HTTP, que fait souvent le client ?",
          en: "Before the HTTP request, what does the client often do?",
        },
        options: [
          { fr: "Résoudre le nom via DNS", en: "Resolve the name via DNS" },
          { fr: "Formater le disque", en: "Format the disk" },
          { fr: "Compiler le noyau", en: "Compile the kernel" },
          { fr: "Désactiver TCP", en: "Disable TCP" },
        ],
        correctAnswer: { fr: "Résoudre le nom via DNS", en: "Resolve the name via DNS" },
        hint: { fr: "example.com → adresse IP.", en: "example.com → IP address." },
        explanation: {
          fr: "Le DNS traduit le domaine en IP pour établir la connexion.",
          en: "DNS translates the domain into an IP so the connection can be made.",
        },
      },
      {
        id: "web-client-server-q6",
        type: "multiple-choice",
        question: {
          fr: "SSR signifie que…",
          en: "SSR means that…",
        },
        options: [
          {
            fr: "Le HTML est généré côté serveur",
            en: "HTML is generated on the server",
          },
          { fr: "Le DNS est désactivé", en: "DNS is disabled" },
          { fr: "Il n’y a plus de client", en: "There is no client anymore" },
          { fr: "Seul CSS tourne sur le serveur", en: "Only CSS runs on the server" },
        ],
        correctAnswer: {
          fr: "Le HTML est généré côté serveur",
          en: "HTML is generated on the server",
        },
        hint: { fr: "Server-Side Rendering.", en: "Server-Side Rendering." },
        explanation: {
          fr: "Le serveur prépare le HTML ; le navigateur reste le client qui l’affiche.",
          en: "The server prepares HTML; the browser remains the client that displays it.",
        },
      },
      {
        id: "web-client-server-q7",
        type: "multiple-choice",
        question: {
          fr: "Où vit typiquement la logique d’accès à la base de données ?",
          en: "Where does database access logic typically live?",
        },
        options: [
          { fr: "Backend / serveur", en: "Backend / server" },
          { fr: "Dans le CSS", en: "In CSS" },
          { fr: "Dans le favicon", en: "In the favicon" },
          { fr: "Uniquement dans le DNS", en: "Only in DNS" },
        ],
        correctAnswer: { fr: "Backend / serveur", en: "Backend / server" },
        hint: { fr: "Ne jamais exposer les credentials DB au navigateur.", en: "Never expose DB credentials to the browser." },
        explanation: {
          fr: "Le backend protège les secrets et applique les règles métier avant d’accéder aux données.",
          en: "The backend protects secrets and applies business rules before accessing data.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseigne le modèle client-serveur web. Relie toujours les concepts à des exemples concrets (navigateur, API, base de données) et corrige les confusions frontend/backend.",
        en: "You teach the web client-server model. Always tie concepts to concrete examples (browser, API, database) and correct frontend/backend mix-ups.",
      },
      introMessage: {
        fr: "On va cartographier qui demande et qui répond sur le Web. Par quoi veux-tu commencer ?",
        en: "We’ll map who requests and who responds on the Web. Where do you want to start?",
      },
      topics: [
        { fr: "Rôles client/serveur", en: "Client/server roles" },
        { fr: "Frontend et backend", en: "Frontend and backend" },
        { fr: "Cycle de requête", en: "Request lifecycle" },
      ],
    },
  },

  {
    id: "web-http-https",
    unitId: "web-fundamentals",
    title: { fr: "HTTP et HTTPS", en: "HTTP and HTTPS" },
    description: {
      fr: "Méthodes, codes de statut, en-têtes et pourquoi HTTPS protège le trafic.",
      en: "Methods, status codes, headers, and why HTTPS protects traffic.",
    },
    icon: "lock",
    estimatedMinutes: 18,
    xpReward: 24,
    goals: [
      {
        description: {
          fr: "Expliquer une requête/réponse HTTP",
          en: "Explain an HTTP request/response",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Choisir les bonnes méthodes et codes courants",
          en: "Choose common methods and status codes correctly",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Différencier HTTP et HTTPS (TLS)",
          en: "Differentiate HTTP and HTTPS (TLS)",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-http-https-s1",
        title: { fr: "HTTP, le langage du Web", en: "HTTP, the language of the Web" },
        body: {
          fr: "HTTP définit comment client et serveur échangent messages texte structurés : ligne de requête, en-têtes, corps optionnel. C’est simple à lire, ce qui facilite le debug avec les DevTools.",
          en: "HTTP defines how client and server exchange structured text messages: request line, headers, optional body. It is readable, which makes debugging with DevTools easier.",
        },
        diagram: "http-https",
        callout: {
          fr: "HTTP décrit le message ; TCP/TLS transporte la connexion.",
          en: "HTTP describes the message; TCP/TLS carries the connection.",
        },
        calloutKind: "key",
      },
      {
        id: "web-http-https-s2",
        title: { fr: "Méthodes essentielles", en: "Essential methods" },
        body: {
          fr: "GET lit, POST crée/soumet, PUT/PATCH mettent à jour, DELETE supprime. Respecter la sémantique évite des APIs confuses et des caches incorrects.",
          en: "GET reads, POST creates/submits, PUT/PATCH update, DELETE removes. Respecting semantics avoids confusing APIs and incorrect caches.",
        },
        bullets: [
          { fr: "GET : sûr et idéalement sans effet de bord.", en: "GET: safe and ideally side-effect free." },
          { fr: "POST : envoi de données, création fréquente.", en: "POST: sending data, often creation." },
          { fr: "PUT/PATCH : remplacement ou mise à jour partielle.", en: "PUT/PATCH: replace or partial update." },
          { fr: "DELETE : suppression de ressource.", en: "DELETE: resource removal." },
        ],
        codeExample: {
          language: "http",
          code: "GET /api/users/42 HTTP/1.1\nHost: api.example.com\nAccept: application/json",
          caption: {
            fr: "Une lecture GET typique vers une API.",
            en: "A typical GET read against an API.",
          },
        },
      },
      {
        id: "web-http-https-s3",
        title: { fr: "Codes de statut", en: "Status codes" },
        body: {
          fr: "2xx = succès, 3xx = redirection, 4xx = erreur client, 5xx = erreur serveur. Apprendre 200, 201, 301/302, 400, 401, 403, 404, 500 couvre l’essentiel du quotidien.",
          en: "2xx = success, 3xx = redirect, 4xx = client error, 5xx = server error. Learning 200, 201, 301/302, 400, 401, 403, 404, 500 covers everyday needs.",
        },
        callout: {
          fr: "401 = non authentifié ; 403 = authentifié mais interdit. Ne les inverse pas.",
          en: "401 = not authenticated; 403 = authenticated but forbidden. Do not swap them.",
        },
        calloutKind: "mistake",
      },
      {
        id: "web-http-https-s4",
        title: { fr: "En-têtes utiles", en: "Useful headers" },
        body: {
          fr: "Content-Type, Authorization, Cache-Control, Cookie, User-Agent et Accept guident le traitement. Les en-têtes de sécurité (HSTS, CSP) renforcent HTTPS.",
          en: "Content-Type, Authorization, Cache-Control, Cookie, User-Agent, and Accept guide processing. Security headers (HSTS, CSP) strengthen HTTPS.",
        },
        analogy: {
          fr: "Les en-têtes sont l’étiquette du colis : destinataire, format, instructions de manutention.",
          en: "Headers are the parcel label: recipient, format, handling instructions.",
        },
      },
      {
        id: "web-http-https-s5",
        title: { fr: "Pourquoi HTTPS", en: "Why HTTPS" },
        body: {
          fr: "HTTPS = HTTP sur TLS. Le trafic est chiffré et authentifié via certificats. Sans HTTPS, un attaquant sur le réseau peut lire ou modifier mots de passe et cookies.",
          en: "HTTPS = HTTP over TLS. Traffic is encrypted and authenticated via certificates. Without HTTPS, a network attacker can read or alter passwords and cookies.",
        },
        diagram: "http-https",
        callout: {
          fr: "Le cadenas ne garantit pas qu’un site est honnête — seulement que la connexion est chiffrée vers le bon certificat.",
          en: "The padlock does not prove a site is honest — only that the connection is encrypted to the right certificate.",
        },
        calloutKind: "warning",
      },
      {
        id: "web-http-https-s6",
        title: { fr: "Handshake en bref", en: "Handshake in brief" },
        body: {
          fr: "Client et serveur négocient TLS, vérifient le certificat, dérivent des clés de session, puis envoient HTTP chiffré. Les navigateurs rejettent les certificats expirés ou non de confiance.",
          en: "Client and server negotiate TLS, verify the certificate, derive session keys, then send encrypted HTTP. Browsers reject expired or untrusted certificates.",
        },
        callout: {
          fr: "En local, un certificat auto-signé peut être accepté manuellement — jamais en production publique.",
          en: "Locally, a self-signed certificate may be accepted manually — never for public production.",
        },
        calloutKind: "tip",
      },
      {
        id: "web-http-https-s7",
        title: { fr: "Mini exercice", en: "Mini exercise" },
        body: {
          fr: "Tu appelles POST /login et reçois 401. Puis avec un token valide, GET /admin renvoie 403.",
          en: "You call POST /login and get 401. Then with a valid token, GET /admin returns 403.",
        },
        miniExercise: {
          prompt: {
            fr: "Explique la différence entre ces deux échecs.",
            en: "Explain the difference between these two failures.",
          },
          hint: {
            fr: "Identité manquante vs permission insuffisante.",
            en: "Missing identity vs insufficient permission.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "HTTP", en: "HTTP" },
        definition: {
          fr: "Protocole de transfert de ressources web (requête/réponse).",
          en: "Protocol for transferring web resources (request/response).",
        },
      },
      {
        term: { fr: "HTTPS", en: "HTTPS" },
        definition: {
          fr: "HTTP sécurisé via TLS (chiffrement et authenticité).",
          en: "HTTP secured with TLS (encryption and authenticity).",
        },
      },
      {
        term: { fr: "Méthode HTTP", en: "HTTP method" },
        definition: {
          fr: "Verbe indiquant l’intention (GET, POST, PUT, DELETE…).",
          en: "Verb indicating intent (GET, POST, PUT, DELETE…).",
        },
      },
      {
        term: { fr: "Code de statut", en: "Status code" },
        definition: {
          fr: "Nombre à 3 chiffres résumant le résultat de la requête.",
          en: "Three-digit number summarizing the request outcome.",
        },
      },
      {
        term: { fr: "TLS", en: "TLS" },
        definition: {
          fr: "Couche de chiffrement sous HTTPS.",
          en: "Encryption layer under HTTPS.",
        },
      },
      {
        term: { fr: "En-tête", en: "Header" },
        definition: {
          fr: "Métadonnée clé/valeur jointe à la requête ou réponse.",
          en: "Key/value metadata attached to the request or response.",
        },
      },
    ],
    activities: [
      {
        id: "web-http-https-q1",
        type: "multiple-choice",
        question: { fr: "HTTPS ajoute surtout…", en: "HTTPS mainly adds…" },
        options: [
          { fr: "TLS (chiffrement et authenticité)", en: "TLS (encryption and authenticity)" },
          { fr: "Un nouveau langage HTML", en: "A new HTML language" },
          { fr: "Le remplacement de DNS", en: "DNS replacement" },
          { fr: "L’interdiction de JSON", en: "A ban on JSON" },
        ],
        correctAnswer: {
          fr: "TLS (chiffrement et authenticité)",
          en: "TLS (encryption and authenticity)",
        },
        hint: { fr: "Pense au cadenas du navigateur.", en: "Think about the browser padlock." },
        explanation: {
          fr: "HTTPS encapsule HTTP dans une session TLS chiffrée et authentifiée.",
          en: "HTTPS wraps HTTP in an encrypted, authenticated TLS session.",
        },
      },
      {
        id: "web-http-https-q2",
        type: "multiple-choice",
        question: { fr: "Quelle méthode lit une ressource sans la modifier ?", en: "Which method reads a resource without modifying it?" },
        options: [
          { fr: "GET", en: "GET" },
          { fr: "DELETE", en: "DELETE" },
          { fr: "PUT", en: "PUT" },
          { fr: "PATCH", en: "PATCH" },
        ],
        correctAnswer: { fr: "GET", en: "GET" },
        hint: { fr: "Méthode « safe ».", en: "A “safe” method." },
        explanation: {
          fr: "GET est conçu pour la lecture ; les modifications passent par d’autres verbes.",
          en: "GET is designed for reading; modifications use other verbs.",
        },
      },
      {
        id: "web-http-https-q3",
        type: "multiple-choice",
        question: { fr: "Un 404 signifie…", en: "A 404 means…" },
        options: [
          { fr: "Ressource introuvable côté client/URL", en: "Resource not found for that client/URL" },
          { fr: "Le serveur a crashé forcément", en: "The server necessarily crashed" },
          { fr: "TLS est obligatoire", en: "TLS is mandatory" },
          { fr: "Le DNS est parfait", en: "DNS is perfect" },
        ],
        correctAnswer: {
          fr: "Ressource introuvable côté client/URL",
          en: "Resource not found for that client/URL",
        },
        hint: { fr: "Famille 4xx = erreur client.", en: "4xx family = client error." },
        explanation: {
          fr: "Le serveur a répondu, mais le chemin demandé n’existe pas (ou n’est pas exposé).",
          en: "The server responded, but the requested path does not exist (or is not exposed).",
        },
      },
      {
        id: "web-http-https-q4",
        type: "multiple-choice",
        question: { fr: "401 vs 403 : 403 indique…", en: "401 vs 403: 403 indicates…" },
        options: [
          { fr: "Identité connue mais accès refusé", en: "Known identity but access denied" },
          { fr: "Toujours une panne DNS", en: "Always a DNS failure" },
          { fr: "Succès avec redirection", en: "Success with redirect" },
          { fr: "Méthode GET obligatoire", en: "GET method required" },
        ],
        correctAnswer: {
          fr: "Identité connue mais accès refusé",
          en: "Known identity but access denied",
        },
        hint: { fr: "Tu es connecté, mais pas autorisé.", en: "You are logged in, but not allowed." },
        explanation: {
          fr: "401 demande de s’authentifier ; 403 refuse malgré l’authentification (ou sans droit).",
          en: "401 asks you to authenticate; 403 denies despite authentication (or lacking rights).",
        },
      },
      {
        id: "web-http-https-q5",
        type: "multiple-choice",
        question: { fr: "Content-Type sert à…", en: "Content-Type is used to…" },
        options: [
          { fr: "Indiquer le format du corps", en: "Indicate the body format" },
          { fr: "Choisir l’adresse IP", en: "Choose the IP address" },
          { fr: "Remplacer le certificat", en: "Replace the certificate" },
          { fr: "Désactiver le cache DNS", en: "Disable DNS cache" },
        ],
        correctAnswer: { fr: "Indiquer le format du corps", en: "Indicate the body format" },
        hint: { fr: "application/json, text/html…", en: "application/json, text/html…" },
        explanation: {
          fr: "Le destinataire sait comment parser le body grâce à Content-Type.",
          en: "The recipient knows how to parse the body thanks to Content-Type.",
        },
      },
      {
        id: "web-http-https-q6",
        type: "multiple-choice",
        question: { fr: "Sans HTTPS sur un Wi-Fi public, un risque majeur est…", en: "Without HTTPS on public Wi-Fi, a major risk is…" },
        options: [
          {
            fr: "Interception ou altération du trafic",
            en: "Interception or tampering of traffic",
          },
          { fr: "La perte du CSS uniquement", en: "CSS loss only" },
          { fr: "L’impossibilité d’utiliser GET", en: "Inability to use GET" },
          { fr: "La désactivation automatique du DNS", en: "Automatic DNS disablement" },
        ],
        correctAnswer: {
          fr: "Interception ou altération du trafic",
          en: "Interception or tampering of traffic",
        },
        hint: { fr: "Attaque man-in-the-middle.", en: "Man-in-the-middle attack." },
        explanation: {
          fr: "HTTP en clair expose mots de passe, cookies et contenus à l’écoute réseau.",
          en: "Cleartext HTTP exposes passwords, cookies, and content to network eavesdropping.",
        },
      },
      {
        id: "web-http-https-q7",
        type: "multiple-choice",
        question: { fr: "Un 500 indique généralement…", en: "A 500 usually indicates…" },
        options: [
          { fr: "Une erreur côté serveur", en: "A server-side error" },
          { fr: "Une URL toujours incorrecte", en: "An always-wrong URL" },
          { fr: "Un succès silencieux", en: "A silent success" },
          { fr: "Un certificat parfait", en: "A perfect certificate" },
        ],
        correctAnswer: { fr: "Une erreur côté serveur", en: "A server-side error" },
        hint: { fr: "Famille 5xx.", en: "5xx family." },
        explanation: {
          fr: "Le serveur a accepté la requête mais a échoué en interne (bug, dépendance…).",
          en: "The server accepted the request but failed internally (bug, dependency…).",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes HTTP/HTTPS avec des exemples de requêtes réelles. Insiste sur méthodes, codes et TLS sans jargon inutile.",
        en: "You teach HTTP/HTTPS with real request examples. Emphasize methods, status codes, and TLS without unnecessary jargon.",
      },
      introMessage: {
        fr: "On ouvre la boîte HTTP : méthodes, codes et cadenas HTTPS. Quelle partie te stresse le plus ?",
        en: "Let’s open the HTTP box: methods, codes, and the HTTPS padlock. Which part stresses you most?",
      },
      topics: [
        { fr: "Méthodes HTTP", en: "HTTP methods" },
        { fr: "Codes de statut", en: "Status codes" },
        { fr: "TLS et HTTPS", en: "TLS and HTTPS" },
      ],
    },
  },

  {
    id: "web-url-dns-request",
    unitId: "web-fundamentals",
    title: { fr: "URL, DNS et cycle de requête", en: "URL, DNS, and request lifecycle" },
    description: {
      fr: "Décoder une URL, résoudre un nom, puis suivre le trajet jusqu’à la page.",
      en: "Decode a URL, resolve a name, then follow the path to the page.",
    },
    icon: "search",
    estimatedMinutes: 19,
    xpReward: 25,
    goals: [
      {
        description: {
          fr: "Décomposer une URL en parties utiles",
          en: "Break a URL into useful parts",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Expliquer le rôle du DNS",
          en: "Explain the role of DNS",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Ordonner les étapes d’un chargement de page",
          en: "Order the steps of a page load",
        },
        xpReward: 9,
      },
    ],
    sections: [
      {
        id: "web-url-dns-request-s1",
        title: { fr: "Anatomie d’une URL", en: "Anatomy of a URL" },
        body: {
          fr: "Une URL typique : schéma (https), hôte (www.example.com), chemin (/blog), requête (?id=3), fragment (#top). Chaque partie oriente client et serveur.",
          en: "A typical URL: scheme (https), host (www.example.com), path (/blog), query (?id=3), fragment (#top). Each part guides client and server.",
        },
        codeExample: {
          language: "text",
          code: "https://www.example.com:443/shop/item?id=42#reviews",
          caption: {
            fr: "schéma://hôte:port/chemin?query#fragment",
            en: "scheme://host:port/path?query#fragment",
          },
        },
        callout: {
          fr: "Le fragment (#…) n’est pas envoyé au serveur : il reste côté navigateur.",
          en: "The fragment (#…) is not sent to the server: it stays in the browser.",
        },
        calloutKind: "key",
      },
      {
        id: "web-url-dns-request-s2",
        title: { fr: "DNS : l’annuaire", en: "DNS: the phone book" },
        body: {
          fr: "Les humains préfèrent des noms ; les machines utilisent des IP. Le DNS traduit example.com en adresse(s) IP via une chaîne de résolveurs et de serveurs autoritaires.",
          en: "Humans prefer names; machines use IPs. DNS translates example.com into IP address(es) through a chain of resolvers and authoritative servers.",
        },
        diagram: "dns-lookup",
        analogy: {
          fr: "DNS est l’annuaire : tu cherches « Pizza Mario » et tu obtiens le numéro (l’IP).",
          en: "DNS is the phone book: you look up “Mario’s Pizza” and get the number (the IP).",
        },
      },
      {
        id: "web-url-dns-request-s3",
        title: { fr: "Cache DNS", en: "DNS caching" },
        body: {
          fr: "Navigateur, OS et FAI mettent en cache les réponses DNS (TTL). Un changement d’IP peut mettre du temps à se propager — d’où les « ça marche chez moi ».",
          en: "Browser, OS, and ISP cache DNS answers (TTL). An IP change can take time to propagate — hence “works on my machine.”",
        },
        callout: {
          fr: "Vider le cache DNS peut aider après une migration de domaine.",
          en: "Flushing DNS cache can help after a domain migration.",
        },
        calloutKind: "tip",
      },
      {
        id: "web-url-dns-request-s4",
        title: { fr: "Connexion puis HTTP", en: "Connect, then HTTP" },
        body: {
          fr: "Après résolution : handshake TCP, éventuellement TLS, puis requête HTTP. Ensuite le HTML référence CSS/JS/images → nouvelles requêtes (souvent en parallèle).",
          en: "After resolution: TCP handshake, maybe TLS, then HTTP request. Then HTML references CSS/JS/images → more requests (often in parallel).",
        },
        diagram: "request-lifecycle",
        bullets: [
          { fr: "1. DNS", en: "1. DNS" },
          { fr: "2. TCP (+ TLS)", en: "2. TCP (+ TLS)" },
          { fr: "3. Requête document", en: "3. Document request" },
          { fr: "4. Sous-ressources", en: "4. Sub-resources" },
        ],
      },
      {
        id: "web-url-dns-request-s5",
        title: { fr: "Erreurs fréquentes", en: "Common failures" },
        body: {
          fr: "DNS NXDOMAIN, timeout réseau, certificat invalide, 404 applicatif : chaque étape a ses symptômes. Lire le message d’erreur évite de « tout réinstaller ».",
          en: "DNS NXDOMAIN, network timeout, invalid certificate, app 404: each step has symptoms. Reading the error avoids “reinstall everything.”",
        },
        callout: {
          fr: "Si le DNS échoue, aucune requête HTTP n’atteint le serveur d’origine.",
          en: "If DNS fails, no HTTP request reaches the origin server.",
        },
        calloutKind: "warning",
      },
      {
        id: "web-url-dns-request-s6",
        title: { fr: "Query string", en: "Query string" },
        body: {
          fr: "Les paramètres ?page=2&sort=asc sont lus par le serveur (ou le frontend). Ils ne sont pas secrets : évite d’y mettre des tokens sensibles.",
          en: "Parameters like ?page=2&sort=asc are read by the server (or frontend). They are not secret: avoid putting sensitive tokens there.",
        },
        callout: {
          fr: "Mettre un mot de passe dans l’URL est une erreur grave (logs, historique).",
          en: "Putting a password in the URL is a serious mistake (logs, history).",
        },
        calloutKind: "mistake",
      },
      {
        id: "web-url-dns-request-s7",
        title: { fr: "À toi de jouer", en: "Your turn" },
        body: {
          fr: "URL : https://shop.example.com/cart?item=9#pay",
          en: "URL: https://shop.example.com/cart?item=9#pay",
        },
        miniExercise: {
          prompt: {
            fr: "Liste schéma, hôte, chemin, query et fragment.",
            en: "List scheme, host, path, query, and fragment.",
          },
          hint: {
            fr: "Le #pay ne part pas au serveur.",
            en: "#pay does not go to the server.",
          },
        },
      },
      {
        id: "web-url-dns-request-s8",
        title: { fr: "CDN et noms multiples", en: "CDNs and multiple names" },
        body: {
          fr: "Souvent www et apex pointent vers un CDN qui proxifie l’origine. Le DNS peut renvoyer plusieurs IP (géolocalisation, résilience).",
          en: "Often www and apex point to a CDN that proxies the origin. DNS may return multiple IPs (geo, resilience).",
        },
        diagram: "client-server-web",
      },
    ],
    vocabulary: [
      {
        term: { fr: "URL", en: "URL" },
        definition: {
          fr: "Adresse complète d’une ressource sur le Web.",
          en: "Full address of a resource on the Web.",
        },
      },
      {
        term: { fr: "DNS", en: "DNS" },
        definition: {
          fr: "Système qui traduit les noms de domaine en adresses IP.",
          en: "System that translates domain names into IP addresses.",
        },
      },
      {
        term: { fr: "TTL", en: "TTL" },
        definition: {
          fr: "Durée de vie d’un enregistrement DNS en cache.",
          en: "Lifetime for which a DNS record may stay cached.",
        },
      },
      {
        term: { fr: "Query string", en: "Query string" },
        definition: {
          fr: "Paramètres après ? dans une URL.",
          en: "Parameters after ? in a URL.",
        },
      },
      {
        term: { fr: "Fragment", en: "Fragment" },
        definition: {
          fr: "Partie après #, locale au navigateur.",
          en: "Part after #, local to the browser.",
        },
      },
    ],
    activities: [
      {
        id: "web-url-dns-request-q1",
        type: "multiple-choice",
        question: { fr: "Dans https://a.com/x, « https » est…", en: "In https://a.com/x, “https” is…" },
        options: [
          { fr: "Le schéma", en: "The scheme" },
          { fr: "Le fragment", en: "The fragment" },
          { fr: "La query", en: "The query" },
          { fr: "Le TTL", en: "The TTL" },
        ],
        correctAnswer: { fr: "Le schéma", en: "The scheme" },
        hint: { fr: "Aussi appelé protocole dans le langage courant.", en: "Also called protocol in everyday speech." },
        explanation: {
          fr: "Le schéma indique comment accéder à la ressource (ici HTTPS).",
          en: "The scheme indicates how to access the resource (here HTTPS).",
        },
      },
      {
        id: "web-url-dns-request-q2",
        type: "multiple-choice",
        question: { fr: "Le DNS sert surtout à…", en: "DNS is mainly used to…" },
        options: [
          { fr: "Résoudre un nom en IP", en: "Resolve a name to an IP" },
          { fr: "Compiler le CSS", en: "Compile CSS" },
          { fr: "Stocker les mots de passe", en: "Store passwords" },
          { fr: "Remplacer HTML", en: "Replace HTML" },
        ],
        correctAnswer: { fr: "Résoudre un nom en IP", en: "Resolve a name to an IP" },
        hint: { fr: "Annuaire des domaines.", en: "Directory of domains." },
        explanation: {
          fr: "Sans résolution DNS, le client ne sait pas où se connecter.",
          en: "Without DNS resolution, the client does not know where to connect.",
        },
      },
      {
        id: "web-url-dns-request-q3",
        type: "multiple-choice",
        question: { fr: "Le fragment #section est…", en: "The #section fragment is…" },
        options: [
          { fr: "Conservé côté navigateur", en: "Kept on the browser side" },
          { fr: "Toujours chiffré dans DNS", en: "Always encrypted in DNS" },
          { fr: "Envoyé comme en-tête Host", en: "Sent as the Host header" },
          { fr: "Un code HTTP 301", en: "An HTTP 301 code" },
        ],
        correctAnswer: { fr: "Conservé côté navigateur", en: "Kept on the browser side" },
        hint: { fr: "Il ne part pas dans la requête HTTP.", en: "It does not go in the HTTP request." },
        explanation: {
          fr: "Le navigateur l’utilise pour scroller/ancrer après chargement.",
          en: "The browser uses it to scroll/anchor after loading.",
        },
      },
      {
        id: "web-url-dns-request-q4",
        type: "multiple-choice",
        question: { fr: "Ordre typique correct :", en: "Correct typical order:" },
        options: [
          { fr: "DNS → TCP/TLS → HTTP", en: "DNS → TCP/TLS → HTTP" },
          { fr: "HTTP → DNS → TCP", en: "HTTP → DNS → TCP" },
          { fr: "TLS → HTML → DNS", en: "TLS → HTML → DNS" },
          { fr: "CSS → DNS → IP", en: "CSS → DNS → IP" },
        ],
        correctAnswer: { fr: "DNS → TCP/TLS → HTTP", en: "DNS → TCP/TLS → HTTP" },
        hint: { fr: "Il faut une IP avant de se connecter.", en: "You need an IP before connecting." },
        explanation: {
          fr: "On résout, on ouvre la connexion sécurisée, puis on parle HTTP.",
          en: "Resolve, open the secure connection, then speak HTTP.",
        },
      },
      {
        id: "web-url-dns-request-q5",
        type: "multiple-choice",
        question: { fr: "Un TTL DNS court implique…", en: "A short DNS TTL implies…" },
        options: [
          {
            fr: "Propagation plus rapide des changements",
            en: "Faster propagation of changes",
          },
          { fr: "Plus de HTML", en: "More HTML" },
          { fr: "Moins de HTTPS", en: "Less HTTPS" },
          { fr: "L’absence de ports", en: "No ports" },
        ],
        correctAnswer: {
          fr: "Propagation plus rapide des changements",
          en: "Faster propagation of changes",
        },
        hint: { fr: "Les caches expirent plus vite.", en: "Caches expire sooner." },
        explanation: {
          fr: "Un TTL bas réduit le temps où d’anciennes IP restent en cache.",
          en: "A low TTL reduces how long old IPs stay cached.",
        },
      },
      {
        id: "web-url-dns-request-q6",
        type: "multiple-choice",
        question: { fr: "Mettre un secret dans ?token= est risqué car…", en: "Putting a secret in ?token= is risky because…" },
        options: [
          {
            fr: "URL loguée / historisée facilement",
            en: "URLs are easily logged / historied",
          },
          { fr: "DNS refuse les query strings", en: "DNS rejects query strings" },
          { fr: "HTTPS ne chiffre jamais les URLs", en: "HTTPS never encrypts URLs" },
          { fr: "Les navigateurs bloquent ?", en: "Browsers block ?" },
        ],
        correctAnswer: {
          fr: "URL loguée / historisée facilement",
          en: "URLs are easily logged / historied",
        },
        hint: { fr: "Logs proxy, historique, Referer…", en: "Proxy logs, history, Referer…" },
        explanation: {
          fr: "Les secrets appartiennent aux en-têtes/body sécurisés, pas à l’URL partageable.",
          en: "Secrets belong in secure headers/body, not in a shareable URL.",
        },
      },
      {
        id: "web-url-dns-request-q7",
        type: "multiple-choice",
        question: { fr: "NXDOMAIN signifie…", en: "NXDOMAIN means…" },
        options: [
          { fr: "Le nom de domaine n’existe pas", en: "The domain name does not exist" },
          { fr: "Le CSS est invalide", en: "CSS is invalid" },
          { fr: "HTTP 200 obligatoire", en: "HTTP 200 required" },
          { fr: "TLS handshake réussi", en: "Successful TLS handshake" },
        ],
        correctAnswer: {
          fr: "Le nom de domaine n’existe pas",
          en: "The domain name does not exist",
        },
        hint: { fr: "Réponse DNS négative.", en: "Negative DNS answer." },
        explanation: {
          fr: "La résolution échoue avant toute conversation HTTP avec un serveur web.",
          en: "Resolution fails before any HTTP conversation with a web server.",
        },
      },
      {
        id: "web-url-dns-request-q8",
        type: "multiple-choice",
        question: { fr: "Après le HTML, le navigateur charge souvent…", en: "After HTML, the browser often loads…" },
        options: [
          { fr: "CSS, JS et images référencés", en: "Referenced CSS, JS, and images" },
          { fr: "Le BIOS", en: "The BIOS" },
          { fr: "Uniquement le fichier hosts", en: "Only the hosts file" },
          { fr: "La table de routage OSPF", en: "The OSPF routing table" },
        ],
        correctAnswer: {
          fr: "CSS, JS et images référencés",
          en: "Referenced CSS, JS, and images",
        },
        hint: { fr: "Sous-ressources du document.", en: "Document sub-resources." },
        explanation: {
          fr: "Le document initial découvre d’autres URLs à récupérer pour rendre la page.",
          en: "The initial document discovers more URLs to fetch to render the page.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu guides l’élève dans le cycle URL → DNS → TCP/TLS → HTTP. Utilise des schémas mentaux clairs et des cas d’erreur réels.",
        en: "You guide the learner through URL → DNS → TCP/TLS → HTTP. Use clear mental models and real failure cases.",
      },
      introMessage: {
        fr: "Suivons le voyage d’une URL jusqu’à l’écran. Tu veux commencer par l’URL ou par le DNS ?",
        en: "Let’s follow a URL’s journey to the screen. Want to start with the URL or DNS?",
      },
      topics: [
        { fr: "Structure des URL", en: "URL structure" },
        { fr: "Résolution DNS", en: "DNS resolution" },
        { fr: "Cycle de chargement", en: "Load lifecycle" },
      ],
    },
  },

  // ─── web-frontend / web-backend / web-security ───
  {
    id: "web-html-basics",
    unitId: "web-frontend",
    title: { fr: "Bases du HTML", en: "HTML basics" },
    description: {
      fr: "Structure sémantique, balises essentielles et accessibilité de base.",
      en: "Semantic structure, essential tags, and basic accessibility.",
    },
    icon: "book",
    estimatedMinutes: 17,
    xpReward: 23,
    goals: [
      {
        description: {
          fr: "Structurer une page avec html, head et body",
          en: "Structure a page with html, head, and body",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Utiliser titres, listes, liens et images correctement",
          en: "Use headings, lists, links, and images correctly",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Comprendre le HTML sémantique et les formulaires",
          en: "Understand semantic HTML and forms",
        },
        xpReward: 7,
      },
    ],
    sections: [
      {
        id: "web-html-basics-s1",
        title: { fr: "HTML = structure", en: "HTML = structure" },
        body: {
          fr: "HTML décrit le contenu et sa structure, pas l'apparence. Le navigateur construit un arbre DOM à partir des balises. CSS stylise ; JavaScript anime et interagit.",
          en: "HTML describes content and structure, not appearance. The browser builds a DOM tree from tags. CSS styles; JavaScript animates and interacts.",
        },
        callout: {
          fr: "Si tu stylises avec des div partout, tu perds le sens pour lecteurs d'écran et SEO.",
          en: "If you style with div everywhere, you lose meaning for screen readers and SEO.",
        },
        calloutKind: "warning",
        diagram: "dom-tree",
      },
      {
        id: "web-html-basics-s2",
        title: { fr: "Squelette d'une page", en: "Page skeleton" },
        body: {
          fr: "Toute page commence par <!DOCTYPE html>, puis <html>, <head> (métadonnées, titre, liens CSS) et <body> (contenu visible).",
          en: "Every page starts with <!DOCTYPE html>, then <html>, <head> (metadata, title, CSS links), and <body> (visible content).",
        },
        codeExample: {
          language: "html",
          code: "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>Ma page</title>\n  </head>\n  <body>\n    <h1>Bonjour</h1>\n  </body>\n</html>",
          caption: { fr: "Squelette minimal valide.", en: "Minimal valid skeleton." },
        },
      },
      {
        id: "web-html-basics-s3",
        title: { fr: "Titres et paragraphes", en: "Headings and paragraphs" },
        body: {
          fr: "h1–h6 créent une hiérarchie. Un seul h1 principal par page est une bonne pratique. Les p portent le texte courant.",
          en: "h1–h6 create hierarchy. One main h1 per page is good practice. p holds body text.",
        },
        bullets: [
          { fr: "h1 : sujet principal de la page", en: "h1: main page topic" },
          { fr: "h2/h3 : sections et sous-sections", en: "h2/h3: sections and subsections" },
          { fr: "Ne saute pas de niveaux sans raison", en: "Don't skip levels without reason" },
        ],
        callout: {
          fr: "Utiliser h1 juste pour « faire gros » est une erreur : la taille se règle en CSS.",
          en: "Using h1 just to make it big is a mistake: size is controlled in CSS.",
        },
        calloutKind: "mistake",
      },
      {
        id: "web-html-basics-s4",
        title: { fr: "Liens, images, listes", en: "Links, images, lists" },
        body: {
          fr: "a href pour naviguer, img src/alt pour les images, ul/ol/li pour les listes. L'attribut alt décrit l'image pour l'accessibilité.",
          en: "a href to navigate, img src/alt for images, ul/ol/li for lists. The alt attribute describes the image for accessibility.",
        },
        analogy: {
          fr: "HTML est le plan d'architecte : murs et pièces avant peinture (CSS) et électricité (JS).",
          en: "HTML is a building blueprint: walls and rooms before paint (CSS) and wiring (JS).",
        },
      },
      {
        id: "web-html-basics-s5",
        title: { fr: "HTML sémantique", en: "Semantic HTML" },
        body: {
          fr: "header, nav, main, article, section, footer donnent du sens. Ils aident le SEO, l'accessibilité et la maintenance.",
          en: "header, nav, main, article, section, footer add meaning. They help SEO, accessibility, and maintenance.",
        },
        bullets: [
          { fr: "main : contenu principal unique", en: "main: unique primary content" },
          { fr: "nav : menus de navigation", en: "nav: navigation menus" },
          { fr: "article : contenu autonome", en: "article: self-contained content" },
        ],
        callout: {
          fr: "Préfère button pour une action et a pour une navigation.",
          en: "Prefer button for an action and a for navigation.",
        },
        calloutKind: "tip",
      },
      {
        id: "web-html-basics-s6",
        title: { fr: "Formulaires", en: "Forms" },
        body: {
          fr: "form, input, label, textarea, select collectent des données. Un label lié (for/id) est indispensable pour l'accessibilité.",
          en: "form, input, label, textarea, select collect data. A linked label (for/id) is essential for accessibility.",
        },
        codeExample: {
          language: "html",
          code: "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\" name=\"email\" required />",
          caption: { fr: "Label et champ correctement liés.", en: "Correctly linked label and field." },
        },
      },
      {
        id: "web-html-basics-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Imagine une page article de blog : titre, auteur, contenu, tags, lien retour.",
          en: "Imagine a blog post page: title, author, content, tags, back link.",
        },
        miniExercise: {
          prompt: {
            fr: "Quelles balises sémantiques choisirais-tu pour chaque zone ?",
            en: "Which semantic tags would you choose for each area?",
          },
          hint: { fr: "Pense article, header, footer, nav, ul.", en: "Think article, header, footer, nav, ul." },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Balise", en: "Tag" },
        definition: {
          fr: "Élément HTML délimité par des chevrons.",
          en: "HTML element delimited by angle brackets.",
        },
      },
      {
        term: { fr: "DOM", en: "DOM" },
        definition: {
          fr: "Arbre d'objets représentant la page.",
          en: "Object tree representing the page.",
        },
      },
      {
        term: { fr: "Sémantique", en: "Semantic" },
        definition: {
          fr: "Balises qui décrivent le sens du contenu.",
          en: "Tags that describe content meaning.",
        },
      },
      {
        term: { fr: "Attribut", en: "Attribute" },
        definition: {
          fr: "Propriété d'une balise (href, alt, id).",
          en: "Tag property (href, alt, id).",
        },
      },
      {
        term: { fr: "Accessibilité", en: "Accessibility" },
        definition: {
          fr: "Rendre le contenu utilisable par tous.",
          en: "Making content usable by everyone.",
        },
      },
    ],
    activities: [
      {
        id: "web-html-basics-q1",
        type: "multiple-choice",
        question: {
          fr: "À quoi sert principalement le HTML ?",
          en: "What is HTML mainly for?",
        },
        options: [
          { fr: "Structurer le contenu", en: "Structure content" },
          { fr: "Styliser les couleurs", en: "Style colors" },
          { fr: "Compiler le CSS", en: "Compile CSS" },
          { fr: "Chiffrer HTTPS", en: "Encrypt HTTPS" },
        ],
        correctAnswer: { fr: "Structurer le contenu", en: "Structure content" },
        hint: { fr: "Pas l'apparence.", en: "Not appearance." },
        explanation: {
          fr: "HTML structure ; CSS et JS viennent ensuite.",
          en: "HTML structures; CSS and JS come next.",
        },
      },
      {
        id: "web-html-basics-q2",
        type: "multiple-choice",
        question: {
          fr: "Où place-t-on le title ?",
          en: "Where do you put title?",
        },
        options: [
          { fr: "Dans head", en: "In head" },
          { fr: "Uniquement dans footer", en: "Only in footer" },
          { fr: "Dans le DNS", en: "In DNS" },
          { fr: "Dans un cookie", en: "In a cookie" },
        ],
        correctAnswer: { fr: "Dans head", en: "In head" },
        hint: { fr: "Métadonnées de page.", en: "Page metadata." },
        explanation: {
          fr: "Le titre apparaît dans l'onglet et sert au SEO.",
          en: "The title appears in the tab and helps SEO.",
        },
      },
      {
        id: "web-html-basics-q3",
        type: "multiple-choice",
        question: {
          fr: "Pourquoi l'attribut alt sur une image ?",
          en: "Why the alt attribute on an image?",
        },
        options: [
          { fr: "Accessibilité et fallback texte", en: "Accessibility and text fallback" },
          { fr: "Changer la police", en: "Change the font" },
          { fr: "Forcer HTTPS", en: "Force HTTPS" },
          { fr: "Créer un VPN", en: "Create a VPN" },
        ],
        correctAnswer: { fr: "Accessibilité et fallback texte", en: "Accessibility and text fallback" },
        hint: { fr: "Lecteurs d'écran.", en: "Screen readers." },
        explanation: {
          fr: "alt décrit l'image si elle ne charge pas ou pour les aides techniques.",
          en: "alt describes the image if it fails to load or for assistive tech.",
        },
      },
      {
        id: "web-html-basics-q4",
        type: "multiple-choice",
        question: {
          fr: "Quelle balise pour le contenu principal unique ?",
          en: "Which tag for unique main content?",
        },
        options: [
          { fr: "main", en: "main" },
          { fr: "span", en: "span" },
          { fr: "br", en: "br" },
          { fr: "meta", en: "meta" },
        ],
        correctAnswer: { fr: "main", en: "main" },
        hint: { fr: "Sémantique HTML5.", en: "HTML5 semantics." },
        explanation: {
          fr: "main marque le contenu central de la page.",
          en: "main marks the page's central content.",
        },
      },
      {
        id: "web-html-basics-q5",
        type: "multiple-choice",
        question: {
          fr: "Pour une action (pas une navigation), préfère…",
          en: "For an action (not navigation), prefer…",
        },
        options: [
          { fr: "button", en: "button" },
          { fr: "a href=\"#\"", en: "a href=\"#\"" },
          { fr: "img", en: "img" },
          { fr: "link", en: "link" },
        ],
        correctAnswer: { fr: "button", en: "button" },
        hint: { fr: "Sémantique interactive.", en: "Interactive semantics." },
        explanation: {
          fr: "Les liens naviguent ; les boutons déclenchent des actions.",
          en: "Links navigate; buttons trigger actions.",
        },
      },
      {
        id: "web-html-basics-q6",
        type: "multiple-choice",
        question: {
          fr: "label for=\"email\" doit correspondre à…",
          en: "label for=\"email\" should match…",
        },
        options: [
          { fr: "id=\"email\" sur l'input", en: "id=\"email\" on the input" },
          { fr: "class=\"email\" uniquement", en: "class=\"email\" only" },
          { fr: "name du form", en: "form name" },
          { fr: "URL du site", en: "site URL" },
        ],
        correctAnswer: { fr: "id=\"email\" sur l'input", en: "id=\"email\" on the input" },
        hint: { fr: "Liaison label/contrôle.", en: "Label/control binding." },
        explanation: {
          fr: "for pointe vers l'id du champ associé.",
          en: "for points to the associated field's id.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes les bases HTML : structure, sémantique, formulaires et accessibilité. Donne des exemples de balises concrets.",
        en: "You teach HTML basics: structure, semantics, forms, and accessibility. Give concrete tag examples.",
      },
      introMessage: {
        fr: "On construit des pages propres et sémantiques. Par où veux-tu commencer ?",
        en: "We'll build clean, semantic pages. Where do you want to start?",
      },
      topics: [
        { fr: "Squelette HTML", en: "HTML skeleton" },
        { fr: "Balises sémantiques", en: "Semantic tags" },
        { fr: "Formulaires", en: "Forms" },
      ],
    },
  },

  {
    id: "web-css-basics",
    unitId: "web-frontend",
    title: { fr: "Bases du CSS", en: "CSS basics" },
    description: {
      fr: "Sélecteurs, cascade, box model, flexbox et mise en page responsive.",
      en: "Selectors, cascade, box model, flexbox, and responsive layout.",
    },
    icon: "layers",
    estimatedMinutes: 18,
    xpReward: 24,
    goals: [
      {
        description: {
          fr: "Appliquer styles via sélecteurs et cascade",
          en: "Apply styles via selectors and cascade",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Expliquer le box model",
          en: "Explain the box model",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Utiliser flexbox et media queries de base",
          en: "Use basic flexbox and media queries",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-css-basics-s1",
        title: { fr: "CSS = présentation", en: "CSS = presentation" },
        body: {
          fr: "Le CSS contrôle couleurs, typographie, espacements et mise en page. Il se lie via link ou parfois style inline (à limiter).",
          en: "CSS controls colors, typography, spacing, and layout. It links via link or sometimes inline style (limit that).",
        },
        callout: {
          fr: "Sépare structure (HTML) et style (CSS) pour un code maintenable.",
          en: "Separate structure (HTML) and style (CSS) for maintainable code.",
        },
        calloutKind: "key",
      },
      {
        id: "web-css-basics-s2",
        title: { fr: "Sélecteurs", en: "Selectors" },
        body: {
          fr: "Tu cibles des éléments par balise, .classe, #id ou combinaisons. La spécificité décide quelle règle gagne.",
          en: "You target elements by tag, .class, #id, or combinations. Specificity decides which rule wins.",
        },
        bullets: [
          { fr: "balise : faible spécificité", en: "tag: low specificity" },
          { fr: ".classe : usage quotidien recommandé", en: ".class: recommended daily use" },
          { fr: "#id : fort, avec parcimonie", en: "#id: strong, use sparingly" },
        ],
        codeExample: {
          language: "css",
          code: ".card {\n  padding: 16px;\n  border-radius: 12px;\n}\n.card h2 {\n  color: #2563eb;\n}",
          caption: { fr: "Classe + descendant.", en: "Class + descendant." },
        },
      },
      {
        id: "web-css-basics-s3",
        title: { fr: "Cascade et héritage", en: "Cascade and inheritance" },
        body: {
          fr: "Origine, spécificité et ordre déterminent le gagnant. color et font s'héritent ; margin et padding non.",
          en: "Origin, specificity, and order decide the winner. color and font inherit; margin and padding do not.",
        },
        callout: {
          fr: "Abuser de !important masque des problèmes de spécificité.",
          en: "Overusing !important hides specificity problems.",
        },
        calloutKind: "mistake",
      },
      {
        id: "web-css-basics-s4",
        title: { fr: "Box model", en: "Box model" },
        body: {
          fr: "Chaque élément est une boîte : content + padding + border + margin. box-sizing: border-box simplifie les largeurs.",
          en: "Every element is a box: content + padding + border + margin. box-sizing: border-box simplifies widths.",
        },
        diagram: "dom-tree",
        analogy: {
          fr: "Comme un tableau encadré : toile (content), passe-partout (padding), cadre (border), espace au mur (margin).",
          en: "Like a framed picture: canvas (content), mat (padding), frame (border), space to the wall (margin).",
        },
      },
      {
        id: "web-css-basics-s5",
        title: { fr: "Flexbox", en: "Flexbox" },
        body: {
          fr: "display: flex aligne les enfants sur un axe. justify-content et align-items contrôlent la distribution.",
          en: "display: flex aligns children on an axis. justify-content and align-items control distribution.",
        },
        callout: {
          fr: "Flex pour 1D ; Grid pour les grilles 2D complexes.",
          en: "Flex for 1D; Grid for complex 2D layouts.",
        },
        calloutKind: "tip",
        codeExample: {
          language: "css",
          code: ".row {\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n  align-items: center;\n}",
          caption: { fr: "Rangée flexible courante.", en: "Common flexible row." },
        },
      },
      {
        id: "web-css-basics-s6",
        title: { fr: "Responsive", en: "Responsive" },
        body: {
          fr: "Les media queries adaptent les styles selon la largeur. Mobile-first : base petit écran, puis min-width.",
          en: "Media queries adapt styles by width. Mobile-first: small-screen base, then min-width.",
        },
        bullets: [
          { fr: "@media (min-width: 768px)", en: "@media (min-width: 768px)" },
          { fr: "Unités relatives : rem, %, vw", en: "Relative units: rem, %, vw" },
          { fr: "Images fluides : max-width: 100%", en: "Fluid images: max-width: 100%" },
        ],
      },
      {
        id: "web-css-basics-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Carte avec titre, texte et bouton : empilés sur mobile, bouton à droite sur desktop.",
          en: "Card with title, text, and button: stacked on mobile, button on the right on desktop.",
        },
        miniExercise: {
          prompt: {
            fr: "Quelles propriétés flex et quelle media query ?",
            en: "Which flex properties and media query?",
          },
          hint: { fr: "column par défaut, row au breakpoint.", en: "column by default, row at breakpoint." },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Sélecteur", en: "Selector" },
        definition: {
          fr: "Motif qui cible des éléments HTML.",
          en: "Pattern that targets HTML elements.",
        },
      },
      {
        term: { fr: "Spécificité", en: "Specificity" },
        definition: {
          fr: "Poids d'une règle CSS dans la cascade.",
          en: "Weight of a CSS rule in the cascade.",
        },
      },
      {
        term: { fr: "Box model", en: "Box model" },
        definition: {
          fr: "Modèle content/padding/border/margin.",
          en: "content/padding/border/margin model.",
        },
      },
      {
        term: { fr: "Flexbox", en: "Flexbox" },
        definition: {
          fr: "Mise en page unidimensionnelle.",
          en: "One-dimensional layout.",
        },
      },
      {
        term: { fr: "Media query", en: "Media query" },
        definition: {
          fr: "Condition sur l'environnement d'affichage.",
          en: "Condition on the display environment.",
        },
      },
    ],
    activities: [
      {
        id: "web-css-basics-q1",
        type: "multiple-choice",
        question: {
          fr: "Le CSS sert surtout à…",
          en: "CSS is mainly for…",
        },
        options: [
          { fr: "Présenter et mettre en page", en: "Present and lay out" },
          { fr: "Résoudre le DNS", en: "Resolve DNS" },
          { fr: "Stocker des mots de passe", en: "Store passwords" },
          { fr: "Compiler TypeScript", en: "Compile TypeScript" },
        ],
        correctAnswer: { fr: "Présenter et mettre en page", en: "Present and lay out" },
        hint: { fr: "Apparence.", en: "Appearance." },
        explanation: {
          fr: "CSS gère le rendu visuel et la mise en page.",
          en: "CSS handles visual rendering and layout.",
        },
      },
      {
        id: "web-css-basics-q2",
        type: "multiple-choice",
        question: {
          fr: "Quelle spécificité est en général la plus forte ?",
          en: "Which specificity is generally strongest?",
        },
        options: [
          { fr: "#id", en: "#id" },
          { fr: "balise", en: "tag" },
          { fr: "*", en: "*" },
          { fr: ".classe < balise", en: ".class < tag" },
        ],
        correctAnswer: { fr: "#id", en: "#id" },
        hint: { fr: "id > class > element.", en: "id > class > element." },
        explanation: {
          fr: "Les sélecteurs d'id battent classes et balises.",
          en: "ID selectors beat classes and tags.",
        },
      },
      {
        id: "web-css-basics-q3",
        type: "multiple-choice",
        question: {
          fr: "padding se situe…",
          en: "padding sits…",
        },
        options: [
          { fr: "Entre content et border", en: "Between content and border" },
          { fr: "Hors de la margin", en: "Outside the margin" },
          { fr: "Dans le DNS", en: "In DNS" },
          { fr: "Uniquement en HTML", en: "Only in HTML" },
        ],
        correctAnswer: { fr: "Entre content et border", en: "Between content and border" },
        hint: { fr: "Box model.", en: "Box model." },
        explanation: {
          fr: "padding = espace intérieur avant la bordure.",
          en: "padding = inner space before the border.",
        },
      },
      {
        id: "web-css-basics-q4",
        type: "multiple-choice",
        question: {
          fr: "display: flex sert à…",
          en: "display: flex is used to…",
        },
        options: [
          { fr: "Aligner des enfants sur un axe", en: "Align children on an axis" },
          { fr: "Créer une base SQL", en: "Create a SQL database" },
          { fr: "Signer un JWT", en: "Sign a JWT" },
          { fr: "Ouvrir un port 443", en: "Open port 443" },
        ],
        correctAnswer: { fr: "Aligner des enfants sur un axe", en: "Align children on an axis" },
        hint: { fr: "Mise en page 1D.", en: "1D layout." },
        explanation: {
          fr: "Flexbox organise les enfants horizontalement ou verticalement.",
          en: "Flexbox arranges children horizontally or vertically.",
        },
      },
      {
        id: "web-css-basics-q5",
        type: "multiple-choice",
        question: {
          fr: "Mobile-first utilise souvent…",
          en: "Mobile-first often uses…",
        },
        options: [
          { fr: "min-width dans les media queries", en: "min-width in media queries" },
          { fr: "Pas de CSS", en: "No CSS" },
          { fr: "Uniquement des #id", en: "Only #ids" },
          { fr: "HTTP 500", en: "HTTP 500" },
        ],
        correctAnswer: { fr: "min-width dans les media queries", en: "min-width in media queries" },
        hint: { fr: "Base = petit écran.", en: "Base = small screen." },
        explanation: {
          fr: "On enrichit ensuite pour les écrans plus larges.",
          en: "Then you enhance for wider screens.",
        },
      },
      {
        id: "web-css-basics-q6",
        type: "multiple-choice",
        question: {
          fr: "Abuser de !important…",
          en: "Overusing !important…",
        },
        options: [
          { fr: "Complique la maintenance", en: "Makes maintenance harder" },
          { fr: "Accélère le DNS", en: "Speeds up DNS" },
          { fr: "Remplace HTML", en: "Replaces HTML" },
          { fr: "Est obligatoire en flex", en: "Is required in flex" },
        ],
        correctAnswer: { fr: "Complique la maintenance", en: "Makes maintenance harder" },
        hint: { fr: "Cascade saine.", en: "Healthy cascade." },
        explanation: {
          fr: "Cela court-circuite la spécificité et rend le debug difficile.",
          en: "It bypasses specificity and makes debugging hard.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes le CSS : sélecteurs, cascade, box model, flex et responsive. Montre des snippets courts.",
        en: "You teach CSS: selectors, cascade, box model, flex, and responsive. Show short snippets.",
      },
      introMessage: {
        fr: "Habillons le HTML proprement. Sélecteurs ou box model d'abord ?",
        en: "Let's style HTML cleanly. Selectors or box model first?",
      },
      topics: [
        { fr: "Sélecteurs et cascade", en: "Selectors and cascade" },
        { fr: "Box model", en: "Box model" },
        { fr: "Flex et responsive", en: "Flex and responsive" },
      ],
    },
  },

  {
    id: "web-javascript-basics",
    unitId: "web-frontend",
    title: { fr: "Bases de JavaScript", en: "JavaScript basics" },
    description: {
      fr: "Variables, fonctions, conditions, tableaux et interaction avec le DOM.",
      en: "Variables, functions, conditionals, arrays, and DOM interaction.",
    },
    icon: "zap",
    estimatedMinutes: 19,
    xpReward: 25,
    goals: [
      {
        description: {
          fr: "Utiliser let/const, types simples et fonctions",
          en: "Use let/const, simple types, and functions",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Écrire conditions et boucles de base",
          en: "Write basic conditionals and loops",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Manipuler le DOM avec querySelector",
          en: "Manipulate the DOM with querySelector",
        },
        xpReward: 9,
      },
    ],
    sections: [
      {
        id: "web-javascript-basics-s1",
        title: { fr: "JS rend la page interactive", en: "JS makes the page interactive" },
        body: {
          fr: "JavaScript s'exécute dans le navigateur (ou côté serveur avec Node). Il réagit aux clics, valide des formulaires et met à jour l'interface sans recharger toute la page.",
          en: "JavaScript runs in the browser (or server-side with Node). It reacts to clicks, validates forms, and updates the UI without full page reloads.",
        },
        callout: {
          fr: "HTML structure, CSS présente, JS comportement.",
          en: "HTML structures, CSS presents, JS behaves.",
        },
        calloutKind: "key",
        diagram: "client-server-web",
      },
      {
        id: "web-javascript-basics-s2",
        title: { fr: "Variables et types", en: "Variables and types" },
        body: {
          fr: "Préfère const par défaut, let si la valeur change. number, string, boolean, null, undefined et object sont les bases. Évite var en code moderne.",
          en: "Prefer const by default, let if the value changes. number, string, boolean, null, undefined, and object are the basics. Avoid var in modern code.",
        },
        callout: {
          fr: "Déclarer sans const/let crée une variable globale implicite — piège classique.",
          en: "Declaring without const/let creates an implicit global — a classic trap.",
        },
        calloutKind: "mistake",
        codeExample: {
          language: "javascript",
          code: "const name = \"Nova\";\nlet score = 0;\nscore += 10;\nconsole.log(`${name}: ${score}`);",
          caption: { fr: "const pour l'immuable, let pour le compteur.", en: "const for immutable, let for the counter." },
        },
      },
      {
        id: "web-javascript-basics-s3",
        title: { fr: "Fonctions", en: "Functions" },
        body: {
          fr: "Les fonctions encapsulent une logique réutilisable. Fléchées ou classiques, elles prennent des paramètres et peuvent retourner une valeur.",
          en: "Functions encapsulate reusable logic. Arrow or classic, they take parameters and can return a value.",
        },
        codeExample: {
          language: "javascript",
          code: "function greet(user) {\n  return `Hello, ${user}`;\n}\nconst add = (a, b) => a + b;",
          caption: { fr: "Deux styles courants.", en: "Two common styles." },
        },
      },
      {
        id: "web-javascript-basics-s4",
        title: { fr: "Conditions et boucles", en: "Conditionals and loops" },
        body: {
          fr: "if/else et switch orientent le flux. for, while et for...of parcourent des listes. Garde les conditions lisibles.",
          en: "if/else and switch direct flow. for, while, and for...of walk lists. Keep conditions readable.",
        },
        bullets: [
          { fr: "=== compare valeur et type", en: "=== compares value and type" },
          { fr: "for...of pour les tableaux", en: "for...of for arrays" },
          { fr: "Évite les boucles infinies", en: "Avoid infinite loops" },
        ],
        analogy: {
          fr: "Une fonction est une recette : entrées (ingrédients), étapes, résultat (plat).",
          en: "A function is a recipe: inputs (ingredients), steps, result (dish).",
        },
      },
      {
        id: "web-javascript-basics-s5",
        title: { fr: "Tableaux et objets", en: "Arrays and objects" },
        body: {
          fr: "Les tableaux listent des valeurs ordonnées ; les objets associent des clés à des valeurs. map, filter et find sont tes alliés.",
          en: "Arrays list ordered values; objects map keys to values. map, filter, and find are your allies.",
        },
        callout: {
          fr: "Muter un tableau partagé sans précaution crée des bugs difficiles.",
          en: "Mutating a shared array carelessly creates hard bugs.",
        },
        calloutKind: "warning",
        codeExample: {
          language: "javascript",
          code: "const users = [{ id: 1, name: \"Ada\" }, { id: 2, name: \"Lin\" }];\nconst names = users.map((u) => u.name);",
          caption: { fr: "Transformer une liste proprement.", en: "Transform a list cleanly." },
        },
      },
      {
        id: "web-javascript-basics-s6",
        title: { fr: "Premier contact DOM", en: "First DOM contact" },
        body: {
          fr: "document.querySelector sélectionne un élément. textContent et classList permettent de le modifier après un événement.",
          en: "document.querySelector selects an element. textContent and classList let you change it after an event.",
        },
        diagram: "dom-tree",
        codeExample: {
          language: "javascript",
          code: "const btn = document.querySelector(\"#save\");\nbtn.addEventListener(\"click\", () => {\n  btn.textContent = \"Saved\";\n});",
          caption: { fr: "Clic → mise à jour du texte.", en: "Click → update text." },
        },
      },
      {
        id: "web-javascript-basics-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Un bouton « +1 » incrémente un compteur affiché dans un span.",
          en: "A +1 button increments a counter shown in a span.",
        },
        miniExercise: {
          prompt: {
            fr: "Quelles API DOM et quelle variable utiliserais-tu ?",
            en: "Which DOM APIs and variable would you use?",
          },
          hint: { fr: "let count, querySelector, click, textContent.", en: "let count, querySelector, click, textContent." },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "const / let", en: "const / let" },
        definition: {
          fr: "Mots-clés de déclaration de variables.",
          en: "Variable declaration keywords.",
        },
      },
      {
        term: { fr: "Fonction", en: "Function" },
        definition: {
          fr: "Bloc de code réutilisable avec paramètres.",
          en: "Reusable code block with parameters.",
        },
      },
      {
        term: { fr: "Tableau", en: "Array" },
        definition: {
          fr: "Liste ordonnée de valeurs.",
          en: "Ordered list of values.",
        },
      },
      {
        term: { fr: "Objet", en: "Object" },
        definition: {
          fr: "Collection de paires clé/valeur.",
          en: "Collection of key/value pairs.",
        },
      },
      {
        term: { fr: "DOM", en: "DOM" },
        definition: {
          fr: "Représentation programmable de la page.",
          en: "Programmable representation of the page.",
        },
      },
    ],
    activities: [
      {
        id: "web-javascript-basics-q1",
        type: "multiple-choice",
        question: {
          fr: "Quelle déclaration pour une valeur qui ne change pas ?",
          en: "Which declaration for a value that does not change?",
        },
        options: [
          { fr: "const", en: "const" },
          { fr: "var uniquement", en: "var only" },
          { fr: "goto", en: "goto" },
          { fr: "html", en: "html" },
        ],
        correctAnswer: { fr: "const", en: "const" },
        hint: { fr: "Immuabilité par défaut.", en: "Immutability by default." },
        explanation: {
          fr: "const empêche la réaffectation de la liaison.",
          en: "const prevents reassigning the binding.",
        },
      },
      {
        id: "web-javascript-basics-q2",
        type: "multiple-choice",
        question: {
          fr: "=== compare…",
          en: "=== compares…",
        },
        options: [
          { fr: "Valeur et type", en: "Value and type" },
          { fr: "Uniquement les couleurs CSS", en: "Only CSS colors" },
          { fr: "Les certificats TLS", en: "TLS certificates" },
          { fr: "Les ports ouverts", en: "Open ports" },
        ],
        correctAnswer: { fr: "Valeur et type", en: "Value and type" },
        hint: { fr: "Égalité stricte.", en: "Strict equality." },
        explanation: {
          fr: "=== évite les coercitions surprenantes de ==.",
          en: "=== avoids surprising == coercions.",
        },
      },
      {
        id: "web-javascript-basics-q3",
        type: "multiple-choice",
        question: {
          fr: "map sur un tableau sert à…",
          en: "map on an array is used to…",
        },
        options: [
          { fr: "Transformer chaque élément", en: "Transform each element" },
          { fr: "Supprimer le DNS", en: "Delete DNS" },
          { fr: "Chiffrer HTTPS", en: "Encrypt HTTPS" },
          { fr: "Créer un routeur", en: "Create a router" },
        ],
        correctAnswer: { fr: "Transformer chaque élément", en: "Transform each element" },
        hint: { fr: "Nouveau tableau dérivé.", en: "Derived new array." },
        explanation: {
          fr: "map retourne un tableau de même longueur transformé.",
          en: "map returns a same-length transformed array.",
        },
      },
      {
        id: "web-javascript-basics-q4",
        type: "multiple-choice",
        question: {
          fr: "querySelector(\"#save\") cible…",
          en: "querySelector(\"#save\") targets…",
        },
        options: [
          { fr: "L'élément d'id save", en: "The element with id save" },
          { fr: "Tous les CSS", en: "All CSS" },
          { fr: "Le serveur SQL", en: "The SQL server" },
          { fr: "Le certificat", en: "The certificate" },
        ],
        correctAnswer: { fr: "L'élément d'id save", en: "The element with id save" },
        hint: { fr: "Sélecteur CSS #.", en: "CSS # selector." },
        explanation: {
          fr: "La syntaxe reprend les sélecteurs CSS.",
          en: "The syntax reuses CSS selectors.",
        },
      },
      {
        id: "web-javascript-basics-q5",
        type: "multiple-choice",
        question: {
          fr: "addEventListener(\"click\", …) sert à…",
          en: "addEventListener(\"click\", …) is for…",
        },
        options: [
          { fr: "Réagir à un clic", en: "React to a click" },
          { fr: "Compiler TypeScript", en: "Compile TypeScript" },
          { fr: "Ouvrir le port 80", en: "Open port 80" },
          { fr: "Signer un JWT", en: "Sign a JWT" },
        ],
        correctAnswer: { fr: "Réagir à un clic", en: "React to a click" },
        hint: { fr: "Événements DOM.", en: "DOM events." },
        explanation: {
          fr: "On enregistre une fonction rappel quand l'événement survient.",
          en: "You register a callback when the event occurs.",
        },
      },
      {
        id: "web-javascript-basics-q6",
        type: "multiple-choice",
        question: {
          fr: "Écrire x = 1 sans const/let…",
          en: "Writing x = 1 without const/let…",
        },
        options: [
          { fr: "Risque de variable globale implicite", en: "Risks an implicit global" },
          { fr: "Est obligatoire", en: "Is required" },
          { fr: "Active HTTPS", en: "Enables HTTPS" },
          { fr: "Crée un index SQL", en: "Creates a SQL index" },
        ],
        correctAnswer: { fr: "Risque de variable globale implicite", en: "Risks an implicit global" },
        hint: { fr: "Mode non strict / oubli fréquent.", en: "Non-strict mode / common slip." },
        explanation: {
          fr: "Toujours déclarer explicitement tes variables.",
          en: "Always declare your variables explicitly.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes JavaScript débutant : variables, fonctions, tableaux et DOM. Corrige les confusions var/const et ==/===.",
        en: "You teach beginner JavaScript: variables, functions, arrays, and DOM. Correct var/const and ==/=== mix-ups.",
      },
      introMessage: {
        fr: "Passons le HTML en mode interactif. Variables ou DOM en premier ?",
        en: "Let's make HTML interactive. Variables or DOM first?",
      },
      topics: [
        { fr: "Variables et fonctions", en: "Variables and functions" },
        { fr: "Tableaux", en: "Arrays" },
        { fr: "DOM et événements", en: "DOM and events" },
      ],
    },
  },

  {
    id: "web-dom-events-responsive",
    unitId: "web-frontend",
    title: { fr: "DOM, événements et responsive", en: "DOM, events, and responsive" },
    description: {
      fr: "Arbre DOM, écouteurs d'événements, délégation et interfaces adaptatives.",
      en: "DOM tree, event listeners, delegation, and adaptive interfaces.",
    },
    icon: "sparkles",
    estimatedMinutes: 18,
    xpReward: 24,
    goals: [
      {
        description: {
          fr: "Naviguer et modifier le DOM en toute sécurité",
          en: "Navigate and modify the DOM safely",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Gérer clics et formulaires avec des listeners",
          en: "Handle clicks and forms with listeners",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Relier JS et CSS responsive",
          en: "Connect JS and responsive CSS",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-dom-events-responsive-s1",
        title: { fr: "Le DOM en action", en: "The DOM in action" },
        body: {
          fr: "Après le parse HTML, le navigateur expose un arbre d'objets. Modifier le DOM met à jour ce que l'utilisateur voit.",
          en: "After HTML parsing, the browser exposes an object tree. Changing the DOM updates what the user sees.",
        },
        callout: {
          fr: "Trop de lectures/écritures DOM dans une boucle peut freiner les perfs.",
          en: "Too many DOM reads/writes in a loop can hurt performance.",
        },
        calloutKind: "warning",
        diagram: "dom-tree",
      },
      {
        id: "web-dom-events-responsive-s2",
        title: { fr: "Sélection et modification", en: "Selection and modification" },
        body: {
          fr: "querySelector / querySelectorAll trouvent des nœuds. textContent, innerHTML (avec prudence XSS), classList et setAttribute les font évoluer.",
          en: "querySelector / querySelectorAll find nodes. textContent, innerHTML (XSS caution), classList, and setAttribute change them.",
        },
        callout: {
          fr: "Préfère textContent à innerHTML quand tu n'as pas besoin de balises.",
          en: "Prefer textContent over innerHTML when you don't need markup.",
        },
        calloutKind: "tip",
        codeExample: {
          language: "javascript",
          code: "const el = document.querySelector(\".badge\");\nel.classList.add(\"badge--active\");\nel.setAttribute(\"aria-pressed\", \"true\");",
          caption: { fr: "État visuel + accessibilité.", en: "Visual state + accessibility." },
        },
      },
      {
        id: "web-dom-events-responsive-s3",
        title: { fr: "Événements", en: "Events" },
        body: {
          fr: "click, input, submit, keydown… Le navigateur déclenche des événements. Tes listeners y réagissent.",
          en: "click, input, submit, keydown… The browser fires events. Your listeners react.",
        },
        bullets: [
          { fr: "preventDefault stoppe le comportement natif", en: "preventDefault stops native behavior" },
          { fr: "stopPropagation limite la remontée", en: "stopPropagation limits bubbling" },
          { fr: "Une fois le DOM prêt : DOMContentLoaded", en: "Once DOM ready: DOMContentLoaded" },
        ],
      },
      {
        id: "web-dom-events-responsive-s4",
        title: { fr: "Délégation d'événements", en: "Event delegation" },
        body: {
          fr: "Écoute un parent plutôt que chaque enfant. Utile pour listes dynamiques : un seul listener gère les clics via event.target.",
          en: "Listen on a parent instead of each child. Useful for dynamic lists: one listener handles clicks via event.target.",
        },
        callout: {
          fr: "Attacher 200 listeners individuels sur une liste longue est souvent inutile.",
          en: "Attaching 200 individual listeners on a long list is often unnecessary.",
        },
        calloutKind: "mistake",
        analogy: {
          fr: "Comme un réceptionniste d'immeuble : un point d'entrée pour tous les colis des appartements.",
          en: "Like a building receptionist: one entry point for all apartments' packages.",
        },
      },
      {
        id: "web-dom-events-responsive-s5",
        title: { fr: "Formulaires interactifs", en: "Interactive forms" },
        body: {
          fr: "Écoute submit, valide côté client pour le confort, mais toujours revalide côté serveur. Affiche des messages d'erreur accessibles.",
          en: "Listen to submit, validate client-side for comfort, but always revalidate server-side. Show accessible error messages.",
        },
        codeExample: {
          language: "javascript",
          code: "form.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  if (!email.value.includes(\"@\")) {\n    error.textContent = \"Email invalide\";\n    return;\n  }\n  form.submit();\n});",
          caption: { fr: "Validation légère avant envoi.", en: "Light validation before send." },
        },
      },
      {
        id: "web-dom-events-responsive-s6",
        title: { fr: "Responsive + JS", en: "Responsive + JS" },
        body: {
          fr: "matchMedia synchronise JS avec tes breakpoints CSS. Évite de dupliquer toute la logique de layout en JS si le CSS suffit.",
          en: "matchMedia syncs JS with your CSS breakpoints. Avoid duplicating all layout logic in JS if CSS is enough.",
        },
        bullets: [
          { fr: "CSS d'abord pour le layout", en: "CSS first for layout" },
          { fr: "JS pour comportement et états", en: "JS for behavior and state" },
          { fr: "Tester clavier et petits écrans", en: "Test keyboard and small screens" },
        ],
        callout: {
          fr: "Un menu mobile doit aussi fonctionner au clavier (Esc, focus).",
          en: "A mobile menu must also work with keyboard (Esc, focus).",
        },
        calloutKind: "key",
        diagram: "client-server-web",
      },
      {
        id: "web-dom-events-responsive-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Liste de tâches : cliquer une tâche la barre ; un bouton ajoute une nouvelle tâche.",
          en: "Todo list: clicking a task strikes it; a button adds a new task.",
        },
        miniExercise: {
          prompt: {
            fr: "Où placerais-tu le listener et comment éviter innerHTML non fiable ?",
            en: "Where would you place the listener and how avoid unsafe innerHTML?",
          },
          hint: { fr: "Délégation sur ul + createElement/textContent.", en: "Delegation on ul + createElement/textContent." },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Événement", en: "Event" },
        definition: {
          fr: "Signal du navigateur (clic, saisie…).",
          en: "Browser signal (click, input…).",
        },
      },
      {
        term: { fr: "Listener", en: "Listener" },
        definition: {
          fr: "Fonction appelée quand un événement survient.",
          en: "Function called when an event occurs.",
        },
      },
      {
        term: { fr: "Bubbling", en: "Bubbling" },
        definition: {
          fr: "Remontée de l'événement vers les parents.",
          en: "Event rising toward parents.",
        },
      },
      {
        term: { fr: "Délégation", en: "Delegation" },
        definition: {
          fr: "Écouter un ancêtre pour ses descendants.",
          en: "Listen on an ancestor for descendants.",
        },
      },
      {
        term: { fr: "matchMedia", en: "matchMedia" },
        definition: {
          fr: "API JS pour tester des media queries.",
          en: "JS API to test media queries.",
        },
      },
    ],
    activities: [
      {
        id: "web-dom-events-responsive-q1",
        type: "multiple-choice",
        question: {
          fr: "Le DOM est…",
          en: "The DOM is…",
        },
        options: [
          { fr: "Une représentation objet de la page", en: "An object representation of the page" },
          { fr: "Un protocole DNS", en: "A DNS protocol" },
          { fr: "Un certificat TLS", en: "A TLS certificate" },
          { fr: "Une base SQL", en: "A SQL database" },
        ],
        correctAnswer: { fr: "Une représentation objet de la page", en: "An object representation of the page" },
        hint: { fr: "Arbre de nœuds.", en: "Node tree." },
        explanation: {
          fr: "JS lit et modifie cet arbre pour changer l'UI.",
          en: "JS reads and modifies this tree to change the UI.",
        },
      },
      {
        id: "web-dom-events-responsive-q2",
        type: "multiple-choice",
        question: {
          fr: "preventDefault sert à…",
          en: "preventDefault is used to…",
        },
        options: [
          { fr: "Annuler le comportement par défaut", en: "Cancel default behavior" },
          { fr: "Supprimer le CSS", en: "Delete CSS" },
          { fr: "Ouvrir le port 443", en: "Open port 443" },
          { fr: "Compiler HTML", en: "Compile HTML" },
        ],
        correctAnswer: { fr: "Annuler le comportement par défaut", en: "Cancel default behavior" },
        hint: { fr: "Ex. submit de formulaire.", en: "E.g. form submit." },
        explanation: {
          fr: "Utile pour valider avant d'envoyer réellement.",
          en: "Useful to validate before actually sending.",
        },
      },
      {
        id: "web-dom-events-responsive-q3",
        type: "multiple-choice",
        question: {
          fr: "La délégation d'événements…",
          en: "Event delegation…",
        },
        options: [
          { fr: "Écoute un parent pour gérer les enfants", en: "Listens on a parent to handle children" },
          { fr: "Remplace HTTPS", en: "Replaces HTTPS" },
          { fr: "Désactive le DOM", en: "Disables the DOM" },
          { fr: "Crée des cookies HttpOnly", en: "Creates HttpOnly cookies" },
        ],
        correctAnswer: { fr: "Écoute un parent pour gérer les enfants", en: "Listens on a parent to handle children" },
        hint: { fr: "Listes dynamiques.", en: "Dynamic lists." },
        explanation: {
          fr: "Un listener sur le conteneur suffit souvent.",
          en: "One listener on the container is often enough.",
        },
      },
      {
        id: "web-dom-events-responsive-q4",
        type: "multiple-choice",
        question: {
          fr: "innerHTML avec données utilisateur non filtrées…",
          en: "innerHTML with unfiltered user data…",
        },
        options: [
          { fr: "Risque XSS", en: "XSS risk" },
          { fr: "Améliore le SEO magiquement", en: "Magically improves SEO" },
          { fr: "Est plus sûr que textContent", en: "Is safer than textContent" },
          { fr: "Chiffre le trafic", en: "Encrypts traffic" },
        ],
        correctAnswer: { fr: "Risque XSS", en: "XSS risk" },
        hint: { fr: "Injection de HTML/JS.", en: "HTML/JS injection." },
        explanation: {
          fr: "textContent ou sanitization réduisent le risque.",
          en: "textContent or sanitization reduce the risk.",
        },
      },
      {
        id: "web-dom-events-responsive-q5",
        type: "multiple-choice",
        question: {
          fr: "matchMedia relie…",
          en: "matchMedia connects…",
        },
        options: [
          { fr: "JS et breakpoints CSS", en: "JS and CSS breakpoints" },
          { fr: "SQL et DNS", en: "SQL and DNS" },
          { fr: "JWT et CORS uniquement", en: "JWT and CORS only" },
          { fr: "FTP et SSH", en: "FTP and SSH" },
        ],
        correctAnswer: { fr: "JS et breakpoints CSS", en: "JS and CSS breakpoints" },
        hint: { fr: "Responsive programmatique.", en: "Programmatic responsive." },
        explanation: {
          fr: "Tu peux adapter le comportement JS selon la largeur.",
          en: "You can adapt JS behavior by width.",
        },
      },
      {
        id: "web-dom-events-responsive-q6",
        type: "multiple-choice",
        question: {
          fr: "Pour le layout responsive, commence par…",
          en: "For responsive layout, start with…",
        },
        options: [
          { fr: "CSS (flex/grid/media queries)", en: "CSS (flex/grid/media queries)" },
          { fr: "Tout refaire en alert()", en: "Redo everything with alert()" },
          { fr: "Désactiver HTML", en: "Disable HTML" },
          { fr: "Uniquement des tables layout 1998", en: "Only 1998 layout tables" },
        ],
        correctAnswer: { fr: "CSS (flex/grid/media queries)", en: "CSS (flex/grid/media queries)" },
        hint: { fr: "CSS d'abord.", en: "CSS first." },
        explanation: {
          fr: "JS complète le comportement, il ne remplace pas le layout CSS.",
          en: "JS complements behavior; it doesn't replace CSS layout.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes DOM, événements, délégation et responsive. Insiste sur l'accessibilité et les risques XSS avec innerHTML.",
        en: "You teach DOM, events, delegation, and responsive. Stress accessibility and XSS risks with innerHTML.",
      },
      introMessage: {
        fr: "Rendons l'UI vivante et adaptée aux écrans. Événements ou responsive ?",
        en: "Let's make UI lively and screen-aware. Events or responsive?",
      },
      topics: [
        { fr: "Manipulation DOM", en: "DOM manipulation" },
        { fr: "Événements et délégation", en: "Events and delegation" },
        { fr: "Responsive + JS", en: "Responsive + JS" },
      ],
    },
  },

  {
    id: "web-server-routes",
    unitId: "web-backend",
    title: { fr: "Serveur et routes", en: "Server and routes" },
    description: {
      fr: "Comment un serveur web écoute, route les URLs et renvoie des réponses.",
      en: "How a web server listens, routes URLs, and returns responses.",
    },
    icon: "home",
    estimatedMinutes: 17,
    xpReward: 23,
    goals: [
      {
        description: {
          fr: "Expliquer écoute, ports et handlers",
          en: "Explain listening, ports, and handlers",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Mapper des URLs vers des routes",
          en: "Map URLs to routes",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Distinguer statique et dynamique",
          en: "Distinguish static and dynamic",
        },
        xpReward: 7,
      },
    ],
    sections: [
      {
        id: "web-server-routes-s1",
        title: { fr: "Un serveur qui écoute", en: "A listening server" },
        body: {
          fr: "Le processus serveur se lie à une adresse et un port (ex. :3000 ou :443). Chaque connexion entrante est acceptée puis traitée par du code applicatif.",
          en: "The server process binds to an address and port (e.g. :3000 or :443). Each incoming connection is accepted then handled by application code.",
        },
        callout: {
          fr: "Sans processus à l'écoute, le client obtient connection refused.",
          en: "Without a listening process, the client gets connection refused.",
        },
        calloutKind: "key",
        diagram: "client-server-web",
      },
      {
        id: "web-server-routes-s2",
        title: { fr: "Routage", en: "Routing" },
        body: {
          fr: "Une route associe méthode + chemin à un handler. GET /users et POST /users sont deux routes distinctes.",
          en: "A route maps method + path to a handler. GET /users and POST /users are two distinct routes.",
        },
        codeExample: {
          language: "javascript",
          code: "app.get(\"/health\", (req, res) => {\n  res.status(200).json({ ok: true });\n});\napp.post(\"/users\", createUser);",
          caption: { fr: "Routes Express typiques.", en: "Typical Express routes." },
        },
      },
      {
        id: "web-server-routes-s3",
        title: { fr: "Paramètres et query", en: "Params and query" },
        body: {
          fr: "/users/:id capture un segment. ?page=2 arrive dans la query string. Valide toujours ces entrées.",
          en: "/users/:id captures a segment. ?page=2 arrives in the query string. Always validate these inputs.",
        },
        bullets: [
          { fr: "Params : parties variables du chemin", en: "Params: variable path parts" },
          { fr: "Query : filtres optionnels", en: "Query: optional filters" },
          { fr: "Body : données POST/PUT (JSON, form)", en: "Body: POST/PUT data (JSON, form)" },
        ],
        callout: {
          fr: "Faire confiance aveuglément à req.params.id ouvre la porte aux injections.",
          en: "Blindly trusting req.params.id opens the door to injections.",
        },
        calloutKind: "warning",
      },
      {
        id: "web-server-routes-s4",
        title: { fr: "Middleware", en: "Middleware" },
        body: {
          fr: "Les middlewares s'exécutent en chaîne : logs, auth, parsing JSON, puis la route. next() passe au suivant.",
          en: "Middleware runs in a chain: logs, auth, JSON parsing, then the route. next() moves onward.",
        },
        analogy: {
          fr: "Comme des contrôles à l'aéroport : identité, sécurité, puis embarquement.",
          en: "Like airport checks: ID, security, then boarding.",
        },
      },
      {
        id: "web-server-routes-s5",
        title: { fr: "Statique vs dynamique", en: "Static vs dynamic" },
        body: {
          fr: "Fichiers statiques (HTML/CSS/JS build) sont servis tels quels. Les réponses dynamiques sont calculées (templates, JSON API).",
          en: "Static files (HTML/CSS/JS build) are served as-is. Dynamic responses are computed (templates, JSON API).",
        },
        callout: {
          fr: "Servir index.html pour toutes les routes SPA n'est pas la même chose qu'une API REST.",
          en: "Serving index.html for all SPA routes is not the same as a REST API.",
        },
        calloutKind: "tip",
        diagram: "request-lifecycle",
      },
      {
        id: "web-server-routes-s6",
        title: { fr: "Codes et erreurs", en: "Status codes and errors" },
        body: {
          fr: "404 si route inconnue, 400 si entrée invalide, 500 si exception non gérée. Centralise le handler d'erreurs.",
          en: "404 if unknown route, 400 if invalid input, 500 if unhandled exception. Centralize the error handler.",
        },
        callout: {
          fr: "Renvoyer 200 avec { error: true } brouille les clients et le monitoring.",
          en: "Returning 200 with { error: true } confuses clients and monitoring.",
        },
        calloutKind: "mistake",
      },
      {
        id: "web-server-routes-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "API blog : liste des posts, détail par id, création.",
          en: "Blog API: list posts, detail by id, create.",
        },
        miniExercise: {
          prompt: {
            fr: "Quelles méthodes et chemins proposerais-tu ?",
            en: "Which methods and paths would you propose?",
          },
          hint: { fr: "GET /posts, GET /posts/:id, POST /posts.", en: "GET /posts, GET /posts/:id, POST /posts." },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Route", en: "Route" },
        definition: {
          fr: "Association méthode + chemin → handler.",
          en: "Method + path → handler mapping.",
        },
      },
      {
        term: { fr: "Handler", en: "Handler" },
        definition: {
          fr: "Fonction qui traite la requête.",
          en: "Function that handles the request.",
        },
      },
      {
        term: { fr: "Middleware", en: "Middleware" },
        definition: {
          fr: "Couche intermédiaire dans le pipeline.",
          en: "Intermediate layer in the pipeline.",
        },
      },
      {
        term: { fr: "Port", en: "Port" },
        definition: {
          fr: "Numéro d'écoute du service (ex. 443).",
          en: "Service listen number (e.g. 443).",
        },
      },
      {
        term: { fr: "Query string", en: "Query string" },
        definition: {
          fr: "Paramètres après ? dans l'URL.",
          en: "Parameters after ? in the URL.",
        },
      },
    ],
    activities: [
      {
        id: "web-server-routes-q1",
        type: "multiple-choice",
        question: {
          fr: "Une route web associe surtout…",
          en: "A web route mainly maps…",
        },
        options: [
          { fr: "Méthode + chemin → handler", en: "Method + path → handler" },
          { fr: "CSS → DNS", en: "CSS → DNS" },
          { fr: "Certificat → GPU", en: "Certificate → GPU" },
          { fr: "Cookie → BIOS", en: "Cookie → BIOS" },
        ],
        correctAnswer: { fr: "Méthode + chemin → handler", en: "Method + path → handler" },
        hint: { fr: "Routage HTTP.", en: "HTTP routing." },
        explanation: {
          fr: "Le serveur choisit le code selon verbe et URL.",
          en: "The server picks code by verb and URL.",
        },
      },
      {
        id: "web-server-routes-q2",
        type: "multiple-choice",
        question: {
          fr: "GET /users/:id utilise…",
          en: "GET /users/:id uses…",
        },
        options: [
          { fr: "Un paramètre de chemin", en: "A path parameter" },
          { fr: "Uniquement un cookie HttpOnly", en: "Only an HttpOnly cookie" },
          { fr: "OSPF", en: "OSPF" },
          { fr: "Un media query", en: "A media query" },
        ],
        correctAnswer: { fr: "Un paramètre de chemin", en: "A path parameter" },
        hint: { fr: "Segment variable.", en: "Variable segment." },
        explanation: {
          fr: ":id est extrait du chemin et passé au handler.",
          en: ":id is extracted from the path and passed to the handler.",
        },
      },
      {
        id: "web-server-routes-q3",
        type: "multiple-choice",
        question: {
          fr: "Le middleware s'exécute…",
          en: "Middleware runs…",
        },
        options: [
          { fr: "Avant/autour du handler de route", en: "Before/around the route handler" },
          { fr: "Après la fermeture du navigateur seulement", en: "Only after the browser closes" },
          { fr: "Dans le CSS", en: "In CSS" },
          { fr: "Uniquement en DNS", en: "Only in DNS" },
        ],
        correctAnswer: { fr: "Avant/autour du handler de route", en: "Before/around the route handler" },
        hint: { fr: "Pipeline.", en: "Pipeline." },
        explanation: {
          fr: "Auth, logs et parsing passent souvent en middleware.",
          en: "Auth, logs, and parsing often run as middleware.",
        },
      },
      {
        id: "web-server-routes-q4",
        type: "multiple-choice",
        question: {
          fr: "Fichier CSS dans /public est plutôt…",
          en: "A CSS file in /public is rather…",
        },
        options: [
          { fr: "Contenu statique", en: "Static content" },
          { fr: "Une transaction SQL", en: "A SQL transaction" },
          { fr: "Un handshake TLS", en: "A TLS handshake" },
          { fr: "Un JWT signé", en: "A signed JWT" },
        ],
        correctAnswer: { fr: "Contenu statique", en: "Static content" },
        hint: { fr: "Servi tel quel.", en: "Served as-is." },
        explanation: {
          fr: "Pas de logique métier à chaque octet du fichier.",
          en: "No business logic per file byte.",
        },
      },
      {
        id: "web-server-routes-q5",
        type: "multiple-choice",
        question: {
          fr: "Route inconnue → code typique…",
          en: "Unknown route → typical code…",
        },
        options: [
          { fr: "404", en: "404" },
          { fr: "200 obligatoire", en: "200 required" },
          { fr: "301 toujours", en: "Always 301" },
          { fr: "101", en: "101" },
        ],
        correctAnswer: { fr: "404", en: "404" },
        hint: { fr: "Client a mal adressé.", en: "Client addressed wrongly." },
        explanation: {
          fr: "404 Not Found est le standard.",
          en: "404 Not Found is the standard.",
        },
      },
      {
        id: "web-server-routes-q6",
        type: "multiple-choice",
        question: {
          fr: "Renvoyer 200 avec une erreur métier…",
          en: "Returning 200 with a business error…",
        },
        options: [
          { fr: "Est une mauvaise pratique courante", en: "Is a common bad practice" },
          { fr: "Est exigé par HTTP/2", en: "Is required by HTTP/2" },
          { fr: "Active CORS", en: "Enables CORS" },
          { fr: "Remplace HTTPS", en: "Replaces HTTPS" },
        ],
        correctAnswer: { fr: "Est une mauvaise pratique courante", en: "Is a common bad practice" },
        hint: { fr: "Sémantique des status.", en: "Status semantics." },
        explanation: {
          fr: "Les clients et outils s'appuient sur les codes HTTP.",
          en: "Clients and tools rely on HTTP codes.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes serveurs web et routage : ports, routes, middleware, statique/dynamique. Donne des exemples Express simples.",
        en: "You teach web servers and routing: ports, routes, middleware, static/dynamic. Give simple Express examples.",
      },
      introMessage: {
        fr: "Branchons le backend. Routes ou middleware en premier ?",
        en: "Let's wire the backend. Routes or middleware first?",
      },
      topics: [
        { fr: "Écoute et ports", en: "Listening and ports" },
        { fr: "Routes et params", en: "Routes and params" },
        { fr: "Middleware", en: "Middleware" },
      ],
    },
  },

  {
    id: "web-rest-api",
    unitId: "web-backend",
    title: { fr: "API REST", en: "REST API" },
    description: {
      fr: "Ressources, verbes HTTP, JSON, codes de statut et bonnes pratiques REST.",
      en: "Resources, HTTP verbs, JSON, status codes, and REST best practices.",
    },
    icon: "network",
    estimatedMinutes: 19,
    xpReward: 25,
    goals: [
      {
        description: {
          fr: "Modéliser des ressources et collections",
          en: "Model resources and collections",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Choisir verbes et codes adaptés",
          en: "Choose fitting verbs and status codes",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Concevoir des réponses JSON claires",
          en: "Design clear JSON responses",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-rest-api-s1",
        title: { fr: "REST en une idée", en: "REST in one idea" },
        body: {
          fr: "REST organise l'API autour de ressources identifiées par des URLs. On manipule l'état avec les verbes HTTP standard plutôt que des actions RPC obscures.",
          en: "REST organizes the API around resources identified by URLs. You manipulate state with standard HTTP verbs rather than obscure RPC actions.",
        },
        callout: {
          fr: "Pense noms (ressources), pas seulement verbes métier dans l'URL.",
          en: "Think nouns (resources), not only business verbs in the URL.",
        },
        calloutKind: "key",
        diagram: "rest-api",
      },
      {
        id: "web-rest-api-s2",
        title: { fr: "Collections et éléments", en: "Collections and items" },
        body: {
          fr: "/orders pour la collection, /orders/42 pour un élément. Les sous-ressources (/orders/42/items) restent possibles avec parcimonie.",
          en: "/orders for the collection, /orders/42 for an item. Sub-resources (/orders/42/items) are fine in moderation.",
        },
        bullets: [
          { fr: "GET collection : liste (souvent paginée)", en: "GET collection: list (often paginated)" },
          { fr: "POST collection : créer", en: "POST collection: create" },
          { fr: "GET/PATCH/DELETE item : lire/maj/supprimer", en: "GET/PATCH/DELETE item: read/update/delete" },
        ],
        callout: {
          fr: "/getUsers ou /createOrder dans le chemin casse le style REST.",
          en: "/getUsers or /createOrder in the path breaks REST style.",
        },
        calloutKind: "mistake",
      },
      {
        id: "web-rest-api-s3",
        title: { fr: "JSON comme contrat", en: "JSON as contract" },
        body: {
          fr: "Content-Type: application/json. Des champs stables, une doc claire, et des erreurs structurées aident les clients.",
          en: "Content-Type: application/json. Stable fields, clear docs, and structured errors help clients.",
        },
        codeExample: {
          language: "json",
          code: "{\n  \"id\": 42,\n  \"email\": \"ada@example.com\",\n  \"role\": \"admin\"\n}",
          caption: { fr: "Ressource user typique.", en: "Typical user resource." },
        },
      },
      {
        id: "web-rest-api-s4",
        title: { fr: "Idempotence", en: "Idempotency" },
        body: {
          fr: "GET, PUT, DELETE sont idéalement idempotents : les rejouer ne crée pas d'effet surprise. POST crée souvent une nouvelle ressource à chaque appel.",
          en: "GET, PUT, DELETE are ideally idempotent: replaying them shouldn't surprise. POST often creates a new resource each call.",
        },
        analogy: {
          fr: "Lire une page deux fois (GET) ne change pas le livre ; envoyer deux fois le même bon de commande (POST) peut doubler la commande.",
          en: "Reading a page twice (GET) doesn't change the book; submitting the same order twice (POST) may duplicate it.",
        },
      },
      {
        id: "web-rest-api-s5",
        title: { fr: "Codes utiles", en: "Useful status codes" },
        body: {
          fr: "200 OK, 201 Created, 204 No Content, 400 Bad Request, 401/403, 404, 409 Conflict, 500. Choisis-les avec intention.",
          en: "200 OK, 201 Created, 204 No Content, 400 Bad Request, 401/403, 404, 409 Conflict, 500. Choose them intentionally.",
        },
        callout: {
          fr: "201 + header Location après une création est une excellente habitude.",
          en: "201 + Location header after creation is an excellent habit.",
        },
        calloutKind: "tip",
        diagram: "request-lifecycle",
      },
      {
        id: "web-rest-api-s6",
        title: { fr: "Versioning et pagination", en: "Versioning and pagination" },
        body: {
          fr: "Préfixe /v1 ou header de version. Limit/offset ou curseurs pour les listes. Documente les breaking changes.",
          en: "/v1 prefix or version header. Limit/offset or cursors for lists. Document breaking changes.",
        },
        bullets: [
          { fr: "Ne renvoie pas 100k lignes d'un coup", en: "Don't return 100k rows at once" },
          { fr: "Stable : évite de renommer des champs à la légère", en: "Stability: avoid casually renaming fields" },
          { fr: "HATEOAS optionnel ; clarté d'abord", en: "HATEOAS optional; clarity first" },
        ],
        callout: {
          fr: "Changer le type d'un champ sans version casserait les apps clientes.",
          en: "Changing a field's type without versioning would break client apps.",
        },
        calloutKind: "warning",
      },
      {
        id: "web-rest-api-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "API librairie : livres et emprunts.",
          en: "Library API: books and loans.",
        },
        miniExercise: {
          prompt: {
            fr: "Propose 4 endpoints REST cohérents.",
            en: "Propose 4 coherent REST endpoints.",
          },
          hint: { fr: "GET/POST /books, GET /books/:id, POST /loans…", en: "GET/POST /books, GET /books/:id, POST /loans…" },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "REST", en: "REST" },
        definition: {
          fr: "Style d'API orienté ressources HTTP.",
          en: "HTTP resource-oriented API style.",
        },
      },
      {
        term: { fr: "Ressource", en: "Resource" },
        definition: {
          fr: "Entité exposée via une URL.",
          en: "Entity exposed via a URL.",
        },
      },
      {
        term: { fr: "Idempotent", en: "Idempotent" },
        definition: {
          fr: "Même effet si rejoué plusieurs fois.",
          en: "Same effect if replayed multiple times.",
        },
      },
      {
        term: { fr: "JSON", en: "JSON" },
        definition: {
          fr: "Format de données texte clé/valeur.",
          en: "Text key/value data format.",
        },
      },
      {
        term: { fr: "Pagination", en: "Pagination" },
        definition: {
          fr: "Découpage des listes en pages.",
          en: "Splitting lists into pages.",
        },
      },
    ],
    activities: [
      {
        id: "web-rest-api-q1",
        type: "multiple-choice",
        question: {
          fr: "En REST, une URL représente surtout…",
          en: "In REST, a URL mainly represents…",
        },
        options: [
          { fr: "Une ressource", en: "A resource" },
          { fr: "Un fichier CSS obligatoire", en: "A mandatory CSS file" },
          { fr: "Un certificat client", en: "A client certificate" },
          { fr: "Une media query", en: "A media query" },
        ],
        correctAnswer: { fr: "Une ressource", en: "A resource" },
        hint: { fr: "Noms, pas RPC obscur.", en: "Nouns, not obscure RPC." },
        explanation: {
          fr: "Les verbes HTTP expriment l'action sur la ressource.",
          en: "HTTP verbs express the action on the resource.",
        },
      },
      {
        id: "web-rest-api-q2",
        type: "multiple-choice",
        question: {
          fr: "Créer une ressource se fait souvent avec…",
          en: "Creating a resource is often done with…",
        },
        options: [
          { fr: "POST", en: "POST" },
          { fr: "GET uniquement", en: "GET only" },
          { fr: "OPTIONS exclusif", en: "OPTIONS only" },
          { fr: "TRACE", en: "TRACE" },
        ],
        correctAnswer: { fr: "POST", en: "POST" },
        hint: { fr: "Non idempotent en général.", en: "Generally not idempotent." },
        explanation: {
          fr: "POST sur la collection crée un nouvel élément.",
          en: "POST on the collection creates a new item.",
        },
      },
      {
        id: "web-rest-api-q3",
        type: "multiple-choice",
        question: {
          fr: "201 signifie…",
          en: "201 means…",
        },
        options: [
          { fr: "Created", en: "Created" },
          { fr: "No Content", en: "No Content" },
          { fr: "I'm a teapot uniquement", en: "I'm a teapot only" },
          { fr: "DNS NXDOMAIN", en: "DNS NXDOMAIN" },
        ],
        correctAnswer: { fr: "Created", en: "Created" },
        hint: { fr: "Création réussie.", en: "Successful creation." },
        explanation: {
          fr: "Souvent accompagné de Location.",
          en: "Often paired with Location.",
        },
      },
      {
        id: "web-rest-api-q4",
        type: "multiple-choice",
        question: {
          fr: "/createUser dans le path…",
          en: "/createUser in the path…",
        },
        options: [
          { fr: "Style plutôt RPC, peu REST", en: "More RPC style, less REST" },
          { fr: "Est obligatoire en HTTP/3", en: "Is required in HTTP/3" },
          { fr: "Active le TLS", en: "Enables TLS" },
          { fr: "Remplace JSON", en: "Replaces JSON" },
        ],
        correctAnswer: { fr: "Style plutôt RPC, peu REST", en: "More RPC style, less REST" },
        hint: { fr: "Préfère POST /users.", en: "Prefer POST /users." },
        explanation: {
          fr: "L'action est dans le verbe HTTP, la ressource dans l'URL.",
          en: "Action is in the HTTP verb, resource in the URL.",
        },
      },
      {
        id: "web-rest-api-q5",
        type: "multiple-choice",
        question: {
          fr: "GET devrait être…",
          en: "GET should be…",
        },
        options: [
          { fr: "Sûr et sans effet de bord", en: "Safe and side-effect free" },
          { fr: "La seule façon de supprimer", en: "The only way to delete" },
          { fr: "Toujours 500", en: "Always 500" },
          { fr: "Réservé au CSS", en: "Reserved for CSS" },
        ],
        correctAnswer: { fr: "Sûr et sans effet de bord", en: "Safe and side-effect free" },
        hint: { fr: "Idempotence / sûreté.", en: "Idempotency / safety." },
        explanation: {
          fr: "Les caches et crawlers supposent que GET ne mutile pas.",
          en: "Caches and crawlers assume GET doesn't mutate.",
        },
      },
      {
        id: "web-rest-api-q6",
        type: "multiple-choice",
        question: {
          fr: "La pagination sert à…",
          en: "Pagination is for…",
        },
        options: [
          { fr: "Limiter la taille des listes", en: "Limiting list size" },
          { fr: "Chiffrer les mots de passe", en: "Encrypting passwords" },
          { fr: "Remplacer les status codes", en: "Replacing status codes" },
          { fr: "Désactiver CORS", en: "Disabling CORS" },
        ],
        correctAnswer: { fr: "Limiter la taille des listes", en: "Limiting list size" },
        hint: { fr: "Perf et UX.", en: "Perf and UX." },
        explanation: {
          fr: "On renvoie des pages ou curseurs au lieu de tout.",
          en: "You return pages or cursors instead of everything.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes la conception d'API REST : ressources, verbes, JSON, codes, pagination. Corrige les URLs style RPC.",
        en: "You teach REST API design: resources, verbs, JSON, codes, pagination. Correct RPC-style URLs.",
      },
      introMessage: {
        fr: "Modélisons une API propre. Ressources ou codes de statut ?",
        en: "Let's model a clean API. Resources or status codes?",
      },
      topics: [
        { fr: "Ressources et URLs", en: "Resources and URLs" },
        { fr: "Verbes et codes", en: "Verbs and codes" },
        { fr: "JSON et pagination", en: "JSON and pagination" },
      ],
    },
  },

  {
    id: "web-auth-jwt",
    unitId: "web-backend",
    title: { fr: "Auth et JWT", en: "Auth and JWT" },
    description: {
      fr: "Sessions, tokens JWT, claims, expiration et bonnes pratiques d'auth web.",
      en: "Sessions, JWT tokens, claims, expiry, and web auth best practices.",
    },
    icon: "lock",
    estimatedMinutes: 20,
    xpReward: 26,
    goals: [
      {
        description: {
          fr: "Différencier session cookie et JWT",
          en: "Differentiate cookie session and JWT",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Lire la structure header.payload.signature",
          en: "Read header.payload.signature structure",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Appliquer expiration et stockage sûr",
          en: "Apply expiry and safe storage",
        },
        xpReward: 9,
      },
    ],
    sections: [
      {
        id: "web-auth-jwt-s1",
        title: { fr: "Authentifier vs autoriser", en: "Authenticate vs authorize" },
        body: {
          fr: "Authn = prouver qui tu es. Authz = ce que tu as le droit de faire. Les deux sont liés mais distincts.",
          en: "Authn = prove who you are. Authz = what you're allowed to do. Related but distinct.",
        },
        callout: {
          fr: "Être connecté (authn) ne donne pas tous les droits admin (authz).",
          en: "Being logged in (authn) doesn't grant all admin rights (authz).",
        },
        calloutKind: "key",
      },
      {
        id: "web-auth-jwt-s2",
        title: { fr: "Sessions classiques", en: "Classic sessions" },
        body: {
          fr: "Le serveur stocke la session ; le navigateur garde un cookie d'id. Simple à révoquer côté serveur.",
          en: "The server stores the session; the browser keeps an id cookie. Easy to revoke server-side.",
        },
        bullets: [
          { fr: "Cookie HttpOnly + Secure", en: "HttpOnly + Secure cookie" },
          { fr: "État côté serveur", en: "Server-side state" },
          { fr: "Logout = destruction session", en: "Logout = destroy session" },
        ],
        diagram: "jwt-flow",
      },
      {
        id: "web-auth-jwt-s3",
        title: { fr: "JWT : jeton autonome", en: "JWT: self-contained token" },
        body: {
          fr: "Un JWT porte des claims signés. Le serveur vérifie la signature sans forcément relire une session en base (selon le design).",
          en: "A JWT carries signed claims. The server verifies the signature without necessarily reading a DB session (depending on design).",
        },
        codeExample: {
          language: "text",
          code: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMifQ.signature",
          caption: { fr: "Trois parties encodées en Base64URL.", en: "Three Base64URL-encoded parts." },
        },
        analogy: {
          fr: "Comme un badge plastifié signé : on lit ton nom et le tampon ; on ne rappelle pas forcément l'accueil à chaque porte.",
          en: "Like a signed plastic badge: doors read your name and stamp; they may not call reception every time.",
        },
      },
      {
        id: "web-auth-jwt-s4",
        title: { fr: "Claims utiles", en: "Useful claims" },
        body: {
          fr: "sub (sujet), exp (expiration), iat (émis à), iss/aud. N'y mets pas de secrets sensibles en clair.",
          en: "sub (subject), exp (expiry), iat (issued at), iss/aud. Don't put sensitive secrets in cleartext.",
        },
        callout: {
          fr: "Le payload JWT est encodé, pas chiffré : tout le monde peut le lire.",
          en: "The JWT payload is encoded, not encrypted: anyone can read it.",
        },
        calloutKind: "warning",
      },
      {
        id: "web-auth-jwt-s5",
        title: { fr: "Où stocker le token ?", en: "Where to store the token?" },
        body: {
          fr: "localStorage est exposé au XSS. Cookies HttpOnly résistent mieux aux scripts. Short-lived access + refresh token est un pattern courant.",
          en: "localStorage is exposed to XSS. HttpOnly cookies resist scripts better. Short-lived access + refresh token is a common pattern.",
        },
        callout: {
          fr: "Mettre un JWT longue durée dans localStorage est une erreur fréquente.",
          en: "Putting a long-lived JWT in localStorage is a common mistake.",
        },
        calloutKind: "mistake",
      },
      {
        id: "web-auth-jwt-s6",
        title: { fr: "Vérification côté API", en: "API-side verification" },
        body: {
          fr: "Chaque requête protégée envoie le token (Authorization: Bearer). Le middleware vérifie signature, exp et rôles.",
          en: "Each protected request sends the token (Authorization: Bearer). Middleware checks signature, exp, and roles.",
        },
        callout: {
          fr: "Toujours vérifier la signature avec une clé secrète/privée côté serveur.",
          en: "Always verify the signature with a server-side secret/private key.",
        },
        calloutKind: "tip",
        diagram: "jwt-flow",
        codeExample: {
          language: "http",
          code: "GET /api/me HTTP/1.1\nAuthorization: Bearer eyJhbGciOi…",
          caption: { fr: "En-tête Bearer classique.", en: "Classic Bearer header." },
        },
      },
      {
        id: "web-auth-jwt-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "App SPA + API : login renvoie access 15 min et refresh 7 jours.",
          en: "SPA + API: login returns 15-min access and 7-day refresh.",
        },
        miniExercise: {
          prompt: {
            fr: "Où stocker chaque token et que faire à expiration de l'access ?",
            en: "Where to store each token and what on access expiry?",
          },
          hint: { fr: "Refresh HttpOnly ; access mémoire ; renouveler via /refresh.", en: "Refresh HttpOnly; access in memory; renew via /refresh." },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "JWT", en: "JWT" },
        definition: {
          fr: "JSON Web Token signé en trois parties.",
          en: "Signed three-part JSON Web Token.",
        },
      },
      {
        term: { fr: "Claim", en: "Claim" },
        definition: {
          fr: "Information portée dans le payload.",
          en: "Information carried in the payload.",
        },
      },
      {
        term: { fr: "Bearer", en: "Bearer" },
        definition: {
          fr: "Schéma Authorization transportant le token.",
          en: "Authorization scheme carrying the token.",
        },
      },
      {
        term: { fr: "HttpOnly", en: "HttpOnly" },
        definition: {
          fr: "Cookie inaccessible à document.cookie.",
          en: "Cookie inaccessible to document.cookie.",
        },
      },
      {
        term: { fr: "Refresh token", en: "Refresh token" },
        definition: {
          fr: "Jeton longue durée pour renouveler l'access.",
          en: "Long-lived token to renew access.",
        },
      },
    ],
    activities: [
      {
        id: "web-auth-jwt-q1",
        type: "multiple-choice",
        question: {
          fr: "Authentification signifie…",
          en: "Authentication means…",
        },
        options: [
          { fr: "Prouver son identité", en: "Proving identity" },
          { fr: "Uniquement styliser le CSS", en: "Only styling CSS" },
          { fr: "Résoudre MX DNS", en: "Resolving MX DNS" },
          { fr: "Compresser gzip", en: "Compressing gzip" },
        ],
        correctAnswer: { fr: "Prouver son identité", en: "Proving identity" },
        hint: { fr: "Qui es-tu ?", en: "Who are you?" },
        explanation: {
          fr: "L'autorisation décide ensuite des droits.",
          en: "Authorization then decides permissions.",
        },
      },
      {
        id: "web-auth-jwt-q2",
        type: "multiple-choice",
        question: {
          fr: "Un JWT a typiquement…",
          en: "A JWT typically has…",
        },
        options: [
          { fr: "3 parties (header.payload.signature)", en: "3 parts (header.payload.signature)" },
          { fr: "Uniquement du HTML", en: "Only HTML" },
          { fr: "Aucun claim", en: "No claims" },
          { fr: "Un certificat client obligatoire visible", en: "A mandatory visible client certificate" },
        ],
        correctAnswer: { fr: "3 parties (header.payload.signature)", en: "3 parts (header.payload.signature)" },
        hint: { fr: "Structure standard.", en: "Standard structure." },
        explanation: {
          fr: "La signature protège l'intégrité des claims.",
          en: "The signature protects claim integrity.",
        },
      },
      {
        id: "web-auth-jwt-q3",
        type: "multiple-choice",
        question: {
          fr: "Le payload JWT est…",
          en: "The JWT payload is…",
        },
        options: [
          { fr: "Lisible (Base64), pas secret", en: "Readable (Base64), not secret" },
          { fr: "Impossible à décoder", en: "Impossible to decode" },
          { fr: "Toujours chiffré AES", en: "Always AES-encrypted" },
          { fr: "Stocké dans le DNS", en: "Stored in DNS" },
        ],
        correctAnswer: { fr: "Lisible (Base64), pas secret", en: "Readable (Base64), not secret" },
        hint: { fr: "Encodé ≠ chiffré.", en: "Encoded ≠ encrypted." },
        explanation: {
          fr: "N'y mets pas de mots de passe.",
          en: "Don't put passwords there.",
        },
      },
      {
        id: "web-auth-jwt-q4",
        type: "multiple-choice",
        question: {
          fr: "Stockage localStorage d'un JWT…",
          en: "localStorage storage of a JWT…",
        },
        options: [
          { fr: "Vulnérable au XSS", en: "Vulnerable to XSS" },
          { fr: "Immunise contre tout", en: "Immunizes against everything" },
          { fr: "Remplace HTTPS", en: "Replaces HTTPS" },
          { fr: "Est exigé par REST", en: "Is required by REST" },
        ],
        correctAnswer: { fr: "Vulnérable au XSS", en: "Vulnerable to XSS" },
        hint: { fr: "Scripts malveillants.", en: "Malicious scripts." },
        explanation: {
          fr: "HttpOnly cookies ou mémoire sont souvent préférables.",
          en: "HttpOnly cookies or memory are often preferable.",
        },
      },
      {
        id: "web-auth-jwt-q5",
        type: "multiple-choice",
        question: {
          fr: "exp dans un JWT sert à…",
          en: "exp in a JWT is for…",
        },
        options: [
          { fr: "Expirer le jeton", en: "Expiring the token" },
          { fr: "Changer la police", en: "Changing the font" },
          { fr: "Ouvrir CORS *", en: "Opening CORS *" },
          { fr: "Créer un index SQL", en: "Creating a SQL index" },
        ],
        correctAnswer: { fr: "Expirer le jeton", en: "Expiring the token" },
        hint: { fr: "Durée de vie.", en: "Lifetime." },
        explanation: {
          fr: "Le serveur doit rejeter les jetons expirés.",
          en: "Servers must reject expired tokens.",
        },
      },
      {
        id: "web-auth-jwt-q6",
        type: "multiple-choice",
        question: {
          fr: "Authorization: Bearer … envoie…",
          en: "Authorization: Bearer … sends…",
        },
        options: [
          { fr: "Le token d'accès", en: "The access token" },
          { fr: "Le fichier hosts", en: "The hosts file" },
          { fr: "Le certificat racine public uniquement", en: "Only the public root certificate" },
          { fr: "Le CSS critique", en: "Critical CSS" },
        ],
        correctAnswer: { fr: "Le token d'accès", en: "The access token" },
        hint: { fr: "Header HTTP.", en: "HTTP header." },
        explanation: {
          fr: "Le middleware API vérifie ce Bearer.",
          en: "API middleware verifies this Bearer.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes auth web : sessions, JWT, stockage, expiration. Insiste sur XSS et payload non chiffré.",
        en: "You teach web auth: sessions, JWT, storage, expiry. Stress XSS and unencrypted payload.",
      },
      introMessage: {
        fr: "Sécurisons l'identité. Sessions ou JWT pour commencer ?",
        en: "Let's secure identity. Sessions or JWT to start?",
      },
      topics: [
        { fr: "Sessions vs JWT", en: "Sessions vs JWT" },
        { fr: "Claims et signature", en: "Claims and signature" },
        { fr: "Stockage sûr", en: "Safe storage" },
      ],
    },
  },

  {
    id: "web-databases",
    unitId: "web-backend",
    title: { fr: "Bases de données web", en: "Web databases" },
    description: {
      fr: "SQL vs NoSQL, CRUD, schémas, index et accès sûr depuis l'API.",
      en: "SQL vs NoSQL, CRUD, schemas, indexes, and safe access from the API.",
    },
    icon: "layers",
    estimatedMinutes: 18,
    xpReward: 24,
    goals: [
      {
        description: {
          fr: "Situer le rôle de la DB derrière l'API",
          en: "Place the DB's role behind the API",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Comparer SQL et NoSQL à haut niveau",
          en: "Compare SQL and NoSQL at a high level",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Éviter les injections et fuites de secrets",
          en: "Avoid injections and secret leaks",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-databases-s1",
        title: { fr: "Pourquoi une base ?", en: "Why a database?" },
        body: {
          fr: "Les données doivent survivre aux redémarrages du serveur. La DB stocke utilisateurs, commandes, contenus de façon durable et interrogeable.",
          en: "Data must survive server restarts. The DB stores users, orders, content durably and queryably.",
        },
        callout: {
          fr: "Le navigateur ne parle pas directement à la base : l'API s'interpose.",
          en: "The browser doesn't talk to the DB directly: the API sits in between.",
        },
        calloutKind: "key",
        diagram: "mvc-architecture",
      },
      {
        id: "web-databases-s2",
        title: { fr: "SQL en bref", en: "SQL in brief" },
        body: {
          fr: "Tables, lignes, relations (clés étrangères), transactions ACID. Excellent pour données structurées et jointures.",
          en: "Tables, rows, relations (foreign keys), ACID transactions. Great for structured data and joins.",
        },
        codeExample: {
          language: "sql",
          code: "SELECT id, email FROM users WHERE id = $1;",
          caption: { fr: "Requête paramétrée (anti-injection).", en: "Parameterized query (anti-injection)." },
        },
      },
      {
        id: "web-databases-s3",
        title: { fr: "NoSQL en bref", en: "NoSQL in brief" },
        body: {
          fr: "Documents JSON, clé/valeur, colonnes larges… Souple pour schémas évolutifs, mais les jointures et transactions varient selon le moteur.",
          en: "JSON documents, key/value, wide columns… Flexible for evolving schemas, but joins and transactions vary by engine.",
        },
        analogy: {
          fr: "SQL = classeurs tabulaires reliés ; document store = dossiers JSON empilés par besoin.",
          en: "SQL = linked tabular binders; document store = JSON folders stacked as needed.",
        },
      },
      {
        id: "web-databases-s4",
        title: { fr: "CRUD", en: "CRUD" },
        body: {
          fr: "Create, Read, Update, Delete. L'API REST mappe souvent POST/GET/PATCH/DELETE sur ces opérations.",
          en: "Create, Read, Update, Delete. REST APIs often map POST/GET/PATCH/DELETE onto these.",
        },
        bullets: [
          { fr: "Valide avant d'écrire", en: "Validate before writing" },
          { fr: "Transactions pour opérations multi-tables", en: "Transactions for multi-table ops" },
          { fr: "Index pour accélérer les lectures fréquentes", en: "Indexes to speed frequent reads" },
        ],
        callout: {
          fr: "Tout indexer « au cas où » ralentit les écritures.",
          en: "Indexing everything just in case slows writes.",
        },
        calloutKind: "tip",
      },
      {
        id: "web-databases-s5",
        title: { fr: "Secrets et accès", en: "Secrets and access" },
        body: {
          fr: "Credentials DB dans des variables d'environnement / vault, jamais dans le repo ni le frontend. Moindre privilège pour l'utilisateur SQL de l'app.",
          en: "DB credentials in env vars / vault, never in the repo or frontend. Least privilege for the app's SQL user.",
        },
        callout: {
          fr: "Exposer DATABASE_URL dans le bundle JS client est une faille grave.",
          en: "Exposing DATABASE_URL in the client JS bundle is a severe flaw.",
        },
        calloutKind: "mistake",
      },
      {
        id: "web-databases-s6",
        title: { fr: "Injections SQL", en: "SQL injection" },
        body: {
          fr: "Concaténer des entrées utilisateur dans du SQL permet de détourner la requête. Utilise paramètres / ORM / requêtes préparées.",
          en: "Concatenating user input into SQL lets attackers hijack the query. Use parameters / ORM / prepared statements.",
        },
        callout: {
          fr: "\"SELECT * FROM users WHERE id = \" + userInput est dangereux.",
          en: "\"SELECT * FROM users WHERE id = \" + userInput is dangerous.",
        },
        calloutKind: "warning",
        diagram: "client-server",
      },
      {
        id: "web-databases-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Table users (id, email, password_hash) et table posts (id, author_id, title).",
          en: "users table (id, email, password_hash) and posts (id, author_id, title).",
        },
        miniExercise: {
          prompt: {
            fr: "Quelle clé relie posts à users ? Pourquoi hasher le mot de passe ?",
            en: "Which key links posts to users? Why hash the password?",
          },
          hint: { fr: "author_id → users.id ; jamais stocker le mot de passe en clair.", en: "author_id → users.id; never store plaintext passwords." },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "CRUD", en: "CRUD" },
        definition: {
          fr: "Create, Read, Update, Delete.",
          en: "Create, Read, Update, Delete.",
        },
      },
      {
        term: { fr: "SQL", en: "SQL" },
        definition: {
          fr: "Langage et bases relationnelles tabulaires.",
          en: "Language and relational tabular databases.",
        },
      },
      {
        term: { fr: "NoSQL", en: "NoSQL" },
        definition: {
          fr: "Famille de bases non relationnelles variées.",
          en: "Family of varied non-relational databases.",
        },
      },
      {
        term: { fr: "Index", en: "Index" },
        definition: {
          fr: "Structure accélérant certaines recherches.",
          en: "Structure speeding certain lookups.",
        },
      },
      {
        term: { fr: "Requête paramétrée", en: "Parameterized query" },
        definition: {
          fr: "SQL avec placeholders liés aux valeurs.",
          en: "SQL with placeholders bound to values.",
        },
      },
    ],
    activities: [
      {
        id: "web-databases-q1",
        type: "multiple-choice",
        question: {
          fr: "Le navigateur doit accéder à la DB…",
          en: "The browser should access the DB…",
        },
        options: [
          { fr: "Via l'API backend, pas directement", en: "Via the backend API, not directly" },
          { fr: "Avec le mot de passe root en clair dans le HTML", en: "With root password in clear HTML" },
          { fr: "Par DNS uniquement", en: "Via DNS only" },
          { fr: "En FTP anonyme", en: "Via anonymous FTP" },
        ],
        correctAnswer: { fr: "Via l'API backend, pas directement", en: "Via the backend API, not directly" },
        hint: { fr: "Couche serveur.", en: "Server layer." },
        explanation: {
          fr: "L'API applique authz et cache les secrets.",
          en: "The API enforces authz and hides secrets.",
        },
      },
      {
        id: "web-databases-q2",
        type: "multiple-choice",
        question: {
          fr: "SQL convient bien aux…",
          en: "SQL fits well for…",
        },
        options: [
          { fr: "Données relationnelles et transactions", en: "Relational data and transactions" },
          { fr: "Uniquement aux animations CSS", en: "Only CSS animations" },
          { fr: "Remplacer HTTPS", en: "Replacing HTTPS" },
          { fr: "Signatures JWT côté client", en: "Client-side JWT signatures" },
        ],
        correctAnswer: { fr: "Données relationnelles et transactions", en: "Relational data and transactions" },
        hint: { fr: "Tables et jointures.", en: "Tables and joins." },
        explanation: {
          fr: "Les contraintes et ACID aident la cohérence.",
          en: "Constraints and ACID help consistency.",
        },
      },
      {
        id: "web-databases-q3",
        type: "multiple-choice",
        question: {
          fr: "CRUD signifie…",
          en: "CRUD means…",
        },
        options: [
          { fr: "Create Read Update Delete", en: "Create Read Update Delete" },
          { fr: "CSS Route URL DNS", en: "CSS Route URL DNS" },
          { fr: "Certificate Root User Directory", en: "Certificate Root User Directory" },
          { fr: "Cache Refresh Upload Download", en: "Cache Refresh Upload Download" },
        ],
        correctAnswer: { fr: "Create Read Update Delete", en: "Create Read Update Delete" },
        hint: { fr: "Opérations de base.", en: "Basic operations." },
        explanation: {
          fr: "Le vocabulaire universel de persistence.",
          en: "The universal persistence vocabulary.",
        },
      },
      {
        id: "web-databases-q4",
        type: "multiple-choice",
        question: {
          fr: "Concaténer userInput dans du SQL…",
          en: "Concatenating userInput into SQL…",
        },
        options: [
          { fr: "Risque d'injection SQL", en: "Risks SQL injection" },
          { fr: "Est la seule méthode sûre", en: "Is the only safe method" },
          { fr: "Active HttpOnly", en: "Enables HttpOnly" },
          { fr: "Remplace les index", en: "Replaces indexes" },
        ],
        correctAnswer: { fr: "Risque d'injection SQL", en: "Risks SQL injection" },
        hint: { fr: "Entrées non fiables.", en: "Untrusted input." },
        explanation: {
          fr: "Utilise des paramètres liés.",
          en: "Use bound parameters.",
        },
      },
      {
        id: "web-databases-q5",
        type: "multiple-choice",
        question: {
          fr: "Les credentials DB vont…",
          en: "DB credentials go…",
        },
        options: [
          { fr: "Dans des secrets/env côté serveur", en: "In server-side secrets/env" },
          { fr: "Dans le repo public", en: "In the public repo" },
          { fr: "Dans localStorage", en: "In localStorage" },
          { fr: "Dans le CSS", en: "In CSS" },
        ],
        correctAnswer: { fr: "Dans des secrets/env côté serveur", en: "In server-side secrets/env" },
        hint: { fr: "Jamais frontend.", en: "Never frontend." },
        explanation: {
          fr: "Le client ne doit pas voir DATABASE_URL.",
          en: "The client must not see DATABASE_URL.",
        },
      },
      {
        id: "web-databases-q6",
        type: "multiple-choice",
        question: {
          fr: "Un index sert surtout à…",
          en: "An index mainly…",
        },
        options: [
          { fr: "Accélérer certaines lectures", en: "Speeds certain reads" },
          { fr: "Chiffrer automatiquement JWT", en: "Automatically encrypts JWT" },
          { fr: "Remplacer les backups", en: "Replaces backups" },
          { fr: "Ouvrir CORS", en: "Opens CORS" },
        ],
        correctAnswer: { fr: "Accélérer certaines lectures", en: "Speeds certain reads" },
        hint: { fr: "Perf lecture.", en: "Read perf." },
        explanation: {
          fr: "Trop d'index coûte cher à l'écriture.",
          en: "Too many indexes cost write performance.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes les bases de données pour le web : SQL/NoSQL, CRUD, sécurité d'accès et anti-injection. Reste accessible.",
        en: "You teach databases for the web: SQL/NoSQL, CRUD, access security, and anti-injection. Stay approachable.",
      },
      introMessage: {
        fr: "Branchons la persistence. SQL ou sécurité d'accès d'abord ?",
        en: "Let's wire persistence. SQL or access security first?",
      },
      topics: [
        { fr: "Rôle de la DB", en: "DB role" },
        { fr: "SQL vs NoSQL", en: "SQL vs NoSQL" },
        { fr: "Sécurité et injections", en: "Security and injections" },
      ],
    },
  },

  {
    id: "web-cors-cookies",
    unitId: "web-security",
    title: { fr: "CORS et cookies", en: "CORS and cookies" },
    description: {
      fr: "Same-origin policy, en-têtes CORS, cookies Secure/HttpOnly/SameSite.",
      en: "Same-origin policy, CORS headers, Secure/HttpOnly/SameSite cookies.",
    },
    icon: "shield",
    estimatedMinutes: 18,
    xpReward: 25,
    goals: [
      {
        description: {
          fr: "Expliquer la same-origin policy",
          en: "Explain the same-origin policy",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Configurer CORS sans Access-Control-Allow-Origin: * dangereux",
          en: "Configure CORS without unsafe *",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Choisir les flags cookies adaptés",
          en: "Choose appropriate cookie flags",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-cors-cookies-s1",
        title: { fr: "Origine = schéma + hôte + port", en: "Origin = scheme + host + port" },
        body: {
          fr: "https://app.com:443 et https://api.app.com sont des origines différentes. La same-origin policy limite les lectures cross-origin dangereuses.",
          en: "https://app.com:443 and https://api.app.com are different origins. The same-origin policy limits dangerous cross-origin reads.",
        },
        callout: {
          fr: "Charger une image cross-origin ≠ lire sa réponse JS librement.",
          en: "Loading a cross-origin image ≠ freely reading its response in JS.",
        },
        calloutKind: "key",
        diagram: "cors",
      },
      {
        id: "web-cors-cookies-s2",
        title: { fr: "Pourquoi CORS ?", en: "Why CORS?" },
        body: {
          fr: "CORS est un mécanisme navigateur : le serveur annonce quelles origines peuvent lire la réponse via JS. Ce n'est pas un firewall serveur universel.",
          en: "CORS is a browser mechanism: the server announces which origins may read the response via JS. It is not a universal server firewall.",
        },
        callout: {
          fr: "curl ignore CORS : protéger l'API reste nécessaire (auth, validation).",
          en: "curl ignores CORS: you still need API protection (auth, validation).",
        },
        calloutKind: "warning",
      },
      {
        id: "web-cors-cookies-s3",
        title: { fr: "En-têtes clés", en: "Key headers" },
        body: {
          fr: "Access-Control-Allow-Origin, Methods, Headers, Credentials. Les requêtes « complex » déclenchent un preflight OPTIONS.",
          en: "Access-Control-Allow-Origin, Methods, Headers, Credentials. “Complex” requests trigger an OPTIONS preflight.",
        },
        callout: {
          fr: "Allow-Origin: * incompatible avec Allow-Credentials: true.",
          en: "Allow-Origin: * is incompatible with Allow-Credentials: true.",
        },
        calloutKind: "mistake",
        codeExample: {
          language: "http",
          code: "Access-Control-Allow-Origin: https://app.example.com\nAccess-Control-Allow-Credentials: true",
          caption: { fr: "Origine explicite + credentials.", en: "Explicit origin + credentials." },
        },
      },
      {
        id: "web-cors-cookies-s4",
        title: { fr: "Cookies : mémoire du navigateur", en: "Cookies: browser memory" },
        body: {
          fr: "Le navigateur renvoie automatiquement les cookies selon domaine/chemin. Idéal pour sessions, dangereux si mal configurés.",
          en: "The browser auto-sends cookies by domain/path. Great for sessions, dangerous if misconfigured.",
        },
        analogy: {
          fr: "Comme un ticket de vestiaire collé au poignet : présenté sans que tu le ressaisisses à chaque porte.",
          en: "Like a wrist cloakroom ticket: shown without you retyping it at every door.",
        },
      },
      {
        id: "web-cors-cookies-s5",
        title: { fr: "Flags de sécurité", en: "Security flags" },
        body: {
          fr: "Secure (HTTPS only), HttpOnly (pas de JS), SameSite (Lax/Strict/None) réduisent vol et CSRF.",
          en: "Secure (HTTPS only), HttpOnly (no JS), SameSite (Lax/Strict/None) reduce theft and CSRF.",
        },
        bullets: [
          { fr: "Secure : jamais en HTTP clair", en: "Secure: never on clear HTTP" },
          { fr: "HttpOnly : mitige XSS cookie theft", en: "HttpOnly: mitigates XSS cookie theft" },
          { fr: "SameSite=Lax : bon défaut moderne", en: "SameSite=Lax: good modern default" },
        ],
        callout: {
          fr: "SameSite=None exige Secure.",
          en: "SameSite=None requires Secure.",
        },
        calloutKind: "tip",
      },
      {
        id: "web-cors-cookies-s6",
        title: { fr: "Credentials cross-origin", en: "Cross-origin credentials" },
        body: {
          fr: "fetch(..., { credentials: 'include' }) + CORS credentials côté serveur. Whitelist d'origines précises.",
          en: "fetch(..., { credentials: 'include' }) + CORS credentials server-side. Whitelist precise origins.",
        },
        diagram: "cors",
      },
      {
        id: "web-cors-cookies-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "SPA sur app.com, API sur api.com, cookie de session.",
          en: "SPA on app.com, API on api.com, session cookie.",
        },
        miniExercise: {
          prompt: {
            fr: "Quels en-têtes CORS et flags cookie choisir ?",
            en: "Which CORS headers and cookie flags would you choose?",
          },
          hint: { fr: "Origin exacte, credentials true, Secure+HttpOnly+SameSite.", en: "Exact origin, credentials true, Secure+HttpOnly+SameSite." },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Origine", en: "Origin" },
        definition: {
          fr: "Schéma + hôte + port d'une URL.",
          en: "Scheme + host + port of a URL.",
        },
      },
      {
        term: { fr: "CORS", en: "CORS" },
        definition: {
          fr: "Partage de ressources cross-origin contrôlé.",
          en: "Controlled cross-origin resource sharing.",
        },
      },
      {
        term: { fr: "Preflight", en: "Preflight" },
        definition: {
          fr: "Requête OPTIONS avant l'appel réel.",
          en: "OPTIONS request before the real call.",
        },
      },
      {
        term: { fr: "HttpOnly", en: "HttpOnly" },
        definition: {
          fr: "Cookie non lisible en JavaScript.",
          en: "Cookie not readable in JavaScript.",
        },
      },
      {
        term: { fr: "SameSite", en: "SameSite" },
        definition: {
          fr: "Règle d'envoi du cookie cross-site.",
          en: "Rule for sending the cookie cross-site.",
        },
      },
    ],
    activities: [
      {
        id: "web-cors-cookies-q1",
        type: "multiple-choice",
        question: {
          fr: "La same-origin policy…",
          en: "The same-origin policy…",
        },
        options: [
          { fr: "Restreint les lectures cross-origin en JS", en: "Restricts cross-origin reads in JS" },
          { fr: "Remplace HTTPS", en: "Replaces HTTPS" },
          { fr: "Désactive HTML", en: "Disables HTML" },
          { fr: "Compile TypeScript", en: "Compiles TypeScript" },
        ],
        correctAnswer: { fr: "Restreint les lectures cross-origin en JS", en: "Restricts cross-origin reads in JS" },
        hint: { fr: "Sécurité navigateur.", en: "Browser security." },
        explanation: {
          fr: "CORS assouplit explicitement certaines lectures.",
          en: "CORS explicitly relaxes some reads.",
        },
      },
      {
        id: "web-cors-cookies-q2",
        type: "multiple-choice",
        question: {
          fr: "CORS protège surtout…",
          en: "CORS mainly protects…",
        },
        options: [
          { fr: "Le navigateur / l'utilisateur", en: "The browser / user" },
          { fr: "Uniquement le câble fibre", en: "Only the fiber cable" },
          { fr: "Le BIOS", en: "The BIOS" },
          { fr: "Les media queries", en: "Media queries" },
        ],
        correctAnswer: { fr: "Le navigateur / l'utilisateur", en: "The browser / user" },
        hint: { fr: "Pas un firewall API complet.", en: "Not a full API firewall." },
        explanation: {
          fr: "Les clients non-navigateur ne l'appliquent pas.",
          en: "Non-browser clients don't enforce it.",
        },
      },
      {
        id: "web-cors-cookies-q3",
        type: "multiple-choice",
        question: {
          fr: "Allow-Origin: * avec credentials…",
          en: "Allow-Origin: * with credentials…",
        },
        options: [
          { fr: "Combinaison invalide / refusée", en: "Invalid / rejected combination" },
          { fr: "Obligatoire en REST", en: "Required in REST" },
          { fr: "Active HttpOnly", en: "Enables HttpOnly" },
          { fr: "Supprime SameSite", en: "Removes SameSite" },
        ],
        correctAnswer: { fr: "Combinaison invalide / refusée", en: "Invalid / rejected combination" },
        hint: { fr: "Whitelist précise requise.", en: "Precise whitelist required." },
        explanation: {
          fr: "Il faut une origine explicite avec credentials.",
          en: "You need an explicit origin with credentials.",
        },
      },
      {
        id: "web-cors-cookies-q4",
        type: "multiple-choice",
        question: {
          fr: "HttpOnly empêche…",
          en: "HttpOnly prevents…",
        },
        options: [
          { fr: "L'accès via document.cookie", en: "Access via document.cookie" },
          { fr: "HTTPS", en: "HTTPS" },
          { fr: "Les media queries", en: "Media queries" },
          { fr: "Le DNS", en: "DNS" },
        ],
        correctAnswer: { fr: "L'accès via document.cookie", en: "Access via document.cookie" },
        hint: { fr: "Mitigation XSS.", en: "XSS mitigation." },
        explanation: {
          fr: "Les scripts ne peuvent plus lire ce cookie.",
          en: "Scripts can no longer read that cookie.",
        },
      },
      {
        id: "web-cors-cookies-q5",
        type: "multiple-choice",
        question: {
          fr: "Secure sur un cookie exige…",
          en: "Secure on a cookie requires…",
        },
        options: [
          { fr: "HTTPS", en: "HTTPS" },
          { fr: "FTP", en: "FTP" },
          { fr: "HTTP clair uniquement", en: "Clear HTTP only" },
          { fr: "UDP 53", en: "UDP 53" },
        ],
        correctAnswer: { fr: "HTTPS", en: "HTTPS" },
        hint: { fr: "Transport chiffré.", en: "Encrypted transport." },
        explanation: {
          fr: "Le cookie ne part pas en clair.",
          en: "The cookie isn't sent in the clear.",
        },
      },
      {
        id: "web-cors-cookies-q6",
        type: "multiple-choice",
        question: {
          fr: "Un preflight utilise…",
          en: "A preflight uses…",
        },
        options: [
          { fr: "OPTIONS", en: "OPTIONS" },
          { fr: "CONNECT uniquement", en: "CONNECT only" },
          { fr: "TRACE obligatoire", en: "TRACE required" },
          { fr: "PATCH sur le DNS", en: "PATCH on DNS" },
        ],
        correctAnswer: { fr: "OPTIONS", en: "OPTIONS" },
        hint: { fr: "Avant la requête complexe.", en: "Before the complex request." },
        explanation: {
          fr: "Le navigateur vérifie les permissions CORS.",
          en: "The browser checks CORS permissions.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes CORS et cookies : origines, preflight, flags Secure/HttpOnly/SameSite. Corrige l'idée que CORS sécurise tout le serveur.",
        en: "You teach CORS and cookies: origins, preflight, Secure/HttpOnly/SameSite flags. Correct the idea that CORS secures the whole server.",
      },
      introMessage: {
        fr: "Navigateur, origines et cookies : on clarifie. CORS ou cookies d'abord ?",
        en: "Browser, origins, and cookies: let's clarify. CORS or cookies first?",
      },
      topics: [
        { fr: "Same-origin et CORS", en: "Same-origin and CORS" },
        { fr: "Preflight", en: "Preflight" },
        { fr: "Flags cookies", en: "Cookie flags" },
      ],
    },
  },

  {
    id: "web-caching-cdn",
    unitId: "web-security",
    title: { fr: "Cache et CDN", en: "Caching and CDN" },
    description: {
      fr: "En-têtes de cache, ETag, CDN edge et invalidation pour des sites plus rapides.",
      en: "Cache headers, ETag, edge CDN, and invalidation for faster sites.",
    },
    icon: "cloud",
    estimatedMinutes: 16,
    xpReward: 22,
    goals: [
      {
        description: {
          fr: "Expliquer le rôle du cache navigateur et CDN",
          en: "Explain browser cache and CDN roles",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Utiliser Cache-Control et ETag à bon escient",
          en: "Use Cache-Control and ETag wisely",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Éviter de cacher des données privées",
          en: "Avoid caching private data",
        },
        xpReward: 7,
      },
    ],
    sections: [
      {
        id: "web-caching-cdn-s1",
        title: { fr: "Pourquoi cacher ?", en: "Why cache?" },
        body: {
          fr: "Recalculer ou retelecharger la même ressource coûte latence et bande passante. Le cache garde une copie proche de l'utilisateur.",
          en: "Recomputing or re-downloading the same resource costs latency and bandwidth. Cache keeps a copy close to the user.",
        },
        callout: {
          fr: "Cache bien réglé = site plus rapide et serveur moins chargé.",
          en: "Well-tuned cache = faster site and lighter server.",
        },
        calloutKind: "key",
        diagram: "request-lifecycle",
      },
      {
        id: "web-caching-cdn-s2",
        title: { fr: "Cache-Control", en: "Cache-Control" },
        body: {
          fr: "max-age, public/private, no-store, must-revalidate guident navigateurs et proxies. Les assets hashés peuvent vivre longtemps.",
          en: "max-age, public/private, no-store, must-revalidate guide browsers and proxies. Hashed assets can live long.",
        },
        codeExample: {
          language: "http",
          code: "Cache-Control: public, max-age=31536000, immutable\nCache-Control: private, no-store",
          caption: { fr: "Asset versionné vs réponse privée.", en: "Versioned asset vs private response." },
        },
      },
      {
        id: "web-caching-cdn-s3",
        title: { fr: "ETag et revalidation", en: "ETag and revalidation" },
        body: {
          fr: "ETag / Last-Modified permettent de vérifier si la copie est fraîche (304 Not Modified) sans renvoyer tout le body.",
          en: "ETag / Last-Modified let you check freshness (304 Not Modified) without resending the whole body.",
        },
        analogy: {
          fr: "Comme demander au magasin : « ma boîte est-elle encore la bonne édition ? » avant de racheter le livre.",
          en: "Like asking the shop: “is my copy still the right edition?” before buying the book again.",
        },
      },
      {
        id: "web-caching-cdn-s4",
        title: { fr: "CDN edge", en: "CDN edge" },
        body: {
          fr: "Un CDN sert fichiers statiques depuis des points de présence proches. HTML dynamique reste souvent à l'origine.",
          en: "A CDN serves static files from nearby points of presence. Dynamic HTML often stays at the origin.",
        },
        bullets: [
          { fr: "Réduit la latence mondiale", en: "Cuts global latency" },
          { fr: "Absorbe une partie du trafic", en: "Absorbs some traffic" },
          { fr: "Nécessite une stratégie d'invalidation", en: "Needs an invalidation strategy" },
        ],
        callout: {
          fr: "Oublier d'invalider après un deploy laisse d'anciens JS en circulation.",
          en: "Forgetting to invalidate after a deploy leaves old JS circulating.",
        },
        calloutKind: "warning",
        diagram: "client-server-web",
      },
      {
        id: "web-caching-cdn-s5",
        title: { fr: "Ne jamais cacher…", en: "Never cache…" },
        body: {
          fr: "Réponses personnalisées sensibles (page compte, tokens) : Cache-Control: private, no-store. Mélanger cache public et données user = fuite.",
          en: "Sensitive personalized responses (account page, tokens): Cache-Control: private, no-store. Mixing public cache and user data = leak.",
        },
        callout: {
          fr: "Mettre une page « Mon profil » en CDN public est une erreur grave.",
          en: "Putting a “My profile” page on a public CDN is a severe mistake.",
        },
        calloutKind: "mistake",
      },
      {
        id: "web-caching-cdn-s6",
        title: { fr: "Fingerprinting des assets", en: "Asset fingerprinting" },
        body: {
          fr: "app.abc123.js peut être cache long : le hash change à chaque build, forçant le téléchargement du nouveau fichier.",
          en: "app.abc123.js can be long-cached: the hash changes each build, forcing download of the new file.",
        },
        callout: {
          fr: "Couple filenames hashés + HTML avec court max-age.",
          en: "Pair hashed filenames + short max-age HTML.",
        },
        calloutKind: "tip",
      },
      {
        id: "web-caching-cdn-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "logo.svg rare à changer, index.html change souvent, /api/me est privé.",
          en: "logo.svg rarely changes, index.html changes often, /api/me is private.",
        },
        miniExercise: {
          prompt: {
            fr: "Propose un Cache-Control pour chacun.",
            en: "Propose a Cache-Control for each.",
          },
          hint: { fr: "long public / court / no-store private.", en: "long public / short / no-store private." },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Cache", en: "Cache" },
        definition: {
          fr: "Copie locale temporaire d'une ressource.",
          en: "Temporary local copy of a resource.",
        },
      },
      {
        term: { fr: "CDN", en: "CDN" },
        definition: {
          fr: "Réseau de serveurs edge pour délivrer du contenu.",
          en: "Edge server network to deliver content.",
        },
      },
      {
        term: { fr: "ETag", en: "ETag" },
        definition: {
          fr: "Identifiant de version d'une représentation.",
          en: "Version identifier of a representation.",
        },
      },
      {
        term: { fr: "max-age", en: "max-age" },
        definition: {
          fr: "Durée de fraîcheur en secondes.",
          en: "Freshness lifetime in seconds.",
        },
      },
      {
        term: { fr: "Invalidation", en: "Invalidation" },
        definition: {
          fr: "Purge ou mise à jour des copies cache.",
          en: "Purge or update of cached copies.",
        },
      },
    ],
    activities: [
      {
        id: "web-caching-cdn-q1",
        type: "multiple-choice",
        question: {
          fr: "Le but principal du cache…",
          en: "The main goal of caching…",
        },
        options: [
          { fr: "Réduire latence et charge", en: "Reduce latency and load" },
          { fr: "Remplacer l'auth", en: "Replace auth" },
          { fr: "Désactiver TLS", en: "Disable TLS" },
          { fr: "Compiler SQL", en: "Compile SQL" },
        ],
        correctAnswer: { fr: "Réduire latence et charge", en: "Reduce latency and load" },
        hint: { fr: "Perf.", en: "Perf." },
        explanation: {
          fr: "On évite de refrapper l'origine inutilement.",
          en: "You avoid hitting origin unnecessarily.",
        },
      },
      {
        id: "web-caching-cdn-q2",
        type: "multiple-choice",
        question: {
          fr: "304 Not Modified signifie…",
          en: "304 Not Modified means…",
        },
        options: [
          { fr: "La copie cache est encore valide", en: "The cached copy is still valid" },
          { fr: "Erreur serveur fatale", en: "Fatal server error" },
          { fr: "CORS refusé", en: "CORS denied" },
          { fr: "DNS NXDOMAIN", en: "DNS NXDOMAIN" },
        ],
        correctAnswer: { fr: "La copie cache est encore valide", en: "The cached copy is still valid" },
        hint: { fr: "Revalidation.", en: "Revalidation." },
        explanation: {
          fr: "Pas besoin de renvoyer tout le body.",
          en: "No need to resend the whole body.",
        },
      },
      {
        id: "web-caching-cdn-q3",
        type: "multiple-choice",
        question: {
          fr: "Un CDN sert surtout…",
          en: "A CDN mainly serves…",
        },
        options: [
          { fr: "Contenu proche des utilisateurs", en: "Content close to users" },
          { fr: "Les mots de passe root", en: "Root passwords" },
          { fr: "Le BIOS distant", en: "Remote BIOS" },
          { fr: "Uniquement UDP DNS", en: "Only UDP DNS" },
        ],
        correctAnswer: { fr: "Contenu proche des utilisateurs", en: "Content close to users" },
        hint: { fr: "Edge.", en: "Edge." },
        explanation: {
          fr: "Fichiers statiques et parfois pages cacheables.",
          en: "Static files and sometimes cacheable pages.",
        },
      },
      {
        id: "web-caching-cdn-q4",
        type: "multiple-choice",
        question: {
          fr: "no-store convient à…",
          en: "no-store fits…",
        },
        options: [
          { fr: "Données privées sensibles", en: "Sensitive private data" },
          { fr: "Un logo public immuable", en: "An immutable public logo" },
          { fr: "Un favicon hashé", en: "A hashed favicon" },
          { fr: "Une police versionnée", en: "A versioned font" },
        ],
        correctAnswer: { fr: "Données privées sensibles", en: "Sensitive private data" },
        hint: { fr: "Pas de copie durable.", en: "No durable copy." },
        explanation: {
          fr: "Évite fuites via caches partagés.",
          en: "Avoids leaks via shared caches.",
        },
      },
      {
        id: "web-caching-cdn-q5",
        type: "multiple-choice",
        question: {
          fr: "Fingerprinting des assets permet…",
          en: "Asset fingerprinting allows…",
        },
        options: [
          { fr: "Long cache sans servir d'anciens JS après build", en: "Long cache without serving old JS after build" },
          { fr: "D'éviter HTTPS", en: "Avoiding HTTPS" },
          { fr: "De désactiver ETag à jamais", en: "Disabling ETag forever" },
          { fr: "De remplacer SQL", en: "Replacing SQL" },
        ],
        correctAnswer: { fr: "Long cache sans servir d'anciens JS après build", en: "Long cache without serving old JS after build" },
        hint: { fr: "Hash dans le nom.", en: "Hash in the name." },
        explanation: {
          fr: "Le HTML pointe vers le nouveau fichier.",
          en: "HTML points to the new file.",
        },
      },
      {
        id: "web-caching-cdn-q6",
        type: "multiple-choice",
        question: {
          fr: "Cacher publiquement une page compte…",
          en: "Publicly caching an account page…",
        },
        options: [
          { fr: "Est dangereux (fuite)", en: "Is dangerous (leak)" },
          { fr: "Est recommandé partout", en: "Is recommended everywhere" },
          { fr: "Active SameSite", en: "Enables SameSite" },
          { fr: "Remplace JWT", en: "Replaces JWT" },
        ],
        correctAnswer: { fr: "Est dangereux (fuite)", en: "Is dangerous (leak)" },
        hint: { fr: "Données user.", en: "User data." },
        explanation: {
          fr: "private/no-store pour le contenu personnalisé.",
          en: "private/no-store for personalized content.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes cache HTTP et CDN : Cache-Control, ETag, edge, invalidation, données privées. Donne des exemples d'en-têtes.",
        en: "You teach HTTP cache and CDN: Cache-Control, ETag, edge, invalidation, private data. Give header examples.",
      },
      introMessage: {
        fr: "Accélérons sans fuiter. Headers de cache ou CDN ?",
        en: "Let's speed up without leaking. Cache headers or CDN?",
      },
      topics: [
        { fr: "Cache-Control", en: "Cache-Control" },
        { fr: "CDN et invalidation", en: "CDN and invalidation" },
        { fr: "Données privées", en: "Private data" },
      ],
    },
  },

  {
    id: "web-xss-csrf",
    unitId: "web-security",
    title: { fr: "XSS et CSRF", en: "XSS and CSRF" },
    description: {
      fr: "Comprendre et mitiger les attaques XSS et CSRF sur applications web.",
      en: "Understand and mitigate XSS and CSRF attacks on web apps.",
    },
    icon: "shield",
    estimatedMinutes: 20,
    xpReward: 26,
    goals: [
      {
        description: {
          fr: "Différencier XSS stocké, réfléchi et DOM",
          en: "Differentiate stored, reflected, and DOM XSS",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Expliquer le mécanisme CSRF",
          en: "Explain the CSRF mechanism",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Appliquer échappement, CSP, SameSite, tokens",
          en: "Apply escaping, CSP, SameSite, tokens",
        },
        xpReward: 9,
      },
    ],
    sections: [
      {
        id: "web-xss-csrf-s1",
        title: { fr: "XSS : script de l'attaquant", en: "XSS: attacker's script" },
        body: {
          fr: "Cross-Site Scripting injecte du JS dans ta page vue par d'autres. Vol de session, défacement, actions forcées.",
          en: "Cross-Site Scripting injects JS into your page as seen by others. Session theft, defacement, forced actions.",
        },
        callout: {
          fr: "Toute donnée non fiable affichée sans échappement est un risque XSS.",
          en: "Any untrusted data rendered without escaping is an XSS risk.",
        },
        calloutKind: "key",
      },
      {
        id: "web-xss-csrf-s2",
        title: { fr: "Trois familles XSS", en: "Three XSS families" },
        body: {
          fr: "Réfléchi (immédiat dans la réponse), stocké (sauvé en base puis réaffiché), DOM-based (bug JS client).",
          en: "Reflected (immediate in the response), stored (saved in DB then re-shown), DOM-based (client JS bug).",
        },
        bullets: [
          { fr: "Échapper/encoder selon le contexte (HTML, attr, JS)", en: "Escape/encode by context (HTML, attr, JS)" },
          { fr: "Éviter innerHTML avec input user", en: "Avoid innerHTML with user input" },
          { fr: "CSP réduit la casse", en: "CSP reduces blast radius" },
        ],
        callout: {
          fr: "sanitize « maison » incomplet est un faux sentiment de sécurité.",
          en: "Incomplete homemade sanitize is a false sense of security.",
        },
        calloutKind: "mistake",
      },
      {
        id: "web-xss-csrf-s3",
        title: { fr: "CSRF : la requête forgée", en: "CSRF: forged request" },
        body: {
          fr: "Le navigateur envoie automatiquement les cookies de session vers ton site. Un site malveillant peut déclencher POST /transfer à ton insu.",
          en: "The browser auto-sends session cookies to your site. A malicious site can trigger POST /transfer without you noticing.",
        },
        diagram: "cors",
        analogy: {
          fr: "On utilise ton badge déjà accroché pour ouvrir une porte pendant que tu regardes ailleurs.",
          en: "Someone uses your already-clipped badge to open a door while you look away.",
        },
      },
      {
        id: "web-xss-csrf-s4",
        title: { fr: "Mitigations CSRF", en: "CSRF mitigations" },
        body: {
          fr: "SameSite cookies, tokens anti-CSRF synchronizer, vérifier Origin/Referer, préférer JSON + custom header pour APIs SPA.",
          en: "SameSite cookies, synchronizer anti-CSRF tokens, check Origin/Referer, prefer JSON + custom header for SPA APIs.",
        },
        callout: {
          fr: "GET ne doit jamais muter l'état (lien image ne doit pas supprimer un compte).",
          en: "GET must never mutate state (an image link shouldn't delete an account).",
        },
        calloutKind: "warning",
      },
      {
        id: "web-xss-csrf-s5",
        title: { fr: "Defense in depth", en: "Defense in depth" },
        body: {
          fr: "HttpOnly limite le vol de cookie via XSS, mais XSS reste grave (actions au nom de l'user). Combine échappement + CSP + cookies solides.",
          en: "HttpOnly limits cookie theft via XSS, but XSS remains severe (actions as the user). Combine escaping + CSP + solid cookies.",
        },
        callout: {
          fr: "CSP n'excuse pas d'afficher du HTML user non sûr.",
          en: "CSP doesn't excuse rendering unsafe user HTML.",
        },
        calloutKind: "tip",
        codeExample: {
          language: "http",
          code: "Content-Security-Policy: default-src 'self'; script-src 'self'",
          caption: { fr: "CSP restrictive de départ.", en: "Restrictive starting CSP." },
        },
      },
      {
        id: "web-xss-csrf-s6",
        title: { fr: "XSS ≠ CSRF", en: "XSS ≠ CSRF" },
        body: {
          fr: "XSS exécute du code dans l'origine victime. CSRF abuse de l'auth existante sans lire la réponse. Les mitigations diffèrent.",
          en: "XSS runs code in the victim origin. CSRF abuses existing auth without reading the response. Mitigations differ.",
        },
        diagram: "client-server-web",
      },
      {
        id: "web-xss-csrf-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Champ commentaire affiché aux autres ; formulaire change-email en cookie session.",
          en: "Comment field shown to others; change-email form with session cookie.",
        },
        miniExercise: {
          prompt: {
            fr: "Quel risque principal pour chaque cas et une mitigation ?",
            en: "Main risk for each case and one mitigation?",
          },
          hint: { fr: "XSS → échappement/CSP ; CSRF → SameSite/token.", en: "XSS → escaping/CSP; CSRF → SameSite/token." },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "XSS", en: "XSS" },
        definition: {
          fr: "Injection de script dans une page web.",
          en: "Script injection into a web page.",
        },
      },
      {
        term: { fr: "CSRF", en: "CSRF" },
        definition: {
          fr: "Requêtes forgées cross-site avec cookies.",
          en: "Forged cross-site requests with cookies.",
        },
      },
      {
        term: { fr: "CSP", en: "CSP" },
        definition: {
          fr: "Content-Security-Policy limitant les sources.",
          en: "Content-Security-Policy limiting sources.",
        },
      },
      {
        term: { fr: "Échappement", en: "Escaping" },
        definition: {
          fr: "Encoder les caractères dangereux au rendu.",
          en: "Encoding dangerous characters at render.",
        },
      },
      {
        term: { fr: "Token CSRF", en: "CSRF token" },
        definition: {
          fr: "Secret imprévisible validé à la soumission.",
          en: "Unpredictable secret validated on submit.",
        },
      },
    ],
    activities: [
      {
        id: "web-xss-csrf-q1",
        type: "multiple-choice",
        question: {
          fr: "XSS consiste à…",
          en: "XSS consists of…",
        },
        options: [
          { fr: "Injecter du JS dans la page victime", en: "Injecting JS into the victim page" },
          { fr: "Casser uniquement le DNS", en: "Only breaking DNS" },
          { fr: "Forcer HTTP/1.0", en: "Forcing HTTP/1.0" },
          { fr: "Désactiver flexbox", en: "Disabling flexbox" },
        ],
        correctAnswer: { fr: "Injecter du JS dans la page victime", en: "Injecting JS into the victim page" },
        hint: { fr: "Script non voulu.", en: "Unwanted script." },
        explanation: {
          fr: "Le navigateur exécute le code comme s'il venait du site.",
          en: "The browser runs it as if from the site.",
        },
      },
      {
        id: "web-xss-csrf-q2",
        type: "multiple-choice",
        question: {
          fr: "innerHTML + input user…",
          en: "innerHTML + user input…",
        },
        options: [
          { fr: "Risque XSS élevé", en: "High XSS risk" },
          { fr: "Est toujours sûr", en: "Is always safe" },
          { fr: "Remplace CSP", en: "Replaces CSP" },
          { fr: "Active SameSite", en: "Enables SameSite" },
        ],
        correctAnswer: { fr: "Risque XSS élevé", en: "High XSS risk" },
        hint: { fr: "Injection HTML/JS.", en: "HTML/JS injection." },
        explanation: {
          fr: "Préfère textContent ou sanitizer éprouvé.",
          en: "Prefer textContent or a proven sanitizer.",
        },
      },
      {
        id: "web-xss-csrf-q3",
        type: "multiple-choice",
        question: {
          fr: "CSRF abuse surtout…",
          en: "CSRF mainly abuses…",
        },
        options: [
          { fr: "L'envoi automatique des cookies", en: "Automatic cookie sending" },
          { fr: "L'absence de HTML", en: "Lack of HTML" },
          { fr: "Les media queries", en: "Media queries" },
          { fr: "Le fingerprinting CSS", en: "CSS fingerprinting" },
        ],
        correctAnswer: { fr: "L'envoi automatique des cookies", en: "Automatic cookie sending" },
        hint: { fr: "Session déjà ouverte.", en: "Already-open session." },
        explanation: {
          fr: "Le site tiers déclenche une action authentifiée.",
          en: "The third-party site triggers an authenticated action.",
        },
      },
      {
        id: "web-xss-csrf-q4",
        type: "multiple-choice",
        question: {
          fr: "SameSite=Lax aide contre…",
          en: "SameSite=Lax helps against…",
        },
        options: [
          { fr: "Certaines CSRF", en: "Some CSRF" },
          { fr: "Toute panne DNS", en: "All DNS outages" },
          { fr: "Les typos HTML", en: "HTML typos" },
          { fr: "La latence CDN uniquement", en: "CDN latency only" },
        ],
        correctAnswer: { fr: "Certaines CSRF", en: "Some CSRF" },
        hint: { fr: "Cookies cross-site.", en: "Cross-site cookies." },
        explanation: {
          fr: "Le cookie n'est pas envoyé sur tous les cross-site POST.",
          en: "The cookie isn't sent on all cross-site POSTs.",
        },
      },
      {
        id: "web-xss-csrf-q5",
        type: "multiple-choice",
        question: {
          fr: "Une CSP stricte…",
          en: "A strict CSP…",
        },
        options: [
          { fr: "Limite les scripts exécutables", en: "Limits executable scripts" },
          { fr: "Remplace HTTPS", en: "Replaces HTTPS" },
          { fr: "Supprime le besoin d'auth", en: "Removes need for auth" },
          { fr: "Chiffre la base SQL", en: "Encrypts the SQL DB" },
        ],
        correctAnswer: { fr: "Limite les scripts exécutables", en: "Limits executable scripts" },
        hint: { fr: "Defense in depth.", en: "Defense in depth." },
        explanation: {
          fr: "Réduit l'impact si XSS passe.",
          en: "Reduces impact if XSS slips through.",
        },
      },
      {
        id: "web-xss-csrf-q6",
        type: "multiple-choice",
        question: {
          fr: "Un GET qui supprime un compte…",
          en: "A GET that deletes an account…",
        },
        options: [
          { fr: "Mauvaise idée (CSRF facile)", en: "Bad idea (easy CSRF)" },
          { fr: "Est exigé par REST", en: "Is required by REST" },
          { fr: "Est plus sûr que POST", en: "Is safer than POST" },
          { fr: "Active HttpOnly", en: "Enables HttpOnly" },
        ],
        correctAnswer: { fr: "Mauvaise idée (CSRF facile)", en: "Bad idea (easy CSRF)" },
        hint: { fr: "Pas d'effet de bord en GET.", en: "No side effects on GET." },
        explanation: {
          fr: "Les balises img peuvent déclencher des GET.",
          en: "img tags can trigger GETs.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes XSS et CSRF : mécanismes, exemples, mitigations (échappement, CSP, SameSite, tokens). Distingue clairement les deux.",
        en: "You teach XSS and CSRF: mechanisms, examples, mitigations (escaping, CSP, SameSite, tokens). Clearly distinguish both.",
      },
      introMessage: {
        fr: "Attaques navigateur classiques. XSS ou CSRF pour commencer ?",
        en: "Classic browser attacks. XSS or CSRF to start?",
      },
      topics: [
        { fr: "Types de XSS", en: "XSS types" },
        { fr: "Mécanisme CSRF", en: "CSRF mechanism" },
        { fr: "Mitigations", en: "Mitigations" },
      ],
    },
  },

  {
    id: "web-injection-headers",
    unitId: "web-security",
    title: { fr: "Injections et en-têtes", en: "Injections and headers" },
    description: {
      fr: "Injections (SQL, commandes), validation, et en-têtes de sécurité HTTP.",
      en: "Injections (SQL, commands), validation, and HTTP security headers.",
    },
    icon: "lock",
    estimatedMinutes: 19,
    xpReward: 25,
    goals: [
      {
        description: {
          fr: "Reconnaître les vecteurs d'injection courants",
          en: "Recognize common injection vectors",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Appliquer validation et requêtes paramétrées",
          en: "Apply validation and parameterized queries",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Citer les en-têtes de sécurité utiles",
          en: "List useful security headers",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-injection-headers-s1",
        title: { fr: "Injection = confusion de langages", en: "Injection = language confusion" },
        body: {
          fr: "Quand des données utilisateur deviennent des instructions (SQL, shell, LDAP), l'attaquant détourne la logique.",
          en: "When user data becomes instructions (SQL, shell, LDAP), the attacker hijacks logic.",
        },
        callout: {
          fr: "Ne fais jamais confiance aux entrées : query, body, headers, cookies.",
          en: "Never trust inputs: query, body, headers, cookies.",
        },
        calloutKind: "key",
      },
      {
        id: "web-injection-headers-s2",
        title: { fr: "SQL et commandes", en: "SQL and commands" },
        body: {
          fr: "Paramètres liés / ORM pour SQL. Évite shell avec input ; sinon escape strict + listes blanches. Logs et moindres privilèges limitent les dégâts.",
          en: "Bound parameters / ORM for SQL. Avoid shell with input; else strict escape + allowlists. Logs and least privilege limit damage.",
        },
        callout: {
          fr: "Validation regex seule ne remplace pas les requêtes paramétrées.",
          en: "Regex validation alone doesn't replace parameterized queries.",
        },
        calloutKind: "mistake",
        codeExample: {
          language: "javascript",
          code: "// Bad: db.query(\"SELECT * FROM users WHERE id = \" + id)\n// Good:\ndb.query(\"SELECT * FROM users WHERE id = $1\", [id]);",
          caption: { fr: "Paramètre lié vs concaténation.", en: "Bound parameter vs concatenation." },
        },
      },
      {
        id: "web-injection-headers-s3",
        title: { fr: "Validation et encodage", en: "Validation and encoding" },
        body: {
          fr: "Valide le type/format tôt (allowlist). Encode en sortie selon le contexte (HTML, URL, SQL via driver). Defense in depth.",
          en: "Validate type/format early (allowlist). Encode on output by context (HTML, URL, SQL via driver). Defense in depth.",
        },
        analogy: {
          fr: "Filtrer à l'entrée (douane) et étiqueter à la sortie (emballage adapté) : les deux comptent.",
          en: "Filter on entry (customs) and label on exit (right packaging): both matter.",
        },
      },
      {
        id: "web-injection-headers-s4",
        title: { fr: "En-têtes de sécurité", en: "Security headers" },
        body: {
          fr: "CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS (Strict-Transport-Security) durcissent le navigateur.",
          en: "CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS (Strict-Transport-Security) harden the browser.",
        },
        bullets: [
          { fr: "HSTS : force HTTPS après première visite", en: "HSTS: force HTTPS after first visit" },
          { fr: "X-Content-Type-Options: nosniff", en: "X-Content-Type-Options: nosniff" },
          { fr: "Frame-Ancestors / X-Frame-Options anti-clickjacking", en: "Frame-Ancestors / X-Frame-Options anti-clickjacking" },
        ],
        callout: {
          fr: "Les headers aident ; ils ne corrigent pas une API ouverte sans auth.",
          en: "Headers help; they don't fix an open API without auth.",
        },
        calloutKind: "tip",
        diagram: "http-https",
      },
      {
        id: "web-injection-headers-s5",
        title: { fr: "HSTS et mixed content", en: "HSTS and mixed content" },
        body: {
          fr: "HSTS empêche le downgrade HTTP. Évite le mixed content (page HTTPS chargeant du JS HTTP).",
          en: "HSTS prevents HTTP downgrade. Avoid mixed content (HTTPS page loading HTTP JS).",
        },
        callout: {
          fr: "Activer HSTS trop tôt sur un domaine mal migré peut bloquer des users.",
          en: "Enabling HSTS too early on a poorly migrated domain can lock users out.",
        },
        calloutKind: "warning",
        codeExample: {
          language: "http",
          code: "Strict-Transport-Security: max-age=31536000; includeSubDomains",
          caption: { fr: "HSTS d'un an avec sous-domaines.", en: "One-year HSTS with subdomains." },
        },
      },
      {
        id: "web-injection-headers-s6",
        title: { fr: "Headers ≠ secrets", en: "Headers ≠ secrets" },
        body: {
          fr: "Ne place pas de secrets dans des headers logs-friendly sans prudence. Authorization doit voyager en HTTPS. Masque les tokens dans les logs.",
          en: "Don't put secrets in log-friendly headers carelessly. Authorization must travel over HTTPS. Redact tokens in logs.",
        },
        diagram: "http-https",
      },
      {
        id: "web-injection-headers-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Endpoint search ?q= qui interroge SQL et affiche le terme dans la page.",
          en: "search ?q= endpoint that queries SQL and shows the term on the page.",
        },
        miniExercise: {
          prompt: {
            fr: "Quels contrôles côté SQL et côté HTML ajouter ?",
            en: "Which SQL-side and HTML-side controls would you add?",
          },
          hint: { fr: "Requête paramétrée + échappement/textContent + CSP.", en: "Parameterized query + escaping/textContent + CSP." },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Injection", en: "Injection" },
        definition: {
          fr: "Données traitées comme du code/instructions.",
          en: "Data treated as code/instructions.",
        },
      },
      {
        term: { fr: "Allowlist", en: "Allowlist" },
        definition: {
          fr: "Liste explicite de valeurs acceptées.",
          en: "Explicit list of accepted values.",
        },
      },
      {
        term: { fr: "HSTS", en: "HSTS" },
        definition: {
          fr: "Force le navigateur à rester en HTTPS.",
          en: "Forces the browser to stay on HTTPS.",
        },
      },
      {
        term: { fr: "nosniff", en: "nosniff" },
        definition: {
          fr: "Empêche le MIME sniffing dangereux.",
          en: "Prevents dangerous MIME sniffing.",
        },
      },
      {
        term: { fr: "Clickjacking", en: "Clickjacking" },
        definition: {
          fr: "UI piégée via iframe transparente.",
          en: "Tricked UI via transparent iframe.",
        },
      },
    ],
    activities: [
      {
        id: "web-injection-headers-q1",
        type: "multiple-choice",
        question: {
          fr: "Une injection survient quand…",
          en: "An injection happens when…",
        },
        options: [
          { fr: "Des données deviennent des instructions", en: "Data become instructions" },
          { fr: "Le CSS est minifié", en: "CSS is minified" },
          { fr: "On utilise flexbox", en: "You use flexbox" },
          { fr: "Le CDN a un POP proche", en: "The CDN has a nearby POP" },
        ],
        correctAnswer: { fr: "Des données deviennent des instructions", en: "Data become instructions" },
        hint: { fr: "Confusion de langages.", en: "Language confusion." },
        explanation: {
          fr: "SQL, shell, HTML… selon le contexte.",
          en: "SQL, shell, HTML… depending on context.",
        },
      },
      {
        id: "web-injection-headers-q2",
        type: "multiple-choice",
        question: {
          fr: "Contre l'injection SQL, le mieux est…",
          en: "Against SQL injection, best is…",
        },
        options: [
          { fr: "Requêtes paramétrées / ORM", en: "Parameterized queries / ORM" },
          { fr: "Concaténer plus vite", en: "Concatenate faster" },
          { fr: "Désactiver HTTPS", en: "Disable HTTPS" },
          { fr: "Allow-Origin: *", en: "Allow-Origin: *" },
        ],
        correctAnswer: { fr: "Requêtes paramétrées / ORM", en: "Parameterized queries / ORM" },
        hint: { fr: "Séparer code et données.", en: "Separate code and data." },
        explanation: {
          fr: "Le driver envoie les valeurs hors de la requête texte.",
          en: "The driver sends values outside the query text.",
        },
      },
      {
        id: "web-injection-headers-q3",
        type: "multiple-choice",
        question: {
          fr: "HSTS sert à…",
          en: "HSTS is for…",
        },
        options: [
          { fr: "Forcer HTTPS côté navigateur", en: "Forcing HTTPS in the browser" },
          { fr: "Remplacer les mots de passe", en: "Replacing passwords" },
          { fr: "Compiler le SQL", en: "Compiling SQL" },
          { fr: "Créer des index", en: "Creating indexes" },
        ],
        correctAnswer: { fr: "Forcer HTTPS côté navigateur", en: "Forcing HTTPS in the browser" },
        hint: { fr: "Anti-downgrade.", en: "Anti-downgrade." },
        explanation: {
          fr: "Après la première visite HTTPS, le HTTP clair est évité.",
          en: "After the first HTTPS visit, clear HTTP is avoided.",
        },
      },
      {
        id: "web-injection-headers-q4",
        type: "multiple-choice",
        question: {
          fr: "X-Content-Type-Options: nosniff…",
          en: "X-Content-Type-Options: nosniff…",
        },
        options: [
          { fr: "Réduit le MIME sniffing", en: "Reduces MIME sniffing" },
          { fr: "Supprime CORS", en: "Removes CORS" },
          { fr: "Signe les JWT", en: "Signs JWTs" },
          { fr: "Vide le cache DNS", en: "Flushes DNS cache" },
        ],
        correctAnswer: { fr: "Réduit le MIME sniffing", en: "Reduces MIME sniffing" },
        hint: { fr: "Header de durcissement.", en: "Hardening header." },
        explanation: {
          fr: "Évite d'exécuter un fichier sous un mauvais type.",
          en: "Avoids executing a file under the wrong type.",
        },
      },
      {
        id: "web-injection-headers-q5",
        type: "multiple-choice",
        question: {
          fr: "Valider en allowlist signifie…",
          en: "Allowlist validation means…",
        },
        options: [
          { fr: "N'accepter que des formes connues", en: "Only accepting known forms" },
          { fr: "Accepter tout sauf rien", en: "Accepting everything except nothing" },
          { fr: "Logger les secrets en clair", en: "Logging secrets in clear" },
          { fr: "Désactiver CSP", en: "Disabling CSP" },
        ],
        correctAnswer: { fr: "N'accepter que des formes connues", en: "Only accepting known forms" },
        hint: { fr: "Plus sûr que denylist.", en: "Safer than denylist." },
        explanation: {
          fr: "Tu définis le permis, le reste est refusé.",
          en: "You define what's allowed; the rest is denied.",
        },
      },
      {
        id: "web-injection-headers-q6",
        type: "multiple-choice",
        question: {
          fr: "Les security headers…",
          en: "Security headers…",
        },
        options: [
          { fr: "Complètent auth et validation, ne les remplacent pas", en: "Complement auth and validation, don't replace them" },
          { fr: "Suffisent seuls pour toute API", en: "Alone suffice for any API" },
          { fr: "Remplacent les backups", en: "Replace backups" },
          { fr: "Désactivent le DOM", en: "Disable the DOM" },
        ],
        correctAnswer: { fr: "Complètent auth et validation, ne les remplacent pas", en: "Complement auth and validation, don't replace them" },
        hint: { fr: "Couches de défense.", en: "Defense layers." },
        explanation: {
          fr: "Defense in depth : plusieurs contrôles ensemble.",
          en: "Defense in depth: multiple controls together.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes injections et security headers : SQL/commandes, validation, HSTS, CSP, nosniff. Donne des exemples concrets d'en-têtes.",
        en: "You teach injections and security headers: SQL/commands, validation, HSTS, CSP, nosniff. Give concrete header examples.",
      },
      introMessage: {
        fr: "Durcissons l'app. Injections ou headers en premier ?",
        en: "Let's harden the app. Injections or headers first?",
      },
      topics: [
        { fr: "Injections SQL/commandes", en: "SQL/command injections" },
        { fr: "Validation", en: "Validation" },
        { fr: "Security headers", en: "Security headers" },
      ],
    },
  },
];
