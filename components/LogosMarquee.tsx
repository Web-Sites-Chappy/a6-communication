import LogosTicker from "@/components/LogosTicker";

/**
 * Bande « Ils nous font confiance » — pleine largeur, juste sous le héros.
 *
 * Le fond Bleu Nuit n'est pas décoratif : le lot de logos clients est livré en
 * version blanche sur transparent (voir lib/clientLogos.ts), donc illisible sur
 * le Vert Eau du site. La bande sombre les rend tous lisibles sans retoucher
 * les fichiers de marque.
 */
export default function LogosMarquee() {
  return (
    <section
      aria-labelledby="logos-confiance"
      style={{
        width: "100%",
        backgroundColor: "var(--c-navy)",
        padding: "clamp(32px, 3.6vw, 52px) 0 clamp(36px, 4vw, 58px)",
      }}
    >
      <p
        id="logos-confiance"
        style={{
          textAlign: "center",
          fontFamily: "var(--font-display-bricolage), sans-serif",
          fontWeight: 200,
          fontSize: "0.72rem",
          textTransform: "uppercase",
          letterSpacing: "0.32em",
          color: "var(--c-fond)",
          marginBottom: "clamp(26px, 3.2vw, 44px)",
        }}
      >
        Créons l&apos;évidence, aux côtés de ceux qui nous font déjà confiance.
      </p>

      <LogosTicker />
    </section>
  );
}
