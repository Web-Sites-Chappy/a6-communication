import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Mentions légales — A6 Communication",
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <div
        style={{
          width: "var(--w-max)",
          maxWidth: "var(--w-limit-text)",
          margin: "0 auto",
          padding: "80px 20px 90px",
        }}
      >
        <Reveal>
          <div className="legal-content">
            <h1>Mentions légales</h1>
            <p className="legal-meta">Dernière mise à jour : 28 juillet 2026</p>

            <h2>1. Éditeur du site</h2>
            <p>
              Le présent site est édité par la société <strong>A6 COMMUNICATION ET EVENEMENTIEL</strong>,
              Société par Actions Simplifiée (SAS) au capital social de 1 000 €.
            </p>
            <ul>
              <li>Siège social : 73 Allée Kléber, 34000 Montpellier, France</li>
              <li>SIREN : 105 781 751</li>
              <li>SIRET (siège) : 105 781 751 00018</li>
              <li>Code APE/NAF : 73.11Z — Activités des agences de publicité</li>
              <li>Président : Manuel Dalla Zanna</li>
              <li>Directeur général : Eric Gibaja</li>
              <li>
                Contact : <a href="mailto:contact@a6communication.fr">contact@a6communication.fr</a>
              </li>
            </ul>

            <h2>2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication du site est Manuel Dalla Zanna, en sa qualité de
              Président de la société A6 Communication et Événementiel.
            </p>

            <h2>3. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <ul>
              <li>Hostinger International Ltd</li>
              <li>61 Lordou Vironos str., 6023 Larnaca, Chypre</li>
              <li>
                <a href="https://www.hostinger.com" target="_blank" rel="noopener noreferrer">
                  www.hostinger.com
                </a>
              </li>
            </ul>

            <h2>4. Conception et développement</h2>
            <p>
              Le site a été conçu et développé par{" "}
              <a href="https://chappygo.com" target="_blank" rel="noopener noreferrer">
                Chappygo
              </a>
              .
            </p>

            <h2>5. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, photographies,
              logos, identité visuelle) est protégé par le droit de la propriété intellectuelle et
              reste la propriété exclusive de A6 Communication et Événementiel ou de ses
              partenaires, sauf mention contraire. Toute reproduction, représentation,
              modification ou diffusion, totale ou partielle, sans autorisation écrite préalable,
              est interdite.
            </p>

            <h2>6. Responsabilité</h2>
            <p>
              A6 Communication et Événementiel s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à
              jour des informations diffusées sur ce site, sans garantie d&apos;exhaustivité. La
              société ne pourra être tenue responsable des dommages directs ou indirects résultant
              de l&apos;accès ou de l&apos;usage de ce site, y compris l&apos;inaccessibilité, les pertes de
              données ou la présence de virus.
            </p>

            <h2>7. Liens hypertextes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. A6 Communication et
              Événementiel n&apos;exerce aucun contrôle sur ces sites et n&apos;assume aucune
              responsabilité quant à leur contenu.
            </p>

            <h2>8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              et à défaut d&apos;accord amiable, les tribunaux français seront seuls compétents.
            </p>

            <h2>9. Données personnelles et cookies</h2>
            <p>
              Le traitement des données personnelles et l&apos;usage des cookies sur ce site sont
              détaillés dans notre{" "}
              <a href="/politique-de-confidentialite">politique de confidentialité</a>.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
