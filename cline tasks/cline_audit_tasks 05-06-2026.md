# kalvisl.lv — Cline Implementation Tasks (Post-Audit)
# Based on full website audit. Work through in order — Week 1 first, then Week 2.
# Site is static HTML/CSS/JS on Netlify. All pages: index.html, /par-mani/index.html, /kontakti/index.html, /projekti/index.html

---

## BEFORE YOU START

Read all four HTML files first:
- `/index.html`
- `/par-mani/index.html`
- `/kontakti/index.html`
- `/projekti/index.html`

Then make all changes below. Do not skip reading — many fixes require understanding the current structure before editing.

---

## WEEK 1 — CRITICAL FIXES

---

### TASK 1 — Logo as home button on ALL pages
**Problem:** The `kl` logo image in the nav center is not wrapped in an `<a>` tag on par-mani and kontakti pages, so clicking it does nothing.
**Fix:** On every page, make sure the logo image is wrapped exactly like this:
```html
<a href="/" aria-label="Doties uz sākumlapu">
  <img src="/kllogo/kl.png" alt="Kalvis Lejasmeiers Logo">
</a>
```
Check all 4 pages. The homepage may already have this — verify and apply to any page that is missing it.

---

### TASK 2 — Fix "Arhitekts" → "Projektētājs" on par-mani page
**Problem:** `/par-mani/index.html` still contains the word "Arhitekts" in the opening paragraph and possibly elsewhere.
**Fix:** Search the entire file for every instance of "Arhitekts" and "arhitekts" and replace with "Projektētājs" / "projektētājs". Also check the page `<title>` tag and any `<meta>` tags.

---

### TASK 3 — Fix navigation links on par-mani and kontakti pages
**Problem:** Both `/par-mani/index.html` and `/kontakti/index.html` use anchor links in the nav that point back to the homepage (`#projekti`, `#par-mani`, `#kontakti`). When a user is on `/par-mani/` and clicks "projekti" in the nav, it goes to `/#projekti` not `/projekti/`. This is broken navigation.
**Fix:** On ALL pages, use these exact nav links consistently:
```html
<a href="/projekti/">projekti</a>
<a href="/par-mani/">par mani</a>
<a href="/kontakti/">kontakti</a>
```
Apply this to: `/par-mani/index.html`, `/kontakti/index.html`, `/projekti/index.html`.
The homepage `/index.html` nav should already be correct — verify it too.

---

### TASK 4 — Remove H1 hero heading from homepage HTML
**Problem:** `/index.html` contains `<h1>Kalvis Lejasmeiers — Projektētājs</h1>` as a visible element rendering on the page. This was supposed to be removed earlier but is still in the HTML.
**Fix:** Find and completely delete the H1 tag and its containing element from `/index.html`. The name should only appear in the top-left nav text. Do NOT remove it from the nav — only from the page body/hero area.

---

### TASK 5 — Add CTA button on homepage
**Problem:** There is no call-to-action anywhere on the homepage. A visitor who is interested has no obvious next step.
**Fix:** In `/index.html`, after the "Pakalpojumi" services section and before the footer, add this CTA block:

```html
<section class="cta-section">
  <p class="cta-text">Interesē sadarbība? Sazināsimies.</p>
  <a href="/kontakti/" class="cta-button">Rakstīt ziņu →</a>
</section>
```

Style it with these CSS rules (add to the page's `<style>` block):
```css
.cta-section {
  text-align: center;
  padding: 80px 40px;
  border-top: 1px solid #e8e8e8;
}
.cta-text {
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
  letter-spacing: 0;
}
.cta-button {
  display: inline-block;
  padding: 14px 36px;
  background: #111;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: background 0.2s ease;
}
.cta-button:hover {
  background: #333;
}
```

---

### TASK 6 — Add loading="lazy" to all project images
**Problem:** All project images load immediately on page load even if they are far below the fold. This slows initial page load.
**Fix:** In `/projekti/index.html` and `/index.html`, add `loading="lazy"` attribute to every `<img>` tag that is a project image. Do NOT add it to the logo or nav images — only project/content images.
```html
<img src="..." alt="..." loading="lazy">
```

---

### TASK 7 — Fix contact form accessibility (add label tags)
**Problem:** The contact form in `/kontakti/index.html` uses placeholder text only, with no `<label>` elements. This fails accessibility standards and screen readers cannot identify form fields.
**Fix:** Wrap each form field with a proper label. Use visually hidden labels if you want to preserve the clean design:
```html
<div class="form-group">
  <label for="name" class="visually-hidden">Vārds</label>
  <input type="text" id="name" name="name" placeholder="Vārds" required>
</div>
```
Add this CSS for visually-hidden:
```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
```
Apply to all three fields: Vārds, E-pasts, Ziņojums.

---

### TASK 8 — Remove duplicate contact info on par-mani and kontakti pages
**Problem:** On both `/par-mani/index.html` and `/kontakti/index.html`, the email and phone number appear twice — once in a mid-page contact block and once in the footer.
**Fix:** Remove the mid-page contact block on both pages. Keep only the footer contact info. The footer should have: email, phone, location, copyright.

---

## WEEK 2 — TRUST & SEO

---

### TASK 9 — Add Schema.org Person markup to homepage
**Problem:** Google cannot understand who owns this site or what services are offered. Schema markup helps local SEO significantly.
**Fix:** Add this JSON-LD script inside the `<head>` of `/index.html`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kalvis Lejasmeiers",
  "jobTitle": "Projektētājs",
  "url": "https://kalvisl.lv",
  "email": "kalvis.lejasmeiers@gmail.com",
  "telephone": "+37129218775",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Liepāja",
    "addressCountry": "LV"
  },
  "knowsAbout": ["legalizācija", "pārbūve", "renovācija", "jaunbūve", "būvatļauja", "projektēšana"],
  "areaServed": ["Liepāja", "Kurzeme", "Latvija"]
}
</script>
```

---

### TASK 10 — Add "How it works" process section to homepage
**Problem:** A first-time visitor doesn't know what to expect when contacting Kalvis. No process = more hesitation = fewer leads.
**Fix:** In `/index.html`, add a simple 3-step process section between the services section and the CTA section:

```html
<section class="process-section">
  <p class="section-label">Process</p>
  <div class="process-steps">
    <div class="process-step">
      <span class="step-number">01</span>
      <h3>Konsultācija</h3>
      <p>Apspriežam projekta ideju, apjomu un iespējas. Bez maksas, bez saistībām.</p>
    </div>
    <div class="process-step">
      <span class="step-number">02</span>
      <h3>Līgums un sākums</h3>
      <p>Vienojamies par apjomu, termiņu un cenu. Sākam darbu pēc avansa maksājuma.</p>
    </div>
    <div class="process-step">
      <span class="step-number">03</span>
      <h3>Projekts un iesniegšana</h3>
      <p>Izstrādāju dokumentāciju un iesniedzu BIS. Esmu sasniedzams visā procesā.</p>
    </div>
  </div>
</section>
```

Style with these CSS rules:
```css
.process-section {
  padding: 80px 60px;
  border-top: 1px solid #e8e8e8;
}
.process-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  margin-top: 40px;
}
.step-number {
  display: block;
  font-size: 11px;
  color: #999;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}
.process-step h3 {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
}
.process-step p {
  font-size: 13px;
  color: #555;
  line-height: 1.7;
}
@media (max-width: 768px) {
  .process-steps {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .process-section {
    padding: 60px 24px;
  }
}
```

---

### TASK 11 — Create Privacy Policy page
**Problem:** No privacy policy exists. This is required under EU GDPR law since the site has a contact form that collects personal data.
**Fix:** Create a new file `/privatuma-politika/index.html` with the same nav/footer as other pages.

Page content (in Latvian):
```
Privātuma politika

Pēdējo reizi atjaunināts: [current date]

Šī vietne kalvisl.lv pieder Kalvis Lejasmeiers (pašnodarbinātais).

Kādi dati tiek vākti:
Sazinoties caur kontaktformu, tiek apkopots jūsu vārds, e-pasta adrese un ziņojuma saturs. Šie dati tiek izmantoti vienīgi, lai atbildētu uz jūsu jautājumu.

Datu glabāšana:
Dati netiek nodoti trešajām pusēm. Kontaktformas dati tiek apstrādāti caur Netlify Forms pakalpojumu.

Sīkdatnes (cookies):
Šī vietne neizmanto analītikas vai izsekošanas sīkdatnes.

Kontakts:
kalvis.lejasmeiers@gmail.com
```

Also add a link to this page in the footer of ALL pages:
```html
<a href="/privatuma-politika/" style="font-size:11px; color:#999;">Privātuma politika</a>
```

---

### TASK 12 — Fix homepage H1 for SEO
**Problem:** After removing the visible H1 in Task 4, there is now no H1 on the homepage. Google needs an H1. But it should target keywords, not just be the person's name.
**Fix:** Add a visually hidden H1 to `/index.html` in the `<main>` section:
```html
<h1 class="visually-hidden">Projektētājs Liepājā — legalizācija, pārbūve, būvatļauja · Kalvis Lejasmeiers</h1>
```
Use the existing `.visually-hidden` CSS class from Task 7. This is invisible to visitors but readable by Google.

---

## FINAL STEP — Commit everything

After completing all tasks:
```
git add .
git commit -m "Audit fixes: nav, CTA, accessibility, schema, process section, privacy policy"
git push
```

Verify on live site https://kalvisl.lv that:
- [ ] Logo clicks go to homepage on all pages
- [ ] Nav links work correctly on par-mani and kontakti pages
- [ ] No visible H1 hero heading on homepage
- [ ] CTA button visible at bottom of homepage
- [ ] Process section visible on homepage
- [ ] Privacy policy page accessible at /privatuma-politika/
- [ ] Contact form has labels
- [ ] No duplicate contact info on par-mani or kontakti

---

## NOTES FOR CLINE

- DeepSeek context limit: 128k — if the full index.html is large, process one file at a time
- Do not change any visual design or layout — only the specific elements listed above
- Do not translate any Latvian text — preserve all existing content
- Image paths are case-sensitive on the live Netlify server
- The `.visually-hidden` CSS class is used in Tasks 7 and 12 — define it only once, in a shared `<style>` block or in assets/css if a shared stylesheet exists
