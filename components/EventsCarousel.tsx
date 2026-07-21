"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const events = [
  { title: "Congrès de l'Ordre des Architectes", dates: "Octobre — Décembre 2025", category: "Événementiel", img: "/photos/DSC_0802.jpg", href: "/realisations" },
  { title: "Forum Artisans du Bâtiment",          dates: "Juin 2025",               category: "Communication", img: "/photos/DSC_0836.jpg", href: "/realisations" },
  { title: "Journées du Patrimoine Occitanie",    dates: "Septembre 2024",           category: "Événementiel", img: "/photos/DSC_0855.jpg", href: "/realisations" },
  { title: "Assemblée Domaines Viticoles",        dates: "Novembre 2024",            category: "Communication", img: "/photos/DSC_1019.jpg", href: "/realisations" },
];

export default function EventsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

  return (
    <section style={{ width: "100%", margin: "60px 0 30px" }}>
      <div className="embla" ref={emblaRef} style={{ width: "100%", maxWidth: "1100px", margin: "0 auto" }}>
        <div className="embla__container">
          {events.map((ev, i) => (
            <div key={i} className="embla__slide" style={{ width: "100%" }}>
              <Link
                href={ev.href}
                className="carousel-slide-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  className="carousel-img"
                  style={{
                    width: "50%",
                    maxWidth: "450px",
                    height: "50vh",
                    maxHeight: "350px",
                    flexShrink: 0,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ev.img}
                    alt={ev.title}
                    style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                  />
                </div>

                <div
                  className="carousel-text"
                  style={{
                    width: "calc(50% - 60px)",
                    padding: "30px",
                    maxWidth: "400px",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 200, fontSize: "1.5rem", lineHeight: "0.9em", color: "var(--c-navy)", marginBottom: "0.5em" }}>
                    {ev.dates}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 200, fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: "0.9em", color: "var(--c-rouge-fg)", marginBottom: "1em" }}>
                    {ev.title}
                  </h3>
                  <span style={{ backgroundColor: "var(--c-btn-accent)", borderRadius: "4px", padding: "7px 15px 8px", color: "var(--c-on-accent)", fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 200, fontSize: "1rem", letterSpacing: "0.08em" }}>
                    {ev.category}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "24px" }}>
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="carousel-btn"
          style={{ width: "35px", height: "35px", backgroundColor: "var(--c-btn-accent)", border: "none", borderRadius: "50%", color: "var(--c-on-accent)", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}
          aria-label="Précédent"
        >
          ‹
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="carousel-btn"
          style={{ width: "35px", height: "35px", backgroundColor: "var(--c-btn-accent)", border: "none", borderRadius: "50%", color: "var(--c-on-accent)", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}
          aria-label="Suivant"
        >
          ›
        </button>
      </div>
    </section>
  );
}
