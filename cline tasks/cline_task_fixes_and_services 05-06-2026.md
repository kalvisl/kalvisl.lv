# kalvisl.lv — Cline Tasks: 4 Fixes + New Services Page

Read all files before starting: `/index.html`, `/par-mani/index.html`, `/pakalpojumi/index.html` (if exists).

---

## FIX 1 — Brīvības 97a image not loading

**Problem:** The first featured project "Brīvības iela, Liepāja" shows a broken image on the homepage.

**Fix:**
1. List all files inside the `/projekti/Brivibas 97a/` folder
2. Find the correct image filename and extension (it may be `.webp`, `.jpg`, `.png`)
3. In `/index.html`, update the `src` attribute of the Brīvības 97a project image to the exact correct path — case-sensitive, no spaces in URL (encode spaces as `%20` if needed)
4. Test that the path is correct by checking the file actually exists at that location

---

## FIX 2 — Remove project text list below staggered images

**Problem:** Below the 3 staggered featured project images there is a duplicate text list:
- Brīvības 97a, Rīga — Jaunbūve · Rīga · 2023
- Sarmītes iela, Jūrmala — Jaunbūve · Jūrmala · 2025
- Sabri Jūrmalciems, Jūrmala — Jaunbūve · Jūrmala · 2024

This list is redundant — the images already show the project names below them.

**Fix:** In `/index.html`, find and completely remove the HTML element containing this text list. Keep all image cards and the lightbox functionality — only remove the separate text list below.

---

## FIX 3 — Fix "Par mani" section dark background + add Pakalpojumi to nav

**Problem A:** The "Par mani" section on the homepage has a black/dark background which looks inconsistent with the rest of the white minimal design.

**Fix A:** In `/index.html`, find the "Par mani" section and remove any `background`, `background-color`, or dark color CSS applied to it. It should have a white or transparent background matching the rest of the page. The text color should be `#111` or `#333` on white background.

**Problem B:** Navigation does not have a "Pakalpojumi" link.

**Fix B:** 
1. Add `pakalpojumi` link to the nav on ALL pages:
```html
<a href="/pakalpojumi/">pakalpojumi</a>
```
Add it between "projekti" and "par mani" in the nav order:
`projekti · pakalpojumi · par mani · kontakti`

Apply to: `/index.html`, `/par-mani/index.html`, `/kontakti/index.html`, `/projekti/index.html`

---

## FIX 4 — Create new /pakalpojumi/ page

Create a new file `/pakalpojumi/index.html` with the same nav, header, and footer structure as other pages.

The page explains services in plain language for clients who know nothing about building regulations. Content is in Latvian.

Use this exact page content:

---

### Page structure:

**Page title:** `Pakalpojumi — Kalvis Lejasmeiers`
**Meta description:** `Projektēšanas pakalpojumi privātiem klientiem — legalizācija, pārbūve, renovācija, jaunbūve. Liepāja un Latvija.`

**Section label (small caps, grey, like other section labels):** `PAKALPOJUMI`

**Intro paragraph:**
```
Strādāju ar privātiem klientiem, kuriem nepieciešama dokumentācija būvniecībai vai ēkas legalizācijai. Katrs projekts ir atšķirīgs — zvaniet vai rakstiet, lai noskaidrotu, kāds dokuments jums nepieciešams.
```

---

### Services — display as cards or clean list, same style as homepage Pakalpojumi section:

**1. Jaunbūves projekts**
Ja plānojat celt jaunu māju, garāžu, saimniecības ēku vai citu objektu. Izstrādāju visu nepieciešamo dokumentāciju un iesniedzu Būvniecības informācijas sistēmā (BIS).
*Nepieciešams: būvatļauja vai paskaidrojuma raksts atkarībā no ēkas apjoma.*

**2. Pārbūve**
Ja vēlaties mainīt ēkas plānojumu — nojaukt vai izveidot sienu, paplašināt telpas, pievienot piebūvi vai veikt citas būtiskas izmaiņas konstrukcijās.
*Nepieciešams: paskaidrojuma raksts vai būvatļauja.*

**3. Vienkāršotā pārbūve**
Ja plānojat ierīkot jaunu logu vai durvju aili, uzbūvēt terasi, ārējās kāpnes vai pandusu. Vienkāršāka procedūra nekā pilnai pārbūvei.
*Nepieciešams: paskaidrojuma raksts.*

**4. Renovācija un atjaunošana**
Ja vēlaties atjaunot fasādi, jumtu, inženiertīklus vai veikt iekšējos uzlabojumus, nemainot ēkas konstrukcijas. Ietver arī vienkāršoto atjaunošanu.
*Nepieciešams: paziņojums par būvniecību vai paskaidrojuma raksts.*

**5. Legalizācija**
Ja ēka vai piebūve uzcelta bez atļaujas un nav reģistrēta kadastrā. Izstrādāju nepieciešamo dokumentāciju, lai ēka tiktu legalizēta un ierakstīta zemesgrāmatā.
*Nepieciešams: paskaidrojuma raksts vai būvatļauja atkarībā no situācijas.*

**6. Lietošanas veida maiņa**
Ja vēlaties mainīt ēkas vai telpu grupas lietošanas veidu — piemēram, no noliktavas uz dzīvokli vai no biroja uz veikalu.
*Nepieciešams: paskaidrojuma raksts.*

**7. Konsultācija**
Neesat pārliecināti, kāds dokuments jums nepieciešams vai ar ko sākt? Sazināmies — bez maksas izskaidrošu, kāda ir situācija jūsu gadījumā un kādi būs nākamie soļi.
*Bezmaksas, bez saistībām.*

---

### After the services list, add a simple CTA block:

```html
<section class="cta-section">
  <p class="cta-text">Neesat pārliecināti, kāds pakalpojums jums nepieciešams?</p>
  <a href="/kontakti/" class="cta-button">Rakstīt ziņu →</a>
</section>
```

---

### Styling notes for the services cards:

```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  margin-top: 48px;
}
.service-card {
  padding: 40px 36px;
  border: 1px solid #e8e8e8;
  background: #fff;
}
.service-card h3 {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #111;
}
.service-card p {
  font-size: 13px;
  color: #555;
  line-height: 1.75;
  margin-bottom: 12px;
}
.service-card .service-note {
  font-size: 11px;
  color: #999;
  font-style: italic;
}
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  .service-card {
    padding: 28px 20px;
  }
}
```

---

## COMMIT

After all fixes:
```
git add .
git commit -m "Fix images, remove list, dark bg, add pakalpojumi page and nav"
git push
```

## VERIFY on live site:
- [ ] Brīvības 97a image loads on homepage
- [ ] No text project list below staggered images
- [ ] Par mani section is white background
- [ ] Nav has: projekti · pakalpojumi · par mani · kontakti on all pages
- [ ] /pakalpojumi/ page loads correctly with all 7 service cards
- [ ] CTA button on pakalpojumi page links to /kontakti/
