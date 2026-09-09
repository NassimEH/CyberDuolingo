<wizard-report>
# PostHog post-wizard report

PostHog est branché de bout en bout : provider + screen tracking déjà présents, événements produit ajoutés sur les funnels clés (leçons, défis, labs, certifications, profil), capture serveur sur les API Stream / Vision Agent, et variables d’environnement prêtes à coller.

| Event | Description | File |
| --- | --- | --- |
| `lesson_started` | Départ d’une leçon | `components/lesson/LessonPlayer.tsx` |
| `lesson_completed` | Leçon terminée + XP | `components/lesson/LessonPlayer.tsx` |
| `quiz_answered` | Réponse de quiz leçon | `components/lesson/LessonPlayer.tsx` |
| `challenge_started` | Ouverture d’un défi | `app/(tabs)/challenges.tsx` |
| `challenge_completed` | Défi réussi | `app/(tabs)/challenges.tsx` |
| `challenge_failed` | Défi échoué / timeout | `app/(tabs)/challenges.tsx` |
| `lab_completed` | Lab terminé | `components/lab/LabSession.tsx` |
| `certification_added_to_path` | Certif ajoutée au parcours | `app/certifications/[id].tsx` |
| `certification_obtained` | Certif marquée obtenue | `app/certifications/[id].tsx` |
| `analytics_preference_changed` | Opt-in / opt-out analytics | `lib/analytics.ts` |
| `profile_updated` | Profil sauvegardé | `app/account/edit.tsx` |
| `stream_token_issued` | Token Stream OK (API) | `app/api/stream-token+api.ts` |
| `stream_token_failed` | Token Stream en échec (API) | `app/api/stream-token+api.ts` |
| `agent_session_started` | Session agent OK (API) | `app/api/agent-session+api.ts` |
| `agent_session_failed` | Session agent en échec (API) | `app/api/agent-session+api.ts` |

Événements déjà présents avant cette passe (conservés) : `sign_in_completed`, `sign_up_completed`, `onboarding_*`, `track_selected`, `continue_learning_tapped`, `lab_viewed`, écrans via `posthog.screen`, identify sur auth.

## Next steps

1. Dans `.env.local`, remplace `phc_your_project_token_here` par ta Project API Key PostHog.
2. Si ton projet est en UE : `POSTHOG_HOST=https://eu.i.posthog.com`.
3. Redémarre Expo : `npx expo start -c`.
4. Dans PostHog → Activity, vérifie l’arrivée des événements.

Dashboard « Analytics basics » : non créé automatiquement (MCP PostHog indisponible dans cet environnement). Crée-le manuellement dans PostHog avec un funnel `lesson_started` → `lesson_completed` et un insight sur `challenge_completed`.

### Agent skill

Le skill Expo PostHog reste dans `.claude/skills/integration-expo/` pour les prochaines évolutions.
</wizard-report>
