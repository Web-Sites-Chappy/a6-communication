import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import ArticleBody from "@/components/blog/ArticleBody";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article non trouvé | A6 Communication" };
  }

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      publishedTime: post.date,
      images: [{ url: `${SITE_URL}${post.img}`, alt: post.imgAlt }],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const sections = post.body.filter((block) => block.kind === "h2");
  const suggestions = getRelatedPosts(post);

  /* Schema.org — Article + fil d'Ariane, et FAQPage quand l'article porte une FAQ.
     Prévu par le plan SEO § 3.3 (données structurées dès la mise en ligne). */
  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription,
      image: `${SITE_URL}${post.img}`,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: "fr-FR",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: "A6 Communication et Événementiel" },
      publisher: {
        "@type": "Organization",
        name: "A6 Communication et Événementiel",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-a6-bleu.svg` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (post.faq?.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* En-tête d'article — bandeau Bleu Nuit, le titre est le seul H1 de la page. */}
      <header
        style={{
          backgroundColor: "var(--c-navy)",
          padding: "calc(var(--header-h) + 40px) 0 52px",
        }}
      >
        <div
          style={{
            width: "var(--w-max)",
            maxWidth: "var(--w-limit-text)",
            margin: "0 auto",
          }}
        >
          <nav
            aria-label="Fil d’Ariane"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "8px",
              marginBottom: "22px",
              fontFamily: "var(--font-body)",
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            <Link href="/" className="crumb-link">
              Accueil
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="crumb-link">
              Blog
            </Link>
          </nav>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "12px",
              marginBottom: "18px",
            }}
          >
            <span
              style={{
                backgroundColor: "var(--c-accent2)",
                borderRadius: "4px",
                padding: "4px 11px 5px",
                color: "var(--c-navy)",
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
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              {post.dateLabel} · {post.readingMinutes} min de lecture
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display-bricolage), sans-serif",
              fontWeight: 700,
              textTransform: "none",
              textAlign: "left",
              fontSize: "clamp(2rem, 4.6vw, 3.2rem)",
              lineHeight: "1.05em",
              color: "white",
            }}
          >
            {post.title}
          </h1>

          <p
            style={{
              marginTop: "22px",
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: "1.7em",
              color: "rgba(255,255,255,0.86)",
            }}
          >
            {post.excerpt}
          </p>
        </div>
      </header>

      <div
        style={{
          width: "var(--w-max)",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 0 36px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(200px, 34vw, 420px)",
            marginTop: "-30px",
          }}
        >
          <Image
            src={post.img}
            alt={post.imgAlt}
            fill
            priority
            sizes="(max-width: 1000px) 100vw, 1000px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div
        style={{
          width: "var(--w-max)",
          maxWidth: "var(--w-limit-text)",
          margin: "0 auto",
          padding: "8px 0 20px",
        }}
      >
        {sections.length > 2 ? (
          <Reveal>
          <nav
            aria-label="Sommaire"
            style={{
              margin: "0 0 10px",
              padding: "22px 26px",
              backgroundColor: "rgba(var(--c-navy-rgb), 0.05)",
              borderTop: "2px solid var(--c-rouge-fg)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display-bricolage), sans-serif",
                fontWeight: 700,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "var(--c-rouge-fg)",
                marginBottom: "12px",
              }}
            >
              Sommaire
            </p>
            <ol
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                paddingLeft: "1.2em",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: "1.5em",
                color: "var(--c-navy)",
              }}
            >
              {sections.map((section) =>
                section.kind === "h2" ? (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="toc-link">
                      {section.text}
                    </a>
                  </li>
                ) : null
              )}
            </ol>
          </nav>
          </Reveal>
        ) : null}

        <ArticleBody blocks={post.body} />

        {post.faq?.length ? (
          <Reveal>
          <section aria-labelledby="faq-titre" style={{ marginTop: "56px" }}>
            <h2
              id="faq-titre"
              style={{
                fontFamily: "var(--font-display-bricolage), sans-serif",
                fontWeight: 700,
                textTransform: "none",
                textAlign: "left",
                fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                lineHeight: "1.1em",
                color: "var(--c-rouge-fg)",
                marginBottom: "10px",
              }}
            >
              Questions fréquentes
            </h2>
            {post.faq.map((item) => (
              <div key={item.question} style={{ marginTop: "26px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display-bricolage), sans-serif",
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                    lineHeight: "1.3em",
                    color: "var(--c-navy)",
                  }}
                >
                  {item.question}
                </h3>
                <p
                  style={{
                    marginTop: "10px",
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    lineHeight: "1.75em",
                    color: "rgba(var(--c-navy-rgb), 0.86)",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </section>
          </Reveal>
        ) : null}

        {post.related?.length ? (
          <Reveal>
          <section aria-labelledby="liens-titre" style={{ marginTop: "56px" }}>
            <h2
              id="liens-titre"
              style={{
                fontFamily: "var(--font-display-bricolage), sans-serif",
                fontWeight: 700,
                textTransform: "none",
                textAlign: "left",
                fontSize: "clamp(1.3rem, 2.4vw, 1.6rem)",
                lineHeight: "1.15em",
                color: "var(--c-rouge-fg)",
                marginBottom: "14px",
              }}
            >
              Pour aller plus loin
            </h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none" }}>
              {post.related.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="article-related-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          </Reveal>
        ) : null}
      </div>

      {/* Articles proches — maillage interne entre clusters. */}
      <Reveal
        style={{
          width: "90vw",
          maxWidth: "1100px",
          margin: "60px auto 80px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display-bricolage), sans-serif",
            fontWeight: 700,
            textTransform: "none",
            fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)",
            lineHeight: "1.15em",
            color: "var(--c-rouge-fg)",
            marginBottom: "26px",
          }}
        >
          À lire aussi
        </h2>
        <div
          className="actu-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
            gap: "30px",
          }}
        >
          {suggestions.map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} className="hub-card" style={{ display: "block" }}>
              <article
                style={{
                  height: "100%",
                  backgroundColor: "rgba(var(--c-navy-rgb),0.03)",
                  borderBottom: "3px solid var(--c-rouge-fg)",
                  padding: "22px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    textTransform: "uppercase",
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    color: "var(--c-rouge-fg)",
                  }}
                >
                  {item.category}
                </span>
                <h3
                  style={{
                    marginTop: "10px",
                    fontFamily: "var(--font-display-bricolage), sans-serif",
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "1.15rem",
                    lineHeight: "1.2em",
                    color: "var(--c-navy)",
                  }}
                >
                  {item.title}
                </h3>
              </article>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <CTASection sentence="un projet en tête ?" buttonLabel="Nous contacter" />
      </Reveal>
    </main>
  );
}
