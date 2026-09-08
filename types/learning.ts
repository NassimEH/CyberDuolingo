import type { LocalizedString } from "@/lib/i18n/translations";
import type { AppIcon } from "@/constants/icons";

export type TrackId = "networking" | "cloud" | "security" | "ai";

export interface Track {
  id: TrackId;
  name: LocalizedString;
  shortName: LocalizedString;
  icon: AppIcon;
  color: string;
  learners: string;
  available: boolean;
}

export type ActivityType =
  | "vocabulary"
  | "translate"
  | "multiple-choice"
  | "listen";

export interface VocabularyItem {
  term: LocalizedString;
  definition: LocalizedString;
}

export type DiagramId =
  | "lan-wan"
  | "osi-layers"
  | "ip-subnet"
  | "dns-lookup"
  | "http-https"
  | "client-server"
  | "tcp-udp"
  | "network-devices"
  | "nat-firewall";

export interface LessonSection {
  id: string;
  title: LocalizedString;
  body: LocalizedString;
  bullets?: LocalizedString[];
  callout?: LocalizedString;
  diagram?: DiagramId;
}

export interface Activity {
  id: string;
  type: ActivityType;
  question: LocalizedString;
  correctAnswer: LocalizedString;
  options?: LocalizedString[];
  hint?: LocalizedString;
  explanation?: LocalizedString;
}

export interface LessonGoal {
  description: LocalizedString;
  xpReward: number;
}

export interface AITeacherPrompt {
  systemPrompt: LocalizedString;
  introMessage: LocalizedString;
  topics: LocalizedString[];
}

export interface Lesson {
  id: string;
  unitId: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: AppIcon;
  estimatedMinutes: number;
  xpReward: number;
  goals: LessonGoal[];
  sections: LessonSection[];
  vocabulary: VocabularyItem[];
  activities: Activity[];
  aiTeacherPrompt: AITeacherPrompt;
}

export interface Unit {
  id: string;
  trackId: TrackId;
  title: LocalizedString;
  description: LocalizedString;
  order: number;
  lessonIds: string[];
  progressColor: string;
}

/** @deprecated */
export type LanguageCode = TrackId;
/** @deprecated */
export type Language = Track;
