"use client";

import { useState, ReactNode } from "react";
import { useTheme, type Theme, type Layout } from "./ThemeProvider";

const palettes: { id: Theme; name: string; fond: string; accent: string; dark: string }[] = [
  { id: "a", name: "Terre & Lumière", fond: "#EDE0C4", accent: "#C4522A", dark: "#1B2E3C" },
  { id: "b", name: "Ardoise & Or",    fond: "#F2F0EB", accent: "#B8972E", dark: "#2A2D35" },
  { id: "c", name: "Forêt & Feu",     fond: "#E9EDE7", accent: "#CC3E18", dark: "#1E3828" },
  { id: "d", name: "Nuit & Or",       fond: "#F7E9D2", accent: "#F2B705", dark: "#1E2F44" },
];

const layouts: { id: Layout; name: string; label: string; icon: string }[] = [
  { id: "1", name: "Editorial",  label: "Cards + Carrusel",     icon: "▤" },
  { id: "2", name: "Magazine",   label: "Split + Lista",         icon: "▥" },
  { id: "3", name: "Immersif",   label: "Pantallas completas",   icon: "▦" },
];

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
  const { theme, layout, setTheme, setLayout } = useTheme();
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
