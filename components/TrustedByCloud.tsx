import Link from "next/link";
import { cn } from "@/lib/utils";
import AccentHeading from "@/components/AccentHeading";

interface PartnerLogo {
  id: string;
  /** Nom complet de la marque — sert de texte alternatif et d'aria-label. */
  name: string;
  src: string;
  /** Dimensions intrinsèques du fichier, pour éviter tout décalage de mise en page. */
  width: number;
  height: number;
  /**
   * Hauteur d'affichage en px sur desktop. Réglée marque par marque : les logos
   * sont de formats très différents (bandeau horizontal, carré, portrait), une
   * hauteur unique déséquilibrerait visuellement la rangée.
   */
  displayHeight: number;
  /** Absent si le site de la marque n'est pas accessible. */
  href?: string;
}

const partners: PartnerLogo[] = [
  {
    id: "ordre-architectes",
    name: "Ordre des Architectes Occitanie",
    src: "/logos/ordre-architectes.svg",
    width: 247,
    height: 48,
    displayHeight: 48,
    href: "https://www.architectes.org/occitanie",
  },
];

function LogoMark({ partner }: { partner: PartnerLogo }) {
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={partner.src}
      alt={partner.name}
      width={partner.width}
      height={partner.height}
      loading="lazy"
      style={{
        height: `calc(var(--partner-scale) * ${partner.displayHeight}px)`,
        width: "auto",
        objectFit: "contain",
        display: "block",
      }}
    />
  );

  return partner.href ? (
    <Link
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={partner.name}
      className="partner-logo"
    >
      {image}
    </Link>
  ) : (
    <div className="partner-logo">{image}</div>
  );
}

interface TrustedByCloudProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  className?: string;
}

export default function TrustedByCloud({
  eyebrow,
  subheading,
  className,
}: TrustedByCloudProps) {
  return (
    <section
      className={cn(className)}
      style={{
        width: "100%",
        backgroundColor: "#D2E6DC",
        padding: "clamp(50px, 6vw, 80px) 0",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "92%", maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(0px, 2vw, 20px)" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(30px, 4vw, 44px)" }}>
          {eyebrow ? (
            <p
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 200,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                color: "var(--c-rouge)",
                marginBottom: "12px",
              }}
            >
              {eyebrow}
            </p>
          ) : null}
          <AccentHeading
            lead="Nous avons créé"
            accent="l'évidence ensemble..."
            style={{
              color: "var(--c-rouge-fg)",
              fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)",
              lineHeight: "1.15em",
              textAlign: "center",
              maxWidth: "750px",
              margin: "0 auto",
            }}
          />
          {subheading ? (
            <p
              style={{
                marginTop: "16px",
                fontSize: "0.95rem",
                lineHeight: "1.6em",
                fontFamily: "var(--font-body), sans-serif",
                color: "rgba(17, 34, 80, 0.65)",
                maxWidth: "480px",
                margin: "16px auto 0",
              }}
            >
              {subheading}
            </p>
          ) : null}
        </div>

        <ul className="partner-logo-row">
          {partners.map((partner) => (
            <li key={partner.id} style={{ display: "flex", alignItems: "center" }}>
              <LogoMark partner={partner} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
