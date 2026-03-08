# Cline Prompt: kalvisl.lv — Architect Portfolio Redesign

## CONTEXT

Redesign and build the full portfolio website for **Kalvis Lejasmeiers**, an architect based in Liepāja, Latvia. A working HTML prototype and a full audit brief exist — your task is to implement the final production site as a multi-page static site with real routing, proper asset structure, and all pages fully built out.

A reference prototype (`kalvisl-redesign.html`) already exists. Do not copy it verbatim. Use it as a design spec to build something more complete and production-ready.

---

## GUIDING PRINCIPLE

> The work precedes everything. The homepage is the project index — no hero, no name, no introduction. Visitors enter the work directly.

The name "Kalvis Lejasmeiers" is 13px, top-left, weight 400. It is a home link. It is never larger than the navigation beside it.

---

## DELIVERABLE

A static site with the following file structure:

```
/
├── index.html              ← Project index (homepage = work, not a hero)
├── projekti/
│   ├── index.html          ← All projects, filterable
│   └── [project-slug]/
│       └── index.html      ← Individual project pages (build 2–3 examples)
├── par-mani/
│   └── index.html          ← About page — minimal, text-only
├── kontakti/
│   └── index.html          ← Contact page — utilitarian
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js
└── README.md
```

---

## DESIGN SYSTEM

### Fonts (Google Fonts)
- **DM Sans** (weights: 300, 400, 500) — headings, body, UI
- **DM Mono** (weights: 300, 400) — all metadata, labels, tags, technical data

### Color Palette
```css
--white:  #F5F4F0;   /* warm off-white ground */
--black:  #1A1A18;   /* near-black, slight warmth */
--stone:  #C8C4BB;   /* fog, Baltic limestone */
--rust:   #8B4B2E;   /* single accent — Liepāja ironwork, copper oxide */
--ink:    #3D3D3A;   /* body text */
--mist:   #E8E6E1;   /* borders, dividers */
```

**Rust is the only accent color.** It appears on hover states only. Never decorative. Always functional. One instance per screen.

### Typography Scale
```
Section labels:  10px / DM Mono / uppercase / letter-spacing: 0.18em / color: --stone
Body text:       15px / DM Sans / weight 300 / line-height 1.7
Project titles:  17–28px / DM Sans / weight 300 / letter-spacing: -0.01em
Large titles:    40–64px / DM Sans / weight 300 / letter-spacing: -0.02em
Mono metadata:   11px / DM Mono / weight 400 / letter-spacing: 0.06–0.12em
```

**Never bold.** Weight 300 or 400 only throughout. Strength comes from scale and spacing, not weight.

---

## PAGE SPECIFICATIONS

### `index.html` — Homepage / Project Index

- No hero. No name announcement. First visible element: the project grid.
- Navigation: `kalvis lejasmeiers` (small, left) + `projekti · par mani · kontakti` (mono, uppercase, right)
- **Featured grid** (top): 3 projects in an asymmetric layout — one tall left card, two stacked right. Each card: full-bleed background image (use CSS gradient placeholders if no real images), project title (light weight), mono tags (type · city · year) overlaid at bottom.
- **Project list** (below grid): All 7 projects as rows. Each row: project title left, `Type, City, Year` mono right. Hover: title darkens, metadata turns rust.
- On hover of list items, show a small project thumbnail that follows the cursor (optional — implement if clean).
- Below list: dark strip (`--black` background) with a 2-column layout: bio paragraph left, 4 stats right (10+ years / 40+ projects / LV location / 5 typologies).
- Footer: email + phone + city left, `© Kalvis Lejasmeiers` right.

### `projekti/index.html` — All Projects

- Full project archive, filterable by type: Visi · Jaunbūve · Renovācija · Interjers
- Filter tabs: mono, uppercase, 10px. Active filter: rust color.
- Project cards in a 3-column grid (desktop), 2-col (tablet), 1-col (mobile).
- Each card: image area (CSS gradient placeholder), title, mono metadata below.
- No pagination — all projects visible.

### `projekti/private-residence-liepaja/index.html` — Example Project Page

Structure (top to bottom):
1. `← Atpakaļ` link (mono, small) — top left
2. Project title — large (40–64px), weight 300, left-aligned
3. Mono metadata line: `Jaunbūve · Liepāja · 2022`
4. Horizontal rule (`--mist`)
5. Full-bleed primary image (CSS gradient placeholder, 16:9 or taller)
6. Two-column alternating grid: image | drawing | image | drawing
7. Project description — 80–120 words max. Factual. No adjectives.
8. Technical sheet (definition list or grid):
   ```
   Klients:        Privātpersona
   Programma:      Viengimenes māja
   Zemes platība:  420 m²
   Kopplatība:     185 m²
   Statuss:        Realizēts
   Gads:           2022
   ```
9. Full-width floor plan placeholder
10. Full-width section drawing placeholder
11. `← Iepriekšējais` / `Nākamais →` navigation

Build 1–2 more project pages at similar depth.

### `par-mani/index.html` — About

- Minimal. No sidebar, no photo.
- Single column, max-width 600px, centered.
- Section label: `Par mani`
- Bio paragraph (Latvian): factual, 80–120 words. No adjectives like "passionate" or "visionary."
- Education + credentials as a plain list (mono font, small).
- Horizontal rule then contact info.
- **Do not include this page in primary nav.** Link it only in the footer.

### `kontakti/index.html` — Contact

- Utilitarian. No form styling theatre.
- Email (mailto link), phone (tel link), address.
- A simple `<form>` with fields: Vārds, E-pasts, Ziņojums, Send button.
- Form styling: borderless inputs, bottom-border-only, clean. Submit button: `--black` background, `--white` text, no border-radius.
- No map embed. Location text only.

---

## INTERACTION DETAILS

### Navigation
- Fixed top nav, `--white` background, no shadow at top of page
- On scroll past 20px: add a 1px bottom border (`--mist`) — subtle separation
- Active page link: `--black` color instead of `--stone`
- No hamburger on desktop. On mobile (< 768px): collapse to hamburger, full-screen overlay menu on open.

### Reveal Animations
- Elements animate in on scroll: `opacity: 0 → 1` + `translateY(16px → 0)` over 0.6s ease
- Stagger list items with 60ms delay between each
- No animations on reduced-motion preference: `@media (prefers-reduced-motion: reduce)` — skip all transitions

### Project List Hover (desktop only)
- Optional: floating thumbnail preview that follows cursor on project list hover
- If implemented: `position: fixed`, pointer-events none, 200×140px, same CSS gradient as the card

---

## CONTENT (Latvian — use throughout)

**Nav labels:** `projekti` · `par mani` · `kontakti`

**Project list:**
1. Private Residence, Liepāja — Jaunbūve · Liepāja · 2022
2. Apartment Renovation, Rīga — Renovācija · Rīga · 2021
3. 4-stāvu dzīvojamā ēka, Liepāja — Jaunbūve · Liepāja · 2020
4. Office Conversion, Liepāja — Lietojuma maiņa · Liepāja · 2019
5. Summer House, Jūrmala — Jaunbūve · Jūrmala · 2023
6. Restaurant Interior, Liepāja — Interjers · Liepāja · 2022
7. Multi-family Housing, Ventspils — Jaunbūve · Ventspils · 2021

**About bio (use as-is):**
> Arhitekts ar vairāk nekā 10 gadu pieredzi dzīvojamo un komerciālo projektu jomā. Strādāju ar privātiem klientiem no koncepta līdz būvatļaujas saņemšanai. Mans pieeja koncentrējas uz telpām, kas ir gan funkcionālas, gan mūžīgas — katrs projekts tiek virzīts no konkrētas vietas un programmas prasībām.

**Contact:**
- Email: kalvis.lejasmeiers@gmail.com
- Phone: +371 29218775
- Location: Liepāja, Latvija

---

## TECHNICAL REQUIREMENTS

- **Pure HTML/CSS/JS** — no frameworks, no build tools, no npm
- External dependencies allowed: Google Fonts only
- CSS: one file (`assets/css/main.css`) with CSS custom properties
- JS: one file (`assets/js/main.js`) — scroll observer, nav state, filter logic
- **No loading animations, no parallax, no page transitions**
- Images: use CSS gradients as placeholders — structure the `<img>` tags with proper `src`, `alt`, `width`, `height` attributes so real photos can drop in later
- Lighthouse target: 95+ performance (no blocking resources, lazy load images below fold)
- Fully responsive: 320px → 1440px+
- Touch targets minimum 44px height on mobile
- `lang="lv"` on `<html>`, proper `<meta>` descriptions in Latvian

---

## ABSOLUTE DON'TS

- No centered hero with architect's name at large size
- No testimonials, no award badges
- No parallax scrolling
- No decorative elements that don't serve function
- No bold text weight anywhere in the design
- No purple, blue, or gradient color schemes — stay strictly within the palette
- No stock photo imagery or icons
- No `Inter`, `Roboto`, or system font stacks
- No border-radius on cards (sharp corners only)
- No box shadows (use borders and spacing instead)

---

## REFERENCE

The prototype `kalvisl-redesign.html` (in the project root) shows the homepage layout and CSS variable system. Use it as a reference for the design direction, but build the full multi-page site properly from scratch — don't copy the single-file prototype.

The audit document describes the philosophy in full. The single sentence that overrides everything else:

> **The building signs the portfolio, not the architect.**
