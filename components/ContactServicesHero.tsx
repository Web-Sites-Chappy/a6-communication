import Image from "next/image";

const services = [
  {
    label: "Stratégie digitale",
    image: "/photos/services/strategie-digitale-hero.webp",
    position: "center",
  },
  {
    label: "Identité visuelle",
    image: "/photos/services/identite-visuelle-hero.webp",
    position: "center",
  },
  {
    label: "Événementiel",
    image: "/photos/services/conception-et-scenographie-hero.webp",
    position: "center",
  },
  {
    label: "Production de contenus",
    image: "/photos/services/production-de-contenus-hero.webp",
    position: "center 38%",
  },
];

export default function ContactServicesHero() {
  return (
    <section className="contact-services-hero" aria-labelledby="contact-hero-title">
      <div className="contact-services-grid" aria-hidden="true">
        {services.map((service, index) => (
          <div className="contact-service-panel" key={service.label}>
            <Image
              src={service.image}
              alt=""
              fill
              priority={index < 2}
              sizes="(max-width: 700px) 50vw, 25vw"
              style={{ objectFit: "cover", objectPosition: service.position }}
            />
            <span>{service.label}</span>
          </div>
        ))}
      </div>

      <div className="contact-services-overlay" />
      <h1 id="contact-hero-title" className="contact-services-title">
        Parlons de
        <br />
        <em>votre projet</em>
      </h1>
    </section>
  );
}
