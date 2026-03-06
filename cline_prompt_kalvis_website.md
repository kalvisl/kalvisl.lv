# Website Brief: Kalvis Lejasmeiers — Architect

## Project Overview
Build a personal portfolio website for **Kalvis Lejasmeiers**, an architect with 10 years of experience based in **Liepāja, Latvia**. The site serves as a professional presence to attract private clients locally and regionally.

---

## Goals
- Establish credibility as an independent architect
- Make it easy for potential clients to understand what Kalvis does and contact him
- Feel personal and human, not corporate

---

## Design Direction: David Chipperfield — Pure White Minimalism

**Primary reference:** https://www.davidchipperfield.com
Study this site carefully before starting. Mirror its structure and feel as closely as possible for a personal/solo architect.

**Guiding principle:** White space IS the design. Images carry all the visual weight. Typography is invisible infrastructure.

- **Color palette:** Pure white (#ffffff) background. Black text (#111111). No accent colors. No decorations.
- **Typography:** One clean sans-serif — use **'Helvetica Neue', Helvetica, Arial** or similar neutral typeface. All lowercase navigation. Small, precise label text for project metadata (type, year, location).
- **Layout:** Chipperfield-style grid — images dominate. Text is minimal and small. Navigation is top, horizontal, sparse. Logo = just the name in small caps or light weight.
- **Images:** Large, full-bleed or near-full-width. Let the photography/visuals do the talking. Placeholder images should be wide landscape ratio (16:9 or wider).
- **No gradients. No shadows. No rounded corners. No icons. No animations except subtle opacity fade on load.**
- Navigation: fixed top, white background, name left — menu items right: Projects · About · Contact

---

## Site Structure — Single Page, Scroll

### 1. Navigation (fixed top)
- Left: **Kalvis Lejasmeiers** in small, light weight text
- Right: Projects · About · Contact
- White background, thin 1px bottom border only on scroll

### 2. Hero
- No hero image. Just text, centered or left-aligned, generous padding top.
- Large but not huge: **"Kalvis Lejasmeiers"**
- Below: small text — *"Architect. Liepāja, Latvia."*
- Nothing else. Let it breathe.

### 3. Projects — Featured (5–8 projects)
- Chipperfield-style: alternating full-width images and 2-column grid
- Each project: large image first, then below it — small text: **Project name** / Type / Location / Year
- Types to use in placeholders: Residential · Apartment Building · Renovation · Commercial
- Clicking on a project image shows a simple overlay/lightbox with 1-2 more images and a short description

### 4. All Work — Text List (below featured projects)
- Section title: *"Selected Work"* or *"All Projects"* in small caps
- Plain text list of 20–40 project entries — NO images
- Format per line: **Project name** — Type, Location, Year
- This section makes the portfolio look substantial even without photos for every project
- Example entries:
  - Private Residence, Liepāja — New build, 2022
  - Apartment Renovation, Rīga — Renovation, 2021
  - 4-storey Residential Building, Liepāja — New build, 2020
  - Office Conversion, Liepāja — Change of use, 2019

### 5. About
- One short paragraph, human tone. 2-3 sentences max.
- *"I am an architect based in Liepāja with over 10 years of experience in residential and commercial projects. I work with private clients from concept through to building permit approval."*
- Optional: small photo placeholder, left-aligned, no border

### 6. Contact
- Just: email placeholder + phone placeholder + city
- Below: minimal form — Name, Email, Message, Send button (black, no border-radius)
- No map

---

## Technical Requirements
- Pure HTML + CSS + minimal vanilla JS (no frameworks unless necessary)
- Mobile responsive — many clients will view on phone
- Fast loading — no heavy libraries
- Latvian and/or English content (can use placeholder text for now)
- Domain will be: **kalvisl.lv**

---

## Tone & Feel
> Think: an architect's sketchbook — quiet confidence, craftsmanship, nothing wasted.
> The website itself should feel like good architecture: functional, considered, and timeless.

---

## Deliverable
Single `index.html` file with embedded CSS and minimal JS.
Placeholder images can use `https://placehold.co/` or similar.
