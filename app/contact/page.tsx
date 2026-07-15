import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — A6 Communication",
};

const info = [
  { label: "Région",           value: "Occitanie, France" },
  { label: "Email",            value: "contact@a6communication.fr" },
  { label: "Cibles principales", value: "Architectes · Artisans · Communes · Patrimoine · Viticoles" },
];

export default function ContactPage() {
  return (
    <main>
      <Hero
        imageSrc="/photos/DSC_0836.jpg"
        title={"Parlons de\nvotre projet"}
        height="half"
        ctaLabel="Nous écrire"
        ctaHref="#form"
      />

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
          <h2 style={{ marginBottom: "40px" }}>Contact</h2>
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
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 200, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--c-rouge)", marginBottom: "6px" }}>
                  {item.label}
                </p>
                <p style={{ fontSize: "0.85rem", fontFamily: "var(--font-body)", color: "var(--c-navy)" }}>
                  {item.value}
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
