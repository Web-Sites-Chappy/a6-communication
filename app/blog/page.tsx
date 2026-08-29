import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | A6 Communication",
  description:
    "Communication institutionnelle, événementiel et identité de marque : nos repères de méthode pour les institutions, collectivités et structures culturelles d’Occitanie.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  return (
    <main>
      <Hero
        imageSrc="/photos/cardstack-blog.webp"
        title={
          <>
            Notre
            <br />
            <span style={{ fontFamily: "var(--font-display-dmserif)", fontStyle: "italic", fontWeight: 400 }}>
              blog
            </span>
          </>
        }
        height="half"
        ctaLabel="Nous contacter"
        ctaHref="/contact"
      />

      <div
        className="actu-grid"
        style={{
          width: "90vw",
          maxWidth: "1100px",
          margin: "50px auto 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
          gap: "40px",
        }}
      >
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delay={Math.min(i, 8) * 70} direction="up">
            <Link href={`/blog/${post.slug}`} className="hub-card" style={{ display: "block", height: "100%" }}>
              <article
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  backgroundColor: "rgba(var(--c-navy-rgb),0.03)",
                  borderBottom: "3px solid var(--c-rouge-fg)",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "220px", flexShrink: 0, overflow: "hidden" }}>
                  <Image
                    src={post.img}
                    alt={post.imgAlt}
                    fill
                    priority={i < 3}
                    sizes="(max-width: 640px) 90vw, 300px"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div
                  style={{
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "var(--c-btn-accent)",
                        borderRadius: "4px",
                        padding: "4px 11px 5px",
                        color: "var(--c-on-accent)",
                        fontFamily: "var(--font-display)",
                        textTransform: "uppercase",
                        fontWeight: 400,
                        fontSize: "0.78rem",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        color: "rgba(var(--c-navy-rgb),0.75)",
                      }}
                    >
                      {post.dateLabel} · {post.readingMinutes} min
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-display-bricolage), sans-serif",
                      fontWeight: 700,
                      textTransform: "none",
                      textAlign: "left",
                      fontSize: "clamp(1.25rem, 2.2vw, 1.55rem)",
                      lineHeight: "1.15em",
                      color: "var(--c-rouge-fg)",
                      marginBottom: "14px",
                    }}
                  >
                    {post.title}
                  </h2>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: "1.65em",
                      fontFamily: "var(--font-body)",
                      color: "rgba(var(--c-navy-rgb),0.82)",
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <span
                    aria-hidden="true"
                    style={{
                      marginTop: "auto",
                      paddingTop: "18px",
                      fontFamily: "var(--font-display)",
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      letterSpacing: "0.14em",
                      color: "var(--c-rouge-fg)",
                    }}
                  >
                    Lire l’article →
                  </span>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <CTASection sentence="un projet en tête ?" buttonLabel="Nous contacter" />
      </Reveal>
    </main>
  );
}
