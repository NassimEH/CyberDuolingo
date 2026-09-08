import type { ComponentType } from "react";

// Deep imports bypass broken lucide package.json "exports" for renamed icons.
import Award from "lucide-react-native/dist/esm/icons/award.mjs";
import ArrowRight from "lucide-react-native/dist/esm/icons/arrow-right.mjs";
import Bell from "lucide-react-native/dist/esm/icons/bell.mjs";
import BookOpen from "lucide-react-native/dist/esm/icons/book-open.mjs";
import Check from "lucide-react-native/dist/esm/icons/check.mjs";
import CheckCircle2 from "lucide-react-native/dist/esm/icons/circle-check-big.mjs";
import ChevronDown from "lucide-react-native/dist/esm/icons/chevron-down.mjs";
import ChevronRight from "lucide-react-native/dist/esm/icons/chevron-right.mjs";
import CircleHelp from "lucide-react-native/dist/esm/icons/circle-question-mark.mjs";
import Clock from "lucide-react-native/dist/esm/icons/clock.mjs";
import Cloud from "lucide-react-native/dist/esm/icons/cloud.mjs";
import Flame from "lucide-react-native/dist/esm/icons/flame.mjs";
import Globe from "lucide-react-native/dist/esm/icons/globe.mjs";
import Home from "lucide-react-native/dist/esm/icons/house.mjs";
import Languages from "lucide-react-native/dist/esm/icons/languages.mjs";
import Layers from "lucide-react-native/dist/esm/icons/layers.mjs";
import Locate from "lucide-react-native/dist/esm/icons/locate.mjs";
import Lock from "lucide-react-native/dist/esm/icons/lock.mjs";
import LogOut from "lucide-react-native/dist/esm/icons/log-out.mjs";
import MessageCircle from "lucide-react-native/dist/esm/icons/message-circle.mjs";
import Moon from "lucide-react-native/dist/esm/icons/moon.mjs";
import Network from "lucide-react-native/dist/esm/icons/network.mjs";
import Search from "lucide-react-native/dist/esm/icons/search.mjs";
import ShieldCheck from "lucide-react-native/dist/esm/icons/shield-check.mjs";
import Sparkles from "lucide-react-native/dist/esm/icons/sparkles.mjs";
import Trophy from "lucide-react-native/dist/esm/icons/trophy.mjs";
import User from "lucide-react-native/dist/esm/icons/user.mjs";
import Volume2 from "lucide-react-native/dist/esm/icons/volume-2.mjs";
import Zap from "lucide-react-native/dist/esm/icons/zap.mjs";

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
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock,
  Cloud,
  Flame,
  Globe,
  Home,
  Languages,
  Layers,
  Locate,
  Lock,
  LogOut,
  MessageCircle,
  Moon,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  User,
  Volume2,
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
