import type { Lesson } from "@/types/learning";

export const WEB_LESSONS: Lesson[] = [
  // ─── web-fundamentals ───────────────────────────────────────────
  {
    id: "web-internet-vs-web",
    unitId: "web-fundamentals",
    title: { fr: "Internet vs Web", en: "Internet vs the Web" },
    description: {
      fr: "Distingue clairement le réseau Internet des services du World Wide Web, et situe navigateurs, pages HTML et protocoles au bon niveau. Tu apprendras à décrire une panne par couches pour diagnostiquer plus vite et mieux collaborer.",
      en: "Clearly distinguish the Internet network from World Wide Web services, and place browsers, HTML pages, and protocols at the right level. You will learn to describe an outage by layers so you diagnose faster and collaborate better.",
    },
    icon: "globe",
    estimatedMinutes: 21,
    xpReward: 27,
    goals: [
      {
        description: { fr: "Définir Internet et le Web comme deux concepts distincts", en: "Define the Internet and the Web as two distinct concepts" },
        xpReward: 7,
      },
      {
        description: { fr: "Citer des services Internet qui ne sont pas du Web", en: "List Internet services that are not the Web" },
        xpReward: 7,
      },
      {
        description: { fr: "Expliquer le rôle des navigateurs et des pages HTML", en: "Explain the role of browsers and HTML pages" },
        xpReward: 8,
      },
      {
        description: { fr: "Relier une panne concrète à la couche Internet ou Web concernée", en: "Map a concrete outage to the relevant Internet or Web layer" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-internet-vs-web-s1",
        diagram: "lan-wan",
        title: { fr: "Deux idées souvent confondues", en: "Two ideas often mixed up" },
        body: {
          fr: "Beaucoup de gens disent « Internet » pour parler d’un site web. En réalité, Internet est l’infrastructure mondiale de réseaux interconnectés. Le Web est un service qui circule sur cette infrastructure, aux côtés d’autres usages comme le mail ou le streaming. Cette précision évite les tickets flous et les débats stériles en équipe. En formation, on t’entraîne à nommer infrastructure versus service avant de proposer un correctif. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Many people say “Internet” when they mean a website. In reality, the Internet is the global infrastructure of interconnected networks. The Web is one service that runs on that infrastructure, alongside others like email or streaming. This precision avoids vague tickets and sterile team debates. In training you practice naming infrastructure versus service before proposing a fix. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Deux idées souvent confondues » change concrètement dans ton debug ou ton code.", en: "Remember what “Two ideas often mixed up” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Internet vs Web que cette idée explique.", en: "Name a real symptom related to Internet vs the Web that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Internet = routes et câbles. Web = pages et liens que tu ouvres dans un navigateur.", en: "Internet = routes and cables. Web = pages and links you open in a browser." },
        calloutKind: "key",
        analogy: { fr: "Pense à « Deux idées souvent confondues » comme un panneau indicateur sur la route de Internet vs Web : il oriente avant d’accélérer.", en: "Think of “Two ideas often mixed up” as a road sign on the path of Internet vs the Web: it orients you before you speed up." },
      },
      {
        id: "web-internet-vs-web-s2",
        title: { fr: "Internet : le réseau des réseaux", en: "Internet: the network of networks" },
        body: {
          fr: "Internet relie des millions de réseaux privés, d’entreprises et d’opérateurs. Les paquets IP voyagent de machine en machine grâce à des protocoles communs. Sans ce socle, aucun site, aucun message, aucun appel VoIP ne pourrait traverser la planète. Retiens que l’universalité vient des protocoles partagés, pas d’une marque. Quand un lien coupe, le routage cherche d’autres chemins pour garder le trafic vivant. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "The Internet connects millions of private, enterprise, and carrier networks. IP packets travel from machine to machine thanks to shared protocols. Without that foundation, no site, message, or VoIP call could cross the planet. Remember universality comes from shared protocols, not a brand. When a link cuts, routing seeks other paths to keep traffic alive. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Couche physique : fibre, cuivre, radio, satellite.", en: "Physical layer: fiber, copper, radio, satellite." },
          { fr: "Adressage IP pour identifier les machines.", en: "IP addressing to identify machines." },
          { fr: "Routage pour choisir le chemin des paquets.", en: "Routing to choose packet paths." },
        ],
        diagram: "lan-wan",
        callout: { fr: "Astuce : après cette section, explique « Internet : le réseau des réseaux » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Internet: the network of networks” out loud in 20 seconds." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Internet : le réseau des réseaux » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Internet: the network of networks” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Internet vs Web, même simple.", en: "Start from an example related to Internet vs the Web, even a simple one." },
        },
      },
      {
        id: "web-internet-vs-web-s3",
        title: { fr: "Le Web : documents liés", en: "The Web: linked documents" },
        body: {
          fr: "Le World Wide Web a été inventé pour partager des documents via des hyperliens. Une page HTML peut pointer vers d’autres pages, images ou APIs. Le navigateur récupère ces ressources via HTTP(S) et les affiche. Une page moderne est un graphe de ressources liées, pas un fichier unique magique. Les hyperliens restent le cœur du modèle même avec APIs et scripts. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "The World Wide Web was invented to share documents through hyperlinks. An HTML page can point to other pages, images, or APIs. The browser fetches those resources over HTTP(S) and displays them. A modern page is a graph of linked resources, not one magic file. Hyperlinks remain the heart of the model even with APIs and scripts. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Le Web : documents liés » change concrètement dans ton debug ou ton code.", en: "Remember what “The Web: linked documents” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Internet vs Web que cette idée explique.", en: "Name a real symptom related to Internet vs the Web that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Le Web : documents liés » crée des bugs difficiles à classer.", en: "Warning: neglecting “The Web: linked documents” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Internet est le système routier ; le Web est le réseau de bibliothèques reliées par des panneaux indicateurs (les liens).", en: "The Internet is the road system; the Web is a network of libraries connected by road signs (the links)." },
      },
      {
        id: "web-internet-vs-web-s4",
        title: { fr: "Autres services sur Internet", en: "Other services on the Internet" },
        body: {
          fr: "Tout ce qui passe par Internet n’est pas du Web. Email (SMTP/IMAP), SSH, FTP, jeux en ligne, DNS et VPN utilisent Internet sans être des « pages web » au sens HTML/HTTP classique. Classer mail, SSH et sites te rend crédible. Un site down n’implique pas tout Internet ; une panne d’accès locale bloque plusieurs services d’un coup. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Not everything that travels the Internet is the Web. Email (SMTP/IMAP), SSH, FTP, online games, DNS, and VPNs use the Internet without being “web pages” in the classic HTML/HTTP sense. Classifying email, SSH, and sites makes you credible. One site down does not mean the whole Internet; a local access outage blocks several services at once. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Email : échange de messages.", en: "Email: exchanging messages." },
          { fr: "SSH : administration distante sécurisée.", en: "SSH: secure remote administration." },
          { fr: "Streaming vidéo : flux dédiés, pas seulement du HTML.", en: "Video streaming: dedicated streams, not just HTML." },
        ],
        callout: { fr: "Dire « j’ai envoyé un mail sur le Web » est imprécis : le mail utilise Internet, pas forcément le Web.", en: "Saying “I sent an email on the Web” is imprecise: email uses the Internet, not necessarily the Web." },
        calloutKind: "mistake",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Autres services sur Internet » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Other services on the Internet” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Internet vs Web, même simple.", en: "Start from an example related to Internet vs the Web, even a simple one." },
        },
      },
      {
        id: "web-internet-vs-web-s5",
        title: { fr: "Le navigateur, client du Web", en: "The browser, Web client" },
        body: {
          fr: "Chrome, Firefox, Safari ou Edge sont des clients HTTP. Ils demandent des URLs, interprètent HTML/CSS/JS et gèrent cookies, cache et certificats. Sans navigateur (ou outil équivalent), le Web reste inaccessible à un humain. Le navigateur orchestre HTML, CSS, images et JS, tout en appliquant HTTPS et cookies. curl fait le même métier HTTP sans interface pour tester une API. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Chrome, Firefox, Safari, or Edge are HTTP clients. They request URLs, interpret HTML/CSS/JS, and manage cookies, cache, and certificates. Without a browser (or equivalent tool), the Web stays unreachable for a human. The browser orchestrates HTML, CSS, images, and JS while applying HTTPS and cookies. curl does the same HTTP job without a UI to test an API. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Le navigateur, client du Web » change concrètement dans ton debug ou ton code.", en: "Remember what “The browser, Web client” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Internet vs Web que cette idée explique.", en: "Name a real symptom related to Internet vs the Web that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "client-server-web",
        callout: { fr: "À retenir : « Le navigateur, client du Web » conditionne souvent la suite de Internet vs Web.", en: "Key takeaway: “The browser, Web client” often shapes what follows in Internet vs the Web." },
        calloutKind: "key",
        analogy: { fr: "Pense à « Le navigateur, client du Web » comme un panneau indicateur sur la route de Internet vs Web : il oriente avant d’accélérer.", en: "Think of “The browser, Web client” as a road sign on the path of Internet vs the Web: it orients you before you speed up." },
      },
      {
        id: "web-internet-vs-web-s6",
        title: { fr: "Pourquoi la distinction compte", en: "Why the distinction matters" },
        body: {
          fr: "En tech, confondre Internet et Web mène à de mauvaises analyses : un panne DNS n’est pas « le Web cassé », et sécuriser un site n’équivaut pas à sécuriser tout Internet. Clarifier les couches aide à debuguer et à communiquer. Demande si le DNS résout, si HTTP répond, ou si le JS plante. Chaque réponse oriente une équipe différente et accélère l’escalade. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "In tech, mixing up Internet and Web leads to bad analysis: a DNS outage isn’t “the Web broken,” and securing a site isn’t securing the whole Internet. Clarifying layers helps you debug and communicate. Ask whether DNS resolves, HTTP answers, or JS crashes. Each answer routes a different team and speeds escalation. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Pourquoi la distinction compte » change concrètement dans ton debug ou ton code.", en: "Remember what “Why the distinction matters” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Internet vs Web que cette idée explique.", en: "Name a real symptom related to Internet vs the Web that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Quand un site ne charge pas, demande-toi : DNS, réseau, serveur HTTP, ou bug frontend ?", en: "When a site won’t load, ask: DNS, network, HTTP server, or frontend bug?" },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Pourquoi la distinction compte » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Why the distinction matters” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Internet vs Web, même simple.", en: "Start from an example related to Internet vs the Web, even a simple one." },
        },
      },
      {
        id: "web-internet-vs-web-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Classe mentalement ces usages : ouvrir youtube.com, envoyer un mail Outlook, te connecter en SSH à un VPS, jouer à un jeu en UDP. Justifie toujours protocole et type de client. Cet exercice prépare HTTP, DNS et le modèle client-serveur des prochaines leçons. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Mentally classify these uses: open youtube.com, send Outlook email, SSH into a VPS, play a UDP game. Always justify protocol and client type. This exercise prepares HTTP, DNS, and the client-server model in upcoming lessons. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Internet vs Web que cette idée explique.", en: "Name a real symptom related to Internet vs the Web that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de Internet vs Web : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of Internet vs the Web: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Lesquels sont clairement du Web ? Lesquels utilisent Internet sans être du Web ?", en: "Which are clearly the Web? Which use the Internet without being the Web?" },
          hint: { fr: "Le Web repose surtout sur HTTP(S) + HTML dans un navigateur.", en: "The Web mostly relies on HTTP(S) + HTML in a browser." },
        },
      },
      {
        id: "web-internet-vs-web-extra1",
        title: { fr: "Checklist de panne en 4 questions", en: "Outage checklist in 4 questions" },
        body: {
          fr: "Pose quatre questions dans l’ordre : ai-je du réseau ? Le DNS résout-il ? Le serveur HTTP répond-il ? La page plante-t-elle en JavaScript ? Cette checklist transforme une panne floue en hypothèses testables. Tu gagnes du temps et tu communiques mieux avec réseau, SRE ou frontend. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Ask four questions in order: do I have network? Does DNS resolve? Does the HTTP server answer? Does the page crash in JavaScript? This checklist turns a vague outage into testable hypotheses. You save time and communicate better with network, SRE, or frontend. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Checklist de panne en 4 questions » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Outage checklist in 4 questions” out loud in 20 seconds." },
        calloutKind: "tip",
        analogy: { fr: "Comme vérifier fusible, compteur, puis ampoule.", en: "Like checking fuse, meter, then bulb." },
      },
      {
        id: "web-internet-vs-web-extra2",
        title: { fr: "Rédiger un ticket précis", en: "Writing a precise ticket" },
        body: {
          fr: "Remplace « Internet est cassé » par une phrase du type « example.com renvoie 502 depuis mon Wi-Fi bureau ». Nomme le service, le symptôme mesurable et le périmètre. Tu orientes la bonne personne et montres que tu distingues produit Web et connectivité globale. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Replace “Internet is broken” with a sentence like “example.com returns 502 on my office Wi-Fi.” Name the service, measurable symptom, and scope. You route to the right person and show you distinguish Web product from global connectivity. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Erreur fréquente : confondre « Rédiger un ticket précis » avec un détail cosmétique.", en: "Common mistake: treating “Writing a precise ticket” as a cosmetic detail." },
        calloutKind: "mistake",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Rédiger un ticket précis » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Writing a precise ticket” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Internet vs Web, même simple.", en: "Start from an example related to Internet vs the Web, even a simple one." },
        },
      },
      {
        id: "web-internet-vs-web-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "Internet est l’infrastructure IP mondiale ; le Web est un service d’hypertexte et d’applications sur HTTP(S). Le navigateur est le client principal du Web, tandis que mail et SSH utilisent Internet autrement. Distinguer les couches te permet de diagnostiquer et de collaborer sans confusion. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "The Internet is the global IP infrastructure; the Web is a hypertext and application service on HTTP(S). The browser is the main Web client, while email and SSH use the Internet differently. Distinguishing layers lets you diagnose and collaborate without confusion. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens le cœur de la distinction Internet / Web.", en: "Remember the core of the Internet / Web distinction." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de la distinction Internet / Web est ta boussole pour la suite.", en: "The summary of the Internet / Web distinction is your compass for what comes next." },
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
      {
        term: { fr: "Infrastructure", en: "Infrastructure" },
        definition: {
          fr: "Réseaux et équipements qui portent le trafic.",
          en: "Networks and gear that carry traffic.",
        },
      },
      {
        term: { fr: "Service applicatif", en: "Application service" },
        definition: {
          fr: "Usage logique comme Web, mail ou SSH.",
          en: "Logical use such as Web, mail, or SSH.",
        },
      },
    ],
    activities: [
      {
        id: "web-internet-vs-web-q1",
        type: "multiple-choice",
        question: { fr: "Le World Wide Web est…", en: "The World Wide Web is…" },
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
        question: { fr: "Lequel n’est PAS typiquement du Web ?", en: "Which is NOT typically the Web?" },
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
        question: { fr: "Quel outil est le client principal du Web pour les utilisateurs ?", en: "What is the main Web client for users?" },
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
        question: { fr: "Internet transporte principalement des…", en: "The Internet mainly carries…" },
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
        question: { fr: "Un hyperlien sert à…", en: "A hyperlink is used to…" },
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
        question: { fr: "Pourquoi distinguer Internet et Web en debug ?", en: "Why distinguish Internet and Web when debugging?" },
        options: [
          { fr: "Pour isoler réseau, DNS, HTTP ou frontend", en: "To isolate network, DNS, HTTP, or frontend" },
          { fr: "Parce que le Web n’utilise jamais Internet", en: "Because the Web never uses the Internet" },
          { fr: "Pour éviter d’utiliser HTTPS", en: "To avoid using HTTPS" },
          { fr: "Parce que DNS n’existe que hors Internet", en: "Because DNS exists only off the Internet" },
        ],
        correctAnswer: { fr: "Pour isoler réseau, DNS, HTTP ou frontend", en: "To isolate network, DNS, HTTP, or frontend" },
        hint: { fr: "Chaque couche peut échouer séparément.", en: "Each layer can fail separately." },
        explanation: {
          fr: "Identifier la couche en panne accélère le diagnostic (câble vs certificat vs bug JS).",
          en: "Pinpointing the failing layer speeds diagnosis (cable vs certificate vs JS bug).",
        },
      },
      {
        id: "web-internet-vs-web-q100",
        type: "multiple-choice",
        question: { fr: "Quelle phrase de ticket est la plus précise ?", en: "Which ticket sentence is most precise?" },
        options: [
          { fr: "Internet est cassé partout", en: "Internet is broken everywhere" },
          { fr: "example.com renvoie 502 depuis mon Wi-Fi bureau", en: "example.com returns 502 on my office Wi-Fi" },
          { fr: "Le Web n’existe plus", en: "The Web no longer exists" },
          { fr: "C’est la faute du cloud", en: "It is the cloud’s fault" },
        ],
        correctAnswer: { fr: "example.com renvoie 502 depuis mon Wi-Fi bureau", en: "example.com returns 502 on my office Wi-Fi" },
        hint: { fr: "Service + symptôme + contexte.", en: "Service + symptom + context." },
        explanation: {
          fr: "Une description localisée oriente vite le diagnostic.",
          en: "A localized description quickly steers diagnosis.",
        },
      },
      {
        id: "web-internet-vs-web-q101",
        type: "multiple-choice",
        question: { fr: "Le streaming vidéo sur Internet est…", en: "Video streaming on the Internet is…" },
        options: [
          { fr: "Toujours du HTML seul", en: "Always HTML alone" },
          { fr: "Un usage Internet pas forcément une page Web classique", en: "An Internet use not necessarily a classic Web page" },
          { fr: "Impossible sans SSH", en: "Impossible without SSH" },
          { fr: "Identique au cuivre uniquement", en: "Identical to copper only" },
        ],
        correctAnswer: { fr: "Un usage Internet pas forcément une page Web classique", en: "An Internet use not necessarily a classic Web page" },
        hint: { fr: "Pense apps natives et protocoles média.", en: "Think native apps and media protocols." },
        explanation: {
          fr: "Le stream peut utiliser Internet hors d’une page HTML classique.",
          en: "A stream can use the Internet outside a classic HTML page.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es un professeur patient qui enseigne la différence entre Internet et le Web. Utilise des analogies concrètes, corrige les confusions courantes, et reste accessible aux débutants. Fais nommer la couche en panne avant la solution, avec des exemples du quotidien.",
        en: "You are a patient teacher explaining the difference between the Internet and the Web. Use concrete analogies, correct common mix-ups, and stay beginner-friendly. Have them name the failing layer before the fix, using everyday examples.",
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
    title: { fr: "Client et serveur", en: "Client and server" },
    description: {
      fr: "Comprends qui demande, qui répond, et où s’exécute le code entre navigateur, API et base de données. Tu cartographies frontend et backend pour suivre une requête HTTP de bout en bout sans confusion.",
      en: "Understand who requests, who responds, and where code runs across browser, API, and database. You map frontend and backend to follow an HTTP request end to end without confusion.",
    },
    icon: "network",
    estimatedMinutes: 22,
    xpReward: 28,
    goals: [
      {
        description: { fr: "Définir les rôles client et serveur", en: "Define client and server roles" },
        xpReward: 7,
      },
      {
        description: { fr: "Situer frontend et backend dans l’architecture", en: "Place frontend and backend in the architecture" },
        xpReward: 8,
      },
      {
        description: { fr: "Décrire une requête HTTP simple bout en bout", en: "Describe a simple HTTP request end to end" },
        xpReward: 8,
      },
      {
        description: { fr: "Situer clairement chaque composant d’une app (UI, API, base) dans le modèle client-serveur", en: "Clearly place each app component (UI, API, database) in the client-server model" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-client-server-s1",
        title: { fr: "Le modèle de base", en: "The basic model" },
        body: {
          fr: "Sur le Web, le client initie presque toujours la conversation : il envoie une requête. Le serveur écoute, traite, puis renvoie une réponse (HTML, JSON, fichier…). C’est le cœur du modèle client-serveur. Ce modèle reste la boussole même avec SSR ou serverless : quelque chose initie, quelque chose fournit. Nommer les rôles évite de chercher un bug au mauvais endroit. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "On the Web, the client almost always starts the conversation: it sends a request. The server listens, processes, then returns a response (HTML, JSON, file…). That is the heart of the client-server model. This model stays your compass even with SSR or serverless: something initiates, something provides. Naming roles avoids hunting a bug in the wrong place. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Le modèle de base » change concrètement dans ton debug ou ton code.", en: "Remember what “The basic model” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Client et serveur que cette idée explique.", en: "Name a real symptom related to Client and server that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "client-server",
        callout: { fr: "Client = demandeur. Serveur = fournisseur de ressource.", en: "Client = requester. Server = resource provider." },
        calloutKind: "key",
        analogy: { fr: "Pense à « Le modèle de base » comme un panneau indicateur sur la route de Client et serveur : il oriente avant d’accélérer.", en: "Think of “The basic model” as a road sign on the path of Client and server: it orients you before you speed up." },
      },
      {
        id: "web-client-server-s2",
        title: { fr: "Qui est le client ?", en: "Who is the client?" },
        body: {
          fr: "Le navigateur est le client le plus visible, mais aussi les apps mobiles, curl, Postman ou un microservice qui appelle une API. Tout programme qui consomme une ressource distante agit comme client. Un client n’est pas « forcément un humain ». Scripts CI, apps mobiles et microservices consomment aussi des APIs. Ce qui compte, c’est qui ouvre la conversation. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "The browser is the most visible client, but also mobile apps, curl, Postman, or a microservice calling an API. Any program that consumes a remote resource acts as a client. A client is not “necessarily a human.” CI scripts, mobile apps, and microservices also consume APIs. What matters is who opens the conversation. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Navigateur : pages et assets.", en: "Browser: pages and assets." },
          { fr: "App mobile : APIs JSON.", en: "Mobile app: JSON APIs." },
          { fr: "Script CI : appels automatisés.", en: "CI script: automated calls." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Qui est le client ? » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Who is the client?” out loud in 20 seconds." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Qui est le client ? » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Who is the client?” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Client et serveur, même simple.", en: "Start from an example related to Client and server, even a simple one." },
        },
      },
      {
        id: "web-client-server-s3",
        title: { fr: "Qui est le serveur ?", en: "Who is the server?" },
        body: {
          fr: "Un serveur web (Nginx, Apache, Node, etc.) attend sur un port (souvent 80/443), accepte les connexions et sert des contenus ou délègue à une application. « Serveur » désigne à la fois la machine et le logiciel. Le mot serveur désigne la machine et le logiciel qui écoute. Nginx, Node ou Apache attendent sur un port et délèguent souvent à une application métier. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "A web server (Nginx, Apache, Node, etc.) waits on a port (often 80/443), accepts connections, and serves content or delegates to an application. “Server” means both the machine and the software. The word server means both the machine and the listening software. Nginx, Node, or Apache wait on a port and often delegate to business application code. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Qui est le serveur ? » change concrètement dans ton debug ou ton code.", en: "Remember what “Who is the server?” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Client et serveur que cette idée explique.", en: "Name a real symptom related to Client and server that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "client-server-web",
        callout: { fr: "Attention : négliger « Qui est le serveur ? » crée des bugs difficiles à classer.", en: "Warning: neglecting “Who is the server?” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Qui est le serveur ? » comme un panneau indicateur sur la route de Client et serveur : il oriente avant d’accélérer.", en: "Think of “Who is the server?” as a road sign on the path of Client and server: it orients you before you speed up." },
      },
      {
        id: "web-client-server-s4",
        title: { fr: "Frontend vs backend", en: "Frontend vs backend" },
        body: {
          fr: "Le frontend s’exécute côté client (HTML/CSS/JS dans le navigateur). Le backend s’exécute côté serveur (auth, base de données, logique métier). Les deux communiquent via HTTP(S). Frontend et backend communiquent surtout via HTTP(S). Garde les secrets et la logique sensible côté serveur, et expose au client seulement ce qui est nécessaire à l’UI. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Frontend runs on the client (HTML/CSS/JS in the browser). Backend runs on the server (auth, database, business logic). They communicate over HTTP(S). Frontend and backend mostly talk over HTTP(S). Keep secrets and sensitive logic on the server, and expose to the client only what the UI needs. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Frontend vs backend » change concrètement dans ton debug ou ton code.", en: "Remember what “Frontend vs backend” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Client et serveur que cette idée explique.", en: "Name a real symptom related to Client and server that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Erreur fréquente : confondre « Frontend vs backend » avec un détail cosmétique.", en: "Common mistake: treating “Frontend vs backend” as a cosmetic detail." },
        calloutKind: "mistake",
        analogy: { fr: "Le frontend est la salle de restaurant (ce que tu vois) ; le backend est la cuisine (préparation invisible).", en: "Frontend is the dining room (what you see); backend is the kitchen (invisible preparation)." },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Frontend vs backend » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Frontend vs backend” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Client et serveur, même simple.", en: "Start from an example related to Client and server, even a simple one." },
        },
      },
      {
        id: "web-client-server-s5",
        title: { fr: "Cycle d’une requête", en: "Request lifecycle" },
        body: {
          fr: "Tu tapes une URL → DNS résout le domaine → TCP/TLS → requête HTTP → le serveur répond → le navigateur parse et affiche. Comprendre ce cycle aide à localiser les erreurs (timeout, 404, CORS…). Le cycle URL → DNS → TLS → HTTP → rendu explique timeouts, 404 et erreurs CORS. Savoir où ça casse réduit le temps de debug de moitié. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "You type a URL → DNS resolves the domain → TCP/TLS → HTTP request → server responds → browser parses and displays. Understanding this cycle helps locate errors (timeout, 404, CORS…). The URL → DNS → TLS → HTTP → render cycle explains timeouts, 404s, and CORS errors. Knowing where it breaks cuts debug time in half. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Cycle d’une requête » change concrètement dans ton debug ou ton code.", en: "Remember what “Request lifecycle” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Client et serveur que cette idée explique.", en: "Name a real symptom related to Client and server that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "request-lifecycle",
        callout: { fr: "Un 404 vient du serveur ; un DNS fail arrive avant même HTTP.", en: "A 404 comes from the server; a DNS failure happens before HTTP even starts." },
        calloutKind: "tip",
        analogy: { fr: "Pense à « Cycle d’une requête » comme un panneau indicateur sur la route de Client et serveur : il oriente avant d’accélérer.", en: "Think of “Request lifecycle” as a road sign on the path of Client and server: it orients you before you speed up." },
      },
      {
        id: "web-client-server-s6",
        title: { fr: "Stateless HTTP", en: "Stateless HTTP" },
        body: {
          fr: "Chaque requête HTTP est indépendante par défaut. Le serveur ne « se souvient » pas de toi sans cookies, tokens ou sessions. C’est volontaire : ça simplifie la scalabilité. HTTP est sans état : chaque requête est indépendante tant que cookies ou tokens ne portent pas le contexte. C’est volontaire pour scaler horizontalement. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Each HTTP request is independent by default. The server does not “remember” you without cookies, tokens, or sessions. That is intentional: it simplifies scalability. HTTP is stateless: each request is independent until cookies or tokens carry context. That is intentional so you can scale horizontally. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Stateless HTTP » change concrètement dans ton debug ou ton code.", en: "Remember what “Stateless HTTP” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Client et serveur que cette idée explique.", en: "Name a real symptom related to Client and server that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Croire qu’HTTP garde l’état tout seul est une erreur classique.", en: "Believing HTTP keeps state by itself is a classic mistake." },
        calloutKind: "mistake",
        codeExample: {
          language: "http",
          code: "GET /profile HTTP/1.1\nHost: example.com\nAuthorization: Bearer eyJhbGciOi...",
          caption: { fr: "Sans en-tête d’auth, le serveur ne sait pas qui tu es.", en: "Without an auth header, the server does not know who you are." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Stateless HTTP » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Stateless HTTP” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Client et serveur, même simple.", en: "Start from an example related to Client and server, even a simple one." },
        },
      },
      {
        id: "web-client-server-s7",
        title: { fr: "Exercice mental", en: "Mental exercise" },
        body: {
          fr: "Imagine une app de notes : liste affichée dans React, sauvegarde via API Node, données en PostgreSQL. Dans une app de notes, React affiche, l’API valide et Postgres stocke. Sépare clairement présentation, règles métier et persistance. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Imagine a notes app: list shown in React, save via Node API, data in PostgreSQL. In a notes app, React displays, the API validates, and Postgres stores. Clearly separate presentation, business rules, and persistence. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Exercice mental » change concrètement dans ton debug ou ton code.", en: "Remember what “Mental exercise” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Client et serveur que cette idée explique.", en: "Name a real symptom related to Client and server that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Exercice mental » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mental exercise” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Exercice mental » comme un panneau indicateur sur la route de Client et serveur : il oriente avant d’accélérer.", en: "Think of “Mental exercise” as a road sign on the path of Client and server: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Pour chaque élément (React, API Node, Postgres), dis s’il est plutôt client, serveur applicatif ou stockage.", en: "For each piece (React, Node API, Postgres), say if it is mostly client, application server, or storage." },
          hint: { fr: "React tourne dans le navigateur ; Postgres ne parle pas HTTP directement au user.", en: "React runs in the browser; Postgres does not speak HTTP directly to the user." },
        },
      },
      {
        id: "web-client-server-s8",
        title: { fr: "Variantes modernes", en: "Modern variants" },
        body: {
          fr: "SSR, BFF, edge functions et serverless brouillent un peu la frontière, mais le principe reste : quelque chose demande, quelque chose répond. Tu apprends à nommer où s’exécute chaque bout de logique. SSR, BFF et edge déplacent l’exécution, mais le navigateur reste client. Apprends à dire où tourne chaque bout de logique. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "SSR, BFFs, edge functions, and serverless blur the line a bit, but the principle remains: something requests, something responds. You learn to name where each piece of logic runs. SSR, BFFs, and edge move execution, but the browser remains the client. Learn to say where each piece of logic runs. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Variantes modernes » change concrètement dans ton debug ou ton code.", en: "Remember what “Modern variants” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Client et serveur que cette idée explique.", en: "Name a real symptom related to Client and server that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "SSR génère du HTML sur le serveur, mais le navigateur reste client.", en: "SSR generates HTML on the server, but the browser remains the client." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Variantes modernes » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Modern variants” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Client et serveur, même simple.", en: "Start from an example related to Client and server, even a simple one." },
        },
      },
      {
        id: "web-client-server-extra1",
        title: { fr: "Cartographier une feature", en: "Mapping a feature" },
        body: {
          fr: "Pour chaque feature, dessine trois cases : UI cliente, API serveur, stockage. Indique quelle case authentifie, valide et persiste. Cet exercice simple révèle les fuites de secrets vers le navigateur et les responsabilités floues entre équipes. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "For each feature, draw three boxes: client UI, server API, storage. Mark which box authenticates, validates, and persists. This simple exercise reveals secret leaks to the browser and fuzzy ownership between teams. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "À retenir : « Cartographier une feature » conditionne souvent la suite de Client et serveur.", en: "Key takeaway: “Mapping a feature” often shapes what follows in Client and server." },
        calloutKind: "key",
        analogy: { fr: "Comme une cuisine : salle, passe, réserve.", en: "Like a restaurant: dining room, pass, pantry." },
      },
      {
        id: "web-client-server-extra2",
        title: { fr: "Erreurs de frontière fréquentes", en: "Common boundary mistakes" },
        body: {
          fr: "Mettre une clé API secrète dans le frontend, croire que HTTP se souvient seul de l’utilisateur, ou appeler la base directement depuis le navigateur sont des erreurs classiques. Corrige-les tôt : tu sécurises l’app et tu clarifies l’architecture pour toute l’équipe. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Putting a secret API key in the frontend, believing HTTP remembers the user alone, or calling the database directly from the browser are classic mistakes. Fix them early: you secure the app and clarify architecture for the whole team. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Attention : négliger « Erreurs de frontière fréquentes » crée des bugs difficiles à classer.", en: "Warning: neglecting “Common boundary mistakes” creates bugs that are hard to classify." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Erreurs de frontière fréquentes » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Common boundary mistakes” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Client et serveur, même simple.", en: "Start from an example related to Client and server, even a simple one." },
        },
      },
      {
        id: "web-client-server-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "Le client initie la requête ; le serveur fournit la ressource. Frontend s’exécute côté navigateur, backend côté serveur, souvent avec une base derrière. HTTP sans état exige cookies ou tokens pour l’identité. Garder cette carte mentale simplifie debug et design. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "The client initiates the request; the server provides the resource. Frontend runs in the browser, backend on the server, often with a database behind it. Stateless HTTP needs cookies or tokens for identity. Keeping this mental map simplifies debugging and design. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens le cœur de le modèle client-serveur.", en: "Remember the core of the client-server model." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de le modèle client-serveur est ta boussole pour la suite.", en: "The summary of the client-server model is your compass for what comes next." },
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
      {
        term: { fr: "BFF", en: "BFF" },
        definition: {
          fr: "Backend for Frontend : API adaptée à une UI précise.",
          en: "Backend for Frontend: an API tailored to a specific UI.",
        },
      },
      {
        term: { fr: "SSR", en: "SSR" },
        definition: {
          fr: "Rendu HTML côté serveur avant envoi au navigateur.",
          en: "HTML rendering on the server before sending to the browser.",
        },
      },
    ],
    activities: [
      {
        id: "web-client-server-q1",
        type: "multiple-choice",
        question: { fr: "Dans une visite de site, le navigateur est…", en: "When visiting a site, the browser is…" },
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
        question: { fr: "Le frontend s’exécute principalement…", en: "Frontend mainly runs…" },
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
        question: { fr: "HTTP est dit « stateless » car…", en: "HTTP is called “stateless” because…" },
        options: [
          { fr: "Chaque requête est indépendante par défaut", en: "Each request is independent by default" },
          { fr: "Il ne peut pas transporter de JSON", en: "It cannot carry JSON" },
          { fr: "Il refuse les cookies", en: "It rejects cookies" },
          { fr: "Il n’utilise jamais TCP", en: "It never uses TCP" },
        ],
        correctAnswer: { fr: "Chaque requête est indépendante par défaut", en: "Each request is independent by default" },
        hint: { fr: "Sans cookie/token, pas de « mémoire ».", en: "Without cookie/token, no “memory.”" },
        explanation: {
          fr: "L’état de session doit être ajouté explicitement (cookies, JWT, sessions serveur).",
          en: "Session state must be added explicitly (cookies, JWT, server sessions).",
        },
      },
      {
        id: "web-client-server-q4",
        type: "multiple-choice",
        question: { fr: "Une API REST appelée par une app mobile joue le rôle de…", en: "A REST API called by a mobile app plays the role of…" },
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
        question: { fr: "Avant la requête HTTP, que fait souvent le client ?", en: "Before the HTTP request, what does the client often do?" },
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
        question: { fr: "SSR signifie que…", en: "SSR means that…" },
        options: [
          { fr: "Le HTML est généré côté serveur", en: "HTML is generated on the server" },
          { fr: "Le DNS est désactivé", en: "DNS is disabled" },
          { fr: "Il n’y a plus de client", en: "There is no client anymore" },
          { fr: "Seul CSS tourne sur le serveur", en: "Only CSS runs on the server" },
        ],
        correctAnswer: { fr: "Le HTML est généré côté serveur", en: "HTML is generated on the server" },
        hint: { fr: "Server-Side Rendering.", en: "Server-Side Rendering." },
        explanation: {
          fr: "Le serveur prépare le HTML ; le navigateur reste le client qui l’affiche.",
          en: "The server prepares HTML; the browser remains the client that displays it.",
        },
      },
      {
        id: "web-client-server-q7",
        type: "multiple-choice",
        question: { fr: "Où vit typiquement la logique d’accès à la base de données ?", en: "Where does database access logic typically live?" },
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
      {
        id: "web-client-server-q100",
        type: "multiple-choice",
        question: { fr: "Où placer une clé secrète de base de données ?", en: "Where should a database secret key live?" },
        options: [
          { fr: "Dans le JavaScript public du navigateur", en: "In public browser JavaScript" },
          { fr: "Côté serveur / backend uniquement", en: "On the server / backend only" },
          { fr: "Dans le CSS", en: "In CSS" },
          { fr: "Dans le favicon", en: "In the favicon" },
        ],
        correctAnswer: { fr: "Côté serveur / backend uniquement", en: "On the server / backend only" },
        hint: { fr: "Ce qui est public est lisible.", en: "What is public is readable." },
        explanation: {
          fr: "Les secrets restent sur le serveur, jamais dans le bundle client.",
          en: "Secrets stay on the server, never in the client bundle.",
        },
      },
      {
        id: "web-client-server-q101",
        type: "multiple-choice",
        question: { fr: "Pourquoi HTTP a-t-il besoin de cookies ou tokens ?", en: "Why does HTTP need cookies or tokens?" },
        options: [
          { fr: "Parce que chaque requête est indépendante par défaut", en: "Because each request is independent by default" },
          { fr: "Parce que TCP n’existe pas", en: "Because TCP does not exist" },
          { fr: "Parce que HTML interdit les formulaires", en: "Because HTML forbids forms" },
          { fr: "Parce que DNS stocke les sessions", en: "Because DNS stores sessions" },
        ],
        correctAnswer: { fr: "Parce que chaque requête est indépendante par défaut", en: "Because each request is independent by default" },
        hint: { fr: "Pense au caractère stateless.", en: "Think about the stateless nature." },
        explanation: {
          fr: "Sans mécanisme explicite, le serveur ne « se souvient » pas de toi.",
          en: "Without an explicit mechanism, the server does not “remember” you.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseigne le modèle client-serveur web. Relie toujours les concepts à des exemples concrets (navigateur, API, base de données) et corrige les confusions frontend/backend. Fais situer UI, API et base sur un schéma mental à chaque exemple.",
        en: "You teach the web client-server model. Always tie concepts to concrete examples (browser, API, database) and correct frontend/backend mix-ups. Have them place UI, API, and database on a mental diagram for every example.",
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
      fr: "Maîtrise méthodes, codes de statut et en-têtes, puis comprends comment TLS transforme HTTP en HTTPS pour protéger le trafic. Tu sauras lire une conversation HTTP et choisir les bons codes au quotidien.",
      en: "Master methods, status codes, and headers, then understand how TLS turns HTTP into HTTPS to protect traffic. You will read an HTTP conversation and choose the right codes day to day.",
    },
    icon: "lock",
    estimatedMinutes: 23,
    xpReward: 29,
    goals: [
      {
        description: { fr: "Expliquer une requête/réponse HTTP", en: "Explain an HTTP request/response" },
        xpReward: 8,
      },
      {
        description: { fr: "Choisir les bonnes méthodes et codes courants", en: "Choose common methods and status codes correctly" },
        xpReward: 8,
      },
      {
        description: { fr: "Différencier HTTP et HTTPS (TLS)", en: "Differentiate HTTP and HTTPS (TLS)" },
        xpReward: 8,
      },
      {
        description: { fr: "Choisir méthode HTTP et code de statut adaptés à un scénario simple", en: "Choose the right HTTP method and status code for a simple scenario" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-http-https-s1",
        title: { fr: "HTTP, le langage du Web", en: "HTTP, the language of the Web" },
        body: {
          fr: "HTTP définit comment client et serveur échangent messages texte structurés : ligne de requête, en-têtes, corps optionnel. C’est simple à lire, ce qui facilite le debug avec les DevTools. Lis les DevTools comme une conversation claire : ligne de requête, en-têtes, corps, puis statut. Cette lisibilité fait d’HTTP un excellent terrain d’apprentissage du Web. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "HTTP defines how client and server exchange structured text messages: request line, headers, optional body. It is readable, which makes debugging with DevTools easier. Read DevTools like a clear conversation: request line, headers, body, then status. That readability makes HTTP an excellent Web learning ground. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « HTTP, le langage du Web » change concrètement dans ton debug ou ton code.", en: "Remember what “HTTP, the language of the Web” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à HTTP et HTTPS que cette idée explique.", en: "Name a real symptom related to HTTP and HTTPS that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "http-https",
        callout: { fr: "HTTP décrit le message ; TCP/TLS transporte la connexion.", en: "HTTP describes the message; TCP/TLS carries the connection." },
        calloutKind: "key",
        analogy: { fr: "Pense à « HTTP, le langage du Web » comme un panneau indicateur sur la route de HTTP et HTTPS : il oriente avant d’accélérer.", en: "Think of “HTTP, the language of the Web” as a road sign on the path of HTTP and HTTPS: it orients you before you speed up." },
      },
      {
        id: "web-http-https-s2",
        title: { fr: "Méthodes essentielles", en: "Essential methods" },
        body: {
          fr: "GET lit, POST crée/soumet, PUT/PATCH mettent à jour, DELETE supprime. Respecter la sémantique évite des APIs confuses et des caches incorrects. Respecter GET sans effet de bord protège caches et favoris. POST convient aux soumissions ; PUT/PATCH et DELETE clarifient les intentions d’API. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "GET reads, POST creates/submits, PUT/PATCH update, DELETE removes. Respecting semantics avoids confusing APIs and incorrect caches. Keeping GET free of side effects protects caches and bookmarks. POST fits submissions; PUT/PATCH and DELETE clarify API intent. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "GET : sûr et idéalement sans effet de bord.", en: "GET: safe and ideally side-effect free." },
          { fr: "POST : envoi de données, création fréquente.", en: "POST: sending data, often creation." },
          { fr: "PUT/PATCH : remplacement ou mise à jour partielle.", en: "PUT/PATCH: replace or partial update." },
          { fr: "DELETE : suppression de ressource.", en: "DELETE: resource removal." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Méthodes essentielles » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Essential methods” out loud in 20 seconds." },
        calloutKind: "tip",
        codeExample: {
          language: "http",
          code: "GET /api/users/42 HTTP/1.1\nHost: api.example.com\nAccept: application/json",
          caption: { fr: "Une lecture GET typique vers une API.", en: "A typical GET read against an API." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Méthodes essentielles » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Essential methods” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à HTTP et HTTPS, même simple.", en: "Start from an example related to HTTP and HTTPS, even a simple one." },
        },
      },
      {
        id: "web-http-https-s3",
        title: { fr: "Codes de statut", en: "Status codes" },
        body: {
          fr: "2xx = succès, 3xx = redirection, 4xx = erreur client, 5xx = erreur serveur. Apprendre 200, 201, 301/302, 400, 401, 403, 404, 500 couvre l’essentiel du quotidien. Mémorise les familles 2xx, 3xx, 4xx, 5xx. 401 et 403 ne sont pas interchangeables : identité manquante versus permission refusée. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "2xx = success, 3xx = redirect, 4xx = client error, 5xx = server error. Learning 200, 201, 301/302, 400, 401, 403, 404, 500 covers everyday needs. Memorize the 2xx, 3xx, 4xx, 5xx families. 401 and 403 are not interchangeable: missing identity versus denied permission. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Codes de statut » change concrètement dans ton debug ou ton code.", en: "Remember what “Status codes” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à HTTP et HTTPS que cette idée explique.", en: "Name a real symptom related to HTTP and HTTPS that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "401 = non authentifié ; 403 = authentifié mais interdit. Ne les inverse pas.", en: "401 = not authenticated; 403 = authenticated but forbidden. Do not swap them." },
        calloutKind: "mistake",
        analogy: { fr: "Pense à « Codes de statut » comme un panneau indicateur sur la route de HTTP et HTTPS : il oriente avant d’accélérer.", en: "Think of “Status codes” as a road sign on the path of HTTP and HTTPS: it orients you before you speed up." },
      },
      {
        id: "web-http-https-s4",
        title: { fr: "En-têtes utiles", en: "Useful headers" },
        body: {
          fr: "Content-Type, Authorization, Cache-Control, Cookie, User-Agent et Accept guident le traitement. Les en-têtes de sécurité (HSTS, CSP) renforcent HTTPS. Content-Type, Authorization et Cache-Control orientent le traitement. Les en-têtes de sécurité renforcent la posture même quand HTTPS est déjà en place. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Content-Type, Authorization, Cache-Control, Cookie, User-Agent, and Accept guide processing. Security headers (HSTS, CSP) strengthen HTTPS. Content-Type, Authorization, and Cache-Control guide processing. Security headers strengthen posture even when HTTPS is already in place. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « En-têtes utiles » change concrètement dans ton debug ou ton code.", en: "Remember what “Useful headers” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à HTTP et HTTPS que cette idée explique.", en: "Name a real symptom related to HTTP and HTTPS that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Erreur fréquente : confondre « En-têtes utiles » avec un détail cosmétique.", en: "Common mistake: treating “Useful headers” as a cosmetic detail." },
        calloutKind: "mistake",
        analogy: { fr: "Les en-têtes sont l’étiquette du colis : destinataire, format, instructions de manutention.", en: "Headers are the parcel label: recipient, format, handling instructions." },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « En-têtes utiles » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Useful headers” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à HTTP et HTTPS, même simple.", en: "Start from an example related to HTTP and HTTPS, even a simple one." },
        },
      },
      {
        id: "web-http-https-s5",
        title: { fr: "Pourquoi HTTPS", en: "Why HTTPS" },
        body: {
          fr: "HTTPS = HTTP sur TLS. Le trafic est chiffré et authentifié via certificats. Sans HTTPS, un attaquant sur le réseau peut lire ou modifier mots de passe et cookies. Sans TLS, un observateur réseau peut lire ou modifier mots de passe et cookies. Le cadenas dit que la liaison est chiffrée vers un certificat de confiance, pas que le site est moral. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "HTTPS = HTTP over TLS. Traffic is encrypted and authenticated via certificates. Without HTTPS, a network attacker can read or alter passwords and cookies. Without TLS, a network observer can read or alter passwords and cookies. The padlock says the link is encrypted to a trusted certificate, not that the site is ethical. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Pourquoi HTTPS » change concrètement dans ton debug ou ton code.", en: "Remember what “Why HTTPS” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à HTTP et HTTPS que cette idée explique.", en: "Name a real symptom related to HTTP and HTTPS that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "http-https",
        callout: { fr: "Le cadenas ne garantit pas qu’un site est honnête , seulement que la connexion est chiffrée vers le bon certificat.", en: "The padlock does not prove a site is honest , only that the connection is encrypted to the right certificate." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Pourquoi HTTPS » comme un panneau indicateur sur la route de HTTP et HTTPS : il oriente avant d’accélérer.", en: "Think of “Why HTTPS” as a road sign on the path of HTTP and HTTPS: it orients you before you speed up." },
      },
      {
        id: "web-http-https-s6",
        title: { fr: "Handshake en bref", en: "Handshake in brief" },
        body: {
          fr: "Client et serveur négocient TLS, vérifient le certificat, dérivent des clés de session, puis envoient HTTP chiffré. Les navigateurs rejettent les certificats expirés ou non de confiance. Le handshake négocie algorithmes, vérifie le certificat et dérive des clés de session. Un certificat expiré ou auto-signé en production publique doit être refusé. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Client and server negotiate TLS, verify the certificate, derive session keys, then send encrypted HTTP. Browsers reject expired or untrusted certificates. The handshake negotiates algorithms, verifies the certificate, and derives session keys. An expired or self-signed certificate in public production must be rejected. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Handshake en bref » change concrètement dans ton debug ou ton code.", en: "Remember what “Handshake in brief” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à HTTP et HTTPS que cette idée explique.", en: "Name a real symptom related to HTTP and HTTPS that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "En local, un certificat auto-signé peut être accepté manuellement , jamais en production publique.", en: "Locally, a self-signed certificate may be accepted manually , never for public production." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Handshake en bref » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Handshake in brief” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à HTTP et HTTPS, même simple.", en: "Start from an example related to HTTP and HTTPS, even a simple one." },
        },
      },
      {
        id: "web-http-https-s7",
        title: { fr: "Mini exercice", en: "Mini exercise" },
        body: {
          fr: "Tu appelles POST /login et reçois 401. Puis avec un token valide, GET /admin renvoie 403. Expliquer 401 versus 403 sur login et admin montre que tu comprends authn et authz. C’est une distinction attendue en entretien et en prod. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "You call POST /login and get 401. Then with a valid token, GET /admin returns 403. Explaining 401 versus 403 on login and admin shows you understand authn and authz. That distinction is expected in interviews and in production. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini exercice » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini exercise” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à HTTP et HTTPS que cette idée explique.", en: "Name a real symptom related to HTTP and HTTPS that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini exercice » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini exercise” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini exercice » comme un panneau indicateur sur la route de HTTP et HTTPS : il oriente avant d’accélérer.", en: "Think of “Mini exercise” as a road sign on the path of HTTP and HTTPS: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Explique la différence entre ces deux échecs.", en: "Explain the difference between these two failures." },
          hint: { fr: "Identité manquante vs permission insuffisante.", en: "Missing identity vs insufficient permission." },
        },
      },
      {
        id: "web-http-https-extra1",
        title: { fr: "Lire une trace HTTP utile", en: "Reading a useful HTTP trace" },
        body: {
          fr: "Dans les DevTools, commence par méthode, URL et code. Vérifie ensuite Content-Type et Authorization, puis le corps JSON ou HTML. Cette lecture ordonnée évite de te perdre dans des centaines d’en-têtes et te donne un récit clair à coller dans un ticket. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "In DevTools, start with method, URL, and status. Then check Content-Type and Authorization, then the JSON or HTML body. That ordered reading keeps you from drowning in hundreds of headers and gives a clear story to paste into a ticket. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Lire une trace HTTP utile » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Reading a useful HTTP trace” out loud in 20 seconds." },
        calloutKind: "tip",
        analogy: { fr: "Comme lire l’objet, l’adresse, puis le contenu d’une lettre.", en: "Like reading the subject, address, then the letter body." },
      },
      {
        id: "web-http-https-extra2",
        title: { fr: "HTTPS au-delà du cadenas", en: "HTTPS beyond the padlock" },
        body: {
          fr: "HTTPS protège le transport, pas la logique métier. Un site HTTPS peut rester vulnérable à XSS ou à une mauvaise auth. Combine TLS, bons codes, validation serveur et en-têtes de sécurité pour une défense en profondeur réaliste. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "HTTPS protects transport, not business logic. An HTTPS site can still be vulnerable to XSS or bad auth. Combine TLS, good status codes, server validation, and security headers for realistic defense in depth. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Attention : négliger « HTTPS au-delà du cadenas » crée des bugs difficiles à classer.", en: "Warning: neglecting “HTTPS beyond the padlock” creates bugs that are hard to classify." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « HTTPS au-delà du cadenas » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “HTTPS beyond the padlock” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à HTTP et HTTPS, même simple.", en: "Start from an example related to HTTP and HTTPS, even a simple one." },
        },
      },
      {
        id: "web-http-https-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "HTTP structure requêtes et réponses avec méthodes, en-têtes et codes. HTTPS ajoute TLS pour chiffrer et authentifier la connexion. Choisir la bonne sémantique (GET sûr, 401 vs 403) rend APIs et debug plus fiables. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "HTTP structures requests and responses with methods, headers, and codes. HTTPS adds TLS to encrypt and authenticate the connection. Choosing the right semantics (safe GET, 401 vs 403) makes APIs and debugging more reliable. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de HTTP et HTTPS.", en: "Remember the core of HTTP and HTTPS." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de HTTP et HTTPS est ta boussole pour la suite.", en: "The summary of HTTP and HTTPS is your compass for what comes next." },
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
      {
        term: { fr: "TLS", en: "TLS" },
        definition: {
          fr: "Couche qui chiffre et authentifie la connexion sous HTTPS.",
          en: "Layer that encrypts and authenticates the connection under HTTPS.",
        },
      },
      {
        term: { fr: "Idempotence", en: "Idempotency" },
        definition: {
          fr: "Répéter la même requête produit le même effet métier.",
          en: "Repeating the same request yields the same business effect.",
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
        correctAnswer: { fr: "TLS (chiffrement et authenticité)", en: "TLS (encryption and authenticity)" },
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
        correctAnswer: { fr: "Ressource introuvable côté client/URL", en: "Resource not found for that client/URL" },
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
        correctAnswer: { fr: "Identité connue mais accès refusé", en: "Known identity but access denied" },
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
          { fr: "Interception ou altération du trafic", en: "Interception or tampering of traffic" },
          { fr: "La perte du CSS uniquement", en: "CSS loss only" },
          { fr: "L’impossibilité d’utiliser GET", en: "Inability to use GET" },
          { fr: "La désactivation automatique du DNS", en: "Automatic DNS disablement" },
        ],
        correctAnswer: { fr: "Interception ou altération du trafic", en: "Interception or tampering of traffic" },
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
      {
        id: "web-http-https-q100",
        type: "multiple-choice",
        question: { fr: "Quel code indique « authentifié mais interdit » ?", en: "Which code means “authenticated but forbidden”?" },
        options: [
          { fr: "401", en: "401" },
          { fr: "403", en: "403" },
          { fr: "404", en: "404" },
          { fr: "301", en: "301" },
        ],
        correctAnswer: { fr: "403", en: "403" },
        hint: { fr: "Ce n’est pas le même cas que « pas connecté ».", en: "It is not the same case as “not logged in.”" },
        explanation: {
          fr: "403 signifie que l’identité est connue mais l’action est refusée.",
          en: "403 means identity is known but the action is denied.",
        },
      },
      {
        id: "web-http-https-q101",
        type: "multiple-choice",
        question: { fr: "Pourquoi éviter les effets de bord sur GET ?", en: "Why avoid side effects on GET?" },
        options: [
          { fr: "Parce que les caches et préchargements peuvent rejouer GET", en: "Because caches and prefetch may replay GET" },
          { fr: "Parce que GET est interdit en HTTPS", en: "Because GET is forbidden on HTTPS" },
          { fr: "Parce que GET ne peut pas avoir d’URL", en: "Because GET cannot have a URL" },
          { fr: "Parce que GET remplace toujours DELETE", en: "Because GET always replaces DELETE" },
        ],
        correctAnswer: { fr: "Parce que les caches et préchargements peuvent rejouer GET", en: "Because caches and prefetch may replay GET" },
        hint: { fr: "Pense robots, favoris et CDN.", en: "Think crawlers, bookmarks, and CDNs." },
        explanation: {
          fr: "Un GET rejoué ne doit pas créer ou supprimer des données.",
          en: "A replayed GET must not create or delete data.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes HTTP/HTTPS avec des exemples de requêtes réelles. Insiste sur méthodes, codes et TLS sans jargon inutile. Fais justifier chaque code et chaque méthode avec un scénario concret.",
        en: "You teach HTTP/HTTPS with real request examples. Emphasize methods, status codes, and TLS without unnecessary jargon. Have them justify each status code and method with a concrete scenario.",
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
      fr: "Découpe une URL, suis la résolution DNS, puis la connexion et la requête HTTP jusqu’à la réponse. Tu comprendras caches DNS, query strings et erreurs fréquentes qui bloquent un site avant même le HTML.",
      en: "Break down a URL, follow DNS resolution, then the connection and HTTP request through the response. You will understand DNS caches, query strings, and common errors that block a site before HTML even arrives.",
    },
    icon: "search",
    estimatedMinutes: 24,
    xpReward: 30,
    goals: [
      {
        description: { fr: "Décomposer une URL en parties utiles", en: "Break a URL into useful parts" },
        xpReward: 8,
      },
      {
        description: { fr: "Expliquer le rôle du DNS", en: "Explain the role of DNS" },
        xpReward: 8,
      },
      {
        description: { fr: "Ordonner les étapes d’un chargement de page", en: "Order the steps of a page load" },
        xpReward: 9,
      },
      {
        description: { fr: "Expliquer le chemin d’une URL jusqu’à la première réponse HTTP", en: "Explain the path from a URL to the first HTTP response" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-url-dns-request-s1",
        title: { fr: "Anatomie d’une URL", en: "Anatomy of a URL" },
        body: {
          fr: "Une URL typique : schéma (https), hôte (www.example.com), chemin (/blog), requête (?id=3), fragment (#top). Chaque partie oriente client et serveur. Schéma, hôte, port, chemin et query forment un contrat lisible. Mal encoder un caractère ou oublier le port casse des liens autrement « corrects ». Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "A typical URL: scheme (https), host (www.example.com), path (/blog), query (?id=3), fragment (#top). Each part guides client and server. Scheme, host, port, path, and query form a readable contract. Bad encoding or a missing port breaks links that otherwise look fine. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Anatomie d’une URL » change concrètement dans ton debug ou ton code.", en: "Remember what “Anatomy of a URL” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à URL, DNS et cycle de requête que cette idée explique.", en: "Name a real symptom related to URL, DNS, and request lifecycle that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Le fragment (#…) n’est pas envoyé au serveur : il reste côté navigateur.", en: "The fragment (#…) is not sent to the server: it stays in the browser." },
        calloutKind: "key",
        codeExample: {
          language: "text",
          code: "https://www.example.com:443/shop/item?id=42#reviews",
          caption: { fr: "schéma://hôte:port/chemin?query#fragment", en: "scheme://host:port/path?query#fragment" },
        },
        analogy: { fr: "Pense à « Anatomie d’une URL » comme un panneau indicateur sur la route de URL, DNS et cycle de requête : il oriente avant d’accélérer.", en: "Think of “Anatomy of a URL” as a road sign on the path of URL, DNS, and request lifecycle: it orients you before you speed up." },
      },
      {
        id: "web-url-dns-request-s2",
        title: { fr: "DNS : l’annuaire", en: "DNS: the phone book" },
        body: {
          fr: "Les humains préfèrent des noms ; les machines utilisent des IP. Le DNS traduit example.com en adresse(s) IP via une chaîne de résolveurs et de serveurs autoritaires. Le DNS traduit un nom en adresse IP via résolveurs et enregistrements. Sans cette étape, le navigateur ne sait pas où ouvrir la connexion. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Humans prefer names; machines use IPs. DNS translates example.com into IP address(es) through a chain of resolvers and authoritative servers. DNS translates a name into an IP via resolvers and records. Without that step, the browser does not know where to open the connection. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « DNS : l’annuaire » change concrètement dans ton debug ou ton code.", en: "Remember what “DNS: the phone book” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à URL, DNS et cycle de requête que cette idée explique.", en: "Name a real symptom related to URL, DNS, and request lifecycle that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "dns-lookup",
        callout: { fr: "Astuce : après cette section, explique « DNS : l’annuaire » à voix haute en 20 secondes.", en: "Tip: after this section, explain “DNS: the phone book” out loud in 20 seconds." },
        calloutKind: "tip",
        analogy: { fr: "DNS est l’annuaire : tu cherches « Pizza Mario » et tu obtiens le numéro (l’IP).", en: "DNS is the phone book: you look up “Mario’s Pizza” and get the number (the IP)." },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « DNS : l’annuaire » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “DNS: the phone book” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à URL, DNS et cycle de requête, même simple.", en: "Start from an example related to URL, DNS, and request lifecycle, even a simple one." },
        },
      },
      {
        id: "web-url-dns-request-s3",
        title: { fr: "Cache DNS", en: "DNS caching" },
        body: {
          fr: "Navigateur, OS et FAI mettent en cache les réponses DNS (TTL). Un changement d’IP peut mettre du temps à se propager , d’où les « ça marche chez moi ». Le cache DNS accélère les visites suivantes mais peut servir une ancienne IP après migration. Vider le cache ou baisser le TTL aide pendant un basculement. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Browser, OS, and ISP cache DNS answers (TTL). An IP change can take time to propagate , hence “works on my machine.” DNS cache speeds later visits but may serve an old IP after a migration. Flushing cache or lowering TTL helps during a cutover. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Cache DNS » change concrètement dans ton debug ou ton code.", en: "Remember what “DNS caching” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à URL, DNS et cycle de requête que cette idée explique.", en: "Name a real symptom related to URL, DNS, and request lifecycle that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Vider le cache DNS peut aider après une migration de domaine.", en: "Flushing DNS cache can help after a domain migration." },
        calloutKind: "tip",
        analogy: { fr: "Pense à « Cache DNS » comme un panneau indicateur sur la route de URL, DNS et cycle de requête : il oriente avant d’accélérer.", en: "Think of “DNS caching” as a road sign on the path of URL, DNS, and request lifecycle: it orients you before you speed up." },
      },
      {
        id: "web-url-dns-request-s4",
        title: { fr: "Connexion puis HTTP", en: "Connect, then HTTP" },
        body: {
          fr: "Après résolution : handshake TCP, éventuellement TLS, puis requête HTTP. Ensuite le HTML référence CSS/JS/images → nouvelles requêtes (souvent en parallèle). Après DNS viennent TCP puis souvent TLS, ensuite seulement HTTP. Un timeout peut venir de la route réseau, pas du code de ton app. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "After resolution: TCP handshake, maybe TLS, then HTTP request. Then HTML references CSS/JS/images → more requests (often in parallel). After DNS come TCP and often TLS, then only HTTP. A timeout may come from the network path, not from your app code. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "1. DNS", en: "1. DNS" },
          { fr: "2. TCP (+ TLS)", en: "2. TCP (+ TLS)" },
          { fr: "3. Requête document", en: "3. Document request" },
          { fr: "4. Sous-ressources", en: "4. Sub-resources" },
        ],
        diagram: "request-lifecycle",
        callout: { fr: "Erreur fréquente : confondre « Connexion puis HTTP » avec un détail cosmétique.", en: "Common mistake: treating “Connect, then HTTP” as a cosmetic detail." },
        calloutKind: "mistake",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Connexion puis HTTP » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Connect, then HTTP” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à URL, DNS et cycle de requête, même simple.", en: "Start from an example related to URL, DNS, and request lifecycle, even a simple one." },
        },
      },
      {
        id: "web-url-dns-request-s5",
        title: { fr: "Erreurs fréquentes", en: "Common failures" },
        body: {
          fr: "DNS NXDOMAIN, timeout réseau, certificat invalide, 404 applicatif : chaque étape a ses symptômes. Lire le message d’erreur évite de « tout réinstaller ». NXDOMAIN, connexion refusée et certificat invalide pointent vers des étapes différentes. Nommer l’étape évite de patcher le frontend pour un problème DNS. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "DNS NXDOMAIN, network timeout, invalid certificate, app 404: each step has symptoms. Reading the error avoids “reinstall everything.” NXDOMAIN, connection refused, and invalid certificate point to different steps. Naming the step avoids patching frontend for a DNS problem. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Erreurs fréquentes » change concrètement dans ton debug ou ton code.", en: "Remember what “Common failures” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à URL, DNS et cycle de requête que cette idée explique.", en: "Name a real symptom related to URL, DNS, and request lifecycle that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Si le DNS échoue, aucune requête HTTP n’atteint le serveur d’origine.", en: "If DNS fails, no HTTP request reaches the origin server." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Erreurs fréquentes » comme un panneau indicateur sur la route de URL, DNS et cycle de requête : il oriente avant d’accélérer.", en: "Think of “Common failures” as a road sign on the path of URL, DNS, and request lifecycle: it orients you before you speed up." },
      },
      {
        id: "web-url-dns-request-s6",
        title: { fr: "Query string", en: "Query string" },
        body: {
          fr: "Les paramètres ?page=2&sort=asc sont lus par le serveur (ou le frontend). Ils ne sont pas secrets : évite d’y mettre des tokens sensibles. La query string transporte des paramètres visibles et parfois sensibles. Ne mets jamais de secrets dans l’URL : historiques et logs les capturent. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Parameters like ?page=2&sort=asc are read by the server (or frontend). They are not secret: avoid putting sensitive tokens there. The query string carries visible and sometimes sensitive parameters. Never put secrets in the URL: histories and logs capture them. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Query string » change concrètement dans ton debug ou ton code.", en: "Remember what “Query string” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à URL, DNS et cycle de requête que cette idée explique.", en: "Name a real symptom related to URL, DNS, and request lifecycle that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Mettre un mot de passe dans l’URL est une erreur grave (logs, historique).", en: "Putting a password in the URL is a serious mistake (logs, history)." },
        calloutKind: "mistake",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Query string » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Query string” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à URL, DNS et cycle de requête, même simple.", en: "Start from an example related to URL, DNS, and request lifecycle, even a simple one." },
        },
      },
      {
        id: "web-url-dns-request-s7",
        title: { fr: "À toi de jouer", en: "Your turn" },
        body: {
          fr: "URL : https://shop.example.com/cart?item=9#pay S’entraîner à raconter le cycle à voix haute fixe le modèle mental. Tu seras plus à l’aise pour lire traceroute, dig ou les DevTools Network. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "URL: https://shop.example.com/cart?item=9#pay Practicing the cycle out loud locks the mental model. You will be more comfortable reading traceroute, dig, or DevTools Network. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « À toi de jouer » change concrètement dans ton debug ou ton code.", en: "Remember what “Your turn” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à URL, DNS et cycle de requête que cette idée explique.", en: "Name a real symptom related to URL, DNS, and request lifecycle that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « À toi de jouer » crée des bugs difficiles à classer.", en: "Warning: neglecting “Your turn” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « À toi de jouer » comme un panneau indicateur sur la route de URL, DNS et cycle de requête : il oriente avant d’accélérer.", en: "Think of “Your turn” as a road sign on the path of URL, DNS, and request lifecycle: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Liste schéma, hôte, chemin, query et fragment.", en: "List scheme, host, path, query, and fragment." },
          hint: { fr: "Le #pay ne part pas au serveur.", en: "#pay does not go to the server." },
        },
      },
      {
        id: "web-url-dns-request-s8",
        title: { fr: "CDN et noms multiples", en: "CDNs and multiple names" },
        body: {
          fr: "Souvent www et apex pointent vers un CDN qui proxifie l’origine. Le DNS peut renvoyer plusieurs IP (géolocalisation, résilience). CDN et noms multiples (www, apex, API) ajoutent des CNAME et des caches edge. Comprendre qui répond explique des comportements « différents selon la région ». Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Often www and apex point to a CDN that proxies the origin. DNS may return multiple IPs (geo, resilience). CDNs and multiple names (www, apex, API) add CNAMEs and edge caches. Understanding who answers explains different-by-region behavior. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « CDN et noms multiples » change concrètement dans ton debug ou ton code.", en: "Remember what “CDNs and multiple names” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à URL, DNS et cycle de requête que cette idée explique.", en: "Name a real symptom related to URL, DNS, and request lifecycle that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "client-server-web",
        callout: { fr: "Erreur fréquente : confondre « CDN et noms multiples » avec un détail cosmétique.", en: "Common mistake: treating “CDNs and multiple names” as a cosmetic detail." },
        calloutKind: "mistake",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « CDN et noms multiples » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “CDNs and multiple names” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à URL, DNS et cycle de requête, même simple.", en: "Start from an example related to URL, DNS, and request lifecycle, even a simple one." },
        },
      },
      {
        id: "web-url-dns-request-extra1",
        title: { fr: "Outils minimaux de diagnostic", en: "Minimal diagnostic tools" },
        body: {
          fr: "Apprends trois réflexes : résoudre le nom (dig/nslookup), tester la connectivité (ping ou route), inspecter HTTP dans le navigateur. Tu n’as pas besoin de tout maîtriser d’un coup, mais cet ordre évite de soupçonner ton React alors que le DNS pointe encore vers l’ancien serveur. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Learn three reflexes: resolve the name (dig/nslookup), test connectivity (ping or route), inspect HTTP in the browser. You do not need to master everything at once, but this order avoids blaming React while DNS still points at the old server. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Outils minimaux de diagnostic » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Minimal diagnostic tools” out loud in 20 seconds." },
        calloutKind: "tip",
        analogy: { fr: "Comme vérifier adresse, route, puis sonnette.", en: "Like checking address, route, then doorbell." },
      },
      {
        id: "web-url-dns-request-extra2",
        title: { fr: "Secrets et URLs", en: "Secrets and URLs" },
        body: {
          fr: "Tokens dans la query, liens de reset trop permissifs, ou IDs prévisibles exposés créent des fuites. Préfère le corps POST ou des en-têtes pour les secrets, et expire les liens sensibles. L’URL est pratique, pas un coffre-fort. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Tokens in the query, overly open reset links, or predictable exposed IDs create leaks. Prefer POST bodies or headers for secrets, and expire sensitive links. The URL is convenient, not a vault. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Attention : négliger « Secrets et URLs » crée des bugs difficiles à classer.", en: "Warning: neglecting “Secrets and URLs” creates bugs that are hard to classify." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Secrets et URLs » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Secrets and URLs” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à URL, DNS et cycle de requête, même simple.", en: "Start from an example related to URL, DNS, and request lifecycle, even a simple one." },
        },
      },
      {
        id: "web-url-dns-request-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "Une URL adresse une ressource ; le DNS trouve l’IP ; TCP/TLS ouvre le canal ; HTTP échange le message. Caches DNS, query strings et CDN influencent le comportement réel. Diagnostiquer dans cet ordre évite de corriger la mauvaise couche. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "A URL addresses a resource; DNS finds the IP; TCP/TLS opens the channel; HTTP exchanges the message. DNS caches, query strings, and CDNs shape real behavior. Diagnosing in that order avoids fixing the wrong layer. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens le cœur de URL, DNS et cycle de requête.", en: "Remember the core of URL, DNS, and the request cycle." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de URL, DNS et cycle de requête est ta boussole pour la suite.", en: "The summary of URL, DNS, and the request cycle is your compass for what comes next." },
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
      {
        term: { fr: "TTL", en: "TTL" },
        definition: {
          fr: "Durée de vie d’un enregistrement DNS en cache.",
          en: "Lifetime of a cached DNS record.",
        },
      },
      {
        term: { fr: "Query string", en: "Query string" },
        definition: {
          fr: "Partie d’URL après ? qui porte des paramètres.",
          en: "URL part after ? that carries parameters.",
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
          { fr: "Propagation plus rapide des changements", en: "Faster propagation of changes" },
          { fr: "Plus de HTML", en: "More HTML" },
          { fr: "Moins de HTTPS", en: "Less HTTPS" },
          { fr: "L’absence de ports", en: "No ports" },
        ],
        correctAnswer: { fr: "Propagation plus rapide des changements", en: "Faster propagation of changes" },
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
          { fr: "URL loguée / historisée facilement", en: "URLs are easily logged / historied" },
          { fr: "DNS refuse les query strings", en: "DNS rejects query strings" },
          { fr: "HTTPS ne chiffre jamais les URLs", en: "HTTPS never encrypts URLs" },
          { fr: "Les navigateurs bloquent ?", en: "Browsers block ?" },
        ],
        correctAnswer: { fr: "URL loguée / historisée facilement", en: "URLs are easily logged / historied" },
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
        correctAnswer: { fr: "Le nom de domaine n’existe pas", en: "The domain name does not exist" },
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
        correctAnswer: { fr: "CSS, JS et images référencés", en: "Referenced CSS, JS, and images" },
        hint: { fr: "Sous-ressources du document.", en: "Document sub-resources." },
        explanation: {
          fr: "Le document initial découvre d’autres URLs à récupérer pour rendre la page.",
          en: "The initial document discovers more URLs to fetch to render the page.",
        },
      },
      {
        id: "web-url-dns-request-q100",
        type: "multiple-choice",
        question: { fr: "Que fait principalement le DNS ?", en: "What does DNS mainly do?" },
        options: [
          { fr: "Traduire un nom de domaine en adresse IP", en: "Translate a domain name into an IP address" },
          { fr: "Chiffrer le disque dur", en: "Encrypt the hard drive" },
          { fr: "Compiler le CSS", en: "Compile CSS" },
          { fr: "Remplacer HTTPS", en: "Replace HTTPS" },
        ],
        correctAnswer: { fr: "Traduire un nom de domaine en adresse IP", en: "Translate a domain name into an IP address" },
        hint: { fr: "Pense annuaire téléphonique.", en: "Think phone book." },
        explanation: {
          fr: "Sans résolution de nom, la connexion ne sait pas quelle IP joindre.",
          en: "Without name resolution, the connection does not know which IP to reach.",
        },
      },
      {
        id: "web-url-dns-request-q101",
        type: "multiple-choice",
        question: { fr: "Où ne faut-il pas mettre un secret ?", en: "Where should you not put a secret?" },
        options: [
          { fr: "Dans la query string d’une URL", en: "In a URL query string" },
          { fr: "Dans un coffre serveur", en: "In a server vault" },
          { fr: "Dans une variable d’environnement serveur", en: "In a server environment variable" },
          { fr: "Dans un secret manager", en: "In a secret manager" },
        ],
        correctAnswer: { fr: "Dans la query string d’une URL", en: "In a URL query string" },
        hint: { fr: "Historiques et logs voient les URLs.", en: "Histories and logs see URLs." },
        explanation: {
          fr: "Les URLs fuient facilement ; les secrets doivent rester hors query.",
          en: "URLs leak easily; secrets must stay out of the query.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu guides l’élève dans le cycle URL → DNS → TCP/TLS → HTTP. Utilise des schémas mentaux clairs et des cas d’erreur réels. Fais raconter le cycle URL→DNS→TCP/TLS→HTTP sans sauter d’étape.",
        en: "You guide the learner through URL → DNS → TCP/TLS → HTTP. Use clear mental models and real failure cases. Have them narrate the URL→DNS→TCP/TLS→HTTP cycle without skipping steps.",
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
      fr: "Apprends à structurer une page avec un HTML clair : squelette, titres, liens, listes, formulaires et balises sémantiques. Tu construiras des pages lisibles pour les humains, les navigateurs et les technologies d’assistance.",
      en: "Learn to structure a page with clear HTML: skeleton, headings, links, lists, forms, and semantic tags. You will build pages readable for humans, browsers, and assistive technologies.",
    },
    icon: "book",
    estimatedMinutes: 22,
    xpReward: 28,
    goals: [
      {
        description: { fr: "Structurer une page avec html, head et body", en: "Structure a page with html, head, and body" },
        xpReward: 8,
      },
      {
        description: { fr: "Utiliser titres, listes, liens et images correctement", en: "Use headings, lists, links, and images correctly" },
        xpReward: 8,
      },
      {
        description: { fr: "Comprendre le HTML sémantique et les formulaires", en: "Understand semantic HTML and forms" },
        xpReward: 7,
      },
      {
        description: { fr: "Choisir des balises sémantiques adaptées à un contenu simple", en: "Choose semantic tags suited to simple content" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-html-basics-s1",
        title: { fr: "HTML = structure", en: "HTML = structure" },
        body: {
          fr: "HTML décrit le contenu et sa structure, pas l'apparence. Le navigateur construit un arbre DOM à partir des balises. CSS stylise ; JavaScript anime et interagit. HTML décrit la structure, pas le style. Séparer contenu et présentation rend les pages plus maintenables et accessibles. Un bon markup est déjà une qualité produit. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "HTML describes content and structure, not appearance. The browser builds a DOM tree from tags. CSS styles; JavaScript animates and interacts. HTML describes structure, not style. Separating content and presentation makes pages more maintainable and accessible. Good markup is already a product quality. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « HTML = structure » change concrètement dans ton debug ou ton code.", en: "Remember what “HTML = structure” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases du HTML que cette idée explique.", en: "Name a real symptom related to HTML basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "dom-tree",
        callout: { fr: "Si tu stylises avec des div partout, tu perds le sens pour lecteurs d'écran et SEO.", en: "If you style with div everywhere, you lose meaning for screen readers and SEO." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « HTML = structure » comme un panneau indicateur sur la route de Bases du HTML : il oriente avant d’accélérer.", en: "Think of “HTML = structure” as a road sign on the path of HTML basics: it orients you before you speed up." },
      },
      {
        id: "web-html-basics-s2",
        diagram: "html-skeleton",
        title: { fr: "Squelette d'une page", en: "Page skeleton" },
        body: {
          fr: "Toute page commence par <!DOCTYPE html>, puis <html>, <head> (métadonnées, titre, liens CSS) et <body> (contenu visible). html, head et body organisent métadonnées et contenu visible. title, meta charset et viewport évitent des surprises sur mobile et dans les onglets. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Every page starts with <!DOCTYPE html>, then <html>, <head> (metadata, title, CSS links), and <body> (visible content). html, head, and body organize metadata and visible content. title, meta charset, and viewport prevent surprises on mobile and in tabs. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Squelette d'une page » change concrètement dans ton debug ou ton code.", en: "Remember what “Page skeleton” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases du HTML que cette idée explique.", en: "Name a real symptom related to HTML basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Squelette d'une page » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Page skeleton” out loud in 20 seconds." },
        calloutKind: "tip",
        codeExample: {
          language: "html",
          code: "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>Ma page</title>\n  </head>\n  <body>\n    <h1>Bonjour</h1>\n  </body>\n</html>",
          caption: { fr: "Squelette minimal valide.", en: "Minimal valid skeleton." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Squelette d'une page » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Page skeleton” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases du HTML, même simple.", en: "Start from an example related to HTML basics, even a simple one." },
        },
      },
      {
        id: "web-html-basics-s3",
        title: { fr: "Titres et paragraphes", en: "Headings and paragraphs" },
        body: {
          fr: "h1,h6 créent une hiérarchie. Un seul h1 principal par page est une bonne pratique. Les p portent le texte courant. Une hiérarchie de titres honnête aide navigation et SEO. N’utilise pas h1 seulement pour « faire gros » : réserve-le au titre principal de la page. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "h1,h6 create hierarchy. One main h1 per page is good practice. p holds body text. An honest heading hierarchy helps navigation and SEO. Do not use h1 only to “look big”: reserve it for the page’s main title. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "h1 : sujet principal de la page", en: "h1: main page topic" },
          { fr: "h2/h3 : sections et sous-sections", en: "h2/h3: sections and subsections" },
          { fr: "Ne saute pas de niveaux sans raison", en: "Don't skip levels without reason" },
        ],
        callout: { fr: "Utiliser h1 juste pour « faire gros » est une erreur : la taille se règle en CSS.", en: "Using h1 just to make it big is a mistake: size is controlled in CSS." },
        calloutKind: "mistake",
        analogy: { fr: "Pense à « Titres et paragraphes » comme un panneau indicateur sur la route de Bases du HTML : il oriente avant d’accélérer.", en: "Think of “Headings and paragraphs” as a road sign on the path of HTML basics: it orients you before you speed up." },
      },
      {
        id: "web-html-basics-s4",
        title: { fr: "Liens, images, listes", en: "Links, images, lists" },
        body: {
          fr: "a href pour naviguer, img src/alt pour les images, ul/ol/li pour les listes. L'attribut alt décrit l'image pour l'accessibilité. Liens, images avec alt et listes structurent l’information. Un alt vide pour une image décorative est parfois correct ; un alt manquant sur une image informative ne l’est pas. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "a href to navigate, img src/alt for images, ul/ol/li for lists. The alt attribute describes the image for accessibility. Links, images with alt, and lists structure information. An empty alt for a decorative image can be fine; a missing alt on an informative image is not. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Liens, images, listes » change concrètement dans ton debug ou ton code.", en: "Remember what “Links, images, lists” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases du HTML que cette idée explique.", en: "Name a real symptom related to HTML basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Erreur fréquente : confondre « Liens, images, listes » avec un détail cosmétique.", en: "Common mistake: treating “Links, images, lists” as a cosmetic detail." },
        calloutKind: "mistake",
        analogy: { fr: "HTML est le plan d'architecte : murs et pièces avant peinture (CSS) et électricité (JS).", en: "HTML is a building blueprint: walls and rooms before paint (CSS) and wiring (JS)." },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Liens, images, listes » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Links, images, lists” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases du HTML, même simple.", en: "Start from an example related to HTML basics, even a simple one." },
        },
      },
      {
        id: "web-html-basics-s5",
        title: { fr: "HTML sémantique", en: "Semantic HTML" },
        body: {
          fr: "header, nav, main, article, section, footer donnent du sens. Ils aident le SEO, l'accessibilité et la maintenance. header, main, nav et footer clarifient les régions. Les lecteurs d’écran s’appuient sur cette sémantique pour sauter aux zones utiles. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "header, nav, main, article, section, footer add meaning. They help SEO, accessibility, and maintenance. header, main, nav, and footer clarify regions. Screen readers rely on that semantics to jump to useful areas. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "main : contenu principal unique", en: "main: unique primary content" },
          { fr: "nav : menus de navigation", en: "nav: navigation menus" },
          { fr: "article : contenu autonome", en: "article: self-contained content" },
        ],
        callout: { fr: "Préfère button pour une action et a pour une navigation.", en: "Prefer button for an action and a for navigation." },
        calloutKind: "tip",
        analogy: { fr: "Pense à « HTML sémantique » comme un panneau indicateur sur la route de Bases du HTML : il oriente avant d’accélérer.", en: "Think of “Semantic HTML” as a road sign on the path of HTML basics: it orients you before you speed up." },
      },
      {
        id: "web-html-basics-s6",
        title: { fr: "Formulaires", en: "Forms" },
        body: {
          fr: "form, input, label, textarea, select collectent des données. Un label lié (for/id) est indispensable pour l'accessibilité. Les formulaires relient label et input correctement. Sans label, l’accessibilité et le clic sur le texte souffrent. name et type guident l’envoi des données. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "form, input, label, textarea, select collect data. A linked label (for/id) is essential for accessibility. Forms connect label and input correctly. Without a label, accessibility and text-click suffer. name and type guide how data is submitted. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Formulaires » change concrètement dans ton debug ou ton code.", en: "Remember what “Forms” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases du HTML que cette idée explique.", en: "Name a real symptom related to HTML basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Formulaires » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Forms” out loud in 20 seconds." },
        calloutKind: "tip",
        codeExample: {
          language: "html",
          code: "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\" name=\"email\" required />",
          caption: { fr: "Label et champ correctement liés.", en: "Correctly linked label and field." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Formulaires » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Forms” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases du HTML, même simple.", en: "Start from an example related to HTML basics, even a simple one." },
        },
      },
      {
        id: "web-html-basics-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Imagine une page article de blog : titre, auteur, contenu, tags, lien retour. Entraîne-toi à décrire une maquette en balises avant d’écrire le CSS. Ce réflexe évite les div soup et améliore la qualité dès le premier jet. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Imagine a blog post page: title, author, content, tags, back link. Practice describing a mockup in tags before writing CSS. That habit avoids div soup and improves quality from the first draft. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases du HTML que cette idée explique.", en: "Name a real symptom related to HTML basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de Bases du HTML : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of HTML basics: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Quelles balises sémantiques choisirais-tu pour chaque zone ?", en: "Which semantic tags would you choose for each area?" },
          hint: { fr: "Pense article, header, footer, nav, ul.", en: "Think article, header, footer, nav, ul." },
        },
      },
      {
        id: "web-html-basics-extra1",
        title: { fr: "Accessibilité dès le HTML", en: "Accessibility from HTML first" },
        body: {
          fr: "Avant les frameworks, un HTML soigné porte déjà l’accessibilité : labels, titres ordonnés, alt pertinents, boutons réels plutôt que div cliquables. Tu réduis la dette et tu inclus plus d’utilisateurs sans bibliothèque magique. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Before frameworks, careful HTML already carries accessibility: labels, ordered headings, useful alt text, real buttons instead of clickable divs. You reduce debt and include more users without a magic library. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "À retenir : « Accessibilité dès le HTML » conditionne souvent la suite de Bases du HTML.", en: "Key takeaway: “Accessibility from HTML first” often shapes what follows in HTML basics." },
        calloutKind: "key",
        analogy: { fr: "Le HTML est le plan du bâtiment ; le CSS est la peinture.", en: "HTML is the building plan; CSS is the paint." },
      },
      {
        id: "web-html-basics-extra2",
        title: { fr: "Éviter la soupe de div", en: "Avoiding div soup" },
        body: {
          fr: "Quand tout est div, la page perd son sens pour SEO et accessibilité. Demande-toi quelle balise exprime le rôle : article, section, button, a. Moins de div génériques, plus d’intention claire dans le code. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "When everything is a div, the page loses meaning for SEO and accessibility. Ask which tag expresses the role: article, section, button, a. Fewer generic divs, more clear intent in the code. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Erreur fréquente : confondre « Éviter la soupe de div » avec un détail cosmétique.", en: "Common mistake: treating “Avoiding div soup” as a cosmetic detail." },
        calloutKind: "mistake",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Éviter la soupe de div » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Avoiding div soup” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases du HTML, même simple.", en: "Start from an example related to HTML basics, even a simple one." },
        },
      },
      {
        id: "web-html-basics-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "HTML structure le contenu avec un squelette stable, des titres hiérarchisés, des médias décrits et des formulaires labellisés. La sémantique améliore accessibilité, SEO et maintenance. Maîtriser ces bases rend CSS et JavaScript plus simples ensuite. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "HTML structures content with a stable skeleton, hierarchical headings, described media, and labeled forms. Semantics improve accessibility, SEO, and maintenance. Mastering these basics makes CSS and JavaScript easier next. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de les bases HTML.", en: "Remember the core of HTML basics." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de les bases HTML est ta boussole pour la suite.", en: "The summary of HTML basics is your compass for what comes next." },
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
      {
        term: { fr: "Sémantique", en: "Semantics" },
        definition: {
          fr: "Choisir des balises qui expriment le sens du contenu.",
          en: "Choosing tags that express content meaning.",
        },
      },
      {
        term: { fr: "Attribut alt", en: "alt attribute" },
        definition: {
          fr: "Texte alternatif décrivant une image utile.",
          en: "Alternative text describing a useful image.",
        },
      },
    ],
    activities: [
      {
        id: "web-html-basics-q1",
        type: "multiple-choice",
        question: { fr: "À quoi sert principalement le HTML ?", en: "What is HTML mainly for?" },
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
        question: { fr: "Où place-t-on le title ?", en: "Where do you put title?" },
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
        question: { fr: "Pourquoi l'attribut alt sur une image ?", en: "Why the alt attribute on an image?" },
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
        question: { fr: "Quelle balise pour le contenu principal unique ?", en: "Which tag for unique main content?" },
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
        question: { fr: "Pour une action (pas une navigation), préfère…", en: "For an action (not navigation), prefer…" },
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
        question: { fr: "label for=\"email\" doit correspondre à…", en: "label for=\"email\" should match…" },
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
      {
        id: "web-html-basics-q100",
        type: "multiple-choice",
        question: { fr: "Quel est le rôle principal du HTML ?", en: "What is HTML’s main role?" },
        options: [
          { fr: "Structurer le contenu de la page", en: "Structure the page content" },
          { fr: "Remplacer complètement le DNS", en: "Fully replace DNS" },
          { fr: "Chiffrer la base de données", en: "Encrypt the database" },
          { fr: "Compiler le système d’exploitation", en: "Compile the operating system" },
        ],
        correctAnswer: { fr: "Structurer le contenu de la page", en: "Structure the page content" },
        hint: { fr: "Pense structure, pas style.", en: "Think structure, not style." },
        explanation: {
          fr: "HTML organise le contenu ; CSS et JS s’occupent surtout du style et du comportement.",
          en: "HTML organizes content; CSS and JS mostly handle style and behavior.",
        },
      },
      {
        id: "web-html-basics-q101",
        type: "multiple-choice",
        question: { fr: "Pourquoi associer un label à un input ?", en: "Why associate a label with an input?" },
        options: [
          { fr: "Pour l’accessibilité et une meilleure zone de clic", en: "For accessibility and a better click target" },
          { fr: "Pour accélérer le GPU", en: "To speed up the GPU" },
          { fr: "Pour remplacer HTTPS", en: "To replace HTTPS" },
          { fr: "Pour supprimer le CSS", en: "To remove CSS" },
        ],
        correctAnswer: { fr: "Pour l’accessibilité et une meilleure zone de clic", en: "For accessibility and a better click target" },
        hint: { fr: "Lecteurs d’écran et UX de formulaire.", en: "Screen readers and form UX." },
        explanation: {
          fr: "Le label nomme le champ pour tous les utilisateurs.",
          en: "The label names the field for all users.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes les bases HTML : structure, sémantique, formulaires et accessibilité. Donne des exemples de balises concrets. Insiste sur la sémantique et les labels avant toute discussion de framework.",
        en: "You teach HTML basics: structure, semantics, forms, and accessibility. Give concrete tag examples. Insist on semantics and labels before any framework discussion.",
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
      fr: "Découvre comment le CSS présente le HTML : sélecteurs, cascade, box model, Flexbox et bases responsive. Tu apprendras à contrôler mise en page et apparence sans casser la structure.",
      en: "Discover how CSS presents HTML: selectors, cascade, box model, Flexbox, and responsive basics. You will learn to control layout and appearance without breaking structure.",
    },
    icon: "layers",
    estimatedMinutes: 23,
    xpReward: 29,
    goals: [
      {
        description: { fr: "Appliquer styles via sélecteurs et cascade", en: "Apply styles via selectors and cascade" },
        xpReward: 8,
      },
      {
        description: { fr: "Expliquer le box model", en: "Explain the box model" },
        xpReward: 8,
      },
      {
        description: { fr: "Utiliser flexbox et media queries de base", en: "Use basic flexbox and media queries" },
        xpReward: 8,
      },
      {
        description: { fr: "Expliquer cascade, spécificité et box model sur un exemple simple", en: "Explain cascade, specificity, and the box model on a simple example" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-css-basics-s1",
        diagram: "css-box-model",
        title: { fr: "CSS = présentation", en: "CSS = presentation" },
        body: {
          fr: "Le CSS contrôle couleurs, typographie, espacements et mise en page. Il se lie via link ou parfois style inline (à limiter). CSS sépare la présentation du contenu. Tu peux restyler une page sans réécrire tout le HTML, ce qui accélère itérations design et thèmes. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "CSS controls colors, typography, spacing, and layout. It links via link or sometimes inline style (limit that). CSS separates presentation from content. You can restyle a page without rewriting all the HTML, which speeds design iterations and themes. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « CSS = présentation » change concrètement dans ton debug ou ton code.", en: "Remember what “CSS = presentation” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases du CSS que cette idée explique.", en: "Name a real symptom related to CSS basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Sépare structure (HTML) et style (CSS) pour un code maintenable.", en: "Separate structure (HTML) and style (CSS) for maintainable code." },
        calloutKind: "key",
        analogy: { fr: "Pense à « CSS = présentation » comme un panneau indicateur sur la route de Bases du CSS : il oriente avant d’accélérer.", en: "Think of “CSS = presentation” as a road sign on the path of CSS basics: it orients you before you speed up." },
      },
      {
        id: "web-css-basics-s2",
        title: { fr: "Sélecteurs", en: "Selectors" },
        body: {
          fr: "Tu cibles des éléments par balise, .classe, #id ou combinaisons. La spécificité décide quelle règle gagne. Les sélecteurs ciblent éléments, classes et états. Préfère des classes intentionnelles plutôt qu’une guerre de spécificité avec trop d’IDs. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "You target elements by tag, .class, #id, or combinations. Specificity decides which rule wins. Selectors target elements, classes, and states. Prefer intentional classes over a specificity war with too many IDs. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "balise : faible spécificité", en: "tag: low specificity" },
          { fr: ".classe : usage quotidien recommandé", en: ".class: recommended daily use" },
          { fr: "#id : fort, avec parcimonie", en: "#id: strong, use sparingly" },
        ],
        callout: { fr: "Astuce : après cette section, explique « Sélecteurs » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Selectors” out loud in 20 seconds." },
        calloutKind: "tip",
        codeExample: {
          language: "css",
          code: ".card {\n  padding: 16px;\n  border-radius: 12px;\n}\n.card h2 {\n  color: #2563eb;\n}",
          caption: { fr: "Classe + descendant.", en: "Class + descendant." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Sélecteurs » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Selectors” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases du CSS, même simple.", en: "Start from an example related to CSS basics, even a simple one." },
        },
      },
      {
        id: "web-css-basics-s3",
        title: { fr: "Cascade et héritage", en: "Cascade and inheritance" },
        body: {
          fr: "Origine, spécificité et ordre déterminent le gagnant. color et font s'héritent ; margin et padding non. Cascade et héritage expliquent pourquoi une règle « gagne ». Comprendre la spécificité te sort des !important paniqués. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Origin, specificity, and order decide the winner. color and font inherit; margin and padding do not. Cascade and inheritance explain why a rule “wins.” Understanding specificity gets you out of panicked !important usage. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Cascade et héritage » change concrètement dans ton debug ou ton code.", en: "Remember what “Cascade and inheritance” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases du CSS que cette idée explique.", en: "Name a real symptom related to CSS basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Abuser de !important masque des problèmes de spécificité.", en: "Overusing !important hides specificity problems." },
        calloutKind: "mistake",
        analogy: { fr: "Pense à « Cascade et héritage » comme un panneau indicateur sur la route de Bases du CSS : il oriente avant d’accélérer.", en: "Think of “Cascade and inheritance” as a road sign on the path of CSS basics: it orients you before you speed up." },
      },
      {
        id: "web-css-basics-s4",
        title: { fr: "Box model", en: "Box model" },
        body: {
          fr: "Chaque élément est une boîte : content + padding + border + margin. box-sizing: border-box simplifie les largeurs. Content, padding, border et margin forment la boîte. box-sizing: border-box simplifie souvent les calculs de largeur au quotidien. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Every element is a box: content + padding + border + margin. box-sizing: border-box simplifies widths. Content, padding, border, and margin form the box. box-sizing: border-box often simplifies everyday width math. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Box model » change concrètement dans ton debug ou ton code.", en: "Remember what “Box model” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases du CSS que cette idée explique.", en: "Name a real symptom related to CSS basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "css-box-model",
        callout: { fr: "Erreur fréquente : confondre « Box model » avec un détail cosmétique.", en: "Common mistake: treating “Box model” as a cosmetic detail." },
        calloutKind: "mistake",
        analogy: { fr: "Comme un tableau encadré : toile (content), passe-partout (padding), cadre (border), espace au mur (margin).", en: "Like a framed picture: canvas (content), mat (padding), frame (border), space to the wall (margin)." },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Box model » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Box model” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases du CSS, même simple.", en: "Start from an example related to CSS basics, even a simple one." },
        },
      },
      {
        id: "web-css-basics-s5",
        title: { fr: "Flexbox", en: "Flexbox" },
        body: {
          fr: "display: flex aligne les enfants sur un axe. justify-content et align-items contrôlent la distribution. Flexbox aligne et distribue l’espace sur un axe. Il couvre menus, cartes et barres d’outils sans flottants fragiles. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "display: flex aligns children on an axis. justify-content and align-items control distribution. Flexbox aligns and distributes space on one axis. It covers menus, cards, and toolbars without fragile floats. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Flexbox » change concrètement dans ton debug ou ton code.", en: "Remember what “Flexbox” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases du CSS que cette idée explique.", en: "Name a real symptom related to CSS basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Flex pour 1D ; Grid pour les grilles 2D complexes.", en: "Flex for 1D; Grid for complex 2D layouts." },
        calloutKind: "tip",
        codeExample: {
          language: "css",
          code: ".row {\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n  align-items: center;\n}",
          caption: { fr: "Rangée flexible courante.", en: "Common flexible row." },
        },
        analogy: { fr: "Pense à « Flexbox » comme un panneau indicateur sur la route de Bases du CSS : il oriente avant d’accélérer.", en: "Think of “Flexbox” as a road sign on the path of CSS basics: it orients you before you speed up." },
      },
      {
        id: "web-css-basics-s6",
        title: { fr: "Responsive", en: "Responsive" },
        body: {
          fr: "Les media queries adaptent les styles selon la largeur. Mobile-first : base petit écran, puis min-width. Media queries et unités fluides adaptent la mise en page. Commence mobile-first : ajoute de la complexité quand l’écran grandit. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Media queries adapt styles by width. Mobile-first: small-screen base, then min-width. Media queries and fluid units adapt layout. Start mobile-first: add complexity as the screen grows. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "@media (min-width: 768px)", en: "@media (min-width: 768px)" },
          { fr: "Unités relatives : rem, %, vw", en: "Relative units: rem, %, vw" },
          { fr: "Images fluides : max-width: 100%", en: "Fluid images: max-width: 100%" },
        ],
        callout: { fr: "Astuce : après cette section, explique « Responsive » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Responsive” out loud in 20 seconds." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Responsive » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Responsive” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases du CSS, même simple.", en: "Start from an example related to CSS basics, even a simple one." },
        },
      },
      {
        id: "web-css-basics-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Carte avec titre, texte et bouton : empilés sur mobile, bouton à droite sur desktop. Un mini défi de centrage ou de grille simple ancre mieux les concepts que dix tutos passifs. Observe le résultat dans les DevTools. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Card with title, text, and button: stacked on mobile, button on the right on desktop. A mini challenge to center or build a simple layout anchors concepts better than ten passive tutorials. Observe the result in DevTools. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases du CSS que cette idée explique.", en: "Name a real symptom related to CSS basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de Bases du CSS : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of CSS basics: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Quelles propriétés flex et quelle media query ?", en: "Which flex properties and media query?" },
          hint: { fr: "column par défaut, row au breakpoint.", en: "column by default, row at breakpoint." },
        },
      },
      {
        id: "web-css-basics-extra1",
        title: { fr: "Débugger le CSS calmement", en: "Debugging CSS calmly" },
        body: {
          fr: "Inspecte l’élément, regarde quelles règles s’appliquent et lesquelles sont barrées. Vérifie box model et flex avant de réécrire tout le fichier. Ce geste méthodique transforme « ça casse » en hypothèses précises. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Inspect the element, see which rules apply and which are crossed out. Check box model and flex before rewriting the whole file. That methodical habit turns “it’s broken” into precise hypotheses. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Débugger le CSS calmement » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Debugging CSS calmly” out loud in 20 seconds." },
        calloutKind: "tip",
        analogy: { fr: "Comme lire les calques d’un dessin avant de tout gommer.", en: "Like reading drawing layers before erasing everything." },
      },
      {
        id: "web-css-basics-extra2",
        title: { fr: "Spécificité sans panique", en: "Specificity without panic" },
        body: {
          fr: "Évite !important sauf cas rare. Structure tes classes, limite les sélecteurs profonds, et documente les exceptions. Une spécificité maîtrisée rend le design system évolutif pour toute l’équipe. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Avoid !important except rare cases. Structure your classes, limit deep selectors, and document exceptions. Controlled specificity makes the design system evolvable for the whole team. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Attention : négliger « Spécificité sans panique » crée des bugs difficiles à classer.", en: "Warning: neglecting “Specificity without panic” creates bugs that are hard to classify." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Spécificité sans panique » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Specificity without panic” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases du CSS, même simple.", en: "Start from an example related to CSS basics, even a simple one." },
        },
      },
      {
        id: "web-css-basics-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "Le CSS applique présentation via sélecteurs, cascade et boîtes. Flexbox et le responsive couvrent une grande part des mises en page modernes. Comprendre pourquoi une règle gagne évite la dette visuelle. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "CSS applies presentation through selectors, cascade, and boxes. Flexbox and responsive techniques cover much of modern layout. Understanding why a rule wins avoids visual debt. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de les bases CSS.", en: "Remember the core of CSS basics." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de les bases CSS est ta boussole pour la suite.", en: "The summary of CSS basics is your compass for what comes next." },
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
      {
        term: { fr: "Spécificité", en: "Specificity" },
        definition: {
          fr: "Score qui décide quelle règle CSS l’emporte.",
          en: "Score that decides which CSS rule wins.",
        },
      },
      {
        term: { fr: "Box model", en: "Box model" },
        definition: {
          fr: "Modèle content/padding/border/margin d’un élément.",
          en: "An element’s content/padding/border/margin model.",
        },
      },
    ],
    activities: [
      {
        id: "web-css-basics-q1",
        type: "multiple-choice",
        question: { fr: "Le CSS sert surtout à…", en: "CSS is mainly for…" },
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
        question: { fr: "Quelle spécificité est en général la plus forte ?", en: "Which specificity is generally strongest?" },
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
        question: { fr: "padding se situe…", en: "padding sits…" },
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
        question: { fr: "display: flex sert à…", en: "display: flex is used to…" },
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
        question: { fr: "Mobile-first utilise souvent…", en: "Mobile-first often uses…" },
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
        question: { fr: "Abuser de !important…", en: "Overusing !important…" },
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
      {
        id: "web-css-basics-q100",
        type: "multiple-choice",
        question: { fr: "Que décrit surtout le box model ?", en: "What does the box model mainly describe?" },
        options: [
          { fr: "Content, padding, border et margin", en: "Content, padding, border, and margin" },
          { fr: "Uniquement le DNS", en: "DNS only" },
          { fr: "Les certificats TLS", en: "TLS certificates" },
          { fr: "Les commits Git", en: "Git commits" },
        ],
        correctAnswer: { fr: "Content, padding, border et margin", en: "Content, padding, border, and margin" },
        hint: { fr: "Pense boîte autour du contenu.", en: "Think of a box around content." },
        explanation: {
          fr: "Chaque élément est une boîte avec ces couches.",
          en: "Each element is a box with those layers.",
        },
      },
      {
        id: "web-css-basics-q101",
        type: "multiple-choice",
        question: { fr: "Pourquoi limiter !important ?", en: "Why limit !important?" },
        options: [
          { fr: "Il casse la cascade et complique la maintenance", en: "It breaks the cascade and hurts maintenance" },
          { fr: "Il accélère toujours le rendu", en: "It always speeds rendering" },
          { fr: "Il remplace Flexbox", en: "It replaces Flexbox" },
          { fr: "Il est obligatoire en HTML", en: "It is required in HTML" },
        ],
        correctAnswer: { fr: "Il casse la cascade et complique la maintenance", en: "It breaks the cascade and hurts maintenance" },
        hint: { fr: "Pense dette et conflits futurs.", en: "Think debt and future conflicts." },
        explanation: {
          fr: "Trop de !important rend le CSS imprévisible.",
          en: "Too much !important makes CSS unpredictable.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes le CSS : sélecteurs, cascade, box model, flex et responsive. Montre des snippets courts. Fais expliquer cascade et box model avec un exemple inspecté mentalement.",
        en: "You teach CSS: selectors, cascade, box model, flex, and responsive. Show short snippets. Have them explain cascade and box model with a mentally inspected example.",
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
      fr: "Découvre comment JavaScript rend une page interactive : variables, fonctions, conditions, tableaux, objets et premier contact avec le DOM. Tu poseras des bases solides avant événements et apps plus riches.",
      en: "Discover how JavaScript makes a page interactive: variables, functions, conditions, arrays, objects, and a first look at the DOM. You will build solid foundations before events and richer apps.",
    },
    icon: "zap",
    estimatedMinutes: 24,
    xpReward: 30,
    goals: [
      {
        description: { fr: "Utiliser let/const, types simples et fonctions", en: "Use let/const, simple types, and functions" },
        xpReward: 8,
      },
      {
        description: { fr: "Écrire conditions et boucles de base", en: "Write basic conditionals and loops" },
        xpReward: 8,
      },
      {
        description: { fr: "Manipuler le DOM avec querySelector", en: "Manipulate the DOM with querySelector" },
        xpReward: 9,
      },
      {
        description: { fr: "Écrire une petite logique JS (condition + fonction) liée au DOM", en: "Write small JS logic (condition + function) tied to the DOM" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-javascript-basics-s1",
        title: { fr: "JS rend la page interactive", en: "JS makes the page interactive" },
        body: {
          fr: "JavaScript s'exécute dans le navigateur (ou côté serveur avec Node). Il réagit aux clics, valide des formulaires et met à jour l'interface sans recharger toute la page. JS réagit aux actions utilisateur et met à jour l’interface sans recharger toute la page. C’est le comportement vivant au-dessus du HTML et du CSS. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "JavaScript runs in the browser (or server-side with Node). It reacts to clicks, validates forms, and updates the UI without full page reloads. JS reacts to user actions and updates the UI without reloading the whole page. It is the living behavior on top of HTML and CSS. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « JS rend la page interactive » change concrètement dans ton debug ou ton code.", en: "Remember what “JS makes the page interactive” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases de JavaScript que cette idée explique.", en: "Name a real symptom related to JavaScript basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "client-server-web",
        callout: { fr: "HTML structure, CSS présente, JS comportement.", en: "HTML structures, CSS presents, JS behaves." },
        calloutKind: "key",
        analogy: { fr: "Pense à « JS rend la page interactive » comme un panneau indicateur sur la route de Bases de JavaScript : il oriente avant d’accélérer.", en: "Think of “JS makes the page interactive” as a road sign on the path of JavaScript basics: it orients you before you speed up." },
      },
      {
        id: "web-javascript-basics-s2",
        title: { fr: "Variables et types", en: "Variables and types" },
        body: {
          fr: "Préfère const par défaut, let si la valeur change. number, string, boolean, null, undefined et object sont les bases. Évite var en code moderne. let et const clarifient la mutabilité ; les types primitifs et objets se manipulent différemment. Nomme tes variables pour rendre l’intention évidente. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Prefer const by default, let if the value changes. number, string, boolean, null, undefined, and object are the basics. Avoid var in modern code. let and const clarify mutability; primitives and objects behave differently. Name variables so intent is obvious. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Variables et types » change concrètement dans ton debug ou ton code.", en: "Remember what “Variables and types” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases de JavaScript que cette idée explique.", en: "Name a real symptom related to JavaScript basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Déclarer sans const/let crée une variable globale implicite , piège classique.", en: "Declaring without const/let creates an implicit global , a classic trap." },
        calloutKind: "mistake",
        codeExample: {
          language: "javascript",
          code: "const name = \"Nova\";\nlet score = 0;\nscore += 10;\nconsole.log(`${name}: ${score}`);",
          caption: { fr: "const pour l'immuable, let pour le compteur.", en: "const for immutable, let for the counter." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Variables et types » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Variables and types” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases de JavaScript, même simple.", en: "Start from an example related to JavaScript basics, even a simple one." },
        },
      },
      {
        id: "web-javascript-basics-s3",
        title: { fr: "Fonctions", en: "Functions" },
        body: {
          fr: "Les fonctions encapsulent une logique réutilisable. Fléchées ou classiques, elles prennent des paramètres et peuvent retourner une valeur. Les fonctions encapsulent une action réutilisable. Des paramètres clairs et un retour explicite évitent la logique copiée-collée. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Functions encapsulate reusable logic. Arrow or classic, they take parameters and can return a value. Functions encapsulate reusable actions. Clear parameters and an explicit return avoid copy-paste logic. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Fonctions » change concrètement dans ton debug ou ton code.", en: "Remember what “Functions” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases de JavaScript que cette idée explique.", en: "Name a real symptom related to JavaScript basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Fonctions » crée des bugs difficiles à classer.", en: "Warning: neglecting “Functions” creates bugs that are hard to classify." },
        calloutKind: "warning",
        codeExample: {
          language: "javascript",
          code: "function greet(user) {\n  return `Hello, ${user}`;\n}\nconst add = (a, b) => a + b;",
          caption: { fr: "Deux styles courants.", en: "Two common styles." },
        },
        analogy: { fr: "Pense à « Fonctions » comme un panneau indicateur sur la route de Bases de JavaScript : il oriente avant d’accélérer.", en: "Think of “Functions” as a road sign on the path of JavaScript basics: it orients you before you speed up." },
      },
      {
        id: "web-javascript-basics-s4",
        diagram: "control-flow",
        title: { fr: "Conditions et boucles", en: "Conditionals and loops" },
        body: {
          fr: "if/else et switch orientent le flux. for, while et for...of parcourent des listes. Garde les conditions lisibles. Conditions et boucles dirigent le flux. Préfère des branches lisibles ; une boucle claire bat une astuce opaque. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "if/else and switch direct flow. for, while, and for...of walk lists. Keep conditions readable. Conditions and loops direct flow. Prefer readable branches; a clear loop beats an opaque trick. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "=== compare valeur et type", en: "=== compares value and type" },
          { fr: "for...of pour les tableaux", en: "for...of for arrays" },
          { fr: "Évite les boucles infinies", en: "Avoid infinite loops" },
        ],
        callout: { fr: "Erreur fréquente : confondre « Conditions et boucles » avec un détail cosmétique.", en: "Common mistake: treating “Conditionals and loops” as a cosmetic detail." },
        calloutKind: "mistake",
        analogy: { fr: "Une fonction est une recette : entrées (ingrédients), étapes, résultat (plat).", en: "A function is a recipe: inputs (ingredients), steps, result (dish)." },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Conditions et boucles » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Conditionals and loops” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases de JavaScript, même simple.", en: "Start from an example related to JavaScript basics, even a simple one." },
        },
      },
      {
        id: "web-javascript-basics-s5",
        title: { fr: "Tableaux et objets", en: "Arrays and objects" },
        body: {
          fr: "Les tableaux listent des valeurs ordonnées ; les objets associent des clés à des valeurs. map, filter et find sont tes alliés. Tableaux et objets structurent les données de l’UI et des APIs JSON. Apprends à lire et mettre à jour ces structures sans les muter au hasard. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Arrays list ordered values; objects map keys to values. map, filter, and find are your allies. Arrays and objects structure UI data and JSON APIs. Learn to read and update these structures without mutating them carelessly. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Tableaux et objets » change concrètement dans ton debug ou ton code.", en: "Remember what “Arrays and objects” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases de JavaScript que cette idée explique.", en: "Name a real symptom related to JavaScript basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Muter un tableau partagé sans précaution crée des bugs difficiles.", en: "Mutating a shared array carelessly creates hard bugs." },
        calloutKind: "warning",
        codeExample: {
          language: "javascript",
          code: "const users = [{ id: 1, name: \"Ada\" }, { id: 2, name: \"Lin\" }];\nconst names = users.map((u) => u.name);",
          caption: { fr: "Transformer une liste proprement.", en: "Transform a list cleanly." },
        },
        analogy: { fr: "Pense à « Tableaux et objets » comme un panneau indicateur sur la route de Bases de JavaScript : il oriente avant d’accélérer.", en: "Think of “Arrays and objects” as a road sign on the path of JavaScript basics: it orients you before you speed up." },
      },
      {
        id: "web-javascript-basics-s6",
        title: { fr: "Premier contact DOM", en: "First DOM contact" },
        body: {
          fr: "document.querySelector sélectionne un élément. textContent et classList permettent de le modifier après un événement. querySelector et textContent ouvrent le DOM. Commence petit : changer un texte au clic avant les frameworks. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "document.querySelector selects an element. textContent and classList let you change it after an event. querySelector and textContent open the DOM. Start small: change text on click before frameworks. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Premier contact DOM » change concrètement dans ton debug ou ton code.", en: "Remember what “First DOM contact” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases de JavaScript que cette idée explique.", en: "Name a real symptom related to JavaScript basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "dom-tree",
        callout: { fr: "Astuce : après cette section, explique « Premier contact DOM » à voix haute en 20 secondes.", en: "Tip: after this section, explain “First DOM contact” out loud in 20 seconds." },
        calloutKind: "tip",
        codeExample: {
          language: "javascript",
          code: "const btn = document.querySelector(\"#save\");\nbtn.addEventListener(\"click\", () => {\n  btn.textContent = \"Saved\";\n});",
          caption: { fr: "Clic → mise à jour du texte.", en: "Click → update text." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Premier contact DOM » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “First DOM contact” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases de JavaScript, même simple.", en: "Start from an example related to JavaScript basics, even a simple one." },
        },
      },
      {
        id: "web-javascript-basics-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Un bouton « +1 » incrémente un compteur affiché dans un span. Un mini défi (compteur, liste, message d’erreur) ancre la syntaxe. Lis les erreurs console : elles enseignent autant que le succès. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "A +1 button increments a counter shown in a span. A mini challenge (counter, list, error message) anchors syntax. Read console errors: they teach as much as success. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases de JavaScript que cette idée explique.", en: "Name a real symptom related to JavaScript basics that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de Bases de JavaScript : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of JavaScript basics: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Quelles API DOM et quelle variable utiliserais-tu ?", en: "Which DOM APIs and variable would you use?" },
          hint: { fr: "let count, querySelector, click, textContent.", en: "let count, querySelector, click, textContent." },
        },
      },
      {
        id: "web-javascript-basics-extra1",
        title: { fr: "Lire la console sans peur", en: "Reading the console without fear" },
        body: {
          fr: "TypeError et ReferenceError indiquent souvent une variable mal nommée ou un élément DOM absent. Lis la ligne, vérifie null, puis corrige. Ce réflexe te fait progresser plus vite que recopier un tutoriel entier. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "TypeError and ReferenceError often mean a mistyped variable or a missing DOM element. Read the line, check for null, then fix. That habit grows you faster than copying a whole tutorial. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Lire la console sans peur » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Reading the console without fear” out loud in 20 seconds." },
        calloutKind: "tip",
        analogy: { fr: "La console est un professeur strict mais honnête.", en: "The console is a strict but honest teacher." },
      },
      {
        id: "web-javascript-basics-extra2",
        title: { fr: "Petit JS avant les frameworks", en: "Small JS before frameworks" },
        body: {
          fr: "React et les libs sont puissants, mais ils s’appuient sur les mêmes idées : état, fonctions, DOM. Maîtriser le vanilla te rend meilleur dans n’importe quel framework et plus autonome en debug. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "React and libraries are powerful, but they rest on the same ideas: state, functions, DOM. Mastering vanilla makes you better in any framework and more autonomous when debugging. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "À retenir : « Petit JS avant les frameworks » conditionne souvent la suite de Bases de JavaScript.", en: "Key takeaway: “Small JS before frameworks” often shapes what follows in JavaScript basics." },
        calloutKind: "key",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Petit JS avant les frameworks » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Small JS before frameworks” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases de JavaScript, même simple.", en: "Start from an example related to JavaScript basics, even a simple one." },
        },
      },
      {
        id: "web-javascript-basics-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "JavaScript ajoute le comportement : variables, fonctions, flux de contrôle et structures de données. Le DOM relie ce code à la page. Des bases claires rendent événements, APIs et frameworks beaucoup plus abordables. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "JavaScript adds behavior: variables, functions, control flow, and data structures. The DOM connects that code to the page. Clear basics make events, APIs, and frameworks far more approachable. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de les bases JavaScript.", en: "Remember the core of JavaScript basics." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de les bases JavaScript est ta boussole pour la suite.", en: "The summary of JavaScript basics is your compass for what comes next." },
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
      {
        term: { fr: "DOM", en: "DOM" },
        definition: {
          fr: "Représentation objet du document HTML manipulable en JS.",
          en: "Object representation of the HTML document manipulable in JS.",
        },
      },
      {
        term: { fr: "Fonction", en: "Function" },
        definition: {
          fr: "Bloc réutilisable qui exécute une logique avec paramètres.",
          en: "Reusable block that runs logic with parameters.",
        },
      },
    ],
    activities: [
      {
        id: "web-javascript-basics-q1",
        type: "multiple-choice",
        question: { fr: "Quelle déclaration pour une valeur qui ne change pas ?", en: "Which declaration for a value that does not change?" },
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
        question: { fr: "=== compare…", en: "=== compares…" },
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
        question: { fr: "map sur un tableau sert à…", en: "map on an array is used to…" },
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
        question: { fr: "querySelector(\"#save\") cible…", en: "querySelector(\"#save\") targets…" },
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
        question: { fr: "addEventListener(\"click\", …) sert à…", en: "addEventListener(\"click\", …) is for…" },
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
        question: { fr: "Écrire x = 1 sans const/let…", en: "Writing x = 1 without const/let…" },
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
      {
        id: "web-javascript-basics-q100",
        type: "multiple-choice",
        question: { fr: "Quel mot-clé préfères-tu pour une constante ?", en: "Which keyword do you prefer for a constant?" },
        options: [
          { fr: "const", en: "const" },
          { fr: "var partout sans réflexion", en: "var everywhere without thought" },
          { fr: "html", en: "html" },
          { fr: "dns", en: "dns" },
        ],
        correctAnswer: { fr: "const", en: "const" },
        hint: { fr: "Immutabilité d’intention.", en: "Intentional immutability." },
        explanation: {
          fr: "const signale une liaison qui ne doit pas être réassignée.",
          en: "const signals a binding that should not be reassigned.",
        },
      },
      {
        id: "web-javascript-basics-q101",
        type: "multiple-choice",
        question: { fr: "À quoi sert querySelector ?", en: "What is querySelector for?" },
        options: [
          { fr: "Sélectionner un élément du DOM", en: "Selecting a DOM element" },
          { fr: "Chiffrer TLS", en: "Encrypting TLS" },
          { fr: "Créer un enregistrement DNS", en: "Creating a DNS record" },
          { fr: "Remplacer PostgreSQL", en: "Replacing PostgreSQL" },
        ],
        correctAnswer: { fr: "Sélectionner un élément du DOM", en: "Selecting a DOM element" },
        hint: { fr: "Pont entre JS et HTML.", en: "Bridge between JS and HTML." },
        explanation: {
          fr: "querySelector trouve un nœud pour le lire ou le modifier.",
          en: "querySelector finds a node to read or modify.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes JavaScript débutant : variables, fonctions, tableaux et DOM. Corrige les confusions var/const et ==/===. Fais écrire de petits exemples et interpréter les erreurs console.",
        en: "You teach beginner JavaScript: variables, functions, arrays, and DOM. Correct var/const and ==/=== mix-ups. Have them write tiny examples and interpret console errors.",
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
      fr: "Va plus loin dans le DOM : sélection, modification, événements, délégation, formulaires interactifs et articulation avec le responsive. Tu rendras une interface réactive sans recharger la page.",
      en: "Go further in the DOM: selection, updates, events, delegation, interactive forms, and how they meet responsive design. You will make a UI reactive without reloading the page.",
    },
    icon: "sparkles",
    estimatedMinutes: 23,
    xpReward: 29,
    goals: [
      {
        description: { fr: "Naviguer et modifier le DOM en toute sécurité", en: "Navigate and modify the DOM safely" },
        xpReward: 8,
      },
      {
        description: { fr: "Gérer clics et formulaires avec des listeners", en: "Handle clicks and forms with listeners" },
        xpReward: 8,
      },
      {
        description: { fr: "Relier JS et CSS responsive", en: "Connect JS and responsive CSS" },
        xpReward: 8,
      },
      {
        description: { fr: "Brancher un écouteur d’événement et mettre à jour le DOM en réponse", en: "Attach an event listener and update the DOM in response" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-dom-events-responsive-s1",
        title: { fr: "Le DOM en action", en: "The DOM in action" },
        body: {
          fr: "Après le parse HTML, le navigateur expose un arbre d'objets. Modifier le DOM met à jour ce que l'utilisateur voit. Le DOM est l’arbre vivant de la page. Le modifier après chargement permet feedback immédiat : messages, listes, états de boutons. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "After HTML parsing, the browser exposes an object tree. Changing the DOM updates what the user sees. The DOM is the live page tree. Changing it after load enables immediate feedback: messages, lists, button states. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Le DOM en action » change concrètement dans ton debug ou ton code.", en: "Remember what “The DOM in action” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à DOM, événements et responsive que cette idée explique.", en: "Name a real symptom related to DOM, events, and responsive that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "dom-tree",
        callout: { fr: "Trop de lectures/écritures DOM dans une boucle peut freiner les perfs.", en: "Too many DOM reads/writes in a loop can hurt performance." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Le DOM en action » comme un panneau indicateur sur la route de DOM, événements et responsive : il oriente avant d’accélérer.", en: "Think of “The DOM in action” as a road sign on the path of DOM, events, and responsive: it orients you before you speed up." },
      },
      {
        id: "web-dom-events-responsive-s2",
        title: { fr: "Sélection et modification", en: "Selection and modification" },
        body: {
          fr: "querySelector / querySelectorAll trouvent des nœuds. textContent, innerHTML (avec prudence XSS), classList et setAttribute les font évoluer. Sélectionne précisément, puis modifie texte, classes ou attributs. Évite les mises à jour massives inutiles qui coûtent en performance. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "querySelector / querySelectorAll find nodes. textContent, innerHTML (XSS caution), classList, and setAttribute change them. Select precisely, then change text, classes, or attributes. Avoid needless mass updates that cost performance. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Sélection et modification » change concrètement dans ton debug ou ton code.", en: "Remember what “Selection and modification” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à DOM, événements et responsive que cette idée explique.", en: "Name a real symptom related to DOM, events, and responsive that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Préfère textContent à innerHTML quand tu n'as pas besoin de balises.", en: "Prefer textContent over innerHTML when you don't need markup." },
        calloutKind: "tip",
        codeExample: {
          language: "javascript",
          code: "const el = document.querySelector(\".badge\");\nel.classList.add(\"badge,active\");\nel.setAttribute(\"aria-pressed\", \"true\");",
          caption: { fr: "État visuel + accessibilité.", en: "Visual state + accessibility." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Sélection et modification » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Selection and modification” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à DOM, événements et responsive, même simple.", en: "Start from an example related to DOM, events, and responsive, even a simple one." },
        },
      },
      {
        id: "web-dom-events-responsive-s3",
        title: { fr: "Événements", en: "Events" },
        body: {
          fr: "click, input, submit, keydown… Le navigateur déclenche des événements. Tes listeners y réagissent. click, submit et input couvrent beaucoup d’UI. preventDefault sur un submit te laisse valider avant d’envoyer. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "click, input, submit, keydown… The browser fires events. Your listeners react. click, submit, and input cover much of UI. preventDefault on submit lets you validate before sending. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "preventDefault stoppe le comportement natif", en: "preventDefault stops native behavior" },
          { fr: "stopPropagation limite la remontée", en: "stopPropagation limits bubbling" },
          { fr: "Une fois le DOM prêt : DOMContentLoaded", en: "Once DOM ready: DOMContentLoaded" },
        ],
        callout: { fr: "Attention : négliger « Événements » crée des bugs difficiles à classer.", en: "Warning: neglecting “Events” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Événements » comme un panneau indicateur sur la route de DOM, événements et responsive : il oriente avant d’accélérer.", en: "Think of “Events” as a road sign on the path of DOM, events, and responsive: it orients you before you speed up." },
      },
      {
        id: "web-dom-events-responsive-s4",
        title: { fr: "Délégation d'événements", en: "Event delegation" },
        body: {
          fr: "Écoute un parent plutôt que chaque enfant. Utile pour listes dynamiques : un seul listener gère les clics via event.target. La délégation écoute un parent pour des enfants dynamiques. Moins d’écouteurs, plus de robustesse quand la liste change. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Listen on a parent instead of each child. Useful for dynamic lists: one listener handles clicks via event.target. Delegation listens on a parent for dynamic children. Fewer listeners, more robustness when the list changes. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Délégation d'événements » change concrètement dans ton debug ou ton code.", en: "Remember what “Event delegation” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à DOM, événements et responsive que cette idée explique.", en: "Name a real symptom related to DOM, events, and responsive that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attacher 200 listeners individuels sur une liste longue est souvent inutile.", en: "Attaching 200 individual listeners on a long list is often unnecessary." },
        calloutKind: "mistake",
        analogy: { fr: "Comme un réceptionniste d'immeuble : un point d'entrée pour tous les colis des appartements.", en: "Like a building receptionist: one entry point for all apartments' packages." },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Délégation d'événements » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Event delegation” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à DOM, événements et responsive, même simple.", en: "Start from an example related to DOM, events, and responsive, even a simple one." },
        },
      },
      {
        id: "web-dom-events-responsive-s5",
        title: { fr: "Formulaires interactifs", en: "Interactive forms" },
        body: {
          fr: "Écoute submit, valide côté client pour le confort, mais toujours revalide côté serveur. Affiche des messages d'erreur accessibles. Valider côté client améliore l’UX, mais le serveur reste la source de vérité sécurité. Affiche des erreurs claires près des champs. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Listen to submit, validate client-side for comfort, but always revalidate server-side. Show accessible error messages. Client-side validation improves UX, but the server remains the security source of truth. Show clear errors near fields. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Formulaires interactifs » change concrètement dans ton debug ou ton code.", en: "Remember what “Interactive forms” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à DOM, événements et responsive que cette idée explique.", en: "Name a real symptom related to DOM, events, and responsive that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "À retenir : « Formulaires interactifs » conditionne souvent la suite de DOM, événements et responsive.", en: "Key takeaway: “Interactive forms” often shapes what follows in DOM, events, and responsive." },
        calloutKind: "key",
        codeExample: {
          language: "javascript",
          code: "form.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  if (!email.value.includes(\"@\")) {\n    error.textContent = \"Email invalide\";\n    return;\n  }\n  form.submit();\n});",
          caption: { fr: "Validation légère avant envoi.", en: "Light validation before send." },
        },
        analogy: { fr: "Pense à « Formulaires interactifs » comme un panneau indicateur sur la route de DOM, événements et responsive : il oriente avant d’accélérer.", en: "Think of “Interactive forms” as a road sign on the path of DOM, events, and responsive: it orients you before you speed up." },
      },
      {
        id: "web-dom-events-responsive-s6",
        title: { fr: "Responsive + JS", en: "Responsive + JS" },
        body: {
          fr: "matchMedia synchronise JS avec tes breakpoints CSS. Évite de dupliquer toute la logique de layout en JS si le CSS suffit. Match media et classes CSS peuvent répondre au viewport. JS responsive complète, sans remplacer, une bonne base CSS. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "matchMedia syncs JS with your CSS breakpoints. Avoid duplicating all layout logic in JS if CSS is enough. Match media and CSS classes can react to the viewport. Responsive JS complements, not replaces, a solid CSS base. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "CSS d'abord pour le layout", en: "CSS first for layout" },
          { fr: "JS pour comportement et états", en: "JS for behavior and state" },
          { fr: "Tester clavier et petits écrans", en: "Test keyboard and small screens" },
        ],
        diagram: "client-server-web",
        callout: { fr: "Un menu mobile doit aussi fonctionner au clavier (Esc, focus).", en: "A mobile menu must also work with keyboard (Esc, focus)." },
        calloutKind: "key",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Responsive + JS » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Responsive + JS” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à DOM, événements et responsive, même simple.", en: "Start from an example related to DOM, events, and responsive, even a simple one." },
        },
      },
      {
        id: "web-dom-events-responsive-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Liste de tâches : cliquer une tâche la barre ; un bouton ajoute une nouvelle tâche. Un défi (liste de tâches minimal, filtre, menu mobile) relie événements et rendu. Garde le code lisible : une responsabilité par fonction. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Todo list: clicking a task strikes it; a button adds a new task. A challenge (tiny todo, filter, mobile menu) links events and rendering. Keep code readable: one responsibility per function. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à DOM, événements et responsive que cette idée explique.", en: "Name a real symptom related to DOM, events, and responsive that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de DOM, événements et responsive : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of DOM, events, and responsive: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Où placerais-tu le listener et comment éviter innerHTML non fiable ?", en: "Where would you place the listener and how avoid unsafe innerHTML?" },
          hint: { fr: "Délégation sur ul + createElement/textContent.", en: "Delegation on ul + createElement/textContent." },
        },
      },
      {
        id: "web-dom-events-responsive-extra1",
        title: { fr: "Délégation en pratique", en: "Delegation in practice" },
        body: {
          fr: "Sur une liste qui grandit, attache un seul listener au ul et lis event.target. Tu évites de rebrancher chaque li et tu gères suppressions ou ajouts sans fuite d’écouteurs. C’est un pattern fréquent dans les UIs dynamiques. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "On a growing list, attach one listener to the ul and read event.target. You avoid rebinding each li and handle removals or additions without listener leaks. It is a common pattern in dynamic UIs. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "À retenir : « Délégation en pratique » conditionne souvent la suite de DOM, événements et responsive.", en: "Key takeaway: “Delegation in practice” often shapes what follows in DOM, events, and responsive." },
        calloutKind: "key",
        analogy: { fr: "Un gardien à l’entrée du stade plutôt qu’à chaque siège.", en: "One guard at the stadium gate rather than at every seat." },
      },
      {
        id: "web-dom-events-responsive-extra2",
        title: { fr: "Responsive : CSS d’abord", en: "Responsive: CSS first" },
        body: {
          fr: "Préfère Flexbox, grilles et media queries pour l’adaptation visuelle. Utilise JS quand le comportement change vraiment (menu, carrousel). Mélanger les rôles crée des bugs difficiles sur resize. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Prefer Flexbox, grids, and media queries for visual adaptation. Use JS when behavior truly changes (menu, carousel). Mixing roles creates hard resize bugs. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Responsive : CSS d’abord » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Responsive: CSS first” out loud in 20 seconds." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Responsive : CSS d’abord » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Responsive: CSS first” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à DOM, événements et responsive, même simple.", en: "Start from an example related to DOM, events, and responsive, even a simple one." },
        },
      },
      {
        id: "web-dom-events-responsive-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "Le DOM se sélectionne et se met à jour ; les événements déclenchent ces changements. La délégation scale mieux sur du contenu dynamique. Combine CSS responsive et JS comportemental pour une UI solide sur tous les écrans. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "The DOM is selected and updated; events trigger those changes. Delegation scales better for dynamic content. Combine responsive CSS and behavioral JS for a solid UI on every screen. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de DOM, événements et responsive.", en: "Remember the core of DOM, events, and responsive behavior." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de DOM, événements et responsive est ta boussole pour la suite.", en: "The summary of DOM, events, and responsive behavior is your compass for what comes next." },
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
      {
        term: { fr: "Écouteur", en: "Event listener" },
        definition: {
          fr: "Fonction branchée qui réagit à un événement.",
          en: "Attached function that reacts to an event.",
        },
      },
      {
        term: { fr: "Délégation", en: "Delegation" },
        definition: {
          fr: "Écouter un parent pour gérer des enfants.",
          en: "Listening on a parent to handle children.",
        },
      },
    ],
    activities: [
      {
        id: "web-dom-events-responsive-q1",
        type: "multiple-choice",
        question: { fr: "Le DOM est…", en: "The DOM is…" },
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
        question: { fr: "preventDefault sert à…", en: "preventDefault is used to…" },
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
        question: { fr: "La délégation d'événements…", en: "Event delegation…" },
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
        question: { fr: "innerHTML avec données utilisateur non filtrées…", en: "innerHTML with unfiltered user data…" },
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
        question: { fr: "matchMedia relie…", en: "matchMedia connects…" },
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
        question: { fr: "Pour le layout responsive, commence par…", en: "For responsive layout, start with…" },
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
      {
        id: "web-dom-events-responsive-q100",
        type: "multiple-choice",
        question: { fr: "Pourquoi utiliser la délégation d’événements ?", en: "Why use event delegation?" },
        options: [
          { fr: "Gérer des éléments dynamiques avec moins d’écouteurs", en: "Handle dynamic elements with fewer listeners" },
          { fr: "Remplacer HTTPS", en: "Replace HTTPS" },
          { fr: "Compiler le CSS", en: "Compile CSS" },
          { fr: "Éviter complètement le HTML", en: "Avoid HTML entirely" },
        ],
        correctAnswer: { fr: "Gérer des éléments dynamiques avec moins d’écouteurs", en: "Handle dynamic elements with fewer listeners" },
        hint: { fr: "Listes qui grandissent ou changent.", en: "Lists that grow or change." },
        explanation: {
          fr: "Un parent stable capture les clics des enfants ajoutés plus tard.",
          en: "A stable parent catches clicks from children added later.",
        },
      },
      {
        id: "web-dom-events-responsive-q101",
        type: "multiple-choice",
        question: { fr: "preventDefault sur submit sert surtout à…", en: "preventDefault on submit mainly helps to…" },
        options: [
          { fr: "Intercepter l’envoi pour valider ou traiter en JS", en: "Intercept submit to validate or handle in JS" },
          { fr: "Supprimer le DNS", en: "Delete DNS" },
          { fr: "Forcer HTTP sans TLS", en: "Force HTTP without TLS" },
          { fr: "Désactiver le box model", en: "Disable the box model" },
        ],
        correctAnswer: { fr: "Intercepter l’envoi pour valider ou traiter en JS", en: "Intercept submit to validate or handle in JS" },
        hint: { fr: "Contrôle du formulaire côté client.", en: "Client-side form control." },
        explanation: {
          fr: "Tu empêche le rechargement par défaut pour gérer le flux toi-même.",
          en: "You stop the default reload to manage the flow yourself.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes DOM, événements, délégation et responsive. Insiste sur l'accessibilité et les risques XSS avec innerHTML. Fais relier chaque événement à une mise à jour DOM précise.",
        en: "You teach DOM, events, delegation, and responsive. Stress accessibility and XSS risks with innerHTML. Have them connect each event to a precise DOM update.",
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
      fr: "Comprends comment un serveur écoute, route les URLs, lit paramètres et query, enchaîne des middlewares et répond avec les bons codes. Tu poseras les bases d’une API ou d’un site dynamique.",
      en: "Understand how a server listens, routes URLs, reads params and query, chains middleware, and responds with the right codes. You will build foundations for an API or dynamic site.",
    },
    icon: "home",
    estimatedMinutes: 22,
    xpReward: 28,
    goals: [
      {
        description: { fr: "Expliquer écoute, ports et handlers", en: "Explain listening, ports, and handlers" },
        xpReward: 8,
      },
      {
        description: { fr: "Mapper des URLs vers des routes", en: "Map URLs to routes" },
        xpReward: 8,
      },
      {
        description: { fr: "Distinguer statique et dynamique", en: "Distinguish static and dynamic" },
        xpReward: 7,
      },
      {
        description: { fr: "Décrire le rôle d’une route et d’un middleware sur une requête", en: "Describe the role of a route and middleware on a request" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-server-routes-s1",
        title: { fr: "Un serveur qui écoute", en: "A listening server" },
        body: {
          fr: "Le processus serveur se lie à une adresse et un port (ex. :3000 ou :443). Chaque connexion entrante est acceptée puis traitée par du code applicatif. Le serveur attend sur un port et traite chaque connexion. Logs et healthchecks te disent s’il est vivant avant de blâmer le client. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "The server process binds to an address and port (e.g. :3000 or :443). Each incoming connection is accepted then handled by application code. The server waits on a port and handles each connection. Logs and healthchecks tell you it is alive before blaming the client. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Un serveur qui écoute » change concrètement dans ton debug ou ton code.", en: "Remember what “A listening server” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Serveur et routes que cette idée explique.", en: "Name a real symptom related to Server and routes that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "client-server-web",
        callout: { fr: "Sans processus à l'écoute, le client obtient connection refused.", en: "Without a listening process, the client gets connection refused." },
        calloutKind: "key",
        analogy: { fr: "Pense à « Un serveur qui écoute » comme un panneau indicateur sur la route de Serveur et routes : il oriente avant d’accélérer.", en: "Think of “A listening server” as a road sign on the path of Server and routes: it orients you before you speed up." },
      },
      {
        id: "web-server-routes-s2",
        diagram: "request-lifecycle",
        title: { fr: "Routage", en: "Routing" },
        body: {
          fr: "Une route associe méthode + chemin à un handler. GET /users et POST /users sont deux routes distinctes. Le routage associe méthode + chemin à un handler. Des routes claires documentent ton API presque toutes seules. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "A route maps method + path to a handler. GET /users and POST /users are two distinct routes. Routing maps method + path to a handler. Clear routes almost document your API by themselves. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Routage » change concrètement dans ton debug ou ton code.", en: "Remember what “Routing” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Serveur et routes que cette idée explique.", en: "Name a real symptom related to Server and routes that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Routage » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Routing” out loud in 20 seconds." },
        calloutKind: "tip",
        codeExample: {
          language: "javascript",
          code: "app.get(\"/health\", (req, res) => {\n  res.status(200).json({ ok: true });\n});\napp.post(\"/users\", createUser);",
          caption: { fr: "Routes Express typiques.", en: "Typical Express routes." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Routage » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Routing” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Serveur et routes, même simple.", en: "Start from an example related to Server and routes, even a simple one." },
        },
      },
      {
        id: "web-server-routes-s3",
        title: { fr: "Paramètres et query", en: "Params and query" },
        body: {
          fr: "/users/:id capture un segment. ?page=2 arrive dans la query string. Valide toujours ces entrées. Params de chemin et query string apportent le contexte. Valide et convertis les types : tout arrive comme texte. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "/users/:id captures a segment. ?page=2 arrives in the query string. Always validate these inputs. Path params and query strings bring context. Validate and convert types: everything arrives as text. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Params : parties variables du chemin", en: "Params: variable path parts" },
          { fr: "Query : filtres optionnels", en: "Query: optional filters" },
          { fr: "Body : données POST/PUT (JSON, form)", en: "Body: POST/PUT data (JSON, form)" },
        ],
        callout: { fr: "Faire confiance aveuglément à req.params.id ouvre la porte aux injections.", en: "Blindly trusting req.params.id opens the door to injections." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Paramètres et query » comme un panneau indicateur sur la route de Serveur et routes : il oriente avant d’accélérer.", en: "Think of “Params and query” as a road sign on the path of Server and routes: it orients you before you speed up." },
      },
      {
        id: "web-server-routes-s4",
        title: { fr: "Middleware", en: "Middleware" },
        body: {
          fr: "Les middlewares s'exécutent en chaîne : logs, auth, parsing JSON, puis la route. next() passe au suivant. Les middlewares factorisent auth, logs et parsing. L’ordre compte : parser le corps avant de lire req.body. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Middleware runs in a chain: logs, auth, JSON parsing, then the route. next() moves onward. Middleware factors auth, logs, and parsing. Order matters: parse the body before reading req.body. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Middleware » change concrètement dans ton debug ou ton code.", en: "Remember what “Middleware” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Serveur et routes que cette idée explique.", en: "Name a real symptom related to Server and routes that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Erreur fréquente : confondre « Middleware » avec un détail cosmétique.", en: "Common mistake: treating “Middleware” as a cosmetic detail." },
        calloutKind: "mistake",
        analogy: { fr: "Comme des contrôles à l'aéroport : identité, sécurité, puis embarquement.", en: "Like airport checks: ID, security, then boarding." },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Middleware » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Middleware” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Serveur et routes, même simple.", en: "Start from an example related to Server and routes, even a simple one." },
        },
      },
      {
        id: "web-server-routes-s5",
        title: { fr: "Statique vs dynamique", en: "Static vs dynamic" },
        body: {
          fr: "Fichiers statiques (HTML/CSS/JS build) sont servis tels quels. Les réponses dynamiques sont calculées (templates, JSON API). Fichiers statiques et réponses dynamiques cohabitent. Ne sers pas de secrets depuis le dossier public. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Static files (HTML/CSS/JS build) are served as-is. Dynamic responses are computed (templates, JSON API). Static files and dynamic responses coexist. Do not serve secrets from the public folder. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Statique vs dynamique » change concrètement dans ton debug ou ton code.", en: "Remember what “Static vs dynamic” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Serveur et routes que cette idée explique.", en: "Name a real symptom related to Server and routes that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "request-lifecycle",
        callout: { fr: "Servir index.html pour toutes les routes SPA n'est pas la même chose qu'une API REST.", en: "Serving index.html for all SPA routes is not the same as a REST API." },
        calloutKind: "tip",
        analogy: { fr: "Pense à « Statique vs dynamique » comme un panneau indicateur sur la route de Serveur et routes : il oriente avant d’accélérer.", en: "Think of “Static vs dynamic” as a road sign on the path of Server and routes: it orients you before you speed up." },
      },
      {
        id: "web-server-routes-s6",
        title: { fr: "Codes et erreurs", en: "Status codes and errors" },
        body: {
          fr: "404 si route inconnue, 400 si entrée invalide, 500 si exception non gérée. Centralise le handler d'erreurs. Renvoie des codes honnêtes et des messages utiles. Un 500 silencieux fait perdre des heures ; un 400 explicite accélère le client. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "404 if unknown route, 400 if invalid input, 500 if unhandled exception. Centralize the error handler. Return honest codes and useful messages. A silent 500 wastes hours; an explicit 400 speeds the client. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Codes et erreurs » change concrètement dans ton debug ou ton code.", en: "Remember what “Status codes and errors” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Serveur et routes que cette idée explique.", en: "Name a real symptom related to Server and routes that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Renvoyer 200 avec { error: true } brouille les clients et le monitoring.", en: "Returning 200 with { error: true } confuses clients and monitoring." },
        calloutKind: "mistake",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Codes et erreurs » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Status codes and errors” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Serveur et routes, même simple.", en: "Start from an example related to Server and routes, even a simple one." },
        },
      },
      {
        id: "web-server-routes-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "API blog : liste des posts, détail par id, création. Un mini défi (GET liste, GET par id, POST création) ancre le modèle. Écris d’abord le contrat, puis le code. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Blog API: list posts, detail by id, create. A mini challenge (GET list, GET by id, POST create) anchors the model. Write the contract first, then the code. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Serveur et routes que cette idée explique.", en: "Name a real symptom related to Server and routes that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de Serveur et routes : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of Server and routes: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Quelles méthodes et chemins proposerais-tu ?", en: "Which methods and paths would you propose?" },
          hint: { fr: "GET /posts, GET /posts/:id, POST /posts.", en: "GET /posts, GET /posts/:id, POST /posts." },
        },
      },
      {
        id: "web-server-routes-extra1",
        title: { fr: "Contrat de route avant le code", en: "Route contract before code" },
        body: {
          fr: "Pour chaque endpoint, note méthode, chemin, entrées, sorties et codes. Cet exercice court aligne frontend et backend et réduit les allers-retours. C’est aussi une excellente base de tests. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "For each endpoint, note method, path, inputs, outputs, and codes. This short exercise aligns frontend and backend and reduces back-and-forth. It is also an excellent testing base. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "À retenir : « Contrat de route avant le code » conditionne souvent la suite de Serveur et routes.", en: "Key takeaway: “Route contract before code” often shapes what follows in Server and routes." },
        calloutKind: "key",
        analogy: { fr: "Comme un menu de restaurant avant d’ouvrir la cuisine.", en: "Like a restaurant menu before opening the kitchen." },
      },
      {
        id: "web-server-routes-extra2",
        title: { fr: "Ordre des middlewares", en: "Middleware order" },
        body: {
          fr: "Un auth middleware placé trop tard laisse passer des requêtes dangereuses ; un parser trop tôt peut échouer sur certaines routes. Dessine le pipeline et teste les chemins d’erreur. L’ordre est une décision de sécurité autant que de design. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Auth middleware placed too late lets dangerous requests through; a parser too early may fail on some routes. Draw the pipeline and test error paths. Order is a security decision as much as a design one. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Attention : négliger « Ordre des middlewares » crée des bugs difficiles à classer.", en: "Warning: neglecting “Middleware order” creates bugs that are hard to classify." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Ordre des middlewares » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Middleware order” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Serveur et routes, même simple.", en: "Start from an example related to Server and routes, even a simple one." },
        },
      },
      {
        id: "web-server-routes-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "Un serveur écoute, route, applique des middlewares et répond. Params, query et corps alimentent les handlers. Codes et messages clairs, plus un pipeline ordonné, font une API maintenable. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "A server listens, routes, applies middleware, and responds. Params, query, and body feed handlers. Clear codes and messages, plus an ordered pipeline, make a maintainable API. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de serveur et routes.", en: "Remember the core of servers and routes." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de serveur et routes est ta boussole pour la suite.", en: "The summary of servers and routes is your compass for what comes next." },
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
      {
        term: { fr: "Route", en: "Route" },
        definition: {
          fr: "Association méthode + chemin vers un handler.",
          en: "Method + path mapping to a handler.",
        },
      },
      {
        term: { fr: "Middleware", en: "Middleware" },
        definition: {
          fr: "Fonction intercalée qui traite la requête en chaîne.",
          en: "Interleaved function that processes the request in a chain.",
        },
      },
    ],
    activities: [
      {
        id: "web-server-routes-q1",
        type: "multiple-choice",
        question: { fr: "Une route web associe surtout…", en: "A web route mainly maps…" },
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
        question: { fr: "GET /users/:id utilise…", en: "GET /users/:id uses…" },
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
        question: { fr: "Le middleware s'exécute…", en: "Middleware runs…" },
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
        question: { fr: "Fichier CSS dans /public est plutôt…", en: "A CSS file in /public is rather…" },
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
        question: { fr: "Route inconnue → code typique…", en: "Unknown route → typical code…" },
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
        question: { fr: "Renvoyer 200 avec une erreur métier…", en: "Returning 200 with a business error…" },
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
      {
        id: "web-server-routes-q100",
        type: "multiple-choice",
        question: { fr: "Que combine souvent une route ?", en: "What does a route often combine?" },
        options: [
          { fr: "Méthode HTTP et chemin", en: "HTTP method and path" },
          { fr: "Uniquement la couleur CSS", en: "Only CSS color" },
          { fr: "Le BIOS", en: "The BIOS" },
          { fr: "Un certificat papier", en: "A paper certificate" },
        ],
        correctAnswer: { fr: "Méthode HTTP et chemin", en: "HTTP method and path" },
        hint: { fr: "GET /users n’est pas POST /users.", en: "GET /users is not POST /users." },
        explanation: {
          fr: "La méthode et le chemin sélectionnent le handler.",
          en: "Method and path select the handler.",
        },
      },
      {
        id: "web-server-routes-q101",
        type: "multiple-choice",
        question: { fr: "Pourquoi l’ordre des middlewares compte-t-il ?", en: "Why does middleware order matter?" },
        options: [
          { fr: "Auth, parsing et logs doivent s’enchaîner correctement", en: "Auth, parsing, and logs must chain correctly" },
          { fr: "Parce que HTML l’interdit", en: "Because HTML forbids it" },
          { fr: "Parce que DNS trie les middlewares", en: "Because DNS sorts middleware" },
          { fr: "Parce que CSS dépend de l’ordre serveur", en: "Because CSS depends on server order" },
        ],
        correctAnswer: { fr: "Auth, parsing et logs doivent s’enchaîner correctement", en: "Auth, parsing, and logs must chain correctly" },
        hint: { fr: "Pense pipeline.", en: "Think pipeline." },
        explanation: {
          fr: "Mal ordonner expose des failles ou des req.body vides.",
          en: "Bad order exposes flaws or empty req.body.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes serveurs web et routage : ports, routes, middleware, statique/dynamique. Donne des exemples Express simples. Fais écrire le contrat d’une route avant d’imaginer le code.",
        en: "You teach web servers and routing: ports, routes, middleware, static/dynamic. Give simple Express examples. Have them write a route contract before imagining the code.",
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
      fr: "Apprends les idées REST : ressources, collections, JSON, idempotence, codes utiles, pagination et versioning. Tu sauras designer des endpoints prévisibles pour les clients web et mobiles.",
      en: "Learn REST ideas: resources, collections, JSON, idempotency, useful codes, pagination, and versioning. You will design predictable endpoints for web and mobile clients.",
    },
    icon: "network",
    estimatedMinutes: 24,
    xpReward: 30,
    goals: [
      {
        description: { fr: "Modéliser des ressources et collections", en: "Model resources and collections" },
        xpReward: 8,
      },
      {
        description: { fr: "Choisir verbes et codes adaptés", en: "Choose fitting verbs and status codes" },
        xpReward: 9,
      },
      {
        description: { fr: "Concevoir des réponses JSON claires", en: "Design clear JSON responses" },
        xpReward: 8,
      },
      {
        description: { fr: "Proposer des endpoints REST cohérents pour une ressource simple", en: "Propose coherent REST endpoints for a simple resource" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-rest-api-s1",
        title: { fr: "REST en une idée", en: "REST in one idea" },
        body: {
          fr: "REST organise l'API autour de ressources identifiées par des URLs. On manipule l'état avec les verbes HTTP standard plutôt que des actions RPC obscures. REST organise l’API autour de ressources nommées, pas d’actions verbales aléatoires. Des URLs stables simplifient clients et caches. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "REST organizes the API around resources identified by URLs. You manipulate state with standard HTTP verbs rather than obscure RPC actions. REST organizes the API around named resources, not random verbal actions. Stable URLs simplify clients and caches. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « REST en une idée » change concrètement dans ton debug ou ton code.", en: "Remember what “REST in one idea” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à API REST que cette idée explique.", en: "Name a real symptom related to REST API that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "rest-api",
        callout: { fr: "Pense noms (ressources), pas seulement verbes métier dans l'URL.", en: "Think nouns (resources), not only business verbs in the URL." },
        calloutKind: "key",
        analogy: { fr: "Pense à « REST en une idée » comme un panneau indicateur sur la route de API REST : il oriente avant d’accélérer.", en: "Think of “REST in one idea” as a road sign on the path of REST API: it orients you before you speed up." },
      },
      {
        id: "web-rest-api-s2",
        title: { fr: "Collections et éléments", en: "Collections and items" },
        body: {
          fr: "/orders pour la collection, /orders/42 pour un élément. Les sous-ressources (/orders/42/items) restent possibles avec parcimonie. Collections au pluriel et éléments avec id forment un pattern lisible. GET /orders et GET /orders/12 racontent déjà une histoire. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "/orders for the collection, /orders/42 for an item. Sub-resources (/orders/42/items) are fine in moderation. Plural collections and items with ids form a readable pattern. GET /orders and GET /orders/12 already tell a story. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "GET collection : liste (souvent paginée)", en: "GET collection: list (often paginated)" },
          { fr: "POST collection : créer", en: "POST collection: create" },
          { fr: "GET/PATCH/DELETE item : lire/maj/supprimer", en: "GET/PATCH/DELETE item: read/update/delete" },
        ],
        callout: { fr: "/getUsers ou /createOrder dans le chemin casse le style REST.", en: "/getUsers or /createOrder in the path breaks REST style." },
        calloutKind: "mistake",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Collections et éléments » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Collections and items” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à API REST, même simple.", en: "Start from an example related to REST API, even a simple one." },
        },
      },
      {
        id: "web-rest-api-s3",
        title: { fr: "JSON comme contrat", en: "JSON as contract" },
        body: {
          fr: "Content-Type: application/json. Des champs stables, une doc claire, et des erreurs structurées aident les clients. JSON est le contrat le plus courant. Des noms de champs stables et des types cohérents évitent de casser les apps clientes. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Content-Type: application/json. Stable fields, clear docs, and structured errors help clients. JSON is the most common contract. Stable field names and consistent types avoid breaking client apps. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « JSON comme contrat » change concrètement dans ton debug ou ton code.", en: "Remember what “JSON as contract” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à API REST que cette idée explique.", en: "Name a real symptom related to REST API that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « JSON comme contrat » crée des bugs difficiles à classer.", en: "Warning: neglecting “JSON as contract” creates bugs that are hard to classify." },
        calloutKind: "warning",
        codeExample: {
          language: "json",
          code: "{\n  \"id\": 42,\n  \"email\": \"ada@example.com\",\n  \"role\": \"admin\"\n}",
          caption: { fr: "Ressource user typique.", en: "Typical user resource." },
        },
        analogy: { fr: "Pense à « JSON comme contrat » comme un panneau indicateur sur la route de API REST : il oriente avant d’accélérer.", en: "Think of “JSON as contract” as a road sign on the path of REST API: it orients you before you speed up." },
      },
      {
        id: "web-rest-api-s4",
        title: { fr: "Idempotence", en: "Idempotency" },
        body: {
          fr: "GET, PUT, DELETE sont idéalement idempotents : les rejouer ne crée pas d'effet surprise. POST crée souvent une nouvelle ressource à chaque appel. PUT et DELETE idempotents rassurent les retries réseau. POST de création ne l’est souvent pas : documente le comportement. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "GET, PUT, DELETE are ideally idempotent: replaying them shouldn't surprise. POST often creates a new resource each call. Idempotent PUT and DELETE reassure network retries. Creation POST often is not: document the behavior. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Idempotence » change concrètement dans ton debug ou ton code.", en: "Remember what “Idempotency” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à API REST que cette idée explique.", en: "Name a real symptom related to REST API that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Erreur fréquente : confondre « Idempotence » avec un détail cosmétique.", en: "Common mistake: treating “Idempotency” as a cosmetic detail." },
        calloutKind: "mistake",
        analogy: { fr: "Lire une page deux fois (GET) ne change pas le livre ; envoyer deux fois le même bon de commande (POST) peut doubler la commande.", en: "Reading a page twice (GET) doesn't change the book; submitting the same order twice (POST) may duplicate it." },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Idempotence » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Idempotency” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à API REST, même simple.", en: "Start from an example related to REST API, even a simple one." },
        },
      },
      {
        id: "web-rest-api-s5",
        title: { fr: "Codes utiles", en: "Useful status codes" },
        body: {
          fr: "200 OK, 201 Created, 204 No Content, 400 Bad Request, 401/403, 404, 409 Conflict, 500. Choisis-les avec intention. 201 à la création, 204 parfois sans corps, 404 si absent : les codes font partie du contrat. Ne masque pas tout derrière 200. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "200 OK, 201 Created, 204 No Content, 400 Bad Request, 401/403, 404, 409 Conflict, 500. Choose them intentionally. 201 on create, sometimes 204 with no body, 404 if missing: codes are part of the contract. Do not hide everything behind 200. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Codes utiles » change concrètement dans ton debug ou ton code.", en: "Remember what “Useful status codes” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à API REST que cette idée explique.", en: "Name a real symptom related to REST API that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "request-lifecycle",
        callout: { fr: "201 + header Location après une création est une excellente habitude.", en: "201 + Location header after creation is an excellent habit." },
        calloutKind: "tip",
        analogy: { fr: "Pense à « Codes utiles » comme un panneau indicateur sur la route de API REST : il oriente avant d’accélérer.", en: "Think of “Useful status codes” as a road sign on the path of REST API: it orients you before you speed up." },
      },
      {
        id: "web-rest-api-s6",
        title: { fr: "Versioning et pagination", en: "Versioning and pagination" },
        body: {
          fr: "Préfixe /v1 ou header de version. Limit/offset ou curseurs pour les listes. Documente les breaking changes. Pagination et versioning protègent perf et évolution. Prévois limit/offset ou curseurs avant que la liste explose. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "/v1 prefix or version header. Limit/offset or cursors for lists. Document breaking changes. Pagination and versioning protect performance and evolution. Plan limit/offset or cursors before the list explodes. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Ne renvoie pas 100k lignes d'un coup", en: "Don't return 100k rows at once" },
          { fr: "Stable : évite de renommer des champs à la légère", en: "Stability: avoid casually renaming fields" },
          { fr: "HATEOAS optionnel ; clarté d'abord", en: "HATEOAS optional; clarity first" },
        ],
        callout: { fr: "Changer le type d'un champ sans version casserait les apps clientes.", en: "Changing a field's type without versioning would break client apps." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Versioning et pagination » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Versioning and pagination” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à API REST, même simple.", en: "Start from an example related to REST API, even a simple one." },
        },
      },
      {
        id: "web-rest-api-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "API librairie : livres et emprunts. Dessine le CRUD d’une ressource « notes » ou « tâches ». Ce mini design révèle ambiguïtés avant le code. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Library API: books and loans. Sketch CRUD for a “notes” or “tasks” resource. This mini design reveals ambiguity before code. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à API REST que cette idée explique.", en: "Name a real symptom related to REST API that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de API REST : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of REST API: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Propose 4 endpoints REST cohérents.", en: "Propose 4 coherent REST endpoints." },
          hint: { fr: "GET/POST /books, GET /books/:id, POST /loans…", en: "GET/POST /books, GET /books/:id, POST /loans…" },
        },
      },
      {
        id: "web-rest-api-extra1",
        title: { fr: "Ressources versus actions", en: "Resources versus actions" },
        body: {
          fr: "Préfère /users/42/activate seulement si nécessaire ; souvent un champ status mis à jour via PATCH suffit. Trop d’actions verbales rendent l’API difficile à découvrir. Cherche d’abord le nom de la ressource. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Prefer /users/42/activate only when needed; often a status field updated via PATCH is enough. Too many verbal actions make the API hard to discover. First seek the resource name. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Ressources versus actions » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Resources versus actions” out loud in 20 seconds." },
        calloutKind: "tip",
        analogy: { fr: "Nomme les noms, pas seulement les verbes.", en: "Name the nouns, not only the verbs." },
      },
      {
        id: "web-rest-api-extra2",
        title: { fr: "Compatibilité clients", en: "Client compatibility" },
        body: {
          fr: "Changer un champ JSON sans version peut casser mobile et web. Ajoute des champs, déprécie lentement, versionne si tu casses. Communique le contrat comme un produit, pas un détail interne. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Changing a JSON field without versioning can break mobile and web. Add fields, deprecate slowly, version if you break. Communicate the contract as a product, not an internal detail. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Attention : négliger « Compatibilité clients » crée des bugs difficiles à classer.", en: "Warning: neglecting “Client compatibility” creates bugs that are hard to classify." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Compatibilité clients » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Client compatibility” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à API REST, même simple.", en: "Start from an example related to REST API, even a simple one." },
        },
      },
      {
        id: "web-rest-api-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "REST centre l’API sur des ressources, des méthodes HTTP et JSON. Idempotence, codes justes, pagination et versioning rendent le contrat durable. Un design clair réduit les frictions frontend-backend. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "REST centers the API on resources, HTTP methods, and JSON. Idempotency, fair status codes, pagination, and versioning make the contract durable. Clear design reduces frontend-backend friction. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de les APIs REST.", en: "Remember the core of REST APIs." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de les APIs REST est ta boussole pour la suite.", en: "The summary of REST APIs is your compass for what comes next." },
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
      {
        term: { fr: "Ressource", en: "Resource" },
        definition: {
          fr: "Entité exposée par l’API, souvent avec un id.",
          en: "Entity exposed by the API, often with an id.",
        },
      },
      {
        term: { fr: "Pagination", en: "Pagination" },
        definition: {
          fr: "Découper une grande collection en pages.",
          en: "Splitting a large collection into pages.",
        },
      },
    ],
    activities: [
      {
        id: "web-rest-api-q1",
        type: "multiple-choice",
        question: { fr: "En REST, une URL représente surtout…", en: "In REST, a URL mainly represents…" },
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
        question: { fr: "Créer une ressource se fait souvent avec…", en: "Creating a resource is often done with…" },
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
        question: { fr: "201 signifie…", en: "201 means…" },
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
        question: { fr: "/createUser dans le path…", en: "/createUser in the path…" },
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
        question: { fr: "GET devrait être…", en: "GET should be…" },
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
        question: { fr: "La pagination sert à…", en: "Pagination is for…" },
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
      {
        id: "web-rest-api-q100",
        type: "multiple-choice",
        question: { fr: "Quelle URL est la plus « REST » pour une commande 12 ?", en: "Which URL is most “REST-like” for order 12?" },
        options: [
          { fr: "GET /orders/12", en: "GET /orders/12" },
          { fr: "GET /getOrder?id=12&do=true", en: "GET /getOrder?id=12&do=true" },
          { fr: "GET /runSqlOrder", en: "GET /runSqlOrder" },
          { fr: "GET /css/order12", en: "GET /css/order12" },
        ],
        correctAnswer: { fr: "GET /orders/12", en: "GET /orders/12" },
        hint: { fr: "Ressource + id.", en: "Resource + id." },
        explanation: {
          fr: "Le chemin nomme la ressource et son identifiant.",
          en: "The path names the resource and its identifier.",
        },
      },
      {
        id: "web-rest-api-q101",
        type: "multiple-choice",
        question: { fr: "Pourquoi paginer une collection ?", en: "Why paginate a collection?" },
        options: [
          { fr: "Limiter charge et taille de réponse", en: "Limit load and response size" },
          { fr: "Supprimer HTTPS", en: "Remove HTTPS" },
          { fr: "Éviter JSON", en: "Avoid JSON" },
          { fr: "Remplacer le routage", en: "Replace routing" },
        ],
        correctAnswer: { fr: "Limiter charge et taille de réponse", en: "Limit load and response size" },
        hint: { fr: "Grosses listes en production.", en: "Large lists in production." },
        explanation: {
          fr: "Sans pagination, tu risques timeouts et clients saturés.",
          en: "Without pagination you risk timeouts and saturated clients.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes la conception d'API REST : ressources, verbes, JSON, codes, pagination. Corrige les URLs style RPC. Fais designer CRUD et codes avant d’écrire du pseudo-code.",
        en: "You teach REST API design: resources, verbs, JSON, codes, pagination. Correct RPC-style URLs. Have them design CRUD and status codes before writing pseudocode.",
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
      fr: "Distingue authentification et autorisation, compare sessions et JWT, et apprends claims, stockage et vérification côté API. Tu sécuriseras l’identité utilisateur sans confondre les mécanismes.",
      en: "Distinguish authentication from authorization, compare sessions and JWTs, and learn claims, storage, and API-side verification. You will secure user identity without mixing up the mechanisms.",
    },
    icon: "lock",
    estimatedMinutes: 25,
    xpReward: 31,
    goals: [
      {
        description: { fr: "Différencier session cookie et JWT", en: "Differentiate cookie session and JWT" },
        xpReward: 9,
      },
      {
        description: { fr: "Lire la structure header.payload.signature", en: "Read header.payload.signature structure" },
        xpReward: 8,
      },
      {
        description: { fr: "Appliquer expiration et stockage sûr", en: "Apply expiry and safe storage" },
        xpReward: 9,
      },
      {
        description: { fr: "Expliquer où vérifier un JWT et quels risques pose un mauvais stockage", en: "Explain where to verify a JWT and what risks bad storage creates" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-auth-jwt-s1",
        title: { fr: "Authentifier vs autoriser", en: "Authenticate vs authorize" },
        body: {
          fr: "Authn = prouver qui tu es. Authz = ce que tu as le droit de faire. Les deux sont liés mais distincts. S’authentifier dit qui tu es ; s’autoriser dit ce que tu as le droit de faire. Mélanger les deux produit des 401/403 confus et des failles. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Authn = prove who you are. Authz = what you're allowed to do. Related but distinct. Authentication says who you are; authorization says what you may do. Mixing them yields confusing 401/403s and security holes. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Authentifier vs autoriser » change concrètement dans ton debug ou ton code.", en: "Remember what “Authenticate vs authorize” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Auth et JWT que cette idée explique.", en: "Name a real symptom related to Auth and JWT that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Être connecté (authn) ne donne pas tous les droits admin (authz).", en: "Being logged in (authn) doesn't grant all admin rights (authz)." },
        calloutKind: "key",
        analogy: { fr: "Pense à « Authentifier vs autoriser » comme un panneau indicateur sur la route de Auth et JWT : il oriente avant d’accélérer.", en: "Think of “Authenticate vs authorize” as a road sign on the path of Auth and JWT: it orients you before you speed up." },
      },
      {
        id: "web-auth-jwt-s2",
        title: { fr: "Sessions classiques", en: "Classic sessions" },
        body: {
          fr: "Le serveur stocke la session ; le navigateur garde un cookie d'id. Simple à révoquer côté serveur. Les sessions classiques stockent l’état côté serveur. Simple à invalider, mais il faut partager ou centraliser l’état en multi-instances. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "The server stores the session; the browser keeps an id cookie. Easy to revoke server-side. Classic sessions store state on the server. Easy to invalidate, but you must share or centralize state across instances. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Cookie HttpOnly + Secure", en: "HttpOnly + Secure cookie" },
          { fr: "État côté serveur", en: "Server-side state" },
          { fr: "Logout = destruction session", en: "Logout = destroy session" },
        ],
        diagram: "jwt-flow",
        callout: { fr: "Astuce : après cette section, explique « Sessions classiques » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Classic sessions” out loud in 20 seconds." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Sessions classiques » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Classic sessions” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Auth et JWT, même simple.", en: "Start from an example related to Auth and JWT, even a simple one." },
        },
      },
      {
        id: "web-auth-jwt-s3",
        title: { fr: "JWT : jeton autonome", en: "JWT: self-contained token" },
        body: {
          fr: "Un JWT porte des claims signés. Le serveur vérifie la signature sans forcément relire une session en base (selon le design). Un JWT porte des claims signés. Le serveur vérifie la signature sans forcément relire une session, ce qui scale bien si tu gères expiration et révocation. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "A JWT carries signed claims. The server verifies the signature without necessarily reading a DB session (depending on design). A JWT carries signed claims. The server verifies the signature without necessarily reading a session, which scales well if you manage expiry and revocation. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « JWT : jeton autonome » change concrètement dans ton debug ou ton code.", en: "Remember what “JWT: self-contained token” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Auth et JWT que cette idée explique.", en: "Name a real symptom related to Auth and JWT that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « JWT : jeton autonome » crée des bugs difficiles à classer.", en: "Warning: neglecting “JWT: self-contained token” creates bugs that are hard to classify." },
        calloutKind: "warning",
        codeExample: {
          language: "text",
          code: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMifQ.signature",
          caption: { fr: "Trois parties encodées en Base64URL.", en: "Three Base64URL-encoded parts." },
        },
        analogy: { fr: "Comme un badge plastifié signé : on lit ton nom et le tampon ; on ne rappelle pas forcément l'accueil à chaque porte.", en: "Like a signed plastic badge: doors read your name and stamp; they may not call reception every time." },
      },
      {
        id: "web-auth-jwt-s4",
        title: { fr: "Claims utiles", en: "Useful claims" },
        body: {
          fr: "sub (sujet), exp (expiration), iat (émis à), iss/aud. N'y mets pas de secrets sensibles en clair. sub, exp et roles sont des claims fréquents. Ne fais jamais confiance à un JWT non vérifié ou expiré. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "sub (subject), exp (expiry), iat (issued at), iss/aud. Don't put sensitive secrets in cleartext. sub, exp, and roles are common claims. Never trust an unverified or expired JWT. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Claims utiles » change concrètement dans ton debug ou ton code.", en: "Remember what “Useful claims” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Auth et JWT que cette idée explique.", en: "Name a real symptom related to Auth and JWT that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Le payload JWT est encodé, pas chiffré : tout le monde peut le lire.", en: "The JWT payload is encoded, not encrypted: anyone can read it." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Claims utiles » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Useful claims” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Auth et JWT, même simple.", en: "Start from an example related to Auth and JWT, even a simple one." },
        },
      },
      {
        id: "web-auth-jwt-s5",
        title: { fr: "Où stocker le token ?", en: "Where to store the token?" },
        body: {
          fr: "localStorage est exposé au XSS. Cookies HttpOnly résistent mieux aux scripts. Short-lived access + refresh token est un pattern courant. localStorage est exposé au XSS ; les cookies HttpOnly résistent mieux à ce vol via JS. Chaque choix a des trade-offs CSRF/XSS. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "localStorage is exposed to XSS. HttpOnly cookies resist scripts better. Short-lived access + refresh token is a common pattern. localStorage is exposed to XSS; HttpOnly cookies resist that JS theft better. Each choice has CSRF/XSS trade-offs. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Où stocker le token ? » change concrètement dans ton debug ou ton code.", en: "Remember what “Where to store the token?” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Auth et JWT que cette idée explique.", en: "Name a real symptom related to Auth and JWT that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Mettre un JWT longue durée dans localStorage est une erreur fréquente.", en: "Putting a long-lived JWT in localStorage is a common mistake." },
        calloutKind: "mistake",
        analogy: { fr: "Pense à « Où stocker le token ? » comme un panneau indicateur sur la route de Auth et JWT : il oriente avant d’accélérer.", en: "Think of “Where to store the token?” as a road sign on the path of Auth and JWT: it orients you before you speed up." },
      },
      {
        id: "web-auth-jwt-s6",
        title: { fr: "Vérification côté API", en: "API-side verification" },
        body: {
          fr: "Chaque requête protégée envoie le token (Authorization: Bearer). Le middleware vérifie signature, exp et rôles. L’API doit vérifier signature, issuer et expiration à chaque requête protégée. Un middleware d’auth centralise cette discipline. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Each protected request sends the token (Authorization: Bearer). Middleware checks signature, exp, and roles. The API must verify signature, issuer, and expiry on every protected request. Auth middleware centralizes that discipline. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Vérification côté API » change concrètement dans ton debug ou ton code.", en: "Remember what “API-side verification” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Auth et JWT que cette idée explique.", en: "Name a real symptom related to Auth and JWT that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "jwt-flow",
        callout: { fr: "Toujours vérifier la signature avec une clé secrète/privée côté serveur.", en: "Always verify the signature with a server-side secret/private key." },
        calloutKind: "tip",
        codeExample: {
          language: "http",
          code: "GET /api/me HTTP/1.1\nAuthorization: Bearer eyJhbGciOi…",
          caption: { fr: "En-tête Bearer classique.", en: "Classic Bearer header." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Vérification côté API » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “API-side verification” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Auth et JWT, même simple.", en: "Start from an example related to Auth and JWT, even a simple one." },
        },
      },
      {
        id: "web-auth-jwt-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "App SPA + API : login renvoie access 15 min et refresh 7 jours. Scénarise login, accès /me et token expiré. Si tu racontes le flux clairement, tu es prêt à l’implémenter. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "SPA + API: login returns 15-min access and 7-day refresh. Scenario login, /me access, and expired token. If you can narrate the flow clearly, you are ready to implement it. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Auth et JWT que cette idée explique.", en: "Name a real symptom related to Auth and JWT that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de Auth et JWT : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of Auth and JWT: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Où stocker chaque token et que faire à expiration de l'access ?", en: "Where to store each token and what on access expiry?" },
          hint: { fr: "Refresh HttpOnly ; access mémoire ; renouveler via /refresh.", en: "Refresh HttpOnly; access in memory; renew via /refresh." },
        },
      },
      {
        id: "web-auth-jwt-extra1",
        title: { fr: "Authn versus authz", en: "Authn versus authz" },
        body: {
          fr: "Un utilisateur connecté qui touche /admin sans rôle doit recevoir 403, pas 401. Documente cette règle dans l’équipe. Des messages d’erreur justes guident le client sans révéler trop d’informations sensibles. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "A logged-in user hitting /admin without a role should get 403, not 401. Document that rule on the team. Fair error messages guide the client without revealing too much sensitive information. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "À retenir : « Authn versus authz » conditionne souvent la suite de Auth et JWT.", en: "Key takeaway: “Authn versus authz” often shapes what follows in Auth and JWT." },
        calloutKind: "key",
        analogy: { fr: "Badge d’entrée versus clés des salles.", en: "Entry badge versus room keys." },
      },
      {
        id: "web-auth-jwt-extra2",
        title: { fr: "Stockage du token", en: "Token storage" },
        body: {
          fr: "Si tu choisis localStorage, tu dois exceller contre XSS. Si tu choisis cookie de session, tu dois exceller contre CSRF. Il n’y a pas de choix magique : il y a un couple de risques à assumer et mitiger. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "If you choose localStorage, you must excel against XSS. If you choose a session cookie, you must excel against CSRF. There is no magic choice: there is a risk pair to own and mitigate. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Attention : négliger « Stockage du token » crée des bugs difficiles à classer.", en: "Warning: neglecting “Token storage” creates bugs that are hard to classify." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Stockage du token » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Token storage” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Auth et JWT, même simple.", en: "Start from an example related to Auth and JWT, even a simple one." },
        },
      },
      {
        id: "web-auth-jwt-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "Authentifier identifie ; autoriser permèt. Sessions et JWT résolvent l’état différemment. Vérifie toujours les tokens côté serveur et choisis le stockage en connaissance des risques XSS/CSRF. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Authentication identifies; authorization permits. Sessions and JWTs solve state differently. Always verify tokens on the server and choose storage knowing XSS/CSRF risks. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de auth et JWT.", en: "Remember the core of auth and JWT." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de auth et JWT est ta boussole pour la suite.", en: "The summary of auth and JWT is your compass for what comes next." },
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
      {
        term: { fr: "Claim", en: "Claim" },
        definition: {
          fr: "Information portée dans un JWT (sujet, expiration…).",
          en: "Information carried in a JWT (subject, expiry…).",
        },
      },
      {
        term: { fr: "HttpOnly", en: "HttpOnly" },
        definition: {
          fr: "Flag cookie qui empêche l’accès via JavaScript.",
          en: "Cookie flag that blocks access via JavaScript.",
        },
      },
    ],
    activities: [
      {
        id: "web-auth-jwt-q1",
        type: "multiple-choice",
        question: { fr: "Authentification signifie…", en: "Authentication means…" },
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
        question: { fr: "Un JWT a typiquement…", en: "A JWT typically has…" },
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
        question: { fr: "Le payload JWT est…", en: "The JWT payload is…" },
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
        question: { fr: "Stockage localStorage d'un JWT…", en: "localStorage storage of a JWT…" },
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
        question: { fr: "exp dans un JWT sert à…", en: "exp in a JWT is for…" },
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
        question: { fr: "Authorization: Bearer … envoie…", en: "Authorization: Bearer … sends…" },
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
      {
        id: "web-auth-jwt-q100",
        type: "multiple-choice",
        question: { fr: "Que doit faire l’API à chaque requête protégée avec JWT ?", en: "What must the API do on every JWT-protected request?" },
        options: [
          { fr: "Vérifier signature et expiration", en: "Verify signature and expiration" },
          { fr: "Faire confiance au client sans contrôle", en: "Trust the client with no check" },
          { fr: "Ignorer exp", en: "Ignore exp" },
          { fr: "Stocker le JWT dans le CSS", en: "Store the JWT in CSS" },
        ],
        correctAnswer: { fr: "Vérifier signature et expiration", en: "Verify signature and expiration" },
        hint: { fr: "Ne jamais faire confiance aveuglément.", en: "Never trust blindly." },
        explanation: {
          fr: "Sans vérification, n’importe qui peut forger des claims.",
          en: "Without verification, anyone can forge claims.",
        },
      },
      {
        id: "web-auth-jwt-q101",
        type: "multiple-choice",
        question: { fr: "Quel risque principal avec un token en localStorage ?", en: "What is the main risk of a token in localStorage?" },
        options: [
          { fr: "Vol via XSS si un script malveillant s’exécute", en: "Theft via XSS if malicious script runs" },
          { fr: "Le DNS le publie", en: "DNS publishes it" },
          { fr: "Flexbox le lit", en: "Flexbox reads it" },
          { fr: "TCP l’efface toujours", en: "TCP always erases it" },
        ],
        correctAnswer: { fr: "Vol via XSS si un script malveillant s’exécute", en: "Theft via XSS if malicious script runs" },
        hint: { fr: "JS peut lire localStorage.", en: "JS can read localStorage." },
        explanation: {
          fr: "Un XSS peut exfiltrer le token depuis localStorage.",
          en: "XSS can exfiltrate the token from localStorage.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes auth web : sessions, JWT, stockage, expiration. Insiste sur XSS et payload non chiffré. Fais toujours séparer authn/authz et discuter le stockage du token.",
        en: "You teach web auth: sessions, JWT, storage, expiry. Stress XSS and unencrypted payload. Always separate authn/authz and discuss token storage.",
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
      fr: "Vois pourquoi une app persiste des données, compare SQL et NoSQL, pratique le CRUD, et sécurise accès et requêtes contre l’injection. Tu relieras backend et stockage sans exposer de secrets.",
      en: "See why an app persists data, compare SQL and NoSQL, practice CRUD, and secure access and queries against injection. You will connect backend and storage without exposing secrets.",
    },
    icon: "layers",
    estimatedMinutes: 23,
    xpReward: 29,
    goals: [
      {
        description: { fr: "Situer le rôle de la DB derrière l'API", en: "Place the DB's role behind the API" },
        xpReward: 8,
      },
      {
        description: { fr: "Comparer SQL et NoSQL à haut niveau", en: "Compare SQL and NoSQL at a high level" },
        xpReward: 8,
      },
      {
        description: { fr: "Éviter les injections et fuites de secrets", en: "Avoid injections and secret leaks" },
        xpReward: 8,
      },
      {
        description: { fr: "Décrire un flux CRUD sécurisé entre API et base de données", en: "Describe a secure CRUD flow between API and database" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-databases-s1",
        title: { fr: "Pourquoi une base ?", en: "Why a database?" },
        body: {
          fr: "Les données doivent survivre aux redémarrages du serveur. La DB stocke utilisateurs, commandes, contenus de façon durable et interrogeable. Sans persistance, chaque redémarrage efface l’état utile. La base devient la mémoire durable de l’application. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Data must survive server restarts. The DB stores users, orders, content durably and queryably. Without persistence, every restart wipes useful state. The database becomes the app’s durable memory. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Pourquoi une base ? » change concrètement dans ton debug ou ton code.", en: "Remember what “Why a database?” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases de données web que cette idée explique.", en: "Name a real symptom related to Web databases that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "mvc-architecture",
        callout: { fr: "Le navigateur ne parle pas directement à la base : l'API s'interpose.", en: "The browser doesn't talk to the DB directly: the API sits in between." },
        calloutKind: "key",
        analogy: { fr: "Pense à « Pourquoi une base ? » comme un panneau indicateur sur la route de Bases de données web : il oriente avant d’accélérer.", en: "Think of “Why a database?” as a road sign on the path of Web databases: it orients you before you speed up." },
      },
      {
        id: "web-databases-s2",
        diagram: "client-server-web",
        title: { fr: "SQL en bref", en: "SQL in brief" },
        body: {
          fr: "Tables, lignes, relations (clés étrangères), transactions ACID. Excellent pour données structurées et jointures. SQL organise tables, relations et requêtes déclaratives. Il excelle quand le schéma est clair et les jointures fréquentes. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Tables, rows, relations (foreign keys), ACID transactions. Great for structured data and joins. SQL organizes tables, relations, and declarative queries. It shines when the schema is clear and joins are common. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « SQL en bref » change concrètement dans ton debug ou ton code.", en: "Remember what “SQL in brief” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases de données web que cette idée explique.", en: "Name a real symptom related to Web databases that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Astuce : après cette section, explique « SQL en bref » à voix haute en 20 secondes.", en: "Tip: after this section, explain “SQL in brief” out loud in 20 seconds." },
        calloutKind: "tip",
        codeExample: {
          language: "sql",
          code: "SELECT id, email FROM users WHERE id = $1;",
          caption: { fr: "Requête paramétrée (anti-injection).", en: "Parameterized query (anti-injection)." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « SQL en bref » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “SQL in brief” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases de données web, même simple.", en: "Start from an example related to Web databases, even a simple one." },
        },
      },
      {
        id: "web-databases-s3",
        title: { fr: "NoSQL en bref", en: "NoSQL in brief" },
        body: {
          fr: "Documents JSON, clé/valeur, colonnes larges… Souple pour schémas évolutifs, mais les jointures et transactions varient selon le moteur. NoSQL offre documents ou clés/valeurs flexibles. Utile pour des modèles évolutifs, avec d’autres trade-offs de cohérence. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "JSON documents, key/value, wide columns… Flexible for evolving schemas, but joins and transactions vary by engine. NoSQL offers flexible documents or key/value stores. Useful for evolving models, with different consistency trade-offs. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « NoSQL en bref » change concrètement dans ton debug ou ton code.", en: "Remember what “NoSQL in brief” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases de données web que cette idée explique.", en: "Name a real symptom related to Web databases that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « NoSQL en bref » crée des bugs difficiles à classer.", en: "Warning: neglecting “NoSQL in brief” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "SQL = classeurs tabulaires reliés ; document store = dossiers JSON empilés par besoin.", en: "SQL = linked tabular binders; document store = JSON folders stacked as needed." },
      },
      {
        id: "web-databases-s4",
        title: { fr: "CRUD", en: "CRUD" },
        body: {
          fr: "Create, Read, Update, Delete. L'API REST mappe souvent POST/GET/PATCH/DELETE sur ces opérations. Create, Read, Update, Delete structurent presque toute API de données. Mappe-les à des routes et transactions claires. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Create, Read, Update, Delete. REST APIs often map POST/GET/PATCH/DELETE onto these. Create, Read, Update, Delete structure almost every data API. Map them to clear routes and transactions. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Valide avant d'écrire", en: "Validate before writing" },
          { fr: "Transactions pour opérations multi-tables", en: "Transactions for multi-table ops" },
          { fr: "Index pour accélérer les lectures fréquentes", en: "Indexes to speed frequent reads" },
        ],
        callout: { fr: "Tout indexer « au cas où » ralentit les écritures.", en: "Indexing everything just in case slows writes." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « CRUD » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “CRUD” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases de données web, même simple.", en: "Start from an example related to Web databases, even a simple one." },
        },
      },
      {
        id: "web-databases-s5",
        title: { fr: "Secrets et accès", en: "Secrets and access" },
        body: {
          fr: "Credentials DB dans des variables d'environnement / vault, jamais dans le repo ni le frontend. Moindre privilège pour l'utilisateur SQL de l'app. Credentials hors du repo, comptes à moindre privilège, réseau privé : la hygiène d’accès évite des fuites catastrophiques. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "DB credentials in env vars / vault, never in the repo or frontend. Least privilege for the app's SQL user. Credentials out of the repo, least-privilege accounts, private network: access hygiene prevents catastrophic leaks. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Secrets et accès » change concrètement dans ton debug ou ton code.", en: "Remember what “Secrets and access” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases de données web que cette idée explique.", en: "Name a real symptom related to Web databases that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Exposer DATABASE_URL dans le bundle JS client est une faille grave.", en: "Exposing DATABASE_URL in the client JS bundle is a severe flaw." },
        calloutKind: "mistake",
        analogy: { fr: "Pense à « Secrets et accès » comme un panneau indicateur sur la route de Bases de données web : il oriente avant d’accélérer.", en: "Think of “Secrets and access” as a road sign on the path of Web databases: it orients you before you speed up." },
      },
      {
        id: "web-databases-s6",
        title: { fr: "Injections SQL", en: "SQL injection" },
        body: {
          fr: "Concaténer des entrées utilisateur dans du SQL permet de détourner la requête. Utilise paramètres / ORM / requêtes préparées. Les requêtes paramétrées (ou ORM sûrs) bloquent l’injection SQL. Ne construis jamais une requête par collage de texte utilisateur. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Concatenating user input into SQL lets attackers hijack the query. Use parameters / ORM / prepared statements. Parameterized queries (or safe ORMs) block SQL injection. Never build a query by pasting user text. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Injections SQL » change concrètement dans ton debug ou ton code.", en: "Remember what “SQL injection” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases de données web que cette idée explique.", en: "Name a real symptom related to Web databases that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "client-server",
        callout: { fr: "\"SELECT * FROM users WHERE id = \" + userInput est dangereux.", en: "\"SELECT * FROM users WHERE id = \" + userInput is dangerous." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Injections SQL » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “SQL injection” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases de données web, même simple.", en: "Start from an example related to Web databases, even a simple one." },
        },
      },
      {
        id: "web-databases-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Table users (id, email, password_hash) et table posts (id, author_id, title). Parcours mentalement création d’un utilisateur et lecture de son profil. Où valider ? Où hasher le mot de passe ? Où logger ? Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "users table (id, email, password_hash) and posts (id, author_id, title). Mentally walk creating a user and reading a profile. Where to validate? Where to hash the password? Where to log? Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Bases de données web que cette idée explique.", en: "Name a real symptom related to Web databases that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de Bases de données web : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of Web databases: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Quelle clé relie posts à users ? Pourquoi hasher le mot de passe ?", en: "Which key links posts to users? Why hash the password?" },
          hint: { fr: "author_id → users.id ; jamais stocker le mot de passe en clair.", en: "author_id → users.id; never store plaintext passwords." },
        },
      },
      {
        id: "web-databases-extra1",
        title: { fr: "Secrets et connexions", en: "Secrets and connections" },
        body: {
          fr: "La chaîne de connexion vit dans des variables d’environnement ou un secret manager, jamais dans le frontend ni un commit public. Limite les droits SQL au minimum nécessaire. En cas de fuite, tu réduis le rayon d’explosion. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "The connection string lives in environment variables or a secret manager, never in the frontend or a public commit. Limit SQL rights to the minimum needed. If leaked, you reduce blast radius. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Attention : négliger « Secrets et connexions » crée des bugs difficiles à classer.", en: "Warning: neglecting “Secrets and connections” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Donne une clé de chambre, pas le passe du building entier.", en: "Give a room key, not the whole building pass." },
      },
      {
        id: "web-databases-extra2",
        title: { fr: "Paramétrer pour survivre", en: "Parameterize to survive" },
        body: {
          fr: "Dès qu’une entrée utilisateur entre dans une requête, utilise des paramètres liés. Les exercices d’injection montrent à quel point un guillemet peut tout faire basculer. Cette discipline est non négociable en production. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "As soon as user input enters a query, use bound parameters. Injection drills show how one quote can tip everything. That discipline is non-negotiable in production. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Erreur fréquente : confondre « Paramétrer pour survivre » avec un détail cosmétique.", en: "Common mistake: treating “Parameterize to survive” as a cosmetic detail." },
        calloutKind: "mistake",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Paramétrer pour survivre » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Parameterize to survive” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Bases de données web, même simple.", en: "Start from an example related to Web databases, even a simple one." },
        },
      },
      {
        id: "web-databases-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "Les bases persistent l’état métier. SQL et NoSQL offrent des modèles différents pour le même besoin de CRUD. Protège credentials, valide les entrées et paramètre les requêtes pour éviter l’injection. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Databases persist business state. SQL and NoSQL offer different models for the same CRUD need. Protect credentials, validate inputs, and parameterize queries to avoid injection. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de les bases de données web.", en: "Remember the core of web databases." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de les bases de données web est ta boussole pour la suite.", en: "The summary of web databases is your compass for what comes next." },
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
      {
        term: { fr: "CRUD", en: "CRUD" },
        definition: {
          fr: "Create, Read, Update, Delete : opérations de base.",
          en: "Create, Read, Update, Delete: basic operations.",
        },
      },
      {
        term: { fr: "Requête paramétrée", en: "Parameterized query" },
        definition: {
          fr: "Requête où les valeurs sont liées, pas concaténées.",
          en: "Query where values are bound, not concatenated.",
        },
      },
    ],
    activities: [
      {
        id: "web-databases-q1",
        type: "multiple-choice",
        question: { fr: "Le navigateur doit accéder à la DB…", en: "The browser should access the DB…" },
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
        question: { fr: "SQL convient bien aux…", en: "SQL fits well for…" },
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
        question: { fr: "CRUD signifie…", en: "CRUD means…" },
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
        question: { fr: "Concaténer userInput dans du SQL…", en: "Concatenating userInput into SQL…" },
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
        question: { fr: "Les credentials DB vont…", en: "DB credentials go…" },
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
        question: { fr: "Un index sert surtout à…", en: "An index mainly…" },
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
      {
        id: "web-databases-q100",
        type: "multiple-choice",
        question: { fr: "Comment éviter l’injection SQL de base ?", en: "How do you avoid basic SQL injection?" },
        options: [
          { fr: "Utiliser des requêtes paramétrées / ORM sûrs", en: "Use parameterized queries / safe ORMs" },
          { fr: "Concaténer l’entrée utilisateur dans la requête", en: "Concatenate user input into the query" },
          { fr: "Désactiver HTTPS", en: "Disable HTTPS" },
          { fr: "Mettre le mot de passe DB dans le JS public", en: "Put the DB password in public JS" },
        ],
        correctAnswer: { fr: "Utiliser des requêtes paramétrées / ORM sûrs", en: "Use parameterized queries / safe ORMs" },
        hint: { fr: "Ne jamais coller du texte brut dans SQL.", en: "Never paste raw text into SQL." },
        explanation: {
          fr: "Les paramètres séparant code et données bloquent l’injection classique.",
          en: "Parameters separating code and data block classic injection.",
        },
      },
      {
        id: "web-databases-q101",
        type: "multiple-choice",
        question: { fr: "Où placer le mot de passe de la base ?", en: "Where should the database password live?" },
        options: [
          { fr: "Secrets serveur / variables d’environnement", en: "Server secrets / environment variables" },
          { fr: "Dans le dépôt Git public", en: "In the public Git repo" },
          { fr: "Dans le HTML commenté", en: "In HTML comments" },
          { fr: "Dans l’URL du navigateur", en: "In the browser URL" },
        ],
        correctAnswer: { fr: "Secrets serveur / variables d’environnement", en: "Server secrets / environment variables" },
        hint: { fr: "Jamais côté client ni en clair dans Git.", en: "Never on the client or plain in Git." },
        explanation: {
          fr: "Seuls les processus serveur de confiance doivent lire ce secret.",
          en: "Only trusted server processes should read that secret.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes les bases de données pour le web : SQL/NoSQL, CRUD, sécurité d'accès et anti-injection. Reste accessible. Relie toujours CRUD, secrets et requêtes paramétrées aux exemples.",
        en: "You teach databases for the web: SQL/NoSQL, CRUD, access security, and anti-injection. Stay approachable. Always tie CRUD, secrets, and parameterized queries to examples.",
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
      fr: "Comprends l’origine (schéma, hôte, port), le rôle de CORS, les en-têtes clés, et les cookies avec leurs flags de sécurité. Tu débloqueras des appels cross-origin sans affaiblir la posture de sécurité.",
      en: "Understand origin (scheme, host, port), CORS’s role, key headers, and cookies with security flags. You will unblock cross-origin calls without weakening security posture.",
    },
    icon: "shield",
    estimatedMinutes: 23,
    xpReward: 30,
    goals: [
      {
        description: { fr: "Expliquer la same-origin policy", en: "Explain the same-origin policy" },
        xpReward: 8,
      },
      {
        description: { fr: "Configurer CORS sans Access-Control-Allow-Origin: * dangereux", en: "Configure CORS without unsafe *" },
        xpReward: 9,
      },
      {
        description: { fr: "Choisir les flags cookies adaptés", en: "Choose appropriate cookie flags" },
        xpReward: 8,
      },
      {
        description: { fr: "Expliquer pourquoi le navigateur bloque un appel cross-origin et comment CORS répond", en: "Explain why the browser blocks a cross-origin call and how CORS answers" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-cors-cookies-s1",
        title: { fr: "Origine = schéma + hôte + port", en: "Origin = scheme + host + port" },
        body: {
          fr: "https://app.com:443 et https://api.app.com sont des origines différentes. La same-origin policy limite les lectures cross-origin dangereuses. Deux URLs diffèrent d’origine si schéma, hôte ou port changent. Cette règle simple sous-tend SOP et CORS. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "https://app.com:443 and https://api.app.com are different origins. The same-origin policy limits dangerous cross-origin reads. Two URLs differ in origin if scheme, host, or port change. That simple rule underpins SOP and CORS. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Origine = schéma + hôte + port » change concrètement dans ton debug ou ton code.", en: "Remember what “Origin = scheme + host + port” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à CORS et cookies que cette idée explique.", en: "Name a real symptom related to CORS and cookies that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "cors",
        callout: { fr: "Charger une image cross-origin ≠ lire sa réponse JS librement.", en: "Loading a cross-origin image ≠ freely reading its response in JS." },
        calloutKind: "key",
        analogy: { fr: "Pense à « Origine = schéma + hôte + port » comme un panneau indicateur sur la route de CORS et cookies : il oriente avant d’accélérer.", en: "Think of “Origin = scheme + host + port” as a road sign on the path of CORS and cookies: it orients you before you speed up." },
      },
      {
        id: "web-cors-cookies-s2",
        title: { fr: "Pourquoi CORS ?", en: "Why CORS?" },
        body: {
          fr: "CORS est un mécanisme navigateur : le serveur annonce quelles origines peuvent lire la réponse via JS. Ce n'est pas un firewall serveur universel. CORS n’est pas un firewall serveur : c’est une politique navigateur pour JS. Un attaquant hors navigateur n’est pas « arrêté » par CORS seul. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "CORS is a browser mechanism: the server announces which origins may read the response via JS. It is not a universal server firewall. CORS is not a server firewall: it is a browser policy for JS. An attacker outside the browser is not “stopped” by CORS alone. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Pourquoi CORS ? » change concrètement dans ton debug ou ton code.", en: "Remember what “Why CORS?” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à CORS et cookies que cette idée explique.", en: "Name a real symptom related to CORS and cookies that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "curl ignore CORS : protéger l'API reste nécessaire (auth, validation).", en: "curl ignores CORS: you still need API protection (auth, validation)." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Pourquoi CORS ? » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Why CORS?” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à CORS et cookies, même simple.", en: "Start from an example related to CORS and cookies, even a simple one." },
        },
      },
      {
        id: "web-cors-cookies-s3",
        title: { fr: "En-têtes clés", en: "Key headers" },
        body: {
          fr: "Access-Control-Allow-Origin, Methods, Headers, Credentials. Les requêtes « complex » déclenchent un preflight OPTIONS. Access-Control-Allow-Origin et les préflights OPTIONS orchestrent l’autorisation visible au navigateur. Configure-les au plus strict utile. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Access-Control-Allow-Origin, Methods, Headers, Credentials. “Complex” requests trigger an OPTIONS preflight. Access-Control-Allow-Origin and OPTIONS preflights orchestrate what the browser allows. Configure them as strict as useful. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « En-têtes clés » change concrètement dans ton debug ou ton code.", en: "Remember what “Key headers” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à CORS et cookies que cette idée explique.", en: "Name a real symptom related to CORS and cookies that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Allow-Origin: * incompatible avec Allow-Credentials: true.", en: "Allow-Origin: * is incompatible with Allow-Credentials: true." },
        calloutKind: "mistake",
        codeExample: {
          language: "http",
          code: "Access-Control-Allow-Origin: https://app.example.com\nAccess-Control-Allow-Credentials: true",
          caption: { fr: "Origine explicite + credentials.", en: "Explicit origin + credentials." },
        },
        analogy: { fr: "Pense à « En-têtes clés » comme un panneau indicateur sur la route de CORS et cookies : il oriente avant d’accélérer.", en: "Think of “Key headers” as a road sign on the path of CORS and cookies: it orients you before you speed up." },
      },
      {
        id: "web-cors-cookies-s4",
        title: { fr: "Cookies : mémoire du navigateur", en: "Cookies: browser memory" },
        body: {
          fr: "Le navigateur renvoie automatiquement les cookies selon domaine/chemin. Idéal pour sessions, dangereux si mal configurés. Les cookies stockent de l’état côté navigateur envoyé aux origines autorisées. Ils alimentent sessions et préférences. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "The browser auto-sends cookies by domain/path. Great for sessions, dangerous if misconfigured. Cookies store browser-side state sent to allowed origins. They power sessions and preferences. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Cookies : mémoire du navigateur » change concrètement dans ton debug ou ton code.", en: "Remember what “Cookies: browser memory” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à CORS et cookies que cette idée explique.", en: "Name a real symptom related to CORS and cookies that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Erreur fréquente : confondre « Cookies : mémoire du navigateur » avec un détail cosmétique.", en: "Common mistake: treating “Cookies: browser memory” as a cosmetic detail." },
        calloutKind: "mistake",
        analogy: { fr: "Comme un ticket de vestiaire collé au poignet : présenté sans que tu le ressaisisses à chaque porte.", en: "Like a wrist cloakroom ticket: shown without you retyping it at every door." },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Cookies : mémoire du navigateur » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Cookies: browser memory” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à CORS et cookies, même simple.", en: "Start from an example related to CORS and cookies, even a simple one." },
        },
      },
      {
        id: "web-cors-cookies-s5",
        title: { fr: "Flags de sécurité", en: "Security flags" },
        body: {
          fr: "Secure (HTTPS only), HttpOnly (pas de JS), SameSite (Lax/Strict/None) réduisent vol et CSRF. Secure, HttpOnly et SameSite réduisent vol et CSRF. Choisis SameSite selon tes besoins cross-site réels. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Secure (HTTPS only), HttpOnly (no JS), SameSite (Lax/Strict/None) reduce theft and CSRF. Secure, HttpOnly, and SameSite reduce theft and CSRF. Choose SameSite according to real cross-site needs. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Secure : jamais en HTTP clair", en: "Secure: never on clear HTTP" },
          { fr: "HttpOnly : mitige XSS cookie theft", en: "HttpOnly: mitigates XSS cookie theft" },
          { fr: "SameSite=Lax : bon défaut moderne", en: "SameSite=Lax: good modern default" },
        ],
        callout: { fr: "SameSite=None exige Secure.", en: "SameSite=None requires Secure." },
        calloutKind: "tip",
        analogy: { fr: "Pense à « Flags de sécurité » comme un panneau indicateur sur la route de CORS et cookies : il oriente avant d’accélérer.", en: "Think of “Security flags” as a road sign on the path of CORS and cookies: it orients you before you speed up." },
      },
      {
        id: "web-cors-cookies-s6",
        title: { fr: "Credentials cross-origin", en: "Cross-origin credentials" },
        body: {
          fr: "fetch(..., { credentials: 'include' }) + CORS credentials côté serveur. Whitelist d'origines précises. credentials: 'include' exige une config CORS compatible. Wildcard * avec credentials est refusé : sois explicite sur l’origine. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "fetch(..., { credentials: 'include' }) + CORS credentials server-side. Whitelist precise origins. credentials: 'include' needs a compatible CORS config. Wildcard * with credentials is rejected: be explicit about the origin. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Credentials cross-origin » change concrètement dans ton debug ou ton code.", en: "Remember what “Cross-origin credentials” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à CORS et cookies que cette idée explique.", en: "Name a real symptom related to CORS and cookies that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "cors",
        callout: { fr: "Astuce : après cette section, explique « Credentials cross-origin » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Cross-origin credentials” out loud in 20 seconds." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Credentials cross-origin » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Cross-origin credentials” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à CORS et cookies, même simple.", en: "Start from an example related to CORS and cookies, even a simple one." },
        },
      },
      {
        id: "web-cors-cookies-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "SPA sur app.com, API sur api.com, cookie de session. Reproduis mentalement un front :3000 qui appelle api:8080. Quels en-têtes manquent si ça échoue ? Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "SPA on app.com, API on api.com, session cookie. Mentally reproduce a front on :3000 calling api:8080. Which headers are missing if it fails? Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à CORS et cookies que cette idée explique.", en: "Name a real symptom related to CORS and cookies that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de CORS et cookies : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of CORS and cookies: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Quels en-têtes CORS et flags cookie choisir ?", en: "Which CORS headers and cookie flags would you choose?" },
          hint: { fr: "Origin exacte, credentials true, Secure+HttpOnly+SameSite.", en: "Exact origin, credentials true, Secure+HttpOnly+SameSite." },
        },
      },
      {
        id: "web-cors-cookies-extra1",
        title: { fr: "CORS ne sécurise pas tout", en: "CORS does not secure everything" },
        body: {
          fr: "Même avec CORS parfait, ton API doit authentifier et autoriser. CORS protège surtout le navigateur de l’utilisateur contre des lectures JS abusives cross-origin. Ne le prends pas pour une défense serveur complète. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Even with perfect CORS, your API must authenticate and authorize. CORS mainly protects the user’s browser from abusive cross-origin JS reads. Do not treat it as complete server defense. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Attention : négliger « CORS ne sécurise pas tout » crée des bugs difficiles à classer.", en: "Warning: neglecting “CORS does not secure everything” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Un digicode d’immeuble n’empêche pas un livreur d’entrer autrement.", en: "A building keypad does not stop a courier entering another way." },
      },
      {
        id: "web-cors-cookies-extra2",
        title: { fr: "Flags cookies essentiels", en: "Essential cookie flags" },
        body: {
          fr: "Secure limite aux HTTPS, HttpOnly bloque JS, SameSite contrôle l’envoi cross-site. Ensemble ils ferment des classes entières d’attaques courantes. Vérifie-les dès que tu poses une session cookie. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Secure limits to HTTPS, HttpOnly blocks JS, SameSite controls cross-site sending. Together they close whole classes of common attacks. Check them as soon as you set a session cookie. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "À retenir : « Flags cookies essentiels » conditionne souvent la suite de CORS et cookies.", en: "Key takeaway: “Essential cookie flags” often shapes what follows in CORS and cookies." },
        calloutKind: "key",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Flags cookies essentiels » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Essential cookie flags” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à CORS et cookies, même simple.", en: "Start from an example related to CORS and cookies, even a simple one." },
        },
      },
      {
        id: "web-cors-cookies-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "L’origine définit les frontières du navigateur. CORS assouplit ces frontières pour le JS de façon contrôlée. Les cookies portent l’état avec des flags qui mitigent XSS et CSRF. Configure le minimum nécessaire, jamais plus permissif par paresse. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Origin defines browser boundaries. CORS relaxes those boundaries for JS in a controlled way. Cookies carry state with flags that mitigate XSS and CSRF. Configure the minimum needed, never more permissive out of laziness. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de CORS et cookies.", en: "Remember the core of CORS and cookies." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de CORS et cookies est ta boussole pour la suite.", en: "The summary of CORS and cookies is your compass for what comes next." },
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
      {
        term: { fr: "Origine", en: "Origin" },
        definition: {
          fr: "Triplet schéma + hôte + port d’une URL.",
          en: "Scheme + host + port triplet of a URL.",
        },
      },
      {
        term: { fr: "SameSite", en: "SameSite" },
        definition: {
          fr: "Règle d’envoi des cookies selon le contexte de site.",
          en: "Rule for sending cookies by site context.",
        },
      },
    ],
    activities: [
      {
        id: "web-cors-cookies-q1",
        type: "multiple-choice",
        question: { fr: "La same-origin policy…", en: "The same-origin policy…" },
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
        question: { fr: "CORS protège surtout…", en: "CORS mainly protects…" },
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
        question: { fr: "Allow-Origin: * avec credentials…", en: "Allow-Origin: * with credentials…" },
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
        question: { fr: "HttpOnly empêche…", en: "HttpOnly prevents…" },
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
        question: { fr: "Secure sur un cookie exige…", en: "Secure on a cookie requires…" },
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
        question: { fr: "Un preflight utilise…", en: "A preflight uses…" },
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
      {
        id: "web-cors-cookies-q100",
        type: "multiple-choice",
        question: { fr: "http://a.com et https://a.com ont-ils la même origine ?", en: "Do http://a.com and https://a.com share the same origin?" },
        options: [
          { fr: "Non, le schéma diffère", en: "No, the scheme differs" },
          { fr: "Oui, toujours", en: "Yes, always" },
          { fr: "Seulement la nuit", en: "Only at night" },
          { fr: "Oui si le CSS est identique", en: "Yes if CSS matches" },
        ],
        correctAnswer: { fr: "Non, le schéma diffère", en: "No, the scheme differs" },
        hint: { fr: "Schéma fait partie de l’origine.", en: "Scheme is part of origin." },
        explanation: {
          fr: "HTTP et HTTPS sont des origines différentes.",
          en: "HTTP and HTTPS are different origins.",
        },
      },
      {
        id: "web-cors-cookies-q101",
        type: "multiple-choice",
        question: { fr: "À quoi sert surtout HttpOnly ?", en: "What is HttpOnly mainly for?" },
        options: [
          { fr: "Empêcher JavaScript de lire le cookie", en: "Prevent JavaScript from reading the cookie" },
          { fr: "Accélérer Flexbox", en: "Speed up Flexbox" },
          { fr: "Remplacer le DNS", en: "Replace DNS" },
          { fr: "Désactiver TLS", en: "Disable TLS" },
        ],
        correctAnswer: { fr: "Empêcher JavaScript de lire le cookie", en: "Prevent JavaScript from reading the cookie" },
        hint: { fr: "Réduit le vol de session via XSS.", en: "Reduces session theft via XSS." },
        explanation: {
          fr: "Les scripts de page ne peuvent pas accéder à un cookie HttpOnly.",
          en: "Page scripts cannot access an HttpOnly cookie.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes CORS et cookies : origines, preflight, flags Secure/HttpOnly/SameSite. Corrige l'idée que CORS sécurise tout le serveur. Fais calculer l’origine et relier chaque symptôme CORS à un en-tête.",
        en: "You teach CORS and cookies: origins, preflight, Secure/HttpOnly/SameSite flags. Correct the idea that CORS secures the whole server. Have them compute origin and link each CORS symptom to a header.",
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
      fr: "Apprends pourquoi cacher, comment lire Cache-Control et ETag, ce qu’apporte un CDN edge, et ce qu’il ne faut jamais mettre en cache. Tu accéléreras les sites sans servir de données périmées dangereuses.",
      en: "Learn why caching helps, how to read Cache-Control and ETag, what an edge CDN adds, and what never to cache. You will speed up sites without serving dangerous stale data.",
    },
    icon: "cloud",
    estimatedMinutes: 21,
    xpReward: 27,
    goals: [
      {
        description: { fr: "Expliquer le rôle du cache navigateur et CDN", en: "Explain browser cache and CDN roles" },
        xpReward: 7,
      },
      {
        description: { fr: "Utiliser Cache-Control et ETag à bon escient", en: "Use Cache-Control and ETag wisely" },
        xpReward: 8,
      },
      {
        description: { fr: "Éviter de cacher des données privées", en: "Avoid caching private data" },
        xpReward: 7,
      },
      {
        description: { fr: "Choisir une stratégie de cache simple pour assets statiques versus réponses privées", en: "Choose a simple cache strategy for static assets versus private responses" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-caching-cdn-s1",
        diagram: "cache-cdn",
        title: { fr: "Pourquoi cacher ?", en: "Why cache?" },
        body: {
          fr: "Recalculer ou retelecharger la même ressource coûte latence et bande passante. Le cache garde une copie proche de l'utilisateur. Le cache réduit latence et charge serveur. Bien réglé, il fait « magique » ; mal réglé, il sert des prix ou sessions obsolètes. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Recomputing or re-downloading the same resource costs latency and bandwidth. Cache keeps a copy close to the user. Cache cuts latency and server load. Well tuned it feels magical; poorly tuned it serves stale prices or sessions. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Pourquoi cacher ? » change concrètement dans ton debug ou ton code.", en: "Remember what “Why cache?” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Cache et CDN que cette idée explique.", en: "Name a real symptom related to Caching and CDN that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Cache bien réglé = site plus rapide et serveur moins chargé.", en: "Well-tuned cache = faster site and lighter server." },
        calloutKind: "key",
        analogy: { fr: "Pense à « Pourquoi cacher ? » comme un panneau indicateur sur la route de Cache et CDN : il oriente avant d’accélérer.", en: "Think of “Why cache?” as a road sign on the path of Caching and CDN: it orients you before you speed up." },
      },
      {
        id: "web-caching-cdn-s2",
        title: { fr: "Cache-Control", en: "Cache-Control" },
        body: {
          fr: "max-age, public/private, no-store, must-revalidate guident navigateurs et proxies. Les assets hashés peuvent vivre longtemps. Cache-Control exprime public/private, max-age et no-store. Lis ces directives avant d’accuser le code métier. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "max-age, public/private, no-store, must-revalidate guide browsers and proxies. Hashed assets can live long. Cache-Control expresses public/private, max-age, and no-store. Read those directives before blaming business code. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Cache-Control » change concrètement dans ton debug ou ton code.", en: "Remember what “Cache-Control” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Cache et CDN que cette idée explique.", en: "Name a real symptom related to Caching and CDN that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Cache-Control » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Cache-Control” out loud in 20 seconds." },
        calloutKind: "tip",
        codeExample: {
          language: "http",
          code: "Cache-Control: public, max-age=31536000, immutable\nCache-Control: private, no-store",
          caption: { fr: "Asset versionné vs réponse privée.", en: "Versioned asset vs private response." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Cache-Control » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Cache-Control” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Cache et CDN, même simple.", en: "Start from an example related to Caching and CDN, even a simple one." },
        },
      },
      {
        id: "web-caching-cdn-s3",
        diagram: "cache-cdn",
        title: { fr: "ETag et revalidation", en: "ETag and revalidation" },
        body: {
          fr: "ETag / Last-Modified permettent de vérifier si la copie est fraîche (304 Not Modified) sans renvoyer tout le body. ETag et revalidation évitent de re-télécharger un contenu inchangé. 304 Not Modified est un succès d’efficacité. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "ETag / Last-Modified let you check freshness (304 Not Modified) without resending the whole body. ETag and revalidation avoid re-downloading unchanged content. 304 Not Modified is an efficiency win. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « ETag et revalidation » change concrètement dans ton debug ou ton code.", en: "Remember what “ETag and revalidation” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Cache et CDN que cette idée explique.", en: "Name a real symptom related to Caching and CDN that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « ETag et revalidation » crée des bugs difficiles à classer.", en: "Warning: neglecting “ETag and revalidation” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Comme demander au magasin : « ma boîte est-elle encore la bonne édition ? » avant de racheter le livre.", en: "Like asking the shop: “is my copy still the right edition?” before buying the book again." },
      },
      {
        id: "web-caching-cdn-s4",
        title: { fr: "CDN edge", en: "CDN edge" },
        body: {
          fr: "Un CDN sert fichiers statiques depuis des points de présence proches. HTML dynamique reste souvent à l'origine. Un CDN place des copies près des utilisateurs. HTML peut rester dynamique pendant que CSS/JS fingerprintés vivent longtemps à l’edge. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "A CDN serves static files from nearby points of presence. Dynamic HTML often stays at the origin. A CDN places copies near users. HTML can stay dynamic while fingerprinted CSS/JS live long at the edge. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Réduit la latence mondiale", en: "Cuts global latency" },
          { fr: "Absorbe une partie du trafic", en: "Absorbs some traffic" },
          { fr: "Nécessite une stratégie d'invalidation", en: "Needs an invalidation strategy" },
        ],
        diagram: "cache-cdn",
        callout: { fr: "Oublier d'invalider après un deploy laisse d'anciens JS en circulation.", en: "Forgetting to invalidate after a deploy leaves old JS circulating." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « CDN edge » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “CDN edge” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Cache et CDN, même simple.", en: "Start from an example related to Caching and CDN, even a simple one." },
        },
      },
      {
        id: "web-caching-cdn-s5",
        title: { fr: "Ne jamais cacher…", en: "Never cache…" },
        body: {
          fr: "Réponses personnalisées sensibles (page compte, tokens) : Cache-Control: private, no-store. Mélanger cache public et données user = fuite. Ne cache pas réponses personnalisées sensibles sans stratégie. no-store sur /account évite des fuites via proxies partagés. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Sensitive personalized responses (account page, tokens): Cache-Control: private, no-store. Mixing public cache and user data = leak. Do not cache sensitive personalized responses without a strategy. no-store on /account avoids leaks via shared proxies. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Ne jamais cacher… » change concrètement dans ton debug ou ton code.", en: "Remember what “Never cache…” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Cache et CDN que cette idée explique.", en: "Name a real symptom related to Caching and CDN that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Mettre une page « Mon profil » en CDN public est une erreur grave.", en: "Putting a “My profile” page on a public CDN is a severe mistake." },
        calloutKind: "mistake",
        analogy: { fr: "Pense à « Ne jamais cacher… » comme un panneau indicateur sur la route de Cache et CDN : il oriente avant d’accélérer.", en: "Think of “Never cache…” as a road sign on the path of Caching and CDN: it orients you before you speed up." },
      },
      {
        id: "web-caching-cdn-s6",
        title: { fr: "Fingerprinting des assets", en: "Asset fingerprinting" },
        body: {
          fr: "app.abc123.js peut être cache long : le hash change à chaque build, forçant le téléchargement du nouveau fichier. Hasher le nom des assets (app.abc123.js) permet un max-age long et un déploiement sûr. Le HTML pointe vers le nouveau hash. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "app.abc123.js can be long-cached: the hash changes each build, forcing download of the new file. Hashing asset names (app.abc123.js) enables long max-age and safe deploys. HTML points at the new hash. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Fingerprinting des assets » change concrètement dans ton debug ou ton code.", en: "Remember what “Asset fingerprinting” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Cache et CDN que cette idée explique.", en: "Name a real symptom related to Caching and CDN that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Couple filenames hashés + HTML avec court max-age.", en: "Pair hashed filenames + short max-age HTML." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Fingerprinting des assets » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Asset fingerprinting” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Cache et CDN, même simple.", en: "Start from an example related to Caching and CDN, even a simple one." },
        },
      },
      {
        id: "web-caching-cdn-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "logo.svg rare à changer, index.html change souvent, /api/me est privé. Simule un déploiement CSS : sans fingerprint, les users gardent l’ancien fichier. Avec fingerprint, le changement est immédiat. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "logo.svg rarely changes, index.html changes often, /api/me is private. Simulate a CSS deploy: without fingerprint, users keep the old file. With fingerprint, the change is immediate. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Cache et CDN que cette idée explique.", en: "Name a real symptom related to Caching and CDN that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de Cache et CDN : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of Caching and CDN: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Propose un Cache-Control pour chacun.", en: "Propose a Cache-Control for each." },
          hint: { fr: "long public / court / no-store private.", en: "long public / short / no-store private." },
        },
      },
      {
        id: "web-caching-cdn-extra1",
        title: { fr: "Privé versus public", en: "Private versus public" },
        body: {
          fr: "public convient aux assets partageables ; private aux réponses liées à un utilisateur. Se tromper expose des données ou tue la perf. Fais de cette distinction un réflexe de revue de code. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "public fits shareable assets; private fits user-bound responses. Getting it wrong exposes data or kills performance. Make that distinction a code-review reflex. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "À retenir : « Privé versus public » conditionne souvent la suite de Cache et CDN.", en: "Key takeaway: “Private versus public” often shapes what follows in Caching and CDN." },
        calloutKind: "key",
        analogy: { fr: "Affiche vitrine versus dossier personnel au guichet.", en: "Shop-window poster versus a personal file at the counter." },
      },
      {
        id: "web-caching-cdn-extra2",
        title: { fr: "CDN et invalidation", en: "CDN and invalidation" },
        body: {
          fr: "Après un release critique, tu peux purger l’edge ou compter sur les nouveaux hashes. Documente la procédure : « j’ai déployé mais je vois l’ancien » est un classique. Prévoir l’invalidation évite le stress de prod. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "After a critical release, you can purge the edge or rely on new hashes. Document the procedure: “I deployed but I still see the old one” is a classic. Planning invalidation avoids production stress. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Astuce : après cette section, explique « CDN et invalidation » à voix haute en 20 secondes.", en: "Tip: after this section, explain “CDN and invalidation” out loud in 20 seconds." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « CDN et invalidation » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “CDN and invalidation” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Cache et CDN, même simple.", en: "Start from an example related to Caching and CDN, even a simple one." },
        },
      },
      {
        id: "web-caching-cdn-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "Le cache et les CDN accélèrent en stockant des copies proches. Cache-Control, ETag et fingerprinting pilotent fraîcheur et performance. Ne mets jamais en cache ce qui doit rester privé ou ultra frais sans règles explicites. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Cache and CDNs speed things up by storing nearby copies. Cache-Control, ETag, and fingerprinting drive freshness and performance. Never cache what must stay private or ultra-fresh without explicit rules. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de cache et CDN.", en: "Remember the core of caching and CDNs." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de cache et CDN est ta boussole pour la suite.", en: "The summary of caching and CDNs is your compass for what comes next." },
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
      {
        term: { fr: "CDN", en: "CDN" },
        definition: {
          fr: "Réseau de serveurs edge qui servent du contenu proche des users.",
          en: "Edge server network that serves content near users.",
        },
      },
      {
        term: { fr: "Fingerprinting", en: "Fingerprinting" },
        definition: {
          fr: "Inclure un hash dans le nom d’un asset pour versionner le cache.",
          en: "Including a hash in an asset name to version the cache.",
        },
      },
    ],
    activities: [
      {
        id: "web-caching-cdn-q1",
        type: "multiple-choice",
        question: { fr: "Le but principal du cache…", en: "The main goal of caching…" },
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
        question: { fr: "304 Not Modified signifie…", en: "304 Not Modified means…" },
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
        question: { fr: "Un CDN sert surtout…", en: "A CDN mainly serves…" },
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
        question: { fr: "no-store convient à…", en: "no-store fits…" },
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
        question: { fr: "Fingerprinting des assets permet…", en: "Asset fingerprinting allows…" },
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
        question: { fr: "Cacher publiquement une page compte…", en: "Publicly caching an account page…" },
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
      {
        id: "web-caching-cdn-q100",
        type: "multiple-choice",
        question: { fr: "Que signifie souvent un 304 ?", en: "What does a 304 often mean?" },
        options: [
          { fr: "Contenu inchangé, revalidation réussie", en: "Unchanged content, successful revalidation" },
          { fr: "Erreur DNS fatale", en: "Fatal DNS error" },
          { fr: "Certificat TLS inventé", en: "Invented TLS certificate" },
          { fr: "Interdiction d’utiliser CSS", en: "Ban on using CSS" },
        ],
        correctAnswer: { fr: "Contenu inchangé, revalidation réussie", en: "Unchanged content, successful revalidation" },
        hint: { fr: "ETag / If-None-Match.", en: "ETag / If-None-Match." },
        explanation: {
          fr: "Le client peut garder sa copie locale.",
          en: "The client can keep its local copy.",
        },
      },
      {
        id: "web-caching-cdn-q101",
        type: "multiple-choice",
        question: { fr: "Que mettre typiquement sur une page compte très sensible ?", en: "What should you typically set on a highly sensitive account page?" },
        options: [
          { fr: "Cache-Control: no-store (ou équivalent strict)", en: "Cache-Control: no-store (or strict equivalent)" },
          { fr: "max-age=31536000 public pour tous", en: "max-age=31536000 public for everyone" },
          { fr: "Désactiver HTTPS", en: "Disable HTTPS" },
          { fr: "Mettre le HTML dans le DNS", en: "Put HTML in DNS" },
        ],
        correctAnswer: { fr: "Cache-Control: no-store (ou équivalent strict)", en: "Cache-Control: no-store (or strict equivalent)" },
        hint: { fr: "Éviter fuites via caches partagés.", en: "Avoid leaks via shared caches." },
        explanation: {
          fr: "Les réponses privées ne doivent pas traîner dans des caches publics.",
          en: "Private responses must not linger in public caches.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes cache HTTP et CDN : Cache-Control, ETag, edge, invalidation, données privées. Donne des exemples d'en-têtes. Fais choisir Cache-Control selon asset public ou réponse privée.",
        en: "You teach HTTP cache and CDN: Cache-Control, ETag, edge, invalidation, private data. Give header examples. Have them choose Cache-Control for public assets versus private responses.",
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
      fr: "Comprends XSS (script injecté) et CSRF (requête forgée avec la session de la victime), leurs familles et mitigations. Tu sauras les distinguer et empiler des défenses concrètes côté app web.",
      en: "Understand XSS (injected script) and CSRF (forged request using the victim’s session), their families and mitigations. You will distinguish them and stack concrete defenses on a web app.",
    },
    icon: "shield",
    estimatedMinutes: 25,
    xpReward: 31,
    goals: [
      {
        description: { fr: "Différencier XSS stocké, réfléchi et DOM", en: "Differentiate stored, reflected, and DOM XSS" },
        xpReward: 9,
      },
      {
        description: { fr: "Expliquer le mécanisme CSRF", en: "Explain the CSRF mechanism" },
        xpReward: 8,
      },
      {
        description: { fr: "Appliquer échappement, CSP, SameSite, tokens", en: "Apply escaping, CSP, SameSite, tokens" },
        xpReward: 9,
      },
      {
        description: { fr: "Différencier XSS et CSRF et citer une mitigation prioritaire pour chacun", en: "Differentiate XSS and CSRF and cite one priority mitigation for each" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-xss-csrf-s1",
        title: { fr: "XSS : script de l'attaquant", en: "XSS: attacker's script" },
        body: {
          fr: "Cross-Site Scripting injecte du JS dans ta page vue par d'autres. Vol de session, défacement, actions forcées. XSS exécute le JS de l’attaquant dans l’origine de ta victime. Vol de cookies, défacement et actions indésirables suivent. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Cross-Site Scripting injects JS into your page as seen by others. Session theft, defacement, forced actions. XSS runs the attacker’s JS in your victim’s origin. Cookie theft, defacement, and unwanted actions follow. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « XSS : script de l'attaquant » change concrètement dans ton debug ou ton code.", en: "Remember what “XSS: attacker's script” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à XSS et CSRF que cette idée explique.", en: "Name a real symptom related to XSS and CSRF that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Toute donnée non fiable affichée sans échappement est un risque XSS.", en: "Any untrusted data rendered without escaping is an XSS risk." },
        calloutKind: "key",
        analogy: { fr: "Pense à « XSS : script de l'attaquant » comme un panneau indicateur sur la route de XSS et CSRF : il oriente avant d’accélérer.", en: "Think of “XSS: attacker's script” as a road sign on the path of XSS and CSRF: it orients you before you speed up." },
      },
      {
        id: "web-xss-csrf-s2",
        title: { fr: "Trois familles XSS", en: "Three XSS families" },
        body: {
          fr: "Réfléchi (immédiat dans la réponse), stocké (sauvé en base puis réaffiché), DOM-based (bug JS client). Reflected, stored et DOM-based changent le vecteur, pas la gravité. Encode et sanitize selon le contexte de sortie. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Reflected (immediate in the response), stored (saved in DB then re-shown), DOM-based (client JS bug). Reflected, stored, and DOM-based change the vector, not the severity. Encode and sanitize for the output context. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Échapper/encoder selon le contexte (HTML, attr, JS)", en: "Escape/encode by context (HTML, attr, JS)" },
          { fr: "Éviter innerHTML avec input user", en: "Avoid innerHTML with user input" },
          { fr: "CSP réduit la casse", en: "CSP reduces blast radius" },
        ],
        callout: { fr: "sanitize « maison » incomplet est un faux sentiment de sécurité.", en: "Incomplete homemade sanitize is a false sense of security." },
        calloutKind: "mistake",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Trois familles XSS » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Three XSS families” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à XSS et CSRF, même simple.", en: "Start from an example related to XSS and CSRF, even a simple one." },
        },
      },
      {
        id: "web-xss-csrf-s3",
        title: { fr: "CSRF : la requête forgée", en: "CSRF: forged request" },
        body: {
          fr: "Le navigateur envoie automatiquement les cookies de session vers ton site. Un site malveillant peut déclencher POST /transfer à ton insu. CSRF abuse d’une session déjà ouverte pour déclencher une action. La victime est authentifiée ; la requête paraît légitime. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "The browser auto-sends session cookies to your site. A malicious site can trigger POST /transfer without you noticing. CSRF abuses an already open session to trigger an action. The victim is authenticated; the request looks legitimate. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « CSRF : la requête forgée » change concrètement dans ton debug ou ton code.", en: "Remember what “CSRF: forged request” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à XSS et CSRF que cette idée explique.", en: "Name a real symptom related to XSS and CSRF that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "cors",
        callout: { fr: "Attention : négliger « CSRF : la requête forgée » crée des bugs difficiles à classer.", en: "Warning: neglecting “CSRF: forged request” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "On utilise ton badge déjà accroché pour ouvrir une porte pendant que tu regardes ailleurs.", en: "Someone uses your already-clipped badge to open a door while you look away." },
      },
      {
        id: "web-xss-csrf-s4",
        title: { fr: "Mitigations CSRF", en: "CSRF mitigations" },
        body: {
          fr: "SameSite cookies, tokens anti-CSRF synchronizer, vérifier Origin/Referer, préférer JSON + custom header pour APIs SPA. Tokens anti-CSRF, SameSite et méthodes sûres réduisent le risque. Ne te repose pas sur le secret de l’URL seule. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "SameSite cookies, synchronizer anti-CSRF tokens, check Origin/Referer, prefer JSON + custom header for SPA APIs. Anti-CSRF tokens, SameSite, and safe methods reduce risk. Do not rely on URL secrecy alone. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Mitigations CSRF » change concrètement dans ton debug ou ton code.", en: "Remember what “CSRF mitigations” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à XSS et CSRF que cette idée explique.", en: "Name a real symptom related to XSS and CSRF that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "GET ne doit jamais muter l'état (lien image ne doit pas supprimer un compte).", en: "GET must never mutate state (an image link shouldn't delete an account)." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Mitigations CSRF » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “CSRF mitigations” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à XSS et CSRF, même simple.", en: "Start from an example related to XSS and CSRF, even a simple one." },
        },
      },
      {
        id: "web-xss-csrf-s5",
        title: { fr: "Defense in depth", en: "Defense in depth" },
        body: {
          fr: "HttpOnly limite le vol de cookie via XSS, mais XSS reste grave (actions au nom de l'user). Combine échappement + CSP + cookies solides. Defense in depth : encode sortie, CSP, cookies HttpOnly, SameSite, tokens. Une seule couche finit toujours par échouer. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "HttpOnly limits cookie theft via XSS, but XSS remains severe (actions as the user). Combine escaping + CSP + solid cookies. Defense in depth: encode output, CSP, HttpOnly cookies, SameSite, tokens. A single layer always fails eventually. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Defense in depth » change concrètement dans ton debug ou ton code.", en: "Remember what “Defense in depth” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à XSS et CSRF que cette idée explique.", en: "Name a real symptom related to XSS and CSRF that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "CSP n'excuse pas d'afficher du HTML user non sûr.", en: "CSP doesn't excuse rendering unsafe user HTML." },
        calloutKind: "tip",
        codeExample: {
          language: "http",
          code: "Content-Security-Policy: default-src 'self'; script-src 'self'",
          caption: { fr: "CSP restrictive de départ.", en: "Restrictive starting CSP." },
        },
        analogy: { fr: "Pense à « Defense in depth » comme un panneau indicateur sur la route de XSS et CSRF : il oriente avant d’accélérer.", en: "Think of “Defense in depth” as a road sign on the path of XSS and CSRF: it orients you before you speed up." },
      },
      {
        id: "web-xss-csrf-s6",
        title: { fr: "XSS ≠ CSRF", en: "XSS ≠ CSRF" },
        body: {
          fr: "XSS exécute du code dans l'origine victime. CSRF abuse de l'auth existante sans lire la réponse. Les mitigations diffèrent. XSS vole souvent la session ; CSRF l’utilise sans la lire. Les confondre mène à de mauvaises mitigations. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "XSS runs code in the victim origin. CSRF abuses existing auth without reading the response. Mitigations differ. XSS often steals the session; CSRF uses it without reading it. Mixing them up leads to wrong mitigations. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « XSS ≠ CSRF » change concrètement dans ton debug ou ton code.", en: "Remember what “XSS ≠ CSRF” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à XSS et CSRF que cette idée explique.", en: "Name a real symptom related to XSS and CSRF that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "client-server-web",
        callout: { fr: "Astuce : après cette section, explique « XSS ≠ CSRF » à voix haute en 20 secondes.", en: "Tip: after this section, explain “XSS ≠ CSRF” out loud in 20 seconds." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « XSS ≠ CSRF » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “XSS ≠ CSRF” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à XSS et CSRF, même simple.", en: "Start from an example related to XSS and CSRF, even a simple one." },
        },
      },
      {
        id: "web-xss-csrf-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Champ commentaire affiché aux autres ; formulaire change-email en cookie session. Pour un formulaire de virement, demande-toi : un site tiers peut-il le poster avec mes cookies ? Si oui, CSRF à traiter. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Comment field shown to others; change-email form with session cookie. For a transfer form, ask: can a third-party site post it with my cookies? If yes, CSRF must be handled. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à XSS et CSRF que cette idée explique.", en: "Name a real symptom related to XSS and CSRF that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de XSS et CSRF : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of XSS and CSRF: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Quel risque principal pour chaque cas et une mitigation ?", en: "Main risk for each case and one mitigation?" },
          hint: { fr: "XSS → échappement/CSP ; CSRF → SameSite/token.", en: "XSS → escaping/CSP; CSRF → SameSite/token." },
        },
      },
      {
        id: "web-xss-csrf-extra1",
        title: { fr: "Encoder selon le contexte", en: "Encode for context" },
        body: {
          fr: "Encoder pour HTML n’est pas encoder pour JavaScript ou URL. Utilise les helpers de ton framework adaptés au contexte. Un mauvais encodeur laisse des failles malgré « on a échappé ». Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Encoding for HTML is not encoding for JavaScript or URLs. Use your framework helpers suited to the context. A wrong encoder leaves holes despite “we escaped.” Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Erreur fréquente : confondre « Encoder selon le contexte » avec un détail cosmétique.", en: "Common mistake: treating “Encode for context” as a cosmetic detail." },
        calloutKind: "mistake",
        analogy: { fr: "Ceinture et airbag : deux rôles, pas interchangeables.", en: "Seatbelt and airbag: two roles, not interchangeable." },
      },
      {
        id: "web-xss-csrf-extra2",
        title: { fr: "Tester mentalement CSRF", en: "Mentally testing CSRF" },
        body: {
          fr: "Imagine une page attaquante qui auto-soumet un formulaire vers ton site. Si la session cookie part et que l’action réussit sans token, tu as un problème. Ce scénario guide mieux qu’une définition abstraite. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Imagine an attacking page that auto-submits a form to your site. If the session cookie goes along and the action succeeds without a token, you have a problem. That scenario guides better than an abstract definition. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Astuce : après cette section, explique « Tester mentalement CSRF » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Mentally testing CSRF” out loud in 20 seconds." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Tester mentalement CSRF » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Mentally testing CSRF” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à XSS et CSRF, même simple.", en: "Start from an example related to XSS and CSRF, even a simple one." },
        },
      },
      {
        id: "web-xss-csrf-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "XSS injecte du script dans l’origine victime ; CSRF forge une requête avec sa session. Encode/sanitize et CSP aident contre XSS ; tokens et SameSite aident contre CSRF. Empile les défenses et distingue les deux menaces. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "XSS injects script into the victim origin; CSRF forges a request with their session. Encode/sanitize and CSP help against XSS; tokens and SameSite help against CSRF. Stack defenses and keep the threats distinct. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de XSS et CSRF.", en: "Remember the core of XSS and CSRF." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de XSS et CSRF est ta boussole pour la suite.", en: "The summary of XSS and CSRF is your compass for what comes next." },
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
      {
        term: { fr: "CSP", en: "CSP" },
        definition: {
          fr: "Content Security Policy : en-tête qui restreint les scripts.",
          en: "Content Security Policy: header that restricts scripts.",
        },
      },
      {
        term: { fr: "Token anti-CSRF", en: "Anti-CSRF token" },
        definition: {
          fr: "Secret imprévisible validé sur les actions sensibles.",
          en: "Unpredictable secret validated on sensitive actions.",
        },
      },
    ],
    activities: [
      {
        id: "web-xss-csrf-q1",
        type: "multiple-choice",
        question: { fr: "XSS consiste à…", en: "XSS consists of…" },
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
        question: { fr: "innerHTML + input user…", en: "innerHTML + user input…" },
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
        question: { fr: "CSRF abuse surtout…", en: "CSRF mainly abuses…" },
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
        question: { fr: "SameSite=Lax aide contre…", en: "SameSite=Lax helps against…" },
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
        question: { fr: "Une CSP stricte…", en: "A strict CSP…" },
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
        question: { fr: "Un GET qui supprime un compte…", en: "A GET that deletes an account…" },
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
      {
        id: "web-xss-csrf-q100",
        type: "multiple-choice",
        question: { fr: "XSS signifie surtout…", en: "XSS mainly means…" },
        options: [
          { fr: "Exécuter du JS attaquant dans le navigateur de la victime", en: "Running attacker JS in the victim’s browser" },
          { fr: "Couper la fibre optique", en: "Cutting fiber optic" },
          { fr: "Compiler le CSS plus vite", en: "Compiling CSS faster" },
          { fr: "Remplacer le DNS root", en: "Replacing the DNS root" },
        ],
        correctAnswer: { fr: "Exécuter du JS attaquant dans le navigateur de la victime", en: "Running attacker JS in the victim’s browser" },
        hint: { fr: "Script dans l’origine cible.", en: "Script in the target origin." },
        explanation: {
          fr: "Le navigateur fait confiance à l’origine ; le script injecté en profite.",
          en: "The browser trusts the origin; injected script abuses that.",
        },
      },
      {
        id: "web-xss-csrf-q101",
        type: "multiple-choice",
        question: { fr: "CSRF abuse principalement de…", en: "CSRF mainly abuses…" },
        options: [
          { fr: "La session déjà authentifiée de la victime", en: "The victim’s already authenticated session" },
          { fr: "L’absence totale d’HTML", en: "The total absence of HTML" },
          { fr: "Un GPU défectueux", en: "A faulty GPU" },
          { fr: "Un certificat papier", en: "A paper certificate" },
        ],
        correctAnswer: { fr: "La session déjà authentifiée de la victime", en: "The victim’s already authenticated session" },
        hint: { fr: "La victime est déjà connectée.", en: "The victim is already logged in." },
        explanation: {
          fr: "La requête forgée voyage avec les cookies de session.",
          en: "The forged request travels with session cookies.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes XSS et CSRF : mécanismes, exemples, mitigations (échappement, CSP, SameSite, tokens). Distingue clairement les deux. Fais toujours comparer XSS et CSRF sur le même scénario de session.",
        en: "You teach XSS and CSRF: mechanisms, examples, mitigations (escaping, CSP, SameSite, tokens). Clearly distinguish both. Always compare XSS and CSRF on the same session scenario.",
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
      fr: "Vois l’injection comme une confusion de langages, sécurise SQL et commandes, valide et encode les entrées, et déploie des en-têtes (CSP, HSTS…) utiles. Tu renforceras l’app sans croire qu’un header remplace toute la sécurité.",
      en: "See injection as language confusion, secure SQL and commands, validate and encode inputs, and deploy useful headers (CSP, HSTS…). You will harden the app without believing a header replaces all security.",
    },
    icon: "lock",
    estimatedMinutes: 24,
    xpReward: 30,
    goals: [
      {
        description: { fr: "Reconnaître les vecteurs d'injection courants", en: "Recognize common injection vectors" },
        xpReward: 8,
      },
      {
        description: { fr: "Appliquer validation et requêtes paramétrées", en: "Apply validation and parameterized queries" },
        xpReward: 9,
      },
      {
        description: { fr: "Citer les en-têtes de sécurité utiles", en: "List useful security headers" },
        xpReward: 8,
      },
      {
        description: { fr: "Citer validation, paramétrage et un en-tête de sécurité adaptés à un risque donné", en: "Cite validation, parameterization, and a security header suited to a given risk" },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "web-injection-headers-s1",
        title: { fr: "Injection = confusion de langages", en: "Injection = language confusion" },
        body: {
          fr: "Quand des données utilisateur deviennent des instructions (SQL, shell, LDAP), l'attaquant détourne la logique. Quand des données utilisateur deviennent du code SQL, shell ou HTML, l’injection apparaît. Sépare toujours données et instructions. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "When user data becomes instructions (SQL, shell, LDAP), the attacker hijacks logic. When user data becomes SQL, shell, or HTML code, injection appears. Always separate data from instructions. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Injection = confusion de langages » change concrètement dans ton debug ou ton code.", en: "Remember what “Injection = language confusion” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Injections et en-têtes que cette idée explique.", en: "Name a real symptom related to Injections and headers that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Ne fais jamais confiance aux entrées : query, body, headers, cookies.", en: "Never trust inputs: query, body, headers, cookies." },
        calloutKind: "key",
        analogy: { fr: "Pense à « Injection = confusion de langages » comme un panneau indicateur sur la route de Injections et en-têtes : il oriente avant d’accélérer.", en: "Think of “Injection = language confusion” as a road sign on the path of Injections and headers: it orients you before you speed up." },
      },
      {
        id: "web-injection-headers-s2",
        title: { fr: "SQL et commandes", en: "SQL and commands" },
        body: {
          fr: "Paramètres liés / ORM pour SQL. Évite shell avec input ; sinon escape strict + listes blanches. Logs et moindres privilèges limitent les dégâts. SQL et commandes OS sont des cibles classiques. Paramètres liés et APIs sûres battent les filtres maison fragiles. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Bound parameters / ORM for SQL. Avoid shell with input; else strict escape + allowlists. Logs and least privilege limit damage. SQL and OS commands are classic targets. Bound parameters and safe APIs beat fragile homemade filters. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « SQL et commandes » change concrètement dans ton debug ou ton code.", en: "Remember what “SQL and commands” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Injections et en-têtes que cette idée explique.", en: "Name a real symptom related to Injections and headers that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Validation regex seule ne remplace pas les requêtes paramétrées.", en: "Regex validation alone doesn't replace parameterized queries." },
        calloutKind: "mistake",
        codeExample: {
          language: "javascript",
          code: "// Bad: db.query(\"SELECT * FROM users WHERE id = \" + id)\n// Good:\ndb.query(\"SELECT * FROM users WHERE id = $1\", [id]);",
          caption: { fr: "Paramètre lié vs concaténation.", en: "Bound parameter vs concatenation." },
        },
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « SQL et commandes » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “SQL and commands” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Injections et en-têtes, même simple.", en: "Start from an example related to Injections and headers, even a simple one." },
        },
      },
      {
        id: "web-injection-headers-s3",
        title: { fr: "Validation et encodage", en: "Validation and encoding" },
        body: {
          fr: "Valide le type/format tôt (allowlist). Encode en sortie selon le contexte (HTML, URL, SQL via driver). Defense in depth. Valider le format attendu et encoder à la sortie selon le contexte réduit la surface. Refuse tôt ce qui est hors contrat. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe.",
          en: "Validate type/format early (allowlist). Encode on output by context (HTML, URL, SQL via driver). Defense in depth. Validating expected format and encoding on output by context shrinks the surface. Reject early what is out of contract. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team.",
        },
        bullets: [
          { fr: "Retiens ce que « Validation et encodage » change concrètement dans ton debug ou ton code.", en: "Remember what “Validation and encoding” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Injections et en-têtes que cette idée explique.", en: "Name a real symptom related to Injections and headers that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Validation et encodage » crée des bugs difficiles à classer.", en: "Warning: neglecting “Validation and encoding” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Filtrer à l'entrée (douane) et étiqueter à la sortie (emballage adapté) : les deux comptent.", en: "Filter on entry (customs) and label on exit (right packaging): both matter." },
      },
      {
        id: "web-injection-headers-s4",
        title: { fr: "En-têtes de sécurité", en: "Security headers" },
        body: {
          fr: "CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS (Strict-Transport-Security) durcissent le navigateur. CSP, X-Content-Type-Options, Referrer-Policy et consorts durcissent le navigateur. Ils complètent, ils ne remplacent pas, la logique serveur. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS (Strict-Transport-Security) harden the browser. CSP, X-Content-Type-Options, Referrer-Policy and friends harden the browser. They complement, not replace, server logic. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "HSTS : force HTTPS après première visite", en: "HSTS: force HTTPS after first visit" },
          { fr: "X-Content-Type-Options: nosniff", en: "X-Content-Type-Options: nosniff" },
          { fr: "Frame-Ancestors / X-Frame-Options anti-clickjacking", en: "Frame-Ancestors / X-Frame-Options anti-clickjacking" },
        ],
        diagram: "http-https",
        callout: { fr: "Les headers aident ; ils ne corrigent pas une API ouverte sans auth.", en: "Headers help; they don't fix an open API without auth." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « En-têtes de sécurité » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Security headers” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Injections et en-têtes, même simple.", en: "Start from an example related to Injections and headers, even a simple one." },
        },
      },
      {
        id: "web-injection-headers-s5",
        title: { fr: "HSTS et mixed content", en: "HSTS and mixed content" },
        body: {
          fr: "HSTS empêche le downgrade HTTP. Évite le mixed content (page HTTPS chargeant du JS HTTP). HSTS force HTTPS après la première visite ; attention au mixed content qui casse des pages. Planifie le basculement. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "HSTS prevents HTTP downgrade. Avoid mixed content (HTTPS page loading HTTP JS). HSTS forces HTTPS after the first visit; watch mixed content that breaks pages. Plan the cutover. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « HSTS et mixed content » change concrètement dans ton debug ou ton code.", en: "Remember what “HSTS and mixed content” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Injections et en-têtes que cette idée explique.", en: "Name a real symptom related to Injections and headers that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Activer HSTS trop tôt sur un domaine mal migré peut bloquer des users.", en: "Enabling HSTS too early on a poorly migrated domain can lock users out." },
        calloutKind: "warning",
        codeExample: {
          language: "http",
          code: "Strict-Transport-Security: max-age=31536000; includeSubDomains",
          caption: { fr: "HSTS d'un an avec sous-domaines.", en: "One-year HSTS with subdomains." },
        },
        analogy: { fr: "Pense à « HSTS et mixed content » comme un panneau indicateur sur la route de Injections et en-têtes : il oriente avant d’accélérer.", en: "Think of “HSTS and mixed content” as a road sign on the path of Injections and headers: it orients you before you speed up." },
      },
      {
        id: "web-injection-headers-s6",
        title: { fr: "Headers ≠ secrets", en: "Headers ≠ secrets" },
        body: {
          fr: "Ne place pas de secrets dans des headers logs-friendly sans prudence. Authorization doit voyager en HTTPS. Masque les tokens dans les logs. Un en-tête n’est pas un secret : il est visible. Ne mets pas de clés API dans des headers « obscurs » côté client. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Don't put secrets in log-friendly headers carelessly. Authorization must travel over HTTPS. Redact tokens in logs. A header is not a secret: it is visible. Do not put API keys in “obscure” client-side headers. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Headers ≠ secrets » change concrètement dans ton debug ou ton code.", en: "Remember what “Headers ≠ secrets” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Injections et en-têtes que cette idée explique.", en: "Name a real symptom related to Injections and headers that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        diagram: "http-https",
        callout: { fr: "Astuce : après cette section, explique « Headers ≠ secrets » à voix haute en 20 secondes.", en: "Tip: after this section, explain “Headers ≠ secrets” out loud in 20 seconds." },
        calloutKind: "tip",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Headers ≠ secrets » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Headers ≠ secrets” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Injections et en-têtes, même simple.", en: "Start from an example related to Injections and headers, even a simple one." },
        },
      },
      {
        id: "web-injection-headers-s7",
        title: { fr: "Mini défi", en: "Mini challenge" },
        body: {
          fr: "Endpoint search ?q= qui interroge SQL et affiche le terme dans la page. Checklist finale : entrées validées, requêtes paramétrées, sorties encodées, HTTPS, headers de base. Simple, répétables, efficaces. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "search ?q= endpoint that queries SQL and shows the term on the page. Final checklist: validated inputs, parameterized queries, encoded outputs, HTTPS, basic headers. Simple, repeatable, effective. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens ce que « Mini défi » change concrètement dans ton debug ou ton code.", en: "Remember what “Mini challenge” concretely changes in your debugging or code." },
          { fr: "Cite un symptôme réel lié à Injections et en-têtes que cette idée explique.", en: "Name a real symptom related to Injections and headers that this idea explains." },
          { fr: "Évite l’erreur classique : appliquer le concept au mauvais endroit.", en: "Avoid the classic mistake: applying the concept in the wrong place." },
        ],
        callout: { fr: "Attention : négliger « Mini défi » crée des bugs difficiles à classer.", en: "Warning: neglecting “Mini challenge” creates bugs that are hard to classify." },
        calloutKind: "warning",
        analogy: { fr: "Pense à « Mini défi » comme un panneau indicateur sur la route de Injections et en-têtes : il oriente avant d’accélérer.", en: "Think of “Mini challenge” as a road sign on the path of Injections and headers: it orients you before you speed up." },
        miniExercise: {
          prompt: { fr: "Quels contrôles côté SQL et côté HTML ajouter ?", en: "Which SQL-side and HTML-side controls would you add?" },
          hint: { fr: "Requête paramétrée + échappement/textContent + CSP.", en: "Parameterized query + escaping/textContent + CSP." },
        },
      },
      {
        id: "web-injection-headers-extra1",
        title: { fr: "Defense in depth minimale", en: "Minimal defense in depth" },
        body: {
          fr: "Combine validation d’entrée, paramétrage, encode de sortie, TLS et quelques headers. Chaque couche couvre l’échec d’une autre. Documente cette checklist dans le README de l’équipe pour les revues. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Combine input validation, parameterization, output encoding, TLS, and a few headers. Each layer covers another’s failure. Document that checklist in the team README for reviews. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "À retenir : « Defense in depth minimale » conditionne souvent la suite de Injections et en-têtes.", en: "Key takeaway: “Minimal defense in depth” often shapes what follows in Injections and headers." },
        calloutKind: "key",
        analogy: { fr: "Plusieurs serrures valent mieux qu’une seule trop complexe.", en: "Several locks beat one overly complex lock." },
      },
      {
        id: "web-injection-headers-extra2",
        title: { fr: "Headers utiles, pas magiques", en: "Useful headers, not magic" },
        body: {
          fr: "CSP mal configurée peut casser le site ou ne rien bloquer. Commence stricte en report-only si besoin, puis resserre. Mesure l’impact ; ne copie pas une config incomprise depuis un blog. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "A misconfigured CSP can break the site or block nothing. Start strict in report-only if needed, then tighten. Measure impact; do not copy an understood config from a blog. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Relie le concept à un cas réel.", en: "Connect the concept to a real case." },
          { fr: "Nomme le risque si tu l’ignores.", en: "Name the risk if you ignore it." },
          { fr: "Vérifie que tu peux l’enseigner en 30 secondes.", en: "Check you can teach it in 30 seconds." },
        ],
        callout: { fr: "Attention : négliger « Headers utiles, pas magiques » crée des bugs difficiles à classer.", en: "Warning: neglecting “Useful headers, not magic” creates bugs that are hard to classify." },
        calloutKind: "warning",
        miniExercise: {
          prompt: { fr: "Décris une situation (app, ticket ou bug) où « Headers utiles, pas magiques » t’aurait aidé.", en: "Describe a situation (app, ticket, or bug) where “Useful headers, not magic” would have helped you." },
          hint: { fr: "Pars d’un exemple lié à Injections et en-têtes, même simple.", en: "Start from an example related to Injections and headers, even a simple one." },
        },
      },
      {
        id: "web-injection-headers-summary",
        title: { fr: "Résumé", en: "Summary" },
        body: {
          fr: "L’injection naît quand des données deviennent du code. Validation, paramétrage et encodage forment le cœur de la défense. Les en-têtes de sécurité durcissent le navigateur en complément, sans remplacer les contrôles serveur. Prends le temps de reformuler l’idée avec tes mots, puis cherche un contre-exemple pour tester ta compréhension. En situation réelle, cette clarté te fait gagner des minutes de debug et améliore tes échanges avec l’équipe. Note une checklist personnelle de trois points issus de cette section. Quand un bug arrive, repasse cette liste avant d’ouvrir des outils avancés : tu isoles plus vite la bonne couche ou le bon composant.",
          en: "Injection appears when data becomes code. Validation, parameterization, and encoding form the core defense. Security headers harden the browser as a complement, without replacing server controls. Take time to restate the idea in your own words, then look for a counterexample to test your understanding. In real situations, that clarity saves debug minutes and improves how you talk with the team. Write a personal three-point checklist from this section. When a bug appears, walk that list before opening advanced tools: you isolate the right layer or component faster.",
        },
        bullets: [
          { fr: "Retiens le cœur de injections et en-têtes de sécurité.", en: "Remember the core of injections and security headers." },
          { fr: "Passe du vocabulaire aux gestes de debug.", en: "Move from vocabulary to debug habits." },
          { fr: "Enseigne l’idée à quelqu’un en deux minutes.", en: "Teach the idea to someone in two minutes." },
        ],
        callout: { fr: "Si tu expliques clairement, tu as vraiment appris.", en: "If you can explain it clearly, you truly learned it." },
        calloutKind: "key",
        analogy: { fr: "Le résumé de injections et en-têtes de sécurité est ta boussole pour la suite.", en: "The summary of injections and security headers is your compass for what comes next." },
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
      {
        term: { fr: "HSTS", en: "HSTS" },
        definition: {
          fr: "En-tête qui impose HTTPS pour les visites suivantes.",
          en: "Header that forces HTTPS for later visits.",
        },
      },
      {
        term: { fr: "Validation", en: "Validation" },
        definition: {
          fr: "Vérifier qu’une entrée respecte le format attendu.",
          en: "Checking that input matches the expected format.",
        },
      },
    ],
    activities: [
      {
        id: "web-injection-headers-q1",
        type: "multiple-choice",
        question: { fr: "Une injection survient quand…", en: "An injection happens when…" },
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
        question: { fr: "Contre l'injection SQL, le mieux est…", en: "Against SQL injection, best is…" },
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
        question: { fr: "HSTS sert à…", en: "HSTS is for…" },
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
        question: { fr: "X-Content-Type-Options: nosniff…", en: "X-Content-Type-Options: nosniff…" },
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
        question: { fr: "Valider en allowlist signifie…", en: "Allowlist validation means…" },
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
        question: { fr: "Les security headers…", en: "Security headers…" },
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
      {
        id: "web-injection-headers-q100",
        type: "multiple-choice",
        question: { fr: "Quelle pratique bloque surtout l’injection SQL ?", en: "Which practice mainly blocks SQL injection?" },
        options: [
          { fr: "Requêtes paramétrées / APIs sûres", en: "Parameterized queries / safe APIs" },
          { fr: "Augmenter la taille de police", en: "Increasing font size" },
          { fr: "Désactiver le DNS", en: "Disabling DNS" },
          { fr: "Mettre tous les secrets dans le HTML", en: "Putting all secrets in HTML" },
        ],
        correctAnswer: { fr: "Requêtes paramétrées / APIs sûres", en: "Parameterized queries / safe APIs" },
        hint: { fr: "Séparer code SQL et données.", en: "Separate SQL code and data." },
        explanation: {
          fr: "Les valeurs liées ne sont pas interprétées comme du SQL.",
          en: "Bound values are not interpreted as SQL.",
        },
      },
      {
        id: "web-injection-headers-q101",
        type: "multiple-choice",
        question: { fr: "Un en-tête de sécurité côté réponse…", en: "A response security header…" },
        options: [
          { fr: "Durcit le navigateur mais ne remplace pas les contrôles serveur", en: "Hardens the browser but does not replace server controls" },
          { fr: "Cache automatiquement tous les secrets", en: "Automatically hides all secrets" },
          { fr: "Remplace la base de données", en: "Replaces the database" },
          { fr: "Supprime le besoin de TLS", en: "Removes the need for TLS" },
        ],
        correctAnswer: { fr: "Durcit le navigateur mais ne remplace pas les contrôles serveur", en: "Hardens the browser but does not replace server controls" },
        hint: { fr: "Complément, pas substitut.", en: "Complement, not substitute." },
        explanation: {
          fr: "Les headers aident le client ; le serveur doit toujours valider et autoriser.",
          en: "Headers help the client; the server must still validate and authorize.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu enseignes injections et security headers : SQL/commandes, validation, HSTS, CSP, nosniff. Donne des exemples concrets d'en-têtes. Relie chaque risque à validation, paramétrage ou header adapté.",
        en: "You teach injections and security headers: SQL/commands, validation, HSTS, CSP, nosniff. Give concrete header examples. Link each risk to validation, parameterization, or a fitting header.",
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
