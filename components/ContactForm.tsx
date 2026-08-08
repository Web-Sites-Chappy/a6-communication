"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-display)",
  fontSize: "1rem",
  fontWeight: 200,
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  color: "var(--c-navy)",
  marginBottom: "8px",
};

const serviceOptions = [
  {
    group: "Communication",
    options: [
      "Stratégie digitale",
      "Identité visuelle",
      "Production de contenus",
      "Impressions/Signalétique",
    ],
  },
  {
    group: "Événementiel",
    options: [
      "Conception & scénographie",
      "Logistique",
      "Animation",
      "Communication événementielle",
    ],
  },
];

function ContactFormInner() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [selectedService, setSelectedService] = useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setSelectedService(serviceParam);
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          org: data.get("org"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form style={{ maxWidth: "600px", margin: "0 auto" }} onSubmit={handleSubmit}>
      {[
        { label: "Votre nom", type: "text", name: "name", placeholder: "Manuel Dupont" },
        { label: "Email", type: "email", name: "email", placeholder: "contact@exemple.fr" },
        { label: "Organisation", type: "text", name: "org", placeholder: "Mairie de Saint-Drézéry" },
      ].map((field) => (
        <div key={field.name} style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required={field.name !== "org"}
            className="input-field"
          />
        </div>
      ))}

      <div style={{ marginBottom: "20px" }}>
        <label style={labelStyle}>Service concerné</label>
        <select
          name="service"
          className="input-field"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">
            Sélectionnez un service
          </option>
          {serviceOptions.map((section) => (
            <optgroup key={section.group} label={section.group}>
              {section.options.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </optgroup>
          ))}
          <option value="Autre / je ne sais pas encore">Autre / je ne sais pas encore</option>
        </select>
      </div>

      <div style={{ marginBottom: "28px" }}>
        <label style={labelStyle}>Votre message</label>
        <textarea
          name="message"
          rows={6}
          placeholder="Décrivez votre projet..."
          required
          className="input-field"
          style={{ resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        className="btn-rouge"
        disabled={status === "sending"}
        style={{ width: "100%", fontSize: "1.4rem", opacity: status === "sending" ? 0.6 : 1 }}
      >
        {status === "sending" ? "Envoi..." : "Envoyer le message"}
      </button>

      {status === "sent" && (
        <p style={{ marginTop: "16px", textAlign: "center", color: "var(--c-navy)", fontFamily: "var(--font-body)" }}>
          Merci, votre message a bien été envoyé. Nous vous répondrons rapidement.
        </p>
      )}
      {status === "error" && (
        <p style={{ marginTop: "16px", textAlign: "center", color: "var(--c-rouge-fg)", fontFamily: "var(--font-body)" }}>
          Une erreur est survenue. Merci de réessayer ou de nous écrire directement à contact@a6communication.fr.
        </p>
      )}
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "40px 0" }}>Chargement du formulaire...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
