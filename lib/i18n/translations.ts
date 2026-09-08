export type Locale = "fr" | "en";

export type LocalizedString = { fr: string; en: string };

export function localize(
  value: LocalizedString | string,
  locale: Locale
): string {
  if (typeof value === "string") return value;
  return value[locale] ?? value.fr;
}

export type TranslationKey =
  | "tabs.home"
  | "tabs.learn"
  | "tabs.challenges"
  | "tabs.lab"
  | "tabs.profile"
  | "brand.name"
  | "brand.tagline"
  | "brand.subtitle"
  | "onboarding.guest"
  | "onboarding.createAccount"
  | "auth.welcomeBack"
  | "auth.continueJourney"
  | "auth.startJourney"
  | "auth.guest"
  | "auth.signIn"
  | "auth.signUp"
  | "auth.noAccount"
  | "auth.hasAccount"
  | "trackSelect.title"
  | "trackSelect.subtitle"
  | "trackSelect.search"
  | "trackSelect.popular"
  | "trackSelect.continue"
  | "trackSelect.comingSoon"
  | "home.greeting"
  | "home.dailyGoal"
  | "home.continueLearning"
  | "home.todaysPlan"
  | "home.viewModule"
  | "home.xpToday"
  | "home.nextLessons"
  | "home.level"
  | "home.startLesson"
  | "home.review"
  | "home.upNext"
  | "home.dailyChallenge"
  | "home.dailyChallengeDone"
  | "home.reviews"
  | "home.reviewsEmpty"
  | "home.progress"
  | "home.notifications"
  | "home.notificationsEmpty"
  | "home.notif.subtitle"
  | "home.notif.emptyHint"
  | "home.notif.all"
  | "home.notif.lesson"
  | "home.notif.xp"
  | "home.notif.quizMiss"
  | "home.notif.challenge"
  | "home.notif.lab"
  | "home.notif.tip"
  | "learn.title"
  | "learn.lessons"
  | "learn.practice"
  | "learn.noTrack"
  | "learn.unitProgress"
  | "learn.modulePercent"
  | "learn.selectModule"
  | "learn.moduleComingSoon"
  | "learn.continue"
  | "learn.continueMeta"
  | "learn.filterAll"
  | "learn.filterTodo"
  | "learn.filterDone"
  | "learn.lockedHint"
  | "learn.timeLeft"
  | "learn.moduleXp"
  | "learn.statLessons"
  | "learn.statXp"
  | "learn.statTime"
  | "learn.reviews"
  | "learn.relatedChallenge"
  | "learn.relatedLab"
  | "learn.moduleComplete"
  | "learn.nextModule"
  | "challenges.subtitle"
  | "challenges.allSkills"
  | "challenges.done"
  | "challenges.finish"
  | "challenges.filterAll"
  | "challenges.statDone"
  | "challenges.statXpLeft"
  | "challenges.xpAvailable"
  | "challenges.statDaily"
  | "challenges.statDailyDone"
  | "challenges.statDailyTodo"
  | "challenges.replay"
  | "challenges.comeBackTomorrow"
  | "challenges.lockedHint"
  | "challenges.emptyFilter"
  | "challenges.resultTitle"
  | "challenges.resultScore"
  | "challenges.resultXp"
  | "challenges.progress"
  | "challenges.retry"
  | "challenges.timer"
  | "challenges.timeUp"
  | "challenges.timeUpHint"
  | "lab.subtitle"
  | "lab.placeholder"
  | "lab.tutor"
  | "lab.complete"
  | "lab.featured"
  | "lab.inProgress"
  | "lab.available"
  | "lab.completed"
  | "lab.start"
  | "lab.continue"
  | "lab.replay"
  | "lab.progress"
  | "lab.briefStart"
  | "lab.suggestHint"
  | "lab.suggested"
  | "lab.lockedHint"
  | "lab.emptyFilter"
  | "lab.resultTitle"
  | "lab.backToList"
  | "lab.xpEarned"
  | "lab.filterAll"
  | "lab.xpAvailable"
  | "lab.xpLabel"
  | "lab.difficulty.easy"
  | "lab.difficulty.medium"
  | "lab.difficulty.hard"
  | "ai.title"
  | "ai.subtitle"
  | "ai.online"
  | "ai.start"
  | "chat.title"
  | "chat.placeholder"
  | "chat.tutor"
  | "profile.title"
  | "profile.learningTrack"
  | "profile.changeTrack"
  | "profile.dayStreak"
  | "profile.totalXp"
  | "profile.lessons"
  | "profile.language"
  | "profile.languageFr"
  | "profile.languageEn"
  | "profile.signOut"
  | "profile.version"
  | "profile.moduleProgress"
  | "profile.achievements"
  | "profile.settings"
  | "profile.guest"
  | "profile.darkMode"
  | "profile.sound"
  | "profile.notifications"
  | "profile.languageToggle"
  | "profile.languageSubtitle"
  | "profile.rank"
  | "profile.nextRank"
  | "profile.calendar"
  | "profile.calendarHint"
  | "profile.stats"
  | "profile.skills"
  | "profile.badges"
  | "profile.badgesUnlocked"
  | "profile.badge.streak7"
  | "profile.badge.xp500"
  | "profile.badge.lessons10"
  | "profile.badge.challenges5"
  | "profile.badge.labs3"
  | "profile.badge.cert1"
  | "profile.challengesDone"
  | "profile.activeDays"
  | "profile.certsEntry"
  | "profile.myCerts"
  | "profile.certsPreparing"
  | "profile.certsTodo"
  | "profile.certsObtained"
  | "profile.certsEmpty"
  | "profile.certsExplore"
  | "profile.subtitle"
  | "profile.createAccount"
  | "profile.activityLink"
  | "profile.activitySubtitle"
  | "profile.certsSummary"
  | "profile.noAccount"
  | "profile.account"
  | "profile.shortcuts"
  | "profile.changePhoto"
  | "profile.photoPermission"
  | "certs.title"
  | "certs.subtitle"
  | "certs.search"
  | "certs.filterAll"
  | "certs.finderCard"
  | "certs.finderSub"
  | "certs.view"
  | "certs.official"
  | "certs.addPath"
  | "certs.statusTodo"
  | "certs.statusPreparing"
  | "certs.statusObtained"
  | "certs.progress"
  | "certs.markObtained"
  | "certs.why"
  | "certs.skills"
  | "certs.empty"
  | "certs.finderTitle"
  | "certs.finderDomain"
  | "certs.finderLevel"
  | "certs.finderBudget"
  | "certs.finderGoal"
  | "certs.recommend"
  | "certs.level.beginner"
  | "certs.level.intermediate"
  | "certs.level.advanced"
  | "certs.level.expert"
  | "certs.domain.cybersecurity"
  | "certs.domain.cloud"
  | "certs.domain.networking"
  | "certs.domain.devops"
  | "certs.domain.programming"
  | "certs.domain.data"
  | "certs.domain.ai"
  | "certs.price.free"
  | "certs.price.under100"
  | "certs.price.100to300"
  | "certs.price.over300"
  | "certs.goal.first-job"
  | "certs.goal.specialize"
  | "certs.goal.career-growth"
  | "certs.goal.recognized-cert"
  | "certs.goal.deepen"
  | "certs.next"
  | "certs.label.level"
  | "certs.label.price"
  | "certs.label.exam"
  | "certs.label.validity"
  | "certs.label.format"
  | "certs.label.prep"
  | "certs.label.difficulty"
  | "certs.label.description"
  | "certs.label.prerequisites"
  | "certs.label.status"
  | "achieve.first"
  | "achieve.firstDesc"
  | "achieve.roll"
  | "achieve.rollDesc"
  | "achieve.week"
  | "achieve.weekDesc"
  | "achieve.goal"
  | "achieve.goalDesc"
  | "lesson.intro"
  | "lesson.objectives"
  | "lesson.start"
  | "lesson.next"
  | "lesson.quiz"
  | "lesson.check"
  | "lesson.correct"
  | "lesson.incorrect"
  | "lesson.continue"
  | "lesson.complete"
  | "lesson.score"
  | "lesson.xpEarned"
  | "lesson.finish"
  | "lesson.vocabulary"
  | "lesson.activities"
  | "lesson.inProgress"
  | "lesson.minutes"
  | "lesson.questions"
  | "lesson.phaseIntro"
  | "lesson.phaseContent"
  | "lesson.phaseVocab"
  | "lesson.phaseQuiz"
  | "lesson.phaseDone"
  | "lesson.stepOf"
  | "lesson.keyTakeaway"
  | "lesson.analogy"
  | "lesson.miniExercise"
  | "lesson.commonMistake"
  | "lesson.warning"
  | "lesson.tip"
  | "lesson.nextLesson"
  | "lesson.explanation"
  | "lesson.why"
  | "challenges.summary"
  | "challenges.featured"
  | "challenges.available"
  | "challenges.completedSection"
  | "challenges.difficulty.easy"
  | "challenges.difficulty.medium"
  | "challenges.difficulty.hard"
  | "challenges.start"
  | "challenges.review"
  | "profile.level"
  | "profile.summary"
  | "profile.progression"
  | "profile.recentActivity"
  | "profile.labsDone"
  | "common.back"
  | "common.loading";

export const fr: Record<TranslationKey, string> = {
  "tabs.home": "Accueil",
  "tabs.learn": "Apprendre",
  "tabs.challenges": "Défis",
  "tabs.lab": "Lab",
  "tabs.profile": "Profil",
  "brand.name": "Tech",
  "brand.tagline": "Le Duolingo de la tech.",
  "brand.subtitle":
    "Leçons courtes, quiz et pratique — commence par les réseaux.",
  "onboarding.guest": "Tester sans connexion",
  "onboarding.createAccount": "Créer un compte",
  "auth.welcomeBack": "Bon retour !",
  "auth.continueJourney": "Continue ton parcours tech",
  "auth.startJourney": "Commence ton parcours tech aujourd’hui",
  "auth.guest": "Accéder sans connexion",
  "auth.signIn": "Se connecter",
  "auth.signUp": "S’inscrire",
  "auth.noAccount": "Pas encore de compte ? ",
  "auth.hasAccount": "Déjà un compte ? ",
  "trackSelect.title": "Choisis ton parcours",
  "trackSelect.subtitle": "Un module à la fois, comme Duolingo.",
  "trackSelect.search": "Rechercher un parcours",
  "trackSelect.popular": "Populaires",
  "trackSelect.continue": "Continuer",
  "trackSelect.comingSoon": "Bientôt",
  "home.greeting": "Salut",
  "home.dailyGoal": "Objectif du jour",
  "home.continueLearning": "Continuer",
  "home.todaysPlan": "Plan du jour",
  "home.viewModule": "Voir le module",
  "home.xpToday": "XP du jour",
  "home.nextLessons": "Prochaines leçons",
  "home.level": "Niv. {level}",
  "home.startLesson": "Commencer",
  "home.review": "Revoir {count} notions",
  "home.upNext": "À suivre",
  "home.dailyChallenge": "Défi du jour",
  "home.dailyChallengeDone": "Défi du jour terminé",
  "home.reviews": "Révisions",
  "home.reviewsEmpty": "Rien à revoir pour l’instant",
  "home.progress": "Progression",
  "home.notifications": "Activité récente",
  "home.notificationsEmpty": "Aucune activité pour l’instant",
  "home.notif.subtitle": "Ton fil d’apprentissage",
  "home.notif.emptyHint": "Termine une leçon, un défi ou un lab pour remplir ce fil.",
  "home.notif.all": "Tous",
  "home.notif.lesson": "Leçons",
  "home.notif.xp": "XP",
  "home.notif.quizMiss": "Quiz",
  "home.notif.challenge": "Défis",
  "home.notif.lab": "Labs",
  "home.notif.tip": "Astuces",
  "learn.title": "Apprendre",
  "learn.lessons": "Leçons",
  "learn.practice": "Pratique",
  "learn.noTrack": "Aucun parcours sélectionné",
  "learn.unitProgress": "Module · {done}/{total} leçons",
  "learn.modulePercent": "{percent} % du module",
  "learn.selectModule": "Choisir un module",
  "learn.moduleComingSoon": "Bientôt disponible",
  "learn.continue": "Continuer",
  "learn.continueMeta": "{minutes} min · {xp} XP",
  "learn.filterAll": "Toutes",
  "learn.filterTodo": "À faire",
  "learn.filterDone": "Terminées",
  "learn.lockedHint": "Termine la leçon précédente",
  "learn.timeLeft": "{minutes} min restantes",
  "learn.moduleXp": "{earned}/{total} XP",
  "learn.statLessons": "Leçons",
  "learn.statXp": "XP",
  "learn.statTime": "Restant",
  "learn.reviews": "Révisions du module",
  "learn.relatedChallenge": "Défi lié",
  "learn.relatedLab": "Lab lié",
  "learn.moduleComplete": "Module terminé",
  "learn.nextModule": "Module suivant",
  "challenges.subtitle": "Gagne des XP bonus par parcours",
  "challenges.allSkills": "Toutes",
  "challenges.done": "Réussi",
  "challenges.finish": "Terminer",
  "challenges.filterAll": "Tous",
  "challenges.statDone": "Faits",
  "challenges.statXpLeft": "XP restants",
  "challenges.xpAvailable": "{xp} XP",
  "challenges.statDaily": "Du jour",
  "challenges.statDailyDone": "Fait",
  "challenges.statDailyTodo": "À faire",
  "challenges.replay": "Rejouer",
  "challenges.comeBackTomorrow": "Reviens demain",
  "challenges.lockedHint": "Termine une leçon du parcours pour débloquer",
  "challenges.emptyFilter": "Aucun défi pour ce parcours",
  "challenges.resultTitle": "Résultat",
  "challenges.resultScore": "{score} / {total}",
  "challenges.resultXp": "+{xp} XP",
  "challenges.progress": "{current} / {total}",
  "challenges.retry": "Réessayer",
  "challenges.timer": "{seconds}s",
  "challenges.timeUp": "Temps écoulé",
  "challenges.timeUpHint": "Le chronomètre est tombé à zéro — défi perdu.",
  "lab.subtitle": "Labs guidés avec réponses suggérées",
  "lab.placeholder": "Ta réponse…",
  "lab.tutor": "Tuteur",
  "lab.complete": "Lab terminé · +{xp} XP",
  "lab.featured": "Recommandé",
  "lab.inProgress": "En cours",
  "lab.available": "Disponibles",
  "lab.completed": "Terminés",
  "lab.start": "Lancer",
  "lab.continue": "Continuer",
  "lab.replay": "Rejouer",
  "lab.progress": "{current}/{total}",
  "lab.briefStart": "Commencer",
  "lab.suggestHint": "Les pistes guidées sont le chemin prévu",
  "lab.suggested": "Pistes guidées",
  "lab.lockedHint": "Termine une leçon du parcours pour débloquer",
  "lab.emptyFilter": "Aucun lab pour ce parcours",
  "lab.resultTitle": "Lab terminé",
  "lab.backToList": "Retour",
  "lab.xpEarned": "+{xp} XP",
  "lab.filterAll": "Tous",
  "lab.xpAvailable": "{xp} XP restants",
  "lab.xpLabel": "+{xp} XP",
  "lab.difficulty.easy": "Facile",
  "lab.difficulty.medium": "Moyen",
  "lab.difficulty.hard": "Difficile",
  "ai.title": "Prof IA",
  "ai.subtitle": "Révise les fondamentaux avec Nova",
  "ai.online": "Nova en ligne",
  "ai.start": "Commencer la leçon",
  "chat.title": "Chat",
  "chat.placeholder": "Écris ton message…",
  "chat.tutor": "Tuteur",
  "profile.title": "Profil",
  "profile.learningTrack": "Parcours",
  "profile.changeTrack": "Changer de parcours",
  "profile.dayStreak": "Série",
  "profile.totalXp": "XP total",
  "profile.lessons": "Leçons",
  "profile.language": "Langue de l’app",
  "profile.languageFr": "Français",
  "profile.languageEn": "English",
  "profile.signOut": "Se déconnecter",
  "profile.version": "Tech · v1.0.0",
  "profile.moduleProgress": "Progression du module",
  "profile.achievements": "Succès",
  "profile.settings": "Réglages",
  "profile.guest": "Invité",
  "profile.darkMode": "Mode sombre",
  "profile.sound": "Sons",
  "profile.notifications": "Notifications",
  "profile.languageToggle": "English",
  "profile.languageSubtitle": "Interface · {lang}",
  "profile.rank": "Rang",
  "profile.nextRank": "Prochain · {rank}",
  "profile.calendar": "Calendrier d’activité",
  "profile.calendarHint": "Plus la grille est remplie, plus ta série tient",
  "profile.stats": "Statistiques",
  "profile.skills": "Compétences",
  "profile.badges": "Badges",
  "profile.badgesUnlocked": "{done} / {total} débloqués",
  "profile.badge.streak7": "Série 7 jours",
  "profile.badge.xp500": "500 XP",
  "profile.badge.lessons10": "10 leçons",
  "profile.badge.challenges5": "5 défis",
  "profile.badge.labs3": "3 labs",
  "profile.badge.cert1": "1ère certif",
  "profile.challengesDone": "Défis",
  "profile.activeDays": "Jours actifs",
  "profile.certsEntry": "Certifications",
  "profile.myCerts": "Mes certifications",
  "profile.certsPreparing": "En préparation",
  "profile.certsTodo": "À faire",
  "profile.certsObtained": "Obtenues",
  "profile.certsEmpty": "Ajoute ta première certification pour construire ton parcours professionnel.",
  "profile.certsExplore": "Explorer les certifications",
  "profile.subtitle": "Compte, progression et préférences",
  "profile.createAccount": "Créer un compte",
  "profile.activityLink": "Activité",
  "profile.activitySubtitle": "Voir ton fil d’activité",
  "profile.certsSummary": "{preparing} en cours · {obtained} obtenue(s)",
  "profile.noAccount": "Sans compte",
  "profile.account": "Compte",
  "profile.shortcuts": "Raccourcis",
  "profile.changePhoto": "Changer la photo",
  "profile.photoPermission": "Autorise l’accès à la galerie pour choisir une photo.",
  "certs.title": "Certifications",
  "certs.subtitle": "Explore les certifications les plus reconnues dans la tech.",
  "certs.search": "Rechercher une certification…",
  "certs.filterAll": "Toutes",
  "certs.finderCard": "Trouver ma certification",
  "certs.finderSub": "Découvre les certifications adaptées à ton objectif.",
  "certs.view": "Voir",
  "certs.official": "Voir la certification officielle",
  "certs.addPath": "Ajouter à mon parcours",
  "certs.statusTodo": "À faire",
  "certs.statusPreparing": "En préparation",
  "certs.statusObtained": "Obtenue",
  "certs.progress": "Progression",
  "certs.markObtained": "Marquer comme obtenue ?",
  "certs.why": "Pourquoi la passer ?",
  "certs.skills": "Compétences couvertes",
  "certs.empty": "Aucune certification ne correspond",
  "certs.finderTitle": "Trouver ma certification",
  "certs.finderDomain": "Quel domaine t’intéresse ?",
  "certs.finderLevel": "Quel est ton niveau ?",
  "certs.finderBudget": "Quel est ton budget ?",
  "certs.finderGoal": "Quel est ton objectif ?",
  "certs.recommend": "Nous te recommandons",
  "certs.level.beginner": "Débutant",
  "certs.level.intermediate": "Intermédiaire",
  "certs.level.advanced": "Avancé",
  "certs.level.expert": "Expert",
  "certs.domain.cybersecurity": "Cybersecurity",
  "certs.domain.cloud": "Cloud",
  "certs.domain.networking": "Networking",
  "certs.domain.devops": "DevOps",
  "certs.domain.programming": "Programming",
  "certs.domain.data": "Data",
  "certs.domain.ai": "AI",
  "certs.price.free": "Gratuit",
  "certs.price.under100": "< 100 €",
  "certs.price.100to300": "100–300 €",
  "certs.price.over300": "300 €+",
  "certs.goal.first-job": "Trouver mon premier emploi",
  "certs.goal.specialize": "Me spécialiser",
  "certs.goal.career-growth": "Progresser en entreprise",
  "certs.goal.recognized-cert": "Préparer une certification reconnue",
  "certs.goal.deepen": "Approfondir mes connaissances",
  "certs.next": "Continuer",
  "certs.label.level": "Niveau",
  "certs.label.price": "Prix",
  "certs.label.exam": "Examen",
  "certs.label.validity": "Validité",
  "certs.label.format": "Format",
  "certs.label.prep": "Préparation",
  "certs.label.difficulty": "Difficulté",
  "certs.label.description": "Description",
  "certs.label.prerequisites": "Prérequis",
  "certs.label.status": "Statut",
  "achieve.first": "Premiers pas",
  "achieve.firstDesc": "Termine ta première leçon",
  "achieve.roll": "Sur la lancée",
  "achieve.rollDesc": "Termine 3 leçons",
  "achieve.week": "Guerrier de la semaine",
  "achieve.weekDesc": "Maintiens une série de 7 jours",
  "achieve.goal": "Objectif atteint",
  "achieve.goalDesc": "Atteins ton objectif XP du jour",
  "lesson.intro": "Leçon",
  "lesson.objectives": "Objectifs",
  "lesson.start": "Commencer",
  "lesson.next": "Suivant",
  "lesson.quiz": "Quiz",
  "lesson.check": "Vérifier",
  "lesson.correct": "Correct !",
  "lesson.incorrect": "Pas tout à fait",
  "lesson.continue": "Continuer",
  "lesson.complete": "Leçon terminée",
  "lesson.score": "Score",
  "lesson.xpEarned": "+{xp} XP",
  "lesson.finish": "Terminer",
  "lesson.vocabulary": "Vocabulaire clé",
  "lesson.activities": "questions",
  "lesson.inProgress": "En cours",
  "lesson.minutes": "min",
  "lesson.questions": "questions",
  "lesson.phaseIntro": "Introduction",
  "lesson.phaseContent": "Contenu",
  "lesson.phaseVocab": "Vocabulaire",
  "lesson.phaseQuiz": "Quiz",
  "lesson.phaseDone": "Terminé",
  "lesson.stepOf": "{label} · {current}/{total}",
  "lesson.keyTakeaway": "À retenir",
  "lesson.analogy": "Analogie",
  "lesson.miniExercise": "Mini-exercice",
  "lesson.commonMistake": "Erreur fréquente",
  "lesson.warning": "Attention",
  "lesson.tip": "Astuce",
  "lesson.nextLesson": "Leçon suivante",
  "lesson.explanation": "Explication",
  "lesson.why": "Pourquoi",
  "challenges.summary": "{done} / {total} défis · {xp} XP possibles",
  "challenges.featured": "Défi du jour",
  "challenges.available": "Disponibles",
  "challenges.completedSection": "Terminés",
  "challenges.difficulty.easy": "Facile",
  "challenges.difficulty.medium": "Moyen",
  "challenges.difficulty.hard": "Difficile",
  "challenges.start": "Commencer",
  "challenges.review": "Revoir",
  "profile.level": "Niveau {level}",
  "profile.summary": "Résumé",
  "profile.progression": "Progression",
  "profile.recentActivity": "Activité récente",
  "profile.labsDone": "Labs",
  "common.back": "Retour",
  "common.loading": "Chargement…",
};

export const en: Record<TranslationKey, string> = {
  "tabs.home": "Home",
  "tabs.learn": "Learn",
  "tabs.challenges": "Challenges",
  "tabs.lab": "Lab",
  "tabs.profile": "Profile",
  "brand.name": "Tech",
  "brand.tagline": "The Duolingo of tech.",
  "brand.subtitle":
    "Short lessons, quizzes, and practice — start with networking.",
  "onboarding.guest": "Try without signing in",
  "onboarding.createAccount": "Create an account",
  "auth.welcomeBack": "Welcome back!",
  "auth.continueJourney": "Continue your tech journey",
  "auth.startJourney": "Start your tech journey today",
  "auth.guest": "Continue without signing in",
  "auth.signIn": "Sign In",
  "auth.signUp": "Sign Up",
  "auth.noAccount": "Don't have an account? ",
  "auth.hasAccount": "Already have an account? ",
  "trackSelect.title": "Choose your track",
  "trackSelect.subtitle": "One module at a time, Duolingo-style.",
  "trackSelect.search": "Search tracks",
  "trackSelect.popular": "Popular",
  "trackSelect.continue": "Continue",
  "trackSelect.comingSoon": "Coming soon",
  "home.greeting": "Hey",
  "home.dailyGoal": "Daily goal",
  "home.continueLearning": "Continue",
  "home.todaysPlan": "Today's plan",
  "home.viewModule": "View module",
  "home.xpToday": "XP today",
  "home.nextLessons": "Next lessons",
  "home.level": "Lv. {level}",
  "home.startLesson": "Start",
  "home.review": "Review {count} concepts",
  "home.upNext": "Up next",
  "home.dailyChallenge": "Daily challenge",
  "home.dailyChallengeDone": "Daily challenge done",
  "home.reviews": "Reviews",
  "home.reviewsEmpty": "Nothing to review yet",
  "home.progress": "Progress",
  "home.notifications": "Recent activity",
  "home.notificationsEmpty": "No activity yet",
  "home.notif.subtitle": "Your learning feed",
  "home.notif.emptyHint": "Finish a lesson, challenge, or lab to fill this feed.",
  "home.notif.all": "All",
  "home.notif.lesson": "Lessons",
  "home.notif.xp": "XP",
  "home.notif.quizMiss": "Quiz",
  "home.notif.challenge": "Challenges",
  "home.notif.lab": "Labs",
  "home.notif.tip": "Tips",
  "learn.title": "Learn",
  "learn.lessons": "Lessons",
  "learn.practice": "Practice",
  "learn.noTrack": "No track selected",
  "learn.unitProgress": "Module · {done}/{total} lessons",
  "learn.modulePercent": "{percent}% of module",
  "learn.selectModule": "Choose a module",
  "learn.moduleComingSoon": "Coming soon",
  "learn.continue": "Continue",
  "learn.continueMeta": "{minutes} min · {xp} XP",
  "learn.filterAll": "All",
  "learn.filterTodo": "To do",
  "learn.filterDone": "Done",
  "learn.lockedHint": "Finish the previous lesson first",
  "learn.timeLeft": "{minutes} min left",
  "learn.moduleXp": "{earned}/{total} XP",
  "learn.statLessons": "Lessons",
  "learn.statXp": "XP",
  "learn.statTime": "Left",
  "learn.reviews": "Module reviews",
  "learn.relatedChallenge": "Related challenge",
  "learn.relatedLab": "Related lab",
  "learn.moduleComplete": "Module complete",
  "learn.nextModule": "Next module",
  "challenges.subtitle": "Earn bonus XP by track",
  "challenges.allSkills": "All",
  "challenges.done": "Cleared",
  "challenges.finish": "Finish",
  "challenges.filterAll": "All",
  "challenges.statDone": "Done",
  "challenges.statXpLeft": "XP left",
  "challenges.xpAvailable": "{xp} XP",
  "challenges.statDaily": "Daily",
  "challenges.statDailyDone": "Done",
  "challenges.statDailyTodo": "To do",
  "challenges.replay": "Replay",
  "challenges.comeBackTomorrow": "Come back tomorrow",
  "challenges.lockedHint": "Finish a lesson in this track to unlock",
  "challenges.emptyFilter": "No challenges for this track",
  "challenges.resultTitle": "Result",
  "challenges.resultScore": "{score} / {total}",
  "challenges.resultXp": "+{xp} XP",
  "challenges.progress": "{current} / {total}",
  "challenges.retry": "Retry",
  "challenges.timer": "{seconds}s",
  "challenges.timeUp": "Time’s up",
  "challenges.timeUpHint": "The timer hit zero — challenge lost.",
  "lab.subtitle": "Guided labs with suggested replies",
  "lab.placeholder": "Your answer…",
  "lab.tutor": "Tutor",
  "lab.complete": "Lab complete · +{xp} XP",
  "lab.featured": "Recommended",
  "lab.inProgress": "In progress",
  "lab.available": "Available",
  "lab.completed": "Completed",
  "lab.start": "Start",
  "lab.continue": "Continue",
  "lab.replay": "Replay",
  "lab.progress": "{current}/{total}",
  "lab.briefStart": "Start",
  "lab.suggestHint": "Guided prompts are the intended path",
  "lab.suggested": "Guided prompts",
  "lab.lockedHint": "Finish a lesson in this track to unlock",
  "lab.emptyFilter": "No labs for this track",
  "lab.resultTitle": "Lab complete",
  "lab.backToList": "Back",
  "lab.xpEarned": "+{xp} XP",
  "lab.filterAll": "All",
  "lab.xpAvailable": "{xp} XP left",
  "lab.xpLabel": "+{xp} XP",
  "lab.difficulty.easy": "Easy",
  "lab.difficulty.medium": "Medium",
  "lab.difficulty.hard": "Hard",
  "ai.title": "AI Tutor",
  "ai.subtitle": "Review fundamentals with Nova",
  "ai.online": "Nova online",
  "ai.start": "Start lesson",
  "chat.title": "Chat",
  "chat.placeholder": "Type your message…",
  "chat.tutor": "Tutor",
  "profile.title": "Profile",
  "profile.learningTrack": "Track",
  "profile.changeTrack": "Change track",
  "profile.dayStreak": "Day streak",
  "profile.totalXp": "Total XP",
  "profile.lessons": "Lessons",
  "profile.language": "App language",
  "profile.languageFr": "Français",
  "profile.languageEn": "English",
  "profile.signOut": "Sign out",
  "profile.version": "Tech · v1.0.0",
  "profile.moduleProgress": "Module progress",
  "profile.achievements": "Achievements",
  "profile.settings": "Settings",
  "profile.guest": "Guest",
  "profile.darkMode": "Dark mode",
  "profile.sound": "Sounds",
  "profile.notifications": "Notifications",
  "profile.languageToggle": "English",
  "profile.languageSubtitle": "Interface · {lang}",
  "profile.rank": "Rank",
  "profile.nextRank": "Next · {rank}",
  "profile.calendar": "Activity calendar",
  "profile.calendarHint": "The fuller the grid, the stronger your streak",
  "profile.stats": "Statistics",
  "profile.skills": "Skills",
  "profile.badges": "Badges",
  "profile.badgesUnlocked": "{done} / {total} unlocked",
  "profile.badge.streak7": "7-day streak",
  "profile.badge.xp500": "500 XP",
  "profile.badge.lessons10": "10 lessons",
  "profile.badge.challenges5": "5 challenges",
  "profile.badge.labs3": "3 labs",
  "profile.badge.cert1": "1st cert",
  "profile.challengesDone": "Challenges",
  "profile.activeDays": "Active days",
  "profile.certsEntry": "Certifications",
  "profile.myCerts": "My certifications",
  "profile.certsPreparing": "In progress",
  "profile.certsTodo": "To do",
  "profile.certsObtained": "Obtained",
  "profile.certsEmpty": "Add your first certification to build your career path.",
  "profile.certsExplore": "Explore certifications",
  "profile.subtitle": "Account, progress, and preferences",
  "profile.createAccount": "Create an account",
  "profile.activityLink": "Activity",
  "profile.activitySubtitle": "View your activity feed",
  "profile.certsSummary": "{preparing} in progress · {obtained} earned",
  "profile.noAccount": "No account",
  "profile.account": "Account",
  "profile.shortcuts": "Shortcuts",
  "profile.changePhoto": "Change photo",
  "profile.photoPermission": "Allow photo library access to choose a picture.",
  "certs.title": "Certifications",
  "certs.subtitle": "Explore the most recognized tech certifications.",
  "certs.search": "Search a certification…",
  "certs.filterAll": "All",
  "certs.finderCard": "Find my certification",
  "certs.finderSub": "Discover certifications that match your goal.",
  "certs.view": "View",
  "certs.official": "View official certification",
  "certs.addPath": "Add to my path",
  "certs.statusTodo": "To do",
  "certs.statusPreparing": "Preparing",
  "certs.statusObtained": "Obtained",
  "certs.progress": "Progress",
  "certs.markObtained": "Mark as obtained?",
  "certs.why": "Why take it?",
  "certs.skills": "Skills covered",
  "certs.empty": "No matching certification",
  "certs.finderTitle": "Find my certification",
  "certs.finderDomain": "Which domain interests you?",
  "certs.finderLevel": "What’s your level?",
  "certs.finderBudget": "What’s your budget?",
  "certs.finderGoal": "What’s your goal?",
  "certs.recommend": "We recommend",
  "certs.level.beginner": "Beginner",
  "certs.level.intermediate": "Intermediate",
  "certs.level.advanced": "Advanced",
  "certs.level.expert": "Expert",
  "certs.domain.cybersecurity": "Cybersecurity",
  "certs.domain.cloud": "Cloud",
  "certs.domain.networking": "Networking",
  "certs.domain.devops": "DevOps",
  "certs.domain.programming": "Programming",
  "certs.domain.data": "Data",
  "certs.domain.ai": "AI",
  "certs.price.free": "Free",
  "certs.price.under100": "< €100",
  "certs.price.100to300": "€100–300",
  "certs.price.over300": "€300+",
  "certs.goal.first-job": "Land my first job",
  "certs.goal.specialize": "Specialize",
  "certs.goal.career-growth": "Grow at work",
  "certs.goal.recognized-cert": "Earn a recognized cert",
  "certs.goal.deepen": "Deepen my knowledge",
  "certs.next": "Continue",
  "certs.label.level": "Level",
  "certs.label.price": "Price",
  "certs.label.exam": "Exam",
  "certs.label.validity": "Validity",
  "certs.label.format": "Format",
  "certs.label.prep": "Prep time",
  "certs.label.difficulty": "Difficulty",
  "certs.label.description": "Description",
  "certs.label.prerequisites": "Prerequisites",
  "certs.label.status": "Status",
  "achieve.first": "First steps",
  "achieve.firstDesc": "Complete your first lesson",
  "achieve.roll": "On a roll",
  "achieve.rollDesc": "Complete 3 lessons",
  "achieve.week": "Week warrior",
  "achieve.weekDesc": "Maintain a 7-day streak",
  "achieve.goal": "Goal getter",
  "achieve.goalDesc": "Reach your daily XP goal",
  "lesson.intro": "Lesson",
  "lesson.objectives": "Objectives",
  "lesson.start": "Start",
  "lesson.next": "Next",
  "lesson.quiz": "Quiz",
  "lesson.check": "Check",
  "lesson.correct": "Correct!",
  "lesson.incorrect": "Not quite",
  "lesson.continue": "Continue",
  "lesson.complete": "Lesson complete",
  "lesson.score": "Score",
  "lesson.xpEarned": "+{xp} XP",
  "lesson.finish": "Finish",
  "lesson.vocabulary": "Key vocabulary",
  "lesson.activities": "questions",
  "lesson.inProgress": "In progress",
  "lesson.minutes": "min",
  "lesson.questions": "questions",
  "lesson.phaseIntro": "Introduction",
  "lesson.phaseContent": "Content",
  "lesson.phaseVocab": "Vocabulary",
  "lesson.phaseQuiz": "Quiz",
  "lesson.phaseDone": "Done",
  "lesson.stepOf": "{label} · {current}/{total}",
  "lesson.keyTakeaway": "Key takeaway",
  "lesson.analogy": "Analogy",
  "lesson.miniExercise": "Mini exercise",
  "lesson.commonMistake": "Common mistake",
  "lesson.warning": "Warning",
  "lesson.tip": "Tip",
  "lesson.nextLesson": "Next lesson",
  "lesson.explanation": "Explanation",
  "lesson.why": "Why",
  "challenges.summary": "{done} / {total} challenges · {xp} XP available",
  "challenges.featured": "Daily challenge",
  "challenges.available": "Available",
  "challenges.completedSection": "Completed",
  "challenges.difficulty.easy": "Easy",
  "challenges.difficulty.medium": "Medium",
  "challenges.difficulty.hard": "Hard",
  "challenges.start": "Start",
  "challenges.review": "Review",
  "profile.level": "Level {level}",
  "profile.summary": "Summary",
  "profile.progression": "Progress",
  "profile.recentActivity": "Recent activity",
  "profile.labsDone": "Labs",
  "common.back": "Back",
  "common.loading": "Loading…",
};
