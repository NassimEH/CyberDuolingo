/**
 * Breaks the sessionStore ↔ remoteSync import cycle.
 * sessionStore binds real getters/setters at module init; remoteSync reads via this bridge.
 */

export type AuthProvider = "neon" | "apple" | "google" | null;

export type SessionBridgeState = {
  authProvider: AuthProvider;
  isSignedIn: boolean;
  email: string | null;
  firstName: string | null;
  avatarUri: string | null;
};

type SessionBridge = {
  getState: () => SessionBridgeState;
  patch: (partial: Partial<SessionBridgeState>) => void;
};

const fallback: SessionBridgeState = {
  authProvider: null,
  isSignedIn: false,
  email: null,
  firstName: null,
  avatarUri: null,
};

let bridge: SessionBridge = {
  getState: () => fallback,
  patch: () => {},
};

export function bindSessionBridge(next: SessionBridge): void {
  bridge = next;
}

export function getSessionBridge(): SessionBridge {
  return bridge;
}
