import fs from "fs";

function L(id, unitId, titleFr, titleEn, descFr, descEn, icon, diagram, topics) {
  const sections = [
    {
      id: `${id}-s1`,
      title: { fr: "Introduction", en: "Introduction" },
      body: {
        fr: `${descFr} Cette leçon pose les bases avec des exemples concrets.`,
        en: `${descEn} This lesson builds foundations with concrete examples.`,
      },
      calloutKind: "key",
      callout: {
        fr: "Objectif : comprendre le concept et savoir l'appliquer.",
        en: "Goal: understand the concept and apply it.",
      },
    },
    {
      id: `${id}-s2`,
      title: { fr: "Concept clé", en: "Key concept" },
      body: {
        fr: `Le concept central de ${titleFr} repose sur une idée simple que tu dois pouvoir reformuler.`,
        en: `The core idea of ${titleEn} is simple enough to restate in your own words.`,
      },
      bullets: [
        { fr: "Définition claire", en: "Clear definition" },
        { fr: "Pourquoi ça existe", en: "Why it exists" },
        { fr: "Où tu le vois en pratique", en: "Where you see it in practice" },
      ],
      diagram,
    },
    {
      id: `${id}-s3`,
      title: { fr: "Explication détaillée", en: "Detailed explanation" },
      body: {
        fr: "On déroule le mécanisme étape par étape pour éviter les raccourcis trompeurs.",
        en: "We walk through the mechanism step by step to avoid misleading shortcuts.",
      },
    },
    {
      id: `${id}-s4`,
      title: { fr: "Exemple concret", en: "Concrete example" },
      body: {
        fr: `Voici un scénario réaliste où ${titleFr} intervient dans un produit réel.`,
        en: `Here is a realistic scenario where ${titleEn} shows up in a real product.`,
      },
      codeExample: {
        code: `// ${id}\nconsole.log("learn");`,
        language: "javascript",
        caption: { fr: "Mini exemple", en: "Mini example" },
      },
    },
    {
      id: `${id}-s5`,
      title: { fr: "Analogie", en: "Analogy" },
      body: {
        fr: "Une analogie aide à mémoriser sans remplacer la définition technique.",
        en: "An analogy helps memory without replacing the technical definition.",
      },
      analogy: {
        fr: "Pense à un processus du quotidien avec des étapes ordonnées.",
        en: "Think of an everyday process with ordered steps.",
      },
    },
    {
      id: `${id}-s6`,
      title: { fr: "Erreur fréquente", en: "Common mistake" },
      body: {
        fr: "L'erreur classique est de confondre le symptôme et la cause.",
        en: "The classic mistake is mixing up the symptom and the cause.",
      },
      calloutKind: "mistake",
      callout: {
        fr: "Vérifie toujours le contexte avant de conclure.",
        en: "Always check context before concluding.",
      },
      miniExercise: {
        prompt: {
          fr: "Explique le concept en une phrase à un débutant.",
          en: "Explain the concept in one sentence to a beginner.",
        },
        hint: { fr: "Utilise tes propres mots.", en: "Use your own words." },
      },
    },
    {
      id: `${id}-s7`,
      title: { fr: "Résumé", en: "Summary" },
      body: {
        fr: `Tu dois maintenant savoir expliquer ${titleFr} et reconnaître un cas d'usage.`,
        en: `You should now explain ${titleEn} and recognize a use case.`,
      },
      calloutKind: "tip",
      callout: {
        fr: "Révise le schéma et refais le quiz.",
        en: "Review the diagram and retake the quiz.",
      },
    },
  ];

  const vocabulary = topics.slice(0, 5).map((t) => ({
    term: { fr: t.fr, en: t.en },
    definition: {
      fr: `Notion liée à ${titleFr}.`,
      en: `Concept related to ${titleEn}.`,
    },
  }));

  const activities = [1, 2, 3, 4, 5, 6].map((n) => ({
    id: `${id}-q${n}`,
    type: "multiple-choice",
    question: {
      fr: `Q${n} : quelle affirmation est vraie à propos de ${titleFr} ?`,
      en: `Q${n}: which statement is true about ${titleEn}?`,
    },
    options: [
      {
        fr: "Elle décrit correctement le concept",
        en: "It correctly describes the concept",
      },
      { fr: "Elle n'a aucun rapport", en: "It is unrelated" },
      {
        fr: "Elle confond cause et symptôme",
        en: "It confuses cause and symptom",
      },
      { fr: "Elle ignore le contexte", en: "It ignores context" },
    ],
    correctAnswer: {
      fr: "Elle décrit correctement le concept",
      en: "It correctly describes the concept",
    },
    explanation: {
      fr: "La bonne réponse reste ancrée dans la définition vue dans la leçon.",
      en: "The right answer stays anchored in the lesson definition.",
    },
  }));

  return {
    id,
    unitId,
    title: { fr: titleFr, en: titleEn },
    description: { fr: descFr, en: descEn },
    icon,
    estimatedMinutes: 18,
    xpReward: 24,
    goals: [
      {
        description: { fr: `Comprendre ${titleFr}`, en: `Understand ${titleEn}` },
        xpReward: 8,
      },
      {
        description: {
          fr: "Identifier un cas d'usage",
          en: "Identify a use case",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Éviter l'erreur fréquente associée",
          en: "Avoid the related common mistake",
        },
        xpReward: 8,
      },
    ],
    sections,
    vocabulary,
    activities,
    aiTeacherPrompt: {
      systemPrompt: {
        fr: `Tu es Nova. Tu enseignes ${titleFr} clairement.`,
        en: `You are Nova. You teach ${titleEn} clearly.`,
      },
      introMessage: {
        fr: `Prêt·e pour ${titleFr} ?`,
        en: `Ready for ${titleEn}?`,
      },
      topics: topics.slice(0, 3),
    },
  };
}

const webExtra = [
  L("web-html-basics", "web-frontend", "HTML : structure des pages", "HTML: page structure", "Apprendre la structure sémantique HTML.", "Learn semantic HTML structure.", "layers", "dom-tree", [{ fr: "Balise", en: "Tag" }, { fr: "Élément", en: "Element" }, { fr: "Attribut", en: "Attribute" }, { fr: "Sémantique", en: "Semantics" }, { fr: "Document", en: "Document" }]),
  L("web-css-basics", "web-frontend", "CSS : style et mise en page", "CSS: style and layout", "Styliser et disposer une page.", "Style and lay out a page.", "sparkles", "client-server-web", [{ fr: "Sélecteur", en: "Selector" }, { fr: "Propriété", en: "Property" }, { fr: "Cascade", en: "Cascade" }, { fr: "Flexbox", en: "Flexbox" }, { fr: "Responsive", en: "Responsive" }]),
  L("web-javascript-basics", "web-frontend", "JavaScript : interactivité", "JavaScript: interactivity", "Ajouter de la logique côté navigateur.", "Add browser-side logic.", "zap", "dom-tree", [{ fr: "Variable", en: "Variable" }, { fr: "Fonction", en: "Function" }, { fr: "Événement", en: "Event" }, { fr: "Promesse", en: "Promise" }, { fr: "Module", en: "Module" }]),
  L("web-dom-events-responsive", "web-frontend", "DOM, événements et responsive", "DOM, events and responsive", "Manipuler le DOM et adapter aux écrans.", "Manipulate the DOM and adapt to screens.", "layers", "dom-tree", [{ fr: "DOM", en: "DOM" }, { fr: "Listener", en: "Listener" }, { fr: "Media query", en: "Media query" }, { fr: "Viewport", en: "Viewport" }, { fr: "Accessibilité", en: "Accessibility" }]),
  L("web-server-routes", "web-backend", "Serveur et routes", "Server and routes", "Comprendre routes et handlers.", "Understand routes and handlers.", "network", "client-server-web", [{ fr: "Route", en: "Route" }, { fr: "Handler", en: "Handler" }, { fr: "Middleware", en: "Middleware" }, { fr: "Port", en: "Port" }, { fr: "Serveur", en: "Server" }]),
  L("web-rest-api", "web-backend", "API REST", "REST APIs", "Concevoir des endpoints REST clairs.", "Design clear REST endpoints.", "layers", "rest-api", [{ fr: "Ressource", en: "Resource" }, { fr: "GET", en: "GET" }, { fr: "POST", en: "POST" }, { fr: "Statut HTTP", en: "HTTP status" }, { fr: "JSON", en: "JSON" }]),
  L("web-auth-jwt", "web-backend", "Auth, sessions et JWT", "Auth, sessions and JWT", "Authentifier utilisateurs avec sessions/JWT.", "Authenticate users with sessions/JWT.", "lock", "jwt-flow", [{ fr: "Session", en: "Session" }, { fr: "JWT", en: "JWT" }, { fr: "Cookie", en: "Cookie" }, { fr: "Bearer", en: "Bearer" }, { fr: "Refresh token", en: "Refresh token" }]),
  L("web-databases", "web-backend", "Bases de données web", "Web databases", "Relier API et persistance.", "Connect APIs and persistence.", "book", "mvc-architecture", [{ fr: "SQL", en: "SQL" }, { fr: "Table", en: "Table" }, { fr: "Index", en: "Index" }, { fr: "ORM", en: "ORM" }, { fr: "Migration", en: "Migration" }]),
  L("web-cors-cookies", "web-security", "CORS et cookies", "CORS and cookies", "Comprendre CORS et cookies navigateur.", "Understand CORS and browser cookies.", "shield", "cors", [{ fr: "CORS", en: "CORS" }, { fr: "Origin", en: "Origin" }, { fr: "Cookie HttpOnly", en: "HttpOnly cookie" }, { fr: "SameSite", en: "SameSite" }, { fr: "Preflight", en: "Preflight" }]),
  L("web-caching-cdn", "web-security", "Cache et CDN", "Caching and CDN", "Accélérer avec cache et CDN.", "Speed up with cache and CDN.", "cloud", "request-lifecycle", [{ fr: "Cache", en: "Cache" }, { fr: "CDN", en: "CDN" }, { fr: "TTL", en: "TTL" }, { fr: "Edge", en: "Edge" }, { fr: "Invalidation", en: "Invalidation" }]),
  L("web-xss-csrf", "web-security", "XSS et CSRF", "XSS and CSRF", "Prévenir XSS et CSRF.", "Prevent XSS and CSRF.", "shield", "cors", [{ fr: "XSS", en: "XSS" }, { fr: "CSRF", en: "CSRF" }, { fr: "Échappement", en: "Escaping" }, { fr: "CSP", en: "CSP" }, { fr: "Token anti-CSRF", en: "Anti-CSRF token" }]),
  L("web-injection-headers", "web-security", "Injections et headers HTTP", "Injections and HTTP headers", "Sécuriser entrées et headers.", "Secure inputs and headers.", "lock", "http-https", [{ fr: "Injection SQL", en: "SQL injection" }, { fr: "Header", en: "Header" }, { fr: "HSTS", en: "HSTS" }, { fr: "Sanitization", en: "Sanitization" }, { fr: "Validation", en: "Validation" }]),
];

const swExtra = [
  L("sw-oop", "sw-oop-architecture", "Programmation orientée objet", "Object-oriented programming", "Classes, objets, encapsulation.", "Classes, objects, encapsulation.", "layers", "mvc-architecture", [{ fr: "Classe", en: "Class" }, { fr: "Objet", en: "Object" }, { fr: "Héritage", en: "Inheritance" }, { fr: "Polymorphisme", en: "Polymorphism" }, { fr: "Encapsulation", en: "Encapsulation" }]),
  L("sw-architecture", "sw-oop-architecture", "Architecture logicielle", "Software architecture", "Séparer responsabilités dans un système.", "Separate responsibilities in a system.", "network", "mvc-architecture", [{ fr: "Couche", en: "Layer" }, { fr: "Module", en: "Module" }, { fr: "Couplage", en: "Coupling" }, { fr: "Cohésion", en: "Cohesion" }, { fr: "Frontière", en: "Boundary" }]),
  L("sw-solid", "sw-oop-architecture", "Principes SOLID", "SOLID principles", "Appliquer SOLID au quotidien.", "Apply SOLID day to day.", "award", "solid-overview", [{ fr: "SRP", en: "SRP" }, { fr: "OCP", en: "OCP" }, { fr: "LSP", en: "LSP" }, { fr: "ISP", en: "ISP" }, { fr: "DIP", en: "DIP" }]),
  L("sw-design-patterns-clean", "sw-oop-architecture", "Design patterns et clean code", "Design patterns and clean code", "Patterns utiles et code lisible.", "Useful patterns and readable code.", "sparkles", "mvc-architecture", [{ fr: "Pattern", en: "Pattern" }, { fr: "Factory", en: "Factory" }, { fr: "Observer", en: "Observer" }, { fr: "Naming", en: "Naming" }, { fr: "Refactoring", en: "Refactoring" }]),
  L("sw-git-basics", "sw-engineering", "Git : bases", "Git basics", "Commit, status, log, diff.", "Commit, status, log, diff.", "book", "git-branch", [{ fr: "Commit", en: "Commit" }, { fr: "Staging", en: "Staging" }, { fr: "Branche", en: "Branch" }, { fr: "Diff", en: "Diff" }, { fr: "Repository", en: "Repository" }]),
  L("sw-git-workflow", "sw-engineering", "Git workflow", "Git workflow", "Feature branches et merge.", "Feature branches and merge.", "book", "git-branch", [{ fr: "Merge", en: "Merge" }, { fr: "Rebase", en: "Rebase" }, { fr: "Pull request", en: "Pull request" }, { fr: "Conflit", en: "Conflict" }, { fr: "main", en: "main" }]),
  L("sw-testing", "sw-engineering", "Tests unitaires et d'intégration", "Unit and integration tests", "Pyramide de tests.", "Test pyramid.", "award", "test-pyramid", [{ fr: "Unitaire", en: "Unit" }, { fr: "Intégration", en: "Integration" }, { fr: "E2E", en: "E2E" }, { fr: "Assertion", en: "Assertion" }, { fr: "Mock", en: "Mock" }]),
  L("sw-debugging-errors", "sw-engineering", "Debugging et gestion d'erreurs", "Debugging and error handling", "Isoler un bug méthodiquement.", "Isolate a bug methodically.", "search", "mvc-architecture", [{ fr: "Stack trace", en: "Stack trace" }, { fr: "Breakpoint", en: "Breakpoint" }, { fr: "Log", en: "Log" }, { fr: "Exception", en: "Exception" }, { fr: "Reproduction", en: "Reproduction" }]),
  L("sw-api-docs", "sw-delivery", "API et documentation", "APIs and documentation", "Documenter pour les humains.", "Document for humans.", "book", "rest-api", [{ fr: "OpenAPI", en: "OpenAPI" }, { fr: "Contrat", en: "Contract" }, { fr: "Exemple", en: "Example" }, { fr: "Versioning", en: "Versioning" }, { fr: "README", en: "README" }]),
  L("sw-cicd", "sw-delivery", "CI/CD", "CI/CD", "Automatiser build test deploy.", "Automate build test deploy.", "zap", "ci-cd", [{ fr: "Pipeline", en: "Pipeline" }, { fr: "Build", en: "Build" }, { fr: "Artifact", en: "Artifact" }, { fr: "Deploy", en: "Deploy" }, { fr: "Environnement", en: "Environment" }]),
  L("sw-code-review-quality", "sw-delivery", "Revue de code et qualité", "Code review and quality", "Faire des reviews utiles.", "Do useful reviews.", "award", "solid-overview", [{ fr: "Review", en: "Review" }, { fr: "Feedback", en: "Feedback" }, { fr: "Lint", en: "Lint" }, { fr: "Couverture", en: "Coverage" }, { fr: "Debt", en: "Debt" }]),
  L("sw-agile", "sw-delivery", "Méthodes Agile", "Agile methods", "Itérer avec le feedback.", "Iterate with feedback.", "flame", "ci-cd", [{ fr: "Sprint", en: "Sprint" }, { fr: "Backlog", en: "Backlog" }, { fr: "Stand-up", en: "Stand-up" }, { fr: "Rétrospective", en: "Retrospective" }, { fr: "Increment", en: "Increment" }]),
];

function toTs(name, arr) {
  return `import type { Lesson } from "@/types/learning";\n\nexport const ${name}: Lesson[] = ${JSON.stringify(arr, null, 2)} as Lesson[];\n`;
}

fs.writeFileSync("data/lessons/webExtra.ts", toTs("WEB_EXTRA_LESSONS", webExtra));
fs.writeFileSync("data/lessons/softwareExtra.ts", toTs("SOFTWARE_EXTRA_LESSONS", swExtra));
console.log("ok", webExtra.length, swExtra.length);
