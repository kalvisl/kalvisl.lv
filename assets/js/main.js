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

  // ==========================================================================
  // Project Lightbox Gallery
  // ==========================================================================

  const lightbox = document.getElementById("projectLightbox");
  const lightboxProjects = document.querySelectorAll('[data-lightbox="true"]');

  if (lightbox && lightboxProjects.length > 0) {
    // Lightbox elements
    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const lightboxTitle = lightbox.querySelector(".lightbox-title");
    const lightboxType = lightbox.querySelector(".lightbox-type");
    const lightboxLocation = lightbox.querySelector(".lightbox-location");
    const lightboxYear = lightbox.querySelector(".lightbox-year");
    const lightboxCounter = lightbox.querySelector(".lightbox-counter");
    const lightboxClose = lightbox.querySelector(".lightbox-close");
    const lightboxPrev = lightbox.querySelector(".lightbox-prev");
    const lightboxNext = lightbox.querySelector(".lightbox-next");

    // Lightbox state
    let currentImages = [];
    let currentImageIndex = 0;

    // Open lightbox
    function openLightbox(projectElement) {
      // Get project data from data attributes
      const projectName = projectElement.dataset.projectName || "";
      const projectType = projectElement.dataset.projectType || "";
      const projectLocation = projectElement.dataset.projectLocation || "";
      const projectYear = projectElement.dataset.projectYear || "";

      // Parse images JSON
      try {
        currentImages = JSON.parse(projectElement.dataset.images || "[]");
      } catch (e) {
        console.error("Error parsing images:", e);
        currentImages = [];
      }

      if (currentImages.length === 0) {
        // Fallback to the visible image if no data-images
        const visibleImg = projectElement.querySelector("img");
        if (visibleImg) {
          currentImages = [visibleImg.src];
        }
      }

      if (currentImages.length === 0) return;

      // Reset to first image
      currentImageIndex = 0;

      // Set project info
      lightboxTitle.textContent = projectName;
      lightboxType.textContent = projectType;
      lightboxLocation.textContent = projectLocation;
      lightboxYear.textContent = projectYear;

      // Update image and counter
      updateLightboxImage();

      // Toggle single-image class for arrow visibility
      lightbox.classList.toggle("single-image", currentImages.length <= 1);

      // Show lightbox
      lightbox.classList.add("active");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";

      // Focus close button for accessibility
      lightboxClose.focus();
    }

    // Close lightbox
    function closeLightbox() {
      lightbox.classList.remove("active");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      lightboxImage.classList.remove("loaded");
    }

    // Update lightbox image
    function updateLightboxImage() {
      if (currentImages.length === 0) return;

      // Remove loaded class for fade effect
      lightboxImage.classList.remove("loaded");

      // Decode URL-encoded path for display
      const imageSrc = currentImages[currentImageIndex];
      
      // Create new image to preload
      const preloadImg = new Image();
      preloadImg.onload = function() {
        lightboxImage.src = imageSrc;
        lightboxImage.alt = `${lightboxTitle.textContent} - Attēls ${currentImageIndex + 1}`;
        
        // Add loaded class after brief delay for smooth fade
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            lightboxImage.classList.add("loaded");
          });
        });
      };
      preloadImg.onerror = function() {
        // Try to load anyway even if preload fails
        lightboxImage.src = imageSrc;
        lightboxImage.classList.add("loaded");
      };
      preloadImg.src = imageSrc;

      // Update counter
      if (currentImages.length > 1) {
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
      } else {
        lightboxCounter.textContent = "";
      }

      // Update arrow states
      updateArrowStates();
    }

    // Update arrow button states
    function updateArrowStates() {
      // For circular navigation, arrows are always enabled if multiple images
      const hasMultiple = currentImages.length > 1;
      lightboxPrev.disabled = !hasMultiple;
      lightboxNext.disabled = !hasMultiple;
    }

    // Navigate to previous image
    function prevImage() {
      if (currentImages.length <= 1) return;
      currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
      updateLightboxImage();
    }

    // Navigate to next image
    function nextImage() {
      if (currentImages.length <= 1) return;
      currentImageIndex = (currentImageIndex + 1) % currentImages.length;
      updateLightboxImage();
    }

    // Event listeners for project cards
    lightboxProjects.forEach((project) => {
      project.addEventListener("click", (e) => {
        e.preventDefault();
        openLightbox(project);
      });

      // Keyboard accessibility
      project.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(project);
        }
      });

      // Make focusable if not already
      if (!project.hasAttribute("tabindex")) {
        project.setAttribute("tabindex", "0");
        project.setAttribute("role", "button");
        project.setAttribute("aria-label", `Atvērt ${project.dataset.projectName || "projekta"} galeriju`);
      }
    });

    // Close button click
    lightboxClose.addEventListener("click", closeLightbox);

    // Arrow clicks
    lightboxPrev.addEventListener("click", prevImage);
    lightboxNext.addEventListener("click", nextImage);

    // Click outside to close (on overlay background)
    lightbox.addEventListener("click", (e) => {
      // Close only if clicking directly on overlay or container, not on content
      if (e.target === lightbox || e.target.classList.contains("lightbox-container")) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("active")) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          e.preventDefault();
          prevImage();
          break;
        case "ArrowRight":
          e.preventDefault();
          nextImage();
          break;
      }
    });

    // Prevent scroll on touch devices when lightbox is open
    lightbox.addEventListener("touchmove", (e) => {
      if (lightbox.classList.contains("active")) {
        e.preventDefault();
      }
    }, { passive: false });

    // Preload adjacent images for smoother navigation
    function preloadAdjacentImages() {
      if (currentImages.length <= 1) return;

      const prevIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
      const nextIndex = (currentImageIndex + 1) % currentImages.length;

      // Preload previous
      const prevImg = new Image();
      prevImg.src = currentImages[prevIndex];

      // Preload next
      const nextImg = new Image();
      nextImg.src = currentImages[nextIndex];
    }

    // Call preload after image loads
    lightboxImage.addEventListener("load", preloadAdjacentImages);
  }
});
