"use client";

export default function ContactForm() {
  return (
    <form style={{ maxWidth: "600px", margin: "0 auto" }} onSubmit={(e) => e.preventDefault()}>
      {[
        { label: "Votre nom", type: "text", name: "name", placeholder: "Manuel Dupont" },
        { label: "Email", type: "email", name: "email", placeholder: "contact@exemple.fr" },
        { label: "Organisation", type: "text", name: "org", placeholder: "Mairie de Saint-Drézéry" },
      ].map((field) => (
        <div key={field.name} style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 200,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--c-navy)",
              marginBottom: "8px",
            }}
          >
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            className="input-field"
          />
        </div>
      ))}

      <div style={{ marginBottom: "28px" }}>
        <label
          style={{
            display: "block",
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 200,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--c-navy)",
            marginBottom: "8px",
          }}
        >
          Votre message
        </label>
        <textarea
          name="message"
          rows={6}
          placeholder="Décrivez votre projet..."
          className="input-field"
          style={{ resize: "vertical" }}
        />
      </div>

      <button type="submit" className="btn-rouge" style={{ width: "100%", fontSize: "1.4rem" }}>
        Envoyer le message
      </button>
    </form>
  );
}
