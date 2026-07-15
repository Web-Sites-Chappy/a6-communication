"use client";

import { useTheme } from "./ThemeProvider";
import HomeEditorial from "./HomeEditorial";
import HomeMagazine from "./HomeMagazine";
import HomeImmersif from "./HomeImmersif";

export default function HomeLayout() {
  const { layout } = useTheme();

  if (layout === "2") return <HomeMagazine />;
  if (layout === "3") return <HomeImmersif />;
  return <HomeEditorial />;
}
