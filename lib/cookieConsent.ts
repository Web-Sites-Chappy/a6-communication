export interface CookieConsent {
  analytics: boolean;
  timestamp: number;
}

const STORAGE_KEY = "a6-cookie-consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "a6:open-cookie-settings";

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as CookieConsent;
  } catch {
    return null;
  }
}

export function setCookieConsent(analytics: boolean): void {
  const consent: CookieConsent = { analytics, timestamp: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
