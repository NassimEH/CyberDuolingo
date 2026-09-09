import type { AppIcon } from "@/constants/icons";
import type { LocalizedString } from "@/lib/i18n/translations";
import type { TrackId } from "@/types/learning";

export type AnswerVerdict = "correct" | "partial" | "incorrect";

export interface LabChoice {
  id: string;
  label: LocalizedString;
  /** Keywords that map free-text answers to this choice. */
  keywords?: string[];
  verdict: AnswerVerdict;
  tutorReply: LocalizedString;
  explanation: LocalizedString;
  /** Next step id, or null to end the lab. */
  nextStepId: string | null;
}

export interface LabStep {
  id: string;
  /** Situation + question shown when entering this step. */
  prompt: LocalizedString;
  choices: LabChoice[];
  fallback: {
    verdict: AnswerVerdict;
    tutorReply: LocalizedString;
    explanation: LocalizedString;
    nextStepId: string | null;
  };
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
  startStepId: string;
  steps: Record<string, LabStep>;
  /** Number of decision steps (for progress UI). */
  stepCount: number;
  takeaways: LocalizedString[];
  xpReward: number;
}

function L(fr: string, en: string): LocalizedString {
  return { fr, en };
}

export const LAB_SCENARIOS: LabScenario[] = [
  // ─── Networking ───────────────────────────────────────────
  {
    id: "lab-dns-incident",
    trackId: "networking",
    title: L("Incident DNS", "DNS incident"),
    subtitle: L("Le site ne charge plus…", "The site won’t load…"),
    icon: "search",
    difficulty: "medium",
    category: L("DNS", "DNS"),
    objective: L(
      "Isoler un problème DNS quand le ping IP fonctionne encore.",
      "Isolate a DNS issue when IP ping still works."
    ),
    introMessage: L(
      "Un collègue dit que « Internet est mort ». Pinger 8.8.8.8 marche. Naviguer vers app.interne.local échoue. Tu es l’analyste de garde.",
      "A coworker says “the Internet is dead.” Pinging 8.8.8.8 works. Browsing to app.interne.local fails. You’re the on-call analyst."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 45,
    takeaways: [
      L(
        "Ping IP OK + noms KO pointe presque toujours vers le DNS.",
        "IP ping OK + names fail almost always points to DNS."
      ),
      L(
        "Comparer le résolveur local à un résolveur public isole la cause.",
        "Comparing the local resolver to a public one isolates the cause."
      ),
      L(
        "Documente le résolveur fautif avant de le changer en prod.",
        "Document the faulty resolver before changing it in prod."
      ),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L(
          "Par où commences-tu pour confirmer le diagnostic ?",
          "Where do you start to confirm the diagnosis?"
        ),
        choices: [
          {
            id: "s1-a",
            label: L(
              "Je teste la résolution DNS (nslookup / dig)",
              "I test DNS resolution (nslookup / dig)"
            ),
            keywords: ["dns", "nslookup", "dig", "resolution", "résolution", "resolve"],
            verdict: "correct",
            explanation: L(
              "Tester la résolution sépare clairement réseau IP et noms.",
              "Testing resolution cleanly separates IP networking from naming."
            ),
            tutorReply: L(
              "Bonne piste. nslookup échoue sur le résolveur interne, mais répond via 1.1.1.1. Que fais-tu ensuite ?",
              "Solid move. nslookup fails on the internal resolver, but answers via 1.1.1.1. What’s next?"
            ),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L(
              "Je change tout de suite de résolveur (1.1.1.1)",
              "I immediately switch resolver (1.1.1.1)"
            ),
            keywords: ["1.1.1.1", "8.8.8.8", "change", "resolver", "résolveur", "cloudflare"],
            verdict: "partial",
            explanation: L(
              "Utile comme test, mais sans mesure préalable tu manques une preuve claire.",
              "Useful as a test, but without a baseline measurement you miss clear proof."
            ),
            tutorReply: L(
              "Tu as contourné le problème : ça marche avec 1.1.1.1. On a un signal, mais pas encore la preuve. On compare proprement les résolveurs. Ensuite ?",
              "You bypassed it: 1.1.1.1 works. We have a signal, not yet hard proof. Let’s compare resolvers cleanly. Next?"
            ),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L(
              "Je regarde uniquement le câble / Wi-Fi",
              "I only check the cable / Wi-Fi"
            ),
            keywords: ["cable", "câble", "wifi", "wi-fi", "physique", "physical"],
            verdict: "incorrect",
            explanation: L(
              "Le ping IP prouve déjà qu’un chemin L3 existe. Le câble n’explique pas l’échec des noms.",
              "IP ping already proves an L3 path exists. Cabling doesn’t explain name failures."
            ),
            tutorReply: L(
              "Le lien physique n’est pas en cause ici. Un test DNS montre l’échec du résolveur interne. On recentre. Quelle est la prochaine action ?",
              "Physical link isn’t the issue here. A DNS test shows the internal resolver failing. Refocus. What’s the next action?"
            ),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L(
            "Il fallait commencer par un test de résolution DNS.",
            "You needed to start with a DNS resolution test."
          ),
          tutorReply: L(
            "Pas le bon angle. Un nslookup montre que le résolveur interne échoue. On continue avec une comparaison. Ensuite ?",
            "Wrong angle. nslookup shows the internal resolver failing. We continue with a comparison. Next?"
          ),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L(
          "Comment confirmes-tu que le résolveur habituel est fautif ?",
          "How do you confirm the usual resolver is at fault?"
        ),
        choices: [
          {
            id: "s2-a",
            label: L(
              "Je compare le résolveur interne à 1.1.1.1",
              "I compare the internal resolver to 1.1.1.1"
            ),
            keywords: ["compare", "1.1.1.1", "public", "différent", "different"],
            verdict: "correct",
            explanation: L(
              "Une comparaison contrôlée isole le résolveur sans changer toute la config.",
              "A controlled comparison isolates the resolver without rewriting the whole config."
            ),
            tutorReply: L(
              "Confirmé : seul le résolveur interne échoue. Comment clôtures-tu l’incident ?",
              "Confirmed: only the internal resolver fails. How do you close the incident?"
            ),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L(
              "Je vide le cache DNS local uniquement",
              "I only flush the local DNS cache"
            ),
            keywords: ["cache", "flush", "ipconfig", "nscache"],
            verdict: "partial",
            explanation: L(
              "Le cache peut jouer, mais ici le résolveur distant répond mal aussi.",
              "Cache can matter, but here the remote resolver answers badly too."
            ),
            tutorReply: L(
              "Le flush ne change rien. La comparaison résolveur confirme la panne côté DNS. Comment clôtures-tu ?",
              "Flush changes nothing. Resolver comparison confirms the DNS outage. How do you close it?"
            ),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L(
              "Je redémarre tous les serveurs web",
              "I reboot every web server"
            ),
            keywords: ["reboot", "redémarre", "restart", "serveur", "server"],
            verdict: "incorrect",
            explanation: L(
              "Les serveurs web ne sont pas en cause : le ping IP et le DNS public fonctionnent.",
              "Web servers aren’t involved: IP ping and public DNS work."
            ),
            tutorReply: L(
              "Inutile ici. La preuve pointe vers le résolveur. Documentons et corrigeons. Comment clôtures-tu ?",
              "Useless here. Evidence points to the resolver. Let’s document and fix. How do you close it?"
            ),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L(
            "Il fallait comparer le résolveur interne à un résolveur public.",
            "You needed to compare the internal resolver to a public one."
          ),
          tutorReply: L(
            "On a la preuve via comparaison. Passons à la clôture. Que fais-tu ?",
            "We have proof via comparison. Move to closure. What do you do?"
          ),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L(
          "Quelle clôture est la plus professionnelle ?",
          "Which closure is most professional?"
        ),
        choices: [
          {
            id: "s3-a",
            label: L(
              "Je documente le résolveur fautif puis je bascule en sécurité",
              "I document the faulty resolver then fail over safely"
            ),
            keywords: ["document", "bascule", "failover", "ticket", "incident"],
            verdict: "correct",
            explanation: L(
              "Preuve + bascule contrôlée = incident bien géré.",
              "Evidence + controlled failover = well-handled incident."
            ),
            tutorReply: L(
              "Parfait. L’incident est isolé, documenté et corrigé. Lab terminé.",
              "Perfect. The incident is isolated, documented, and fixed. Lab complete."
            ),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L(
              "Je change le DNS sans laisser de trace",
              "I change DNS with no paper trail"
            ),
            keywords: ["sans", "trace", "discret", "quiet", "silent"],
            verdict: "partial",
            explanation: L(
              "Le service revient, mais sans doc l’équipe reviendra au même mur.",
              "Service returns, but without docs the team will hit the same wall again."
            ),
            tutorReply: L(
              "Le service est revenu, mais la prochaine garde partira à l’aveugle. Pense documentation. Lab terminé.",
              "Service is back, but the next on-call starts blind. Think documentation. Lab complete."
            ),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L(
              "Je ferme le ticket sans action",
              "I close the ticket with no action"
            ),
            keywords: ["ferme", "close", "rien", "nothing", "ignore"],
            verdict: "incorrect",
            explanation: L(
              "La cause est connue : il faut agir et tracer.",
              "The cause is known: you must act and leave a trail."
            ),
            tutorReply: L(
              "L’incident resterait ouvert côté métier. On documente et on bascule. Lab terminé.",
              "The business incident would stay open. Document and fail over. Lab complete."
            ),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L(
            "Il fallait documenter puis basculer le résolveur.",
            "You needed to document then fail over the resolver."
          ),
          tutorReply: L(
            "Clôture attendue : preuve écrite + bascule. Lab terminé.",
            "Expected closure: written proof + failover. Lab complete."
          ),
          nextStepId: null,
        },
      },
    },
  },
  {
    id: "lab-home-lan",
    trackId: "networking",
    title: L("Expliquer ton LAN", "Explain your LAN"),
    subtitle: L("Topologie maison sous pression", "Home topology under pressure"),
    icon: "home",
    difficulty: "easy",
    category: L("LAN", "LAN"),
    objective: L(
      "Décrire correctement rôles box, switch et Wi-Fi.",
      "Correctly describe router, switch, and Wi-Fi roles."
    ),
    introMessage: L(
      "Un ami veut comprendre pourquoi sa TV filaire marche mais son téléphone Wi-Fi rame. Tu expliques la topologie.",
      "A friend wonders why the wired TV works while the Wi-Fi phone crawls. You explain the topology."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 35,
    takeaways: [
      L("La box route vers Internet ; le switch étend le LAN filaire.", "The gateway routes to the Internet; the switch extends the wired LAN."),
      L("Wi-Fi et Ethernet partagent souvent le même LAN logique.", "Wi-Fi and Ethernet often share the same logical LAN."),
      L("Un souci Wi-Fi n’implique pas forcément une panne Internet.", "A Wi-Fi issue doesn’t always mean an Internet outage."),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L("Quel composant donne l’accès Internet ici ?", "Which device provides Internet access here?"),
        choices: [
          {
            id: "s1-a",
            label: L("La box / routeur", "The gateway / router"),
            keywords: ["box", "routeur", "router", "gateway", "passerelle"],
            verdict: "correct",
            explanation: L("C’est le point de sortie NAT vers le FAI.", "It’s the NAT exit point to the ISP."),
            tutorReply: L("Exact. Et le switch dans ce schéma ?", "Exactly. And the switch in this setup?"),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L("Le switch", "The switch"),
            keywords: ["switch", "commutateur"],
            verdict: "incorrect",
            explanation: L("Le switch relie des machines locales, il ne route pas vers Internet.", "A switch links local hosts; it doesn’t route to the Internet."),
            tutorReply: L("Le switch reste dans le LAN. L’accès Internet passe par la box. Rôle du switch ensuite ?", "The switch stays on the LAN. Internet access goes through the gateway. Switch role next?"),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L("Le téléphone", "The phone"),
            keywords: ["phone", "téléphone", "client"],
            verdict: "incorrect",
            explanation: L("Le téléphone est un client, pas une passerelle.", "The phone is a client, not a gateway."),
            tutorReply: L("Client ≠ passerelle. La box route. Quel est le rôle du switch ?", "Client ≠ gateway. The box routes. What’s the switch’s role?"),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("La box / routeur fournit l’accès Internet.", "The gateway / router provides Internet access."),
          tutorReply: L("On recentre : la box route. Rôle du switch ?", "Refocus: the gateway routes. Switch role?"),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L("À quoi sert le switch ici ?", "What does the switch do here?"),
        choices: [
          {
            id: "s2-a",
            label: L("Étendre le LAN filaire entre appareils", "Extend the wired LAN between devices"),
            keywords: ["étendre", "extend", "lan", "filaire", "wired", "ports"],
            verdict: "correct",
            explanation: L("Plus de ports Ethernet sur le même réseau local.", "More Ethernet ports on the same local network."),
            tutorReply: L("Oui. Pourquoi la TV filaire peut marcher alors que le Wi-Fi rame ?", "Yes. Why can the wired TV work while Wi-Fi crawls?"),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L("Remplacer totalement la box", "Fully replace the gateway"),
            keywords: ["remplacer", "replace", "box"],
            verdict: "incorrect",
            explanation: L("Sans routeur, pas de sortie Internet typique chez soi.", "Without a router there’s typically no home Internet exit."),
            tutorReply: L("Non. Le switch étend le LAN. Pourquoi le Wi-Fi peut souffrir seul ?", "No. The switch extends the LAN. Why can Wi-Fi suffer alone?"),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L("Chiffrer tout le trafic Internet", "Encrypt all Internet traffic"),
            keywords: ["chiffrer", "encrypt", "vpn", "tls"],
            verdict: "incorrect",
            explanation: L("Ce n’est pas le rôle d’un switch L2 classique.", "That’s not a classic L2 switch role."),
            tutorReply: L("Hors sujet. Le switch étend le filaire. Focus Wi-Fi vs Ethernet.", "Off topic. The switch extends wired. Focus Wi-Fi vs Ethernet."),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Le switch étend le LAN filaire.", "The switch extends the wired LAN."),
          tutorReply: L("On enchaîne : Wi-Fi vs Ethernet.", "Next: Wi-Fi vs Ethernet."),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L("Meilleure explication du symptôme ?", "Best explanation of the symptom?"),
        choices: [
          {
            id: "s3-a",
            label: L("Le Wi-Fi est saturé ou mal placé, le filaire non", "Wi-Fi is congested or poorly placed; wired isn’t"),
            keywords: ["wifi", "satur", "interférence", "interference", "placement", "signal"],
            verdict: "correct",
            explanation: L("Même LAN, supports différents : le radio peut souffrir seul.", "Same LAN, different mediums: radio can suffer alone."),
            tutorReply: L("Exact. Tu as expliqué la topologie proprement. Lab terminé.", "Exactly. You explained the topology cleanly. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L("Internet est forcément coupé", "Internet must be down"),
            keywords: ["coupé", "down", "mort", "dead"],
            verdict: "incorrect",
            explanation: L("La TV filaire contredit une panne Internet totale.", "The wired TV contradicts a total Internet outage."),
            tutorReply: L("Non : le filaire prouve Internet. C’est le Wi-Fi. Lab terminé.", "No: wired proves Internet. It’s Wi-Fi. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L("Le switch bloque le Wi-Fi exprès", "The switch purposely blocks Wi-Fi"),
            keywords: ["bloque", "block", "switch"],
            verdict: "partial",
            explanation: L("Peu probable : le Wi-Fi passe souvent par un AP lié à la box.", "Unlikely: Wi-Fi often goes through an AP tied to the gateway."),
            tutorReply: L("Rare. En pratique : radio saturée ou placement. Lab terminé.", "Rare. In practice: congested radio or placement. Lab complete."),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Le Wi-Fi peut souffrir sans panne Internet.", "Wi-Fi can suffer without an Internet outage."),
          tutorReply: L("Retiens : supports différents, même LAN. Lab terminé.", "Remember: different mediums, same LAN. Lab complete."),
          nextStepId: null,
        },
      },
    },
  },
  {
    id: "lab-https-choice",
    trackId: "networking",
    title: L("HTTP ou HTTPS ?", "HTTP or HTTPS?"),
    subtitle: L("Choix de transport pour un login", "Transport choice for a login"),
    icon: "lock",
    difficulty: "easy",
    category: L("Sécurité web", "Web security"),
    objective: L("Choisir HTTPS pour des identifiants en transit.", "Choose HTTPS for credentials in transit."),
    introMessage: L(
      "Une équipe veut brancher un formulaire de login sur une API. On te demande le protocole.",
      "A team wants to wire a login form to an API. They ask which protocol."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 35,
    takeaways: [
      L("HTTPS chiffre le transit (TLS).", "HTTPS encrypts transit (TLS)."),
      L("HTTP en clair expose mots de passe sur le chemin.", "Cleartext HTTP exposes passwords along the path."),
      L("HSTS / redirect HTTPS réduisent les retours en HTTP.", "HSTS / HTTPS redirects reduce fall-backs to HTTP."),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L("Quel protocole pour envoyer le mot de passe ?", "Which protocol to send the password?"),
        choices: [
          {
            id: "s1-a",
            label: L("HTTPS uniquement", "HTTPS only"),
            keywords: ["https", "tls", "ssl"],
            verdict: "correct",
            explanation: L("TLS protège confidentialité et intégrité en transit.", "TLS protects confidentiality and integrity in transit."),
            tutorReply: L("Bien. Que se passe-t-il si on reste en HTTP ?", "Good. What happens if we stay on HTTP?"),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L("HTTP, « on est en interne »", "HTTP, “we’re internal”"),
            keywords: ["http", "interne", "internal", "lan"],
            verdict: "incorrect",
            explanation: L("Interne ≠ sûr : sniffing, mauvais Wi-Fi, erreurs de config.", "Internal ≠ safe: sniffing, bad Wi-Fi, misconfig."),
            tutorReply: L("Risqué même en LAN. HTTPS reste la base. Risque HTTP ?", "Risky even on LAN. HTTPS is baseline. HTTP risk?"),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L("Les deux, au choix du client", "Both, client’s choice"),
            keywords: ["les deux", "both", "optionnel", "optional"],
            verdict: "partial",
            explanation: L("Laisser HTTP ouvert invite les clients à se tromper.", "Leaving HTTP open invites clients to pick the wrong one."),
            tutorReply: L("Trop permissif. On force HTTPS. Pourquoi HTTP est dangereux ici ?", "Too permissive. Force HTTPS. Why is HTTP dangerous here?"),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Il fallait imposer HTTPS.", "You needed to enforce HTTPS."),
          tutorReply: L("On impose HTTPS. Quel risque avec HTTP ?", "We enforce HTTPS. What’s the HTTP risk?"),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L("Risque principal de HTTP pour un login ?", "Main HTTP risk for a login?"),
        choices: [
          {
            id: "s2-a",
            label: L("Mot de passe lisible sur le chemin", "Password readable on the path"),
            keywords: ["clair", "clear", "sniff", "lisible", "plaintext", "écoute"],
            verdict: "correct",
            explanation: L("Sans TLS, le secret voyage en clair.", "Without TLS, the secret travels in cleartext."),
            tutorReply: L("Exact. Quelle mesure côté serveur pour éviter le retour en HTTP ?", "Exactly. Which server-side measure avoids falling back to HTTP?"),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L("Le CSS ne charge plus", "CSS stops loading"),
            keywords: ["css", "style"],
            verdict: "incorrect",
            explanation: L("Ce n’est pas le risque sécurité principal.", "That’s not the main security risk."),
            tutorReply: L("Le vrai risque : secrets en clair. Comment forcer HTTPS ?", "Real risk: cleartext secrets. How do you force HTTPS?"),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L("Le serveur devient plus lent", "The server gets slower"),
            keywords: ["lent", "slow", "perf"],
            verdict: "partial",
            explanation: L("La perf n’est pas le sujet ; la confidentialité oui.", "Perf isn’t the point; confidentiality is."),
            tutorReply: L("Focus sécu : clairtext. Redirect HTTPS / HSTS ensuite.", "Security focus: cleartext. Then HTTPS redirect / HSTS."),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("HTTP expose le mot de passe en transit.", "HTTP exposes the password in transit."),
          tutorReply: L("Passons à la mitigation serveur.", "On to server-side mitigation."),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L("Bonne pratique serveur ?", "Good server practice?"),
        choices: [
          {
            id: "s3-a",
            label: L("Redirect HTTP→HTTPS + HSTS", "HTTP→HTTPS redirect + HSTS"),
            keywords: ["redirect", "hsts", "301", "force"],
            verdict: "correct",
            explanation: L("On ferme la porte HTTP et on ancre HTTPS.", "You close the HTTP door and anchor HTTPS."),
            tutorReply: L("Nickel. Login protégé en transit. Lab terminé.", "Nice. Login protected in transit. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L("Laisser HTTP « au cas où »", "Leave HTTP “just in case”"),
            keywords: ["laisser", "keep", "cas"],
            verdict: "incorrect",
            explanation: L("La porte ouverte sera utilisée par erreur.", "The open door will be used by mistake."),
            tutorReply: L("Non. Redirect + HSTS. Lab terminé.", "No. Redirect + HSTS. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L("Désactiver TLS pour gagner 2 ms", "Disable TLS to save 2 ms"),
            keywords: ["désactiver", "disable", "tls", "perf"],
            verdict: "incorrect",
            explanation: L("Le gain est négligeable face au risque.", "The gain is negligible versus the risk."),
            tutorReply: L("Mauvaise priorisation. HTTPS reste. Lab terminé.", "Bad trade-off. Keep HTTPS. Lab complete."),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Redirect HTTPS et HSTS sont attendus.", "HTTPS redirect and HSTS are expected."),
          tutorReply: L("Retiens redirect + HSTS. Lab terminé.", "Remember redirect + HSTS. Lab complete."),
          nextStepId: null,
        },
      },
    },
  },
  {
    id: "lab-firewall-min",
    trackId: "networking",
    title: L("Ouvrir le minimum", "Open the minimum"),
    subtitle: L("Règles pare-feu pour une API", "Firewall rules for an API"),
    icon: "shield",
    difficulty: "hard",
    category: L("Pare-feu", "Firewall"),
    objective: L("N’ouvrir que le port nécessaire depuis les bonnes sources.", "Open only the needed port from the right sources."),
    introMessage: L(
      "Prod : API derrière un pare-feu. Le front a besoin du 443. Un collègue propose d’ouvrir 0.0.0.0/0 sur tous les ports « pour dépanner ».",
      "Prod: API behind a firewall. The front needs 443. A coworker suggests opening 0.0.0.0/0 on all ports “to debug”."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 55,
    takeaways: [
      L("Least privilege : port + source minimaux.", "Least privilege: minimal port + source."),
      L("0.0.0.0/0 everywhere est un anti-pattern prod.", "0.0.0.0/0 everywhere is a prod anti-pattern."),
      L("Journaliser et revoir les règles après incident.", "Log and review rules after an incident."),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L("Quelle ouverture proposes-tu ?", "Which opening do you propose?"),
        choices: [
          {
            id: "s1-a",
            label: L("TCP 443 depuis le CIDR du front uniquement", "TCP 443 from the front CIDR only"),
            keywords: ["443", "cidr", "front", "https", "least"],
            verdict: "correct",
            explanation: L("Port utile + source utile = surface minimale.", "Needed port + needed source = minimal surface."),
            tutorReply: L("Bien. Que réponds-tu à l’idée 0.0.0.0/0 all ports ?", "Good. How do you answer the 0.0.0.0/0 all-ports idea?"),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L("Tous les ports depuis partout", "All ports from anywhere"),
            keywords: ["tous", "all", "0.0.0.0", "any"],
            verdict: "incorrect",
            explanation: L("Surface d’attaque maximale, inacceptable en prod.", "Maximal attack surface, unacceptable in prod."),
            tutorReply: L("Refusé. On garde 443 restreint. Argument contre le wide-open ?", "Rejected. Keep restricted 443. Argument against wide-open?"),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L("Ouvrir 22 et 443 au monde", "Open 22 and 443 to the world"),
            keywords: ["22", "ssh", "monde", "world"],
            verdict: "partial",
            explanation: L("443 peut être public ; SSH mondial est dangereux.", "443 may be public; world-open SSH is dangerous."),
            tutorReply: L("SSH mondial non. 443 ciblé oui. Pourquoi éviter le wide-open ?", "No world SSH. Targeted 443 yes. Why avoid wide-open?"),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Il fallait 443 depuis le CIDR front.", "You needed 443 from the front CIDR."),
          tutorReply: L("On adopte least privilege. Suite ?", "We adopt least privilege. Next?"),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L("Pourquoi refuser 0.0.0.0/0 all ports ?", "Why refuse 0.0.0.0/0 all ports?"),
        choices: [
          {
            id: "s2-a",
            label: L("Ça expose des services inutiles à Internet", "It exposes unused services to the Internet"),
            keywords: ["expose", "surface", "inutile", "unused", "attaque"],
            verdict: "correct",
            explanation: L("Chaque port ouvert est une porte potentielle.", "Every open port is a potential door."),
            tutorReply: L("Exact. Après correctif, que fais-tu ?", "Exactly. After the fix, what do you do?"),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L("Parce que c’est plus lent", "Because it’s slower"),
            keywords: ["lent", "slow"],
            verdict: "incorrect",
            explanation: L("L’enjeu est la surface d’attaque, pas la latence.", "The issue is attack surface, not latency."),
            tutorReply: L("Non : sécurité. Ensuite, revue des règles ?", "No: security. Next, rule review?"),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L("Parce que le DNS casse", "Because DNS breaks"),
            keywords: ["dns"],
            verdict: "incorrect",
            explanation: L("Pas le lien causal ici.", "Not the causal link here."),
            tutorReply: L("Hors sujet. Focus surface d’attaque, puis revue.", "Off topic. Focus attack surface, then review."),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Wide-open augmente la surface d’attaque.", "Wide-open increases attack surface."),
          tutorReply: L("Passons à la revue post-incident.", "On to post-incident review."),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L("Après correctif, bonne suite ?", "After the fix, good next step?"),
        choices: [
          {
            id: "s3-a",
            label: L("Journaliser et planifier une revue des règles", "Log and schedule a rules review"),
            keywords: ["log", "journal", "revue", "review", "audit"],
            verdict: "correct",
            explanation: L("Les règles dérivent sans revue.", "Rules drift without review."),
            tutorReply: L("Parfait. Pare-feu resserré et processus en place. Lab terminé.", "Perfect. Firewall tightened and process in place. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L("Oublier et passer à autre chose", "Forget it and move on"),
            keywords: ["oublie", "forget"],
            verdict: "incorrect",
            explanation: L("Sans revue, la prochaine urgence rouvrira trop large.", "Without review, the next fire drill opens too wide again."),
            tutorReply: L("Documente et revois. Lab terminé.", "Document and review. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L("Rouvrir all ports « temporairement » sans ticket", "Re-open all ports “temporarily” with no ticket"),
            keywords: ["temporaire", "temporary", "all"],
            verdict: "incorrect",
            explanation: L("Le temporaire devient permanent.", "Temporary becomes permanent."),
            tutorReply: L("Non. Ticket + revue. Lab terminé.", "No. Ticket + review. Lab complete."),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Il fallait journaliser et revoir les règles.", "You needed to log and review rules."),
          tutorReply: L("Retiens least privilege + revue. Lab terminé.", "Remember least privilege + review. Lab complete."),
          nextStepId: null,
        },
      },
    },
  },
  {
    id: "lab-wifi-guest",
    trackId: "networking",
    title: L("Wi-Fi invité", "Guest Wi-Fi"),
    subtitle: L("Séparer visiteurs et LAN interne", "Separate guests from the internal LAN"),
    icon: "globe",
    difficulty: "medium",
    category: L("Wi-Fi", "Wi-Fi"),
    objective: L("Isoler le réseau invité du LAN sensible.", "Isolate guest Wi-Fi from the sensitive LAN."),
    introMessage: L(
      "Des visiteurs se connectent au même SSID que les laptops internes. Tu dois proposer une meilleure hygiène.",
      "Guests join the same SSID as internal laptops. You must propose better hygiene."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 45,
    takeaways: [
      L("SSID invité isolé (VLAN / AP isolation).", "Isolated guest SSID (VLAN / AP isolation)."),
      L("Pas d’accès latéral vers les postes internes.", "No lateral access to internal hosts."),
      L("Mot de passe invité rotaté, distinct du Wi-Fi staff.", "Guest password rotated, distinct from staff Wi-Fi."),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L("Première mesure ?", "First measure?"),
        choices: [
          {
            id: "s1-a",
            label: L("Créer un SSID invité isolé", "Create an isolated guest SSID"),
            keywords: ["invité", "guest", "ssid", "isol", "vlan"],
            verdict: "correct",
            explanation: L("Séparation logique = moindre risque latéral.", "Logical separation = less lateral risk."),
            tutorReply: L("Oui. Que doit bloquer l’isolation ?", "Yes. What should isolation block?"),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L("Donner le mot de passe staff aux visiteurs", "Give staff password to visitors"),
            keywords: ["staff", "même", "same", "password"],
            verdict: "incorrect",
            explanation: L("Ça élargit la confiance au pire moment.", "That expands trust at the worst time."),
            tutorReply: L("Non. SSID invité isolé. Que bloque-t-on ?", "No. Isolated guest SSID. What do we block?"),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L("Désactiver tout Wi-Fi", "Disable all Wi-Fi"),
            keywords: ["désactiver", "disable", "off"],
            verdict: "partial",
            explanation: L("Efficace mais peu praticable pour des visiteurs.", "Effective but impractical for guests."),
            tutorReply: L("Trop brutal. Isolation invité. Que bloque-t-on ?", "Too blunt. Guest isolation. What do we block?"),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Il fallait un SSID invité isolé.", "You needed an isolated guest SSID."),
          tutorReply: L("On isole. Suite : accès latéral.", "We isolate. Next: lateral access."),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L("L’isolation doit empêcher…", "Isolation should prevent…"),
        choices: [
          {
            id: "s2-a",
            label: L("L’accès aux machines du LAN interne", "Access to internal LAN hosts"),
            keywords: ["latéral", "lateral", "interne", "internal", "lan", "smb"],
            verdict: "correct",
            explanation: L("Les visiteurs gardent Internet, pas le parc interne.", "Guests keep Internet, not the internal fleet."),
            tutorReply: L("Exact. Et pour le secret Wi-Fi invité ?", "Exactly. And for the guest Wi-Fi secret?"),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L("Tout accès Internet", "All Internet access"),
            keywords: ["internet", "bloquer web"],
            verdict: "partial",
            explanation: L("Souvent on laisse Internet, on coupe le latéral.", "Often you allow Internet, cut lateral."),
            tutorReply: L("Internet peut rester. Focus LAN interne. Et le mot de passe ?", "Internet can remain. Focus internal LAN. And the password?"),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L("Le DHCP", "DHCP"),
            keywords: ["dhcp"],
            verdict: "incorrect",
            explanation: L("Les invités ont besoin d’une adresse sur leur VLAN.", "Guests need an address on their VLAN."),
            tutorReply: L("DHCP invité OK. Bloquer le LAN staff. Mot de passe ?", "Guest DHCP is fine. Block staff LAN. Password?"),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Bloquer l’accès latéral au LAN interne.", "Block lateral access to the internal LAN."),
          tutorReply: L("Passons au secret invité.", "On to the guest secret."),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L("Gestion du mot de passe invité ?", "Guest password handling?"),
        choices: [
          {
            id: "s3-a",
            label: L("Distinct du staff et rotaté régulièrement", "Distinct from staff and rotated regularly"),
            keywords: ["distinct", "rotat", "séparé", "separate", "guest"],
            verdict: "correct",
            explanation: L("Réduit le partage durable du secret staff.", "Reduces long-lived sharing of the staff secret."),
            tutorReply: L("Bien joué. Réseau invité propre. Lab terminé.", "Well done. Clean guest network. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L("Identique au Wi-Fi staff « pour simplifier »", "Same as staff Wi-Fi “for simplicity”"),
            keywords: ["identique", "same", "staff"],
            verdict: "incorrect",
            explanation: L("Un visiteur obtient alors les mêmes droits radio.", "A visitor then gets the same radio rights."),
            tutorReply: L("Non. Secret distinct + rotation. Lab terminé.", "No. Distinct secret + rotation. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L("Aucun mot de passe, SSID ouvert", "No password, open SSID"),
            keywords: ["ouvert", "open", "sans"],
            verdict: "incorrect",
            explanation: L("N’importe qui à portée s’y greffe.", "Anyone in range can join."),
            tutorReply: L("Trop ouvert. WPA + rotation. Lab terminé.", "Too open. WPA + rotation. Lab complete."),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Secret invité distinct et rotaté.", "Distinct, rotated guest secret."),
          tutorReply: L("Retiens isolation + secret dédié. Lab terminé.", "Remember isolation + dedicated secret. Lab complete."),
          nextStepId: null,
        },
      },
    },
  },
  // ─── Web ──────────────────────────────────────────────────
  {
    id: "lab-rest-debug",
    trackId: "web",
    title: L("API REST cassée", "Broken REST API"),
    subtitle: L("404 vs 500, lire les signaux", "404 vs 500, read the signals"),
    icon: "layers",
    difficulty: "medium",
    category: L("Backend", "Backend"),
    objective: L("Diagnostiquer une API qui renvoie la mauvaise erreur.", "Diagnose an API returning the wrong error."),
    introMessage: L(
      "Le front affiche « Impossible de charger le profil ». Les logs API montrent des 404 sur /users/me alors que la route existe sous /api/v1/users/me.",
      "The front shows “Can’t load profile.” API logs show 404s on /users/me while the real route is /api/v1/users/me."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 50,
    takeaways: [
      L("Vérifier chemin et préfixe de version avant de toucher la DB.", "Check path and version prefix before touching the DB."),
      L("404 ≠ 500 : indices différents.", "404 ≠ 500: different clues."),
      L("Aligner front et contrat OpenAPI.", "Align the front with the OpenAPI contract."),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L("Premier réflexe ?", "First move?"),
        choices: [
          {
            id: "s1-a",
            label: L("Comparer l’URL appelée au contrat / route réelle", "Compare the called URL to the real route / contract"),
            keywords: ["url", "route", "path", "openapi", "contrat", "prefix", "préfixe", "api/v1"],
            verdict: "correct",
            explanation: L("Un mauvais chemin explique un 404 « propre ».", "A wrong path explains a clean 404."),
            tutorReply: L("Bingo : préfixe manquant. Que vérifies-tu ensuite ?", "Bingo: missing prefix. What do you check next?"),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L("Drop de la table users", "Drop the users table"),
            keywords: ["drop", "table", "delete db"],
            verdict: "incorrect",
            explanation: L("Destructif et hors sujet pour un 404 de routing.", "Destructive and irrelevant for a routing 404."),
            tutorReply: L("Stop. C’est le path. Ensuite, headers ?", "Stop. It’s the path. Next, headers?"),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L("Augmenter le timeout front uniquement", "Only increase the front timeout"),
            keywords: ["timeout", "lent", "slow"],
            verdict: "partial",
            explanation: L("Un 404 arrive vite ; le timeout masque le vrai bug.", "A 404 arrives fast; timeout hides the real bug."),
            tutorReply: L("Ça ne corrige pas un mauvais path. Suite : auth header ?", "That won’t fix a bad path. Next: auth header?"),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Comparer URL et contrat API.", "Compare URL and API contract."),
          tutorReply: L("Path corrigé. On vérifie l’auth.", "Path fixed. Check auth."),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L("Après correction du path, 401. Suite ?", "After path fix, 401. Next?"),
        choices: [
          {
            id: "s2-a",
            label: L("Vérifier le header Authorization Bearer", "Check the Authorization Bearer header"),
            keywords: ["authorization", "bearer", "token", "jwt", "header"],
            verdict: "correct",
            explanation: L("401 = non authentifié, pas « route inconnue ».", "401 = unauthenticated, not “unknown route”."),
            tutorReply: L("Token manquant côté front. Comment évites-tu la régression ?", "Missing token on the front. How do you prevent regression?"),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L("Ignorer le 401, c’est comme un 404", "Ignore 401, same as 404"),
            keywords: ["ignorer", "ignore", "pareil"],
            verdict: "incorrect",
            explanation: L("404 routing ≠ 401 auth.", "Routing 404 ≠ auth 401."),
            tutorReply: L("Codes distincts. Ajoute le Bearer. Anti-régression ?", "Distinct codes. Add Bearer. Anti-regression?"),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L("Passer en HTTP pour simplifier", "Switch to HTTP to simplify"),
            keywords: ["http"],
            verdict: "incorrect",
            explanation: L("N’adresse ni le path ni l’auth.", "Addresses neither path nor auth."),
            tutorReply: L("Hors sujet. Bearer manquant. Tests de contrat ?", "Off topic. Missing Bearer. Contract tests?"),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Il fallait vérifier Authorization.", "You needed to check Authorization."),
          tutorReply: L("Auth OK. Anti-régression.", "Auth OK. Anti-regression."),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L("Pour éviter que ça revienne ?", "To keep it from coming back?"),
        choices: [
          {
            id: "s3-a",
            label: L("Test d’intégration sur le vrai path + auth", "Integration test on the real path + auth"),
            keywords: ["test", "intégration", "integration", "contrat", "ci"],
            verdict: "correct",
            explanation: L("Le contrat devient exécutable.", "The contract becomes executable."),
            tutorReply: L("Parfait. API de nouveau saine. Lab terminé.", "Perfect. API healthy again. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L("Rien, « on s’en souviendra »", "Nothing, “we’ll remember”"),
            keywords: ["rien", "memory", "souviens"],
            verdict: "incorrect",
            explanation: L("La mémoire d’équipe n’est pas une garde-fou.", "Team memory isn’t a guardrail."),
            tutorReply: L("Ajoute un test. Lab terminé.", "Add a test. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L("Logger seulement en prod sans alerte", "Only log in prod with no alert"),
            keywords: ["log", "prod"],
            verdict: "partial",
            explanation: L("Utile, mais un test bloque la régression plus tôt.", "Useful, but a test catches regression earlier."),
            tutorReply: L("Mieux : test + logs. Lab terminé.", "Better: test + logs. Lab complete."),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Ajouter un test d’intégration path + auth.", "Add an integration test for path + auth."),
          tutorReply: L("Retiens contrat testé. Lab terminé.", "Remember a tested contract. Lab complete."),
          nextStepId: null,
        },
      },
    },
  },
  {
    id: "lab-jwt-debug",
    trackId: "web",
    title: L("JWT expiré", "Expired JWT"),
    subtitle: L("401 après une nuit", "401 after overnight"),
    icon: "lock",
    difficulty: "medium",
    category: L("Auth", "Auth"),
    objective: L("Gérer expiration et refresh sans bricolage.", "Handle expiry and refresh without hacks."),
    introMessage: L(
      "L’app marche le matin, renvoie 401 l’après-midi. Le access token expire en 15 minutes, aucun refresh n’est branché.",
      "The app works in the morning, returns 401 in the afternoon. Access token expires in 15 minutes; no refresh is wired."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 50,
    takeaways: [
      L("Lire exp / 401 avant de blâmer le backend métier.", "Read exp / 401 before blaming business logic."),
      L("Refresh token rotaté, stocké avec soin.", "Rotated refresh token, carefully stored."),
      L("Ne pas allonger l’access token « pour oublier ».", "Don’t stretch the access token “to forget about it”."),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L("Hypothèse la plus probable ?", "Most likely hypothesis?"),
        choices: [
          {
            id: "s1-a",
            label: L("Access token expiré, pas de refresh", "Expired access token, no refresh"),
            keywords: ["expir", "refresh", "jwt", "token", "401"],
            verdict: "correct",
            explanation: L("Le timing matche la durée de vie courte.", "Timing matches the short TTL."),
            tutorReply: L("Oui. Mauvaise « solution » à éviter ?", "Yes. Bad “fix” to avoid?"),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L("La base users a disparu", "The users DB vanished"),
            keywords: ["database", "base", "drop"],
            verdict: "incorrect",
            explanation: L("Un 401 récurrent horaire sent plutôt l’auth.", "A recurring timed 401 smells like auth."),
            tutorReply: L("Plutôt TTL. Que ne faut-il pas faire ?", "More like TTL. What shouldn’t you do?"),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L("CORS bloque l’après-midi seulement", "CORS blocks only in the afternoon"),
            keywords: ["cors"],
            verdict: "incorrect",
            explanation: L("CORS ne suit pas une horloge de token.", "CORS doesn’t follow a token clock."),
            tutorReply: L("Non. Expiration. Anti-pattern suivant ?", "No. Expiry. Next anti-pattern?"),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Token expiré sans refresh.", "Expired token without refresh."),
          tutorReply: L("Focus TTL. Suite.", "Focus TTL. Next."),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L("À éviter ?", "What to avoid?"),
        choices: [
          {
            id: "s2-a",
            label: L("Mettre un access token à 30 jours « pour la paix »", "Set a 30-day access token “for peace”"),
            keywords: ["30", "long", "jours", "days", "allong"],
            verdict: "correct",
            explanation: L("Un vol de token devient une longue session pirate.", "Token theft becomes a long pirate session."),
            tutorReply: L("Bien vu. Quelle bonne approche ?", "Good catch. What’s the right approach?"),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L("Implémenter un refresh rotatif", "Implement rotating refresh"),
            keywords: ["refresh", "rotat"],
            verdict: "incorrect",
            explanation: L("Ça, c’est la bonne approche, pas ce qu’il faut éviter.", "That’s the right approach, not what to avoid."),
            tutorReply: L("Tu as cité la bonne pratique. Confirmons-la clairement.", "You named the good practice. Let’s confirm it clearly."),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L("Logger les 401", "Log 401s"),
            keywords: ["log"],
            verdict: "partial",
            explanation: L("Utile, mais ce n’est pas l’anti-pattern demandé.", "Useful, but not the anti-pattern asked."),
            tutorReply: L("Les logs aident. L’anti-pattern : TTL géant. Bonne fix ?", "Logs help. Anti-pattern: huge TTL. Proper fix?"),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Éviter d’allonger abusivement l’access token.", "Avoid abusively lengthening the access token."),
          tutorReply: L("Bonne fix maintenant.", "Proper fix now."),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L("Bonne correction ?", "Proper fix?"),
        choices: [
          {
            id: "s3-a",
            label: L("Refresh token rotaté + access court", "Rotating refresh + short-lived access"),
            keywords: ["refresh", "rotat", "short", "court"],
            verdict: "correct",
            explanation: L("Usabilité sans offrir une session éternelle.", "Usability without an eternal session."),
            tutorReply: L("Exact. Auth saine. Lab terminé.", "Exactly. Healthy auth. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L("Désactiver l’auth", "Disable auth"),
            keywords: ["disable", "désactiver", "off"],
            verdict: "incorrect",
            explanation: L("Inacceptable hors démo jetable.", "Unacceptable outside a throwaway demo."),
            tutorReply: L("Non. Refresh rotatif. Lab terminé.", "No. Rotating refresh. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L("Stocker le access token dans l’URL", "Store the access token in the URL"),
            keywords: ["url", "query"],
            verdict: "incorrect",
            explanation: L("Fuites via historique, logs, referer.", "Leaks via history, logs, referer."),
            tutorReply: L("Jamais en URL. Refresh + TTL court. Lab terminé.", "Never in the URL. Refresh + short TTL. Lab complete."),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Refresh rotatif et access court.", "Rotating refresh and short-lived access."),
          tutorReply: L("Retiens ce duo. Lab terminé.", "Remember that duo. Lab complete."),
          nextStepId: null,
        },
      },
    },
  },
  {
    id: "lab-cors-block",
    trackId: "web",
    title: L("Blocage CORS", "CORS block"),
    subtitle: L("Le navigateur dit non", "The browser says no"),
    icon: "globe",
    difficulty: "medium",
    category: L("HTTP", "HTTP"),
    objective: L("Corriger CORS sans Access-Control-Allow-Origin: * en prod auth.", "Fix CORS without Allow-Origin * on authenticated prod."),
    introMessage: L(
      "Le front localhost:3000 appelle api.prod.local. La console : blocked by CORS policy. L’API répond pourtant en curl.",
      "Front localhost:3000 calls api.prod.local. Console: blocked by CORS policy. curl still works."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 45,
    takeaways: [
      L("CORS est une contrainte navigateur, pas curl.", "CORS is a browser constraint, not curl."),
      L("Autoriser l’origine précise + méthodes nécessaires.", "Allow the exact origin + needed methods."),
      L("Éviter * avec credentials.", "Avoid * with credentials."),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L("Pourquoi curl marche et le navigateur non ?", "Why does curl work but the browser doesn’t?"),
        choices: [
          {
            id: "s1-a",
            label: L("Le navigateur applique CORS, curl non", "The browser enforces CORS; curl doesn’t"),
            keywords: ["navigateur", "browser", "cors", "curl"],
            verdict: "correct",
            explanation: L("CORS protège l’utilisateur du navigateur.", "CORS protects the browser user."),
            tutorReply: L("Oui. Quelle header/config côté API ?", "Yes. Which header/config on the API?"),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L("Le DNS est cassé seulement dans Chrome", "DNS is broken only in Chrome"),
            keywords: ["dns", "chrome"],
            verdict: "incorrect",
            explanation: L("Le message cite CORS, pas le DNS.", "The message cites CORS, not DNS."),
            tutorReply: L("C’est CORS. Config Allow-Origin ?", "It’s CORS. Allow-Origin config?"),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L("Le certificat TLS est invalide", "TLS certificate is invalid"),
            keywords: ["tls", "cert", "ssl"],
            verdict: "partial",
            explanation: L("Possible ailleurs, mais le message pointe CORS.", "Possible elsewhere, but the message points to CORS."),
            tutorReply: L("Ici : CORS. Quelle origine autoriser ?", "Here: CORS. Which origin to allow?"),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("CORS navigateur vs curl.", "Browser CORS vs curl."),
          tutorReply: L("Configurons l’origine.", "Let’s configure the origin."),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L("Bonne config pour du login cookie ?", "Good config for cookie login?"),
        choices: [
          {
            id: "s2-a",
            label: L("Allow-Origin = http://localhost:3000 + credentials", "Allow-Origin = http://localhost:3000 + credentials"),
            keywords: ["localhost:3000", "credentials", "origine", "origin"],
            verdict: "correct",
            explanation: L("Origine précise + credentials, pas *.", "Exact origin + credentials, not *."),
            tutorReply: L("Bien. Pourquoi éviter * ici ?", "Good. Why avoid * here?"),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L("Access-Control-Allow-Origin: * avec cookies", "Access-Control-Allow-Origin: * with cookies"),
            keywords: ["*", "star", "any"],
            verdict: "incorrect",
            explanation: L("Incompatible avec credentials de façon sûre.", "Incompatible with credentials safely."),
            tutorReply: L("Refusé. Origine précise. Pourquoi ?", "Rejected. Exact origin. Why?"),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L("Désactiver CORS dans le navigateur des users", "Disable CORS in users’ browsers"),
            keywords: ["disable", "extension", "navigateur"],
            verdict: "incorrect",
            explanation: L("Pas déployable ni sûr.", "Not shippable or safe."),
            tutorReply: L("Non. Config serveur. Pourquoi pas * ?", "No. Server config. Why not *?"),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Autoriser l’origine exacte avec credentials.", "Allow the exact origin with credentials."),
          tutorReply: L("Pourquoi pas * ?", "Why not *?"),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L("Pourquoi éviter Allow-Origin * avec credentials ?", "Why avoid Allow-Origin * with credentials?"),
        choices: [
          {
            id: "s3-a",
            label: L("N’importe quel site pourrait tenter d’utiliser la session", "Any site could try to use the session"),
            keywords: ["session", "any", "n'importe", "csrf", "site"],
            verdict: "correct",
            explanation: L("Tu élargis qui peut parler à l’API avec cookies.", "You widen who can talk to the API with cookies."),
            tutorReply: L("Exact. CORS corrigé proprement. Lab terminé.", "Exactly. CORS fixed cleanly. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L("Parce que * est plus lent", "Because * is slower"),
            keywords: ["lent", "slow"],
            verdict: "incorrect",
            explanation: L("Enjeu sécurité, pas perf.", "Security issue, not perf."),
            tutorReply: L("Sécurité session. Lab terminé.", "Session security. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L("Parce que HTTP/2 l’interdit", "Because HTTP/2 forbids it"),
            keywords: ["http/2", "http2"],
            verdict: "incorrect",
            explanation: L("Ce n’est pas la règle CORS ici.", "That’s not the CORS rule here."),
            tutorReply: L("Retiens le risque session. Lab terminé.", "Remember the session risk. Lab complete."),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("* + credentials élargit l’abus de session.", "* + credentials widens session abuse."),
          tutorReply: L("CORS maîtrisé. Lab terminé.", "CORS under control. Lab complete."),
          nextStepId: null,
        },
      },
    },
  },
  {
    id: "lab-xss-reflect",
    trackId: "web",
    title: L("XSS réfléchie", "Reflected XSS"),
    subtitle: L("Un paramètre trop confiant", "A too-trusting parameter"),
    icon: "search",
    difficulty: "hard",
    category: L("Sécurité", "Security"),
    objective: L("Identifier et mitiger une XSS réfléchie.", "Identify and mitigate reflected XSS."),
    introMessage: L(
      "Une page de recherche réaffiche ?q= dans le HTML sans échappement. Un POC montre une alerte JS.",
      "A search page echoes ?q= into HTML unescaped. A POC shows a JS alert."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 55,
    takeaways: [
      L("Ne jamais réinjecter l’entrée utilisateur brute dans le HTML.", "Never reinject raw user input into HTML."),
      L("Échapper / encoder selon le contexte.", "Escape / encode by context."),
      L("CSP en défense en profondeur.", "CSP as defense in depth."),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L("Nature du bug ?", "Nature of the bug?"),
        choices: [
          {
            id: "s1-a",
            label: L("XSS réfléchie", "Reflected XSS"),
            keywords: ["xss", "reflect", "réfléch"],
            verdict: "correct",
            explanation: L("La charge revient dans la réponse immédiatement.", "The payload comes back in the immediate response."),
            tutorReply: L("Oui. Première mitigation ?", "Yes. First mitigation?"),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L("SQLi uniquement", "SQLi only"),
            keywords: ["sql", "injection"],
            verdict: "incorrect",
            explanation: L("Le POC est une exécution JS dans la page.", "The POC is JS execution in the page."),
            tutorReply: L("C’est XSS. Mitigation ?", "It’s XSS. Mitigation?"),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L("CSRF", "CSRF"),
            keywords: ["csrf"],
            verdict: "partial",
            explanation: L("Autre famille ; ici la page exécute du script injecté.", "Another family; here the page runs injected script."),
            tutorReply: L("Proche mais non : XSS. Mitigation ?", "Close but no: XSS. Mitigation?"),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("C’est une XSS réfléchie.", "It’s reflected XSS."),
          tutorReply: L("Mitigation maintenant.", "Mitigation now."),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L("Correction prioritaire ?", "Priority fix?"),
        choices: [
          {
            id: "s2-a",
            label: L("Encoder / échapper la sortie HTML", "Encode / escape HTML output"),
            keywords: ["escape", "échapp", "encode", "sanitize", "html"],
            verdict: "correct",
            explanation: L("Coupe l’injection au point de rendu.", "Cuts injection at the render point."),
            tutorReply: L("Bien. Couche supplémentaire utile ?", "Good. Useful extra layer?"),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L("Augmenter la taille du cache CDN", "Increase CDN cache size"),
            keywords: ["cdn", "cache"],
            verdict: "incorrect",
            explanation: L("N’empêche pas l’exécution du script.", "Doesn’t stop script execution."),
            tutorReply: L("Non. Escape HTML. Puis CSP ?", "No. Escape HTML. Then CSP?"),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L("Désactiver JavaScript pour tous les users", "Disable JavaScript for all users"),
            keywords: ["disable", "javascript", "js"],
            verdict: "incorrect",
            explanation: L("Casse l’app ; pas une fix réaliste.", "Breaks the app; not a realistic fix."),
            tutorReply: L("Escape + CSP. Suite.", "Escape + CSP. Next."),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Échapper la sortie HTML.", "Escape HTML output."),
          tutorReply: L("Ajoutons une défense en profondeur.", "Add defense in depth."),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L("Défense en profondeur ?", "Defense in depth?"),
        choices: [
          {
            id: "s3-a",
            label: L("Content-Security-Policy adaptée", "A sensible Content-Security-Policy"),
            keywords: ["csp", "content-security", "policy"],
            verdict: "correct",
            explanation: L("Limite ce qui peut s’exécuter même si une faille reste.", "Limits what can run even if a hole remains."),
            tutorReply: L("Excellent. XSS traitée en couches. Lab terminé.", "Excellent. XSS handled in layers. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L("Afficher q en clair dans l’URL bar seulement", "Only show q in the URL bar"),
            keywords: ["url bar"],
            verdict: "incorrect",
            explanation: L("Le problème est le HTML rendu.", "The problem is rendered HTML."),
            tutorReply: L("CSP + escape. Lab terminé.", "CSP + escape. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L("Faire confiance au paramètre car « interne »", "Trust the param because it’s “internal”"),
            keywords: ["interne", "trust", "internal"],
            verdict: "incorrect",
            explanation: L("Les paramètres query viennent de l’extérieur.", "Query params come from the outside."),
            tutorReply: L("Jamais de confiance aveugle. Lab terminé.", "Never blind trust. Lab complete."),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Ajouter une CSP en complément de l’escape.", "Add CSP alongside escaping."),
          tutorReply: L("Retiens escape + CSP. Lab terminé.", "Remember escape + CSP. Lab complete."),
          nextStepId: null,
        },
      },
    },
  },
  // ─── Software ─────────────────────────────────────────────
  {
    id: "lab-git-conflict",
    trackId: "software",
    title: L("Conflit Git", "Git conflict"),
    subtitle: L("Merge bloqué avant release", "Merge blocked before release"),
    icon: "layers",
    difficulty: "medium",
    category: L("Git", "Git"),
    objective: L("Résoudre un conflit sans écraser le travail d’autrui.", "Resolve a conflict without wiping someone else’s work."),
    introMessage: L(
      "main a divergé. Ton merge affiche un conflit sur auth.ts. Un collègue a aussi touché le fichier ce matin.",
      "main has diverged. Your merge shows a conflict on auth.ts. A coworker also touched the file this morning."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 50,
    takeaways: [
      L("Lire les deux côtés avant de choisir.", "Read both sides before choosing."),
      L("Éviter un force push sur main partagée.", "Avoid a force push on shared main."),
      L("Communiquer si la fusion métier est ambiguë.", "Communicate if the business merge is ambiguous."),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L("Premier geste ?", "First move?"),
        choices: [
          {
            id: "s1-a",
            label: L("Ouvrir le fichier et comparer les deux versions", "Open the file and compare both versions"),
            keywords: ["comparer", "compare", "diff", "conflit", "conflict", "ouvrir"],
            verdict: "correct",
            explanation: L("Tu comprends l’intention des deux changements.", "You understand both change intents."),
            tutorReply: L("Bien. Que faire si tu ne comprends pas un côté ?", "Good. What if you don’t understand one side?"),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L("Force push pour gagner", "Force push to win"),
            keywords: ["force", "push -f", "force push"],
            verdict: "incorrect",
            explanation: L("Écrase l’historique partagé.", "Wipes shared history."),
            tutorReply: L("Dangerux. On compare. Si doute ?", "Dangerous. We compare. If unsure?"),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L("Supprimer auth.ts", "Delete auth.ts"),
            keywords: ["delete", "supprimer", "rm"],
            verdict: "incorrect",
            explanation: L("Tu perds les deux contributions.", "You lose both contributions."),
            tutorReply: L("Non. Compare, puis demande si besoin.", "No. Compare, then ask if needed."),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Comparer les deux versions du conflit.", "Compare both conflict versions."),
          tutorReply: L("Et si c’est ambigu ?", "And if it’s ambiguous?"),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L("Si la fusion métier est floue ?", "If the business merge is unclear?"),
        choices: [
          {
            id: "s2-a",
            label: L("Demander à l’auteur de l’autre commit", "Ask the author of the other commit"),
            keywords: ["demander", "ask", "collègue", "coworker", "auteur"],
            verdict: "correct",
            explanation: L("Évite une fusion incorrecte silencieuse.", "Avoids a silently wrong merge."),
            tutorReply: L("Oui. Après résolution locale, prochaine commande sûre ?", "Yes. After local resolve, next safe command?"),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L("Garder uniquement ta version sans lire", "Keep only your version unread"),
            keywords: ["ours", "ma version", "mine"],
            verdict: "incorrect",
            explanation: L("Tu peux jeter un fix urgent de prod.", "You may discard an urgent prod fix."),
            tutorReply: L("Mauvaise idée. Demande. Puis commit de merge ?", "Bad idea. Ask. Then merge commit?"),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L("Ignorer et ship hier soir", "Ignore and ship last night’s build"),
            keywords: ["ignore", "ship", "old"],
            verdict: "incorrect",
            explanation: L("Tu livres un état incohérent.", "You ship an inconsistent state."),
            tutorReply: L("Résous proprement, puis finalise le merge.", "Resolve cleanly, then finish the merge."),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Demander à l’autre auteur.", "Ask the other author."),
          tutorReply: L("Finalisons le merge.", "Let’s finish the merge."),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L("Après édition du conflit ?", "After editing the conflict?"),
        choices: [
          {
            id: "s3-a",
            label: L("git add puis commit de merge (sans force sur main)", "git add then merge commit (no force on main)"),
            keywords: ["add", "commit", "merge", "sans force"],
            verdict: "correct",
            explanation: L("Tu marques le conflit résolu et tu traces la fusion.", "You mark the conflict resolved and record the merge."),
            tutorReply: L("Parfait. Release débloquée. Lab terminé.", "Perfect. Release unblocked. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L("force push sur main", "force push to main"),
            keywords: ["force", "main"],
            verdict: "incorrect",
            explanation: L("Toujours risqué sur une branche partagée.", "Always risky on a shared branch."),
            tutorReply: L("Non. add + commit de merge. Lab terminé.", "No. add + merge commit. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L("Laisser les marqueurs <<<< dans le fichier", "Leave <<<< markers in the file"),
            keywords: ["<<<<", "marker", "marqueur"],
            verdict: "incorrect",
            explanation: L("Le code ne compile plus / casse en runtime.", "Code won’t compile / breaks at runtime."),
            tutorReply: L("Nettoie les marqueurs, puis commit. Lab terminé.", "Clean markers, then commit. Lab complete."),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("git add et commit de merge, sans force.", "git add and merge commit, no force."),
          tutorReply: L("Conflit maîtrisé. Lab terminé.", "Conflict handled. Lab complete."),
          nextStepId: null,
        },
      },
    },
  },
  {
    id: "lab-pr-review",
    trackId: "software",
    title: L("Review de PR", "PR review"),
    subtitle: L("Feedback utile, pas toxique", "Useful feedback, not toxic"),
    icon: "book",
    difficulty: "easy",
    category: L("Git", "Git"),
    objective: L("Faire une review actionnable et respectueuse.", "Give an actionable, respectful review."),
    introMessage: L(
      "Une PR ajoute une feature login. Tu vois un secret en dur et un nom de variable obscur. Tu dois commenter.",
      "A PR adds login. You spot a hard-coded secret and an obscure variable name. You must comment."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 35,
    takeaways: [
      L("Bloquer les secrets en clair.", "Block cleartext secrets."),
      L("Demander le pourquoi, pas seulement le quoi.", "Ask for the why, not only the what."),
      L("Ton constructif = meilleure adoption.", "Constructive tone = better uptake."),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L("Sur le secret en dur ?", "On the hard-coded secret?"),
        choices: [
          {
            id: "s1-a",
            label: L("Demander de le sortir vers un secret manager / env", "Ask to move it to a secret manager / env"),
            keywords: ["secret", "env", "vault", "manager", "hard"],
            verdict: "correct",
            explanation: L("Les secrets ne vivent pas dans le dépôt.", "Secrets don’t live in the repo."),
            tutorReply: L("Oui. Et pour le nom de variable obscur ?", "Yes. And for the obscure variable name?"),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L("Merger quand même, « on verra plus tard »", "Merge anyway, “later”"),
            keywords: ["merge", "later", "plus tard"],
            verdict: "incorrect",
            explanation: L("Le secret reste dans l’historique Git.", "The secret remains in Git history."),
            tutorReply: L("Bloque la PR. Ensuite, clarté du code ?", "Block the PR. Next, code clarity?"),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L("Insulter l’auteur en public", "Insult the author publicly"),
            keywords: ["insulte", "toxic", "shame"],
            verdict: "incorrect",
            explanation: L("Toxique et contre-productif.", "Toxic and counterproductive."),
            tutorReply: L("Ton pro. Secret hors repo. Clarté ensuite.", "Pro tone. Secret out of repo. Clarity next."),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Sortir le secret du dépôt.", "Move the secret out of the repo."),
          tutorReply: L("Passons à la lisibilité.", "On to readability."),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L("Commentaire sur x1 / tmp2 ?", "Comment on x1 / tmp2?"),
        choices: [
          {
            id: "s2-a",
            label: L("Demander un nom qui exprime l’intention", "Ask for a name that shows intent"),
            keywords: ["nom", "name", "intention", "lisible", "clear"],
            verdict: "correct",
            explanation: L("La review améliore la maintenabilité.", "Review improves maintainability."),
            tutorReply: L("Bien. Ton général de la review ?", "Good. Overall review tone?"),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L("Ignorer, « ce n’est que du style »", "Ignore, “it’s only style”"),
            keywords: ["style", "ignore"],
            verdict: "partial",
            explanation: L("Les noms pourris coûtent cher plus tard.", "Bad names get expensive later."),
            tutorReply: L("Mieux vaut demander. Et le ton ?", "Better to ask. And tone?"),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L("Réécrire toute la PR sans discussion", "Rewrite the whole PR with no discussion"),
            keywords: ["rewrite", "réécrire", "force"],
            verdict: "incorrect",
            explanation: L("Passe à côté de l’apprentissage collectif.", "Skips collective learning."),
            tutorReply: L("Commente, n’écrase pas. Ton ?", "Comment, don’t overwrite. Tone?"),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Demander des noms expressifs.", "Ask for expressive names."),
          tutorReply: L("Ton de review.", "Review tone."),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L("Meilleur ton ?", "Best tone?"),
        choices: [
          {
            id: "s3-a",
            label: L("Factuel, poli, avec alternative concrète", "Factual, polite, with a concrete alternative"),
            keywords: ["poli", "factuel", "alternative", "constructif", "polite"],
            verdict: "correct",
            explanation: L("On corrige le code sans brûler la relation.", "You fix the code without burning the relationship."),
            tutorReply: L("Review pro. Lab terminé.", "Pro review. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L("Sarcasme pour « motiver »", "Sarcasm to “motivate”"),
            keywords: ["sarcasme", "sarcasm", "shame"],
            verdict: "incorrect",
            explanation: L("Ça dégrade la culture et la qualité long terme.", "It degrades culture and long-term quality."),
            tutorReply: L("Reste constructif. Lab terminé.", "Stay constructive. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L("Approve sans lire pour aller vite", "Approve unread to go fast"),
            keywords: ["approve", "sans lire", "unread"],
            verdict: "incorrect",
            explanation: L("La review devient du théâtre.", "Review becomes theater."),
            tutorReply: L("Lis et commente utilement. Lab terminé.", "Read and comment usefully. Lab complete."),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Ton factuel et constructif.", "Factual, constructive tone."),
          tutorReply: L("Review saine. Lab terminé.", "Healthy review. Lab complete."),
          nextStepId: null,
        },
      },
    },
  },
  {
    id: "lab-ci-red",
    trackId: "software",
    title: L("Pipeline CI rouge", "Red CI pipeline"),
    subtitle: L("Build cassé avant merge", "Broken build before merge"),
    icon: "zap",
    difficulty: "medium",
    category: L("CI", "CI"),
    objective: L("Lire un log CI et corriger la cause racine.", "Read a CI log and fix the root cause."),
    introMessage: L(
      "La PR est verte localement, rouge sur CI. Le log montre : Module not found: lodash. Le package.json l’a en devDependency alors que le code prod l’importe.",
      "PR is green locally, red on CI. Log: Module not found: lodash. package.json has it as a devDependency while prod code imports it."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 50,
    takeaways: [
      L("Lire le premier échec du log, pas seulement le résumé.", "Read the first failure in the log, not only the summary."),
      L("Les deps de prod ≠ deps de dev.", "Prod deps ≠ dev deps."),
      L("Reproduire avec la même commande CI.", "Reproduce with the same CI command."),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L("Où regardes-tu d’abord ?", "Where do you look first?"),
        choices: [
          {
            id: "s1-a",
            label: L("Le premier job en échec et son message d’erreur", "The first failing job and its error message"),
            keywords: ["log", "error", "échec", "fail", "job", "module not found"],
            verdict: "correct",
            explanation: L("Le signal utile est dans le détail.", "The useful signal is in the details."),
            tutorReply: L("Tu vois Module not found. Cause probable ?", "You see Module not found. Likely cause?"),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L("Relancer CI en boucle sans lire", "Rerun CI in a loop unread"),
            keywords: ["rerun", "relancer", "flaky"],
            verdict: "incorrect",
            explanation: L("Un échec déterministe ne se soigne pas au spam.", "A deterministic failure isn’t fixed by spam."),
            tutorReply: L("Lis le log. Cause deps ?", "Read the log. Deps cause?"),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L("Merger en ignorant la CI", "Merge ignoring CI"),
            keywords: ["merge", "ignore", "skip"],
            verdict: "incorrect",
            explanation: L("Tu livres un build cassé.", "You ship a broken build."),
            tutorReply: L("Non. Analyse du log. Deps ensuite.", "No. Log analysis. Deps next."),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Lire le premier échec du log CI.", "Read the first CI log failure."),
          tutorReply: L("Focus dépendances.", "Focus dependencies."),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L("Cause la plus probable ici ?", "Most likely cause here?"),
        choices: [
          {
            id: "s2-a",
            label: L("lodash en devDependency mais importé en prod", "lodash as devDependency but imported in prod"),
            keywords: ["devdependency", "dev dependency", "lodash", "prod", "dependencies"],
            verdict: "correct",
            explanation: L("CI prod n’installe pas les devDeps.", "Prod CI doesn’t install devDeps."),
            tutorReply: L("Exact. Correctif ?", "Exactly. Fix?"),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L("Le nom de la branche est trop long", "The branch name is too long"),
            keywords: ["branch", "branche", "long"],
            verdict: "incorrect",
            explanation: L("Sans lien avec Module not found.", "Unrelated to Module not found."),
            tutorReply: L("C’est la classification des deps. Fix ?", "It’s dependency classification. Fix?"),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L("Le runner n’aime pas le café", "The runner doesn’t like coffee"),
            keywords: ["coffee", "café"],
            verdict: "incorrect",
            explanation: L("Pas une cause technique.", "Not a technical cause."),
            tutorReply: L("Revenons aux dependencies. Fix ?", "Back to dependencies. Fix?"),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Dep de prod mal classée en devDependency.", "Prod dep misclassified as devDependency."),
          tutorReply: L("Corrigeons.", "Let’s fix it."),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L("Correctif durable ?", "Durable fix?"),
        choices: [
          {
            id: "s3-a",
            label: L("Déplacer lodash en dependencies + rerun CI", "Move lodash to dependencies + rerun CI"),
            keywords: ["dependencies", "déplacer", "move", "lodash"],
            verdict: "correct",
            explanation: L("Aligné avec l’usage runtime.", "Aligned with runtime usage."),
            tutorReply: L("CI verte. Lab terminé.", "CI green. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L("Désactiver l’étape install sur CI", "Disable the install step on CI"),
            keywords: ["disable", "install", "skip"],
            verdict: "incorrect",
            explanation: L("Tu caches le problème et casses le pipeline.", "You hide the problem and break the pipeline."),
            tutorReply: L("Non. Déplacer la dep. Lab terminé.", "No. Move the dep. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L("Commit en contournant les hooks et espérer", "Commit while skipping hooks and hope"),
            keywords: ["no-verify", "skip hook", "hooks"],
            verdict: "incorrect",
            explanation: L("Ça ne corrige pas CI distante.", "It doesn’t fix remote CI."),
            tutorReply: L("Corrige package.json. Lab terminé.", "Fix package.json. Lab complete."),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Passer lodash en dependencies.", "Move lodash to dependencies."),
          tutorReply: L("Pipeline compris. Lab terminé.", "Pipeline understood. Lab complete."),
          nextStepId: null,
        },
      },
    },
  },
  {
    id: "lab-secrets-leak",
    trackId: "software",
    title: L("Fuite de secret", "Secret leak"),
    subtitle: L(".env commité par erreur", ".env committed by mistake"),
    icon: "lock",
    difficulty: "hard",
    category: L("Sécurité", "Security"),
    objective: L("Réagir correctement à un secret poussé dans Git.", "Respond correctly to a secret pushed to Git."),
    introMessage: L(
      "Un .env avec la clé Stripe vient d’être poussé sur le dépôt public de l’équipe. Tu es le premier à le voir.",
      "A .env with the Stripe key was just pushed to the team’s public repo. You’re first to notice."
    ),
    startStepId: "s1",
    stepCount: 3,
    xpReward: 55,
    takeaways: [
      L("Révoquer / rotator avant tout le reste.", "Revoke / rotate before anything else."),
      L("Retirer le fichier et l’historique si besoin.", "Remove the file and history if needed."),
      L("Prévenir l’équipe et ajouter des garde-fous (.gitignore, scan).", "Alert the team and add guardrails (.gitignore, scanning)."),
    ],
    steps: {
      s1: {
        id: "s1",
        prompt: L("Priorité absolue ?", "Absolute priority?"),
        choices: [
          {
            id: "s1-a",
            label: L("Révoquer / regenerer la clé exposée", "Revoke / regenerate the exposed key"),
            keywords: ["révoquer", "revoke", "rotat", "regener", "clé", "key"],
            verdict: "correct",
            explanation: L("Tant que la clé vit, l’attaque est possible.", "While the key lives, abuse is possible."),
            tutorReply: L("Oui. Ensuite sur le dépôt ?", "Yes. Next on the repo?"),
            nextStepId: "s2",
          },
          {
            id: "s1-b",
            label: L("Écrire un long post-mortem d’abord", "Write a long post-mortem first"),
            keywords: ["postmortem", "post-mortem", "doc"],
            verdict: "partial",
            explanation: L("Utile après la containment.", "Useful after containment."),
            tutorReply: L("D’abord révoquer. Puis nettoyer Git.", "Revoke first. Then clean Git."),
            nextStepId: "s2",
          },
          {
            id: "s1-c",
            label: L("Ignorer, « personne ne regarde »", "Ignore, “nobody’s watching”"),
            keywords: ["ignore", "personne"],
            verdict: "incorrect",
            explanation: L("Les scanners publics existent.", "Public scanners exist."),
            tutorReply: L("Révoque immédiatement. Puis Git.", "Revoke immediately. Then Git."),
            nextStepId: "s2",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Révoquer la clé d’abord.", "Revoke the key first."),
          tutorReply: L("Nettoyage dépôt ensuite.", "Repo cleanup next."),
          nextStepId: "s2",
        },
      },
      s2: {
        id: "s2",
        prompt: L("Action sur le dépôt ?", "Action on the repo?"),
        choices: [
          {
            id: "s2-a",
            label: L("Retirer .env, l’ajouter au .gitignore, purger l’historique si besoin", "Remove .env, add to .gitignore, purge history if needed"),
            keywords: ["gitignore", "purge", "historique", "history", "retirer", "remove"],
            verdict: "correct",
            explanation: L("Sinon le secret reste clonable.", "Otherwise the secret stays cloneable."),
            tutorReply: L("Bien. Pour la suite de l’équipe ?", "Good. For the rest of the team?"),
            nextStepId: "s3",
          },
          {
            id: "s2-b",
            label: L("Laisser le commit, changer juste le nom du fichier", "Leave the commit, only rename the file"),
            keywords: ["rename", "renommer"],
            verdict: "incorrect",
            explanation: L("L’ancien blob reste dans Git.", "The old blob remains in Git."),
            tutorReply: L("Il faut retirer et purger. Puis process équipe.", "Remove and purge. Then team process."),
            nextStepId: "s3",
          },
          {
            id: "s2-c",
            label: L("Rendre le dépôt privé sans rotation", "Make the repo private without rotation"),
            keywords: ["private", "privé"],
            verdict: "partial",
            explanation: L("Aide un peu, mais la clé a pu fuiter déjà.", "Helps a bit, but the key may already have leaked."),
            tutorReply: L("Rotation reste obligatoire. Process équipe ?", "Rotation stays mandatory. Team process?"),
            nextStepId: "s3",
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Retirer, ignorer, purger si nécessaire.", "Remove, ignore, purge if needed."),
          tutorReply: L("Process équipe.", "Team process."),
          nextStepId: "s3",
        },
      },
      s3: {
        id: "s3",
        prompt: L("Pour éviter la récidive ?", "To prevent recurrence?"),
        choices: [
          {
            id: "s3-a",
            label: L("Prévenir l’équipe + pre-commit / scan secrets", "Alert the team + pre-commit / secret scanning"),
            keywords: ["prévenir", "alert", "pre-commit", "scan", "gitleaks"],
            verdict: "correct",
            explanation: L("Humain + automatisation.", "People + automation."),
            tutorReply: L("Incident bien géré. Lab terminé.", "Incident well handled. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-b",
            label: L("Ne rien dire pour éviter la panique", "Say nothing to avoid panic"),
            keywords: ["silence", "rien", "panic"],
            verdict: "incorrect",
            explanation: L("L’équipe doit rotator ses copies locales aussi.", "The team must rotate their local copies too."),
            tutorReply: L("Communique + automatise. Lab terminé.", "Communicate + automate. Lab complete."),
            nextStepId: null,
          },
          {
            id: "s3-c",
            label: L("Interdire Git entièrement", "Ban Git entirely"),
            keywords: ["interdire", "ban", "git"],
            verdict: "incorrect",
            explanation: L("Irréaliste ; mieux vaut des garde-fous.", "Unrealistic; guardrails are better."),
            tutorReply: L("Garde-fous > interdiction. Lab terminé.", "Guardrails > bans. Lab complete."),
            nextStepId: null,
          },
        ],
        fallback: {
          verdict: "incorrect",
          explanation: L("Alerter et ajouter un scan de secrets.", "Alert and add secret scanning."),
          tutorReply: L("Hygiène secrets OK. Lab terminé.", "Secret hygiene OK. Lab complete."),
          nextStepId: null,
        },
      },
    },
  },
];

export function getLabScenariosForTrack(trackId: TrackId | null | undefined) {
  if (!trackId) return [];
  return LAB_SCENARIOS.filter((l) => l.trackId === trackId);
}

export function getAllLabScenarios() {
  return LAB_SCENARIOS;
}

export function getLabScenario(id: string) {
  return LAB_SCENARIOS.find((l) => l.id === id);
}
