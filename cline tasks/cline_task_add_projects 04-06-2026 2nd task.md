# Cline Task — Add All Projects to /projekti/ Page

## Goal
Add all projects to the `/projekti/` page as a clean image grid. Each project shows one image, clicking opens a lightbox. The structure must make it easy to add more images per project in the future by editing a simple data array.

---

## Step 1 — Understand current file structure

Before making any changes, read the following files:
- `/projekti/index.html` — current projekti page
- The `/projekti/` folder structure — list all subfolders (each subfolder = one project)
- For each project subfolder, list the image files inside

Report what you find before proceeding.

---

## Step 2 — Create a projects data array in JavaScript

In `/projekti/index.html`, create a JavaScript array called `projectsData` that defines all projects. Structure it like this:

```javascript
const projectsData = [
  {
    id: "brivibas-97a",
    name: "Brīvības 97a",
    location: "Rīga",
    year: "2023",
    type: "Jaunbūve",
    images: [
      "/projekti/Brivibas 97a/misc/1.png"
      // Add more image paths here later, one per line
    ]
  },
  {
    id: "kazdangas-35",
    name: "Kazdangas iela 35",
    location: "Liepāja",
    year: "2024",
    type: "Jaunbūve",
    images: [
      "/projekti/Kazdangas 35/misc/kazdangas 35.jpg"
    ]
  },
  {
    id: "sabri-jurmalciems",
    name: "Sabri Jūrmalciems",
    location: "Jūrmala",
    year: "2024",
    type: "Jaunbūve",
    images: [
      "/projekti/Sabri Jurmalciems/misc/sabri.png"
    ]
  }
  // ADD ALL OTHER PROJECTS HERE based on what you find in the /projekti/ folder
];
```

**Important:** After reading the folder structure in Step 1, populate ALL projects you find — not just these 3. Use the folder name as the project name (clean it up). Set type to "Jaunbūve" as default — I will edit types manually later.

---

## Step 3 — Render the project grid

Generate the project grid dynamically from `projectsData`. Each project card:
- Shows the FIRST image in its `images` array as the thumbnail
- Image aspect ratio: 4:3, `object-fit: cover`
- Below image: project name (small, font-weight 400), then location · year (smaller, color #999, font-size 11px)
- No border, no shadow, no rounded corners
- On hover: image opacity 0.85, transition 0.2s
- Grid layout: 3 columns on desktop, 2 columns on tablet (max-width 900px), 1 column on mobile (max-width 600px)
- Gap between cards: 32px

---

## Step 4 — Lightbox

When user clicks a project card image, open a lightbox showing all images in that project's `images` array:

- Dark overlay background (rgba 0,0,0,0.92)
- Image centered, max-height 85vh, max-width 90vw, object-fit contain (show full image, no cropping)
- If project has more than 1 image: show left (‹) and right (›) navigation arrows
- If project has only 1 image: hide arrows completely
- Below image: project name, location · year in white text
- Image counter: "1 / 3" style, shown only if more than 1 image
- Close button × in top right corner
- ESC key closes lightbox
- Clicking dark overlay outside image closes lightbox
- Smooth fade-in: opacity 0 to 1, transition 0.2s
- On mobile: arrows large enough to tap (min 44px tap target)

---

## Step 5 — Filter buttons

The existing filter buttons (Visi / Jaunbūve / Renovācija / Interjers) should filter the grid based on the `type` field in `projectsData`. Clicking a filter shows only matching projects, "Visi" shows all. Add smooth CSS transition when cards appear/disappear.

---

## Step 6 — How to add more images later (comment in code)

At the top of the `projectsData` array, add this comment so it's easy to find and edit:

```javascript
// =============================================
// HOW TO ADD IMAGES TO A PROJECT:
// Find the project by name, then add image paths
// to its "images" array. First image = thumbnail.
// Example:
//   images: [
//     "/projekti/ProjectFolder/photo1.jpg",
//     "/projekti/ProjectFolder/photo2.jpg",
//   ]
// =============================================
```

---

## Notes

- Keep the existing lightbox that works on the homepage (`index.html`) — this is a separate implementation for `/projekti/index.html`
- Do NOT change the homepage `index.html`
- Image paths are case-sensitive on the live server — copy paths exactly as they appear in the file system
- After changes: `git add . && git commit -m "Add all projects to projekti page" && git push`
