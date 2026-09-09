import type { ComponentType } from "react";

// Named imports via package root (supported by lucide-react-native exports).
import {
  Award,
  ArrowRight,
  Bell,
  BookOpen,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock,
  Cloud,
  Flame,
  FileText,
  Globe,
  Home,
  Info,
  Languages,
  Layers,
  Locate,
  Lock,
  LogOut,
  MessageCircle,
  Moon,
  Network,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Trash2,
  Trophy,
  User,
  Zap,
} from "lucide-react-native";

import type { TrackId } from "@/types/learning";

export type LucideIcon = ComponentType<{
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}>;

export {
  Award,
  ArrowRight,
  Bell,
  BookOpen,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock,
  Cloud,
  Flame,
  FileText,
  Globe,
  Home,
  Info,
  Languages,
  Layers,
  Locate,
  Lock,
  LogOut,
  MessageCircle,
  Moon,
  Network,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Trash2,
  Trophy,
  User,
  Zap,
};

export type AppIcon =
  | "globe"
  | "cloud"
  | "shield"
  | "network"
  | "layers"
  | "locate"
  | "search"
  | "lock"
  | "home"
  | "book"
  | "message"
  | "flame"
  | "zap"
  | "award"
  | "trophy"
  | "sparkles";

export const lucideIcons: Record<AppIcon, LucideIcon> = {
  globe: Globe,
  cloud: Cloud,
  shield: ShieldCheck,
  network: Network,
  layers: Layers,
  locate: Locate,
  search: Search,
  lock: Lock,
  home: Home,
  book: BookOpen,
  message: MessageCircle,
  flame: Flame,
  zap: Zap,
  award: Award,
  trophy: Trophy,
  sparkles: Sparkles,
};

export const trackIcons: Record<TrackId, AppIcon> = {
  networking: "globe",
  cloud: "cloud",
  security: "shield",
  ai: "sparkles",
  web: "layers",
  software: "book",
};

export const lessonIcons: Record<string, AppIcon> = {
  "net-what-is-a-network": "network",
  "net-osi-tcpip": "layers",
  "net-ip-addressing": "locate",
  "net-devices": "network",
  "net-ports-protocols": "layers",
  "net-dns": "search",
  "net-http-https": "lock",
  "net-nat-firewall": "shield",
  "web-internet-vs-web": "globe",
  "web-http": "network",
  "web-urls": "search",
  "web-html-basics": "layers",
  "web-css-basics": "sparkles",
  "web-javascript-basics": "zap",
  "web-frontend-backend": "network",
  "web-apis": "layers",
  "web-rest-api": "layers",
  "web-auth": "lock",
  "web-databases": "book",
  "web-deployment": "cloud",
  "sw-what-is-software": "book",
  "sw-dev-basics": "book",
  "sw-algorithms": "zap",
  "sw-data-structures": "layers",
  "sw-programming-basics": "book",
  "sw-oop": "layers",
  "sw-git": "network",
  "sw-testing": "shield",
  "sw-debugging": "search",
  "sw-architecture": "layers",
  "sw-design-patterns": "sparkles",
  "sw-api-docs": "book",
  "sw-cicd": "zap",
};

export const chatTopicIcons: Record<string, AppIcon> = {
  "net-chat-lan": "home",
  "net-chat-dns": "search",
  "net-chat-https": "lock",
};

export function getTrackIcon(trackId: TrackId | null | undefined): AppIcon {
  if (!trackId) return "globe";
  return trackIcons[trackId] ?? "globe";
}

export function getLessonIcon(lessonId: string, fallback?: string): AppIcon {
  if (lessonIcons[lessonId]) return lessonIcons[lessonId];
  if (fallback && fallback in lucideIcons) return fallback as AppIcon;
  return "book";
}

export function getChatTopicIcon(topicId: string): AppIcon {
  return chatTopicIcons[topicId] ?? "message";
}
