import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — A6 Communication",
};

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
        <h2 style={{ marginBottom: "40px" }}>Contact</h2>

        {/* Info blocks */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            marginBottom: "50px",
            justifyContent: "center",
          }}
        >
          {[
            { label: "Région", value: "Occitanie, France" },
            { label: "Email", value: "contact@a6communication.fr" },
            { label: "Cibles principales", value: "Architectes · Artisans · Communes · Patrimoine · Viticoles" },
          ].map((info) => (
            <div key={info.label} style={{ textAlign: "center", flex: "1", minWidth: "200px" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 200,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--c-rouge)",
                  marginBottom: "6px",
                }}
              >
                {info.label}
              </p>
              <p style={{ fontSize: "0.85rem", fontFamily: "var(--font-body)", color: "var(--c-navy)" }}>
                {info.value}
              </p>
            </div>
          ))}
        </div>

        {/* Form — client component for interactivity */}
        <ContactForm />
      </div>
    </main>
  );
}
