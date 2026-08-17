import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Serif_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CookieBanner from "@/components/CookieBanner";
import { SITE_URL } from "@/lib/siteConfig";

// Charte A6 — trois polices seulement :
//  - Bricolage Grotesque : titres grotesque (var(--font-display-bricolage))
//  - DM Serif Display    : accents italiques dans les titres (var(--font-display-dmserif))
//  - Work Sans           : corps de texte (var(--font-body-work))
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  // Le 200 est indispensable : globals.css et les composants déclarent
  // font-weight 200 pour les titres. Sans lui le navigateur synthétisait
  // le poids depuis le 400.
  weight: ["200", "400", "500", "600", "700", "800"],
  variable: "--font-display-bricolage",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display-dmserif",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-work",
  display: "swap",
});

const fontVariables = [
  bricolageGrotesque.variable,
  dmSerifDisplay.variable,
  workSans.variable,
].join(" ");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "A6 Communication & Événementiel",
  description:
    "Agence de Communication et événementiel dirigée par Manuel et Eric. Alchimie, Audace, Acceptation, Agilité, Authenticité, Assurance.",
};

// Donnees issues de /mentions-legales. Le telephone et les URLs LinkedIn des 2
// dirigeants manquent encore (a demander au client, voir
// Auditorias/FULL-AUDIT-REPORT.md critique #5) : on ne les invente pas, ils
// sont omis du schema plutot que d'y mettre une valeur fausse.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "A6 Communication et Événementiel",
  legalName: "A6 Communication et Événementiel",
  url: SITE_URL,
  image: `${SITE_URL}/logo-a6.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 Allée Kléber",
    addressLocality: "Montpellier",
    postalCode: "34000",
    addressCountry: "FR",
  },
  areaServed: "Occitanie, France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fontVariables} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Nav />
        {children}
        <Reveal direction="up" distance={30} threshold={0.05}>
          <Footer />
        </Reveal>
        <CookieBanner />
      </body>
    </html>
  );
}
