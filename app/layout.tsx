import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-display",
  display: "swap",
});

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
    <html lang="fr" className={`${jakartaSans.variable} ${barlowCondensed.variable} antialiased`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
