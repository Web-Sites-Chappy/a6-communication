import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Politique de confidentialité | A6 Communication",
};

export default function PolitiqueConfidentialitePage() {
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
            <h1>Politique de confidentialité</h1>
            <p className="legal-meta">Dernière mise à jour : 28 juillet 2026</p>

            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données collectées via ce site est A6
              COMMUNICATION ET EVENEMENTIEL (SAS), 73 Allée Kléber, 34000 Montpellier, SIREN 105
              781 751, joignable à{" "}
              <a href="mailto:contact@a6communication.fr">contact@a6communication.fr</a>.
            </p>

            <h2>2. Données collectées</h2>
            <h3>Formulaire de contact</h3>
            <p>
              Lorsque vous utilisez le formulaire de contact, nous collectons les données que vous
              y renseignez : nom, adresse email, organisation et le contenu de votre message. Ces
              données sont utilisées exclusivement pour traiter votre demande et vous répondre.
            </p>
            <h3>Préférences d&apos;affichage</h3>
            <p>
              Le site enregistre localement, dans le navigateur (localStorage), vos préférences
              d&apos;affichage (thème, police). Ces informations restent sur votre appareil, ne sont
              jamais transmises à nos serveurs et ne constituent pas des cookies au sens
              réglementaire.
            </p>
            <h3>Cookies</h3>
            <p>
              À ce jour, le site n&apos;utilise pas de cookies de mesure d&apos;audience ou de
              publicité. Un bandeau de consentement est toutefois en place afin de vous permettre
              d&apos;accepter ou de refuser, en amont, le dépôt de cookies non essentiels (par
              exemple statistiques) qui pourraient être ajoutés ultérieurement. Votre choix est
              conservé localement et vous pouvez le modifier à tout moment en effaçant les données
              de navigation de votre navigateur pour ce site.
            </p>

            <h2>3. Finalités et base légale</h2>
            <ul>
              <li>Répondre à vos demandes de contact (base légale : intérêt légitime / exécution de mesures précontractuelles).</li>
              <li>Mémoriser vos préférences d&apos;affichage (base légale : intérêt légitime, fonctionnement du site).</li>
              <li>Mesure d&apos;audience éventuelle (base légale : consentement, recueilli via le bandeau cookies).</li>
            </ul>

            <h2>4. Durée de conservation</h2>
            <p>
              Les données transmises via le formulaire de contact sont conservées le temps
              nécessaire au traitement de votre demande, puis supprimées ou archivées dans un
              délai raisonnable n&apos;excédant pas 3 ans en l&apos;absence de relation commerciale
              ultérieure.
            </p>

            <h2>5. Destinataires des données</h2>
            <p>
              Vos données ne sont ni vendues ni cédées à des tiers. Elles sont accessibles aux
              seules personnes habilitées d&apos;A6 Communication et Événementiel, ainsi qu&apos;à
              notre hébergeur (Hostinger International Ltd) dans le cadre strict de
              l&apos;hébergement technique du site.
            </p>

            <h2>6. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
              Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation, d&apos;opposition et de portabilité sur vos données
              personnelles. Vous pouvez exercer ces droits en nous écrivant à{" "}
              <a href="mailto:contact@a6communication.fr">contact@a6communication.fr</a>. Vous
              disposez également du droit d&apos;introduire une réclamation auprès de la CNIL
              (
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                www.cnil.fr
              </a>
              ).
            </p>

            <h2>7. Sécurité</h2>
            <p>
              Nous mettons en œuvre les mesures techniques et organisationnelles raisonnables pour
              protéger vos données contre la perte, l&apos;accès non autorisé ou la divulgation.
            </p>

            <h2>8. Modifications</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour à tout moment, notamment en
              cas d&apos;évolution du site ou de la réglementation. La date de dernière mise à jour
              figure en haut de cette page.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
