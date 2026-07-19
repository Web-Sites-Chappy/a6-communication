import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Display fonts (titres) — sélectionnables via le ThemeSwitcher.
// Chaque police expose sa propre variable CSS ; globals.css choisit laquelle
// alimente `--font-display` selon l'attribut `data-font` (même logique que les palettes).

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-display-barlow",
  display: "swap",
});

const bierika = localFont({
  src: "./fonts/bierika.ttf",
  variable: "--font-display-bierika",
  display: "swap",
});

const quffer = localFont({
  src: "./fonts/quffer.otf",
  variable: "--font-display-quffer",
  display: "swap",
});

const locatro = localFont({
  src: "./fonts/locatro.otf",
  variable: "--font-display-locatro",
  display: "swap",
});

const apoc = localFont({
  src: [
    { path: "./fonts/apoc/Apoc-Revelations-Trial-Hairline.otf", weight: "100", style: "normal" },
    { path: "./fonts/apoc/Apoc-Revelations-Trial-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/apoc/Apoc-Revelations-Trial-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/apoc/Apoc-Revelations-Trial-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/apoc/Apoc-Revelations-Trial-UltraBold.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-display-apoc",
  display: "swap",
});

const palmore = localFont({
  src: [
    { path: "./fonts/palmore/palmore-light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/palmore/palmore-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/palmore/palmore-semibold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/palmore/palmore-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-display-palmore",
  display: "swap",
});

const displayFontVariables = [
  barlowCondensed.variable,
  bierika.variable,
  quffer.variable,
  locatro.variable,
  apoc.variable,
  palmore.variable,
].join(" ");

export const metadata: Metadata = {
  title: "A6 Communication & Événementiel",
  description:
    "Agence de communication et événementiel dirigée par Manuel et Eric. Alchimie, Audace, Acceptation, Agilité, Authenticité, Assurance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakartaSans.variable} ${displayFontVariables} antialiased`}>
      <body>
        <ThemeProvider>
          <Nav />
          {children}
          <Reveal direction="up" distance={30} threshold={0.05}>
            <Footer />
          </Reveal>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
