# Technical Specifications

## File Structure
```
/_kalvisl.lv
  ├── memory_bank/           # Project documentation
  │   ├── project_context.md
  │   ├── progress_tracker.md
  │   ├── decisions_log.md
  │   ├── technical_specs.md
  │   └── content_inventory.md
  ├── cline_prompt_kalvis_website.md  # Original brief
  ├── index.html            # Main HTML file
  ├── style.css             # Main stylesheet
  ├── script.js             # JavaScript functionality
  └── assets/               # Images and other assets (to be created)
      ├── images/
      └── favicon/
```

## HTML Structure (Actual Implementation)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalvis Lejasmeiers — Architect</title>
    <link rel="stylesheet" href="style.css">
    <!-- Favicon will be added later when real logo is available -->
    <!-- <link rel="icon" type="image/x-icon" href="assets/favicon/favicon.ico"> -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Fixed Navigation -->
    <nav class="nav">
        <div class="nav-container">
            <a href="#" class="nav-logo">kalvis lejasmeiers</a>
            <div class="nav-menu">
                <a href="#projects">projects</a>
                <a href="#about">about</a>
                <a href="#contact">contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <h1 class="hero-title">Kalvis Lejasmeiers</h1>
        <p class="hero-subtitle">Architect. Liepāja, Latvia.</p>
    </section>

    <!-- Featured Projects -->
    <section id="projects" class="projects">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
            <!-- Project cards with images and metadata -->
        </div>
    </section>

    <!-- All Work Text List -->
    <section class="all-work">
        <h2 class="section-title">Selected Work</h2>
        <div class="work-list">
            <!-- Text list items -->
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <h2 class="section-title">About</h2>
        <div class="about-content">
            <div class="about-text">
                <!-- About text content -->
            </div>
            <div class="about-image">
                <!-- Portrait image -->
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <h2 class="section-title">Contact</h2>
        <div class="contact-content">
            <div class="contact-info">
                <!-- Contact information -->
            </div>
            <form class="contact-form" id="contactForm">
                <!-- Contact form fields -->
            </form>
        </div>
    </section>

    <footer class="footer">
        <!-- Footer content -->
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

## CSS Architecture
```css
/* 1. CSS Reset & Base Styles */
/* 2. Typography System */
/* 3. Layout Components */
/* 4. Navigation Styles */
/* 5. Hero Section */
/* 6. Projects Grid */
/* 7. Text List */
/* 8. About Section */
/* 9. Contact Section */
/* 10. Responsive Breakpoints */
/* 11. Utility Classes */
```

## JavaScript Modules
```javascript
// 1. Navigation scroll effect
// 2. Smooth scrolling for anchor links
// 3. Project lightbox/overlay
// 4. Contact form validation
// 5. Mobile menu toggle (if needed)
```

## Responsive Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Total page weight: < 500KB

## Accessibility Requirements
- WCAG 2.1 AA compliance
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast (white/black meets requirements)

## Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 12+)
- Chrome for Android (latest)

## Image Specifications
- Format: WebP with JPEG fallback
- Dimensions: Max width 2000px
- Aspect ratio: 16:9 (landscape)
- Compression: Optimized for web
- Lazy loading: Implemented for below-fold images