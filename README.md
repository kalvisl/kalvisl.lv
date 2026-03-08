# Kalvis Lejasmeiers — Architect Portfolio

A minimalist, content-focused portfolio website for architect Kalvis Lejasmeiers based in Liepāja, Latvia.

## Project Structure

```
/
├── index.html              # Homepage / Project index
├── projekti/
│   └── index.html          # All projects, filterable
├── par-mani/
│   └── index.html          # About page — minimal, text-only
├── kontakti/
│   └── index.html          # Contact page — utilitarian
├── assets/
│   ├── css/
│   │   └── main.css        # Main stylesheet with design system
│   └── js/
│       └── main.js         # JavaScript functionality
└── README.md
```

## Design System

### Colors

- `--white: #F5F4F0` — warm off-white ground
- `--black: #1A1A18` — near-black, slight warmth
- `--stone: #C8C4BB` — fog, Baltic limestone
- `--rust: #8B4B2E` — single accent (Liepāja ironwork, copper oxide)
- `--ink: #3D3D3A` — body text
- `--mist: #E8E6E1` — borders, dividers

### Typography

- **DM Sans** (weights: 300, 400, 500) — headings, body, UI
- **DM Mono** (weights: 300, 400) — metadata, labels, technical data

### Principles

- The work precedes everything — homepage is the project index
- No hero, no name announcement
- Rust is the only accent color, appears on hover states only
- Never bold — weight 300 or 400 only throughout
- Strength comes from scale and spacing, not weight

## Development

Pure HTML/CSS/JS static site with no build tools. External dependencies: Google Fonts only.

### Local Development

Open `index.html` directly in a browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

## Content Guidelines

All content is in Latvian. Navigation labels: `projekti`, `par mani`, `kontakti`.

### Project Metadata Format

- Type: Jaunbūve, Renovācija, Interjers, Lietojuma maiņa
- Location: City name in Latvian
- Year: Four-digit year

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with support for:

- CSS Custom Properties (variables)
- CSS Grid
- Intersection Observer API
- ES6 JavaScript

## Performance

- Lighthouse target: 95+ performance
- No blocking resources
- Lazy loading for images below fold
- Respects `prefers-reduced-motion` preference

## License

© Kalvis Lejasmeiers. All rights reserved.
