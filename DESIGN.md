---
name: Nublix
description: Digital industrial design for a Barcelona custom-software studio — editorial type, a machine-layer of mono labels, and glass instrument panels over a mostly-light canvas.
colors:
  ink: "#14161F"
  teal: "#1F9C90"
  teal-dim: "#17756C"
  paper: "#F6F4EF"
  mint: "#E3EFEC"
  coral: "#EB8270"
  grey: "#5B6270"
typography:
  display:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.9rem, 3.5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.05em"
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "40px"
  xl: "64px"
  2xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.teal-dim}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0px"
  card-service:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Nublix

## Overview

**Creative North Star: "The Instrument Panel"**

Nublix's site reads less like a marketing template and more like a precision instrument: status dots that mean something (active teal vs. idle outline), coordinate-style mono labels, a floating glass-panel nav that behaves like a HUD over the page rather than a bar painted on top of it. The system is calm and self-assured on purpose — a skeptical pyme owner who has been burned by vague promises before should feel like they're reading a well-instrumented panel, not a pitch. Restraint is the mechanism: one accent color, used exclusively as a signal (never decoration), a tight type scale, and dashed hairlines standing in for the "this is structural, not stylistic" cue repeated everywhere a section changes.

The canvas is mostly light (`paper`/`mint`), not dark-by-default — ink is reserved for three deliberate beats: the hero, the giant "nublix" wordmark reveal right after it, and the final CTA. Glass (`backdrop-filter: blur`) appears in exactly two places — the floating header pill and the FAQ's open-state cards — both chosen because they need to read as "on top of," not "part of," the content beneath them. It is a confirmed, approved direction choice, not a default reached for by habit.

**Key Characteristics:**
- One accent color (teal), used only as an active/status signal — never as decoration or a second accent
- A visible "machine layer": uppercase mono labels (eyebrows, status strings, indices) as the system's secondary typographic voice
- Dashed hairlines as the sole structural divider — never a solid rule
- Glass/blur reserved for exactly two surfaces (floating nav, FAQ open state) — not a sitewide material
- Mostly light canvas with three deliberate dark beats (hero, wordmark reveal, final CTA)
- Floating pill-shaped buttons and nav; sharp-ish radii (16px) everywhere else

## Colors

Five roles, each used for exactly one job — color is information here, not mood-setting.

### Primary
- **Signal Teal** (`#1F9C90` / `--color-teal`): the system's one active signal. Status dots when "on," the wordmark's underline capsule, active nav state, solid CTA buttons, section-intro eyebrow labels. If it's teal, something is active, selected, or actionable — never purely decorative.
- **Signal Teal, dimmed** (`#17756C` / `--color-teal-dim`): the same signal at lower energy — secondary labels (`TechLabel` in muted contexts), hover-down state for the primary button. Also the correct choice for small (<16px) teal text where full-strength teal fails contrast against paper/mint (see Do's and Don'ts).

### Tertiary
- **Coral** (`#EB8270` / `--color-coral`): a rare third accent. Dosed extremely sparingly — never on buttons or interactive controls. Reserve for a single editorial flourish if one is ever needed; currently near-unused in the live implementation, which is correct restraint, not an oversight.

### Neutral
- **Ink** (`#14161F` / `--color-ink`): primary text on light surfaces, and the solid background for the hero/wordmark-reveal/final-CTA dark beats.
- **Paper** (`#F6F4EF` / `--color-paper`): the default page canvas — warm off-white, never pure `#fff`.
- **Mint** (`#E3EFEC` / `--color-mint`): the second light surface, used to break the paper rhythm once per scroll (e.g. the FAQ section band) rather than alternating constantly.
- **Grey** (`#5B6270` / `--color-grey`): defined in tokens but rarely reached for directly — most "muted text" instead uses ink at reduced opacity (`ink/55`–`/70`), which is the system's actual secondary-text mechanism.

### Named Rules
**The Single Signal Rule.** Teal appears to mean one thing: this is active/live/selected. The moment it's used for a second purpose on the same screen, the signal stops meaning anything — that's why it's banned from illustration fills, secondary accents, and large background washes.

## Typography

**Display/Body Font:** Inter (with Helvetica Neue, Arial fallback)
**Label/Mono Font:** Inter (no distinct monospace face is loaded — see Do's and Don'ts)

**Character:** One typeface carrying two voices. The same Inter family plays an oversized, tight-tracked editorial role at display sizes and a small, wide-tracked uppercase "machine" role at label sizes — the weight/size/tracking shift is what signals "you're reading a label, not a headline," not a font change.

### Hierarchy
- **Display** (700, `clamp(2.5rem, 6vw, 5rem)`, line-height 0.95, tracking -0.03em): hero headline, the active frame's H1 during the pinned scroll sequence.
- **Heading** (700, `clamp(1.9rem, 3.5vw, 3rem)`, line-height 1, tracking -0.02em): section H2s — "Siete piezas. Un mismo sistema.", "Las FAQ que nos repiten", etc.
- **Title** (700, 19–32px, line-height ~1.05): card/step titles (service card titles, method step titles, FAQ question text).
- **Body** (400, 14–19px, line-height 1.5–1.6): descriptive paragraphs. Keep measure reasonable; the system's columns are narrow by design (`max-w-[42ch]`–`[52ch]`), well under the 65–75ch general guideline on purpose, since this is short persuasive copy, not long-form reading.
- **Label** (500, 12–13px, tracking 0.05–0.06em, uppercase): eyebrows, `TechLabel` status strings, index numerals, nav links. Never used for paragraphs.

### Named Rules
**The Machine-Layer Rule.** Uppercase + mono-style tracking is reserved for the label tier only (eyebrows, status strings, indices, nav). The moment uppercase tracking shows up on body-length text, it stops reading as "system label" and starts reading as shouting — that's the line between the brand's intentional pattern and a genuine defect.

## Layout

Centered, generously-gutted content columns (`px-5` mobile → `px-16` desktop, `max-w-[1240px]`–`[1440px]` outer bound) rather than full-bleed; the hero is the one section that goes edge-to-edge, and even there the text column stays left-aligned within a `max-w-[40%]` band so it never competes with the full-bleed illustration. Vertical rhythm is section-sized (`py-16` mobile → `py-24` desktop) with `gap-3`/`gap-4` for tight related-item groups and `mt-12`–`mt-16` between an intro and its content. Two sections (Hero, Services) are scroll-pinned full-viewport sequences driven by GSAP ScrollTrigger; every other section is a normal in-flow block. Responsive behavior collapses the desktop nav/CTA into a hamburger-triggered dropdown below `lg` (1024px), and collapses multi-column grids to one column below `sm`.

## Elevation & Depth

**Floating and soft.** Nothing on the page uses a hard, sharp-edged drop shadow. Elevation reads through two mechanisms instead: a diffuse, generously-blurred shadow under floating elements (the nav pill: `0 10px 30px rgba(20,22,31,0.08–0.25)`), and true glass (`backdrop-filter: blur(20px) saturate(1.4)`) for the two surfaces that need to read as genuinely on top of their background — the header pill and the FAQ's open-state card. Everything else is flat at rest; depth is earned, not applied by default.

### Shadow Vocabulary
- **Floating nav** (`box-shadow: 0 10px 30px rgba(20,22,31,0.08), inset 0 1px 0 rgba(255,255,255,0.65)` light / `0 10px 30px rgba(20,22,31,0.25), inset 0 1px 0 rgba(255,255,255,0.08)` dark): the header pill, light and dark variants depending on whether the dark hero is currently behind it.
- **Mobile dropdown panel** (`0 10px 30px rgba(20,22,31,0.12)`): the nav drawer's panel shadow, same family, slightly lighter since it sits on the paper canvas rather than over imagery.

### Named Rules
**The Earned-Glass Rule.** Blur/glass is a specific effect for a specific reason (reads as "floating over," not "part of"), applied to exactly two components. Reaching for it on a third surface without that same "must read as overlaid" reason is decoration, not the system.

## Shapes

Two radius registers, deliberately far apart, with almost nothing in between. Structural containers (cards, service panels, FAQ cards, project gallery panels) use a generous `16px` (`rounded-2xl`) — enough to feel soft without reading as a bubble. Interactive pill elements (every button, the nav pill itself, status badges) go to `9999px` full-round. There is effectively no small/medium radius step in between; a card is either sharp-ish-and-structural or fully pill-shaped-and-actionable, and that binary is itself part of how the system signals "this is a container" vs. "this is a control." Borders, where present, are 1px hairlines (`border-ink/10`–`/20`) or the signature dashed variant for section dividers — never a thick or colored border on one side only.

## Components

### Buttons
- **Shape:** full pill (`9999px`) for both variants — the one form language every CTA in the system shares.
- **Primary:** solid teal background, ink text, `10px 20px` padding, semibold 14px label. The arrow glyph rolls from `→` to `↗` on hover (a vertical roll inside a clipped 1em window) rather than just scaling or changing color — the system's one signature micro-interaction, reused everywhere a primary action appears.
- **Hover/Focus:** background steps down to teal-dim on hover; global `:focus-visible` ring (2px teal, 3px offset) on keyboard focus, never suppressed.
- **Ghost/Secondary:** transparent background, ink text at reduced opacity, no border — relies on the same arrow roll as its only affordance, reads as "text with an action," not a boxed button.

### Cards / Containers
- **Corner style:** 16px (`rounded-2xl`) on every structural card — service cards, FAQ accordion items, project gallery panels.
- **Background:** alternates ink/paper/mint by position (service cards) or sits flat on paper (FAQ, closed state); FAQ cards flip to a dark glass surface specifically in their open state, the system's one state-driven color change.
- **Shadow strategy:** flat at rest; only the floating nav and the FAQ's open state carry a shadow/glass treatment (see Elevation & Depth).
- **Border:** 1px `ink/10`–`/15` hairline on project gallery panels and FAQ cards; service cards are borderless, relying on their solid background for separation instead.
- **Internal padding:** 24–32px depending on card size (`p-6`–`p-8`).

### Status & Labels
- **StatusDot:** a 7px filled teal circle when "active," an outlined circle at 40% opacity when idle — the system's smallest, most literal use of the Single Signal Rule.
- **TechLabel / Eyebrow:** 12px uppercase label at 0.05–0.06em tracking, optionally prefixed with a `Capsule` (a short 3px-tall teal bar) or a `StatusDot`. This is the "machine layer" voice — never used for anything longer than a short phrase.

### Navigation
- **Style:** a floating, rounded-full glass pill (not a full-width bar), fixed to the viewport top with margin on all sides. Swaps between a light-on-ink (`glass-dark`) and dark-on-paper (`glass-light`) surface depending on whether the dark hero is currently in view behind it, tracked via `IntersectionObserver`.
- **Default/hover:** nav links are 12px uppercase mono-voice labels; hover brightens text opacity, no underline.
- **Mobile:** below `lg`, the nav/CTA collapse into a 44×44px hamburger button that opens a rounded, paper-colored dropdown panel directly beneath the pill.

### Language Switcher (signature component)
A single icon-only circular button (globe glyph, thin 1.75px stroke) living inside the nav pill itself — present once, not duplicated between desktop and mobile states. It swaps to the equivalent page in the other locale (home↔home, contact↔contact), not just the other locale's homepage, and announces its action via `aria-label`/`title` since it carries no visible text.

## Do's and Don'ts

### Do:
- **Do** use teal only as a signal (status, active state, CTA) — never as a second decorative accent or a fill color.
- **Do** use `teal-dim` instead of full-strength `teal` for any text under ~16px — full teal fails WCAG AA contrast (3.07:1 on paper, 2.87:1 on mint; `teal-dim` clears it) at small sizes.
- **Do** keep uppercase + wide tracking confined to the label tier (eyebrows, status strings, indices, nav) — it's the machine-layer signal, not a general emphasis technique.
- **Do** use dashed hairlines (`border-dashed`) for every structural section divider; it's the one divider style the system has.
- **Do** keep blur/glass to the two components that have it today (floating nav, FAQ open state) unless a new surface has the same "must read as overlaid" justification.
- **Do** pair every pill-shaped button with the arrow-roll micro-interaction (`→` to `↗`) rather than inventing a new hover treatment per button.
- **Do** ship a real, independently-built static fallback for every `prefers-reduced-motion` user — not just "animation removed."

### Don't:
- **Don't** use pure `#fff`/`#000` anywhere — `paper` (`#F6F4EF`) and `ink` (`#14161F`) are the system's whites and blacks.
- **Don't** add a kicker/eyebrow or section numbering reflexively on a new section — in this system they're earned because the eyebrow is the machine-layer label system and the numbers (01–07) carry real sequence information (method steps, services, objections); don't reach for the pattern just because it's already common on the page.
- **Don't** use a hard, zero-blur offset shadow anywhere — this is a soft-shadow/glass system, not a neobrutalist one.
- **Don't** introduce a third radius step between 16px structural cards and full-pill controls — the binary is load-bearing.
- **Don't** treat "Space Grotesk"/"Space Mono" as currently-loaded fonts when writing new code — both CSS variables resolve to Inter today (`app/(es)/layout.tsx`, `app/en/layout.tsx`); match that reality rather than the names.
