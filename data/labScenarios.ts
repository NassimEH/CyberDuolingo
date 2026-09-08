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
  objective?: LocalizedString;
  category?: LocalizedString;
  difficulty?: "easy" | "medium" | "hard";
  icon: AppIcon;
  introMessage: LocalizedString;
  /** Global suggestions (fallback). Prefer beatSuggestions when present. */
  suggestedReplies: LocalizedString[];
  /** Per-beat suggestion chips (index aligned with tutorBeats progress). */
  beatSuggestions?: LocalizedString[][];
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
    difficulty: "medium",
    category: { fr: "DNS", en: "DNS" },
    objective: {
      fr: "Isoler un problème DNS quand le ping IP fonctionne encore.",
      en: "Isolate a DNS issue when IP ping still works.",
    },
    introMessage: {
      fr: "Un collègue dit « Internet est mort ». Ping d’une IP publique marche. Par où commences-tu ?",
      en: "A coworker says “the Internet is dead.” Pinging a public IP works. Where do you start?",
    },
    suggestedReplies: [
      { fr: "Je teste la résolution DNS", en: "I test DNS resolution" },
      { fr: "Je change de résolveur (1.1.1.1)", en: "I switch resolver (1.1.1.1)" },
      { fr: "Je regarde le câble uniquement", en: "I only check the cable" },
    ],
    beatSuggestions: [
      [
        { fr: "Je teste la résolution DNS", en: "I test DNS resolution" },
        { fr: "Je change de résolveur (1.1.1.1)", en: "I switch resolver (1.1.1.1)" },
        { fr: "Je regarde le câble uniquement", en: "I only check the cable" },
      ],
      [
        { fr: "Je compare avec 1.1.1.1", en: "I compare with 1.1.1.1" },
        { fr: "Je regarde le cache DNS", en: "I check the DNS cache" },
      ],
      [
        { fr: "Je confirme le résolveur défaillant", en: "I confirm the bad resolver" },
        { fr: "Je documente l’incident", en: "I document the incident" },
      ],
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
    difficulty: "easy",
    category: { fr: "LAN", en: "LAN" },
    objective: {
      fr: "Expliquer clairement ce qu’est ton LAN domestique.",
      en: "Clearly explain what your home LAN is.",
    },
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
    difficulty: "easy",
    category: { fr: "Sécurité web", en: "Web security" },
    objective: {
      fr: "Choisir HTTPS pour une page de login et justifier pourquoi.",
      en: "Choose HTTPS for a login page and justify why.",
    },
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
    difficulty: "hard",
    category: { fr: "Pare-feu", en: "Firewall" },
    objective: {
      fr: "Exposer un service avec la surface d’attaque minimale.",
      en: "Expose a service with minimal attack surface.",
    },
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
  {
    id: "lab-rest-debug",
    trackId: "web",
    title: { fr: "API REST cassée", en: "Broken REST API" },
    subtitle: {
      fr: "Diagnostiquer un 401 / 404",
      en: "Diagnose a 401 / 404",
    },
    difficulty: "medium",
    category: { fr: "Backend", en: "Backend" },
    objective: {
      fr: "Distinguer une erreur d’auth d’une ressource introuvable.",
      en: "Distinguish an auth error from a missing resource.",
    },
    icon: "layers",
    introMessage: {
      fr: "Le front reçoit 401 sur GET /users/me et 404 sur GET /users/42. Par où commences-tu ?",
      en: "The frontend gets 401 on GET /users/me and 404 on GET /users/42. Where do you start?",
    },
    suggestedReplies: [
      {
        fr: "401 = token/session, 404 = ressource",
        en: "401 = token/session, 404 = resource",
      },
      { fr: "Tout est un bug CORS", en: "Everything is a CORS bug" },
      { fr: "Je ignore les codes HTTP", en: "I ignore HTTP status codes" },
    ],
    beatSuggestions: [
      [
        {
          fr: "401 = token/session, 404 = ressource",
          en: "401 = token/session, 404 = resource",
        },
        { fr: "Tout est un bug CORS", en: "Everything is a CORS bug" },
      ],
      [
        { fr: "Je vérifie l’Authorization header", en: "I check the Authorization header" },
        { fr: "Je regarde l’id 42 en base", en: "I check id 42 in the DB" },
      ],
    ],
    tutorBeats: [
      {
        fr: "Oui — sépare auth et existence. CORS n’explique pas ces deux codes à la fois.",
        en: "Yes — separate auth from existence. CORS doesn’t explain both codes.",
      },
      {
        fr: "Parfait : header manquant/expiré pour /me, et id absent pour /42.",
        en: "Perfect: missing/expired header for /me, missing id for /42.",
      },
      {
        fr: "Les codes HTTP sont ton premier signal. Ne les ignore pas.",
        en: "HTTP codes are your first signal. Don’t ignore them.",
      },
      {
        fr: "Lab terminé : tu lis correctement les erreurs REST.",
        en: "Lab done: you read REST errors correctly.",
      },
    ],
    xpReward: 18,
  },
  {
    id: "lab-git-conflict",
    trackId: "software",
    title: { fr: "Conflit Git", en: "Git conflict" },
    subtitle: {
      fr: "Résoudre sans paniquer",
      en: "Resolve without panic",
    },
    difficulty: "medium",
    category: { fr: "Git", en: "Git" },
    objective: {
      fr: "Comprendre un conflit de merge et la bonne séquence de résolution.",
      en: "Understand a merge conflict and the right resolution sequence.",
    },
    icon: "book",
    introMessage: {
      fr: "git merge main affiche un conflit dans app.ts. Que fais-tu en premier ?",
      en: "git merge main shows a conflict in app.ts. What do you do first?",
    },
    suggestedReplies: [
      {
        fr: "Je lis les marqueurs <<<<<< et je choisis",
        en: "I read <<<<<< markers and choose",
      },
      { fr: "Je force push immédiatement", en: "I force push immediately" },
      { fr: "Je supprime le dépôt", en: "I delete the repo" },
    ],
    beatSuggestions: [
      [
        {
          fr: "Je lis les marqueurs <<<<<< et je choisis",
          en: "I read <<<<<< markers and choose",
        },
        { fr: "Je force push immédiatement", en: "I force push immediately" },
      ],
      [
        { fr: "J’ajoute le fichier puis je commit", en: "I add the file then commit" },
        { fr: "Je teste avant de pousser", en: "I test before pushing" },
      ],
    ],
    tutorBeats: [
      {
        fr: "Oui — les marqueurs montrent les deux versions. Le force push est dangereux ici.",
        en: "Yes — markers show both versions. Force push is dangerous here.",
      },
      {
        fr: "Après résolution : add + commit du merge, puis tests.",
        en: "After resolving: add + commit the merge, then tests.",
      },
      {
        fr: "Supprimer le dépôt n’est jamais la solution. On résout le conflit.",
        en: "Deleting the repo is never the answer. We resolve the conflict.",
      },
      {
        fr: "Lab terminé : tu gères un conflit calmement.",
        en: "Lab done: you handle a conflict calmly.",
      },
    ],
    xpReward: 18,
  },
  {
    id: "lab-jwt-debug",
    trackId: "web",
    title: { fr: "JWT expiré", en: "Expired JWT" },
    subtitle: {
      fr: "Déboguer un 401 après login",
      en: "Debug a 401 after login",
    },
    difficulty: "medium",
    category: { fr: "Auth", en: "Auth" },
    objective: {
      fr: "Relier un 401 à un token JWT expiré et choisir le bon refresh.",
      en: "Link a 401 to an expired JWT and pick the right refresh path.",
    },
    icon: "layers",
    introMessage: {
      fr: "L’utilisateur était connecté. Soudain GET /me renvoie 401. Le cookie de session n’existe pas — vous utilisez un Bearer JWT. Que vérifies-tu en premier ?",
      en: "The user was signed in. Suddenly GET /me returns 401. There’s no session cookie — you use a Bearer JWT. What do you check first?",
    },
    suggestedReplies: [
      {
        fr: "Je décode le JWT et regarde exp",
        en: "I decode the JWT and check exp",
      },
      { fr: "Je recrée le compte utilisateur", en: "I recreate the user account" },
      { fr: "Je désactive HTTPS", en: "I disable HTTPS" },
    ],
    beatSuggestions: [
      [
        {
          fr: "Je décode le JWT et regarde exp",
          en: "I decode the JWT and check exp",
        },
        { fr: "Je recrée le compte utilisateur", en: "I recreate the user account" },
      ],
      [
        {
          fr: "J’appelle /refresh avec le refresh token",
          en: "I call /refresh with the refresh token",
        },
        {
          fr: "Je force l’utilisateur à tout retaper",
          en: "I force the user to retype everything",
        },
      ],
      [
        {
          fr: "Je stocke le nouveau access token",
          en: "I store the new access token",
        },
        {
          fr: "Je log le secret JWT côté client",
          en: "I log the JWT secret on the client",
        },
      ],
    ],
    tutorBeats: [
      {
        fr: "Oui — un exp passé explique le 401. Recréer le compte ne change rien au token.",
        en: "Yes — a past exp explains the 401. Recreating the account won’t fix the token.",
      },
      {
        fr: "Parfait : refresh silencieux si possible, sinon re-login. Pas de panique UX.",
        en: "Perfect: silent refresh when possible, otherwise re-login. No UX panic.",
      },
      {
        fr: "Tu remplaces l’access token et tu retires /me. Jamais le secret côté client.",
        en: "You replace the access token and retry /me. Never put the secret on the client.",
      },
      {
        fr: "Lab terminé : tu diagnostiques un JWT expiré proprement.",
        en: "Lab done: you diagnose an expired JWT cleanly.",
      },
    ],
    xpReward: 16,
  },
  {
    id: "lab-cors-block",
    trackId: "web",
    title: { fr: "Blocage CORS", en: "CORS block" },
    subtitle: {
      fr: "La requête part… et meurt dans le navigateur",
      en: "The request leaves… and dies in the browser",
    },
    difficulty: "medium",
    category: { fr: "HTTP", en: "HTTP" },
    objective: {
      fr: "Comprendre un refus CORS et la bonne correction côté API.",
      en: "Understand a CORS refusal and the right API-side fix.",
    },
    icon: "globe",
    introMessage: {
      fr: "Depuis localhost:3000, fetch vers api.example.com échoue : « blocked by CORS ». Network montre parfois un OPTIONS. Que se passe-t-il ?",
      en: "From localhost:3000, fetch to api.example.com fails: “blocked by CORS”. Network sometimes shows OPTIONS. What’s going on?",
    },
    suggestedReplies: [
      {
        fr: "Le navigateur exige des headers CORS sur l’API",
        en: "The browser requires CORS headers on the API",
      },
      { fr: "Le DNS est cassé", en: "DNS is broken" },
      { fr: "Il faut désactiver le firewall", en: "You must disable the firewall" },
    ],
    beatSuggestions: [
      [
        {
          fr: "Le navigateur exige des headers CORS sur l’API",
          en: "The browser requires CORS headers on the API",
        },
        { fr: "Le DNS est cassé", en: "DNS is broken" },
      ],
      [
        {
          fr: "Autoriser l’origine localhost:3000 côté serveur",
          en: "Allow origin localhost:3000 on the server",
        },
        {
          fr: "Ajouter Access-Control-* dans le front seulement",
          en: "Add Access-Control-* only in the frontend",
        },
      ],
      [
        {
          fr: "Vérifier aussi les méthodes et headers autorisés",
          en: "Also check allowed methods and headers",
        },
        {
          fr: "Mettre * partout en production",
          en: "Use * everywhere in production",
        },
      ],
    ],
    tutorBeats: [
      {
        fr: "Exact — le navigateur bloque la lecture de la réponse sans CORS. Ce n’est pas du DNS.",
        en: "Exactly — the browser blocks reading the response without CORS. It’s not DNS.",
      },
      {
        fr: "Les headers CORS viennent du serveur (ou d’un proxy). Pas du JS front seul.",
        en: "CORS headers come from the server (or a proxy). Not from frontend JS alone.",
      },
      {
        fr: "Oui : origin + methods + headers. Évite * + credentials en prod.",
        en: "Yes: origin + methods + headers. Avoid * with credentials in prod.",
      },
      {
        fr: "Lab terminé : tu corriges un CORS au bon endroit.",
        en: "Lab done: you fix CORS in the right place.",
      },
    ],
    xpReward: 16,
  },
  {
    id: "lab-pr-review",
    trackId: "software",
    title: { fr: "Review de PR", en: "PR review" },
    subtitle: {
      fr: "Naming, tests, et feedback utile",
      en: "Naming, tests, and useful feedback",
    },
    difficulty: "easy",
    category: { fr: "Git", en: "Git" },
    objective: {
      fr: "Prioriser les retours utiles sur une pull request (clarté + tests).",
      en: "Prioritize useful feedback on a pull request (clarity + tests).",
    },
    icon: "book",
    introMessage: {
      fr: "Une PR ajoute getUsrData() sans tests, avec un if imbriqué de 40 lignes. Par où commences-tu ta review ?",
      en: "A PR adds getUsrData() with no tests and a 40-line nested if. Where do you start your review?",
    },
    suggestedReplies: [
      {
        fr: "Naming + lisibilité, puis couverture de tests",
        en: "Naming + readability, then test coverage",
      },
      { fr: "Je merge sans lire", en: "I merge without reading" },
      { fr: "Je commente seulement le style des espaces", en: "I only comment on spacing style" },
    ],
    beatSuggestions: [
      [
        {
          fr: "Naming + lisibilité, puis couverture de tests",
          en: "Naming + readability, then test coverage",
        },
        { fr: "Je merge sans lire", en: "I merge without reading" },
      ],
      [
        {
          fr: "Je demande un test sur le cas limite",
          en: "I ask for a test on the edge case",
        },
        {
          fr: "Je réécris toute la PR moi-même",
          en: "I rewrite the whole PR myself",
        },
      ],
      [
        {
          fr: "Feedback précis et actionnable",
          en: "Precise, actionable feedback",
        },
        {
          fr: "« C’est nul » sans exemple",
          en: "“This is bad” with no example",
        },
      ],
    ],
    tutorBeats: [
      {
        fr: "Oui — getUserData et un découpage du if aident plus qu’un merge aveugle.",
        en: "Yes — getUserData and splitting the if help more than a blind merge.",
      },
      {
        fr: "Demander un test ciblé > tout réécrire. Tu guides l’auteur.",
        en: "Ask for a focused test > rewrite everything. You guide the author.",
      },
      {
        fr: "Un bon commentaire cite le risque et propose une piste.",
        en: "A good comment names the risk and suggests a path.",
      },
      {
        fr: "Lab terminé : tu reviews une PR avec impact.",
        en: "Lab done: you review a PR with impact.",
      },
    ],
    xpReward: 14,
  },
  {
    id: "lab-ci-red",
    trackId: "software",
    title: { fr: "Pipeline CI rouge", en: "Red CI pipeline" },
    subtitle: {
      fr: "Lint, tests, et ordre de debug",
      en: "Lint, tests, and debug order",
    },
    difficulty: "medium",
    category: { fr: "CI", en: "CI" },
    objective: {
      fr: "Lire un job CI rouge et isoler lint vs tests vs flaky.",
      en: "Read a red CI job and isolate lint vs tests vs flaky.",
    },
    icon: "layers",
    introMessage: {
      fr: "GitHub Actions : job « test » rouge. Le log montre ESLint OK, puis 1 test Failed : expected 200, received 401. Que fais-tu ?",
      en: "GitHub Actions: “test” job red. Log shows ESLint OK, then 1 Failed test: expected 200, received 401. What do you do?",
    },
    suggestedReplies: [
      {
        fr: "Je regarde le test et le setup d’auth",
        en: "I inspect the test and auth setup",
      },
      { fr: "Je relance 10 fois jusqu’au vert", en: "I rerun 10 times until green" },
      { fr: "Je désactive toute la CI", en: "I disable all of CI" },
    ],
    beatSuggestions: [
      [
        {
          fr: "Je regarde le test et le setup d’auth",
          en: "I inspect the test and auth setup",
        },
        { fr: "Je relance 10 fois jusqu’au vert", en: "I rerun 10 times until green" },
      ],
      [
        {
          fr: "Fixture / token manquant dans le job",
          en: "Missing fixture / token in the job",
        },
        {
          fr: "C’est forcément un bug React",
          en: "It must be a React bug",
        },
      ],
      [
        {
          fr: "Je corrige le test ou les secrets CI, puis je re-push",
          en: "I fix the test or CI secrets, then re-push",
        },
        {
          fr: "Je skip le test avec .only en prod",
          en: "I skip the test with .only in prod",
        },
      ],
    ],
    tutorBeats: [
      {
        fr: "Bon réflexe — lint vert + assert HTTP = problème de setup/auth, pas « relancer ». ",
        en: "Good call — green lint + HTTP assert = setup/auth issue, not “rerun harder”.",
      },
      {
        fr: "Souvent : secret, env, ou mock manquant dans le workflow.",
        en: "Often: secret, env, or missing mock in the workflow.",
      },
      {
        fr: "Oui — corrige la cause. Skipper le test cache la régression.",
        en: "Yes — fix the cause. Skipping the test hides the regression.",
      },
      {
        fr: "Lab terminé : tu lis une CI rouge méthodiquement.",
        en: "Lab done: you read a red CI run methodically.",
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

export function getAllLabScenarios() {
  return LAB_SCENARIOS;
}

export function getLabScenario(id: string) {
  return LAB_SCENARIOS.find((s) => s.id === id);
}
