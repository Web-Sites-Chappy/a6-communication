"use client";

import { useState, ReactNode } from "react";
import { useTheme, type Theme, type Layout, type Font, type BodyFont } from "./ThemeProvider";

const palettes: { id: Theme; name: string; fond: string; accent: string; dark: string }[] = [
  { id: "a", name: "Terre & Lumière", fond: "#EDE0C4", accent: "#C4522A", dark: "#1B2E3C" },
  { id: "b", name: "Ardoise & Or",    fond: "#F2F0EB", accent: "#866027", dark: "#2A2D35" },
  { id: "c", name: "Forêt & Feu",     fond: "#E9EDE7", accent: "#CC3E18", dark: "#1E3828" },
  { id: "d", name: "Nuit & Or",       fond: "#F7E9D2", accent: "#9E680A", dark: "#1E2F44" },
  { id: "e", name: "Lin & Cobalt",    fond: "#E2E6E9", accent: "#2753A5", dark: "#31241C" },
  { id: "f", name: "Craie & Encre",   fond: "#EDEBE8", accent: "#AD1F36", dark: "#1C1C1C" },
  { id: "g", name: "Indigo & Sauge",  fond: "#D2E6DC", accent: "#93325A", dark: "#112250" },
];

const layouts: { id: Layout; name: string; label: string; icon: string }[] = [
  { id: "1", name: "Editorial",  label: "Cards + Carrusel",     icon: "▤" },
  { id: "2", name: "Magazine",   label: "Split + Lista",         icon: "▥" },
  { id: "3", name: "Immersif",   label: "Pantallas completas",   icon: "▦" },
];

const fonts: { id: Font; name: string }[] = [
  { id: "bierika", name: "Bierika" },
  { id: "barlow",  name: "Barlow Condensed" },
  { id: "quffer",  name: "Quffer" },
  { id: "locatro", name: "Locatro" },
  { id: "apoc",    name: "Apoc Revelations" },
  { id: "palmore", name: "Palmore" },
  { id: "vesterbro", name: "Vesterbro Sans (preview)" },
];

const bodyFonts: { id: BodyFont; name: string }[] = [
  { id: "jakarta", name: "Plus Jakarta Sans" },
  { id: "inter",   name: "Inter" },
  { id: "system",  name: "Arial / Helvetica" },
  { id: "work",    name: "Work Sans" },
  { id: "plex",    name: "IBM Plex Sans" },
  { id: "archivo", name: "Archivo" },
];

function bodyFontPreviewFamily(id: BodyFont): string {
  return id === "system" ? `Arial, "Helvetica Neue", Helvetica, sans-serif` : `var(--font-body-${id})`;
}

function SwitcherButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "none",
        border: active ? "1px solid var(--c-rouge)" : "1px solid rgba(255,255,255,0.12)",
        borderRadius: "6px",
        padding: "8px 10px",
        cursor: "pointer",
        transition: "border-color 0.2s",
        width: "100%",
      }}
    >
      {children}
      {active && (
        <span style={{ marginLeft: "auto", color: "var(--c-rouge)", fontSize: "0.7rem" }}>✓</span>
      )}
    </button>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-display)",
        textTransform: "uppercase",
        fontWeight: 200,
        fontSize: "0.75rem",
        letterSpacing: "0.15em",
        color: "rgba(255,255,255,0.5)",
        marginBottom: "12px",
      }}
    >
      {children}
    </p>
  );
}

export default function ThemeSwitcher() {
  const { theme, layout, font, bodyFont, setTheme, setLayout, setFont, setBodyFont } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9000,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "8px",
      }}
    >
      {open && (
        <div
          style={{
            backgroundColor: "var(--c-navy)",
            borderRadius: "8px",
            padding: "20px",
            width: "260px",
            maxHeight: "80vh",
            overflowY: "auto",
            boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
          }}
        >
          <SectionLabel>Palette</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
            {palettes.map((p) => (
              <SwitcherButton key={p.id} active={theme === p.id} onClick={() => setTheme(p.id)}>
                <div style={{ display: "flex", gap: "3px", flexShrink: 0 }}>
                  <span style={{ width: "14px", height: "14px", borderRadius: "50%", backgroundColor: p.fond, display: "block", border: "1px solid rgba(0,0,0,0.1)" }} />
                  <span style={{ width: "14px", height: "14px", borderRadius: "50%", backgroundColor: p.accent, display: "block" }} />
                  <span style={{ width: "14px", height: "14px", borderRadius: "50%", backgroundColor: p.dark, display: "block" }} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    color: theme === p.id ? "white" : "rgba(255,255,255,0.6)",
                    fontWeight: theme === p.id ? 600 : 400,
                  }}
                >
                  {p.name}
                </span>
              </SwitcherButton>
            ))}
          </div>

          <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)", marginBottom: "20px" }} />

          <SectionLabel>Police des titres</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
            {fonts.map((f) => (
              <SwitcherButton key={f.id} active={font === f.id} onClick={() => setFont(f.id)}>
                <span
                  style={{
                    fontFamily: `var(--font-display-${f.id})`,
                    fontSize: "1.3rem",
                    lineHeight: 1,
                    width: "28px",
                    flexShrink: 0,
                    color: font === f.id ? "var(--c-rouge)" : "rgba(255,255,255,0.6)",
                  }}
                >
                  Aa
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    color: font === f.id ? "white" : "rgba(255,255,255,0.6)",
                    fontWeight: font === f.id ? 600 : 400,
                  }}
                >
                  {f.name}
                </span>
              </SwitcherButton>
            ))}
          </div>

          <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)", marginBottom: "20px" }} />

          <SectionLabel>Police du texte</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
            {bodyFonts.map((f) => (
              <SwitcherButton key={f.id} active={bodyFont === f.id} onClick={() => setBodyFont(f.id)}>
                <span
                  style={{
                    fontFamily: bodyFontPreviewFamily(f.id),
                    fontSize: "1.1rem",
                    lineHeight: 1,
                    width: "28px",
                    flexShrink: 0,
                    color: bodyFont === f.id ? "var(--c-rouge)" : "rgba(255,255,255,0.6)",
                  }}
                >
                  Aa
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    color: bodyFont === f.id ? "white" : "rgba(255,255,255,0.6)",
                    fontWeight: bodyFont === f.id ? 600 : 400,
                  }}
                >
                  {f.name}
                </span>
              </SwitcherButton>
            ))}
          </div>

          <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)", marginBottom: "20px" }} />

          <SectionLabel>Style de home</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {layouts.map((l) => (
              <SwitcherButton key={l.id} active={layout === l.id} onClick={() => setLayout(l.id)}>
                <span style={{ fontSize: "1.2rem", color: layout === l.id ? "var(--c-rouge)" : "rgba(255,255,255,0.4)", flexShrink: 0 }}>
                  {l.icon}
                </span>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: layout === l.id ? "white" : "rgba(255,255,255,0.6)", fontWeight: layout === l.id ? 600 : 400, margin: 0 }}>
                    {l.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", color: "rgba(255,255,255,0.35)", margin: 0 }}>
                    {l.label}
                  </p>
                </div>
              </SwitcherButton>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        title="Changer le style"
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          backgroundColor: open ? "var(--c-rouge)" : "var(--c-navy)",
          border: "2px solid rgba(255,255,255,0.15)",
          color: "white",
          cursor: "pointer",
          fontSize: "1.1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          transition: "background-color 0.3s",
          flexShrink: 0,
        }}
        aria-label={open ? "Fermer les options" : "Options de style"}
      >
        {open ? "×" : "◐"}
      </button>
    </div>
  );
}
