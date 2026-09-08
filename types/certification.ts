import type { LocalizedString } from "@/lib/i18n/translations";

export type CertDomain =
  | "cybersecurity"
  | "cloud"
  | "networking"
  | "devops"
  | "programming"
  | "data"
  | "ai";
export type CertLevel = "beginner" | "intermediate" | "advanced" | "expert";
export type CertPriceTier = "free" | "under100" | "100to300" | "over300";
export type CertPathStatus = "todo" | "preparing" | "obtained";
export type CertProgress = 0 | 25 | 50 | 75 | 100;

export interface Certification {
  id: string;
  name: string;
  provider: string;
  domain: CertDomain;
  level: CertLevel;
  priceTier: CertPriceTier;
  priceDisplay: LocalizedString;
  examDurationDisplay?: LocalizedString;
  validityDisplay?: LocalizedString;
  examFormatDisplay?: LocalizedString;
  languages?: LocalizedString[];
  prerequisites?: LocalizedString[];
  difficultyDisplay?: LocalizedString;
  preparationTimeDisplay?: LocalizedString;
  description: LocalizedString;
  skills: LocalizedString[];
  whyTakeIt: LocalizedString;
  officialUrl?: string;
  recognitionNote?: LocalizedString;
}

export interface UserCertEntry {
  status: CertPathStatus;
  progress: CertProgress;
  obtainedAt?: string;
}

export type CertRecommendationGoal =
  | "first-job"
  | "specialize"
  | "career-growth"
  | "recognized-cert"
  | "deepen";

export interface FilterCertificationsParams {
  q?: string;
  domain?: CertDomain;
  level?: CertLevel;
  priceTier?: CertPriceTier;
}

export interface RecommendCertificationsParams {
  domain: CertDomain;
  level: CertLevel;
  priceTier: CertPriceTier;
  goal: CertRecommendationGoal;
}

export interface CertRecommendation {
  cert: Certification;
  reason: LocalizedString;
}
