"use client";

import { useEffect, useRef, useState } from "react";
import {
  getCookieConsent,
  setCookieConsent,
  OPEN_COOKIE_SETTINGS_EVENT,
} from "@/lib/cookieConsent";

/** Le bandeau est en position fixed : sans cette variable il recouvre le CTA du
 *  hero à la première visite. Les héros s'en servent pour dégager le bas. */
const BANNER_HEIGHT_VAR = "--cookie-banner-h";

const outlineBtnStyle: React.CSSProperties = {
  background: "none",
  border: "1px solid rgba(255,255,255,0.35)",
  borderRadius: "4px",
  color: "white",
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.85rem",
  padding: "10px 18px",
  cursor: "pointer",
  transition: "border-color 0.2s",
  // Sans cela, les trois boutons débordaient du bord droit en 390px.
  flex: "1 1 auto",
  whiteSpace: "nowrap",
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Publie la hauteur réelle du bandeau tant qu'il est affiché.
  useEffect(() => {
    const root = document.documentElement;
    if (!visible) {
      root.style.removeProperty(BANNER_HEIGHT_VAR);
      return;
    }

    const publish = () => {
      const height = bannerRef.current?.offsetHeight ?? 0;
      root.style.setProperty(BANNER_HEIGHT_VAR, `${height}px`);
    };
    publish();

    const observer = new ResizeObserver(publish);
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => {
      observer.disconnect();
      root.style.removeProperty(BANNER_HEIGHT_VAR);
    };
  }, [visible, customizing]);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      setVisible(true);
    } else {
      setAnalytics(consent.analytics);
    }

    const reopen = () => {
      setVisible(true);
      setCustomizing(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  const saveConsent = (analyticsConsent: boolean) => {
    setCookieConsent(analyticsConsent);
    setAnalytics(analyticsConsent);
    setVisible(false);
    setCustomizing(false);
  };

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-label="Gestion des cookies"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: "var(--c-navy)",
        color: "white",
        // 143px de haut mangeaient la place du hero : bandeau resserré.
        padding: "16px clamp(20px, 5vw, 60px)",
        boxShadow: "0 -8px 30px rgba(0,0,0,0.35)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 320px" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              textTransform: "uppercase",
              fontWeight: 200,
              fontSize: "1rem",
              letterSpacing: "0.08em",
              marginBottom: "8px",
              color: "var(--c-btn-accent)",
            }}
          >
            Cookies
          </p>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.85rem",
              lineHeight: "1.6em",
              color: "rgba(255,255,255,0.75)",
              margin: 0,
            }}
          >
            Nous utilisons des cookies essentiels au fonctionnement du site et, sous réserve de
            votre consentement, des cookies de mesure d&apos;audience. Consultez notre{" "}
            <a
              href="/politique-de-confidentialite"
              style={{ color: "white", textDecoration: "underline" }}
            >
              politique de confidentialité
            </a>
            .
          </p>

          {customizing && (
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-body), sans-serif",
                  opacity: 0.55,
                }}
              >
                <input type="checkbox" checked disabled /> Essentiels (toujours actifs)
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-body), sans-serif",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                Mesure d&apos;audience (statistiques anonymes)
              </label>
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            flex: "1 1 auto",
          }}
        >
          {customizing ? (
            <button
              className="btn-rouge"
              onClick={() => saveConsent(analytics)}
              style={{ fontSize: "0.85rem", padding: "10px 20px" }}
            >
              Enregistrer mes choix
            </button>
          ) : (
            <>
              <button style={outlineBtnStyle} onClick={() => setCustomizing(true)}>
                Personnaliser
              </button>
              <button style={outlineBtnStyle} onClick={() => saveConsent(false)}>
                Refuser
              </button>
              <button
                className="btn-rouge"
                onClick={() => saveConsent(true)}
                style={{ fontSize: "0.85rem", padding: "10px 20px", flex: "1 1 auto", whiteSpace: "nowrap" }}
              >
                Accepter tout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
