# kalvisl.lv — Cline Task List
# Priority order: Critical → Important → Nice to have

---

## CRITICAL — Fix these first

### 1. H1 hero heading still present in HTML
The `<h1>Kalvis Lejasmeiers — Arhitekts</h1>` tag still exists in `index.html`. Even if hidden with CSS, it renders as visible text on some browsers and screen readers. Remove it completely from the HTML. The name should only appear in the nav logo/text on the left.

### 2. Contact form does not send emails
The form on `/kontakti/` does nothing when submitted — there is no backend. Fix this using Netlify Forms:
- Add `netlify` attribute and `data-netlify="true"` to the `<form>` tag
- Add a hidden input: `<input type="hidden" name="form-name" value="kontakti">`
- Add a success message that shows after submission: "Paldies! Sazināšos ar jums tuvākajā laikā."
- Add basic client-side validation: all fields required before submission

### 3. "Par mani" text says "Arhitekts" — must change to "Projektētājs"
In `/par-mani/index.html`, the text reads "Arhitekts ar vairāk nekā 10 gadu pieredzi". 
Change ALL instances of "Arhitekts" / "arhitekts" across ALL pages and files to "Projektētājs" / "projektētājs".
Also check: page `<title>` tags, meta descriptions, `<h1>` tags, footer text, and any `alt` attributes.

### 4. Contact info duplicated on par-mani and kontakti pages
On both `/par-mani/` and `/kontakti/`, the email and phone appear twice — once mid-page and once in the footer. Remove the mid-page duplicate on both pages. Keep only the footer contact block.

---

## IMPORTANT — Do these second

### 5. Navigation inconsistency across pages
The nav links are different on different pages:
- Homepage nav: `projekti · par mani · kontakti`
- par-mani nav: `projekti · pieredze · par mani · kontakti` (has "pieredze", uses anchor links)
- kontakti nav: `projekti · par mani · kontakti` (also uses anchor links)

Fix: All pages should use the same navigation with the same links pointing to the correct pages:
- `projekti` → `/projekti/`
- `par mani` → `/par-mani/`
- `kontakti` → `/kontakti/`
Remove "pieredze" from navigation entirely or add it consistently on all pages.

### 6. Statistics block still on homepage
The "Profesionālā pieredze" section on the homepage still shows a statistics grid (213 Projekti · 14 Pilsētas · 8+ Gadi) and a "Par mani" stats block (8+ Gadi praksē · 213 Realizēti projekti · LV · 5 Būvniecības veids). These were supposed to be removed. Delete both stat blocks. Keep only: section heading, the "213 projekti kopš 2018. gada" sentence, short description, and the "Pilns pieredzes pārskats" link.

### 7. Projekti page shows no projects
The `/projekti/` page has filter buttons (Visi / Jaunbūve / Renovācija / Interjers / Lietojuma maiņa) but shows NO project cards below them — the content area is empty. Either the projects are not loading or the JS is broken. Debug and fix so the same 3 featured projects (Brīvības 97a, Sabri Jūrmalciems, Kazdangas 35) appear in the grid.

### 8. Page title tags are wrong or generic
Check all page `<title>` tags:
- Homepage should be: `Kalvis Lejasmeiers — Projektētājs · Liepāja`
- Projekti: `Projekti — Kalvis Lejasmeiers`
- Par mani: `Par mani — Kalvis Lejasmeiers`
- Kontakti: `Kontakti — Kalvis Lejasmeiers`
Also add/fix meta description on homepage:
`<meta name="description" content="Projektētājs Liepājā un Kurzemē — legalizācijas, pārbūves, jaunbūves. Kalvis Lejasmeiers, 10+ gadu pieredze.">`

---

## NICE TO HAVE — Do these last

### 9. Mobile hamburger menu improvement
On mobile, the hamburger menu (☰) needs polish:
- Three thin lines, 1px stroke, not bold
- Minimum tap target 44×44px
- When open: smooth slide-down animation (CSS transition 0.3s ease)
- Each nav item: full width, 20px padding, small font, lowercase
- Show × close icon when menu is open
- Clicking outside the menu closes it

### 10. "IZVĒLĒTIE PROJEKTI" heading still uppercase with letterspacing
The section heading above the projects on homepage is still in uppercase with wide letterspacing. Change to:
- Text: "Izvēlētie projekti" (normal case)
- font-weight: 300
- font-size: 12px
- color: #999999
- letter-spacing: 0

### 11. Second project vertical offset on desktop
The right-column project (Kazdangas iela) starts too high — not enough vertical offset from the left column. Increase the right column `margin-top` to approximately 300–340px so the stagger is more pronounced, closer to the davidchipperfield.com homepage layout.

### 12. Add "Pakalpojumi" section to homepage
Between the projects and the "Profesionālā pieredze" section, add a simple services list:
- Section label: "Pakalpojumi" (same style as other section labels — small, light, grey)
- Simple 2-column list, no icons, just text:
  - Legalizācija · Vienkāršotā pārbūve
  - Vienkāršotā atjaunošana · Jaunbūves projekts
  - Būvatļaujas saņemšana · Konsultācija
- Style: clean, minimal, same font as rest of page

---

## NOTES FOR CLINE

- Site is static HTML/CSS/JS hosted on Netlify
- Domain: kalvisl.lv
- After changes: `git add . && git commit -m "fixes" && git push` — Netlify auto-deploys
- Test contact form locally using Netlify CLI: `netlify dev`
- All text content is in Latvian — do not translate anything
- Keep all existing design decisions: white background, minimal typography, staggered project layout
