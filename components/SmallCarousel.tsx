"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const items = [
  { title: "Architectes", img: "/photos/DSC_0855.jpg", href: "/nos-cibles" },
  { title: "Artisans", img: "/photos/DSC_1091.jpg", href: "/nos-cibles" },
  { title: "Communes", img: "/photos/DSC_0836.jpg", href: "/nos-cibles" },
  { title: "Patrimoine", img: "/photos/DSC_0802.jpg", href: "/nos-cibles" },
  { title: "Viticoles", img: "/photos/DSC_1019.jpg", href: "/nos-cibles" },
];

export default function SmallCarousel({ title }: { title: string }) {
  const [emblaRef] = useEmblaCarousel({ align: "center", containScroll: "trimSnaps" });

  return (
    <section style={{ width: "100%", padding: "50px 0" }}>
      <h2
        style={{
          marginBottom: "40px",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 7vw, 5rem)",
          fontWeight: 200,
          color: "var(--c-rouge)",
          textTransform: "uppercase",
          textAlign: "center",
          lineHeight: "0.85em",
        }}
      >
        {title}
      </h2>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container" style={{ gap: "0" }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="embla__slide"
              style={{ width: "96vw", maxWidth: "220px", margin: "0 15px", textAlign: "center" }}
            >
              <Link href={item.href} style={{ textDecoration: "none", display: "block" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "220px", objectFit: "cover", marginBottom: "10px", display: "block" }}
                />
                <p
                  style={{
                    color: "var(--c-rouge)",
                    fontSize: "1.7rem",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-display)",
                    fontWeight: 200,
                    lineHeight: "1em",
                  }}
                >
                  {item.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
