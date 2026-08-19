import Link from "next/link";
import Reveal from "@/components/Reveal";
import AccentHeading from "@/components/AccentHeading";

export const metadata = {
  title: "Page introuvable | A6 Communication",
};

export default function NotFound() {
  return (
    <main>
      <div
        style={{
          width: "var(--w-max)",
          maxWidth: "var(--w-limit-text)",
          margin: "0 auto",
          padding: "140px 20px 120px",
          textAlign: "center",
        }}
      >
        <Reveal>
          <p
            style={{
              fontFamily: "var(--font-display-bricolage)",
              fontWeight: 700,
              fontSize: "clamp(4rem, 12vw, 7rem)",
              lineHeight: "0.85em",
              color: "var(--c-rouge-fg)",
              marginBottom: "10px",
            }}
          >
            404
          </p>
          <AccentHeading lead="Cette page" accent="n'existe pas" />
          <p
            style={{
              marginTop: "20px",
              fontSize: "1.05rem",
              lineHeight: "1.6em",
              fontFamily: "var(--font-body)",
              color: "rgba(var(--c-navy-rgb), 0.75)",
              maxWidth: "480px",
              margin: "20px auto 0",
            }}
          >
            Le lien suivi est peut-être obsolète, ou l&apos;adresse contient une erreur.
          </p>
          <Link
            href="/"
            className="btn-rouge"
            style={{ display: "inline-block", marginTop: "36px" }}
          >
            Retour à l&apos;accueil
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
