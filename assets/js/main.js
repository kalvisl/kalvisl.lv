// ==========================================================================
// Main JavaScript — Kalvis Lejasmeiers Portfolio
// ==========================================================================

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Scroll observer for reveal animations
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 60);
        }
      });
    },
    { threshold: 0.1 },
  );

  reveals.forEach((el) => observer.observe(el));

  // Trigger above-fold items immediately
  window.addEventListener("load", () => {
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add("visible");
    });
  });

  // Nav scroll state
  const nav = document.getElementById("main-nav");
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    });
  }

  // Mobile hamburger menu toggle
  const hamburger = document.querySelector(".nav-hamburger");
  const mobileNavLinks = document.querySelector(".nav-links");
  
  if (hamburger && mobileNavLinks) {
    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.classList.contains("open");
      
      // Toggle hamburger icon
      hamburger.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", !isOpen);
      
      // Toggle menu visibility
      mobileNavLinks.classList.toggle("open");
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? "" : "hidden";
    });

    // Close menu when clicking on a link
    mobileNavLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        mobileNavLinks.classList.remove("open");
        document.body.style.overflow = "";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (mobileNavLinks.classList.contains("open") && 
          !mobileNavLinks.contains(e.target) && 
          !hamburger.contains(e.target)) {
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        mobileNavLinks.classList.remove("open");
        document.body.style.overflow = "";
      }
    });

    // Close menu with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNavLinks.classList.contains("open")) {
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        mobileNavLinks.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  // Smooth scroll for nav links (only for same-page anchors)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      // Only handle same-page anchors, not external links
      if (href === "#" || href.startsWith("#/")) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });

        // Update active nav link
        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.classList.remove("active");
        });
        a.classList.add("active");
      }
    });
  });

  // Set active nav link based on scroll position
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  function setActiveNavLink() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveNavLink);

  // Initialize active link on page load
  setActiveNavLink();

  // Optional: Project list hover preview (desktop only)
  if (window.innerWidth > 768) {
    const projectItems = document.querySelectorAll(".project-item");
    const preview = document.createElement("div");
    preview.className = "project-preview";
    preview.style.cssText = `
      position: fixed;
      width: 200px;
      height: 140px;
      background: var(--mist);
      pointer-events: none;
      z-index: 50;
      opacity: 0;
      transition: opacity 0.2s;
      border: 1px solid var(--stone);
    `;
    document.body.appendChild(preview);

    projectItems.forEach((item) => {
      item.addEventListener("mouseenter", (e) => {
        preview.style.opacity = "1";
        updatePreviewPosition(e);
      });

      item.addEventListener("mousemove", updatePreviewPosition);

      item.addEventListener("mouseleave", () => {
        preview.style.opacity = "0";
      });
    });

    function updatePreviewPosition(e) {
      preview.style.left = `${e.clientX + 20}px`;
      preview.style.top = `${e.clientY + 20}px`;
    }
  }

  // Respect reduced motion preference
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mediaQuery.matches) {
    // Disable all transitions and animations
    document.querySelectorAll("*").forEach((el) => {
      el.style.transition = "none";
      el.style.animation = "none";
    });
  }

  // Image slider functionality for featured projects
  const sliders = document.querySelectorAll(".project-image-slider");
  sliders.forEach((slider) => {
    const images = slider.querySelectorAll(".slider-image");
    const nextButton = slider.querySelector(".slider-next");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    if (nextButton) {
      nextButton.addEventListener("click", nextImage);
    }

    // Auto-advance every 5 seconds (only if not reduced motion)
    if (!mediaQuery.matches) {
      setInterval(nextImage, 5000);
    }
  });
});
