import ContactServicesHero from "@/components/ContactServicesHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact | A6 Communication",
  alternates: { canonical: `${SITE_URL}/contact` },
};

const info: { label: string; value: string; href?: string }[] = [
  { label: "Région",           value: "Occitanie, France" },
  { label: "Téléphone",        value: "06 10 18 87 47", href: "tel:+33610188747" },
  { label: "Email",            value: "contact@a6agence.com", href: "mailto:contact@a6agence.com" },
];

export default function ContactPage() {
  return (
    <main>
      <ContactServicesHero />

      <div
        id="form"
        style={{
          width: "var(--w-max)",
          maxWidth: "var(--w-limit-text)",
          margin: "0 auto",
          padding: "60px 20px 80px",
        }}
      >
        <Reveal>
          <AccentHeading lead="Contact" style={{ marginBottom: "40px" }} />
        </Reveal>

        <Reveal delay={100}>
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              marginBottom: "50px",
              justifyContent: "center",
            }}
          >
            {info.map((item) => (
              <div
                key={item.label}
                style={{ textAlign: "center", flex: "1", minWidth: "min(180px, 100%)" }}
              >
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 200, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--c-rouge-fg)", marginBottom: "6px" }}>
                  {item.label}
                </p>
                <p style={{ fontSize: "0.85rem", fontFamily: "var(--font-body)", color: "var(--c-navy)" }}>
                  {item.href ? (
                    <a href={item.href} style={{ color: "inherit" }}>
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <ContactForm />
        </Reveal>
      </div>
    </main>
  );
}
