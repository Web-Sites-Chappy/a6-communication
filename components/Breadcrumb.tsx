import Link from "next/link";
import { SITE_URL } from "@/lib/siteConfig";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  style?: React.CSSProperties;
}

/**
 * Fil d'Ariane visible + BreadcrumbList JSON-LD, en un seul composant pour ne
 * jamais désynchroniser les deux (le plan SEO §3.3 exige les deux sur toutes
 * les pages internes à deux niveaux ou plus).
 */
export default function Breadcrumb({ items, style }: BreadcrumbProps) {
  const trail = [{ label: "Accueil", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav
        aria-label="Fil d'Ariane"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.78rem",
          color: "rgba(var(--c-navy-rgb),0.6)",
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          ...style,
        }}
      >
        {trail.map((item, i) => (
          <span key={item.href} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            {i === trail.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href} style={{ color: "inherit", textDecoration: "underline" }}>
                {item.label}
              </Link>
            )}
            {i < trail.length - 1 && <span aria-hidden="true">/</span>}
          </span>
        ))}
      </nav>
    </>
  );
}
