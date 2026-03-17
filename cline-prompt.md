# Kalvisl.lv — Targeted Fixes

You are working on a static HTML/CSS/JS portfolio website for an architect. No build tools, no frameworks, no npm. Pure HTML, CSS, vanilla JS. Do not introduce any new dependencies or restructure the project.

## Design system (do not change these)
- Colors: `--white: #F5F4F0`, `--black: #1A1A18`, `--stone: #C8C4BB`, `--rust: #8B4B2E`, `--ink: #3D3D3A`, `--mist: #E8E6E1`
- Fonts: DM Sans (weights 300, 400 only), DM Mono (weights 300, 400)
- Never use bold. Weight 300 or 400 only throughout.
- Rust appears on hover states only.
- All content is in Latvian.

---

## Task 1 — Rewrite `projekti/index.html`

Replace the current file entirely with the following logic:

### Data
At the top of a `<script>` tag, define a `const PROJECTS` array. Each project object has:
- `folder` — exact folder name inside `/projekti/`
- `title` — display name
- `location` — city in Latvian
- `type` — one of: `Jaunbūve`, `Renovācija`, `Interjers`, `Lietojuma maiņa`
- `year` — four-digit number
- `cover` — filename of the cover image inside that folder
- `images` — array of all image filenames to show in the gallery

Pre-populate with these real projects from the existing folders:

```js
const PROJECTS = [
  {
    folder: "Brivibas 97a",
    title: "Brīvības 97a",
    location: "Rīga",
    type: "Jaunbūve",
    year: 2023,
    cover: "1.png",
    images: ["1.png", "2.png"],
  },
  {
    folder: "Sarmites",
    title: "Sarmītes iela",
    location: "Jūrmala",
    type: "Jaunbūve",
    year: 2025,
    cover: "2025-12-02-11-28-55.png",
    images: ["2025-12-02-11-28-55.png"],
  },
  {
    folder: "Sabri Jurmalciems",
    title: "Sabri Jūrmalciems",
    location: "Jūrmala",
    type: "Jaunbūve",
    year: 2024,
    cover: "Enscape_2024-12-12-15-54-34.png",
    images: ["Enscape_2024-12-12-15-54-34.png"],
  },
];
```

Add a prominent comment block above the array explaining how to add a new project (copy the object shape, fill in the fields). This is the only place anyone should ever need to edit to add a project.

### Grid rendering
Write a `renderGrid(filter)` function that:
- Filters `PROJECTS` by `type` if filter is not `"all"`
- Injects `<article class="archive-card">` elements into `#archive-grid`
- Each card contains:
  - A link: `<a href="./?project=ENCODED_FOLDER">`
  - Inside: `<div class="archive-card-inner">` with one `<img>` pointing to `folder/cover`
  - Below: title, type · location · year in the existing `.archive-card-info` / `.archive-card-meta` structure
- Images use `loading="lazy"` and a descriptive `alt`

### Filter buttons
Wire the existing `.filter-btn` elements to call `renderGrid()`. The `data-filter` attribute on each button must exactly match the `type` strings used in `PROJECTS` (or `"all"`).

### Project detail view
When the URL contains `?project=folderName`, instead of rendering the grid, render a detail view inside `.projects-archive`:

1. A back link: `← Visi projekti` linking to `./` (no `?` parameter)
2. Project title (h1, 36px weight 300) and meta line (type · location · year) in DM Mono 11px
3. A `.project-gallery` grid:
   - First image: full width (`grid-column: 1 / -1`), aspect-ratio 16/7
   - Remaining images: 2-column grid, aspect-ratio 16/10 each
   - All images: `object-fit: cover`, subtle scale on hover (1.02)
4. A CTA section at the bottom, separated by a 1px `--mist` border:
   - Text: "Interesē līdzīgs projekts?" (DM Sans 20px weight 300)
   - Link: "Sazināties →" pointing to `../kontakti/` (DM Mono uppercase, color `--rust`)

Check `new URLSearchParams(window.location.search).get("project")` on DOMContentLoaded. If present, call `openProject(decodeURIComponent(value))`. Otherwise call `renderGrid("all")`.

### Navigation
Nav links in this file:
- `projekti` → `./` (active)
- `pieredze` → `../#pieredze`
- `par mani` → `../par-mani/`
- `kontakti` → `../kontakti/`

---

## Task 2 — Append to `assets/css/main.css`

Do not touch any existing CSS rules. Append the following new rules at the bottom of the file:

```css
/* Archive card link wraps the whole card */
.archive-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

/* Images always fill 4:3 regardless of source ratio */
.archive-card-inner {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--mist);
}

.archive-card-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.archive-card:hover .archive-card-inner img {
  transform: scale(1.03);
}

/* Project detail */
.project-detail {
  padding-top: var(--space-2xl);
}

.project-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--stone);
  text-decoration: none;
  transition: color 0.2s;
  margin-bottom: var(--space-2xl);
}

.project-back:hover { color: var(--rust); }

.project-detail-header { margin-bottom: var(--space-2xl); }

.project-detail-title {
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 300;
  letter-spacing: -0.02em;
  color: var(--black);
  line-height: 1.1;
  margin-bottom: var(--space-sm);
}

.project-detail-meta {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--stone);
  letter-spacing: 0.08em;
  display: flex;
  gap: var(--space-lg);
}

.project-detail-meta span::before {
  content: "·";
  margin-right: var(--space-sm);
  opacity: 0.4;
}

.project-detail-meta span:first-child::before { display: none; }

.project-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  margin-bottom: var(--space-3xl);
}

.gallery-item {
  overflow: hidden;
  background: var(--mist);
  aspect-ratio: 16 / 10;
}

.gallery-item--wide {
  grid-column: 1 / -1;
  aspect-ratio: 16 / 7;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.gallery-item:hover img { transform: scale(1.02); }

.project-detail-cta {
  padding: var(--space-3xl) 0;
  border-top: 1px solid var(--mist);
  display: flex;
  align-items: baseline;
  gap: var(--space-xl);
}

.project-detail-cta p {
  font-family: var(--font-sans);
  font-size: 20px;
  font-weight: 300;
  color: var(--ink);
  letter-spacing: -0.01em;
}

.cta-link {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rust);
  text-decoration: none;
  transition: opacity 0.2s;
  white-space: nowrap;
}

.cta-link:hover { opacity: 0.7; }

@media (max-width: 768px) {
  .project-gallery { grid-template-columns: 1fr; }
  .gallery-item--wide { grid-column: 1; aspect-ratio: 4 / 3; }
  .gallery-item { aspect-ratio: 4 / 3; }
  .project-detail-cta { flex-direction: column; gap: var(--space-md); }
  .project-detail-title { font-size: 26px; }
}
```

---

## Task 3 — Fix `index.html` (homepage)

### 3a — Project list section
The `<ul class="project-list">` currently contains placeholder and English-named items with `href="#"`. Remove all `<li>` items that are not real projects. Replace them with only the real projects that exist in the `projekti/` folder, using this structure:

```html
<li>
  <a class="project-item reveal" href="projekti/?project=ENCODED_FOLDER">
    <span class="project-item-title">Title, Location</span>
    <span class="project-item-meta">Type · Location · Year</span>
  </a>
</li>
```

Use these three real projects (matching the PROJECTS array):
- Brīvības 97a, Rīga — Jaunbūve · Rīga · 2023 — `projekti/?project=Brivibas%2097a`
- Sarmītes iela, Jūrmala — Jaunbūve · Jūrmala · 2025 — `projekti/?project=Sarmites`
- Sabri Jūrmalciems, Jūrmala — Jaunbūve · Jūrmala · 2024 — `projekti/?project=Sabri%20Jurmalciems`

### 3b — Nav links
Update the nav links in `index.html` to use proper page URLs instead of only hash anchors:
- `pieredze` → `#pieredze` (keep as-is, it's on this page)
- `par mani` → `par-mani/`
- `kontakti` → `kontakti/`
- `projekti` → `projekti/`

### 3c — Featured card links
Wrap each `.featured-card` in a link to its project detail page. Add `href="projekti/?project=ENCODED_FOLDER"` to an `<a>` that wraps `.featured-card-inner` and `.featured-card-meta`. Keep existing classes intact.

---

## What NOT to do
- Do not change any existing CSS variable names or values
- Do not rename any existing CSS classes
- Do not change the font stack
- Do not add any JavaScript libraries or external scripts
- Do not change the color palette
- Do not restructure the folder layout
- Do not add a hamburger menu or mobile nav
- Do not modify `assets/js/main.js`
- Do not change any page other than the three listed above
- Do not add lorem ipsum or placeholder content
- Do not use bold (font-weight 500 or higher) anywhere
