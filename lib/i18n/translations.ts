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
  | "onboarding.createAccount"
  | "onboarding.skip"
  | "onboarding.next"
  | "onboarding.hasAccount"
  | "onboarding.startApp"
  | "auth.welcomeBack"
  | "auth.continueJourney"
  | "auth.startJourney"
  | "auth.signIn"
  | "auth.signUp"
  | "auth.noAccount"
  | "auth.hasAccount"
  | "auth.or"
  | "auth.continueWithGoogle"
  | "auth.continueWithApple"
  | "trackSelect.title"
  | "trackSelect.subtitle"
  | "trackSelect.popular"
  | "trackSelect.continue"
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
  | "home.reviewsToday"
  | "home.reviewsTodayHint"
  | "home.reviewsStart"
  | "home.reviewsEmpty"
  | "home.dailyGoalEdit"
  | "home.dailyGoalHint"
  | "home.goalReachedTitle"
  | "home.goalReachedBody"
  | "home.goalReachedCta"
  | "home.syncOffline"
  | "home.syncPending"
  | "home.syncError"
  | "home.syncRetry"
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
  | "lab.doneStatus"
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
  | "lab.verdictCorrect"
  | "lab.verdictPartial"
  | "lab.verdictIncorrect"
  | "lab.dailyLabel"
  | "lab.dailyProgress"
  | "lab.dailyLimitTitle"
  | "lab.dailyLimitMessage"
  | "lab.dailyLimitShort"
  | "lab.sectionMeta"
  | "lab.reportPassed"
  | "lab.reportFailed"
  | "lab.reportPassedHint"
  | "lab.reportFailedHint"
  | "lab.reportCorrect"
  | "lab.reportPartial"
  | "lab.reportIncorrect"
  | "lab.reportXp"
  | "lab.reportStatus"
  | "lab.statusPassed"
  | "lab.statusFailed"
  | "lab.reportAnswers"
  | "lab.reportStep"
  | "lab.reportYourAnswer"
  | "lab.reportExpected"
  | "lab.reportWhy"
  | "lab.reportTakeaways"
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
  | "profile.darkMode"
  | "profile.notifications"
  | "profile.languageToggle"
  | "profile.languageSubtitle"
  | "profile.rank"
  | "profile.nextRank"
  | "profile.rankMax"
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
  | "profile.activityLink"
  | "profile.activitySubtitle"
  | "profile.certsSummary"
  | "profile.noAccount"
  | "profile.account"
  | "profile.shortcuts"
  | "profile.changePhoto"
  | "profile.photoPermission"
  | "profile.photoAccess"
  | "profile.notificationsAccess"
  | "profile.notificationsEnabledHint"
  | "profile.permissionOpenSettings"
  | "profile.permissionRevokeHint"
  | "profile.openSettings"
  | "profile.sectionAccount"
  | "profile.sectionPrivacy"
  | "profile.sectionLegal"
  | "profile.sectionSupport"
  | "profile.sectionApp"
  | "profile.editInfo"
  | "profile.deleteData"
  | "profile.deleteAccount"
  | "profile.privacyPrefs"
  | "profile.dataCollected"
  | "profile.dataUsage"
  | "profile.gdprRights"
  | "profile.privacyPolicy"
  | "profile.legalMentions"
  | "profile.legalTerms"
  | "profile.supportLink"
  | "profile.about"
  | "profile.replayOnboarding"
  | "profile.appVersion"
  | "profile.versionLabel"
  | "profile.signOutConfirmTitle"
  | "profile.signOutConfirmMessage"
  | "profile.deleteDataConfirmTitle"
  | "profile.deleteDataConfirmMessage"
  | "profile.deleteDataDone"
  | "profile.deleteAccountConfirmTitle"
  | "profile.deleteAccountConfirmMessage"
  | "profile.deleteAccountConfirmMessageApple"
  | "profile.deleteAccountPassword"
  | "profile.deleteAccountPasswordHint"
  | "profile.confirm"
  | "profile.cancel"
  | "account.editTitle"
  | "account.firstName"
  | "account.email"
  | "account.save"
  | "account.editLocalHint"
  | "privacy.prefsTitle"
  | "privacy.prefsIntro"
  | "privacy.analytics"
  | "privacy.analyticsSubtitle"
  | "legal.notFound"
  | "about.title"
  | "about.body"
  | "support.title"
  | "support.body"
  | "support.webPage"
  | "certs.title"
  | "certs.subtitle"
  | "certs.search"
  | "certs.filterAll"
  | "certs.finderCard"
  | "certs.finderSub"
  | "certs.view"
  | "certs.official"
  | "certs.addPath"
  | "certs.prepareWith"
  | "certs.statusTodo"
  | "certs.statusPreparing"
  | "certs.statusObtained"
  | "certs.progress"
  | "certs.markObtained"
  | "certs.why"
  | "certs.skills"
  | "certs.empty"
  | "certs.emptyHint"
  | "certs.count"
  | "certs.myPath"
  | "certs.pathSummary"
  | "certs.catalog"
  | "certs.results"
  | "certs.filterTrack"
  | "certs.filterDomain"
  | "certs.filterLevel"
  | "certs.filterPrice"
  | "certs.filterMyTrack"
  | "certs.resetFilters"
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
  "brand.name": "Stack",
  "brand.tagline": "Le Duolingo de la tech.",
  "brand.subtitle":
    "Leçons courtes, quiz et pratique — commence par les réseaux.",
  "onboarding.createAccount": "Créer un compte",
  "onboarding.skip": "Passer",
  "onboarding.next": "Continuer",
  "onboarding.hasAccount": "Déjà un compte ? ",
  "onboarding.startApp": "C'est parti",
  "auth.welcomeBack": "Bon retour !",
  "auth.continueJourney": "Continue ton parcours tech",
  "auth.startJourney": "Commence ton parcours tech aujourd’hui",
  "auth.signIn": "Se connecter",
  "auth.signUp": "S’inscrire",
  "auth.noAccount": "Pas encore de compte ? ",
  "auth.hasAccount": "Déjà un compte ? ",
  "auth.or": "ou",
  "auth.continueWithGoogle": "Continuer avec Google",
  "auth.continueWithApple": "Continuer avec Apple",
  "trackSelect.title": "Choisis ton parcours",
  "trackSelect.subtitle": "Tu commences par un module. Les autres resteront accessibles plus tard, pour élargir ton parcours.",
  "trackSelect.popular": "Nos modules",
  "trackSelect.continue": "Continuer",
  "home.greeting": "Salut",
  "home.dailyGoal": "Objectif du jour",
  "home.dailyGoalEdit": "Choisir l’objectif du jour",
  "home.dailyGoalHint": "10 XP = session courte · 50 XP = journée solide.",
  "home.goalReachedTitle": "Objectif atteint !",
  "home.goalReachedBody": "Tu as validé tes {goal} XP du jour. Belle série.",
  "home.goalReachedCta": "Continuer",
  "home.syncOffline": "Hors ligne — ta progression reste locale.",
  "home.syncPending": "Sync en attente…",
  "home.syncError": "Sync impossible. Réessaie.",
  "home.syncRetry": "Réessayer",
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
  "home.reviewsToday": "À revoir aujourd’hui",
  "home.reviewsTodayHint": "{count} notion(s) issue(s) de tes erreurs",
  "home.reviewsStart": "Réviser maintenant",
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
  "lab.subtitle": "Scénarios immersifs, décisions et feedback",
  "lab.placeholder": "Ta réponse…",
  "lab.tutor": "Tuteur",
  "lab.complete": "Lab terminé · +{xp} XP",
  "lab.featured": "Recommandé",
  "lab.inProgress": "En cours",
  "lab.available": "Disponibles",
  "lab.completed": "Terminés",
  "lab.doneStatus": "Terminé",
  "lab.start": "Lancer",
  "lab.continue": "Continuer",
  "lab.replay": "Rejouer",
  "lab.progress": "{current}/{total}",
  "lab.briefStart": "Commencer",
  "lab.suggestHint": "Choisis une piste ou écris ta propre réponse",
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
  "lab.verdictCorrect": "Réponse correcte",
  "lab.verdictPartial": "Réponse partielle",
  "lab.verdictIncorrect": "Réponse incorrecte",
  "lab.dailyLabel": "Labs aujourd’hui",
  "lab.dailyProgress": "{used} / {limit}",
  "lab.dailyLimitTitle": "Limite quotidienne",
  "lab.dailyLimitMessage": "Tu as déjà utilisé tes 2 labs du jour. Reviens demain pour en lancer de nouveaux. Tu peux encore continuer ou rejouer un lab déjà commencé.",
  "lab.dailyLimitShort": "Limite atteinte pour aujourd’hui",
  "lab.sectionMeta": "{left} restants · {total}",
  "lab.reportPassed": "Lab réussi",
  "lab.reportFailed": "Lab terminé",
  "lab.reportPassedHint": "Toutes tes réponses étaient correctes. Bravo.",
  "lab.reportFailedHint": "Au moins une réponse était incorrecte ou partielle. Relis les corrections pour progresser.",
  "lab.reportCorrect": "Bonnes réponses",
  "lab.reportPartial": "Partielles",
  "lab.reportIncorrect": "Incorrectes",
  "lab.reportXp": "XP obtenue",
  "lab.reportStatus": "Statut",
  "lab.statusPassed": "Réussi",
  "lab.statusFailed": "Non réussi",
  "lab.reportAnswers": "Détail des réponses",
  "lab.reportStep": "Étape {n}",
  "lab.reportYourAnswer": "Ta réponse",
  "lab.reportExpected": "Correction attendue",
  "lab.reportWhy": "Explication",
  "lab.reportTakeaways": "À retenir",
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
  "profile.version": "Stack · v1.0.0",
  "profile.moduleProgress": "Progression du module",
  "profile.achievements": "Succès",
  "profile.settings": "Réglages",
  "profile.darkMode": "Mode sombre",
  "profile.notifications": "Notifications",
  "profile.languageToggle": "English",
  "profile.languageSubtitle": "Interface · {lang}",
  "profile.rank": "Rang",
  "profile.nextRank": "Prochain · {rank}",
  "profile.rankMax": "Max",
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
  "profile.activityLink": "Activité",
  "profile.activitySubtitle": "Voir ton fil d’activité",
  "profile.certsSummary": "{preparing} en cours · {obtained} obtenue(s)",
  "profile.noAccount": "Sans compte",
  "profile.account": "Compte",
  "profile.shortcuts": "Raccourcis",
  "profile.changePhoto": "Changer la photo",
  "profile.photoPermission": "Autorise l’accès à la galerie pour choisir une photo.",
  "profile.photoAccess": "Accès photo",
  "profile.notificationsAccess": "Notifications",
  "profile.notificationsEnabledHint": "On te préviendra seulement si ta série est en danger le soir, ou rarement pour reprendre une courte session. Jamais de spam.",
  "profile.permissionOpenSettings": "Active cette autorisation dans les réglages de ton téléphone.",
  "profile.permissionRevokeHint": "Pour retirer l’accès, désactive-le dans les réglages système.",
  "profile.openSettings": "Ouvrir les réglages",
  "profile.sectionAccount": "Compte",
  "profile.sectionPrivacy": "Confidentialité et données",
  "profile.sectionLegal": "Informations légales",
  "profile.sectionSupport": "Support",
  "profile.sectionApp": "Application",
  "profile.editInfo": "Modifier mes infos",
  "profile.deleteData": "Supprimer mes données",
  "profile.deleteAccount": "Supprimer mon compte",
  "profile.privacyPrefs": "Préférences de confidentialité",
  "profile.dataCollected": "Données collectées",
  "profile.dataUsage": "Utilisation des données",
  "profile.gdprRights": "Droits RGPD",
  "profile.privacyPolicy": "Politique de confidentialité",
  "profile.legalMentions": "Mentions légales",
  "profile.legalTerms": "CGU",
  "profile.supportLink": "Contact / Support",
  "profile.about": "À propos",
  "profile.replayOnboarding": "Revoir l'intro",
  "profile.appVersion": "Version",
  "profile.versionLabel": "Stack · v{version}",
  "profile.signOutConfirmTitle": "Se déconnecter ?",
  "profile.signOutConfirmMessage": "Tu pourras te reconnecter plus tard. La progression reste sur cet appareil.",
  "profile.deleteDataConfirmTitle": "Supprimer les données ?",
  "profile.deleteDataConfirmMessage": "XP, leçons, défis, labs et certifications suivies seront effacés sur cet appareil et sur Neon. Ton compte Auth reste actif. Irréversible.",
  "profile.deleteDataDone": "Données d’apprentissage effacées (local + serveur).",
  "profile.deleteAccountConfirmTitle": "Supprimer le compte ?",
  "profile.deleteAccountConfirmMessage": "Tes données Neon (profil + progression) et ton compte Auth seront définitivement effacés. Confirme avec ton mot de passe.",
  "profile.deleteAccountConfirmMessageApple": "Ton compte Sign in with Apple, ton profil et ta progression seront définitivement effacés.",
  "profile.deleteAccountPassword": "Mot de passe",
  "profile.deleteAccountPasswordHint": "Entre ton mot de passe (8 caractères minimum) pour confirmer.",
  "profile.confirm": "Confirmer",
  "profile.cancel": "Annuler",
  "account.editTitle": "Modifier mes infos",
  "account.firstName": "Prénom",
  "account.email": "E-mail",
  "account.save": "Enregistrer",
  "account.editLocalHint": "Ton prénom s’affiche sur l’accueil (« Salut, … ») et reste synchronisé avec ton compte.",
  "privacy.prefsTitle": "Préférences",
  "privacy.prefsIntro": "Seules les préférences réellement utilisées par l’app sont listées ici.",
  "privacy.analytics": "Analytics",
  "privacy.analyticsSubtitle": "Autoriser l’envoi d’événements d’usage à PostHog",
  "legal.notFound": "Document introuvable",
  "about.title": "À propos",
  "about.body": "Stack est une app d’apprentissage informatique inspirée de Duolingo : leçons courtes, défis, labs et pratique guidée.",
  "support.title": "Support",
  "support.body": "Une question ou un bug ? Écris-nous. Nous répondrons dès que possible.",
  "support.webPage": "Page support (web)",
  "certs.title": "Certifications",
  "certs.subtitle": "Références marché alignées sur tes modules Stack (réseau, web, logiciel) et les domaines voisins.",
  "certs.search": "Rechercher une certification…",
  "certs.filterAll": "Toutes",
  "certs.filterTrack": "Parcours / modules",
  "certs.filterDomain": "Domaine",
  "certs.filterLevel": "Niveau",
  "certs.filterPrice": "Budget",
  "certs.filterMyTrack": "Filtrer sur mon parcours actuel",
  "certs.resetFilters": "Réinitialiser les filtres",
  "certs.count": "{count} certifications référencées",
  "certs.myPath": "Mon parcours",
  "certs.pathSummary": "{preparing} en préparation · {obtained} obtenue(s)",
  "certs.catalog": "Catalogue",
  "certs.results": "{count} résultat(s)",
  "certs.finderCard": "Trouver ma certification",
  "certs.finderSub": "Quiz court pour cibler les certifications adaptées à ton objectif.",
  "certs.view": "Voir",
  "certs.official": "Voir la certification officielle",
  "certs.addPath": "Ajouter à mon parcours",
  "certs.prepareWith": "Préparer avec {track}",
  "certs.statusTodo": "À faire",
  "certs.statusPreparing": "En préparation",
  "certs.statusObtained": "Obtenue",
  "certs.progress": "Progression",
  "certs.markObtained": "Marquer comme obtenue ?",
  "certs.why": "Pourquoi la passer ?",
  "certs.skills": "Compétences couvertes",
  "certs.empty": "Aucune certification ne correspond",
  "certs.emptyHint": "Élargis les filtres (parcours, domaine, niveau ou prix) pour revoir le catalogue.",
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
  "certs.domain.cybersecurity": "Cybersécurité",
  "certs.domain.cloud": "Cloud",
  "certs.domain.networking": "Réseau",
  "certs.domain.devops": "DevOps",
  "certs.domain.programming": "Web & logiciel",
  "certs.domain.data": "Data",
  "certs.domain.ai": "IA",
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
  "brand.name": "Stack",
  "brand.tagline": "The Duolingo of tech.",
  "brand.subtitle":
    "Short lessons, quizzes, and practice — start with networking.",
  "onboarding.createAccount": "Create an account",
  "onboarding.skip": "Skip",
  "onboarding.next": "Continue",
  "onboarding.hasAccount": "Already have an account? ",
  "onboarding.startApp": "Let's go",
  "auth.welcomeBack": "Welcome back!",
  "auth.continueJourney": "Continue your tech journey",
  "auth.startJourney": "Start your tech journey today",
  "auth.signIn": "Sign In",
  "auth.signUp": "Sign Up",
  "auth.noAccount": "Don't have an account? ",
  "auth.hasAccount": "Already have an account? ",
  "auth.or": "or",
  "auth.continueWithGoogle": "Continue with Google",
  "auth.continueWithApple": "Continue with Apple",
  "trackSelect.title": "Choose your track",
  "trackSelect.subtitle": "Start with one module. You can add others later to broaden your path.",
  "trackSelect.popular": "Our modules",
  "trackSelect.continue": "Continue",
  "home.greeting": "Hey",
  "home.dailyGoal": "Daily goal",
  "home.dailyGoalEdit": "Choose today's goal",
  "home.dailyGoalHint": "10 XP = short session · 50 XP = solid day.",
  "home.goalReachedTitle": "Goal reached!",
  "home.goalReachedBody": "You hit your {goal} XP for today. Nice work.",
  "home.goalReachedCta": "Keep going",
  "home.syncOffline": "Offline — progress stays on this device.",
  "home.syncPending": "Sync pending…",
  "home.syncError": "Sync failed. Try again.",
  "home.syncRetry": "Retry",
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
  "home.reviewsToday": "Review today",
  "home.reviewsTodayHint": "{count} concept(s) from your mistakes",
  "home.reviewsStart": "Review now",
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
  "lab.subtitle": "Immersive scenarios, decisions, and feedback",
  "lab.placeholder": "Your answer…",
  "lab.tutor": "Tutor",
  "lab.complete": "Lab complete · +{xp} XP",
  "lab.featured": "Recommended",
  "lab.inProgress": "In progress",
  "lab.available": "Available",
  "lab.completed": "Completed",
  "lab.doneStatus": "Done",
  "lab.start": "Start",
  "lab.continue": "Continue",
  "lab.replay": "Replay",
  "lab.progress": "{current}/{total}",
  "lab.briefStart": "Start",
  "lab.suggestHint": "Pick a prompt or type your own answer",
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
  "lab.verdictCorrect": "Correct answer",
  "lab.verdictPartial": "Partially correct",
  "lab.verdictIncorrect": "Incorrect answer",
  "lab.dailyLabel": "Labs today",
  "lab.dailyProgress": "{used} / {limit}",
  "lab.dailyLimitTitle": "Daily limit",
  "lab.dailyLimitMessage": "You’ve already used your 2 labs for today. Come back tomorrow to start new ones. You can still continue or replay a lab you already started.",
  "lab.dailyLimitShort": "Daily limit reached",
  "lab.sectionMeta": "{left} left · {total}",
  "lab.reportPassed": "Lab passed",
  "lab.reportFailed": "Lab finished",
  "lab.reportPassedHint": "Every answer was correct. Nice work.",
  "lab.reportFailedHint": "At least one answer was incorrect or partial. Review the corrections to improve.",
  "lab.reportCorrect": "Correct",
  "lab.reportPartial": "Partial",
  "lab.reportIncorrect": "Incorrect",
  "lab.reportXp": "XP earned",
  "lab.reportStatus": "Status",
  "lab.statusPassed": "Passed",
  "lab.statusFailed": "Not passed",
  "lab.reportAnswers": "Answer details",
  "lab.reportStep": "Step {n}",
  "lab.reportYourAnswer": "Your answer",
  "lab.reportExpected": "Expected answer",
  "lab.reportWhy": "Explanation",
  "lab.reportTakeaways": "Key takeaways",
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
  "profile.version": "Stack · v1.0.0",
  "profile.moduleProgress": "Module progress",
  "profile.achievements": "Achievements",
  "profile.settings": "Settings",
  "profile.darkMode": "Dark mode",
  "profile.notifications": "Notifications",
  "profile.languageToggle": "English",
  "profile.languageSubtitle": "Interface · {lang}",
  "profile.rank": "Rank",
  "profile.nextRank": "Next · {rank}",
  "profile.rankMax": "Max",
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
  "profile.activityLink": "Activity",
  "profile.activitySubtitle": "View your activity feed",
  "profile.certsSummary": "{preparing} in progress · {obtained} earned",
  "profile.noAccount": "No account",
  "profile.account": "Account",
  "profile.shortcuts": "Shortcuts",
  "profile.changePhoto": "Change photo",
  "profile.photoPermission": "Allow photo library access to choose a picture.",
  "profile.photoAccess": "Photo access",
  "profile.notificationsAccess": "Notifications",
  "profile.notificationsEnabledHint": "We’ll only remind you in the evening if your streak is at risk, or occasionally to resume a short session. No spam.",
  "profile.permissionOpenSettings": "Turn on this permission in your phone settings.",
  "profile.permissionRevokeHint": "To revoke access, disable it in system settings.",
  "profile.openSettings": "Open settings",
  "profile.sectionAccount": "Account",
  "profile.sectionPrivacy": "Privacy & data",
  "profile.sectionLegal": "Legal",
  "profile.sectionSupport": "Support",
  "profile.sectionApp": "App",
  "profile.editInfo": "Edit my info",
  "profile.deleteData": "Delete my data",
  "profile.deleteAccount": "Delete my account",
  "profile.privacyPrefs": "Privacy preferences",
  "profile.dataCollected": "Data we collect",
  "profile.dataUsage": "How we use data",
  "profile.gdprRights": "GDPR rights",
  "profile.privacyPolicy": "Privacy policy",
  "profile.legalMentions": "Legal notice",
  "profile.legalTerms": "Terms of use",
  "profile.supportLink": "Contact / Support",
  "profile.about": "About",
  "profile.replayOnboarding": "Replay intro",
  "profile.appVersion": "Version",
  "profile.versionLabel": "Stack · v{version}",
  "profile.signOutConfirmTitle": "Sign out?",
  "profile.signOutConfirmMessage": "You can sign back in later. Progress stays on this device.",
  "profile.deleteDataConfirmTitle": "Delete data?",
  "profile.deleteDataConfirmMessage": "XP, lessons, challenges, labs, and certification path will be erased on this device and on Neon. Your Auth account stays active. This cannot be undone.",
  "profile.deleteDataDone": "Learning data cleared (local + server).",
  "profile.deleteAccountConfirmTitle": "Delete account?",
  "profile.deleteAccountConfirmMessage": "Your Neon data (profile + progress) and Auth account will be permanently deleted. Confirm with your password.",
  "profile.deleteAccountConfirmMessageApple": "Your Sign in with Apple account, profile, and progress will be permanently deleted.",
  "profile.deleteAccountPassword": "Password",
  "profile.deleteAccountPasswordHint": "Enter your password (at least 8 characters) to confirm.",
  "profile.confirm": "Confirm",
  "profile.cancel": "Cancel",
  "account.editTitle": "Edit my info",
  "account.firstName": "First name",
  "account.email": "Email",
  "account.save": "Save",
  "account.editLocalHint": "Your first name appears on Home (“Hey, …”) and stays synced with your account.",
  "privacy.prefsTitle": "Preferences",
  "privacy.prefsIntro": "Only preferences actually used by the app are listed here.",
  "privacy.analytics": "Analytics",
  "privacy.analyticsSubtitle": "Allow sending usage events to PostHog",
  "legal.notFound": "Document not found",
  "about.title": "About",
  "about.body": "Stack is a Duolingo-inspired computing learning app: short lessons, challenges, labs, and guided practice.",
  "support.title": "Support",
  "support.body": "Questions or a bug? Email us — we’ll get back as soon as we can.",
  "support.webPage": "Support page (web)",
  "certs.title": "Certifications",
  "certs.subtitle": "Market references aligned with your Stack modules (networking, web, software) and related domains.",
  "certs.search": "Search a certification…",
  "certs.filterAll": "All",
  "certs.filterTrack": "Track / modules",
  "certs.filterDomain": "Domain",
  "certs.filterLevel": "Level",
  "certs.filterPrice": "Budget",
  "certs.filterMyTrack": "Filter by my current track",
  "certs.resetFilters": "Reset filters",
  "certs.count": "{count} certifications listed",
  "certs.myPath": "My path",
  "certs.pathSummary": "{preparing} preparing · {obtained} obtained",
  "certs.catalog": "Catalog",
  "certs.results": "{count} result(s)",
  "certs.finderCard": "Find my certification",
  "certs.finderSub": "Short quiz to match certifications to your goal.",
  "certs.view": "View",
  "certs.official": "View official certification",
  "certs.addPath": "Add to my path",
  "certs.prepareWith": "Prepare with {track}",
  "certs.statusTodo": "To do",
  "certs.statusPreparing": "Preparing",
  "certs.statusObtained": "Obtained",
  "certs.progress": "Progress",
  "certs.markObtained": "Mark as obtained?",
  "certs.why": "Why take it?",
  "certs.skills": "Skills covered",
  "certs.empty": "No matching certification",
  "certs.emptyHint": "Widen filters (track, domain, level, or price) to see the catalog again.",
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
  "certs.domain.programming": "Web & software",
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
