import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Barlow_Condensed, Inter, Work_Sans, IBM_Plex_Sans, Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";

// Body fonts (texte courant) — sélectionnables via le ThemeSwitcher.
// Même logique que les display fonts : chaque police a sa propre variable CSS,
// globals.css choisit laquelle alimente `--font-body` selon `data-body-font`.
// "Arial / Helvetica" n'a pas besoin de loader : c'est une pile de polices système.

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-inter",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body-work",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-plex",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-body-archivo",
  display: "swap",
});

const bodyFontVariables = [
  jakartaSans.variable,
  inter.variable,
  workSans.variable,
  ibmPlexSans.variable,
  archivo.variable,
].join(" ");

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
    <html lang="fr" className={`${bodyFontVariables} ${displayFontVariables} antialiased`}>
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
