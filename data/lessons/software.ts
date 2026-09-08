import type { Lesson } from "@/types/learning";

export const SOFTWARE_LESSONS: Lesson[] = [
  // ─── sw-fundamentals ───────────────────────────────────────────────
  {
    id: "sw-dev-basics",
    unitId: "sw-fundamentals",
    title: {
      fr: "Bases du développement logiciel",
      en: "Software development basics",
    },
    description: {
      fr: "Comprendre ce qu'est un logiciel, le cycle de vie et le rôle d'un développeur.",
      en: "Understand what software is, the development lifecycle, and a developer's role.",
    },
    icon: "book",
    estimatedMinutes: 16,
    xpReward: 22,
    goals: [
      {
        description: {
          fr: "Définir un logiciel et ses composants",
          en: "Define software and its components",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Décrire les étapes du cycle de vie logiciel",
          en: "Describe the stages of the software lifecycle",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Différencier frontend, backend et données",
          en: "Distinguish frontend, backend, and data",
        },
        xpReward: 7,
      },
    ],
    sections: [
      {
        id: "sw-dev-basics-s1",
        title: { fr: "Qu'est-ce qu'un logiciel ?", en: "What is software?" },
        body: {
          fr: "Un logiciel est un ensemble d'instructions qui disent à un ordinateur quoi faire. Applications mobiles, sites web, systèmes d'exploitation et scripts automatisés sont tous des logiciels. Contrairement au matériel (hardware), le logiciel est intangible : on le construit avec du code.",
          en: "Software is a set of instructions that tell a computer what to do. Mobile apps, websites, operating systems, and automation scripts are all software. Unlike hardware, software is intangible: we build it with code.",
        },
        analogy: {
          fr: "Le matériel est la cuisine ; le logiciel est la recette. Sans recette, les ustensiles ne cuisinent rien.",
          en: "Hardware is the kitchen; software is the recipe. Without a recipe, utensils cook nothing.",
        },
      },
      {
        id: "sw-dev-basics-s2",
        title: {
          fr: "Le cycle de vie logiciel",
          en: "The software lifecycle",
        },
        body: {
          fr: "On ne écrit pas du code au hasard. Les équipes suivent un cycle : comprendre le besoin, concevoir, implémenter, tester, déployer, puis maintenir. Chaque étape réduit le risque d'envoyer un produit inutilisable.",
          en: "We don't write code at random. Teams follow a cycle: understand the need, design, implement, test, deploy, then maintain. Each stage reduces the risk of shipping something unusable.",
        },
        bullets: [
          {
            fr: "Besoin : qui utilise le produit et pourquoi ?",
            en: "Need: who uses the product and why?",
          },
          {
            fr: "Conception : architecture et découpage des modules",
            en: "Design: architecture and module breakdown",
          },
          {
            fr: "Implémentation : écrire et versionner le code",
            en: "Implementation: write and version the code",
          },
          {
            fr: "Test & livraison : vérifier, déployer, corriger",
            en: "Test & delivery: verify, deploy, fix",
          },
        ],
        callout: {
          fr: "Ignorer les tests pour « aller plus vite » coûte presque toujours plus cher plus tard.",
          en: "Skipping tests to \"go faster\" almost always costs more later.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-dev-basics-s3",
        title: {
          fr: "Frontend, backend, données",
          en: "Frontend, backend, data",
        },
        body: {
          fr: "La plupart des applications modernes se découpent en trois couches : l'interface (frontend), la logique serveur (backend) et le stockage (base de données). Un développeur peut se spécialiser, mais comprendre les trois est un atout.",
          en: "Most modern apps split into three layers: the interface (frontend), server logic (backend), and storage (database). A developer may specialize, but understanding all three is a strength.",
        },
        diagram: "client-server-web",
      },
      {
        id: "sw-dev-basics-s4",
        title: {
          fr: "Ce que fait un développeur au quotidien",
          en: "What a developer does day to day",
        },
        body: {
          fr: "Coder n'est qu'une partie du métier. Lire du code existant, discuter des besoins, revoir le code des collègues, déboguer et documenter occupent une grande part de la journée.",
          en: "Coding is only part of the job. Reading existing code, discussing requirements, reviewing peers' code, debugging, and documenting fill much of the day.",
        },
        bullets: [
          {
            fr: "Lire et comprendre du code déjà écrit",
            en: "Read and understand existing code",
          },
          {
            fr: "Écrire de petites unités testables",
            en: "Write small, testable units",
          },
          {
            fr: "Collaborer via Git et les revues de code",
            en: "Collaborate via Git and code reviews",
          },
        ],
        callout: {
          fr: "Un bon développeur explique autant qu'il code.",
          en: "A good developer explains as much as they code.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-dev-basics-s5",
        title: {
          fr: "Premier contact avec le code",
          en: "First contact with code",
        },
        body: {
          fr: "Le code est un texte structuré qu'un interpréteur ou un compilateur transforme en actions. Voici une fonction simple qui calcule une somme — lisible, nommée clairement, et facile à tester.",
          en: "Code is structured text that an interpreter or compiler turns into actions. Here is a simple function that computes a sum — readable, clearly named, and easy to test.",
        },
        codeExample: {
          language: "typescript",
          code: `function add(a: number, b: number): number {\n  return a + b;\n}\n\nconsole.log(add(2, 3)); // 5`,
          caption: {
            fr: "Une fonction pure : mêmes entrées → même sortie.",
            en: "A pure function: same inputs → same output.",
          },
        },
      },
      {
        id: "sw-dev-basics-s6",
        title: {
          fr: "Qualité dès le départ",
          en: "Quality from the start",
        },
        body: {
          fr: "La qualité n'est pas un luxe ajouté à la fin. Noms clairs, petites fonctions, tests et revues limitent les bugs et accélèrent les évolutions futures.",
          en: "Quality is not a luxury added at the end. Clear names, small functions, tests, and reviews limit bugs and speed up future changes.",
        },
        callout: {
          fr: "Erreur fréquente : tout mettre dans un seul fichier « pour avancer ». Cela devient vite illisible.",
          en: "Common mistake: putting everything in one file \"to move faster\". It quickly becomes unreadable.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-dev-basics-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Avant de coder une feature, prends l'habitude de reformuler le besoin en une phrase claire.",
          en: "Before coding a feature, get used to restating the need in one clear sentence.",
        },
        miniExercise: {
          prompt: {
            fr: "Reformule en une phrase : « On veut une page où l'utilisateur voit ses leçons terminées et son XP. »",
            en: "Restate in one sentence: \"We want a page where the user sees finished lessons and their XP.\"",
          },
          hint: {
            fr: "Pense à qui, quoi, et pourquoi.",
            en: "Think who, what, and why.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Logiciel", en: "Software" },
        definition: {
          fr: "Ensemble d'instructions exécutées par un ordinateur.",
          en: "A set of instructions executed by a computer.",
        },
      },
      {
        term: { fr: "Cycle de vie", en: "Lifecycle" },
        definition: {
          fr: "Étapes de conception, construction, test, livraison et maintenance.",
          en: "Stages of design, build, test, delivery, and maintenance.",
        },
      },
      {
        term: { fr: "Frontend", en: "Frontend" },
        definition: {
          fr: "Partie visible de l'application (interface utilisateur).",
          en: "The visible part of the application (user interface).",
        },
      },
      {
        term: { fr: "Backend", en: "Backend" },
        definition: {
          fr: "Logique serveur, APIs et règles métier.",
          en: "Server logic, APIs, and business rules.",
        },
      },
      {
        term: { fr: "Débogage", en: "Debugging" },
        definition: {
          fr: "Processus de trouver et corriger les défauts dans le code.",
          en: "The process of finding and fixing defects in code.",
        },
      },
    ],
    activities: [
      {
        id: "sw-dev-basics-q1",
        type: "multiple-choice",
        question: {
          fr: "Qu'est-ce qu'un logiciel ?",
          en: "What is software?",
        },
        options: [
          {
            fr: "Des instructions exécutées par un ordinateur",
            en: "Instructions executed by a computer",
          },
          { fr: "Uniquement le processeur", en: "Only the processor" },
          { fr: "Un câble réseau", en: "A network cable" },
          { fr: "Un écran tactile", en: "A touchscreen" },
        ],
        correctAnswer: {
          fr: "Des instructions exécutées par un ordinateur",
          en: "Instructions executed by a computer",
        },
        hint: {
          fr: "C'est intangible, contrairement au matériel.",
          en: "It is intangible, unlike hardware.",
        },
        explanation: {
          fr: "Le logiciel est du code : des instructions. Le matériel (CPU, écran, câbles) est physique.",
          en: "Software is code: instructions. Hardware (CPU, screen, cables) is physical.",
        },
      },
      {
        id: "sw-dev-basics-q2",
        type: "multiple-choice",
        question: {
          fr: "Quelle étape vient typiquement avant le déploiement ?",
          en: "Which step typically comes before deployment?",
        },
        options: [
          { fr: "Les tests", en: "Testing" },
          { fr: "La mise au rebut", en: "Disposal" },
          { fr: "L'impression papier", en: "Paper printing" },
          { fr: "Le formatage du disque", en: "Disk formatting" },
        ],
        correctAnswer: { fr: "Les tests", en: "Testing" },
        hint: {
          fr: "On vérifie avant d'envoyer en production.",
          en: "We verify before shipping to production.",
        },
        explanation: {
          fr: "Tester avant de déployer réduit les bugs en production et les urgences coûteuses.",
          en: "Testing before deploy reduces production bugs and costly fire drills.",
        },
      },
      {
        id: "sw-dev-basics-q3",
        type: "multiple-choice",
        question: {
          fr: "Le frontend correspond surtout à…",
          en: "The frontend mainly corresponds to…",
        },
        options: [
          {
            fr: "L'interface utilisateur",
            en: "The user interface",
          },
          { fr: "La base de données seule", en: "The database alone" },
          { fr: "Le câblage du data center", en: "Data-center cabling" },
          { fr: "Le BIOS", en: "The BIOS" },
        ],
        correctAnswer: {
          fr: "L'interface utilisateur",
          en: "The user interface",
        },
        hint: {
          fr: "Ce que voit et manipule l'utilisateur.",
          en: "What the user sees and interacts with.",
        },
        explanation: {
          fr: "Le frontend est la couche UI. Le backend et la base gèrent logique et données.",
          en: "Frontend is the UI layer. Backend and database handle logic and data.",
        },
      },
      {
        id: "sw-dev-basics-q4",
        type: "multiple-choice",
        question: {
          fr: "Parmi ces activités, laquelle fait partie du métier de développeur ?",
          en: "Which of these is part of a developer's job?",
        },
        options: [
          {
            fr: "Revoir le code des collègues",
            en: "Reviewing peers' code",
          },
          {
            fr: "Réparer uniquement des imprimantes",
            en: "Only repairing printers",
          },
          {
            fr: "Vendre du matériel informatique",
            en: "Selling computer hardware",
          },
          {
            fr: "Installer des prises électriques",
            en: "Installing electrical outlets",
          },
        ],
        correctAnswer: {
          fr: "Revoir le code des collègues",
          en: "Reviewing peers' code",
        },
        hint: {
          fr: "La collaboration autour du code est centrale.",
          en: "Collaboration around code is central.",
        },
        explanation: {
          fr: "Les revues de code améliorent la qualité et partagent la connaissance dans l'équipe.",
          en: "Code reviews improve quality and share knowledge across the team.",
        },
      },
      {
        id: "sw-dev-basics-q5",
        type: "multiple-choice",
        question: {
          fr: "Pourquoi découper une application en couches ?",
          en: "Why split an application into layers?",
        },
        options: [
          {
            fr: "Pour séparer responsabilités et faciliter l'évolution",
            en: "To separate responsibilities and ease evolution",
          },
          {
            fr: "Pour ralentir volontairement le projet",
            en: "To intentionally slow the project",
          },
          {
            fr: "Parce que le compilateur l'exige toujours",
            en: "Because the compiler always requires it",
          },
          {
            fr: "Pour supprimer tous les tests",
            en: "To remove all tests",
          },
        ],
        correctAnswer: {
          fr: "Pour séparer responsabilités et faciliter l'évolution",
          en: "To separate responsibilities and ease evolution",
        },
        hint: {
          fr: "Pense à maintenance et clarté.",
          en: "Think maintenance and clarity.",
        },
        explanation: {
          fr: "Des couches claires limitent l'impact d'un changement et clarifient qui fait quoi.",
          en: "Clear layers limit change impact and clarify who does what.",
        },
      },
      {
        id: "sw-dev-basics-q6",
        type: "multiple-choice",
        question: {
          fr: "Une fonction pure a pour propriété…",
          en: "A pure function has the property that…",
        },
        options: [
          {
            fr: "Mêmes entrées → même sortie, sans effet de bord",
            en: "Same inputs → same output, no side effects",
          },
          {
            fr: "Elle modifie toujours la base de données",
            en: "It always modifies the database",
          },
          {
            fr: "Elle ne peut jamais être testée",
            en: "It can never be tested",
          },
          {
            fr: "Elle doit être écrite en assembleur",
            en: "It must be written in assembly",
          },
        ],
        correctAnswer: {
          fr: "Mêmes entrées → même sortie, sans effet de bord",
          en: "Same inputs → same output, no side effects",
        },
        hint: {
          fr: "Prévisibilité et testabilité.",
          en: "Predictability and testability.",
        },
        explanation: {
          fr: "Les fonctions pures sont faciles à raisonner et à tester unitairement.",
          en: "Pure functions are easy to reason about and unit-test.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice bienveillante en génie logiciel. Tu enseignes les bases : qu'est-ce qu'un logiciel, cycle de vie, frontend/backend, rôle du développeur. Réponds en français, avec des exemples concrets.",
        en: "You are Nova, a friendly software engineering tutor. You teach basics: what software is, lifecycle, frontend/backend, developer role. Answer in English with concrete examples.",
      },
      introMessage: {
        fr: "Salut ! Aujourd'hui on pose les bases du développement logiciel. Qu'est-ce qui te semble flou ?",
        en: "Hi! Today we lay the foundations of software development. What feels unclear?",
      },
      topics: [
        {
          fr: "Différence frontend / backend",
          en: "Frontend vs backend difference",
        },
        {
          fr: "Étapes du cycle de vie",
          en: "Lifecycle stages",
        },
        {
          fr: "Rôle quotidien d'un développeur",
          en: "A developer's daily role",
        },
      ],
    },
  },
  {
    id: "sw-algorithms",
    unitId: "sw-fundamentals",
    title: { fr: "Algorithmes", en: "Algorithms" },
    description: {
      fr: "Apprendre à décomposer un problème et à raisonner sur la complexité.",
      en: "Learn to break down problems and reason about complexity.",
    },
    icon: "zap",
    estimatedMinutes: 18,
    xpReward: 24,
    goals: [
      {
        description: {
          fr: "Définir un algorithme et ses propriétés",
          en: "Define an algorithm and its properties",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Comparer approches naïves et optimisées",
          en: "Compare naive and optimized approaches",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Lire une complexité Big-O simple",
          en: "Read simple Big-O complexity",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "sw-algorithms-s1",
        title: {
          fr: "Un algorithme, c'est une recette",
          en: "An algorithm is a recipe",
        },
        body: {
          fr: "Un algorithme est une suite finie d'étapes précises pour résoudre un problème. Il doit être clair, terminer, et produire un résultat correct pour les entrées attendues.",
          en: "An algorithm is a finite sequence of precise steps to solve a problem. It must be clear, terminate, and produce a correct result for expected inputs.",
        },
        analogy: {
          fr: "Comme une recette de cuisine : ingrédients (entrées), étapes ordonnées, plat final (sortie).",
          en: "Like a cooking recipe: ingredients (inputs), ordered steps, final dish (output).",
        },
      },
      {
        id: "sw-algorithms-s2",
        title: {
          fr: "Décomposer avant de coder",
          en: "Break it down before coding",
        },
        body: {
          fr: "Avant d'ouvrir l'éditeur, clarifie le problème : quelles entrées ? quelle sortie ? quels cas limites ? Écrire les étapes en langage naturel évite de se perdre dans la syntaxe trop tôt.",
          en: "Before opening the editor, clarify the problem: which inputs? which output? which edge cases? Writing steps in plain language avoids getting lost in syntax too early.",
        },
        bullets: [
          {
            fr: "Entrées et sorties explicites",
            en: "Explicit inputs and outputs",
          },
          {
            fr: "Cas nominaux puis cas limites",
            en: "Happy path then edge cases",
          },
          {
            fr: "Pseudo-code avant le vrai code",
            en: "Pseudocode before real code",
          },
        ],
        callout: {
          fr: "Si tu ne peux pas expliquer l'algo en 30 secondes, il n'est pas encore assez clair.",
          en: "If you cannot explain the algo in 30 seconds, it is not clear enough yet.",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-algorithms-s3",
        title: {
          fr: "Exemple : trouver le maximum",
          en: "Example: find the maximum",
        },
        body: {
          fr: "Parcourir une liste une seule fois en gardant le plus grand élément vu jusqu'ici. C'est simple, correct, et linéaire en temps.",
          en: "Scan a list once while keeping the largest value seen so far. It is simple, correct, and linear in time.",
        },
        codeExample: {
          language: "typescript",
          code: `function maxOf(nums: number[]): number {\n  if (nums.length === 0) throw new Error("empty");\n  let max = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    if (nums[i] > max) max = nums[i];\n  }\n  return max;\n}`,
          caption: {
            fr: "Une passe : O(n) en temps, O(1) en mémoire auxiliaire.",
            en: "One pass: O(n) time, O(1) auxiliary memory.",
          },
        },
      },
      {
        id: "sw-algorithms-s4",
        title: {
          fr: "Complexité Big-O (intuition)",
          en: "Big-O complexity (intuition)",
        },
        body: {
          fr: "Big-O décrit comment le coût croît quand la taille des données augmente. O(1) est constant, O(n) linéaire, O(n²) quadratique. On compare surtout le pire cas pour anticiper les goulots d'étranglement.",
          en: "Big-O describes how cost grows as data size grows. O(1) is constant, O(n) linear, O(n²) quadratic. We mostly compare worst case to anticipate bottlenecks.",
        },
        bullets: [
          {
            fr: "O(1) : accès direct à un index",
            en: "O(1): direct index access",
          },
          {
            fr: "O(n) : une boucle sur n éléments",
            en: "O(n): one loop over n elements",
          },
          {
            fr: "O(n²) : boucles imbriquées sur n",
            en: "O(n²): nested loops over n",
          },
        ],
        callout: {
          fr: "Big-O ignore les constantes : pour de petits n, un algo « pire » peut être plus rapide en pratique.",
          en: "Big-O ignores constants: for small n, a \"worse\" algo can be faster in practice.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-algorithms-s5",
        title: {
          fr: "Naïf vs mieux pensé",
          en: "Naive vs better thought-out",
        },
        body: {
          fr: "Un tri à bulles est facile à comprendre mais O(n²). Un tri plus intelligent (merge sort, sort natif) est souvent O(n log n). Commence correct et clair ; optimise quand une mesure le justifie.",
          en: "Bubble sort is easy to understand but O(n²). A smarter sort (merge sort, native sort) is often O(n log n). Start correct and clear; optimize when measurement justifies it.",
        },
        callout: {
          fr: "Erreur : micro-optimiser sans mesurer. Lisibilité d'abord.",
          en: "Mistake: micro-optimizing without measuring. Readability first.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-algorithms-s6",
        title: {
          fr: "Recherche linéaire vs dichotomique",
          en: "Linear vs binary search",
        },
        body: {
          fr: "Sur une liste non triée, on cherche élément par élément (O(n)). Sur une liste triée, la recherche dichotomique divise l'espace par deux à chaque étape (O(log n)).",
          en: "On an unsorted list, you check element by element (O(n)). On a sorted list, binary search halves the space each step (O(log n)).",
        },
        codeExample: {
          language: "typescript",
          code: `function binarySearch(sorted: number[], target: number): number {\n  let lo = 0, hi = sorted.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (sorted[mid] === target) return mid;\n    if (sorted[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -1;\n}`,
        },
      },
      {
        id: "sw-algorithms-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Entraîne-toi à estimer la complexité d'une boucle simple.",
          en: "Practice estimating the complexity of a simple loop.",
        },
        miniExercise: {
          prompt: {
            fr: "Quelle complexité pour deux boucles for imbriquées sur un tableau de taille n ?",
            en: "What complexity for two nested for-loops over an array of size n?",
          },
          hint: {
            fr: "Compte combien de fois le corps interne s'exécute.",
            en: "Count how many times the inner body runs.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Algorithme", en: "Algorithm" },
        definition: {
          fr: "Suite finie d'étapes pour résoudre un problème.",
          en: "A finite sequence of steps to solve a problem.",
        },
      },
      {
        term: { fr: "Complexité", en: "Complexity" },
        definition: {
          fr: "Mesure de la croissance du coût (temps/mémoire) selon la taille des données.",
          en: "Measure of how cost (time/memory) grows with data size.",
        },
      },
      {
        term: { fr: "Big-O", en: "Big-O" },
        definition: {
          fr: "Notation qui décrit l'ordre de grandeur asymptotique.",
          en: "Notation describing asymptotic order of growth.",
        },
      },
      {
        term: { fr: "Cas limite", en: "Edge case" },
        definition: {
          fr: "Situation extrême (vide, un seul élément, doublons…) à tester.",
          en: "Extreme situation (empty, one item, duplicates…) to test.",
        },
      },
      {
        term: { fr: "Pseudo-code", en: "Pseudocode" },
        definition: {
          fr: "Description structurée d'un algo sans syntaxe d'un langage précis.",
          en: "Structured algo description without a specific language's syntax.",
        },
      },
    ],
    activities: [
      {
        id: "sw-algorithms-q1",
        type: "multiple-choice",
        question: {
          fr: "Un algorithme doit surtout…",
          en: "An algorithm must mainly…",
        },
        options: [
          {
            fr: "Terminer et produire un résultat correct",
            en: "Terminate and produce a correct result",
          },
          {
            fr: "Utiliser forcément la récursion",
            en: "Necessarily use recursion",
          },
          {
            fr: "Être écrit uniquement en C",
            en: "Be written only in C",
          },
          {
            fr: "Ignorer les entrées",
            en: "Ignore inputs",
          },
        ],
        correctAnswer: {
          fr: "Terminer et produire un résultat correct",
          en: "Terminate and produce a correct result",
        },
        hint: {
          fr: "Finitude et correction.",
          en: "Finiteness and correctness.",
        },
        explanation: {
          fr: "Un algo a des étapes finies et une sortie correcte pour le domaine prévu.",
          en: "An algo has finite steps and a correct output for its intended domain.",
        },
      },
      {
        id: "sw-algorithms-q2",
        type: "multiple-choice",
        question: {
          fr: "Une seule boucle sur n éléments est typiquement…",
          en: "A single loop over n elements is typically…",
        },
        options: [
          { fr: "O(n)", en: "O(n)" },
          { fr: "O(1)", en: "O(1)" },
          { fr: "O(n²)", en: "O(n²)" },
          { fr: "O(2ⁿ)", en: "O(2ⁿ)" },
        ],
        correctAnswer: { fr: "O(n)", en: "O(n)" },
        hint: {
          fr: "Le travail croît proportionnellement à n.",
          en: "Work grows proportionally to n.",
        },
        explanation: {
          fr: "Chaque élément est traité une fois → coût linéaire O(n).",
          en: "Each element is handled once → linear cost O(n).",
        },
      },
      {
        id: "sw-algorithms-q3",
        type: "multiple-choice",
        question: {
          fr: "La recherche dichotomique nécessite…",
          en: "Binary search requires…",
        },
        options: [
          {
            fr: "Une collection triée",
            en: "A sorted collection",
          },
          {
            fr: "Une collection forcément désordonnée",
            en: "A necessarily unordered collection",
          },
          {
            fr: "Un GPU dédié",
            en: "A dedicated GPU",
          },
          {
            fr: "Zéro comparaison",
            en: "Zero comparisons",
          },
        ],
        correctAnswer: {
          fr: "Une collection triée",
          en: "A sorted collection",
        },
        hint: {
          fr: "On élimine la moitié grâce à l'ordre.",
          en: "We discard half thanks to ordering.",
        },
        explanation: {
          fr: "Sans ordre, on ne peut pas décider quelle moitié écarter.",
          en: "Without order, we cannot decide which half to discard.",
        },
      },
      {
        id: "sw-algorithms-q4",
        type: "multiple-choice",
        question: {
          fr: "Deux boucles for imbriquées sur n donnent souvent…",
          en: "Two nested for-loops over n often give…",
        },
        options: [
          { fr: "O(n²)", en: "O(n²)" },
          { fr: "O(log n)", en: "O(log n)" },
          { fr: "O(1)", en: "O(1)" },
          { fr: "O(n)", en: "O(n)" },
        ],
        correctAnswer: { fr: "O(n²)", en: "O(n²)" },
        hint: {
          fr: "n × n itérations.",
          en: "n × n iterations.",
        },
        explanation: {
          fr: "Le corps interne s'exécute environ n² fois → O(n²).",
          en: "The inner body runs about n² times → O(n²).",
        },
      },
      {
        id: "sw-algorithms-q5",
        type: "multiple-choice",
        question: {
          fr: "Pourquoi écrire du pseudo-code d'abord ?",
          en: "Why write pseudocode first?",
        },
        options: [
          {
            fr: "Clarifier la logique avant la syntaxe",
            en: "Clarify logic before syntax",
          },
          {
            fr: "Remplacer tous les tests",
            en: "Replace all tests",
          },
          {
            fr: "Éviter de penser aux cas limites",
            en: "Avoid thinking about edge cases",
          },
          {
            fr: "Obliger l'usage de Java uniquement",
            en: "Force Java-only usage",
          },
        ],
        correctAnswer: {
          fr: "Clarifier la logique avant la syntaxe",
          en: "Clarify logic before syntax",
        },
        hint: {
          fr: "Sépare le « quoi » du « comment syntaxique ».",
          en: "Separate the \"what\" from syntactic \"how\".",
        },
        explanation: {
          fr: "Le pseudo-code force à raisonner sur les étapes sans se battre avec le compilateur.",
          en: "Pseudocode forces you to reason about steps without fighting the compiler.",
        },
      },
      {
        id: "sw-algorithms-q6",
        type: "multiple-choice",
        question: {
          fr: "Quand optimiser un algorithme ?",
          en: "When should you optimize an algorithm?",
        },
        options: [
          {
            fr: "Quand une mesure montre un vrai goulot",
            en: "When measurement shows a real bottleneck",
          },
          {
            fr: "Toujours, avant même que ça marche",
            en: "Always, before it even works",
          },
          {
            fr: "Jamais, sous aucun prétexte",
            en: "Never, under any circumstance",
          },
          {
            fr: "Uniquement le week-end",
            en: "Only on weekends",
          },
        ],
        correctAnswer: {
          fr: "Quand une mesure montre un vrai goulot",
          en: "When measurement shows a real bottleneck",
        },
        hint: {
          fr: "Correct + clair d'abord, mesure ensuite.",
          en: "Correct + clear first, measure next.",
        },
        explanation: {
          fr: "L'optimisation prématurée complique le code sans gain prouvé.",
          en: "Premature optimization complicates code without proven gain.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice en algorithmes. Tu expliques la décomposition de problèmes, Big-O de façon intuitive, et tu compares approches naïves et efficaces. Réponds en français avec des exemples simples.",
        en: "You are Nova, an algorithms tutor. You explain problem breakdown, intuitive Big-O, and compare naive vs efficient approaches. Answer in English with simple examples.",
      },
      introMessage: {
        fr: "Prêt·e à penser comme un algo ? Dis-moi où tu bloques : complexité, recherche, ou décomposition.",
        en: "Ready to think like an algorithm? Tell me where you're stuck: complexity, search, or breakdown.",
      },
      topics: [
        {
          fr: "Intuition Big-O",
          en: "Big-O intuition",
        },
        {
          fr: "Recherche linéaire vs dichotomique",
          en: "Linear vs binary search",
        },
        {
          fr: "Pseudo-code et cas limites",
          en: "Pseudocode and edge cases",
        },
      ],
    },
  },
  {
    id: "sw-data-structures",
    unitId: "sw-fundamentals",
    title: { fr: "Structures de données", en: "Data structures" },
    description: {
      fr: "Choisir tableaux, listes, piles, files, maps et arbres selon le besoin.",
      en: "Choose arrays, lists, stacks, queues, maps, and trees for the right job.",
    },
    icon: "layers",
    estimatedMinutes: 19,
    xpReward: 25,
    goals: [
      {
        description: {
          fr: "Différencier tableau, liste et map",
          en: "Distinguish array, list, and map",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Utiliser pile et file correctement",
          en: "Use stack and queue correctly",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Relier structure et performance",
          en: "Connect structure choice to performance",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "sw-data-structures-s1",
        title: {
          fr: "Pourquoi des structures ?",
          en: "Why data structures?",
        },
        body: {
          fr: "Organiser les données conditionne la vitesse et la clarté du code. La bonne structure rend les opérations fréquentes (recherche, insertion, parcours) naturelles et efficaces.",
          en: "How you organize data drives speed and clarity. The right structure makes frequent operations (search, insert, traverse) natural and efficient.",
        },
        callout: {
          fr: "Choisir une structure, c'est choisir quels accès seront rapides.",
          en: "Choosing a structure means choosing which accesses will be fast.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-data-structures-s2",
        title: { fr: "Tableaux et listes", en: "Arrays and lists" },
        body: {
          fr: "Un tableau offre un accès O(1) par index, mais l'insertion au milieu peut coûter cher. Une liste chaînée facilite certaines insertions, au prix d'un accès aléatoire plus lent.",
          en: "An array gives O(1) index access, but mid-list inserts can be costly. A linked list eases some inserts at the cost of slower random access.",
        },
        bullets: [
          {
            fr: "Tableau : index rapide, taille souvent fixe ou redimensionnée",
            en: "Array: fast index, often fixed or resized capacity",
          },
          {
            fr: "Liste : insertions locales plus souples",
            en: "List: more flexible local inserts",
          },
        ],
        codeExample: {
          language: "typescript",
          code: `const scores: number[] = [12, 18, 9];\nscores.push(15); // ajout en fin\nconst first = scores[0]; // accès O(1)`,
        },
      },
      {
        id: "sw-data-structures-s3",
        title: { fr: "Pile (stack)", en: "Stack" },
        body: {
          fr: "LIFO : dernier entré, premier sorti. Idéal pour l'historique « undo », l'évaluation d'expressions ou le suivi d'appels de fonctions.",
          en: "LIFO: last in, first out. Ideal for undo history, expression evaluation, or tracking function calls.",
        },
        analogy: {
          fr: "Une pile d'assiettes : tu poses et retires toujours celle du dessus.",
          en: "A stack of plates: you always put and take the top one.",
        },
        codeExample: {
          language: "typescript",
          code: `const stack: string[] = [];\nstack.push("A");\nstack.push("B");\nconsole.log(stack.pop()); // "B"`,
        },
      },
      {
        id: "sw-data-structures-s4",
        title: { fr: "File (queue)", en: "Queue" },
        body: {
          fr: "FIFO : premier entré, premier sorti. Parfait pour les files d'attente de tâches, le BFS, ou le traitement ordonné d'événements.",
          en: "FIFO: first in, first out. Perfect for task queues, BFS, or ordered event processing.",
        },
        callout: {
          fr: "Ne confonds pas pile et file : LIFO ≠ FIFO.",
          en: "Don't confuse stack and queue: LIFO ≠ FIFO.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-data-structures-s5",
        title: { fr: "Maps / dictionnaires", en: "Maps / dictionaries" },
        body: {
          fr: "Une map associe clé → valeur. La recherche par clé est en moyenne O(1) avec une bonne table de hachage. Idéal pour des lookups fréquents.",
          en: "A map associates key → value. Key lookup averages O(1) with a good hash table. Ideal for frequent lookups.",
        },
        codeExample: {
          language: "typescript",
          code: `const xpByUser = new Map<string, number>();\nxpByUser.set("alice", 120);\nconsole.log(xpByUser.get("alice")); // 120`,
        },
      },
      {
        id: "sw-data-structures-s6",
        title: { fr: "Arbres (aperçu)", en: "Trees (overview)" },
        body: {
          fr: "Un arbre organise des nœuds parent/enfants. Les arbres binaires de recherche et les DOM trees structurés permettent parcours et recherches efficaces selon l'ordre.",
          en: "A tree organizes parent/child nodes. Binary search trees and structured DOM trees enable efficient traversal and search depending on ordering.",
        },
        diagram: "dom-tree",
        callout: {
          fr: "Erreur : tout stocker dans un tableau géant alors qu'une map suffirait.",
          en: "Mistake: storing everything in a giant array when a map would suffice.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-data-structures-s7",
        title: { fr: "Choisir la bonne structure", en: "Pick the right structure" },
        body: {
          fr: "Pose-toi : besoin d'ordre ? d'accès par clé ? d'insertions fréquentes en tête ? La réponse guide le choix.",
          en: "Ask: need order? key access? frequent head inserts? The answer guides the choice.",
        },
        miniExercise: {
          prompt: {
            fr: "Tu dois retrouver rapidement le score d'un utilisateur par son id. Quelle structure ?",
            en: "You need to quickly find a user's score by id. Which structure?",
          },
          hint: {
            fr: "Pense clé → valeur.",
            en: "Think key → value.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Tableau", en: "Array" },
        definition: {
          fr: "Collection indexée à accès rapide par position.",
          en: "Indexed collection with fast positional access.",
        },
      },
      {
        term: { fr: "Pile", en: "Stack" },
        definition: {
          fr: "Structure LIFO : dernier entré, premier sorti.",
          en: "LIFO structure: last in, first out.",
        },
      },
      {
        term: { fr: "File", en: "Queue" },
        definition: {
          fr: "Structure FIFO : premier entré, premier sorti.",
          en: "FIFO structure: first in, first out.",
        },
      },
      {
        term: { fr: "Map", en: "Map" },
        definition: {
          fr: "Association clé → valeur pour des recherches rapides.",
          en: "Key → value association for fast lookups.",
        },
      },
      {
        term: { fr: "Arbre", en: "Tree" },
        definition: {
          fr: "Structure hiérarchique de nœuds parent/enfants.",
          en: "Hierarchical structure of parent/child nodes.",
        },
      },
    ],
    activities: [
      {
        id: "sw-data-structures-q1",
        type: "multiple-choice",
        question: {
          fr: "L'accès par index dans un tableau est typiquement…",
          en: "Index access in an array is typically…",
        },
        options: [
          { fr: "O(1)", en: "O(1)" },
          { fr: "O(n²)", en: "O(n²)" },
          { fr: "O(2ⁿ)", en: "O(2ⁿ)" },
          { fr: "Impossible", en: "Impossible" },
        ],
        correctAnswer: { fr: "O(1)", en: "O(1)" },
        hint: { fr: "Accès direct en mémoire.", en: "Direct memory access." },
        explanation: {
          fr: "L'adresse se calcule directement depuis l'index → O(1).",
          en: "The address is computed directly from the index → O(1).",
        },
      },
      {
        id: "sw-data-structures-q2",
        type: "multiple-choice",
        question: {
          fr: "Une pile suit le principe…",
          en: "A stack follows the…",
        },
        options: [
          { fr: "LIFO", en: "LIFO" },
          { fr: "FIFO", en: "FIFO" },
          { fr: "Aléatoire", en: "Random" },
          { fr: "Trié uniquement", en: "Sorted only" },
        ],
        correctAnswer: { fr: "LIFO", en: "LIFO" },
        hint: { fr: "Dernier entré…", en: "Last in…" },
        explanation: {
          fr: "Last In, First Out : on retire le dernier élément empilé.",
          en: "Last In, First Out: you remove the last pushed element.",
        },
      },
      {
        id: "sw-data-structures-q3",
        type: "multiple-choice",
        question: {
          fr: "Une file d'attente de tâches utilise plutôt…",
          en: "A task waiting line rather uses…",
        },
        options: [
          { fr: "Une file (FIFO)", en: "A queue (FIFO)" },
          { fr: "Une pile (LIFO)", en: "A stack (LIFO)" },
          { fr: "Un arbre binaire forcément", en: "Necessarily a binary tree" },
          { fr: "Un GPU", en: "A GPU" },
        ],
        correctAnswer: { fr: "Une file (FIFO)", en: "A queue (FIFO)" },
        hint: { fr: "Premier arrivé, premier servi.", en: "First come, first served." },
        explanation: {
          fr: "FIFO respecte l'ordre d'arrivée des tâches.",
          en: "FIFO respects arrival order of tasks.",
        },
      },
      {
        id: "sw-data-structures-q4",
        type: "multiple-choice",
        question: {
          fr: "Pour retrouver une valeur par clé rapidement, privilégie…",
          en: "To find a value by key quickly, prefer…",
        },
        options: [
          { fr: "Une Map", en: "A Map" },
          { fr: "Un scan linéaire d'un tableau géant sans index", en: "A linear scan of a giant unindexed array" },
          { fr: "Un affichage console", en: "A console print" },
          { fr: "Un fichier CSV lu à la main", en: "A CSV read by hand" },
        ],
        correctAnswer: { fr: "Une Map", en: "A Map" },
        hint: { fr: "Association clé → valeur.", en: "Key → value association." },
        explanation: {
          fr: "Les maps (hash) offrent des lookups moyens O(1).",
          en: "Maps (hash) offer average O(1) lookups.",
        },
      },
      {
        id: "sw-data-structures-q5",
        type: "multiple-choice",
        question: {
          fr: "Le DOM d'une page web est souvent modélisé comme…",
          en: "A web page DOM is often modeled as…",
        },
        options: [
          { fr: "Un arbre", en: "A tree" },
          { fr: "Une seule pile LIFO exclusive", en: "A single exclusive LIFO stack" },
          { fr: "Un cable Ethernet", en: "An Ethernet cable" },
          { fr: "Un processeur", en: "A processor" },
        ],
        correctAnswer: { fr: "Un arbre", en: "A tree" },
        hint: { fr: "Hiérarchie parent/enfants.", en: "Parent/child hierarchy." },
        explanation: {
          fr: "HTML forme une hiérarchie de nœuds : un arbre.",
          en: "HTML forms a hierarchy of nodes: a tree.",
        },
      },
      {
        id: "sw-data-structures-q6",
        type: "multiple-choice",
        question: {
          fr: "Choisir une structure de données sert surtout à…",
          en: "Choosing a data structure mainly helps…",
        },
        options: [
          {
            fr: "Rendre les opérations fréquentes efficaces et claires",
            en: "Make frequent operations efficient and clear",
          },
          {
            fr: "Éviter d'écrire des tests",
            en: "Avoid writing tests",
          },
          {
            fr: "Supprimer le besoin de Git",
            en: "Remove the need for Git",
          },
          {
            fr: "Remplacer le compilateur",
            en: "Replace the compiler",
          },
        ],
        correctAnswer: {
          fr: "Rendre les opérations fréquentes efficaces et claires",
          en: "Make frequent operations efficient and clear",
        },
        hint: { fr: "Performance + intention.", en: "Performance + intent." },
        explanation: {
          fr: "La structure encode comment on veut accéder et transformer les données.",
          en: "The structure encodes how we want to access and transform data.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice en structures de données. Tu compares tableaux, piles, files, maps et arbres avec des cas d'usage concrets. Réponds en français.",
        en: "You are Nova, a data-structures tutor. You compare arrays, stacks, queues, maps, and trees with concrete use cases. Answer in English.",
      },
      introMessage: {
        fr: "On choisit ensemble la bonne structure. Dis-moi ton cas d'usage !",
        en: "Let's pick the right structure together. Tell me your use case!",
      },
      topics: [
        { fr: "Pile vs file", en: "Stack vs queue" },
        { fr: "Quand utiliser une Map", en: "When to use a Map" },
        { fr: "Tableaux et complexité", en: "Arrays and complexity" },
      ],
    },
  },
  {
    id: "sw-programming-basics",
    unitId: "sw-fundamentals",
    title: { fr: "Bases de la programmation", en: "Programming basics" },
    description: {
      fr: "Variables, types, conditions, boucles et fonctions — le vocabulaire du code.",
      en: "Variables, types, conditionals, loops, and functions — the vocabulary of code.",
    },
    icon: "book",
    estimatedMinutes: 17,
    xpReward: 23,
    goals: [
      {
        description: {
          fr: "Utiliser variables et types de base",
          en: "Use variables and basic types",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Écrire conditions et boucles simples",
          en: "Write simple conditionals and loops",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Créer des fonctions réutilisables",
          en: "Create reusable functions",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "sw-programming-basics-s1",
        title: { fr: "Variables et types", en: "Variables and types" },
        body: {
          fr: "Une variable nomme une valeur en mémoire. Les types (nombre, texte, booléen…) indiquent ce qu'on peut faire avec. TypeScript ajoute des annotations pour attraper les erreurs plus tôt.",
          en: "A variable names a value in memory. Types (number, text, boolean…) say what you can do with it. TypeScript adds annotations to catch errors earlier.",
        },
        codeExample: {
          language: "typescript",
          code: `let xp: number = 0;\nconst name: string = "Nova";\nlet done: boolean = false;`,
        },
      },
      {
        id: "sw-programming-basics-s2",
        title: { fr: "Conditions", en: "Conditionals" },
        body: {
          fr: "Les branches `if` / `else` orientent le flux selon une condition vraie ou fausse. Garde les conditions lisibles ; extrais des booléens nommés si besoin.",
          en: "`if` / `else` branches steer flow based on true or false. Keep conditions readable; extract named booleans if needed.",
        },
        codeExample: {
          language: "typescript",
          code: `function grade(score: number): string {\n  if (score >= 80) return "A";\n  if (score >= 60) return "B";\n  return "C";\n}`,
        },
        callout: {
          fr: "Astuce : préfère des conditions positives et courtes.",
          en: "Tip: prefer short, positive conditions.",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-programming-basics-s3",
        title: { fr: "Boucles", en: "Loops" },
        body: {
          fr: "Les boucles répètent une action. `for` quand tu connais le nombre d'itérations ; `while` quand tu continues tant qu'une condition tient.",
          en: "Loops repeat an action. Use `for` when you know the iteration count; `while` when you continue as long as a condition holds.",
        },
        codeExample: {
          language: "typescript",
          code: `const nums = [1, 2, 3];\nlet sum = 0;\nfor (const n of nums) {\n  sum += n;\n}`,
        },
        callout: {
          fr: "Attention aux boucles infinies : la condition doit finir par devenir fausse.",
          en: "Watch infinite loops: the condition must eventually become false.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-programming-basics-s4",
        title: { fr: "Fonctions", en: "Functions" },
        body: {
          fr: "Une fonction encapsule une responsabilité : entrées → sortie. Nomme-la par un verbe, garde-la courte, et évite les effets de bord inutiles.",
          en: "A function encapsulates one responsibility: inputs → output. Name it with a verb, keep it short, and avoid needless side effects.",
        },
        analogy: {
          fr: "Comme un appareil de cuisine : tu mets des ingrédients, tu obtiens un résultat, sans ouvrir toute la cuisine.",
          en: "Like a kitchen appliance: you put ingredients in, get a result, without opening the whole kitchen.",
        },
      },
      {
        id: "sw-programming-basics-s5",
        title: { fr: "Portée (scope)", en: "Scope" },
        body: {
          fr: "La portée définit où un nom est visible. Une variable déclarée dans une fonction n'existe pas à l'extérieur. Cela évite les collisions et les surprises.",
          en: "Scope defines where a name is visible. A variable declared inside a function does not exist outside. That avoids collisions and surprises.",
        },
        callout: {
          fr: "Erreur classique : modifier une variable globale depuis partout.",
          en: "Classic mistake: mutating a global variable from everywhere.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-programming-basics-s6",
        title: { fr: "Erreurs et messages", en: "Errors and messages" },
        body: {
          fr: "Lire un message d'erreur : fichier, ligne, type d'erreur. Reproduire le bug avec une entrée minimale accélère le diagnostic.",
          en: "Read an error message: file, line, error type. Reproducing the bug with a minimal input speeds diagnosis.",
        },
        bullets: [
          { fr: "Lire la stack trace du haut vers le bas", en: "Read the stack trace top-down" },
          { fr: "Isoler le plus petit exemple qui casse", en: "Isolate the smallest failing example" },
          { fr: "Corriger une cause à la fois", en: "Fix one cause at a time" },
        ],
      },
      {
        id: "sw-programming-basics-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Combine condition et fonction.",
          en: "Combine a conditional and a function.",
        },
        miniExercise: {
          prompt: {
            fr: "Écris (en pseudo-code) une fonction `isAdult(age)` qui retourne vrai si age ≥ 18.",
            en: "Write (in pseudocode) a function `isAdult(age)` that returns true if age ≥ 18.",
          },
          hint: {
            fr: "Une seule condition suffit.",
            en: "A single condition is enough.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Variable", en: "Variable" },
        definition: {
          fr: "Nom associé à une valeur en mémoire.",
          en: "A name bound to a value in memory.",
        },
      },
      {
        term: { fr: "Type", en: "Type" },
        definition: {
          fr: "Catégorie de valeur (nombre, texte, booléen…).",
          en: "Category of value (number, text, boolean…).",
        },
      },
      {
        term: { fr: "Boucle", en: "Loop" },
        definition: {
          fr: "Structure qui répète des instructions.",
          en: "Structure that repeats instructions.",
        },
      },
      {
        term: { fr: "Fonction", en: "Function" },
        definition: {
          fr: "Bloc réutilisable avec entrées et sortie.",
          en: "Reusable block with inputs and an output.",
        },
      },
      {
        term: { fr: "Portée", en: "Scope" },
        definition: {
          fr: "Zone du code où un identifiant est visible.",
          en: "Region of code where an identifier is visible.",
        },
      },
    ],
    activities: [
      {
        id: "sw-programming-basics-q1",
        type: "multiple-choice",
        question: {
          fr: "À quoi sert un type en programmation ?",
          en: "What is a type for in programming?",
        },
        options: [
          {
            fr: "Décrire la nature d'une valeur et ses opérations possibles",
            en: "Describe a value's nature and allowed operations",
          },
          { fr: "Colorier l'éditeur uniquement", en: "Only color the editor" },
          { fr: "Remplacer Git", en: "Replace Git" },
          { fr: "Éteindre le serveur", en: "Shut down the server" },
        ],
        correctAnswer: {
          fr: "Décrire la nature d'une valeur et ses opérations possibles",
          en: "Describe a value's nature and allowed operations",
        },
        hint: { fr: "Nombre vs texte vs booléen…", en: "Number vs text vs boolean…" },
        explanation: {
          fr: "Les types documentent et contraignent ce qu'on peut faire avec une valeur.",
          en: "Types document and constrain what you can do with a value.",
        },
      },
      {
        id: "sw-programming-basics-q2",
        type: "multiple-choice",
        question: {
          fr: "`if` / `else` servent à…",
          en: "`if` / `else` are used to…",
        },
        options: [
          { fr: "Orienter le flux selon une condition", en: "Steer flow based on a condition" },
          { fr: "Créer une base de données", en: "Create a database" },
          { fr: "Compresser des images", en: "Compress images" },
          { fr: "Configurer le DNS", en: "Configure DNS" },
        ],
        correctAnswer: {
          fr: "Orienter le flux selon une condition",
          en: "Steer flow based on a condition",
        },
        hint: { fr: "Branche vraie / fausse.", en: "True / false branch." },
        explanation: {
          fr: "Les conditions permettent d'exécuter des chemins différents.",
          en: "Conditionals let different paths execute.",
        },
      },
      {
        id: "sw-programming-basics-q3",
        type: "multiple-choice",
        question: {
          fr: "Quel risque avec une boucle `while` mal écrite ?",
          en: "What risk comes with a poorly written `while` loop?",
        },
        options: [
          { fr: "Boucle infinie", en: "Infinite loop" },
          { fr: "Suppression automatique de Git", en: "Automatic Git deletion" },
          { fr: "Changement de DNS", en: "DNS change" },
          { fr: "Création d'un SSL", en: "Creating SSL" },
        ],
        correctAnswer: { fr: "Boucle infinie", en: "Infinite loop" },
        hint: { fr: "Si la condition ne devient jamais fausse…", en: "If the condition never becomes false…" },
        explanation: {
          fr: "Sans progression vers la fin, le programme tourne sans s'arrêter.",
          en: "Without progress toward termination, the program never stops.",
        },
      },
      {
        id: "sw-programming-basics-q4",
        type: "multiple-choice",
        question: {
          fr: "Une bonne fonction devrait…",
          en: "A good function should…",
        },
        options: [
          {
            fr: "Avoir une responsabilité claire et un nom de verbe",
            en: "Have one clear responsibility and a verb name",
          },
          {
            fr: "Faire dix choses sans nom",
            en: "Do ten unnamed things",
          },
          {
            fr: "Modifier toutes les variables globales",
            en: "Mutate every global variable",
          },
          {
            fr: "Ignorer ses paramètres",
            en: "Ignore its parameters",
          },
        ],
        correctAnswer: {
          fr: "Avoir une responsabilité claire et un nom de verbe",
          en: "Have one clear responsibility and a verb name",
        },
        hint: { fr: "Lisibilité et focus.", en: "Readability and focus." },
        explanation: {
          fr: "Des fonctions petites et bien nommées se testent et se composent facilement.",
          en: "Small, well-named functions are easy to test and compose.",
        },
      },
      {
        id: "sw-programming-basics-q5",
        type: "multiple-choice",
        question: {
          fr: "La portée (scope) d'une variable locale…",
          en: "The scope of a local variable…",
        },
        options: [
          {
            fr: "Est limitée à son bloc / sa fonction",
            en: "Is limited to its block / function",
          },
          {
            fr: "Est visible dans tout Internet",
            en: "Is visible across the entire Internet",
          },
          {
            fr: "N'existe jamais",
            en: "Never exists",
          },
          {
            fr: "Remplace le système d'exploitation",
            en: "Replaces the operating system",
          },
        ],
        correctAnswer: {
          fr: "Est limitée à son bloc / sa fonction",
          en: "Is limited to its block / function",
        },
        hint: { fr: "Visibilité locale.", en: "Local visibility." },
        explanation: {
          fr: "Le scope local évite les collisions et les effets inattendus.",
          en: "Local scope avoids collisions and unexpected effects.",
        },
      },
      {
        id: "sw-programming-basics-q6",
        type: "multiple-choice",
        question: {
          fr: "Face à une erreur, la première étape utile est…",
          en: "Facing an error, a useful first step is…",
        },
        options: [
          {
            fr: "Lire le message (fichier, ligne, type)",
            en: "Read the message (file, line, type)",
          },
          {
            fr: "Réécrire tout le projet sans lire",
            en: "Rewrite the whole project unread",
          },
          {
            fr: "Désinstaller le système",
            en: "Uninstall the OS",
          },
          {
            fr: "Ignorer la stack trace",
            en: "Ignore the stack trace",
          },
        ],
        correctAnswer: {
          fr: "Lire le message (fichier, ligne, type)",
          en: "Read the message (file, line, type)",
        },
        hint: { fr: "Le compilateur/runtime te parle.", en: "The compiler/runtime is talking to you." },
        explanation: {
          fr: "Le message pointe souvent directement la cause ou le lieu du bug.",
          en: "The message often points straight at the cause or location of the bug.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice en bases de programmation. Tu expliques variables, types, conditions, boucles, fonctions et scope avec des exemples TypeScript simples. Réponds en français.",
        en: "You are Nova, a programming-basics tutor. You explain variables, types, conditionals, loops, functions, and scope with simple TypeScript examples. Answer in English.",
      },
      introMessage: {
        fr: "On revoit les briques du code. Quelle notion veux-tu clarifier ?",
        en: "We're reviewing the building blocks of code. Which concept should we clarify?",
      },
      topics: [
        { fr: "Variables et types", en: "Variables and types" },
        { fr: "Boucles et conditions", en: "Loops and conditionals" },
        { fr: "Fonctions et portée", en: "Functions and scope" },
      ],
    },
  },
  // ─── sw-oop-architecture ───────────────────────────────────────────
  {
    id: "sw-oop",
    unitId: "sw-oop-architecture",
    title: {
      fr: "Programmation orientée objet",
      en: "Object-oriented programming",
    },
    description: {
      fr: "Classes, objets, encapsulation, héritage et polymorphisme.",
      en: "Classes, objects, encapsulation, inheritance, and polymorphism.",
    },
    icon: "layers",
    estimatedMinutes: 18,
    xpReward: 24,
    goals: [
      {
        description: {
          fr: "Expliquer classe vs objet",
          en: "Explain class vs object",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Appliquer encapsulation et héritage",
          en: "Apply encapsulation and inheritance",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Reconnaître le polymorphisme",
          en: "Recognize polymorphism",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "sw-oop-s1",
        title: { fr: "Objets du monde réel", en: "Real-world objects" },
        body: {
          fr: "L'OOP modélise le domaine avec des objets qui regroupent données (état) et comportements (méthodes). Un utilisateur, une leçon ou un panier deviennent des concepts du code.",
          en: "OOP models the domain with objects that bundle data (state) and behaviors (methods). A user, a lesson, or a cart become concepts in code.",
        },
        analogy: {
          fr: "Une classe est le plan d'une maison ; un objet est une maison construite à partir de ce plan.",
          en: "A class is a house blueprint; an object is a house built from that blueprint.",
        },
      },
      {
        id: "sw-oop-s2",
        title: { fr: "Classe et instance", en: "Class and instance" },
        body: {
          fr: "La classe définit la structure ; l'instance (objet) détient des valeurs concrètes. Plusieurs instances partagent la même forme mais pas le même état.",
          en: "The class defines the structure; the instance (object) holds concrete values. Many instances share the same shape but not the same state.",
        },
        codeExample: {
          language: "typescript",
          code: `class User {\n  constructor(public name: string, public xp: number) {}\n  earn(points: number) {\n    this.xp += points;\n  }\n}\n\nconst alice = new User("Alice", 10);\nalice.earn(5);`,
        },
      },
      {
        id: "sw-oop-s3",
        title: { fr: "Encapsulation", en: "Encapsulation" },
        body: {
          fr: "On cache les détails internes et on expose une API claire. Les invariants (ex. XP ≥ 0) sont protégés par des méthodes plutôt que par un accès direct anarchique.",
          en: "Hide internal details and expose a clear API. Invariants (e.g. XP ≥ 0) are protected by methods rather than chaotic direct access.",
        },
        callout: {
          fr: "Clé : expose ce qui est nécessaire, pas tout l'état interne.",
          en: "Key: expose what is needed, not all internal state.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-oop-s4",
        title: { fr: "Héritage", en: "Inheritance" },
        body: {
          fr: "Une sous-classe hérite des membres d'une super-classe et peut les étendre. Utile pour partager un comportement commun, mais à utiliser avec parcimonie pour éviter des hiérarchies rigides.",
          en: "A subclass inherits members from a superclass and can extend them. Useful to share common behavior, but use sparingly to avoid rigid hierarchies.",
        },
        codeExample: {
          language: "typescript",
          code: `class Animal {\n  speak() { return "..."; }\n}\nclass Dog extends Animal {\n  speak() { return "woof"; }\n}`,
        },
        callout: {
          fr: "Attention : trop d'héritage crée un couplage fragile.",
          en: "Warning: too much inheritance creates fragile coupling.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-oop-s5",
        title: { fr: "Polymorphisme", en: "Polymorphism" },
        body: {
          fr: "Traiter des objets différents via une interface commune. Tu appelles `speak()` sans savoir si c'est un chien ou un chat — le comportement concret dépend de l'instance.",
          en: "Treat different objects through a shared interface. You call `speak()` without knowing dog or cat — concrete behavior depends on the instance.",
        },
        callout: {
          fr: "Astuce : programme contre une interface, pas une implémentation.",
          en: "Tip: program to an interface, not an implementation.",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-oop-s6",
        title: { fr: "Composition vs héritage", en: "Composition vs inheritance" },
        body: {
          fr: "Préfère souvent « a un » (composition) à « est un » (héritage). Composer de petits objets donne plus de flexibilité qu'une grande arborescence de classes.",
          en: "Often prefer \"has a\" (composition) over \"is a\" (inheritance). Composing small objects is more flexible than a large class tree.",
        },
        callout: {
          fr: "Erreur : hériter juste pour réutiliser deux lignes de code.",
          en: "Mistake: inheriting just to reuse two lines of code.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-oop-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Modélise une leçon avec titre et durée.",
          en: "Model a lesson with title and duration.",
        },
        miniExercise: {
          prompt: {
            fr: "Esquisse une classe `Lesson` avec `title`, `minutes` et une méthode `isShort()` (≤ 15 min).",
            en: "Sketch a `Lesson` class with `title`, `minutes`, and an `isShort()` method (≤ 15 min).",
          },
          hint: {
            fr: "Encapsule la règle dans la méthode.",
            en: "Encapsulate the rule inside the method.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Classe", en: "Class" },
        definition: {
          fr: "Modèle définissant état et comportements d'objets.",
          en: "Blueprint defining object state and behaviors.",
        },
      },
      {
        term: { fr: "Objet", en: "Object" },
        definition: {
          fr: "Instance concrète d'une classe.",
          en: "Concrete instance of a class.",
        },
      },
      {
        term: { fr: "Encapsulation", en: "Encapsulation" },
        definition: {
          fr: "Masquer l'interne et exposer une API contrôlée.",
          en: "Hide internals and expose a controlled API.",
        },
      },
      {
        term: { fr: "Héritage", en: "Inheritance" },
        definition: {
          fr: "Réutilisation via une relation « est un » entre classes.",
          en: "Reuse via an \"is a\" relationship between classes.",
        },
      },
      {
        term: { fr: "Polymorphisme", en: "Polymorphism" },
        definition: {
          fr: "Même interface, comportements différents selon l'instance.",
          en: "Same interface, different behaviors per instance.",
        },
      },
    ],
    activities: [
      {
        id: "sw-oop-q1",
        type: "multiple-choice",
        question: { fr: "Une classe est…", en: "A class is…" },
        options: [
          { fr: "Un modèle / plan pour créer des objets", en: "A blueprint for creating objects" },
          { fr: "Uniquement un fichier CSS", en: "Only a CSS file" },
          { fr: "Un serveur DNS", en: "A DNS server" },
          { fr: "Une adresse IP", en: "An IP address" },
        ],
        correctAnswer: {
          fr: "Un modèle / plan pour créer des objets",
          en: "A blueprint for creating objects",
        },
        hint: { fr: "Plan vs maison construite.", en: "Blueprint vs built house." },
        explanation: {
          fr: "La classe décrit la forme ; les objets sont les instances vivantes.",
          en: "The class describes the shape; objects are the living instances.",
        },
      },
      {
        id: "sw-oop-q2",
        type: "multiple-choice",
        question: { fr: "L'encapsulation vise à…", en: "Encapsulation aims to…" },
        options: [
          {
            fr: "Protéger l'état interne derrière une API claire",
            en: "Protect internal state behind a clear API",
          },
          { fr: "Rendre tous les champs publics partout", en: "Make every field public everywhere" },
          { fr: "Supprimer les méthodes", en: "Remove methods" },
          { fr: "Éviter les noms de variables", en: "Avoid variable names" },
        ],
        correctAnswer: {
          fr: "Protéger l'état interne derrière une API claire",
          en: "Protect internal state behind a clear API",
        },
        hint: { fr: "Contrôle d'accès aux détails.", en: "Access control to details." },
        explanation: {
          fr: "On limite qui peut modifier quoi pour préserver les invariants.",
          en: "We limit who can change what to preserve invariants.",
        },
      },
      {
        id: "sw-oop-q3",
        type: "multiple-choice",
        question: { fr: "Le polymorphisme permet de…", en: "Polymorphism allows you to…" },
        options: [
          {
            fr: "Appeler la même méthode sur des types différents",
            en: "Call the same method on different types",
          },
          { fr: "Compiler uniquement du HTML", en: "Compile only HTML" },
          { fr: "Remplacer Internet", en: "Replace the Internet" },
          { fr: "Éviter toute abstraction", en: "Avoid all abstraction" },
        ],
        correctAnswer: {
          fr: "Appeler la même méthode sur des types différents",
          en: "Call the same method on different types",
        },
        hint: { fr: "Interface commune.", en: "Shared interface." },
        explanation: {
          fr: "Une API commune, des implémentations différentes selon l'objet.",
          en: "One shared API, different implementations per object.",
        },
      },
      {
        id: "sw-oop-q4",
        type: "multiple-choice",
        question: { fr: "Composition signifie souvent…", en: "Composition often means…" },
        options: [
          { fr: "« A un » plutôt que « est un »", en: "\"Has a\" rather than \"is a\"" },
          { fr: "Copier-coller du code", en: "Copy-pasting code" },
          { fr: "Supprimer les classes", en: "Deleting classes" },
          { fr: "Ignorer les méthodes", en: "Ignoring methods" },
        ],
        correctAnswer: {
          fr: "« A un » plutôt que « est un »",
          en: "\"Has a\" rather than \"is a\"",
        },
        hint: { fr: "Assemblage d'objets.", en: "Assembling objects." },
        explanation: {
          fr: "On combine des collaborateurs plutôt que d'empiler l'héritage.",
          en: "We combine collaborators rather than stacking inheritance.",
        },
      },
      {
        id: "sw-oop-q5",
        type: "multiple-choice",
        question: {
          fr: "Pourquoi limiter l'héritage profond ?",
          en: "Why limit deep inheritance?",
        },
        options: [
          {
            fr: "Il crée un couplage fragile et difficile à faire évoluer",
            en: "It creates fragile coupling that is hard to evolve",
          },
          { fr: "Parce que les objets n'existent pas", en: "Because objects do not exist" },
          {
            fr: "Parce que TypeScript l'interdit toujours",
            en: "Because TypeScript always forbids it",
          },
          { fr: "Pour ralentir le CPU volontairement", en: "To intentionally slow the CPU" },
        ],
        correctAnswer: {
          fr: "Il crée un couplage fragile et difficile à faire évoluer",
          en: "It creates fragile coupling that is hard to evolve",
        },
        hint: {
          fr: "Changements qui cassent les sous-classes.",
          en: "Changes that break subclasses.",
        },
        explanation: {
          fr: "Une modification haute dans la hiérarchie impacte beaucoup de descendants.",
          en: "A high-level change impacts many descendants.",
        },
      },
      {
        id: "sw-oop-q6",
        type: "multiple-choice",
        question: { fr: "`new User(...)` crée…", en: "`new User(...)` creates…" },
        options: [
          { fr: "Une instance (objet)", en: "An instance (object)" },
          { fr: "Une base SQL", en: "A SQL database" },
          { fr: "Un certificat TLS", en: "A TLS certificate" },
          { fr: "Un routeur", en: "A router" },
        ],
        correctAnswer: { fr: "Une instance (objet)", en: "An instance (object)" },
        hint: { fr: "Instanciation.", en: "Instantiation." },
        explanation: {
          fr: "`new` alloue un objet à partir de la classe.",
          en: "`new` allocates an object from the class.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice OOP. Tu expliques classes, encapsulation, héritage, polymorphisme et composition avec des exemples TypeScript. Réponds en français.",
        en: "You are Nova, an OOP tutor. You explain classes, encapsulation, inheritance, polymorphism, and composition with TypeScript examples. Answer in English.",
      },
      introMessage: {
        fr: "On parle objets ! Quelle idée OOP veux-tu démêler ?",
        en: "Let's talk objects! Which OOP idea should we untangle?",
      },
      topics: [
        { fr: "Classe vs objet", en: "Class vs object" },
        { fr: "Encapsulation", en: "Encapsulation" },
        { fr: "Composition vs héritage", en: "Composition vs inheritance" },
      ],
    },
  },
  {
    id: "sw-architecture",
    unitId: "sw-oop-architecture",
    title: { fr: "Architecture logicielle", en: "Software architecture" },
    description: {
      fr: "Séparer les couches, comprendre MVC et concevoir des systèmes évolutifs.",
      en: "Separate layers, understand MVC, and design systems that can evolve.",
    },
    icon: "network",
    estimatedMinutes: 19,
    xpReward: 25,
    goals: [
      {
        description: {
          fr: "Expliquer le rôle de l'architecture",
          en: "Explain the role of architecture",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Décrire MVC et la séparation des responsabilités",
          en: "Describe MVC and separation of concerns",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Identifier couplage et cohésion",
          en: "Identify coupling and cohesion",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "sw-architecture-s1",
        title: { fr: "Pourquoi l'architecture ?", en: "Why architecture?" },
        body: {
          fr: "L'architecture décide comment les pièces du système s'assemblent : qui parle à qui, où vit la logique métier, comment on évolue sans tout casser. Ce n'est pas de la décoration — c'est de la stratégie.",
          en: "Architecture decides how system pieces fit: who talks to whom, where business logic lives, how we evolve without breaking everything. It is not decoration — it is strategy.",
        },
        callout: {
          fr: "Clé : une bonne archi rend les changements locaux et prévisibles.",
          en: "Key: good architecture makes changes local and predictable.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-architecture-s2",
        title: { fr: "Séparation des responsabilités", en: "Separation of concerns" },
        body: {
          fr: "UI, règles métier et accès données ne devraient pas s'entremêler dans le même fichier. Chaque couche a un job : présenter, décider, persister.",
          en: "UI, business rules, and data access should not tangle in the same file. Each layer has a job: present, decide, persist.",
        },
        bullets: [
          { fr: "Présentation : affichage et interactions", en: "Presentation: display and interactions" },
          { fr: "Domaine : règles et décisions métier", en: "Domain: business rules and decisions" },
          { fr: "Infrastructure : DB, APIs, fichiers", en: "Infrastructure: DB, APIs, files" },
        ],
      },
      {
        id: "sw-architecture-s3",
        title: { fr: "MVC en un coup d'œil", en: "MVC at a glance" },
        body: {
          fr: "Model (données/état), View (affichage), Controller (orchestration des entrées). Le pattern clarifie qui met à jour quoi quand l'utilisateur agit.",
          en: "Model (data/state), View (display), Controller (input orchestration). The pattern clarifies who updates what when the user acts.",
        },
        diagram: "mvc-architecture",
        analogy: {
          fr: "Restaurant : la carte (View), la cuisine (Model), le serveur qui prend la commande (Controller).",
          en: "Restaurant: the menu (View), the kitchen (Model), the waiter taking the order (Controller).",
        },
      },
      {
        id: "sw-architecture-s4",
        title: { fr: "Couplage et cohésion", en: "Coupling and cohesion" },
        body: {
          fr: "Faible couplage = modules peu dépendants. Forte cohésion = un module fait une chose liée. Vise les deux : des boîtes claires qui se parlent peu.",
          en: "Low coupling = modules barely depend on each other. High cohesion = a module does one related thing. Aim for both: clear boxes that talk little.",
        },
        callout: {
          fr: "Attention : un « utilitaire fourre-tout » a une faible cohésion.",
          en: "Warning: a catch-all \"utils\" dump has low cohesion.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-architecture-s5",
        title: { fr: "Dépendances vers l'intérieur", en: "Dependencies point inward" },
        body: {
          fr: "Le domaine ne devrait pas importer la UI ni la base. Les détails (frameworks, SQL) dépendent du cœur métier, pas l'inverse. C'est l'idée derrière clean / hexagonal architecture.",
          en: "The domain should not import UI or the database. Details (frameworks, SQL) depend on the business core, not the reverse. That is the idea behind clean / hexagonal architecture.",
        },
        codeExample: {
          language: "typescript",
          code: `// Domaine : pas d'import React ni SQL\nexport function canUnlock(xp: number, required: number): boolean {\n  return xp >= required;\n}`,
          caption: {
            fr: "Règle pure, testable sans UI ni DB.",
            en: "Pure rule, testable without UI or DB.",
          },
        },
      },
      {
        id: "sw-architecture-s6",
        title: { fr: "Monolithe vs services", en: "Monolith vs services" },
        body: {
          fr: "Un monolithe bien découpé reste souvent le meilleur départ. Les microservices ajoutent réseau, ops et complexité — utiles à l'échelle, coûteux trop tôt.",
          en: "A well-modularized monolith is often the best start. Microservices add network, ops, and complexity — useful at scale, costly too early.",
        },
        callout: {
          fr: "Erreur : découper en 20 services avant d'avoir un produit clair.",
          en: "Mistake: splitting into 20 services before you have a clear product.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-architecture-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Place les responsabilités dans MVC.",
          en: "Place responsibilities into MVC.",
        },
        miniExercise: {
          prompt: {
            fr: "Où mettrais-tu : (1) le calcul d'XP, (2) le bouton « Continuer », (3) le handler du clic ?",
            en: "Where would you put: (1) XP calculation, (2) the \"Continue\" button, (3) the click handler?",
          },
          hint: {
            fr: "Model / View / Controller.",
            en: "Model / View / Controller.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Architecture", en: "Architecture" },
        definition: {
          fr: "Organisation des composants et de leurs interactions.",
          en: "Organization of components and their interactions.",
        },
      },
      {
        term: { fr: "MVC", en: "MVC" },
        definition: {
          fr: "Pattern Model–View–Controller pour séparer UI et logique.",
          en: "Model–View–Controller pattern separating UI and logic.",
        },
      },
      {
        term: { fr: "Couplage", en: "Coupling" },
        definition: {
          fr: "Degré de dépendance entre modules.",
          en: "Degree of dependency between modules.",
        },
      },
      {
        term: { fr: "Cohésion", en: "Cohesion" },
        definition: {
          fr: "Degré auquel un module regroupe des responsabilités liées.",
          en: "How closely a module's responsibilities belong together.",
        },
      },
      {
        term: { fr: "Couche", en: "Layer" },
        definition: {
          fr: "Niveau d'abstraction (UI, domaine, infra…) avec un rôle clair.",
          en: "Abstraction level (UI, domain, infra…) with a clear role.",
        },
      },
    ],
    activities: [
      {
        id: "sw-architecture-q1",
        type: "multiple-choice",
        question: {
          fr: "L'architecture sert surtout à…",
          en: "Architecture mainly helps…",
        },
        options: [
          {
            fr: "Organiser le système pour évoluer sans tout casser",
            en: "Organize the system to evolve without breaking everything",
          },
          { fr: "Choisir la couleur du logo", en: "Choose the logo color" },
          { fr: "Remplacer les tests", en: "Replace tests" },
          { fr: "Éviter Git", en: "Avoid Git" },
        ],
        correctAnswer: {
          fr: "Organiser le système pour évoluer sans tout casser",
          en: "Organize the system to evolve without breaking everything",
        },
        hint: { fr: "Structure et évolution.", en: "Structure and evolution." },
        explanation: {
          fr: "Une bonne structure localise les changements et clarifie les responsabilités.",
          en: "Good structure localizes change and clarifies responsibilities.",
        },
      },
      {
        id: "sw-architecture-q2",
        type: "multiple-choice",
        question: { fr: "Dans MVC, la View…", en: "In MVC, the View…" },
        options: [
          { fr: "Affiche l'état à l'utilisateur", en: "Displays state to the user" },
          { fr: "Stocke la base SQL seule", en: "Stores the SQL database alone" },
          { fr: "Remplace le réseau", en: "Replaces the network" },
          { fr: "Compile le kernel", en: "Compiles the kernel" },
        ],
        correctAnswer: {
          fr: "Affiche l'état à l'utilisateur",
          en: "Displays state to the user",
        },
        hint: { fr: "Ce que voit l'utilisateur.", en: "What the user sees." },
        explanation: {
          fr: "La View présente ; le Model détient l'état ; le Controller orchestre.",
          en: "The View presents; the Model holds state; the Controller orchestrates.",
        },
      },
      {
        id: "sw-architecture-q3",
        type: "multiple-choice",
        question: {
          fr: "Faible couplage signifie…",
          en: "Low coupling means…",
        },
        options: [
          {
            fr: "Les modules dépendent peu les uns des autres",
            en: "Modules depend little on each other",
          },
          { fr: "Tout est dans un seul fichier", en: "Everything is in one file" },
          { fr: "Aucune fonction n'a de nom", en: "No function has a name" },
          { fr: "On ignore les interfaces", en: "We ignore interfaces" },
        ],
        correctAnswer: {
          fr: "Les modules dépendent peu les uns des autres",
          en: "Modules depend little on each other",
        },
        hint: { fr: "Indépendance relative.", en: "Relative independence." },
        explanation: {
          fr: "Moins de dépendances = changements plus locaux.",
          en: "Fewer dependencies = more local changes.",
        },
      },
      {
        id: "sw-architecture-q4",
        type: "multiple-choice",
        question: {
          fr: "Idéalement, le domaine métier…",
          en: "Ideally, the business domain…",
        },
        options: [
          {
            fr: "Ne dépend pas de la UI ni de la DB",
            en: "Does not depend on UI or the DB",
          },
          { fr: "Importe toujours React", en: "Always imports React" },
          { fr: "Contient le CSS global", en: "Contains global CSS" },
          { fr: "Remplace le DNS", en: "Replaces DNS" },
        ],
        correctAnswer: {
          fr: "Ne dépend pas de la UI ni de la DB",
          en: "Does not depend on UI or the DB",
        },
        hint: { fr: "Dépendances vers l'intérieur.", en: "Dependencies point inward." },
        explanation: {
          fr: "Le cœur métier reste testable et stable face aux détails techniques.",
          en: "The business core stays testable and stable against technical details.",
        },
      },
      {
        id: "sw-architecture-q5",
        type: "multiple-choice",
        question: {
          fr: "Quand choisir les microservices trop tôt ?",
          en: "When is choosing microservices too early?",
        },
        options: [
          {
            fr: "Avant d'avoir un produit et des frontières claires",
            en: "Before you have a clear product and boundaries",
          },
          { fr: "Jamais trop tôt, toujours", en: "Never too early, always" },
          { fr: "Uniquement si on a un seul fichier", en: "Only if you have one file" },
          { fr: "Quand on refuse Git", en: "When refusing Git" },
        ],
        correctAnswer: {
          fr: "Avant d'avoir un produit et des frontières claires",
          en: "Before you have a clear product and boundaries",
        },
        hint: { fr: "Complexité opérationnelle.", en: "Operational complexity." },
        explanation: {
          fr: "Sans frontières claires, les services multiplient le coût sans bénéfice.",
          en: "Without clear boundaries, services multiply cost without benefit.",
        },
      },
      {
        id: "sw-architecture-q6",
        type: "multiple-choice",
        question: {
          fr: "Une forte cohésion veut dire…",
          en: "High cohesion means…",
        },
        options: [
          {
            fr: "Les responsabilités du module vont bien ensemble",
            en: "The module's responsibilities belong together",
          },
          { fr: "Le module fait absolument tout", en: "The module does absolutely everything" },
          { fr: "Aucun nom n'est clair", en: "No name is clear" },
          { fr: "On mélange UI et SQL partout", en: "We mix UI and SQL everywhere" },
        ],
        correctAnswer: {
          fr: "Les responsabilités du module vont bien ensemble",
          en: "The module's responsibilities belong together",
        },
        hint: { fr: "Focus thématique.", en: "Thematic focus." },
        explanation: {
          fr: "Un module cohésif a une raison claire d'exister.",
          en: "A cohesive module has a clear reason to exist.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice en architecture logicielle. Tu expliques couches, MVC, couplage/cohésion et monolithe vs services. Réponds en français avec des analogies simples.",
        en: "You are Nova, a software architecture tutor. You explain layers, MVC, coupling/cohesion, and monolith vs services. Answer in English with simple analogies.",
      },
      introMessage: {
        fr: "On structure le système. Quelle pièce d'architecture te pose question ?",
        en: "Let's structure the system. Which architecture piece puzzles you?",
      },
      topics: [
        { fr: "MVC et couches", en: "MVC and layers" },
        { fr: "Couplage / cohésion", en: "Coupling / cohesion" },
        { fr: "Monolithe vs microservices", en: "Monolith vs microservices" },
      ],
    },
  },
  {
    id: "sw-solid",
    unitId: "sw-oop-architecture",
    title: { fr: "Principes SOLID", en: "SOLID principles" },
    description: {
      fr: "Cinq principes pour un code orienté objet plus souple et maintenable.",
      en: "Five principles for more flexible, maintainable object-oriented code.",
    },
    icon: "award",
    estimatedMinutes: 20,
    xpReward: 26,
    goals: [
      {
        description: {
          fr: "Nommer les cinq lettres de SOLID",
          en: "Name the five letters of SOLID",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Appliquer SRP et OCP sur un exemple",
          en: "Apply SRP and OCP on an example",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Relier DIP à l'injection de dépendances",
          en: "Relate DIP to dependency injection",
        },
        xpReward: 9,
      },
    ],
    sections: [
      {
        id: "sw-solid-s1",
        title: { fr: "SOLID en panorama", en: "SOLID overview" },
        body: {
          fr: "SOLID regroupe cinq principes : Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion. Ensemble, ils réduisent la rigidité et la fragilité du code.",
          en: "SOLID groups five principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion. Together they reduce rigidity and fragility.",
        },
        diagram: "solid-overview",
      },
      {
        id: "sw-solid-s2",
        title: { fr: "S — Single Responsibility", en: "S — Single Responsibility" },
        body: {
          fr: "Une classe / module devrait avoir une seule raison de changer. Si tu modifies l'export PDF et la validation métier dans le même fichier pour des motifs sans lien, SRP est violé.",
          en: "A class / module should have one reason to change. If you edit PDF export and business validation in the same file for unrelated reasons, SRP is violated.",
        },
        callout: {
          fr: "Clé : une responsabilité = une raison de changer.",
          en: "Key: one responsibility = one reason to change.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-solid-s3",
        title: { fr: "O — Open/Closed", en: "O — Open/Closed" },
        body: {
          fr: "Ouvert à l'extension, fermé à la modification : ajoute un comportement via de nouvelles classes/stratégies plutôt qu'en éditant sans cesse un gros `switch`.",
          en: "Open for extension, closed for modification: add behavior via new classes/strategies rather than endlessly editing a big `switch`.",
        },
        codeExample: {
          language: "typescript",
          code: `interface Notifier {\n  send(msg: string): void;\n}\nclass EmailNotifier implements Notifier {\n  send(msg: string) { /* email */ }\n}\nclass PushNotifier implements Notifier {\n  send(msg: string) { /* push */ }\n}`,
        },
        callout: {
          fr: "Astuce : les stratégies et plugins incarnent souvent OCP.",
          en: "Tip: strategies and plugins often embody OCP.",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-solid-s4",
        title: { fr: "L — Liskov Substitution", en: "L — Liskov Substitution" },
        body: {
          fr: "Une sous-classe doit pouvoir remplacer sa base sans casser les attentes. Si `Bird.fly()` et `Penguin` hérite mais ne peut pas voler, le contrat est brisé.",
          en: "A subclass must replace its base without breaking expectations. If `Bird.fly()` and `Penguin` inherits but cannot fly, the contract is broken.",
        },
        callout: {
          fr: "Attention : l'héritage « pratique » peut violer LSP.",
          en: "Warning: \"convenient\" inheritance can violate LSP.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-solid-s5",
        title: { fr: "I & D — ISP et DIP", en: "I & D — ISP and DIP" },
        body: {
          fr: "ISP : préfère des interfaces petites aux « god interfaces ». DIP : dépends d'abstractions, pas de détails concrets — d'où l'injection de dépendances.",
          en: "ISP: prefer small interfaces over god interfaces. DIP: depend on abstractions, not concrete details — hence dependency injection.",
        },
        codeExample: {
          language: "typescript",
          code: `function saveLesson(\n  lesson: Lesson,\n  repo: LessonRepository // abstraction, pas PostgresLessonRepo\n) {\n  repo.save(lesson);\n}`,
        },
      },
      {
        id: "sw-solid-s6",
        title: { fr: "SOLID sans dogmatisme", en: "SOLID without dogma" },
        body: {
          fr: "SOLID guide, il ne dicte pas. Sur un script de 30 lignes, sur-abstraire est pire. Applique les principes là où la douleur (changements risqués) apparaît.",
          en: "SOLID guides; it does not dictate. On a 30-line script, over-abstracting is worse. Apply principles where pain (risky changes) appears.",
        },
        callout: {
          fr: "Erreur : créer 15 interfaces pour une app jetable.",
          en: "Mistake: creating 15 interfaces for a throwaway app.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-solid-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Repère une violation SRP.",
          en: "Spot an SRP violation.",
        },
        miniExercise: {
          prompt: {
            fr: "Une classe `User` valide l'email, envoie des mails et écrit en SQL. Quelle scission proposer ?",
            en: "A `User` class validates email, sends mail, and writes SQL. What split would you propose?",
          },
          hint: {
            fr: "Sépare validation, notification, persistence.",
            en: "Split validation, notification, persistence.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "SRP", en: "SRP" },
        definition: {
          fr: "Single Responsibility : une raison de changer.",
          en: "Single Responsibility: one reason to change.",
        },
      },
      {
        term: { fr: "OCP", en: "OCP" },
        definition: {
          fr: "Open/Closed : extensible sans modifier le code existant.",
          en: "Open/Closed: extensible without changing existing code.",
        },
      },
      {
        term: { fr: "LSP", en: "LSP" },
        definition: {
          fr: "Liskov : les sous-types respectent le contrat du type de base.",
          en: "Liskov: subtypes honor the base type's contract.",
        },
      },
      {
        term: { fr: "ISP", en: "ISP" },
        definition: {
          fr: "Interface Segregation : interfaces petites et ciblées.",
          en: "Interface Segregation: small, focused interfaces.",
        },
      },
      {
        term: { fr: "DIP", en: "DIP" },
        definition: {
          fr: "Dependency Inversion : dépendre d'abstractions.",
          en: "Dependency Inversion: depend on abstractions.",
        },
      },
    ],
    activities: [
      {
        id: "sw-solid-q1",
        type: "multiple-choice",
        question: { fr: "SRP signifie…", en: "SRP means…" },
        options: [
          {
            fr: "Une seule raison de changer pour un module",
            en: "One reason to change for a module",
          },
          { fr: "Un seul langage autorisé", en: "Only one language allowed" },
          { fr: "Une seule base de données mondiale", en: "One worldwide database" },
          { fr: "Supprimer les tests", en: "Delete tests" },
        ],
        correctAnswer: {
          fr: "Une seule raison de changer pour un module",
          en: "One reason to change for a module",
        },
        hint: { fr: "Single Responsibility.", en: "Single Responsibility." },
        explanation: {
          fr: "Moins de raisons de changer = moins d'effets de bord.",
          en: "Fewer reasons to change = fewer side effects.",
        },
      },
      {
        id: "sw-solid-q2",
        type: "multiple-choice",
        question: { fr: "OCP encourage à…", en: "OCP encourages you to…" },
        options: [
          {
            fr: "Étendre le comportement sans modifier le code stable",
            en: "Extend behavior without modifying stable code",
          },
          { fr: "Tout réécrire chaque semaine", en: "Rewrite everything weekly" },
          { fr: "Interdire les interfaces", en: "Forbid interfaces" },
          { fr: "Mélanger UI et SQL", en: "Mix UI and SQL" },
        ],
        correctAnswer: {
          fr: "Étendre le comportement sans modifier le code stable",
          en: "Extend behavior without modifying stable code",
        },
        hint: { fr: "Ouvert / fermé.", en: "Open / closed." },
        explanation: {
          fr: "On ajoute des variantes plutôt que d'éditer sans cesse le noyau.",
          en: "You add variants rather than endlessly editing the core.",
        },
      },
      {
        id: "sw-solid-q3",
        type: "multiple-choice",
        question: { fr: "LSP est violé si…", en: "LSP is violated if…" },
        options: [
          {
            fr: "Une sous-classe casse les attentes du type de base",
            en: "A subclass breaks base-type expectations",
          },
          { fr: "On nomme bien les méthodes", en: "We name methods well" },
          { fr: "On écrit des tests", en: "We write tests" },
          { fr: "On documente l'API", en: "We document the API" },
        ],
        correctAnswer: {
          fr: "Une sous-classe casse les attentes du type de base",
          en: "A subclass breaks base-type expectations",
        },
        hint: { fr: "Contrat de substitution.", en: "Substitution contract." },
        explanation: {
          fr: "Les clients du type de base doivent pouvoir utiliser le sous-type sans surprise.",
          en: "Base-type clients must be able to use the subtype without surprises.",
        },
      },
      {
        id: "sw-solid-q4",
        type: "multiple-choice",
        question: { fr: "ISP conseille…", en: "ISP advises…" },
        options: [
          {
            fr: "Des interfaces petites plutôt qu'une interface fourre-tout",
            en: "Small interfaces rather than a catch-all interface",
          },
          { fr: "Une seule interface géante", en: "One giant interface" },
          { fr: "Zéro abstraction", en: "Zero abstraction" },
          { fr: "D'ignorer les clients", en: "Ignoring clients" },
        ],
        correctAnswer: {
          fr: "Des interfaces petites plutôt qu'une interface fourre-tout",
          en: "Small interfaces rather than a catch-all interface",
        },
        hint: { fr: "Segregation.", en: "Segregation." },
        explanation: {
          fr: "Les clients ne devraient pas dépendre de méthodes inutiles.",
          en: "Clients should not depend on methods they do not use.",
        },
      },
      {
        id: "sw-solid-q5",
        type: "multiple-choice",
        question: { fr: "DIP pousse à…", en: "DIP pushes you to…" },
        options: [
          {
            fr: "Dépendre d'abstractions, pas de détails concrets",
            en: "Depend on abstractions, not concrete details",
          },
          { fr: "Hardcoder Postgres partout", en: "Hardcode Postgres everywhere" },
          { fr: "Importer l'UI dans le domaine", en: "Import UI into the domain" },
          { fr: "Supprimer les constructeurs", en: "Remove constructors" },
        ],
        correctAnswer: {
          fr: "Dépendre d'abstractions, pas de détails concrets",
          en: "Depend on abstractions, not concrete details",
        },
        hint: { fr: "Inversion des dépendances.", en: "Dependency inversion." },
        explanation: {
          fr: "Les détails (DB, HTTP) s'adaptent au métier via des interfaces.",
          en: "Details (DB, HTTP) adapt to the domain via interfaces.",
        },
      },
      {
        id: "sw-solid-q6",
        type: "multiple-choice",
        question: {
          fr: "Quand SOLID devient contre-productif ?",
          en: "When does SOLID become counterproductive?",
        },
        options: [
          {
            fr: "Quand on sur-abstrait un petit script simple",
            en: "When you over-abstract a small simple script",
          },
          { fr: "Quand le code change souvent pour de vrai", en: "When code truly changes often" },
          { fr: "Quand plusieurs équipes touchent le module", en: "When many teams touch the module" },
          { fr: "Quand les bugs se multiplient", en: "When bugs multiply" },
        ],
        correctAnswer: {
          fr: "Quand on sur-abstrait un petit script simple",
          en: "When you over-abstract a small simple script",
        },
        hint: { fr: "Proportionnalité.", en: "Proportionality." },
        explanation: {
          fr: "Les principes soignent la douleur de changement, pas la vanité d'abstraction.",
          en: "Principles cure change pain, not abstraction vanity.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice SOLID. Tu expliques SRP, OCP, LSP, ISP, DIP avec des exemples concrets et sans dogmatisme. Réponds en français.",
        en: "You are Nova, a SOLID tutor. You explain SRP, OCP, LSP, ISP, DIP with concrete examples and without dogma. Answer in English.",
      },
      introMessage: {
        fr: "SOLID, lettre par lettre. Laquelle veux-tu clarifier ?",
        en: "SOLID, letter by letter. Which one should we clarify?",
      },
      topics: [
        { fr: "SRP et OCP", en: "SRP and OCP" },
        { fr: "LSP et héritage", en: "LSP and inheritance" },
        { fr: "DIP et injection", en: "DIP and injection" },
      ],
    },
  },
  {
    id: "sw-design-patterns-clean",
    unitId: "sw-oop-architecture",
    title: {
      fr: "Design patterns & clean code",
      en: "Design patterns & clean code",
    },
    description: {
      fr: "Repérer des patterns utiles et écrire du code clair, nommable et testable.",
      en: "Spot useful patterns and write clear, namable, testable code.",
    },
    icon: "sparkles",
    estimatedMinutes: 19,
    xpReward: 25,
    goals: [
      {
        description: {
          fr: "Reconnaître Strategy, Factory et Observer",
          en: "Recognize Strategy, Factory, and Observer",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Appliquer des règles de clean code",
          en: "Apply clean-code rules",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Éviter les anti-patterns courants",
          en: "Avoid common anti-patterns",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "sw-design-patterns-clean-s1",
        title: { fr: "Qu'est-ce qu'un pattern ?", en: "What is a pattern?" },
        body: {
          fr: "Un design pattern est une solution éprouvée à un problème récurrent, avec un nom partagé. Ce n'est pas une bibliothèque : c'est un vocabulaire pour concevoir.",
          en: "A design pattern is a proven solution to a recurring problem, with a shared name. It is not a library: it is vocabulary for design.",
        },
        analogy: {
          fr: "Comme des recettes de cuisine nommées : « sauce tomate » dit beaucoup en deux mots.",
          en: "Like named cooking recipes: \"tomato sauce\" says a lot in two words.",
        },
      },
      {
        id: "sw-design-patterns-clean-s2",
        title: { fr: "Strategy", en: "Strategy" },
        body: {
          fr: "Encapsule des algorithmes interchangeables derrière une interface. Idéal pour tri, pricing, ou notifications sans `if` géants.",
          en: "Encapsulate interchangeable algorithms behind an interface. Ideal for sorting, pricing, or notifications without giant `if`s.",
        },
        codeExample: {
          language: "typescript",
          code: `type Pricing = (price: number) => number;\nconst student: Pricing = (p) => p * 0.8;\nconst regular: Pricing = (p) => p;\nfunction checkout(price: number, pricing: Pricing) {\n  return pricing(price);\n}`,
        },
      },
      {
        id: "sw-design-patterns-clean-s3",
        title: { fr: "Factory & Observer", en: "Factory & Observer" },
        body: {
          fr: "Factory : centralise la création d'objets. Observer : notifier plusieurs écouteurs quand un événement arrive (UI, logs, analytics).",
          en: "Factory: centralize object creation. Observer: notify many listeners when an event happens (UI, logs, analytics).",
        },
        bullets: [
          { fr: "Factory : `createUser(role)` plutôt que `new` dispersés", en: "Factory: `createUser(role)` instead of scattered `new`" },
          { fr: "Observer : pub/sub, EventEmitter, stores", en: "Observer: pub/sub, EventEmitter, stores" },
        ],
        callout: {
          fr: "Astuce : nomme le pattern seulement s'il clarifie vraiment.",
          en: "Tip: name the pattern only if it truly clarifies.",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-design-patterns-clean-s4",
        title: { fr: "Clean code : noms et taille", en: "Clean code: names and size" },
        body: {
          fr: "Des noms qui révèlent l'intention valent mieux que des commentaires. Fonctions courtes, arguments peu nombreux, un niveau d'abstraction par fonction.",
          en: "Names that reveal intent beat comments. Short functions, few arguments, one abstraction level per function.",
        },
        callout: {
          fr: "Clé : si tu ne peux pas nommer clairement, le design est flou.",
          en: "Key: if you cannot name it clearly, the design is fuzzy.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-design-patterns-clean-s5",
        title: { fr: "Couches propres", en: "Clean layers" },
        body: {
          fr: "Clean Architecture place le domaine au centre. Les frameworks sont des détails. Les use cases orchestrent sans connaître React ou Express.",
          en: "Clean Architecture puts the domain at the center. Frameworks are details. Use cases orchestrate without knowing React or Express.",
        },
        diagram: "mvc-architecture",
      },
      {
        id: "sw-design-patterns-clean-s6",
        title: { fr: "Anti-patterns à fuir", en: "Anti-patterns to avoid" },
        body: {
          fr: "God object, copier-coller, magie implicite, booléens qui changent tout le comportement… Les patterns ne sauvent pas un design confus.",
          en: "God object, copy-paste, implicit magic, booleans that change all behavior… Patterns do not save a confused design.",
        },
        callout: {
          fr: "Erreur : forcer un pattern partout « pour faire pro ».",
          en: "Mistake: forcing a pattern everywhere \"to look pro\".",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-design-patterns-clean-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Choisis un pattern pour un cas concret.",
          en: "Pick a pattern for a concrete case.",
        },
        miniExercise: {
          prompt: {
            fr: "Tu as 3 façons de calculer des frais de livraison. Quel pattern et pourquoi ?",
            en: "You have 3 ways to compute shipping fees. Which pattern and why?",
          },
          hint: {
            fr: "Algorithmes interchangeables…",
            en: "Interchangeable algorithms…",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Design pattern", en: "Design pattern" },
        definition: {
          fr: "Solution nommée à un problème de conception récurrent.",
          en: "Named solution to a recurring design problem.",
        },
      },
      {
        term: { fr: "Strategy", en: "Strategy" },
        definition: {
          fr: "Pattern d'algorithmes interchangeables derrière une interface.",
          en: "Pattern of interchangeable algorithms behind an interface.",
        },
      },
      {
        term: { fr: "Factory", en: "Factory" },
        definition: {
          fr: "Pattern qui centralise la création d'objets.",
          en: "Pattern that centralizes object creation.",
        },
      },
      {
        term: { fr: "Observer", en: "Observer" },
        definition: {
          fr: "Pattern de notification d'écouteurs sur un événement.",
          en: "Pattern notifying listeners about an event.",
        },
      },
      {
        term: { fr: "Clean code", en: "Clean code" },
        definition: {
          fr: "Code lisible, intentionnel, simple à faire évoluer.",
          en: "Readable, intentional code that is easy to evolve.",
        },
      },
    ],
    activities: [
      {
        id: "sw-design-patterns-clean-q1",
        type: "multiple-choice",
        question: {
          fr: "Un design pattern est…",
          en: "A design pattern is…",
        },
        options: [
          {
            fr: "Une solution de conception réutilisable et nommée",
            en: "A reusable, named design solution",
          },
          { fr: "Un langage de programmation", en: "A programming language" },
          { fr: "Un serveur cloud obligatoire", en: "A mandatory cloud server" },
          { fr: "Un antivirus", en: "An antivirus" },
        ],
        correctAnswer: {
          fr: "Une solution de conception réutilisable et nommée",
          en: "A reusable, named design solution",
        },
        hint: { fr: "Vocabulaire de design.", en: "Design vocabulary." },
        explanation: {
          fr: "Les patterns nomment des solutions pour mieux communiquer.",
          en: "Patterns name solutions so teams communicate better.",
        },
      },
      {
        id: "sw-design-patterns-clean-q2",
        type: "multiple-choice",
        question: { fr: "Strategy sert surtout à…", en: "Strategy is mainly for…" },
        options: [
          {
            fr: "Interchanger des algorithmes sans gros switch",
            en: "Swapping algorithms without a huge switch",
          },
          { fr: "Styler le CSS", en: "Styling CSS" },
          { fr: "Configurer le DNS", en: "Configuring DNS" },
          { fr: "Formater le disque", en: "Formatting the disk" },
        ],
        correctAnswer: {
          fr: "Interchanger des algorithmes sans gros switch",
          en: "Swapping algorithms without a huge switch",
        },
        hint: { fr: "Comportements plugables.", en: "Pluggable behaviors." },
        explanation: {
          fr: "Chaque stratégie encapsule une variante derrière la même API.",
          en: "Each strategy encapsulates a variant behind the same API.",
        },
      },
      {
        id: "sw-design-patterns-clean-q3",
        type: "multiple-choice",
        question: { fr: "Observer est utile pour…", en: "Observer is useful for…" },
        options: [
          {
            fr: "Notifier plusieurs écouteurs d'un événement",
            en: "Notifying many listeners of an event",
          },
          { fr: "Remplacer la mémoire RAM", en: "Replacing RAM" },
          { fr: "Compiler le kernel", en: "Compiling the kernel" },
          { fr: "Éviter toute abstraction", en: "Avoiding all abstraction" },
        ],
        correctAnswer: {
          fr: "Notifier plusieurs écouteurs d'un événement",
          en: "Notifying many listeners of an event",
        },
        hint: { fr: "Pub / sub.", en: "Pub / sub." },
        explanation: {
          fr: "Un sujet publie ; les observateurs réagissent indépendamment.",
          en: "A subject publishes; observers react independently.",
        },
      },
      {
        id: "sw-design-patterns-clean-q4",
        type: "multiple-choice",
        question: {
          fr: "Un bon nom de fonction devrait…",
          en: "A good function name should…",
        },
        options: [
          {
            fr: "Révéler l'intention sans lire le corps",
            en: "Reveal intent without reading the body",
          },
          { fr: "Être une lettre unique toujours", en: "Always be a single letter" },
          { fr: "Mentir volontairement", en: "Lie on purpose" },
          { fr: "Inclure le mot « stuff »", en: "Include the word \"stuff\"" },
        ],
        correctAnswer: {
          fr: "Révéler l'intention sans lire le corps",
          en: "Reveal intent without reading the body",
        },
        hint: { fr: "Lisibilité.", en: "Readability." },
        explanation: {
          fr: "Des noms clairs réduisent le besoin de commentaires et d'exploration.",
          en: "Clear names reduce the need for comments and exploration.",
        },
      },
      {
        id: "sw-design-patterns-clean-q5",
        type: "multiple-choice",
        question: {
          fr: "Un god object est…",
          en: "A god object is…",
        },
        options: [
          {
            fr: "Une classe qui sait et fait trop de choses",
            en: "A class that knows and does too much",
          },
          { fr: "Une bonne pratique SOLID", en: "A good SOLID practice" },
          { fr: "Un diagramme réseau", en: "A network diagram" },
          { fr: "Un certificat TLS", en: "A TLS certificate" },
        ],
        correctAnswer: {
          fr: "Une classe qui sait et fait trop de choses",
          en: "A class that knows and does too much",
        },
        hint: { fr: "Anti-pattern de responsabilité.", en: "Responsibility anti-pattern." },
        explanation: {
          fr: "Trop de responsabilités = fragile et difficile à tester.",
          en: "Too many responsibilities = fragile and hard to test.",
        },
      },
      {
        id: "sw-design-patterns-clean-q6",
        type: "multiple-choice",
        question: {
          fr: "Dans Clean Architecture, les frameworks sont…",
          en: "In Clean Architecture, frameworks are…",
        },
        options: [
          {
            fr: "Des détails aux frontières, pas le cœur",
            en: "Details at the edges, not the core",
          },
          { fr: "Le centre absolu du domaine", en: "The absolute center of the domain" },
          { fr: "Interdits à jamais", en: "Forever forbidden" },
          { fr: "Remplacés par le hardware", en: "Replaced by hardware" },
        ],
        correctAnswer: {
          fr: "Des détails aux frontières, pas le cœur",
          en: "Details at the edges, not the core",
        },
        hint: { fr: "Domaine au centre.", en: "Domain at the center." },
        explanation: {
          fr: "On isole le métier des choix techniques remplaçables.",
          en: "We isolate business rules from replaceable technical choices.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice design patterns et clean code. Tu présentes Strategy, Factory, Observer et les règles de lisibilité sans forcer les patterns. Réponds en français.",
        en: "You are Nova, a design-patterns and clean-code tutor. You present Strategy, Factory, Observer and readability rules without forcing patterns. Answer in English.",
      },
      introMessage: {
        fr: "Patterns et clean code : dis-moi ton cas, on choisit ensemble.",
        en: "Patterns and clean code: tell me your case, we'll choose together.",
      },
      topics: [
        { fr: "Strategy / Factory / Observer", en: "Strategy / Factory / Observer" },
        { fr: "Nommage et fonctions courtes", en: "Naming and short functions" },
        { fr: "Anti-patterns", en: "Anti-patterns" },
      ],
    },
  },
  // ─── sw-engineering ────────────────────────────────────────────────
  {
    id: "sw-git-basics",
    unitId: "sw-engineering",
    title: { fr: "Bases de Git", en: "Git basics" },
    description: {
      fr: "Commits, branches, historique : versionner son code avec confiance.",
      en: "Commits, branches, history: version your code with confidence.",
    },
    icon: "locate",
    estimatedMinutes: 17,
    xpReward: 23,
    goals: [
      {
        description: {
          fr: "Expliquer dépôt, commit et branche",
          en: "Explain repository, commit, and branch",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Utiliser status, add, commit, log",
          en: "Use status, add, commit, log",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Créer et changer de branche",
          en: "Create and switch branches",
        },
        xpReward: 7,
      },
    ],
    sections: [
      {
        id: "sw-git-basics-s1",
        title: { fr: "Pourquoi Git ?", en: "Why Git?" },
        body: {
          fr: "Git enregistre l'historique des changements. Tu peux revenir en arrière, comparer des versions et collaborer sans écraser le travail des autres.",
          en: "Git records change history. You can go back, compare versions, and collaborate without overwriting others' work.",
        },
        analogy: {
          fr: "Comme une machine à remonter le temps pour ton projet, avec des photos horodatées (commits).",
          en: "Like a time machine for your project, with timestamped snapshots (commits).",
        },
      },
      {
        id: "sw-git-basics-s2",
        title: { fr: "Dépôt et zone de stage", en: "Repo and staging area" },
        body: {
          fr: "Le working directory contient tes fichiers. `git add` les prépare (stage). `git commit` fige un snapshot. `git status` montre où tu en es.",
          en: "The working directory holds your files. `git add` stages them. `git commit` freezes a snapshot. `git status` shows where you are.",
        },
        codeExample: {
          language: "bash",
          code: `git status\ngit add src/app.ts\ngit commit -m "feat: add lesson progress"`,
          caption: {
            fr: "Stage ciblé + message de commit clair.",
            en: "Targeted stage + clear commit message.",
          },
        },
      },
      {
        id: "sw-git-basics-s3",
        title: { fr: "Branches", en: "Branches" },
        body: {
          fr: "Une branche est une ligne d'historique parallèle. `main` reste stable ; tu développes sur `feature/...` puis tu fusionnes.",
          en: "A branch is a parallel history line. Keep `main` stable; develop on `feature/...` then merge.",
        },
        diagram: "git-branch",
        callout: {
          fr: "Clé : une branche = une intention (fix, feature, expérimentation).",
          en: "Key: one branch = one intent (fix, feature, experiment).",
        },
        calloutKind: "key",
      },
      {
        id: "sw-git-basics-s4",
        title: { fr: "Messages de commit", en: "Commit messages" },
        body: {
          fr: "Un bon message explique le pourquoi. Préfixe utile : `feat:`, `fix:`, `docs:`. Évite « update » ou « wip » comme seul message final.",
          en: "A good message explains the why. Useful prefixes: `feat:`, `fix:`, `docs:`. Avoid \"update\" or \"wip\" as the only final message.",
        },
        callout: {
          fr: "Astuce : écris le message comme une instruction à l'historique futur.",
          en: "Tip: write the message as an instruction to future history.",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-git-basics-s5",
        title: { fr: "log et diff", en: "log and diff" },
        body: {
          fr: "`git log` explore l'historique. `git diff` montre les changements non commités ou entre commits. Lis le diff avant de committer.",
          en: "`git log` explores history. `git diff` shows uncommitted changes or differences between commits. Read the diff before committing.",
        },
        bullets: [
          { fr: "`git log --oneline` pour un aperçu compact", en: "`git log --oneline` for a compact view" },
          { fr: "`git diff` avant le stage", en: "`git diff` before staging" },
          { fr: "`git diff --staged` après add", en: "`git diff --staged` after add" },
        ],
      },
      {
        id: "sw-git-basics-s6",
        title: { fr: "Erreurs fréquentes", en: "Common mistakes" },
        body: {
          fr: "Committer des secrets, des `node_modules`, ou un message vide complique la vie. Utilise `.gitignore` et relis le stage.",
          en: "Committing secrets, `node_modules`, or empty messages makes life harder. Use `.gitignore` and review the stage.",
        },
        callout: {
          fr: "Erreur : `git add .` aveugle puis commit sans lire le diff.",
          en: "Mistake: blind `git add .` then commit without reading the diff.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-git-basics-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Prépare un premier commit propre.",
          en: "Prepare a clean first commit.",
        },
        miniExercise: {
          prompt: {
            fr: "Tu as modifié `LessonPlayer.tsx` et créé un fichier `.env` avec une clé. Que stages-tu, et pourquoi ?",
            en: "You changed `LessonPlayer.tsx` and created a `.env` with a key. What do you stage, and why?",
          },
          hint: {
            fr: "Ne commit jamais de secrets.",
            en: "Never commit secrets.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Commit", en: "Commit" },
        definition: {
          fr: "Snapshot versionné du projet avec message.",
          en: "Versioned project snapshot with a message.",
        },
      },
      {
        term: { fr: "Branche", en: "Branch" },
        definition: {
          fr: "Ligne d'historique indépendante pour isoler un travail.",
          en: "Independent history line to isolate work.",
        },
      },
      {
        term: { fr: "Stage", en: "Stage" },
        definition: {
          fr: "Zone de préparation des fichiers avant commit.",
          en: "Preparation area for files before commit.",
        },
      },
      {
        term: { fr: "Dépôt", en: "Repository" },
        definition: {
          fr: "Projet versionné par Git (local ou distant).",
          en: "Git-versioned project (local or remote).",
        },
      },
      {
        term: { fr: ".gitignore", en: ".gitignore" },
        definition: {
          fr: "Fichier listant ce que Git ne doit pas suivre.",
          en: "File listing what Git should not track.",
        },
      },
    ],
    activities: [
      {
        id: "sw-git-basics-q1",
        type: "multiple-choice",
        question: { fr: "Un commit représente…", en: "A commit represents…" },
        options: [
          {
            fr: "Un snapshot de l'état du projet",
            en: "A snapshot of the project state",
          },
          { fr: "Un serveur DNS", en: "A DNS server" },
          { fr: "Un câble réseau", en: "A network cable" },
          { fr: "Un certificat SSL seul", en: "Only an SSL certificate" },
        ],
        correctAnswer: {
          fr: "Un snapshot de l'état du projet",
          en: "A snapshot of the project state",
        },
        hint: { fr: "Photo horodatée.", en: "Timestamped photo." },
        explanation: {
          fr: "Chaque commit fige un état reproductible avec un message.",
          en: "Each commit freezes a reproducible state with a message.",
        },
      },
      {
        id: "sw-git-basics-q2",
        type: "multiple-choice",
        question: { fr: "`git add` sert à…", en: "`git add` is used to…" },
        options: [
          {
            fr: "Préparer des fichiers pour le prochain commit",
            en: "Prepare files for the next commit",
          },
          { fr: "Supprimer le dépôt distant", en: "Delete the remote repository" },
          { fr: "Déployer en production", en: "Deploy to production" },
          { fr: "Compiler le kernel", en: "Compile the kernel" },
        ],
        correctAnswer: {
          fr: "Préparer des fichiers pour le prochain commit",
          en: "Prepare files for the next commit",
        },
        hint: { fr: "Zone de stage.", en: "Staging area." },
        explanation: {
          fr: "Le stage choisit précisément ce qui entrera dans le commit.",
          en: "The stage precisely chooses what enters the commit.",
        },
      },
      {
        id: "sw-git-basics-q3",
        type: "multiple-choice",
        question: { fr: "Une branche permet de…", en: "A branch lets you…" },
        options: [
          {
            fr: "Isoler un travail sans casser main",
            en: "Isolate work without breaking main",
          },
          { fr: "Remplacer Internet", en: "Replace the Internet" },
          { fr: "Éviter les messages de commit", en: "Avoid commit messages" },
          { fr: "Désactiver .gitignore", en: "Disable .gitignore" },
        ],
        correctAnswer: {
          fr: "Isoler un travail sans casser main",
          en: "Isolate work without breaking main",
        },
        hint: { fr: "Lignes d'historique parallèles.", en: "Parallel history lines." },
        explanation: {
          fr: "Les branches séparent features et correctifs jusqu'à la fusion.",
          en: "Branches separate features and fixes until merge.",
        },
      },
      {
        id: "sw-git-basics-q4",
        type: "multiple-choice",
        question: {
          fr: "Que ne dois-tu pas committer ?",
          en: "What should you not commit?",
        },
        options: [
          { fr: "Des secrets (.env, clés API)", en: "Secrets (.env, API keys)" },
          { fr: "Du code source de l'app", en: "App source code" },
          { fr: "Un README utile", en: "A useful README" },
          { fr: "Des tests unitaires", en: "Unit tests" },
        ],
        correctAnswer: {
          fr: "Des secrets (.env, clés API)",
          en: "Secrets (.env, API keys)",
        },
        hint: { fr: "Sécurité.", en: "Security." },
        explanation: {
          fr: "Les secrets dans Git fuient facilement et restent dans l'historique.",
          en: "Secrets in Git leak easily and remain in history.",
        },
      },
      {
        id: "sw-git-basics-q5",
        type: "multiple-choice",
        question: { fr: "`git status` montre…", en: "`git status` shows…" },
        options: [
          {
            fr: "Fichiers modifiés, stagés ou non suivis",
            en: "Modified, staged, or untracked files",
          },
          { fr: "La météo", en: "The weather" },
          { fr: "Le prix du cloud", en: "Cloud pricing" },
          { fr: "Le BIOS", en: "The BIOS" },
        ],
        correctAnswer: {
          fr: "Fichiers modifiés, stagés ou non suivis",
          en: "Modified, staged, or untracked files",
        },
        hint: { fr: "État du working tree.", en: "Working tree state." },
        explanation: {
          fr: "status est le tableau de bord local avant chaque commit.",
          en: "status is the local dashboard before every commit.",
        },
      },
      {
        id: "sw-git-basics-q6",
        type: "multiple-choice",
        question: {
          fr: "Un bon message de commit…",
          en: "A good commit message…",
        },
        options: [
          {
            fr: "Explique le pourquoi du changement",
            en: "Explains the why of the change",
          },
          { fr: "Dit seulement « update »", en: "Only says \"update\"" },
          { fr: "Est toujours vide", en: "Is always empty" },
          { fr: "Contient la clé API", en: "Contains the API key" },
        ],
        correctAnswer: {
          fr: "Explique le pourquoi du changement",
          en: "Explains the why of the change",
        },
        hint: { fr: "Intention pour le futur soi.", en: "Intent for future you." },
        explanation: {
          fr: "L'historique devient une documentation navigable.",
          en: "History becomes navigable documentation.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice Git. Tu expliques dépôt, stage, commit, branches et .gitignore avec des commandes concrètes. Réponds en français.",
        en: "You are Nova, a Git tutor. You explain repo, stage, commit, branches, and .gitignore with concrete commands. Answer in English.",
      },
      introMessage: {
        fr: "Git étape par étape. Où bloques-tu : commit, branche, ou status ?",
        en: "Git step by step. Where are you stuck: commit, branch, or status?",
      },
      topics: [
        { fr: "add / commit / status", en: "add / commit / status" },
        { fr: "Branches", en: "Branches" },
        { fr: "Secrets et .gitignore", en: "Secrets and .gitignore" },
      ],
    },
  },
  {
    id: "sw-git-workflow",
    unitId: "sw-engineering",
    title: { fr: "Workflow Git d'équipe", en: "Team Git workflow" },
    description: {
      fr: "Pull requests, merge, rebase et collaboration sans chaos.",
      en: "Pull requests, merge, rebase, and collaboration without chaos.",
    },
    icon: "network",
    estimatedMinutes: 18,
    xpReward: 24,
    goals: [
      {
        description: {
          fr: "Décrire un flux feature branch + PR",
          en: "Describe a feature-branch + PR flow",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Différencier merge et rebase",
          en: "Differentiate merge and rebase",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Résoudre un conflit simple",
          en: "Resolve a simple conflict",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "sw-git-workflow-s1",
        title: { fr: "Feature branch + PR", en: "Feature branch + PR" },
        body: {
          fr: "Tu branches depuis `main`, commits, pousses, ouvres une pull request. La revue et les checks CI valident avant fusion.",
          en: "You branch from `main`, commit, push, open a pull request. Review and CI checks validate before merge.",
        },
        diagram: "git-branch",
        callout: {
          fr: "Clé : petite PR = revue plus rapide et plus sûre.",
          en: "Key: small PR = faster, safer review.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-git-workflow-s2",
        title: { fr: "Remote : push et pull", en: "Remote: push and pull" },
        body: {
          fr: "`git push` envoie tes commits. `git pull` récupère ceux des autres. Travaille toujours à jour pour limiter les conflits.",
          en: "`git push` sends your commits. `git pull` fetches others'. Stay up to date to limit conflicts.",
        },
        codeExample: {
          language: "bash",
          code: `git checkout -b feature/xp-bar\n# ... commits ...\ngit push -u origin HEAD`,
        },
      },
      {
        id: "sw-git-workflow-s3",
        title: { fr: "Merge vs rebase", en: "Merge vs rebase" },
        body: {
          fr: "Merge crée un commit de fusion et conserve l'historique parallèle. Rebase rejoue tes commits sur une base à jour — historique plus linéaire, mais à éviter sur des branches partagées déjà poussées.",
          en: "Merge creates a merge commit and keeps parallel history. Rebase replays your commits onto an updated base — cleaner linear history, but avoid on shared already-pushed branches.",
        },
        callout: {
          fr: "Attention : ne rebase pas `main` public ni le travail des collègues sans accord.",
          en: "Warning: do not rebase public `main` or teammates' work without agreement.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-git-workflow-s4",
        title: { fr: "Conflits", en: "Conflicts" },
        body: {
          fr: "Un conflit apparaît quand deux lignes d'historique modifient la même zone. Git marque les fichiers ; tu choisis le résultat, puis tu commits la résolution.",
          en: "A conflict appears when two history lines change the same area. Git marks files; you choose the result, then commit the resolution.",
        },
        bullets: [
          { fr: "Lire les marqueurs <<<<<<< ======= >>>>>>>", en: "Read <<<<<<< ======= >>>>>>> markers" },
          { fr: "Tester après résolution", en: "Test after resolving" },
          { fr: "Demander de l'aide si le domaine est flou", en: "Ask for help if the domain is unclear" },
        ],
        callout: {
          fr: "Astuce : merger/rebaser souvent réduit la taille des conflits.",
          en: "Tip: merge/rebase often to shrink conflict size.",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-git-workflow-s5",
        title: { fr: "Conventions d'équipe", en: "Team conventions" },
        body: {
          fr: "Nommage de branches, protection de `main`, reviewers obligatoires, squash merge… Les conventions évitent les surprises.",
          en: "Branch naming, protected `main`, required reviewers, squash merge… Conventions prevent surprises.",
        },
      },
      {
        id: "sw-git-workflow-s6",
        title: { fr: "Ce qu'il ne faut pas faire", en: "What not to do" },
        body: {
          fr: "Force-push sur `main`, commits géants mélangés, PR sans description : autant de freins pour l'équipe.",
          en: "Force-push on `main`, giant mixed commits, PRs with no description: all slow the team down.",
        },
        callout: {
          fr: "Erreur : `--force` sur une branche partagée sans prévenir.",
          en: "Mistake: `--force` on a shared branch without warning.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-git-workflow-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Décris ton flux pour une feature.",
          en: "Describe your flow for a feature.",
        },
        miniExercise: {
          prompt: {
            fr: "Liste 5 étapes de ta machine jusqu'à `main` protégé pour ajouter un bouton.",
            en: "List 5 steps from your machine to protected `main` to add a button.",
          },
          hint: {
            fr: "Branche → commits → push → PR → merge.",
            en: "Branch → commits → push → PR → merge.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Pull request", en: "Pull request" },
        definition: {
          fr: "Proposition de fusion avec revue et checks.",
          en: "Merge proposal with review and checks.",
        },
      },
      {
        term: { fr: "Merge", en: "Merge" },
        definition: {
          fr: "Fusion de deux historiques en un.",
          en: "Combining two histories into one.",
        },
      },
      {
        term: { fr: "Rebase", en: "Rebase" },
        definition: {
          fr: "Rejouer des commits sur une nouvelle base.",
          en: "Replaying commits onto a new base.",
        },
      },
      {
        term: { fr: "Conflit", en: "Conflict" },
        definition: {
          fr: "Modifications incompatibles à résoudre manuellement.",
          en: "Incompatible changes that need manual resolution.",
        },
      },
      {
        term: { fr: "Remote", en: "Remote" },
        definition: {
          fr: "Dépôt distant (souvent origin sur GitHub/GitLab).",
          en: "Remote repository (often origin on GitHub/GitLab).",
        },
      },
    ],
    activities: [
      {
        id: "sw-git-workflow-q1",
        type: "multiple-choice",
        question: {
          fr: "Une pull request sert à…",
          en: "A pull request is for…",
        },
        options: [
          {
            fr: "Proposer une fusion avec revue et CI",
            en: "Proposing a merge with review and CI",
          },
          { fr: "Formater le disque", en: "Formatting the disk" },
          { fr: "Changer le DNS mondial", en: "Changing global DNS" },
          { fr: "Supprimer Git", en: "Deleting Git" },
        ],
        correctAnswer: {
          fr: "Proposer une fusion avec revue et CI",
          en: "Proposing a merge with review and CI",
        },
        hint: { fr: "Collaboration avant merge.", en: "Collaboration before merge." },
        explanation: {
          fr: "La PR est le point de contrôle qualité avant d'intégrer.",
          en: "The PR is the quality gate before integrating.",
        },
      },
      {
        id: "sw-git-workflow-q2",
        type: "multiple-choice",
        question: {
          fr: "Rebase sur une branche déjà partagée…",
          en: "Rebasing an already shared branch…",
        },
        options: [
          {
            fr: "Peut réécrire l'historique et surprendre l'équipe",
            en: "Can rewrite history and surprise the team",
          },
          { fr: "Est toujours sans conséquence", en: "Is always consequence-free" },
          { fr: "Supprime Internet", en: "Deletes the Internet" },
          { fr: "Remplace les tests", en: "Replaces tests" },
        ],
        correctAnswer: {
          fr: "Peut réécrire l'historique et surprendre l'équipe",
          en: "Can rewrite history and surprise the team",
        },
        hint: { fr: "Historique modifié.", en: "Modified history." },
        explanation: {
          fr: "Les commits changent de hash ; les collègues divergent.",
          en: "Commits change hashes; teammates diverge.",
        },
      },
      {
        id: "sw-git-workflow-q3",
        type: "multiple-choice",
        question: {
          fr: "Face à un conflit, tu dois…",
          en: "Facing a conflict, you should…",
        },
        options: [
          {
            fr: "Résoudre les marqueurs puis committer / continuer",
            en: "Resolve markers then commit / continue",
          },
          { fr: "Ignorer les fichiers marqués", en: "Ignore marked files" },
          { fr: "Supprimer le dépôt distant", en: "Delete the remote repo" },
          { fr: "Désinstaller Git", en: "Uninstall Git" },
        ],
        correctAnswer: {
          fr: "Résoudre les marqueurs puis committer / continuer",
          en: "Resolve markers then commit / continue",
        },
        hint: { fr: "Choisir le contenu final.", en: "Choose the final content." },
        explanation: {
          fr: "Git attend une résolution explicite avant de poursuivre.",
          en: "Git expects an explicit resolution before continuing.",
        },
      },
      {
        id: "sw-git-workflow-q4",
        type: "multiple-choice",
        question: {
          fr: "Pourquoi des PR petites ?",
          en: "Why keep PRs small?",
        },
        options: [
          {
            fr: "Revue plus rapide et moins d'erreurs manquées",
            en: "Faster review and fewer missed errors",
          },
          { fr: "Pour cacher le code", en: "To hide code" },
          { fr: "Parce que Git l'interdit autrement", en: "Because Git otherwise forbids it" },
          { fr: "Pour éviter les messages", en: "To avoid messages" },
        ],
        correctAnswer: {
          fr: "Revue plus rapide et moins d'erreurs manquées",
          en: "Faster review and fewer missed errors",
        },
        hint: { fr: "Charge cognitive du reviewer.", en: "Reviewer cognitive load." },
        explanation: {
          fr: "Moins de diff = feedback meilleur et merge plus sûr.",
          en: "Less diff = better feedback and safer merge.",
        },
      },
      {
        id: "sw-git-workflow-q5",
        type: "multiple-choice",
        question: {
          fr: "Protéger `main` signifie souvent…",
          en: "Protecting `main` often means…",
        },
        options: [
          {
            fr: "Interdire le push direct ; exiger PR + checks",
            en: "Forbidding direct push; requiring PR + checks",
          },
          { fr: "Supprimer toutes les branches", en: "Deleting all branches" },
          { fr: "Committer les secrets", en: "Committing secrets" },
          { fr: "Désactiver CI", en: "Disabling CI" },
        ],
        correctAnswer: {
          fr: "Interdire le push direct ; exiger PR + checks",
          en: "Forbidding direct push; requiring PR + checks",
        },
        hint: { fr: "Barrière qualité.", en: "Quality gate." },
        explanation: {
          fr: "La branche principale reste stable et revue.",
          en: "The main branch stays stable and reviewed.",
        },
      },
      {
        id: "sw-git-workflow-q6",
        type: "multiple-choice",
        question: {
          fr: "Force-push sur `main` partagée…",
          en: "Force-push on shared `main`…",
        },
        options: [
          {
            fr: "Est dangereux et généralement interdit",
            en: "Is dangerous and generally forbidden",
          },
          { fr: "Est la méthode recommandée chaque jour", en: "Is the recommended daily method" },
          { fr: "Améliore automatiquement les tests", en: "Automatically improves tests" },
          { fr: "Crée des certificats TLS", en: "Creates TLS certificates" },
        ],
        correctAnswer: {
          fr: "Est dangereux et généralement interdit",
          en: "Is dangerous and generally forbidden",
        },
        hint: { fr: "Réécriture d'historique public.", en: "Rewriting public history." },
        explanation: {
          fr: "Cela peut effacer le travail des autres et casser les clones.",
          en: "It can erase others' work and break clones.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice workflow Git. Tu expliques PR, merge/rebase, conflits et conventions d'équipe. Réponds en français.",
        en: "You are Nova, a Git workflow tutor. You explain PRs, merge/rebase, conflicts, and team conventions. Answer in English.",
      },
      introMessage: {
        fr: "Collaborons proprement avec Git. PR, conflits ou rebase ?",
        en: "Let's collaborate cleanly with Git. PR, conflicts, or rebase?",
      },
      topics: [
        { fr: "Feature branch et PR", en: "Feature branch and PR" },
        { fr: "Merge vs rebase", en: "Merge vs rebase" },
        { fr: "Résoudre un conflit", en: "Resolving a conflict" },
      ],
    },
  },
  {
    id: "sw-testing",
    unitId: "sw-engineering",
    title: { fr: "Tests logiciels", en: "Software testing" },
    description: {
      fr: "Pyramide des tests, unitaires, intégration et confiance au déploiement.",
      en: "Test pyramid, unit and integration tests, and deployment confidence.",
    },
    icon: "trophy",
    estimatedMinutes: 19,
    xpReward: 25,
    goals: [
      {
        description: {
          fr: "Expliquer la pyramide des tests",
          en: "Explain the test pyramid",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Écrire un test unitaire simple",
          en: "Write a simple unit test",
        },
        xpReward: 9,
      },
      {
        description: {
          fr: "Choisir le bon niveau de test",
          en: "Choose the right test level",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "sw-testing-s1",
        title: { fr: "Pourquoi tester ?", en: "Why test?" },
        body: {
          fr: "Les tests documentent le comportement attendu et détectent les régressions. Ils permettent de refactorer sans peur et de livrer plus souvent.",
          en: "Tests document expected behavior and catch regressions. They let you refactor without fear and ship more often.",
        },
        callout: {
          fr: "Clé : un test échoue d'abord, puis tu fais passer le code — confiance.",
          en: "Key: a test fails first, then you make code pass — confidence.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-testing-s2",
        title: { fr: "La pyramide des tests", en: "The test pyramid" },
        body: {
          fr: "Beaucoup de tests unitaires (rapides), moins d'intégration, encore moins d'E2E (lents, fragiles). Inverse la pyramide et le feedback devient lent et chaotique.",
          en: "Many unit tests (fast), fewer integration, even fewer E2E (slow, brittle). Invert the pyramid and feedback becomes slow and chaotic.",
        },
        diagram: "test-pyramid",
      },
      {
        id: "sw-testing-s3",
        title: { fr: "Test unitaire", en: "Unit test" },
        body: {
          fr: "Vérifie une unité isolée (fonction, classe) avec des entrées contrôlées. Rapide, déterministe, idéal pour les règles métier.",
          en: "Checks an isolated unit (function, class) with controlled inputs. Fast, deterministic, ideal for business rules.",
        },
        codeExample: {
          language: "typescript",
          code: `import { describe, it, expect } from "vitest";\nimport { add } from "./math";\n\ndescribe("add", () => {\n  it("sums two numbers", () => {\n    expect(add(2, 3)).toBe(5);\n  });\n});`,
        },
      },
      {
        id: "sw-testing-s4",
        title: { fr: "Intégration et E2E", en: "Integration and E2E" },
        body: {
          fr: "Intégration : plusieurs modules + DB/API réels ou proches. E2E : parcours utilisateur complet. Utiles, mais plus coûteux à écrire et maintenir.",
          en: "Integration: several modules + real or near-real DB/API. E2E: full user journeys. Useful, but costlier to write and maintain.",
        },
        callout: {
          fr: "Attention : trop d'E2E rend la CI lente et flaky.",
          en: "Warning: too many E2E makes CI slow and flaky.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-testing-s5",
        title: { fr: "AAA et bons noms", en: "AAA and good names" },
        body: {
          fr: "Arrange / Act / Assert structure le test. Le nom décrit le scénario : `returns null when list is empty`.",
          en: "Arrange / Act / Assert structures the test. The name describes the scenario: `returns null when list is empty`.",
        },
        callout: {
          fr: "Astuce : un assert clair vaut mieux que dix asserts flous.",
          en: "Tip: one clear assertion beats ten fuzzy ones.",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-testing-s6",
        title: { fr: "Ce qui n'est pas un test", en: "What is not a test" },
        body: {
          fr: "Des tests qui dupliquent l'implémentation, qui dépendent du temps réel sans contrôle, ou qui ne vérifient rien d'utile donnent une fausse confiance.",
          en: "Tests that mirror implementation, depend on wall-clock time uncontrolled, or assert nothing useful give false confidence.",
        },
        callout: {
          fr: "Erreur : viser 100 % de couverture au détriment de scénarios utiles.",
          en: "Mistake: chasing 100% coverage at the expense of useful scenarios.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-testing-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Choisis le niveau de test.",
          en: "Choose the test level.",
        },
        miniExercise: {
          prompt: {
            fr: "Tu veux vérifier `canUnlock(xp, required)`. Unitaire, intégration ou E2E ?",
            en: "You want to verify `canUnlock(xp, required)`. Unit, integration, or E2E?",
          },
          hint: {
            fr: "Fonction pure isolée…",
            en: "Isolated pure function…",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Test unitaire", en: "Unit test" },
        definition: {
          fr: "Vérifie une petite unité isolée du système.",
          en: "Verifies a small isolated unit of the system.",
        },
      },
      {
        term: { fr: "Test d'intégration", en: "Integration test" },
        definition: {
          fr: "Vérifie la collaboration de plusieurs composants.",
          en: "Verifies collaboration of several components.",
        },
      },
      {
        term: { fr: "E2E", en: "E2E" },
        definition: {
          fr: "Test de bout en bout d'un parcours utilisateur.",
          en: "End-to-end test of a user journey.",
        },
      },
      {
        term: { fr: "Régression", en: "Regression" },
        definition: {
          fr: "Bug qui réapparaît après un changement.",
          en: "A bug that reappears after a change.",
        },
      },
      {
        term: { fr: "Couverture", en: "Coverage" },
        definition: {
          fr: "Mesure de code exécuté par les tests (indicateur, pas but).",
          en: "Measure of code executed by tests (signal, not a goal).",
        },
      },
    ],
    activities: [
      {
        id: "sw-testing-q1",
        type: "multiple-choice",
        question: {
          fr: "La base de la pyramide des tests contient surtout…",
          en: "The base of the test pyramid mostly contains…",
        },
        options: [
          { fr: "Des tests unitaires", en: "Unit tests" },
          { fr: "Uniquement des E2E", en: "Only E2E tests" },
          { fr: "Aucun test", en: "No tests" },
          { fr: "Des déploiements manuels", en: "Manual deployments" },
        ],
        correctAnswer: { fr: "Des tests unitaires", en: "Unit tests" },
        hint: { fr: "Rapides et nombreux.", en: "Fast and numerous." },
        explanation: {
          fr: "Les unitaires offrent un feedback rapide et stable.",
          en: "Unit tests provide fast, stable feedback.",
        },
      },
      {
        id: "sw-testing-q2",
        type: "multiple-choice",
        question: {
          fr: "Un bon test unitaire est…",
          en: "A good unit test is…",
        },
        options: [
          {
            fr: "Rapide, isolé et déterministe",
            en: "Fast, isolated, and deterministic",
          },
          {
            fr: "Dépendant du réseau public non mocké",
            en: "Dependent on the unmocked public network",
          },
          { fr: "Aléatoire à chaque run", en: "Random on every run" },
          { fr: "Sans assert", en: "Without assertions" },
        ],
        correctAnswer: {
          fr: "Rapide, isolé et déterministe",
          en: "Fast, isolated, and deterministic",
        },
        hint: { fr: "Reproductibilité.", en: "Reproducibility." },
        explanation: {
          fr: "Sinon la CI devient flaky et on ignore les échecs.",
          en: "Otherwise CI becomes flaky and failures get ignored.",
        },
      },
      {
        id: "sw-testing-q3",
        type: "multiple-choice",
        question: { fr: "AAA signifie…", en: "AAA means…" },
        options: [
          { fr: "Arrange, Act, Assert", en: "Arrange, Act, Assert" },
          { fr: "Add, Ask, Abort", en: "Add, Ask, Abort" },
          { fr: "API, Auth, Array", en: "API, Auth, Array" },
          { fr: "Always Avoid Asserts", en: "Always Avoid Asserts" },
        ],
        correctAnswer: { fr: "Arrange, Act, Assert", en: "Arrange, Act, Assert" },
        hint: { fr: "Structure d'un test.", en: "Test structure." },
        explanation: {
          fr: "Prépare, exécute, vérifie — lisible pour toute l'équipe.",
          en: "Prepare, execute, verify — readable for the whole team.",
        },
      },
      {
        id: "sw-testing-q4",
        type: "multiple-choice",
        question: {
          fr: "Trop de tests E2E peut…",
          en: "Too many E2E tests can…",
        },
        options: [
          {
            fr: "Ralentir la CI et la rendre fragile",
            en: "Slow CI and make it brittle",
          },
          { fr: "Remplacer le besoin de Git", en: "Replace the need for Git" },
          { fr: "Supprimer les bugs par magie", en: "Magically delete bugs" },
          { fr: "Compiler plus vite le CPU", en: "Make the CPU compile faster" },
        ],
        correctAnswer: {
          fr: "Ralentir la CI et la rendre fragile",
          en: "Slow CI and make it brittle",
        },
        hint: { fr: "Coût et flakiness.", en: "Cost and flakiness." },
        explanation: {
          fr: "Les E2E touchent beaucoup de surfaces ; réserve-les aux parcours critiques.",
          en: "E2E touch many surfaces; reserve them for critical journeys.",
        },
      },
      {
        id: "sw-testing-q5",
        type: "multiple-choice",
        question: {
          fr: "La couverture à 100 %…",
          en: "100% coverage…",
        },
        options: [
          {
            fr: "N'est pas une garantie de qualité utile",
            en: "Is not a guarantee of useful quality",
          },
          { fr: "Prouve l'absence totale de bugs", en: "Proves total absence of bugs" },
          { fr: "Remplace la revue de code", en: "Replaces code review" },
          { fr: "Est interdite en TypeScript", en: "Is forbidden in TypeScript" },
        ],
        correctAnswer: {
          fr: "N'est pas une garantie de qualité utile",
          en: "Is not a guarantee of useful quality",
        },
        hint: { fr: "Indicateur ≠ objectif absolu.", en: "Signal ≠ absolute goal." },
        explanation: {
          fr: "On peut couvrir du code sans tester les bons scénarios.",
          en: "You can cover code without testing the right scenarios.",
        },
      },
      {
        id: "sw-testing-q6",
        type: "multiple-choice",
        question: {
          fr: "Les tests aident surtout à…",
          en: "Tests mainly help…",
        },
        options: [
          {
            fr: "Détecter les régressions et sécuriser les refactors",
            en: "Catch regressions and make refactors safe",
          },
          { fr: "Colorier l'IDE", en: "Color the IDE" },
          { fr: "Configurer le Wi-Fi", en: "Configure Wi-Fi" },
          { fr: "Remplacer le product owner", en: "Replace the product owner" },
        ],
        correctAnswer: {
          fr: "Détecter les régressions et sécuriser les refactors",
          en: "Catch regressions and make refactors safe",
        },
        hint: { fr: "Filet de sécurité.", en: "Safety net." },
        explanation: {
          fr: "Sans filet, chaque changement est un pari risqué.",
          en: "Without a net, every change is a risky bet.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice en tests logiciels. Tu expliques pyramide, unitaires, intégration, E2E et AAA avec des exemples. Réponds en français.",
        en: "You are Nova, a software-testing tutor. You explain the pyramid, unit, integration, E2E, and AAA with examples. Answer in English.",
      },
      introMessage: {
        fr: "On bâtit un filet de tests. Quel niveau veux-tu clarifier ?",
        en: "Let's build a test safety net. Which level should we clarify?",
      },
      topics: [
        { fr: "Pyramide des tests", en: "Test pyramid" },
        { fr: "Écrire un unitaire", en: "Writing a unit test" },
        { fr: "Quand faire de l'E2E", en: "When to do E2E" },
      ],
    },
  },
  {
    id: "sw-debugging-errors",
    unitId: "sw-engineering",
    title: { fr: "Débogage et erreurs", en: "Debugging and errors" },
    description: {
      fr: "Lire stack traces, reproduire, isoler et corriger méthodiquement.",
      en: "Read stack traces, reproduce, isolate, and fix methodically.",
    },
    icon: "search",
    estimatedMinutes: 17,
    xpReward: 23,
    goals: [
      {
        description: {
          fr: "Lire une stack trace utilement",
          en: "Read a stack trace usefully",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Reproduire et isoler un bug",
          en: "Reproduce and isolate a bug",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Choisir logs, breakpoints et asserts",
          en: "Choose logs, breakpoints, and asserts",
        },
        xpReward: 7,
      },
    ],
    sections: [
      {
        id: "sw-debugging-errors-s1",
        title: { fr: "Méthode avant panique", en: "Method before panic" },
        body: {
          fr: "Déboguer, c'est une enquête : reproduire, formuler une hypothèse, tester, corriger, vérifier. Changer dix choses au hasard allonge le debug.",
          en: "Debugging is an investigation: reproduce, hypothesize, test, fix, verify. Changing ten things at random lengthens the debug.",
        },
        callout: {
          fr: "Clé : une hypothèse à la fois.",
          en: "Key: one hypothesis at a time.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-debugging-errors-s2",
        title: { fr: "Lire la stack trace", en: "Reading the stack trace" },
        body: {
          fr: "Message, type d'erreur, fichier et ligne : commence en haut. Remonte la pile pour voir qui a appelé qui. Ignore d'abord le bruit des frameworks si ton code apparaît.",
          en: "Message, error type, file and line: start at the top. Walk the stack to see who called whom. First ignore framework noise if your code appears.",
        },
        codeExample: {
          language: "typescript",
          code: `function parseXp(raw: string): number {\n  const n = Number(raw);\n  if (Number.isNaN(n)) {\n    throw new Error(\`Invalid XP: \${raw}\`);\n  }\n  return n;\n}`,
          caption: {
            fr: "Des erreurs explicites accélèrent le diagnostic.",
            en: "Explicit errors speed up diagnosis.",
          },
        },
      },
      {
        id: "sw-debugging-errors-s3",
        title: { fr: "Reproduire au plus petit", en: "Reproduce as small as possible" },
        body: {
          fr: "Trouve l'entrée minimale qui casse. Un cas réduit clarifie la cause et devient un test de non-régression.",
          en: "Find the minimal input that breaks. A reduced case clarifies the cause and becomes a regression test.",
        },
        callout: {
          fr: "Astuce : si tu ne peux pas reproduire, tu ne peux pas vraiment corriger.",
          en: "Tip: if you cannot reproduce, you cannot truly fix.",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-debugging-errors-s4",
        title: { fr: "Outils : logs et breakpoints", en: "Tools: logs and breakpoints" },
        body: {
          fr: "Logs ciblés pour observer le flux. Breakpoints pour inspecter l'état pas à pas. Les deux se complètent ; le spam de `console.log` partout embrouille.",
          en: "Targeted logs to observe flow. Breakpoints to inspect state step by step. Both complement each other; spam `console.log` everywhere confuses.",
        },
        bullets: [
          { fr: "Logguer entrées/sorties de fonctions critiques", en: "Log inputs/outputs of critical functions" },
          { fr: "Breakpoint sur la ligne suspecte", en: "Breakpoint on the suspicious line" },
          { fr: "Retirer les logs de debug avant merge", en: "Remove debug logs before merge" },
        ],
      },
      {
        id: "sw-debugging-errors-s5",
        title: { fr: "Types d'erreurs", en: "Error types" },
        body: {
          fr: "Syntaxe (ne compile pas), runtime (plante à l'exécution), logique (tourne mais faux). Le traitement diffère : compilateur, stack, puis assertion/tests.",
          en: "Syntax (won't compile), runtime (crashes at runtime), logic (runs but wrong). Treatment differs: compiler, stack, then assertions/tests.",
        },
        callout: {
          fr: "Attention : un bug logique silencieux est souvent le plus cher.",
          en: "Warning: a silent logic bug is often the costliest.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-debugging-errors-s6",
        title: { fr: "Corriger et verrouiller", en: "Fix and lock it in" },
        body: {
          fr: "Après le fix, ajoute un test qui aurait échoué avant. Documente si le piège est subtil. Puis vérifie les cas proches.",
          en: "After the fix, add a test that would have failed before. Document if the pitfall is subtle. Then check nearby cases.",
        },
        callout: {
          fr: "Erreur : « ça marche sur ma machine » sans reproduire ni tester.",
          en: "Mistake: \"works on my machine\" without reproducing or testing.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-debugging-errors-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Entraîne la méthode.",
          en: "Practice the method.",
        },
        miniExercise: {
          prompt: {
            fr: "`maxOf([])` plante. Quelle hypothèse formules-tu en premier, et quel test écris-tu ?",
            en: "`maxOf([])` crashes. What hypothesis first, and which test do you write?",
          },
          hint: {
            fr: "Cas vide non géré…",
            en: "Unhandled empty case…",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Stack trace", en: "Stack trace" },
        definition: {
          fr: "Chaîne d'appels au moment de l'erreur.",
          en: "Call chain at the moment of the error.",
        },
      },
      {
        term: { fr: "Reproduire", en: "Reproduce" },
        definition: {
          fr: "Refaire le bug de façon fiable.",
          en: "Reliably recreate the bug.",
        },
      },
      {
        term: { fr: "Breakpoint", en: "Breakpoint" },
        definition: {
          fr: "Point d'arrêt pour inspecter l'état en debug.",
          en: "Pause point to inspect state while debugging.",
        },
      },
      {
        term: { fr: "Régression", en: "Regression" },
        definition: {
          fr: "Comportement correct qui redevient faux après un changement.",
          en: "Correct behavior that becomes wrong after a change.",
        },
      },
      {
        term: { fr: "Hypothèse", en: "Hypothesis" },
        definition: {
          fr: "Explication candidate du bug à vérifier.",
          en: "Candidate explanation of the bug to verify.",
        },
      },
    ],
    activities: [
      {
        id: "sw-debugging-errors-q1",
        type: "multiple-choice",
        question: {
          fr: "La première étape utile face à un bug est souvent…",
          en: "A useful first step facing a bug is often…",
        },
        options: [
          {
            fr: "Le reproduire de façon fiable",
            en: "Reproducing it reliably",
          },
          {
            fr: "Réécrire tout le projet immédiatement",
            en: "Immediately rewriting the whole project",
          },
          { fr: "Supprimer Git", en: "Deleting Git" },
          { fr: "Ignorer la stack trace", en: "Ignoring the stack trace" },
        ],
        correctAnswer: {
          fr: "Le reproduire de façon fiable",
          en: "Reproducing it reliably",
        },
        hint: { fr: "Sans repro, pas de preuve.", en: "No repro, no proof." },
        explanation: {
          fr: "La reproduction transforme le mystère en expérience contrôlée.",
          en: "Reproduction turns mystery into a controlled experiment.",
        },
      },
      {
        id: "sw-debugging-errors-q2",
        type: "multiple-choice",
        question: {
          fr: "Une stack trace indique surtout…",
          en: "A stack trace mainly shows…",
        },
        options: [
          {
            fr: "Où et comment l'erreur s'est propagée",
            en: "Where and how the error propagated",
          },
          { fr: "Le prix du cloud", en: "Cloud pricing" },
          { fr: "La météo", en: "The weather" },
          { fr: "Le design Figma", en: "The Figma design" },
        ],
        correctAnswer: {
          fr: "Où et comment l'erreur s'est propagée",
          en: "Where and how the error propagated",
        },
        hint: { fr: "Fichier, ligne, appels.", en: "File, line, calls." },
        explanation: {
          fr: "C'est la carte du chemin d'exécution jusqu'à l'échec.",
          en: "It is the map of the execution path to failure.",
        },
      },
      {
        id: "sw-debugging-errors-q3",
        type: "multiple-choice",
        question: {
          fr: "Pourquoi une hypothèse à la fois ?",
          en: "Why one hypothesis at a time?",
        },
        options: [
          {
            fr: "Pour savoir quel changement a un effet",
            en: "To know which change had an effect",
          },
          { fr: "Parce que Git l'exige", en: "Because Git requires it" },
          { fr: "Pour ralentir volontairement", en: "To intentionally slow down" },
          { fr: "Pour éviter les tests", en: "To avoid tests" },
        ],
        correctAnswer: {
          fr: "Pour savoir quel changement a un effet",
          en: "To know which change had an effect",
        },
        hint: { fr: "Contrôle expérimental.", en: "Experimental control." },
        explanation: {
          fr: "Plusieurs changements simultanés brouillent la cause.",
          en: "Several simultaneous changes blur the cause.",
        },
      },
      {
        id: "sw-debugging-errors-q4",
        type: "multiple-choice",
        question: {
          fr: "Après un fix, la bonne pratique est…",
          en: "After a fix, good practice is…",
        },
        options: [
          {
            fr: "Ajouter un test de non-régression",
            en: "Add a regression test",
          },
          { fr: "Effacer l'historique Git", en: "Erase Git history" },
          { fr: "Désactiver les logs à jamais", en: "Disable logs forever" },
          { fr: "Interdire les breakpoints", en: "Forbid breakpoints" },
        ],
        correctAnswer: {
          fr: "Ajouter un test de non-régression",
          en: "Add a regression test",
        },
        hint: { fr: "Verrouiller le correctif.", en: "Lock in the fix." },
        explanation: {
          fr: "Le test empêche le bug de revenir discrètement.",
          en: "The test prevents the bug from quietly returning.",
        },
      },
      {
        id: "sw-debugging-errors-q5",
        type: "multiple-choice",
        question: {
          fr: "Une erreur de logique…",
          en: "A logic error…",
        },
        options: [
          {
            fr: "S'exécute mais produit un mauvais résultat",
            en: "Runs but produces a wrong result",
          },
          { fr: "Empêche toujours la compilation", en: "Always prevents compilation" },
          { fr: "N'existe pas en TypeScript", en: "Does not exist in TypeScript" },
          { fr: "Est un câble débranché", en: "Is an unplugged cable" },
        ],
        correctAnswer: {
          fr: "S'exécute mais produit un mauvais résultat",
          en: "Runs but produces a wrong result",
        },
        hint: { fr: "Pas forcément de crash.", en: "Not necessarily a crash." },
        explanation: {
          fr: "Les asserts et tests sont essentiels pour les détecter.",
          en: "Assertions and tests are essential to catch them.",
        },
      },
      {
        id: "sw-debugging-errors-q6",
        type: "multiple-choice",
        question: {
          fr: "Le spam de `console.log` partout…",
          en: "Spamming `console.log` everywhere…",
        },
        options: [
          {
            fr: "Rend le signal difficile à lire",
            en: "Makes the signal hard to read",
          },
          { fr: "Remplace toujours le debugger", en: "Always replaces the debugger" },
          { fr: "Corrige les bugs automatiquement", en: "Automatically fixes bugs" },
          { fr: "Est exigé par SOLID", en: "Is required by SOLID" },
        ],
        correctAnswer: {
          fr: "Rend le signal difficile à lire",
          en: "Makes the signal hard to read",
        },
        hint: { fr: "Bruit vs signal.", en: "Noise vs signal." },
        explanation: {
          fr: "Des logs ciblés ou des breakpoints sont plus efficaces.",
          en: "Targeted logs or breakpoints are more effective.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice en débogage. Tu enseignes méthode scientifique, stack traces, reproduction minimale et non-régression. Réponds en français.",
        en: "You are Nova, a debugging tutor. You teach scientific method, stack traces, minimal reproduction, and regression locks. Answer in English.",
      },
      introMessage: {
        fr: "On enquête sur un bug. Montre-moi l'erreur ou décris le symptôme !",
        en: "Let's investigate a bug. Show me the error or describe the symptom!",
      },
      topics: [
        { fr: "Lire une stack trace", en: "Reading a stack trace" },
        { fr: "Reproduire et isoler", en: "Reproduce and isolate" },
        { fr: "Logs vs breakpoints", en: "Logs vs breakpoints" },
      ],
    },
  },
// ─── sw-delivery ───────────────────────────────────────────────────
  {
    id: "sw-api-docs",
    unitId: "sw-delivery",
    title: { fr: "Documentation d'API", en: "API documentation" },
    description: {
      fr: "Documenter endpoints, contrats et exemples pour des intégrations fiables.",
      en: "Document endpoints, contracts, and examples for reliable integrations.",
    },
    icon: "book",
    estimatedMinutes: 16,
    xpReward: 22,
    goals: [
      {
        description: {
          fr: "Lister les éléments d'une doc d'API utile",
          en: "List elements of useful API docs",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Écrire un contrat request/response clair",
          en: "Write a clear request/response contract",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Utiliser exemples et codes d'erreur",
          en: "Use examples and error codes",
        },
        xpReward: 7,
      },
    ],
    sections: [
      {
        id: "sw-api-docs-s1",
        title: { fr: "Pourquoi documenter ?", en: "Why document?" },
        body: {
          fr: "Une API sans doc force chaque consommateur à lire le code ou à poser des questions. Une bonne doc accélère l'intégration et réduit les bugs d'usage.",
          en: "An API without docs forces every consumer to read code or ask questions. Good docs speed integration and reduce misuse bugs.",
        },
        analogy: {
          fr: "Comme le mode d'emploi d'un appareil : sans lui, on appuie au hasard.",
          en: "Like a device manual: without it, you press buttons at random.",
        },
      },
      {
        id: "sw-api-docs-s2",
        title: { fr: "Ce que contient une bonne doc", en: "What good docs include" },
        body: {
          fr: "Endpoint, méthode HTTP, auth, paramètres, corps, réponses succès/erreur, exemples. OpenAPI/Swagger formalise ce contrat.",
          en: "Endpoint, HTTP method, auth, parameters, body, success/error responses, examples. OpenAPI/Swagger formalizes this contract.",
        },
        bullets: [
          { fr: "URL et verbe (GET/POST/…)", en: "URL and verb (GET/POST/…)" },
          { fr: "Schéma JSON des payloads", en: "JSON schema of payloads" },
          { fr: "Codes HTTP et messages d'erreur", en: "HTTP codes and error messages" },
        ],
        callout: {
          fr: "Clé : la doc est un contrat, pas un roman.",
          en: "Key: docs are a contract, not a novel.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-api-docs-s3",
        title: { fr: "Exemple de contrat", en: "Contract example" },
        body: {
          fr: "Décris clairement les champs obligatoires et les types. Un exemple réaliste vaut mieux qu'une prose vague.",
          en: "Clearly describe required fields and types. A realistic example beats vague prose.",
        },
        codeExample: {
          language: "yaml",
          code: `GET /lessons/{id}\nResponse 200:\n  { "id": "sw-testing", "xpReward": 25 }\nResponse 404:\n  { "error": "LESSON_NOT_FOUND" }`,
        },
      },
      {
        id: "sw-api-docs-s4",
        title: { fr: "Erreurs documentées", en: "Documented errors" },
        body: {
          fr: "Liste les erreurs fréquentes avec codes stables. Les clients peuvent brancher une UX correcte au lieu de parser des messages libres.",
          en: "List common errors with stable codes. Clients can wire proper UX instead of parsing free-form messages.",
        },
        callout: {
          fr: "Astuce : codes machine (`INVALID_TOKEN`) + message humain.",
          en: "Tip: machine codes (`INVALID_TOKEN`) + human message.",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-api-docs-s5",
        title: { fr: "Doc vivante", en: "Living docs" },
        body: {
          fr: "La doc périmée ment. Génère-la depuis le code (OpenAPI), ajoute des checks CI, et versionne les breaking changes.",
          en: "Stale docs lie. Generate from code (OpenAPI), add CI checks, and version breaking changes.",
        },
        callout: {
          fr: "Attention : un champ renommé sans doc casse les clients silencieux.",
          en: "Warning: a renamed field without docs silently breaks clients.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-api-docs-s6",
        title: { fr: "Anti-patterns", en: "Anti-patterns" },
        body: {
          fr: "Doc dans un wiki oublié, exemples inventés qui ne marchent pas, absence d'auth décrite… Autant de pièges.",
          en: "Docs in a forgotten wiki, invented examples that don't work, missing auth description… All traps.",
        },
        callout: {
          fr: "Erreur : documenter après coup seulement quand un client se plaint.",
          en: "Mistake: documenting only after a client complains.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-api-docs-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Esquisse une doc courte.",
          en: "Sketch a short doc.",
        },
        miniExercise: {
          prompt: {
            fr: "Documente `POST /users` qui crée un utilisateur (email, name). Inclue 201 et 400.",
            en: "Document `POST /users` that creates a user (email, name). Include 201 and 400.",
          },
          hint: {
            fr: "Méthode, body, réponses.",
            en: "Method, body, responses.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Endpoint", en: "Endpoint" },
        definition: {
          fr: "URL + méthode exposée par l'API.",
          en: "URL + method exposed by the API.",
        },
      },
      {
        term: { fr: "Contrat", en: "Contract" },
        definition: {
          fr: "Accord sur formats d'entrée/sortie et erreurs.",
          en: "Agreement on input/output formats and errors.",
        },
      },
      {
        term: { fr: "OpenAPI", en: "OpenAPI" },
        definition: {
          fr: "Spécification standard pour décrire des APIs HTTP.",
          en: "Standard specification for describing HTTP APIs.",
        },
      },
      {
        term: { fr: "Breaking change", en: "Breaking change" },
        definition: {
          fr: "Modification qui casse les clients existants.",
          en: "Change that breaks existing clients.",
        },
      },
      {
        term: { fr: "Payload", en: "Payload" },
        definition: {
          fr: "Corps de données envoyé ou reçu.",
          en: "Data body sent or received.",
        },
      },
    ],
    activities: [
      {
        id: "sw-api-docs-q1",
        type: "multiple-choice",
        question: {
          fr: "Une bonne doc d'API doit surtout…",
          en: "Good API docs should mainly…",
        },
        options: [
          {
            fr: "Décrire le contrat (requêtes, réponses, erreurs)",
            en: "Describe the contract (requests, responses, errors)",
          },
          { fr: "Raconter l'histoire de l'entreprise", en: "Tell the company history" },
          { fr: "Remplacer les tests", en: "Replace tests" },
          { fr: "Cacher l'authentification", en: "Hide authentication" },
        ],
        correctAnswer: {
          fr: "Décrire le contrat (requêtes, réponses, erreurs)",
          en: "Describe the contract (requests, responses, errors)",
        },
        hint: { fr: "Utilisable par un intégrateur.", en: "Usable by an integrator." },
        explanation: {
          fr: "Sans contrat clair, chaque client invente un usage fragile.",
          en: "Without a clear contract, each client invents fragile usage.",
        },
      },
      {
        id: "sw-api-docs-q2",
        type: "multiple-choice",
        question: { fr: "OpenAPI sert à…", en: "OpenAPI is used to…" },
        options: [
          {
            fr: "Spécifier formellement une API HTTP",
            en: "Formally specify an HTTP API",
          },
          { fr: "Compiler le kernel Linux", en: "Compile the Linux kernel" },
          { fr: "Remplacer Git", en: "Replace Git" },
          { fr: "Colorier le terminal", en: "Color the terminal" },
        ],
        correctAnswer: {
          fr: "Spécifier formellement une API HTTP",
          en: "Formally specify an HTTP API",
        },
        hint: { fr: "Spécification machine-readable.", en: "Machine-readable spec." },
        explanation: {
          fr: "On peut générer docs, clients et validations depuis OpenAPI.",
          en: "You can generate docs, clients, and validations from OpenAPI.",
        },
      },
      {
        id: "sw-api-docs-q3",
        type: "multiple-choice",
        question: {
          fr: "Pourquoi documenter les codes d'erreur ?",
          en: "Why document error codes?",
        },
        options: [
          {
            fr: "Pour que les clients gèrent les cas d'échec proprement",
            en: "So clients handle failure cases cleanly",
          },
          { fr: "Pour embellir le logo", en: "To beautify the logo" },
          { fr: "Pour éviter HTTPS", en: "To avoid HTTPS" },
          { fr: "Pour supprimer les logs", en: "To remove logs" },
        ],
        correctAnswer: {
          fr: "Pour que les clients gèrent les cas d'échec proprement",
          en: "So clients handle failure cases cleanly",
        },
        hint: { fr: "UX et robustesse.", en: "UX and robustness." },
        explanation: {
          fr: "Des codes stables permettent des branches d'erreur prévisibles.",
          en: "Stable codes enable predictable error branches.",
        },
      },
      {
        id: "sw-api-docs-q4",
        type: "multiple-choice",
        question: {
          fr: "Une doc périmée est dangereuse car…",
          en: "Stale docs are dangerous because…",
        },
        options: [
          {
            fr: "Elle induit les intégrateurs en erreur",
            en: "They mislead integrators",
          },
          { fr: "Elle accélère le CPU", en: "They speed up the CPU" },
          { fr: "Elle remplace la CI", en: "They replace CI" },
          { fr: "Elle chiffre les disques", en: "They encrypt disks" },
        ],
        correctAnswer: {
          fr: "Elle induit les intégrateurs en erreur",
          en: "They mislead integrators",
        },
        hint: { fr: "Confiance trahie.", en: "Broken trust." },
        explanation: {
          fr: "Mieux vaut peu de doc à jour qu'une doc abondante et fausse.",
          en: "Better little up-to-date docs than abundant false ones.",
        },
      },
      {
        id: "sw-api-docs-q5",
        type: "multiple-choice",
        question: {
          fr: "Un breaking change d'API…",
          en: "An API breaking change…",
        },
        options: [
          {
            fr: "Casse les clients existants s'ils ne s'adaptent pas",
            en: "Breaks existing clients unless they adapt",
          },
          { fr: "N'a jamais d'impact", en: "Never has impact" },
          { fr: "Est uniquement cosmétique", en: "Is only cosmetic" },
          { fr: "Est interdit par TCP", en: "Is forbidden by TCP" },
        ],
        correctAnswer: {
          fr: "Casse les clients existants s'ils ne s'adaptent pas",
          en: "Breaks existing clients unless they adapt",
        },
        hint: { fr: "Compatibilité.", en: "Compatibility." },
        explanation: {
          fr: "Versionne ou déprécie pour laisser le temps de migrer.",
          en: "Version or deprecate to give time to migrate.",
        },
      },
      {
        id: "sw-api-docs-q6",
        type: "multiple-choice",
        question: {
          fr: "Un exemple dans la doc devrait…",
          en: "An example in the docs should…",
        },
        options: [
          {
            fr: "Être réaliste et exécutable / proche du réel",
            en: "Be realistic and runnable / close to real",
          },
          { fr: "Être volontairement faux", en: "Be intentionally false" },
          { fr: "Omettre tous les champs", en: "Omit every field" },
          { fr: "Contenir des secrets de prod", en: "Contain prod secrets" },
        ],
        correctAnswer: {
          fr: "Être réaliste et exécutable / proche du réel",
          en: "Be realistic and runnable / close to real",
        },
        hint: { fr: "Copy-paste utile.", en: "Useful copy-paste." },
        explanation: {
          fr: "Les exemples sont souvent la partie la plus lue de la doc.",
          en: "Examples are often the most-read part of the docs.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice documentation API. Tu expliques contrats, OpenAPI, erreurs et doc vivante. Réponds en français.",
        en: "You are Nova, an API-docs tutor. You explain contracts, OpenAPI, errors, and living docs. Answer in English.",
      },
      introMessage: {
        fr: "On documente une API claire. Quel bout du contrat veux-tu travailler ?",
        en: "Let's document a clear API. Which part of the contract should we work on?",
      },
      topics: [
        { fr: "Contenu d'une bonne doc", en: "Contents of good docs" },
        { fr: "OpenAPI", en: "OpenAPI" },
        { fr: "Erreurs et breaking changes", en: "Errors and breaking changes" },
      ],
    },
  },
  {
    id: "sw-cicd",
    unitId: "sw-delivery",
    title: { fr: "CI/CD", en: "CI/CD" },
    description: {
      fr: "Intégration continue, pipelines, déploiement et confiance automatisée.",
      en: "Continuous integration, pipelines, deployment, and automated confidence.",
    },
    icon: "zap",
    estimatedMinutes: 18,
    xpReward: 24,
    goals: [
      {
        description: {
          fr: "Différencier CI et CD",
          en: "Differentiate CI and CD",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Décrire les étapes d'un pipeline",
          en: "Describe pipeline stages",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Relier CI aux tests et à la qualité",
          en: "Connect CI to tests and quality",
        },
        xpReward: 8,
      },
    ],
    sections: [
      {
        id: "sw-cicd-s1",
        title: { fr: "CI vs CD", en: "CI vs CD" },
        body: {
          fr: "CI (Continuous Integration) : à chaque changement, build + tests automatiques. CD (Continuous Delivery/Deployment) : rendre le logiciel toujours déployable, voire le déployer automatiquement.",
          en: "CI (Continuous Integration): on every change, automated build + tests. CD (Continuous Delivery/Deployment): keep software always deployable, or even deploy automatically.",
        },
        diagram: "ci-cd",
        callout: {
          fr: "Clé : CI = confiance sur le code ; CD = confiance sur la livraison.",
          en: "Key: CI = confidence in code; CD = confidence in delivery.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-cicd-s2",
        title: { fr: "Anatomie d'un pipeline", en: "Anatomy of a pipeline" },
        body: {
          fr: "Typiquement : checkout → install → lint → test → build → (deploy). Chaque étape doit échouer vite si quelque chose casse.",
          en: "Typically: checkout → install → lint → test → build → (deploy). Each stage should fail fast if something breaks.",
        },
        bullets: [
          { fr: "Lint / typecheck : qualité statique", en: "Lint / typecheck: static quality" },
          { fr: "Tests : filet fonctionnel", en: "Tests: functional safety net" },
          { fr: "Build artefact : image, bundle…", en: "Build artifact: image, bundle…" },
        ],
      },
      {
        id: "sw-cicd-s3",
        title: { fr: "Pourquoi automatiser ?", en: "Why automate?" },
        body: {
          fr: "Les humains oublient des étapes. La CI exécute la même checklist à chaque PR. Moins de « ça marche chez moi », plus de signal partagé.",
          en: "Humans forget steps. CI runs the same checklist on every PR. Less \"works on my machine\", more shared signal.",
        },
        analogy: {
          fr: "Comme un contrôle technique automatique avant de prendre la route.",
          en: "Like an automatic safety inspection before hitting the road.",
        },
      },
      {
        id: "sw-cicd-s4",
        title: { fr: "Conteneurs et artefacts", en: "Containers and artifacts" },
        body: {
          fr: "Souvent le pipeline produit une image Docker versionnée. Les couches d'image accélèrent les rebuilds et figent les dépendances.",
          en: "Often the pipeline produces a versioned Docker image. Image layers speed rebuilds and freeze dependencies.",
        },
        diagram: "docker-layers",
        callout: {
          fr: "Astuce : tagge les images avec le SHA du commit.",
          en: "Tip: tag images with the commit SHA.",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-cicd-s5",
        title: { fr: "Environnements", en: "Environments" },
        body: {
          fr: "Dev → staging → prod. Déploie d'abord hors prod, valide, puis promeus le même artefact. Évite de rebuild « spécial prod ».",
          en: "Dev → staging → prod. Deploy outside prod first, validate, then promote the same artifact. Avoid a special \"prod-only\" rebuild.",
        },
        callout: {
          fr: "Attention : des secrets différents par environnement, jamais hardcodés.",
          en: "Warning: different secrets per environment, never hardcoded.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-cicd-s6",
        title: { fr: "Pièges CI/CD", en: "CI/CD pitfalls" },
        body: {
          fr: "Pipeline flaky ignoré, jobs trop lents, deploy sans rollback… La CI doit rester un outil de confiance, pas un bruit de fond.",
          en: "Ignored flaky pipeline, jobs too slow, deploy without rollback… CI must stay a trust tool, not background noise.",
        },
        callout: {
          fr: "Erreur : merger en rouge « on verra plus tard ».",
          en: "Mistake: merging while red \"we'll see later\".",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-cicd-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Conçois un pipeline minimal.",
          en: "Design a minimal pipeline.",
        },
        miniExercise: {
          prompt: {
            fr: "Pour une app Expo/TS, liste 4 jobs CI utiles avant merge sur main.",
            en: "For an Expo/TS app, list 4 useful CI jobs before merge to main.",
          },
          hint: {
            fr: "Lint, types, tests, build…",
            en: "Lint, types, tests, build…",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "CI", en: "CI" },
        definition: {
          fr: "Intégration continue : build/tests automatiques à chaque changement.",
          en: "Continuous integration: automated build/tests on every change.",
        },
      },
      {
        term: { fr: "CD", en: "CD" },
        definition: {
          fr: "Livraison/déploiement continu vers des environnements.",
          en: "Continuous delivery/deployment to environments.",
        },
      },
      {
        term: { fr: "Pipeline", en: "Pipeline" },
        definition: {
          fr: "Suite d'étapes automatisées (jobs) sur un commit/PR.",
          en: "Sequence of automated stages (jobs) on a commit/PR.",
        },
      },
      {
        term: { fr: "Artefact", en: "Artifact" },
        definition: {
          fr: "Résultat buildé déployable (bundle, image…).",
          en: "Built deployable result (bundle, image…).",
        },
      },
      {
        term: { fr: "Rollback", en: "Rollback" },
        definition: {
          fr: "Revenir à une version précédente après un problème.",
          en: "Revert to a previous version after a problem.",
        },
      },
    ],
    activities: [
      {
        id: "sw-cicd-q1",
        type: "multiple-choice",
        question: { fr: "La CI consiste surtout à…", en: "CI mainly consists of…" },
        options: [
          {
            fr: "Vérifier automatiquement chaque changement (build/tests)",
            en: "Automatically verifying every change (build/tests)",
          },
          { fr: "Écrire le README à la main seulement", en: "Only writing the README by hand" },
          { fr: "Désactiver les tests", en: "Disabling tests" },
          { fr: "Configurer le Wi-Fi du bureau", en: "Configuring office Wi-Fi" },
        ],
        correctAnswer: {
          fr: "Vérifier automatiquement chaque changement (build/tests)",
          en: "Automatically verifying every change (build/tests)",
        },
        hint: { fr: "Intégration continue.", en: "Continuous integration." },
        explanation: {
          fr: "La CI donne un signal rapide et partagé sur la santé du code.",
          en: "CI gives a fast, shared signal on code health.",
        },
      },
      {
        id: "sw-cicd-q2",
        type: "multiple-choice",
        question: {
          fr: "Un pipeline devrait…",
          en: "A pipeline should…",
        },
        options: [
          {
            fr: "Échouer vite si une étape critique casse",
            en: "Fail fast if a critical stage breaks",
          },
          { fr: "Toujours être ignoré en rouge", en: "Always be ignored when red" },
          { fr: "Prendre 12 heures sans raison", en: "Take 12 hours for no reason" },
          { fr: "Déployer des secrets en clair dans les logs", en: "Deploy secrets in clear logs" },
        ],
        correctAnswer: {
          fr: "Échouer vite si une étape critique casse",
          en: "Fail fast if a critical stage breaks",
        },
        hint: { fr: "Fail fast.", en: "Fail fast." },
        explanation: {
          fr: "Un feedback rapide protège main et l'équipe.",
          en: "Fast feedback protects main and the team.",
        },
      },
      {
        id: "sw-cicd-q3",
        type: "multiple-choice",
        question: {
          fr: "Promouvoir le même artefact vers la prod…",
          en: "Promoting the same artifact to prod…",
        },
        options: [
          {
            fr: "Évite les surprises d'un rebuild différent",
            en: "Avoids surprises from a different rebuild",
          },
          { fr: "Est inutile", en: "Is useless" },
          { fr: "Casse forcément Docker", en: "Always breaks Docker" },
          { fr: "Remplace les tests", en: "Replaces tests" },
        ],
        correctAnswer: {
          fr: "Évite les surprises d'un rebuild différent",
          en: "Avoids surprises from a different rebuild",
        },
        hint: { fr: "Ce qui est testé = ce qui est déployé.", en: "What is tested = what is deployed." },
        explanation: {
          fr: "On valide un binaire/image, puis on le promeut.",
          en: "You validate a binary/image, then promote it.",
        },
      },
      {
        id: "sw-cicd-q4",
        type: "multiple-choice",
        question: {
          fr: "Tagger une image Docker avec le SHA…",
          en: "Tagging a Docker image with the SHA…",
        },
        options: [
          {
            fr: "Relie l'artefact au commit exact",
            en: "Links the artifact to the exact commit",
          },
          { fr: "Efface l'historique Git", en: "Erases Git history" },
          { fr: "Désactive la CI", en: "Disables CI" },
          { fr: "Change le DNS", en: "Changes DNS" },
        ],
        correctAnswer: {
          fr: "Relie l'artefact au commit exact",
          en: "Links the artifact to the exact commit",
        },
        hint: { fr: "Traçabilité.", en: "Traceability." },
        explanation: {
          fr: "On sait précisément quel code tourne en prod.",
          en: "You know exactly which code runs in prod.",
        },
      },
      {
        id: "sw-cicd-q5",
        type: "multiple-choice",
        question: {
          fr: "Un pipeline flaky ignoré…",
          en: "An ignored flaky pipeline…",
        },
        options: [
          {
            fr: "Détruit la confiance dans le signal CI",
            en: "Destroys trust in the CI signal",
          },
          { fr: "Améliore la couverture", en: "Improves coverage" },
          { fr: "Est recommandé par SOLID", en: "Is recommended by SOLID" },
          { fr: "Remplace le rollback", en: "Replaces rollback" },
        ],
        correctAnswer: {
          fr: "Détruit la confiance dans le signal CI",
          en: "Destroys trust in the CI signal",
        },
        hint: { fr: "Cri du loup.", en: "Boy who cried wolf." },
        explanation: {
          fr: "Si le rouge ne veut plus rien dire, on merge des régressions.",
          en: "If red means nothing, you merge regressions.",
        },
      },
      {
        id: "sw-cicd-q6",
        type: "multiple-choice",
        question: {
          fr: "Le CD (delivery/deployment) vise à…",
          en: "CD (delivery/deployment) aims to…",
        },
        options: [
          {
            fr: "Rendre le logiciel déployable (souvent automatiquement)",
            en: "Make software deployable (often automatically)",
          },
          { fr: "Écrire uniquement du CSS", en: "Write only CSS" },
          { fr: "Supprimer les environnements", en: "Remove environments" },
          { fr: "Interdire les rollbacks", en: "Forbid rollbacks" },
        ],
        correctAnswer: {
          fr: "Rendre le logiciel déployable (souvent automatiquement)",
          en: "Make software deployable (often automatically)",
        },
        hint: { fr: "Livraison continue.", en: "Continuous delivery." },
        explanation: {
          fr: "CD raccourcit le chemin du commit à la valeur utilisateur.",
          en: "CD shortens the path from commit to user value.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice CI/CD. Tu expliques pipelines, CI vs CD, artefacts Docker et environnements. Réponds en français.",
        en: "You are Nova, a CI/CD tutor. You explain pipelines, CI vs CD, Docker artifacts, and environments. Answer in English.",
      },
      introMessage: {
        fr: "Automatisons la confiance. Pipeline, deploy ou rollback ?",
        en: "Let's automate confidence. Pipeline, deploy, or rollback?",
      },
      topics: [
        { fr: "CI vs CD", en: "CI vs CD" },
        { fr: "Étapes d'un pipeline", en: "Pipeline stages" },
        { fr: "Artefacts et environnements", en: "Artifacts and environments" },
      ],
    },
  },
  {
    id: "sw-code-review-quality",
    unitId: "sw-delivery",
    title: { fr: "Revue de code & qualité", en: "Code review & quality" },
    description: {
      fr: "Donner et recevoir des reviews utiles ; standards de qualité durables.",
      en: "Give and receive useful reviews; lasting quality standards.",
    },
    icon: "award",
    estimatedMinutes: 17,
    xpReward: 23,
    goals: [
      {
        description: {
          fr: "Structurer une review constructive",
          en: "Structure a constructive review",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Séparer bloquant et suggestion",
          en: "Separate blockers from suggestions",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Lier qualité et maintenabilité",
          en: "Link quality to maintainability",
        },
        xpReward: 7,
      },
    ],
    sections: [
      {
        id: "sw-code-review-quality-s1",
        title: { fr: "But d'une review", en: "Purpose of a review" },
        body: {
          fr: "La revue de code partage la connaissance, attrape les bugs tôt et aligne le style. Ce n'est pas un tribunal : c'est un filet collectif.",
          en: "Code review shares knowledge, catches bugs early, and aligns style. It is not a trial: it is a collective safety net.",
        },
        callout: {
          fr: "Clé : critique le code, pas la personne.",
          en: "Key: critique the code, not the person.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-code-review-quality-s2",
        title: { fr: "Checklist reviewer", en: "Reviewer checklist" },
        body: {
          fr: "Correctness, lisibilité, tests, sécurité (secrets, injections), perf évidente, et alignement avec l'archi du projet.",
          en: "Correctness, readability, tests, security (secrets, injections), obvious perf, and alignment with project architecture.",
        },
        bullets: [
          { fr: "Le changement fait-il ce qu'il promet ?", en: "Does the change do what it claims?" },
          { fr: "Y a-t-il des tests pour les cas critiques ?", en: "Are there tests for critical cases?" },
          { fr: "Des secrets ou logs sensibles ?", en: "Secrets or sensitive logs?" },
        ],
      },
      {
        id: "sw-code-review-quality-s3",
        title: { fr: "Commenter utilement", en: "Comment usefully" },
        body: {
          fr: "Propose une alternative ou pose une question. Marque clairement `blocking` vs `nit`. Évite le ton passif-agressif.",
          en: "Suggest an alternative or ask a question. Clearly mark `blocking` vs `nit`. Avoid passive-aggressive tone.",
        },
        codeExample: {
          language: "markdown",
          code: `**blocking:** this can throw on empty input — guard or test?\n**nit:** rename \`d\` to \`durationMinutes\` for clarity`,
        },
        callout: {
          fr: "Astuce : un commentaire avec « pourquoi » convainc mieux qu'un « non ».",
          en: "Tip: a comment with \"why\" persuades better than a flat \"no\".",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-code-review-quality-s4",
        title: { fr: "Côté auteur", en: "Author side" },
        body: {
          fr: "PR petite, description claire, captures si UI, tests verts. Réponds aux commentaires ; résous ou explique. Ne prends pas le feedback personnellement.",
          en: "Small PR, clear description, screenshots if UI, green tests. Reply to comments; resolve or explain. Don't take feedback personally.",
        },
        callout: {
          fr: "Attention : une PR de 2000 lignes décourage la review sérieuse.",
          en: "Warning: a 2000-line PR discourages serious review.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-code-review-quality-s5",
        title: { fr: "Qualité au-delà du style", en: "Quality beyond style" },
        body: {
          fr: "Le formatage peut être automatisé (formatter/linter). Garde l'énergie humaine pour la conception, les edge cases et la clarté des abstractions.",
          en: "Formatting can be automated (formatter/linter). Save human energy for design, edge cases, and abstraction clarity.",
        },
      },
      {
        id: "sw-code-review-quality-s6",
        title: { fr: "Anti-patterns de review", en: "Review anti-patterns" },
        body: {
          fr: "Approve sans lire, bikeshedding infini sur les noms, exiger sa préférence stylistique hors guide d'équipe…",
          en: "Approve without reading, infinite bikeshedding on names, demanding personal style outside the team guide…",
        },
        callout: {
          fr: "Erreur : bloquer une PR pour un goût purement personnel.",
          en: "Mistake: blocking a PR for purely personal taste.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-code-review-quality-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Rédige deux commentaires.",
          en: "Write two comments.",
        },
        miniExercise: {
          prompt: {
            fr: "Une fonction `get` peut retourner `undefined` non géré (bug) et s'appelle `x`. Écris un blocking et un nit.",
            en: "A `get` function may return unhandled `undefined` (bug) and is named `x`. Write a blocking and a nit.",
          },
          hint: {
            fr: "Séparre risque réel et style.",
            en: "Separate real risk and style.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Code review", en: "Code review" },
        definition: {
          fr: "Examen collaboratif d'un changement avant fusion.",
          en: "Collaborative examination of a change before merge.",
        },
      },
      {
        term: { fr: "Blocking", en: "Blocking" },
        definition: {
          fr: "Commentaire qui doit être traité avant merge.",
          en: "Comment that must be addressed before merge.",
        },
      },
      {
        term: { fr: "Nit", en: "Nit" },
        definition: {
          fr: "Suggestion mineure non bloquante.",
          en: "Minor non-blocking suggestion.",
        },
      },
      {
        term: { fr: "Linter", en: "Linter" },
        definition: {
          fr: "Outil qui détecte problèmes de style et bugs simples.",
          en: "Tool that detects style issues and simple bugs.",
        },
      },
      {
        term: { fr: "Maintenabilité", en: "Maintainability" },
        definition: {
          fr: "Facilité à comprendre et faire évoluer le code.",
          en: "Ease of understanding and evolving the code.",
        },
      },
    ],
    activities: [
      {
        id: "sw-code-review-quality-q1",
        type: "multiple-choice",
        question: {
          fr: "Le but principal d'une review est…",
          en: "The main goal of a review is…",
        },
        options: [
          {
            fr: "Améliorer qualité et partage de connaissance",
            en: "Improve quality and share knowledge",
          },
          { fr: "Humilier l'auteur", en: "Humiliate the author" },
          { fr: "Remplacer tous les tests", en: "Replace all tests" },
          { fr: "Désactiver la CI", en: "Disable CI" },
        ],
        correctAnswer: {
          fr: "Améliorer qualité et partage de connaissance",
          en: "Improve quality and share knowledge",
        },
        hint: { fr: "Filet collectif.", en: "Collective safety net." },
        explanation: {
          fr: "La review renforce le code et l'équipe en même temps.",
          en: "Review strengthens both the code and the team.",
        },
      },
      {
        id: "sw-code-review-quality-q2",
        type: "multiple-choice",
        question: {
          fr: "Un commentaire blocking…",
          en: "A blocking comment…",
        },
        options: [
          {
            fr: "Doit être traité avant le merge",
            en: "Must be addressed before merge",
          },
          { fr: "Est purement décoratif", en: "Is purely decorative" },
          { fr: "Remplace le product owner", en: "Replaces the product owner" },
          { fr: "Est interdit sur GitHub", en: "Is forbidden on GitHub" },
        ],
        correctAnswer: {
          fr: "Doit être traité avant le merge",
          en: "Must be addressed before merge",
        },
        hint: { fr: "Risque réel.", en: "Real risk." },
        explanation: {
          fr: "On réserve blocking aux problèmes de correction, sécu, design critique.",
          en: "Reserve blocking for correctness, security, critical design issues.",
        },
      },
      {
        id: "sw-code-review-quality-q3",
        type: "multiple-choice",
        question: {
          fr: "Pourquoi garder des PR petites ?",
          en: "Why keep PRs small?",
        },
        options: [
          {
            fr: "Pour permettre une review attentive",
            en: "To allow careful review",
          },
          { fr: "Parce que Git refuse les grandes", en: "Because Git rejects large ones" },
          { fr: "Pour cacher les bugs", en: "To hide bugs" },
          { fr: "Pour éviter les messages de commit", en: "To avoid commit messages" },
        ],
        correctAnswer: {
          fr: "Pour permettre une review attentive",
          en: "To allow careful review",
        },
        hint: { fr: "Charge cognitive.", en: "Cognitive load." },
        explanation: {
          fr: "Moins de diff = plus de bugs trouvés et plus de feedback utile.",
          en: "Less diff = more bugs found and more useful feedback.",
        },
      },
      {
        id: "sw-code-review-quality-q4",
        type: "multiple-choice",
        question: {
          fr: "Le formatage devrait surtout être…",
          en: "Formatting should mostly be…",
        },
        options: [
          {
            fr: "Automatisé (formatter / linter)",
            en: "Automated (formatter / linter)",
          },
          { fr: "Débattu pendant 2 heures sur chaque PR", en: "Debated for 2 hours on every PR" },
          { fr: "Ignoré à jamais", en: "Ignored forever" },
          { fr: "Fait uniquement en prod", en: "Done only in prod" },
        ],
        correctAnswer: {
          fr: "Automatisé (formatter / linter)",
          en: "Automated (formatter / linter)",
        },
        hint: { fr: "Économise l'attention humaine.", en: "Save human attention." },
        explanation: {
          fr: "Les humains reviewent le fond ; les machines le style mécanique.",
          en: "Humans review substance; machines handle mechanical style.",
        },
      },
      {
        id: "sw-code-review-quality-q5",
        type: "multiple-choice",
        question: {
          fr: "Approve sans lire…",
          en: "Approving without reading…",
        },
        options: [
          {
            fr: "Annule la valeur de la review",
            en: "Cancels the value of the review",
          },
          { fr: "Est une bonne pratique agile", en: "Is a good agile practice" },
          { fr: "Améliore la couverture", en: "Improves coverage" },
          { fr: "Est exigé par SOLID", en: "Is required by SOLID" },
        ],
        correctAnswer: {
          fr: "Annule la valeur de la review",
          en: "Cancels the value of the review",
        },
        hint: { fr: "Fausse confiance.", en: "False confidence." },
        explanation: {
          fr: "Un approve est une responsabilité, pas un bouton social.",
          en: "An approval is a responsibility, not a social button.",
        },
      },
      {
        id: "sw-code-review-quality-q6",
        type: "multiple-choice",
        question: {
          fr: "Un bon ton de review…",
          en: "A good review tone…",
        },
        options: [
          {
            fr: "Est respectueux et centré sur le code",
            en: "Is respectful and focused on the code",
          },
          { fr: "Attaque l'intelligence de l'auteur", en: "Attacks the author's intelligence" },
          { fr: "Utilise uniquement des majuscules", en: "Uses only uppercase" },
          { fr: "Refuse toute question", en: "Refuses any question" },
        ],
        correctAnswer: {
          fr: "Est respectueux et centré sur le code",
          en: "Is respectful and focused on the code",
        },
        hint: { fr: "Psychologie d'équipe.", en: "Team psychology." },
        explanation: {
          fr: "Le respect rend le feedback audible et actionnable.",
          en: "Respect makes feedback hearable and actionable.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice revue de code. Tu enseignes checklists, blocking vs nit, ton constructif et qualité. Réponds en français.",
        en: "You are Nova, a code-review tutor. You teach checklists, blocking vs nit, constructive tone, and quality. Answer in English.",
      },
      introMessage: {
        fr: "Reviews utiles et bienveillantes. Tu es reviewer ou auteur aujourd'hui ?",
        en: "Useful, kind reviews. Are you reviewer or author today?",
      },
      topics: [
        { fr: "Checklist de review", en: "Review checklist" },
        { fr: "Blocking vs nit", en: "Blocking vs nit" },
        { fr: "PR petites et claires", en: "Small clear PRs" },
      ],
    },
  },
  {
    id: "sw-agile",
    unitId: "sw-delivery",
    title: { fr: "Agile & livraison itérative", en: "Agile & iterative delivery" },
    description: {
      fr: "Sprints, feedback utilisateur et amélioration continue sans jargon inutile.",
      en: "Sprints, user feedback, and continuous improvement without useless jargon.",
    },
    icon: "flame",
    estimatedMinutes: 16,
    xpReward: 22,
    goals: [
      {
        description: {
          fr: "Expliquer l'idée derrière Agile",
          en: "Explain the idea behind Agile",
        },
        xpReward: 7,
      },
      {
        description: {
          fr: "Décrire un sprint et une user story",
          en: "Describe a sprint and a user story",
        },
        xpReward: 8,
      },
      {
        description: {
          fr: "Relier feedback et itération",
          en: "Connect feedback and iteration",
        },
        xpReward: 7,
      },
    ],
    sections: [
      {
        id: "sw-agile-s1",
        title: { fr: "Livrer de la valeur tôt", en: "Deliver value early" },
        body: {
          fr: "Agile privilégie des livraisons fréquentes de valeur réelle plutôt qu'un grand bang après des mois. On apprend du terrain et on ajuste.",
          en: "Agile favors frequent delivery of real value over a big bang after months. You learn from the field and adjust.",
        },
        analogy: {
          fr: "Plutôt que construire tout le restaurant avant le premier client, ouvre un food truck et itère.",
          en: "Rather than building the whole restaurant before the first customer, open a food truck and iterate.",
        },
      },
      {
        id: "sw-agile-s2",
        title: { fr: "Sprint et cadence", en: "Sprint and cadence" },
        body: {
          fr: "Un sprint est une période courte (souvent 1–2 semaines) avec un objectif clair. À la fin : quelque chose de démontrable, pas seulement des tâches à moitié faites.",
          en: "A sprint is a short period (often 1–2 weeks) with a clear goal. At the end: something demonstrable, not just half-done tasks.",
        },
        callout: {
          fr: "Clé : un incrément potentiellement livrable à chaque sprint.",
          en: "Key: a potentially shippable increment each sprint.",
        },
        calloutKind: "key",
      },
      {
        id: "sw-agile-s3",
        title: { fr: "User stories", en: "User stories" },
        body: {
          fr: "Format classique : En tant que… je veux… afin de…. Les critères d'acceptation précisent « terminé ». Découpe les gros morceaux.",
          en: "Classic format: As a… I want… so that…. Acceptance criteria define \"done\". Split big chunks.",
        },
        codeExample: {
          language: "markdown",
          code: `As a learner, I want to see my XP after a lesson\nso that I feel progress.\nAcceptance: XP updates on completion screen.`,
        },
      },
      {
        id: "sw-agile-s4",
        title: { fr: "Feedback et rétrospective", en: "Feedback and retrospective" },
        body: {
          fr: "Demo aux parties prenantes + rétro d'équipe : qu'est-ce qui a bien marché ? Qu'améliore-on ? Sans action, la rétro est du théâtre.",
          en: "Stakeholder demo + team retro: what worked? What do we improve? Without action, retro is theater.",
        },
        callout: {
          fr: "Astuce : une seule amélioration concrète par rétro suffit souvent.",
          en: "Tip: one concrete improvement per retro is often enough.",
        },
        calloutKind: "tip",
      },
      {
        id: "sw-agile-s5",
        title: { fr: "Prioriser le backlog", en: "Prioritize the backlog" },
        body: {
          fr: "Tout ne se fait pas. On ordonne par valeur, risque et apprentissage. Dire non (ou « pas maintenant ») est une compétence produit.",
          en: "Not everything gets done. Order by value, risk, and learning. Saying no (or \"not now\") is a product skill.",
        },
        callout: {
          fr: "Attention : un backlog infini non priorisé n'est pas un plan.",
          en: "Warning: an infinite unprioritized backlog is not a plan.",
        },
        calloutKind: "warning",
      },
      {
        id: "sw-agile-s6",
        title: { fr: "Agile ≠ chaos", en: "Agile ≠ chaos" },
        body: {
          fr: "Pas de process du tout n'est pas Agile. Des cérémonies sans sens non plus. Cherche la boucle courte : construire → mesurer → apprendre.",
          en: "No process at all is not Agile. Meaningless ceremonies aren't either. Seek the short loop: build → measure → learn.",
        },
        callout: {
          fr: "Erreur : multiplier les meetings Agile sans jamais livrer.",
          en: "Mistake: multiplying Agile meetings without ever shipping.",
        },
        calloutKind: "mistake",
      },
      {
        id: "sw-agile-s7",
        title: { fr: "Mini-exercice", en: "Mini exercise" },
        body: {
          fr: "Écris une story découpée.",
          en: "Write a sliced story.",
        },
        miniExercise: {
          prompt: {
            fr: "« Refondre tout le profil utilisateur » est trop gros. Propose 2 stories plus petites.",
            en: "\"Rebuild the whole user profile\" is too big. Propose 2 smaller stories.",
          },
          hint: {
            fr: "Une valeur visible à la fois.",
            en: "One visible value at a time.",
          },
        },
      },
    ],
    vocabulary: [
      {
        term: { fr: "Sprint", en: "Sprint" },
        definition: {
          fr: "Itération courte avec un objectif de livraison.",
          en: "Short iteration with a delivery goal.",
        },
      },
      {
        term: { fr: "User story", en: "User story" },
        definition: {
          fr: "Besoin utilisateur formulé pour guider le développement.",
          en: "User need phrased to guide development.",
        },
      },
      {
        term: { fr: "Backlog", en: "Backlog" },
        definition: {
          fr: "Liste ordonnée de travail à faire.",
          en: "Ordered list of work to do.",
        },
      },
      {
        term: { fr: "Rétrospective", en: "Retrospective" },
        definition: {
          fr: "Moment d'équipe pour améliorer le processus.",
          en: "Team moment to improve the process.",
        },
      },
      {
        term: { fr: "Incrément", en: "Increment" },
        definition: {
          fr: "Ajout de valeur potentiellement livrable.",
          en: "Potentially shippable addition of value.",
        },
      },
    ],
    activities: [
      {
        id: "sw-agile-q1",
        type: "multiple-choice",
        question: {
          fr: "Agile privilégie surtout…",
          en: "Agile mainly favors…",
        },
        options: [
          {
            fr: "Des livraisons fréquentes et du feedback",
            en: "Frequent delivery and feedback",
          },
          {
            fr: "Un plan figé sur 3 ans sans ajustement",
            en: "A frozen 3-year plan with no adjustment",
          },
          { fr: "Zéro interaction avec les utilisateurs", en: "Zero user interaction" },
          { fr: "Livrer uniquement à la fin du projet", en: "Shipping only at project end" },
        ],
        correctAnswer: {
          fr: "Des livraisons fréquentes et du feedback",
          en: "Frequent delivery and feedback",
        },
        hint: { fr: "Apprentissage rapide.", en: "Fast learning." },
        explanation: {
          fr: "La boucle courte réduit le risque de construire le mauvais produit.",
          en: "The short loop reduces the risk of building the wrong product.",
        },
      },
      {
        id: "sw-agile-q2",
        type: "multiple-choice",
        question: {
          fr: "À la fin d'un sprint, on vise…",
          en: "At the end of a sprint, you aim for…",
        },
        options: [
          {
            fr: "Un incrément démontrable / livrable",
            en: "A demonstrable / shippable increment",
          },
          { fr: "Uniquement des slides", en: "Only slides" },
          { fr: "De supprimer le backlog", en: "Deleting the backlog" },
          { fr: "D'interdire les tests", en: "Forbidding tests" },
        ],
        correctAnswer: {
          fr: "Un incrément démontrable / livrable",
          en: "A demonstrable / shippable increment",
        },
        hint: { fr: "Valeur visible.", en: "Visible value." },
        explanation: {
          fr: "Le sprint produit un résultat montrable, pas seulement de l'occupation.",
          en: "The sprint produces a showable result, not just busyness.",
        },
      },
      {
        id: "sw-agile-q3",
        type: "multiple-choice",
        question: {
          fr: "Une user story décrit…",
          en: "A user story describes…",
        },
        options: [
          {
            fr: "Un besoin utilisateur et sa valeur",
            en: "A user need and its value",
          },
          { fr: "La configuration DNS", en: "DNS configuration" },
          { fr: "Le schéma électrique du bureau", en: "Office electrical wiring" },
          { fr: "Le BIOS de la machine", en: "The machine BIOS" },
        ],
        correctAnswer: {
          fr: "Un besoin utilisateur et sa valeur",
          en: "A user need and its value",
        },
        hint: { fr: "En tant que / je veux / afin de.", en: "As a / I want / so that." },
        explanation: {
          fr: "La story centre le travail sur le bénéfice utilisateur.",
          en: "The story centers work on user benefit.",
        },
      },
      {
        id: "sw-agile-q4",
        type: "multiple-choice",
        question: {
          fr: "Une rétrospective utile…",
          en: "A useful retrospective…",
        },
        options: [
          {
            fr: "Débouche sur des actions d'amélioration",
            en: "Leads to improvement actions",
          },
          { fr: "Est uniquement une plainte sans suite", en: "Is only complaining with no follow-up" },
          { fr: "Remplace le code review", en: "Replaces code review" },
          { fr: "Est secrète pour cacher les bugs", en: "Is secret to hide bugs" },
        ],
        correctAnswer: {
          fr: "Débouche sur des actions d'amélioration",
          en: "Leads to improvement actions",
        },
        hint: { fr: "Inspect & adapt.", en: "Inspect & adapt." },
        explanation: {
          fr: "Sans actions, la rétro ne change rien.",
          en: "Without actions, the retro changes nothing.",
        },
      },
      {
        id: "sw-agile-q5",
        type: "multiple-choice",
        question: {
          fr: "Prioriser le backlog sert à…",
          en: "Prioritizing the backlog helps…",
        },
        options: [
          {
            fr: "Faire d'abord ce qui apporte le plus de valeur / apprentissage",
            en: "Do first what brings the most value / learning",
          },
          { fr: "Tout faire en même temps", en: "Do everything at once" },
          { fr: "Éviter les utilisateurs", en: "Avoid users" },
          { fr: "Interdire les sprints", en: "Forbid sprints" },
        ],
        correctAnswer: {
          fr: "Faire d'abord ce qui apporte le plus de valeur / apprentissage",
          en: "Do first what brings the most value / learning",
        },
        hint: { fr: "Ordre = stratégie.", en: "Order = strategy." },
        explanation: {
          fr: "Le temps est limité ; l'ordre détermine l'impact.",
          en: "Time is limited; order determines impact.",
        },
      },
      {
        id: "sw-agile-q6",
        type: "multiple-choice",
        question: {
          fr: "Agile sans livraison…",
          en: "Agile without delivery…",
        },
        options: [
          {
            fr: "Rate l'essentiel : apprendre en produisant de la valeur",
            en: "Misses the point: learn by producing value",
          },
          { fr: "Est le but final", en: "Is the final goal" },
          { fr: "Remplace le besoin de feedback", en: "Replaces the need for feedback" },
          { fr: "Garantit zéro bug", en: "Guarantees zero bugs" },
        ],
        correctAnswer: {
          fr: "Rate l'essentiel : apprendre en produisant de la valeur",
          en: "Misses the point: learn by producing value",
        },
        hint: { fr: "Cérémonies ≠ résultats.", en: "Ceremonies ≠ results." },
        explanation: {
          fr: "Les rituels servent la livraison, pas l'inverse.",
          en: "Rituals serve delivery, not the other way around.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: {
        fr: "Tu es Nova, tutrice Agile. Tu expliques sprints, stories, backlog, feedback et rétros sans jargon inutile. Réponds en français.",
        en: "You are Nova, an Agile tutor. You explain sprints, stories, backlog, feedback, and retros without useless jargon. Answer in English.",
      },
      introMessage: {
        fr: "Livrons de la valeur par petits pas. Sprint, story ou rétro ?",
        en: "Let's ship value in small steps. Sprint, story, or retro?",
      },
      topics: [
        { fr: "Sprints et incréments", en: "Sprints and increments" },
        { fr: "User stories", en: "User stories" },
        { fr: "Feedback et rétrospective", en: "Feedback and retrospective" },
      ],
    },
  },
];
