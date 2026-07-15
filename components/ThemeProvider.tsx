"use client";

import { createContext, useContext, useCallback, useEffect, useMemo, useState, ReactNode } from "react";

export type Theme = "a" | "b" | "c";
export type Layout = "1" | "2" | "3";

interface ThemeContextType {
  theme: Theme;
  layout: Layout;
  setTheme: (t: Theme) => void;
  setLayout: (l: Layout) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "a",
  layout: "1",
  setTheme: () => {},
  setLayout: () => {},
});

function readStorage<T extends string>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  return (localStorage.getItem(key) as T) ?? fallback;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => readStorage("a6-theme", "a"));
  const [layout, setLayoutState] = useState<Layout>(() => readStorage("a6-layout", "1"));

  // Sync HTML attribute whenever theme changes (including initial mount)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem("a6-theme", t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  const setLayout = useCallback((l: Layout) => {
    setLayoutState(l);
    localStorage.setItem("a6-layout", l);
  }, []);

  const value = useMemo(
    () => ({ theme, layout, setTheme, setLayout }),
    [theme, layout, setTheme, setLayout]
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
