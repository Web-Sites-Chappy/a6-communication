import { MarqueeCards } from "@/components/ui/marquee-cards";
import type { MarqueeCardData } from "@/components/ui/marquee-card";

const events: MarqueeCardData[] = [
  {
    id: "congres-architectes",
    title: "Congrès de l'Ordre des Architectes",
    description: "Octobre — Décembre 2025 · Événementiel",
    image: "/photos/DSC_0802.jpg",
    href: "/realisations",
    accentColor: "#003DDE",
  },
  {
    id: "forum-artisans",
    title: "Forum Artisans du Bâtiment",
    description: "Juin 2025 · Communication",
    image: "/photos/DSC_0836.jpg",
    href: "/realisations",
    accentColor: "#FFE35B",
  },
  {
    id: "journees-patrimoine",
    title: "Journées du Patrimoine Occitanie",
    description: "Septembre 2024 · Événementiel",
    image: "/photos/DSC_0855.jpg",
    href: "/realisations",
    accentColor: "#FB8500",
  },
  {
    id: "assemblee-viticole",
    title: "Assemblée Domaines Viticoles",
    description: "Novembre 2024 · Communication",
    image: "/photos/DSC_1019.jpg",
    href: "/realisations",
    accentColor: "#D2E6DC",
  },
];

export default function EventsMarquee() {
  return (
    <section style={{ width: "100%", margin: "60px 0 30px", padding: "48px 20px", backgroundColor: "#D2E6DC" }}>
      <MarqueeCards items={events} ariaLabel="Nos réalisations récentes" />
    </section>
  );
}
