"use client";

import { useSyncExternalStore } from "react";

const CONSENT_KEY = "nublix-cookie-consent";

export type Consent = "pending" | "accepted" | "rejected";

// localStorage writes don't notify the tab that made them (the native
// `storage` event only fires in *other* tabs), so `decide()` below calls
// every registered listener itself right after writing — the same
// subscribe/notify shape useSyncExternalStore expects, mirroring
// usePrefersReducedMotion.ts's pattern for safely reading browser-only
// state without a hydration mismatch.
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Consent {
  const stored = window.localStorage.getItem(CONSENT_KEY);
  return stored === "accepted" || stored === "rejected" ? stored : "pending";
}

function getServerSnapshot(): Consent {
  return "pending";
}

export function useCookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const decide = (next: Exclude<Consent, "pending">) => {
    window.localStorage.setItem(CONSENT_KEY, next);
    listeners.forEach((listener) => listener());
  };

  return { consent, decide };
}
