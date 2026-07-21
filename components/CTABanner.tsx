import Link from "next/link";

interface CTABannerProps {
  title: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function CTABanner({ title, ctaLabel, ctaHref }: CTABannerProps) {
  return (
    <div style={{ backgroundColor: "var(--c-btn-accent)", padding: "50px 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "20px",
          width: "90%",
          maxWidth: "820px",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 200,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: "0.9em",
            color: "var(--c-on-accent)",
            textTransform: "uppercase",
            textAlign: "left",
            flex: 1,
            minWidth: "200px",
          }}
        >
          {title}
        </h2>
        <Link href={ctaHref} className="btn-blanc" style={{ whiteSpace: "nowrap" }}>
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
