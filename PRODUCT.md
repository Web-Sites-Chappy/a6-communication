# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** professionals of *l'Acte et Art de Bâtir* — architecture practices, regional ordres and professional bodies, building artisans (maçons, charpentiers, menuisiers, plombiers), and trade syndicates.

They arrive in one of two situations: they need to run a professional event (congress, forum, general assembly), or they need their savoir-faire made legible and valued. The decisive question they bring to the site is capacity: *can this agency actually carry an event at professional scale?* Design decisions answer to that visitor first.

**Also served, confirmed but not prioritized:**

- Communes and mairies — notably those under 1 000 inhabitants — intercommunalités and collectivités territoriales, who need proximity communication that is effective and affordable.
- Patrimoine and culture: fondations du patrimoine, cultural associations, institutions, museums, lieux de mémoire.
- Monde associatif: political, sporting and social associations.
- Domaines viticoles: vignerons, coopératives, syndicats d'appellation.

## Product Purpose

A6 Communication et Événementiel is a French agency combining communication and event production for the actors who build, preserve and animate their territories and patrimoine.

The site exists to convert a qualified professional visitor into a conversation: success is a submitted contact request, routed to HubSpot. It is a Persuade surface, not a portfolio of record — see Evidence on Hand for why that distinction is load-bearing.

## Positioning

Two named associates with deliberately opposite temperaments, working as one practice: **Manuel Dalla Zanna** (*l'esprit numérique*) and **Eric Gibaja** (*l'esprit poétique*). The agency's claim is that communication and événementiel are handled by the same pair, so the digital execution and the emotional register are never subcontracted apart.

The **6 A** — Alchimie, Audace, Acceptation, Agilité, Authenticité, Assurance — are the agency's articulated method and the origin of the name. They are product truth, not a tagline.

Signature line in use: *L'Alchimie entre l'image et son histoire.*

## Operating Context

Eight services organized in two poles:

- **Communication:** stratégie digitale, identité visuelle, production de contenus, impressions & signalétique.
- **Événementiel:** conception et scénographie, logistique, animation, relations presse.

Each service has a detail page that deep-links to `/contact?service=<title>`, so the contact form arrives pre-qualified by service. Submissions upsert a contact into HubSpot CRM.

The site is French-only and single-locale. Copy is hardcoded in components and pages; there is no CMS and no i18n layer.

## Capabilities and Constraints

- Service data lives in `lib/servicesData.ts`. Adding or renaming a service also requires editing `navLinks` in `components/Nav.tsx` and the `getServiceIcon` switch in `app/nos-services/[slug]/page.tsx` — three places kept in sync by hand.
- Contact API requires `HUBSPOT_PRIVATE_APP_TOKEN` with scope `crm.objects.contacts.write`.
- Cookie consent records an `analytics` flag in `localStorage`; **no analytics script is actually wired up yet.**
- Route renames are absorbed by redirects in `next.config.ts` (`/nos-cibles`→`/nos-clients`, `/actualites`→`/blog`, `communication-evenementielle`→`relations-presse`).
- **Open decision — partner/client logos:** real, showable clients exist; the logo files are pending from the client. Until they arrive the trusted-by banner deliberately shows client *categories* rather than brands. Do not invent logos, client names, or brand marks to fill it.

Legal and company facts (from `/mentions-legales`, treat as authoritative):

- A6 COMMUNICATION ET EVENEMENTIEL, SAS, capital 1 000 €
- Siège: 73 Allée Kléber, 34000 Montpellier, France
- SIREN 105 781 751 · SIRET 105 781 751 00018 · APE/NAF 73.11Z
- Président: Manuel Dalla Zanna · Directeur général: Eric Gibaja
- contact@a6communication.fr · hosted by Hostinger · site built by Chappygo

## Brand Commitments

- Name: **A6 Communication & Événementiel**. The 6 A are the brand's spine and must survive any redesign.
- Voice: French, warm and literary, comfortable with emotion and wordplay (e.g. the *"A6 j'osais…"* pun). Not corporate-neutral.
- The two associates are named, photographed and central — the agency is deliberately human-scale, not anonymous.
- Logo assets: `public/logo-a6.svg` (Vert Eau, for dark grounds) and `public/logo-a6-bleu.svg` (Bleu Roi, for light grounds).
- Contrast was engineered on purpose, with ratios documented inline in `app/globals.css` (accent 5.9:1 on ground, navy-on-accent 6.2:1 chosen over white at 2.5:1). Preserve that intent when touching color.

The visual system itself (palette, typography, tokens) is recorded in code and is deliberately locked; it belongs to `DESIGN.md` via `/impeccable document`, not to this file.

## Evidence on Hand

**Real and usable:**

- Photography library at `public/photos/` (`DSC_*.webp`, plus portraits `manuel.webp` and `eric.webp`) and video at `public/video/cerbere.mp4`. Original client media sits outside the repo in `A6Agence/PABLO SITE-*/PHOTOS|VIDEO`.
- The legal and company facts listed above.

**Explicitly NOT real — confirmed placeholder:**

- Every entry in `/realisations` (5 projects: Congrès de l'Ordre des Architectes d'Occitanie, Forum Artisans du Bâtiment, Journées du Patrimoine, Assemblée Domaines Viticoles Sud, Colloque Associations Culturelles) and every article in `/blog` was invented to populate the layout.
- There are therefore **no** documented case studies, no attendance figures, no named clients, no testimonials and no press coverage.
- Future work must not treat these as proof, cite their numbers, extend the lists, or fabricate more. Replacing them with real cases requires material from the client.

**Pending from the client:** partner/client logo files (SVG or transparent PNG) plus exact names, destined for `public/partners/`.

## Product Principles

1. **Capacity before charm.** The primary visitor is deciding whether A6 can carry a professional-scale event. Expression that does not also build confidence in execution works against the sale.
2. **Never fabricate proof.** With no real cases yet, trust has to come from clarity of method, specificity about the two poles, and the founders' visible presence — never from invented numbers or logos.
3. **The 6 A are structure, not ornament.** They organize what the agency says about itself; they are not a decorative grid to be dropped or reshuffled for visual convenience.
4. **Serve six segments without flattening them.** The bâtiment/architecture professional comes first; the other five are real and must stay addressable. Hierarchy is permitted and preferable to speaking to everyone at once.
5. **Human scale is the asset.** Two named people with opposite temperaments is the differentiator a larger agency cannot copy. Anonymity would erase the positioning.

## Accessibility & Inclusion

No standard was formally established. One product-specific requirement is already in force: colour contrast is intentional and documented in `globals.css`, and the choice of navy over white on the orange accent was made explicitly for legibility. Any colour work must hold or improve those ratios rather than trade them for aesthetics.
