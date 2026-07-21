"use client";

import { createContext, useContext, useCallback, useEffect, useMemo, useState, ReactNode } from "react";

export type Theme = "a" | "b" | "c" | "d" | "e" | "f" | "g";
export type Layout = "1" | "2" | "3";
export type Font = "bierika" | "barlow" | "quffer" | "locatro" | "apoc" | "palmore" | "vesterbro";
export type BodyFont = "jakarta" | "inter" | "system" | "work" | "plex" | "archivo";

interface ThemeContextType {
  theme: Theme;
  layout: Layout;
  font: Font;
  bodyFont: BodyFont;
  setTheme: (t: Theme) => void;
  setLayout: (l: Layout) => void;
  setFont: (f: Font) => void;
  setBodyFont: (f: BodyFont) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "a",
  layout: "1",
  font: "bierika",
  bodyFont: "jakarta",
  setTheme: () => {},
  setLayout: () => {},
  setFont: () => {},
  setBodyFont: () => {},
});

function readStorage<T extends string>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  return (localStorage.getItem(key) as T) ?? fallback;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => readStorage("a6-theme", "a"));
  const [layout, setLayoutState] = useState<Layout>(() => readStorage("a6-layout", "1"));
  const [font, setFontState] = useState<Font>(() => readStorage("a6-font", "bierika"));
  const [bodyFont, setBodyFontState] = useState<BodyFont>(() => readStorage("a6-body-font", "jakarta"));

  // Sync HTML attribute whenever theme changes (including initial mount)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-font", font);
  }, [font]);

  useEffect(() => {
    document.documentElement.setAttribute("data-body-font", bodyFont);
  }, [bodyFont]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem("a6-theme", t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  const setLayout = useCallback((l: Layout) => {
    setLayoutState(l);
    localStorage.setItem("a6-layout", l);
  }, []);

  const setFont = useCallback((f: Font) => {
    setFontState(f);
    localStorage.setItem("a6-font", f);
    document.documentElement.setAttribute("data-font", f);
  }, []);

  const setBodyFont = useCallback((f: BodyFont) => {
    setBodyFontState(f);
    localStorage.setItem("a6-body-font", f);
    document.documentElement.setAttribute("data-body-font", f);
  }, []);

  const value = useMemo(
    () => ({ theme, layout, font, bodyFont, setTheme, setLayout, setFont, setBodyFont }),
    [theme, layout, font, bodyFont, setTheme, setLayout, setFont, setBodyFont]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
