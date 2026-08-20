---
name: Smoked & Stamped
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#0a0a0a'
  on-primary: '#ffffff'
  primary-container: '#212121'
  on-primary-container: '#898888'
  inverse-primary: '#c8c6c5'
  secondary: '#a93702'
  on-secondary: '#ffffff'
  secondary-container: '#fe7440'
  on-secondary-container: '#641d00'
  tertiary: '#140700'
  on-tertiary: '#ffffff'
  tertiary-container: '#341b00'
  on-tertiary-container: '#ac7f52'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#380c00'
  on-secondary-fixed-variant: '#822800'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f0bd8b'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#623f18'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Domine
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Domine
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
  headline-md:
    fontFamily: Domine
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-sm:
    fontFamily: Domine
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  item-gap: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  gutter: 24px
---

## Brand & Style

The design system is built to evoke the sensory experience of a premium smokehouse: the heat of the pit, the grain of weathered oak, and the precision of a master pitmaster. It targets barbecue enthusiasts who value authenticity over artifice, blending a **Rustic-Modern** aesthetic with **Tactile** influences.

The UI should feel grounded and heavy, avoiding "floaty" or overly digital effects. It utilizes high-contrast transitions between deep, smoky surfaces and warm, paper-like backgrounds to guide the user's appetite. Key visual signatures include:
- **Heritage Textures:** Subtle use of grit and paper grain to prevent surfaces from looking clinical.
- **Physicality:** Elements should feel "stamped" or "forged" into the page rather than layered on top.
- **Visual Weight:** Heavy typography and thick strokes to reflect the "hearty" nature of the product.

## Colors

This color palette is inspired by the elements of barbecue: fire, wood, and iron.

- **Primary (Pit Black):** A deep, matte charcoal used for main backgrounds, navigation bars, and primary buttons to represent cast iron and char.
- **Secondary (Ember Red):** A burnt orange/red used for calls to action, price points, and highlights. It represents the heat of the coals.
- **Accent (Honey Oak):** A warm brown used for secondary accents, icons, and borders, mimicking aged wood.
- **Surface (Butcher Paper):** An off-white, warm neutral used as the primary canvas for menu listings and reading content to ensure high legibility.
- **Status Colors:** Use a muted sage green for "Available" and a dark oxblood for "Sold Out" to maintain the rustic palette.

## Typography

The typography strategy pairs the authoritative, sturdy feel of **Domine** (Slab-Serif) with the modern, geometric clarity of **Montserrat**.

- **Headlines:** Use Domine for all titles. It provides a rugged, "western-news" feel that looks excellent in high-contrast (White text on Pit Black).
- **Body:** Montserrat is used for all functional text, menu descriptions, and fine print. Its high x-height ensures readability even against textured backgrounds.
- **Labels:** Use Montserrat Bold with all-caps and increased tracking for prices, categories, and tags to create a "branded stamp" look.
- **Special Case:** For pull-quotes or signature items, use Domine in Italic to suggest a traditional, hand-written heritage.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** on desktop (12 columns, 1200px max-width) to maintain a controlled, editorial feel similar to a high-end physical menu. 

- **Breathing Room:** Large vertical gaps (80px+) between sections are used to separate photography from text, allowing the "smoke" to dissipate and the content to breathe.
- **Menu Grids:** Use a 2-column layout for food items on desktop, collapsing to a single column on mobile. 
- **Asymmetry:** Occasionally break the grid with "stamped" badges or overlapping images to create a more organic, handcrafted feel.
- **Mobile:** Transition to a single-column layout with 20px side margins, emphasizing full-bleed food photography.

## Elevation & Depth

This design system avoids soft, floating shadows in favor of **Tonal Layering** and **Materiality**.

- **Stacked Surfaces:** Depth is created by placing "Butcher Paper" (Neutral) cards on top of "Pit Black" backgrounds.
- **The Ink Effect:** Instead of shadows, use thin, 1px borders in #D4A373 (Honey Oak) to define boundaries. 
- **Photography Depth:** Use subtle vignette overlays on image containers to draw the eye toward the center of the dish.
- **Pressed State:** When an element is active (like a button), it should appear to "sink" into the surface (inset shadow or slightly darker fill) rather than lift up.

## Shapes

The shape language is **Soft** but intentional. We avoid perfect circles or sharp, clinical corners.

- **Primary Radius:** A 4px (0.25rem) radius is the standard for cards and buttons. This provides just enough softening to feel "human" while retaining the strength of a rectangular block.
- **The Stamp:** For special tags (e.g., "Award Winning" or "Spicy"), use a slightly larger 8px radius or a "clipped corner" effect to mimic a physical tag.
- **Dividers:** Use horizontal lines that mimic the grain of wood or a simple 2px solid line in Honey Oak to separate menu categories.

## Components

- **Primary Buttons:** High-contrast Pit Black (#212121) fill with White text. Use uppercase Montserrat for the label. On hover, the background shifts to Ember Red (#B7410E).
- **Secondary Buttons:** Ghost style with a 2px Honey Oak (#D4A373) border and matching text.
- **Menu Cards:** Neutral background with a subtle paper texture overlay. Titles in Domine, prices in Montserrat Bold (Ember Red).
- **Input Fields:** Thick 2px bottom-border only (no full box) to mimic a ledger or sign-in sheet.
- **Chips/Tags:** Used for dietary restrictions (e.g., GF, Vegan). Small, rectangular boxes with Pit Black borders and center-aligned Montserrat text.
- **Signature Feature (The Hero):** Full-bleed imagery with a dark overlay and center-aligned Domine display text. Text should have a subtle "rough" edge effect if possible via SVG filters.
- **Badges:** Circular elements that look like wax seals or branded wood, used for "Pitmaster's Choice" items.