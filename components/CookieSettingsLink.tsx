"use client";

import { openCookieSettings } from "@/lib/cookieConsent";

export default function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="footer-link"
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer", font: "inherit" }}
    >
      Gérer les cookies
    </button>
  );
}
