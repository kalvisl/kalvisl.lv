# kalvisl.lv — Local SEO Task
# Goal: appear in Google searches for building/design services in Liepāja, Dienvidkurzeme, Ventspils

---

## BEFORE YOU START

Read these files:
- `/index.html`
- `/pakalpojumi/index.html`
- `/par-mani/index.html`

---

## TASK 1 — Schema.org markup on homepage

Add this JSON-LD inside `<head>` of `/index.html`. This tells Google exactly who you are, where you work, and what you do:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kalvis Lejasmeiers — Projektētājs",
  "url": "https://kalvisl.lv",
  "logo": "https://kalvisl.lv/kllogo/kl.png",
  "image": "https://kalvisl.lv/kllogo/kl.png",
  "description": "Projektēšanas pakalpojumi privātiem klientiem — legalizācija, pārbūve, renovācija, jaunbūve. Liepāja un Kurzeme.",
  "telephone": "+37129218775",
  "email": "kalvis.lejasmeiers@gmail.com",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Liepāja",
    "addressRegion": "Kurzeme",
    "addressCountry": "LV"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 56.5047,
    "longitude": 21.0109
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Liepāja"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Dienvidkurzemes novads"
    },
    {
      "@type": "City",
      "name": "Ventspils"
    },
    {
      "@type": "City",
      "name": "Jūrmala"
    },
    {
      "@type": "City",
      "name": "Rīga"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Projektēšanas pakalpojumi",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Jaunbūves projekts"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pārbūve"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Legalizācija"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Vienkāršotā pārbūve"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Renovācija un atjaunošana"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Lietošanas veida maiņa"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Konsultācija"}}
    ]
  },
  "sameAs": [
    "https://kalvisl.lv"
  ]
}
</script>
```

---

## TASK 2 — Fix and improve meta tags on all pages

### `/index.html`
```html
<title>Projektētājs Liepājā | Legalizācija, Pārbūve, Jaunbūve — Kalvis Lejasmeiers</title>
<meta name="description" content="Projektētājs Liepājā un Kurzemē — legalizācija, pārbūve, renovācija, jaunbūves projekti. 10+ gadu pieredze. Sazinieties: +371 29218775">
<meta name="keywords" content="projektētājs Liepāja, legalizācija Liepāja, būvatļauja Liepāja, pārbūve Liepāja, renovācija Liepāja, jaunbūve Liepāja, projektētājs Kurzeme, projektētājs Ventspils, projektētājs Dienvidkurzeme, būvprojekts Liepāja">
<link rel="canonical" href="https://kalvisl.lv/">
```

### `/pakalpojumi/index.html`
```html
<title>Projektēšanas Pakalpojumi Liepājā | Legalizācija, Pārbūve, Renovācija</title>
<meta name="description" content="Projektēšanas pakalpojumi privātiem klientiem Liepājā un Kurzemē. Legalizācija, jaunbūve, pārbūve, renovācija, lietošanas veida maiņa. Konsultācija bez maksas.">
<meta name="keywords" content="legalizācija Liepāja, pārbūve Liepāja, renovācija Liepāja, jaunbūve Liepāja, paskaidrojuma raksts, būvatļauja Liepāja, projektētājs Kurzeme">
<link rel="canonical" href="https://kalvisl.lv/pakalpojumi/">
```

### `/par-mani/index.html`
```html
<title>Par mani — Kalvis Lejasmeiers | Projektētājs Liepājā</title>
<meta name="description" content="Kalvis Lejasmeiers — projektētājs ar 10+ gadu pieredzi Liepājā. Specializējos dzīvojamo ēku pārbūvē, legalizācijā un jaunbūvēs Kurzemē.">
<link rel="canonical" href="https://kalvisl.lv/par-mani/">
```

### `/kontakti/index.html`
```html
<title>Kontakti — Kalvis Lejasmeiers | Projektētājs Liepāja</title>
<meta name="description" content="Sazinieties ar projektētāju Liepājā. Tālrunis: +371 29218775. Konsultācija bez maksas — legalizācija, pārbūve, renovācija, jaunbūve.">
<link rel="canonical" href="https://kalvisl.lv/kontakti/">
```

### `/projekti/index.html`
```html
<title>Projekti — Kalvis Lejasmeiers | Projektētājs Liepājā</title>
<meta name="description" content="Realizēti projektēšanas darbi — jaunbūves, pārbūves, renovācijas projekti Liepājā, Jūrmalā, Rīgā un Kurzemē.">
<link rel="canonical" href="https://kalvisl.lv/projekti/">
```

---

## TASK 3 — Add Open Graph tags to homepage

Add inside `<head>` of `/index.html` — these make the page look good when shared on Facebook or WhatsApp:

```html
<meta property="og:title" content="Projektētājs Liepājā — Kalvis Lejasmeiers">
<meta property="og:description" content="Legalizācija, pārbūve, renovācija, jaunbūve. 10+ gadu pieredze. Liepāja un Kurzeme.">
<meta property="og:url" content="https://kalvisl.lv/">
<meta property="og:type" content="website">
<meta property="og:locale" content="lv_LV">
```

---

## TASK 4 — Add hidden SEO H1 to homepage

Google needs an H1 tag with keywords. Add this visually hidden element to the `<main>` section of `/index.html`:

```html
<h1 class="visually-hidden">Projektētājs Liepājā — legalizācija, pārbūve, renovācija, jaunbūve Kurzemē</h1>
```

Add this CSS if not already present:
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

---

## TASK 5 — Add FAQ section to /pakalpojumi/ page

FAQ content helps Google understand what questions your page answers. Add this at the bottom of `/pakalpojumi/index.html` before the CTA section, with Schema.org FAQ markup:

```html
<section class="faq-section">
  <p class="section-label">BIEŽĀK UZDOTIE JAUTĀJUMI</p>
  <div class="faq-list">
    <div class="faq-item">
      <h3>Vai man ir nepieciešama būvatļauja renovācijai?</h3>
      <p>Atkarīgs no apjoma. Nelielas iekštelpu izmaiņas bez konstrukciju skāranas parasti dokumentāciju neprasa. Fasādes vai jumta darbi, kā arī jebkādas izmaiņas nesošajās konstrukcijās prasa vismaz paskaidrojuma rakstu vai paziņojumu par būvniecību. Sazinieties — bez maksas noskaidrošu jūsu konkrēto situāciju.</p>
    </div>
    <div class="faq-item">
      <h3>Cik ilgs laiks nepieciešams legalizācijai?</h3>
      <p>Vidēji 4–8 nedēļas no dokumentācijas iesniegšanas BIS, atkarīgs no pašvaldības un objekta sarežģītības. Dokumentācijas izstrāde parasti aizņem 2–4 nedēļas.</p>
    </div>
    <div class="faq-item">
      <h3>Vai strādājat ārpus Liepājas?</h3>
      <p>Jā. Regulāri strādāju ar klientiem Dienvidkurzemē, Ventspilī, Jūrmalā un Rīgā. Projekta izstrāde notiek attālināti, objekta apsekošanai braucu uz vietas.</p>
    </div>
    <div class="faq-item">
      <h3>Kāda ir pirmā rīcība, ja vēlos uzsākt projektu?</h3>
      <p>Sazinieties — rakstiet vai zvaniet. Bezmaksas konsultācijā noskaidrosim, kāds dokuments jums nepieciešams, aptuveno izmaksu diapazonu un laika grafiku.</p>
    </div>
    <div class="faq-item">
      <h3>Vai varat palīdzēt ar BIS iesniegšanu?</h3>
      <p>Jā. Izstrādāju visu nepieciešamo dokumentāciju un iesniedzu to BIS (Būvniecības informācijas sistēmā). Sekoju procesam līdz apstiprināšanai.</p>
    </div>
  </div>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vai man ir nepieciešama būvatļauja renovācijai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Atkarīgs no apjoma. Nelielas iekštelpu izmaiņas bez konstrukciju skāranas parasti dokumentāciju neprasa. Fasādes vai jumta darbi, kā arī jebkādas izmaiņas nesošajās konstrukcijās prasa vismaz paskaidrojuma rakstu vai paziņojumu par būvniecību."
      }
    },
    {
      "@type": "Question",
      "name": "Cik ilgs laiks nepieciešams legalizācijai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vidēji 4–8 nedēļas no dokumentācijas iesniegšanas BIS, atkarīgs no pašvaldības un objekta sarežģītības. Dokumentācijas izstrāde parasti aizņem 2–4 nedēļas."
      }
    },
    {
      "@type": "Question",
      "name": "Vai strādājat ārpus Liepājas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jā. Regulāri strādāju ar klientiem Dienvidkurzemē, Ventspilī, Jūrmalā un Rīgā. Projekta izstrāde notiek attālināti, objekta apsekošanai braucu uz vietas."
      }
    },
    {
      "@type": "Question",
      "name": "Vai varat palīdzēt ar BIS iesniegšanu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jā. Izstrādāju visu nepieciešamo dokumentāciju un iesniedzu to BIS (Būvniecības informācijas sistēmā). Sekoju procesam līdz apstiprināšanai."
      }
    }
  ]
}
</script>
```

Add these CSS styles:
```css
.faq-section {
  padding: 80px 60px;
  border-top: 1px solid #e8e8e8;
}
.faq-list {
  margin-top: 40px;
}
.faq-item {
  padding: 28px 0;
  border-bottom: 1px solid #e8e8e8;
}
.faq-item:first-child {
  border-top: 1px solid #e8e8e8;
}
.faq-item h3 {
  font-size: 14px;
  font-weight: 500;
  color: #111;
  margin-bottom: 10px;
}
.faq-item p {
  font-size: 13px;
  color: #555;
  line-height: 1.75;
  max-width: 680px;
}
@media (max-width: 768px) {
  .faq-section {
    padding: 60px 24px;
  }
}
```

---

## TASK 6 — Create sitemap.xml

Create `/sitemap.xml` in the root folder:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kalvisl.lv/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://kalvisl.lv/pakalpojumi/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://kalvisl.lv/projekti/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://kalvisl.lv/par-mani/</loc>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://kalvisl.lv/kontakti/</loc>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## TASK 7 — Create robots.txt

Create `/robots.txt` in the root folder:

```
User-agent: *
Allow: /

Sitemap: https://kalvisl.lv/sitemap.xml
```

---

## COMMIT

```
git add .
git commit -m "SEO: schema markup, meta tags, FAQ, sitemap, robots.txt"
git push
```

---

## AFTER DEPLOYING — Manual steps (not Cline):

1. Go to https://search.google.com/search-console
   - Add property: kalvisl.lv
   - Verify ownership (Netlify DNS method is easiest)
   - Submit sitemap: https://kalvisl.lv/sitemap.xml

2. Go to https://business.google.com
   - Create Google Business Profile
   - Category: "Architectural Designer"
   - Service area: Liepāja, Dienvidkurzemes novads, Ventspils, Jūrmala
   - Add phone, website, photos
