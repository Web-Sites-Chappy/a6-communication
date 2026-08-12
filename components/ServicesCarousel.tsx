import { MarqueeCards } from "@/components/ui/marquee-cards";
import type { MarqueeCardData } from "@/components/ui/marquee-card";
import { servicesData } from "@/lib/servicesData";

const ACCENT_CYCLE = ["#003DDE", "#FFE35B", "#FB8500", "#D2E6DC"];

const services: MarqueeCardData[] = servicesData.map((service, i) => ({
  id: service.slug,
  title: service.title,
  description: service.category,
  image: service.carouselImage,
  href: `/nos-services/${service.slug}`,
  accentColor: ACCENT_CYCLE[i % ACCENT_CYCLE.length],
}));

export default function ServicesCarousel() {
  return (
    <section style={{ width: "100%", margin: "60px 0 30px", padding: "48px 20px", backgroundColor: "#D2E6DC" }}>
      <MarqueeCards items={services} ariaLabel="Nos services" />
    </section>
  );
}
