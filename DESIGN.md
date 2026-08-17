---
name: A6 Communication & Événementiel
description: Système éditorial français en aplats Bleu Roi / Vert Eau, photographie plein cadre et titres Bricolage majuscules réchauffés par un accent DM Serif italique.
colors:
  bleu-roi: "#003DDE"
  bleu-nuit: "#112250"
  vert-eau: "#D2E6DC"
  orange-cta: "#FB8500"
  jaune: "#FFE35B"
  on-accent: "#112250"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Bricolage Grotesque, 'Arial Narrow', sans-serif"
    fontWeight: 700
    lineHeight: "0.85em"
    letterSpacing: "0.02em"
  heading-thin:
    fontFamily: "Bricolage Grotesque, 'Arial Narrow', sans-serif"
    fontSize: "clamp(3rem, 7vw, 5rem)"
    fontWeight: 200
    lineHeight: "0.85em"
  accent-italic:
    fontFamily: "DM Serif Display, serif"
    fontStyle: "italic"
    fontWeight: 400
    lineHeight: "0.9em"
  label:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontWeight: 200
    fontSize: "1.25rem"
    letterSpacing: "0.08em"
  body:
    fontFamily: "Work Sans, sans-serif"
    fontWeight: 500
    fontSize: "1.05em"
    lineHeight: "1.3em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "20px"
  lg: "40px"
  xl: "60px"
components:
  button-primary:
    backgroundColor: "{colors.orange-cta}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "13px 28px 14px"
  button-primary-hover:
    backgroundColor: "{colors.bleu-nuit}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.bleu-roi}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "13px 28px 14px"
  button-secondary-hover:
    backgroundColor: "{colors.bleu-nuit}"
    textColor: "{colors.white}"
  button-tertiary:
    backgroundColor: "{colors.bleu-nuit}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 32px 15px"
  button-tertiary-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.bleu-roi}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.bleu-nuit}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
---

# Design System: A6 Communication & Événementiel

## Overview

**Creative North Star: "Bleu Roi Éditorial"**

The site reads like a French institutional magazine, not a SaaS landing page: flat, saturated color fields (Bleu Roi, Vert Eau, Bleu Nuit) carry full-bleed reportage photography of real sites and real people, and every section title is set in a cold, thin, all-caps grotesque that is deliberately warmed by exactly one italic serif word per heading. That single italic word is the whole personality budget of the type system — it is never spent twice in the same title, and it is never used for body copy.

The palette itself is a doctrine, not a preference: Bleu Roi (`#003DDE`) and Vert Eau (`#D2E6DC`) were chosen and their contrast ratios engineered on purpose (documented inline in `globals.css` — accent 5.9:1 on ground, navy-on-orange 6.2:1 chosen deliberately over white's 2.5:1). Orange (`#FB8500`) is reserved for the single call-to-action gesture per view — the filled button, the nav CTA, the CTABanner backdrop — and yellow (`#FFE35B`) appears only as a small warm counterpoint (badges, tags), never as a field color. Nothing in the system is flat-and-shadowless: buttons, the fixed nav bar, and cards all carry a soft ambient drop-shadow that lifts them off the flat color ground, which is the system's one recurring depth cue.

This is a Persuade surface for professionals deciding whether A6 can carry a professional-scale event — the visual system supports that by staying institutional and confident rather than playful. Confirmed rejections: no flat/shadowless "SaaS card" aesthetic, no Material-style tonal elevation ramps, no second accent italic word competing within one heading, no grayscale/desaturated treatment of partner logos (their brand color is the point).

**Key Characteristics:**
- Flat, saturated color fields (never gradients as backgrounds — gradients exist only as photo-legibility overlays)
- Full-bleed photography with a bottom-heavy Bleu Nuit gradient overlay for text legibility
- Bricolage Grotesque thin/bold + DM Serif Display italic pairing, uppercase by default
- One italic accent word per heading — the system's only ornament
- Soft ambient drop-shadows on all interactive surfaces (buttons, nav, cards) — the system's only depth cue
- The 6 A grid and the two named associates are recurring, non-negotiable structural motifs, not decoration

## Colors

The palette is the official A6 charte: two saturated fields (Bleu Roi, Vert Eau) doing double duty as brand identity and background color, one dark neutral (Bleu Nuit) carrying all body text and dark surfaces, and one accent (orange) reserved for action.

### Primary
- **Bleu Roi** (`#003DDE`): the brand accent. Used for all headline text color (`--c-rouge-fg`), links, underline accents, and the "Communication" pole label. Never used as a large background fill — it is a text/accent color, not a field color.

### Secondary
- **Orange CTA** (`#FB8500`): the single call-to-action color. Filled buttons at rest (`.btn-rouge`), the nav's "Contact" pill, CTABanner's full-width backdrop, footer column labels. **The One Action Rule.** Orange marks the one thing on a view the visitor should click; it is never used for decoration or for more than one competing action per view.
- **Jaune** (`#FFE35B`): a small warm counterpoint, confirmed used only for inline badges/tags (e.g. blog category chip). Never a field color, never a button color.

### Neutral
- **Bleu Nuit** (`#112250`): primary text color on light grounds, and the dark surface color for the scrolled nav bar, footer, mobile menu panel, and hero image overlays (as `--c-navy-rgb` for alpha-blended gradients).
- **Vert Eau** (`#D2E6DC`): the page background (`body`), and the foreground color for text/links set on Bleu Nuit dark surfaces (mobile menu links) — chosen over Bleu Roi there because Bleu Roi only reaches 1.99:1 on Bleu Nuit.
- **White** (`#FFFFFF`): secondary button fill (`.btn-blanc`), hover-state text on filled buttons, input backgrounds.

### Named Rules
**The Engineered Contrast Rule.** Every text-on-color pairing in this system was chosen for a specific measured ratio, not for taste — see the ratios inlined as comments in `app/globals.css`. Any new color pairing must be checked against WCAG AA (4.5:1 body text, 3:1 large text) before shipping, and the ratio should be commented inline the same way.

**The Single Accent Rule.** Orange appears at most once per view as a filled surface. If a view already has an orange CTA, a second action uses `.btn-blanc` or `.btn-bleu`, never a second orange fill.

## Typography

**Display Font:** Bricolage Grotesque (with "Arial Narrow", sans-serif fallback)
**Accent Font:** DM Serif Display, italic only (with serif fallback)
**Body Font:** Work Sans (with sans-serif fallback)

**Character:** A cold, technical, all-caps grotesque doing almost all of the talking, deliberately interrupted by one warm italic serif word per heading — the "esprit numérique / esprit poétique" duality of the two founders, made typographic.

### Hierarchy
- **Display** (weight 700, hero `clamp()` scaled to viewport height minus header/cookie-banner reserve, line-height 0.85em, uppercase, white on photo): the hero `<h1>` only. Sizing is derived from available vertical space, not just viewport width — see `Hero.tsx`'s clamp formula.
- **Headline — thin** (weight 200, `clamp(3rem, 7vw, 5rem)` for h2 / `clamp(2rem, 5vw, 3.5rem)` for h3, line-height 0.85em, uppercase, Bleu Roi): the default global `h2`/`h3` style in `globals.css`, used directly by `CTABanner` titles.
- **Headline — composed** (AccentHeading component): lead words in Bricolage 700 upright, the final word(s) in DM Serif 400 italic, `text-transform: none`. This is the house rule for nearly every section title on the site — reach for `AccentHeading`, not a raw `h2`.
- **Title — accent** (DM Serif 400 italic, ~2.2rem, line-height 0.9em, Bleu Roi, not uppercase): used for the 6 A item titles (`A6EnBref.tsx`) — a smaller, warmer echo of the composed headline pattern.
- **Body** (Work Sans 400–500, 0.85–1.05rem, line-height 1.3–1.8em depending on density, Bleu Nuit at full or reduced opacity): paragraph copy. Base `body` element is 1.05em/1.3em/weight 500; longer-form paragraphs (blog, legal, service descriptions) loosen to 1.6–1.8em line-height for readability.
- **Label** (Bricolage 200, uppercase, letter-spacing 0.08–0.15em): buttons, nav links, form field labels, footer column headers. Size varies by context (1.1–1.4rem for buttons/nav CTA, 0.7–0.85rem for footer/legal labels) but the recipe — thin weight, uppercase, wide tracking — is constant.

### Named Rules
**The One Italic Word Rule.** DM Serif Display italic is reserved for exactly the accent portion of a composed heading (`AccentHeading`'s `accent` prop) or a 6 A title. It never appears upright, never in body copy, and never twice in the same heading.

## Layout

The grid is French-editorial: a centered text column capped at `--w-limit-text: 820px` for prose sections, a wider `--w-max: 96vw` outer bound, and full-bleed (`100vw`) sections for hero imagery and the orange CTABanner. There is no 12-column grid system — layout is composed per-section with flexbox and CSS Grid ad hoc (`grid-2col` for the 6 A grid, `alt-row` for alternating image/text rows on `/nos-clients`).

`--header-h: 114px` is the fixed nav's resting height, and every hero reserves exactly that much top padding so titles never slide under the nav. `--cookie-banner-h` (set via JS custom property) is likewise reserved as `body` bottom-padding and in hero bottom-padding, so the fixed cookie banner never occludes a CTA or submit button.

**Responsive strategy:** a single `@media (max-width: 767px)` block in `globals.css` overrides semantic classes rather than using Tailwind breakpoint utilities — `.mag-hero`, `.alt-row`, `.grid-2col`, `.hub-card-grid`, `.carousel-*` all get mobile overrides there, plus a `480px` breakpoint for single-column card grids. A new responsive layout means adding a semantic class and a rule in that block, not sprinkling `md:`/`lg:` utilities.

**Named Rules**
**The Reserved Header Rule.** Any full-height or fixed-position content must account for `--header-h` and `--cookie-banner-h` in its own padding; never assume the viewport is unobstructed at the top or bottom.

## Elevation & Depth

The system is not flat-by-default: every interactive surface (buttons, the scrolled nav bar, dropdown menus, the card-stack, feature-hover cards) carries a soft ambient drop-shadow to lift it off the flat color ground. There is no tonal-layering (Material-style `surface-container` ramps) — depth is expressed purely through one recurring shadow recipe plus dark-overlay gradients on photography.

### Shadow Vocabulary
- **Button-lift** (`box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3)`): the resting-state shadow on all three button variants (`.btn-rouge`, `.btn-blanc`, `.btn-bleu`).
- **Nav-CTA-lift** (`box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.4)`): the nav's Contact pill and mobile menu buttons — same recipe, slightly heavier alpha for the smaller surface.
- **Scrolled-nav-shadow** (`box-shadow: 0 2px 20px rgba(0,0,0,0.35)`): the fixed header once `shy` (scrolled past 40px), paired with `backdrop-filter: blur(8px)`.
- **Card-stack shadow** (Tailwind `shadow-2xl`): the fanned card-stack component's individual cards.

### Named Rules
**The Ambient-Not-Structural Rule.** Shadows in this system communicate "this is a clickable/floating object," not hierarchy or state depth. They are present at rest, not only on hover — do not make shadows a hover-only affordance.

## Shapes

Corners are consistently soft but shallow: `6px` on all three button variants, `4px` on nav CTA/mobile-menu buttons, form inputs, and small badges/tags. The card-stack and any Tailwind-authored component (feature-hover grid, card-stack) reach for the larger `rounded-2xl` (~16px) scale instead, and circular/pill shapes (`rounded-full`) appear only for small UI (carousel arrow buttons, card-stack pagination dots, blurred background washes).

**The Two-Radius Rule.** Hand-styled components (buttons, inputs, badges) use the 4–6px scale; Tailwind-authored components use Tailwind's own radius scale (`rounded-lg`/`rounded-2xl`/`rounded-full`). Don't mix a Tailwind `rounded-2xl` onto a hand-styled button or vice versa.

## Components

### Buttons
- **Shape:** 6px radius (`.btn-rouge`/`.btn-blanc`), consistent across all three variants.
- **Primary (`.btn-rouge`):** orange fill (`--c-btn-accent`), navy text (`--c-on-accent`), uppercase Bricolage 200, `letter-spacing: 0.08em`, button-lift shadow, plus a one-shot diagonal shimmer sweep on hover (`::after` skewed gradient, `animation: shimmer 0.55s`).
- **Secondary (`.btn-blanc`):** white fill, Bleu Roi text — same shape/shadow recipe as primary.
- **Tertiary (`.btn-bleu`):** Bleu Nuit fill, white text, inverts to white fill / Bleu Roi text on hover — the only button whose rest and hover colors are a full inversion of each other.
- **Hover / Focus:** all three variants hover to `background: var(--c-navy); color: white` (except `.btn-bleu`, which inverts the other way) over `var(--e-basic)` (500ms). All three scale to `0.97` on `:active` for tactile press feedback.

### Cards / Containers
- **Hub card (`.hub-card`):** image scales to `1.07` on hover (0.7s), and its dark overlay gradient intensifies from a light wash to a strong Bleu Nuit gradient (`rgba(navy, 0.96)` → `0.35`) on hover, with the CTA label's letter-spacing widening to `0.2em` in sync. Used for blog article cards (`/blog` listing and the "related articles" grid on `/blog/[slug]`). Note: the paired `.hub-card-grid` responsive class exists in `globals.css` but is not currently applied by any component — confirm before reusing.
- **Card-stack (`SectionsCardStack` / `ui/card-stack.tsx`):** a draggable, fanned 3D deck (`perspective`, per-card `rotateZ`/`rotateX`/`translateZ`) with spring physics, dot pagination, and full `prefers-reduced-motion` fallback (renders as a static, non-animated deck). This is the site's signature custom component — reach for it, don't reinvent a carousel.
- **Feature-hover grid (`ui/feature-section-with-hover-effects.tsx`):** a bordered 4-column grid (Tailwind) where each cell reveals a soft top/bottom gradient wash and nudges its icon accent color + title `translate-x` on hover. Used to lay out the 8 services on `/nos-services` with real per-service icons and copy — never with its own placeholder copy.
- **Corner Style:** `rounded-2xl` (Tailwind) for card-stack and feature-hover cells; no hand-styled card component uses a custom radius.
- **Shadow Strategy:** see Elevation & Depth — `shadow-2xl` on card-stack; feature-hover cells are borderless-until-hover with a gradient wash instead of a shadow.

### Inputs / Fields
- **Style:** white background, `1px solid rgba(navy, 0.2)` border, `4px` radius, Work Sans body type.
- **Focus:** border color shifts to Bleu Roi (`--c-rouge-fg`) over `var(--e-basic)` — no glow/ring, just a border-color shift.
- **Labels:** always the Label typography role (uppercase Bricolage 200, `0.1em` tracking) placed above the field, never inline/floating.

### Navigation
- **Style:** fixed, transparent-over-hero at rest with a supporting top-to-transparent black gradient layer for legibility; once scrolled past 40px (`shy` state) it becomes a translucent Bleu Nuit bar with `blur(8px)` backdrop and the scrolled-nav-shadow. Logo and nav bar padding both shrink slightly in the `shy` state.
- **Typography/states:** links are Work Sans 500 (700 + underline when active), white with a text-shadow for legibility over photography; the `.nav-link::after` underline animates via `scaleX` (not `width`, to avoid layout thrash) on hover.
- **Mobile:** a full-panel Bleu Nuit takeover sliding in from the left, links set in giant uppercase Bricolage 200 in Vert Eau (not Bleu Roi — Bleu Roi only hits 1.99:1 on Bleu Nuit).
- **Dropdown:** service sub-links render as a stacked Bleu Nuit list that inverts to orange-fill/navy-text on hover, per-item.

### Signature Component: The 6 A Grid
The `A6EnBref` two-column grid (`grid-2col`) is the visual expression of the agency's named method (Alchimie, Audace, Acceptation, Agilité, Authenticité, Assurance). Each item is a numbered label (`01`–`06`, tinted navy, wide tracking) beside a DM Serif italic title over a Bleu Roi top border, with staggered `Reveal` entrance delays (`i * 70ms`). This structure is product truth (see `PRODUCT.md`) — the count, order, and names of the 6 A must never be altered for visual convenience, only their presentation.

## Do's and Don'ts

### Do:
- **Do** use `AccentHeading` for section titles instead of a raw `h2`/`h3` — the bold-lead + italic-accent pairing is the house rule, not a one-off choice.
- **Do** wrap new sections in `Reveal` for the scroll-in entrance, and trust its built-in `prefers-reduced-motion` fallback rather than adding a second one.
- **Do** keep a soft ambient drop-shadow (`0px 4px 17px 0px rgba(0,0,0,0.3–0.4)`) on any new clickable button-like surface — flat/shadowless buttons break the system's one depth cue.
- **Do** check and comment the contrast ratio inline (as `globals.css` already does) whenever pairing a new text color against a background.
- **Do** keep photography full-color and full-bleed with a Bleu Nuit gradient overlay for legibility, never a flat color block standing in for a missing photo.

### Don't:
- **Don't** use DM Serif Display italic outside a heading's accent word or a 6 A title — never for body copy, never twice in one heading.
- **Don't** introduce a fourth button variant or a new fill color for actions; the orange/white/navy trio already covers primary/secondary/tertiary and a second accent color dilutes the Single Accent Rule.
- **Don't** grayscale or desaturate partner/client logos — their brand color is the intended signal, not noise to normalize away.
- **Don't** invent case-study numbers, client names, or testimonials to fill `/realisations` or `/blog` — every entry there today is confirmed placeholder (see `PRODUCT.md`); replacing them requires real material from the client.
- **Don't** mix Tailwind's radius scale onto a hand-styled component (buttons, inputs, badges) or vice versa — see The Two-Radius Rule.
