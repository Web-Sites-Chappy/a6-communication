"use client";

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
      "Photographie",
      "Vidéo",
      "Relations presse",
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

export default function ContactForm() {
  return (
    <form style={{ maxWidth: "600px", margin: "0 auto" }} onSubmit={(e) => e.preventDefault()}>
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
            className="input-field"
          />
        </div>
      ))}

      <div style={{ marginBottom: "20px" }}>
        <label style={labelStyle}>Service concerné</label>
        <select name="service" className="input-field" defaultValue="">
          <option value="" disabled>
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
