const services = [
  "Stratégie digitale",
  "Identité visuelle",
  "Production de contenus",
  "Impressions & signalétique",
  "Conception & scénographie",
  "Logistique",
  "Animation",
  "Relations presse",
];

export default function ServicesRibbon() {
  const items = [...services, ...services];

  return (
    <section className="services-ribbon" aria-label="Nos services">
      <div className="services-ribbon-track">
        {items.map((service, index) => (
          <span key={`${service}-${index}`} aria-hidden={index >= services.length}>
            {service}<b aria-hidden="true">A6</b>
          </span>
        ))}
      </div>
    </section>
  );
}
