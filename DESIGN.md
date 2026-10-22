---
name: Chase Malcom Portfolio
description: A single-page developer portfolio; near-black by default, warm paper in light, carried by four spot colors that move.
colors:
  spot-blue: "#5088E0"
  spot-pink: "#E05A8A"
  spot-green: "#4AA854"
  spot-yellow: "#E9B54D"
  spot-blue-text-light: "#2B58AC"
  spot-pink-text-light: "#AE3461"
  spot-green-text-light: "#25702F"
  spot-yellow-text-light: "#7D5A0C"
  spot-yellow-muted: "rgba(233, 181, 77, 0.15)"
  on-spot: "#0a0a0a"
  accent-dark: "#1DB954"
  accent-light: "#1A9E4A"
  accent-text-light: "#146B34"
  sf-blue: "#00A1E0"
  sf-blue-text-light: "#0A6491"
  night-bg: "#09090B"
  night-bg-secondary: "#111113"
  night-bg-tertiary: "#1A1A1D"
  night-fg: "#EDEDEC"
  night-fg-muted: "#9A9A98"
  night-border: "rgba(255, 255, 255, 0.06)"
  night-selection: "rgba(80, 136, 224, 0.35)"
  paper-bg: "#F5F1EB"
  paper-bg-secondary: "#EDE8E0"
  paper-bg-tertiary: "#E5DFD5"
  paper-fg: "#2D2A26"
  paper-fg-muted: "#625D55"
  paper-border: "rgba(45, 42, 38, 0.1)"
  paper-selection: "rgba(43, 88, 172, 0.22)"
  media-bg: "#121212"
  media-overlay: "rgba(10, 10, 10, 0.85)"
  media-scrim: "rgba(0, 0, 0, 0.3)"
  media-fg: "#f5f1eb"
  media-muted: "#a0a0a0"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.111
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
  subtitle:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.556
  logo:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.429
  caption:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.333
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  pill-y: "4px"
  chip-y: "6px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  card: "20px"
  gutter: "24px"
  lg: "32px"
  xl: "48px"
  section-header: "64px"
  section-y-mobile: "64px"
  section-y: "96px"
  project-stack: "128px"
components:
  button-primary:
    backgroundColor: "{colors.spot-blue}"
    textColor: "{colors.on-spot}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary:
    textColor: "{colors.night-fg}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.night-bg-tertiary}"
  button-submit:
    backgroundColor: "{colors.spot-yellow}"
    textColor: "{colors.on-spot}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    width: "100%"
  project-link:
    textColor: "{colors.night-fg}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "44px"
  tech-pill:
    backgroundColor: "{colors.night-bg-secondary}"
    textColor: "{colors.spot-pink}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  tech-pill-hover:
    backgroundColor: "{colors.spot-pink}"
    textColor: "{colors.on-spot}"
  skill-chip:
    backgroundColor: "{colors.night-bg-tertiary}"
    textColor: "{colors.night-fg-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  media-badge:
    backgroundColor: "{colors.spot-pink}"
    textColor: "{colors.on-spot}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  card:
    backgroundColor: "{colors.night-bg-secondary}"
    rounded: "{rounded.lg}"
    padding: "20px"
  skill-category-card:
    backgroundColor: "{colors.night-bg}"
    rounded: "{rounded.xl}"
    padding: "24px"
  featured-project-card:
    backgroundColor: "{colors.night-bg-secondary}"
    rounded: "{rounded.lg}"
    padding: "16px 20px"
    width: "448px"
  input:
    backgroundColor: "{colors.night-bg-secondary}"
    textColor: "{colors.night-fg}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
---

# Design System: Chase Malcom Portfolio

## Overview

**Creative North Star: "Four Spots of Color in the Dark"**

A quiet, near-black page (warm paper in light mode) that four saturated spot colors, blue, pink, green and yellow, keep interrupting. The neutrals do the reading work; the spots do wayfinding, brand and life. Each section owns one spot, the brand gradient braids all four together, and four small dots drift in the hero so the page is visibly alive on arrival. The owner's own words set the posture: motion "give[s] it character, and I want my portfolio to stand out," and the gradient is "part of the character/brand."

Density is relaxed and editorial: one centered hero, then left-aligned sections inside a 1152px column with generous vertical rhythm (64px mobile, 96px desktop per section). Type is one family, Geist, carried by weight and size rather than by pairing. Depth is mostly tonal (three background steps per theme), with real shadows reserved for project media and the description card that overlaps it.

Work leads. The first screen carries a featured project with its outcome, and every project's links are visible text buttons, never hover-only. Contact runs through the form, LinkedIn and GitHub; no email address is rendered.

**Key Characteristics:**
- Dark by default (`#09090B` night), warm paper (`#F5F1EB`) as the light theme.
- Four spot colors, one per section, with darker text-safe variants in light mode.
- A blue-pink-green-yellow brand gradient used as accent only: hero "Problem Solver", the logo "c", the scrolled-nav hairline, the hero card hover border, the footer divider.
- Character motion that loops (floating dots, bouncing arrow, pulsing dot, shifting gradient) and yields only to the visitor's `prefers-reduced-motion`.
- Pill-shaped actions, gently rounded (8px) cards, one sans family.

## Colors

A neutral ink-or-paper ground interrupted by four saturated spot colors; every chromatic color has a job.

### Primary
The spot quartet. Vibrant values are for fills, dots, rules, borders and icons in both themes and for text in dark mode. In light mode, text uses the `-text-light` step of the same hue.
- **Signal Blue** (#5088E0): the About section; the primary CTA fill ("View My Work"); the hero's first dot; the About pulse dot; the skip link. Light text step **Deep Signal Blue** (#2B58AC).
- **Hot Pink** (#E05A8A): the Projects section; media badges, tech pill text and hover fill, project link hover, the hero card arrow, the offset echo frame behind project media. Light text step **Raspberry** (#AE3461).
- **Leaf Green** (#4AA854): the Skills section; the Skills header rule. Light text step **Fern** (#25702F).
- **Marigold** (#E9B54D): the Contact section; submit button fill, input focus border and ring, social card icons on a 15% marigold wash (`spot-yellow-muted`). Light text step **Umber Gold** (#7D5A0C).
- **On-Spot Ink** (#0a0a0a): the only text color allowed on a vibrant spot fill (5.60 on blue, 5.66 pink, 6.62 green, 10.54 yellow).

### Secondary
- **Signal Green accent** (#1DB954 dark / #1A9E4A light, text step #146B34 light): the interaction color. Global focus outline (2px, offset 2px, via the text step), the "Currently exploring:" label, hover on footer and mobile-menu links. In light mode the vibrant step (3.09:1 on paper) is for icons and 24px+ text only.

### Tertiary
- **Salesforce Blue** (#00A1E0, light text step #0A6491): the Salesforce skill category only. Kept as the platform's own color; it does not join the section rotation.

### Neutral
| Role | Dark (default) | Light |
|---|---|---|
| Page background | Night (#09090B) | Paper (#F5F1EB) |
| Raised surface (cards, inputs, Skills band) | Night secondary (#111113) | Paper secondary (#EDE8E0) |
| Inset surface (chips, avatar well, hover fill) | Night tertiary (#1A1A1D) | Paper tertiary (#E5DFD5) |
| Body and heading text | Bone (#EDEDEC) | Warm ink (#2D2A26) |
| Secondary text | Ash (#9A9A98) | Taupe (#625D55) |
| Hairline border | 6% white | 10% warm ink |
| Text selection | 35% signal blue | 22% deep signal blue |

Media surfaces are theme-independent so screenshots read the same in both themes: media well (#121212), overlay chip (85% black), hover scrim (30% black), media text (#f5f1eb) and media hint text (#a0a0a0).

### Contrast (WCAG 2.x, on background / secondary / tertiary)
| Color | Dark | Light |
|---|---|---|
| Body text | 16.98 / 16.10 / 14.82 | 12.69 / 11.71 / 10.78 |
| Secondary text | 7.06 / 6.69 / 6.16 | 5.80 / 5.35 / 4.93 |
| Blue as text (vibrant dark, deep light) | 5.63 / 5.33 / 4.91 | 6.03 / 5.57 / 5.12 |
| Pink as text | 5.68 / 5.39 / 4.96 | 5.39 / 4.97 / 4.58 |
| Green as text | 6.65 / 6.31 / 5.80 | 5.43 / 5.01 / 4.61 |
| Yellow as text | 10.59 / 10.04 / 9.25 | 5.59 / 5.16 / 4.75 |
| Salesforce blue as text | 6.80 / 6.44 / 5.93 | 5.75 / 5.31 / 4.88 |
| Accent as text (text step in light) | 7.69 / 7.29 / 6.71 | 5.86 / 5.41 / 4.98 |
| Vibrant spot as fill on paper (non-text) | n/a | blue 3.14, pink 3.11, green 2.66, yellow 1.67 |

Media text on the media well is 16.65; media hint text on the overlay chip is at least 5.12.

### Named Rules
**The Section Owns a Spot Rule.** Blue is About, pink is Projects, green is Skills, yellow is Contact. The SectionHeader rule, the nav active underline and text, and the section's interactive accents all take that section's spot. Spot color is wayfinding; never swap one section's color into another.

**The Two Steps Rule.** Every spot has a vibrant step for fills, dots, borders and icons and a text step for words. Dark mode uses the vibrant value for both; light mode always uses the `-text` step for text (at least 4.5:1 on every paper surface). Text on a vibrant fill is On-Spot Ink, never white.

**The Brand Braid Rule.** The blue, pink, green, yellow gradient is brand. It is built from the text steps, so it darkens in light mode on its own. It appears only as an accent: the "Problem Solver" headline span and the logo "c" (shifting over 8s), the 1px hairline under the scrolled nav and above the footer, and the 1px border revealed when the featured card is hovered or focused. Never behind body text, never as a section background, never in place of a section's own spot.

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui, sans-serif), loaded through next/font.
**Body Font:** Geist.
**Label/Mono Font:** Geist Mono is loaded and mapped to the mono token but no rendered element uses it.

**Character:** One geometric-grotesque family doing everything; hierarchy comes from a steep jump between bold display sizes and regular reading sizes.

### Hierarchy
- **Display** (700, 36px / 48px sm / 60px md / 72px lg, line-height 1.1, tracking -0.025em): the hero headline only. Its last line carries the brand braid.
- **Headline** (700, 30px, 36px from md): section titles, always via SectionHeader.
- **Title** (700, 24px, 30px from md): project names, which link to the project.
- **Subtitle** (600, 16 to 18px): skill category names, the featured card title, "Other ways to connect".
- **Logo** (600, 20px, tracking -0.025em): the "cm" mark in nav and footer.
- **Lead** (400, 18px, 20px for the hero tagline, line-height 1.625): hero tagline and About intro paragraph.
- **Body** (400, 16px, line-height 1.625): descriptions and bio, capped near 65ch by a 672px max-width on lead paragraphs.
- **Label** (500, 14px): nav links, buttons, form labels, project highlights, skill chips. Mobile menu links are 24px at the same weight.
- **Caption** (400 to 500, 12px): tech pills, card descriptors, media badges and hints, the footer credit. 12px is the floor; nothing renders smaller.

### Named Rules
**The One Family Rule.** Geist sets every word. Do not introduce a second display face or a mono kicker; weight (400 / 500 / 600 / 700) and size carry the hierarchy.

**The Balanced Heading Rule.** h1 to h3 use `text-wrap: balance`; headings are never set in all caps or letter-spaced out.

## Layout

A single scrolling column. Content sits in a 1152px container (`max-w-6xl`) with 24px side padding; Contact narrows to 896px and the hero to 896px centered. The hero is a full-viewport centered stack; every later section is left-aligned except Contact, whose header centers above a two-column form and social list.

Sections pad 64px top and bottom on mobile and 96px from md. SectionHeader sits 64px above its content. Projects stack 96px apart on mobile and 128px from md, alternating image left and right on a 12-column grid (image 7, text 5) from lg, with the description card overlapping the image by 48px. About is a 5-column grid (2 avatar, 3 bio) from lg; Skills is a 2x2 grid of category cards from sm on a full-bleed raised band (`background-secondary`). Gaps step 12, 16, 24, 32, 48, 64px.

Breakpoints are Tailwind defaults: sm 640px, md 768px (desktop nav appears), lg 1024px (two-column project and About layouts). Anchor scrolling is smooth with an 80px scroll padding for the fixed nav.

**The Work Leads Rule.** A featured project with its measured outcome sits on the first screen (the hero card), and every project shows its "Live site" and "Source" links as visible 44px pill buttons. The image hover overlay is decoration only, hidden from assistive tech and the tab order.

## Elevation & Depth

Hybrid, mostly tonal. Surfaces separate by three background steps and a hairline border; the page also carries a fixed fractal-noise grain at 1.5% opacity over everything. Real shadows are reserved for project media and the description card that overlaps it, and they grow on hover. The scrolled nav becomes 80% background with a 16px backdrop blur and the brand hairline beneath it.

### Shadow Vocabulary
- **Overlap card** (Tailwind `shadow-lg`): the project description card lifting over its image.
- **Floating media at rest** (`0 10px 30px -10px rgba(0,0,0,0.4)`): the GIF floated over a background image.
- **Floating media lifted** (`0 25px 50px -12px rgba(0,0,0,0.6)`): the same GIF on card hover, with scale 1.05.
- **Stacked card lifted** (`0 25px 50px -12px rgba(0,0,0,0.5)`): the front image of a stacked project when it tilts back on hover.

### Named Rules
**The Tonal First Rule.** New surfaces step up a background tone and take a hairline border. A shadow is earned only by an element that physically overlaps or lifts off another.

## Shapes

Soft, consistent corners and pill-shaped actions. Buttons, project links, tech pills, nav dots and floating dots are fully round (9999px). Cards, inputs, media frames and icon wells are 8px. Skill category cards are 12px, the avatar well 16px, skill chips 6px, media badges 4px. Borders are 1px hairlines; the avatar uses a 2px border.

**The Echo Frame Rule.** Featured visuals (project media, the avatar) carry an offset outline frame behind them: a 2px border in the section's spot at low opacity (pink 50% on projects, blue 20% on the avatar), shifted 8 to 12px down and to the side, same radius as the visual. It is an outline in the section color, not a shadow.

## Components

### Buttons
Rounded, confident pills.
- **Shape:** full pill (9999px), 12px by 24px padding, 14px label at 500 weight, 8px icon gap.
- **Primary:** Signal Blue fill with On-Spot Ink text ("View My Work").
- **Secondary:** transparent with a hairline border and body-text color; hover fills the inset tone and darkens the border to secondary text.
- **Submit:** full-width Marigold fill; disabled at 50% opacity; loading swaps in a spinning icon.
- **Focus:** global 2px accent-text outline offset 2px.
- **Transition:** 0.2s ease on all properties.

### Project links
Visible, never hidden behind hover. A 44px-tall pill, hairline border, 14px label with a 16px icon; hover turns the border Hot Pink and the text Raspberry/pink text step. Screen-reader text names the project and "opens in new tab".

### Chips
- **Tech pill:** raised-surface fill, 12px pink-text-step label, full pill; hover floods with Hot Pink and On-Spot Ink text.
- **Skill chip:** inset-surface fill, hairline border, 14px secondary text, 6px radius; hover takes the category color for border and text.

### Cards / Containers
- **Corner Style:** 8px (12px for skill categories).
- **Background:** raised surface; skill category cards use the page background on the raised Skills band.
- **Shadow Strategy:** none except the project overlap card (see Elevation).
- **Border:** 1px hairline; skill cards hover to the secondary text tone.
- **Internal Padding:** 12px (About highlights), 16px (social cards), 20px (description card), 24px (skill cards).

### Featured project card (hero)
The hero's work-first proof: project title, its outcome highlights in secondary text, and a pink arrow that nudges 4px right on hover. Max 448px wide, 8px radius, raised surface, hairline border; on hover or focus the brand braid border fades in over 0.2s.

### Inputs / Fields
- **Style:** raised surface, hairline border, 8px radius, 12px by 16px padding, 14px medium label 8px above.
- **Focus:** border shifts to the Marigold text step with a 2px Marigold ring.
- **Status:** a polite live region below the button reports success or failure; failure points to LinkedIn.

### Navigation
Fixed, transparent over the hero; after 50px of scroll it turns 80% background with a 16px blur and the brand hairline along its bottom edge. The header slides in from above on load. Desktop links are 14px medium; the active section's link takes its section text color with a 2px underline in the section's vibrant spot that springs between links (stiffness 380, damping 30). GitHub, LinkedIn and theme toggle sit right as 18px muted icons. Below md a 44px toggle opens a full-screen 95% background menu whose 24px links stagger in 0.1s apart; Escape closes it and returns focus.

### SectionHeader (signature)
The one section header: a bold h2, a 48px by 2px rounded rule in the section's vibrant spot, an optional muted lead paragraph (max 672px). Left-aligned by default, centered for Contact. Fades up 20px over 0.5s when the section scrolls into view.

### Project media (signature)
Three modes on an 16:9 frame with an 8px radius on the media well: a GIF floated at 70% over a background image (lifts and scales 1.05 on hover); a stacked front/back pair whose front card tilts back (rotateX 12deg, up 20px, scale 0.95) to peek and swaps on click or tap, with pink labels bottom-left and an input-aware hint bottom-right ("Hover to peek behind" or "Tap to swap view"); or a single image with a decorative link overlay.

### Motion
Motion is part of the identity, not polish.
- **Ambient loops:** four hero dots (blue 16px, pink 20px, green 12px, yellow 8px) float 10 to 20px and breathe in opacity on 3 to 5s ease-in-out loops with staggered delays; the scroll arrow bounces 8px every 1.5s; the About location dot pulses; the gradient text shifts over 8s.
- **Entrances:** hero headline, tagline and CTAs fade up 20px over 0.6s, staggered 0.1s; the nav slides down over 0.5s; sections fade up (20 to 40px, 0.4 to 0.6s, staggered 0.1 to 0.15s per item) once when 100px into view.
- **State:** color and border transitions 0.2 to 0.3s ease; media lifts 0.3 to 0.4s ease-out.
- **Reduced motion:** with OS `prefers-reduced-motion: reduce`, Framer Motion runs in user mode, the hero dots stop, CSS animations and transitions collapse to 0.01ms with one iteration, and scrolling is instant.

**The Motion Is Character Rule.** The floating dots, staggered hero entrance, bouncing arrow, scroll-triggered entrances, pulsing location dot and shifting gradient stay. Motion yields only to the visitor's `prefers-reduced-motion` setting, never to taste.

## Do's and Don'ts

### Do:
- **Do** give every new section one spot color from the rotation and pass it to SectionHeader and the nav maps (`sectionColors`, `sectionTextColors`).
- **Do** use the vibrant spot for fills, dots, rules and borders, the `-text` step for words, and On-Spot Ink (#0a0a0a) for text on a spot fill.
- **Do** keep the brand braid to accents: headline span, logo "c", 1px hairlines, a hover border.
- **Do** keep a featured project and its outcome on the first screen, and keep project links visible as 44px pills.
- **Do** step surfaces tonally (background, secondary, tertiary) with a hairline border before reaching for a shadow.
- **Do** guard every looping or transform animation behind `prefers-reduced-motion`.
- **Do** keep text at 12px or larger and secondary text on the muted token, which clears 4.5:1 on every surface in both themes.

### Don't:
- **Don't** remove or still the floating dots, the staggered hero entrance, the bouncing arrow, the section entrances or the pulsing dot; the owner rejected the quiet-at-rest pass.
- **Don't** flatten the brand gradient to a single solid color; the owner rejected that too ("it's part of the character/brand").
- **Don't** put the brand gradient behind body text or use it in place of a section's own spot.
- **Don't** render an email address or mailto link anywhere on the page; it draws spam. Contact goes through the form, LinkedIn and GitHub.
- **Don't** hide project links behind hover; the image overlay is decoration.
- **Don't** set text in a vibrant spot color on paper; vibrant pink, blue, green and yellow fall to 1.67 to 3.14 on the light theme.
- **Don't** put white text on a spot fill; use On-Spot Ink.
- **Don't** add eyebrow kickers, numbered section labels or mono labels above headings; SectionHeader is the only header pattern.
