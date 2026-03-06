// ==========================================================================
// Navigation Scroll Effect
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    
    // Initial check
    handleScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // ==========================================================================
    // Smooth Scrolling for Anchor Links
    // ==========================================================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = nav.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================================================
    // Project Lightbox/Overlay
    // ==========================================================================
    
    const projectCards = document.querySelectorAll('.project-card');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <div class="lightbox-image-container">
                <img class="lightbox-image" src="" alt="">
            </div>
            <div class="lightbox-info">
                <h3 class="lightbox-title"></h3>
                <div class="lightbox-meta"></div>
                <p class="lightbox-description"></p>
            </div>
        </div>
    `;
    document.body.appendChild(lightbox);
    
    // Add click handlers to project cards
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const image = this.querySelector('img');
            const title = this.querySelector('.project-name').textContent;
            const meta = this.querySelector('.project-meta').cloneNode(true);
            
            // Remove bullet separators for lightbox display
            // Note: We can't directly select pseudo-elements with querySelectorAll
            // Instead, we'll modify the display by adding a class to hide the separators
            const typeElements = meta.querySelectorAll('.project-type, .project-location');
            typeElements.forEach(el => {
                el.classList.add('no-separator');
            });
            
            // Set lightbox content
            lightbox.querySelector('.lightbox-image').src = image.src;
            lightbox.querySelector('.lightbox-image').alt = image.alt;
            lightbox.querySelector('.lightbox-title').textContent = title;
            lightbox.querySelector('.lightbox-meta').innerHTML = meta.innerHTML;
            
            // Add description based on project type
            const projectType = this.querySelector('.project-type').textContent.toLowerCase();
            const description = getProjectDescription(projectType, title);
            lightbox.querySelector('.lightbox-description').textContent = description;
            
            // Show lightbox
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    lightbox.querySelector('.lightbox-close').addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // ==========================================================================
    // Contact Form Validation
    // ==========================================================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // Reset previous error states
            resetFormErrors();
            
            // Validate name
            if (!name) {
                showError('name', 'Vārds ir obligāts');
                isValid = false;
            }
            
            // Validate email
            if (!email) {
                showError('email', 'E-pasts ir obligāts');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email', 'Lūdzu, ievadiet derīgu e-pasta adresi');
                isValid = false;
            }
            
            // Validate message
            if (!message) {
                showError('message', 'Ziņa ir obligāta');
                isValid = false;
            } else if (message.length < 10) {
                showError('message', 'Ziņai jābūt vismaz 10 rakstzīmes garai');
                isValid = false;
            }
            
            if (isValid) {
                // In a real application, you would send the form data to a server
                // For now, we'll just show a success message
                showFormSuccess();
                
                // Reset form
                contactForm.reset();
            }
        });
    }
    
    // ==========================================================================
    // Helper Functions
    // ==========================================================================
    
    function getProjectDescription(type, title) {
        const descriptions = {
            'new build': `Jaunbūve ${title.toLowerCase()}, kas no pamatiem izstrādāta, rūpīgi ņemot vērā vietas kontekstu, materiālus un telpiskās attiecības.`,
            'renovation': `Pārdomāta renovācija ${title.toLowerCase()}, kas saglabā ēkas raksturu, vienlaikus ieviešot mūsdienu funkcionalitāti un uzlabotu telpu plūsmu.`,
            'change of use': `Stratēģiska pārbūve ${title.toLowerCase()}, kas pielāgo esošo struktūru jaunam mērķim, vienlaikus ievērojot tās arhitektūras mantojumu.`,
            'interior design': `Visaptveroša interjera dizaina pieeja ${title.toLowerCase()}, koncentrējoties uz materiāliem, apgaismojumu un telpisko pieredzi.`,
            'restoration': `Jutīga restaurācija ${title.toLowerCase()}, kas saglabā vēsturiskās detaļas, vienlaikus nodrošinot ēkas ilgmūžību un funkcionalitāti.`,
            'extension': `Rūpīgi izdomāts papildinājums ${title.toLowerCase()}, kas rada harmoniskas attiecības starp vecajiem un jaunajiem arhitektūras elementiem.`,
            'commercial': `Komerciāls projekts ${title.toLowerCase()}, kas izstrādāts, lai atbalstītu biznesa darbību, vienlaikus radot iedvesmojošu vidi iedzīvotājiem.`
        };
        
        return descriptions[type] || `${type} projekts ${title.toLowerCase()}, kas demonstrē pārdomātu dizainu un uzmanību detaļām.`;
    }
    
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const formGroup = field.closest('.form-group');
        
        // Create error element
        const errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        errorElement.textContent = message;
        errorElement.style.color = '#d32f2f';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        
        // Add error styling to input
        field.style.borderColor = '#d32f2f';
        
        // Add error message
        formGroup.appendChild(errorElement);
    }
    
    function resetFormErrors() {
        // Remove all error messages
        document.querySelectorAll('.form-error').forEach(error => error.remove());
        
        // Reset input borders
        document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
            input.style.borderColor = '#e5e5e5';
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showFormSuccess() {
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.textContent = 'Paldies par jūsu ziņu. Es ar jums sazināšos drīz.';
        successMessage.style.backgroundColor = '#4caf50';
        successMessage.style.color = 'white';
        successMessage.style.padding = '1rem';
        successMessage.style.marginTop = '1rem';
        successMessage.style.borderRadius = '2px';
        successMessage.style.textAlign = 'center';
        
        // Insert after form
        contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
    
    // ==========================================================================
    // Lightbox Styles (injected dynamically)
    // ==========================================================================
    
    const lightboxStyles = document.createElement('style');
    lightboxStyles.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.98);
            z-index: 2000;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        
        .lightbox.active {
            display: flex;
        }
        
        .lightbox-content {
            max-width: 900px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            background: white;
            border: 1px solid #e5e5e5;
        }
        
        .lightbox-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #111111;
            z-index: 2001;
            padding: 0.5rem;
            line-height: 1;
        }
        
        .lightbox-image-container {
            width: 100%;
            height: 400px;
            overflow: hidden;
        }
        
        .lightbox-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .lightbox-info {
            padding: 2rem;
        }
        
        .lightbox-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .lightbox-meta {
            display: flex;
            gap: 1rem;
            font-size: 0.875rem;
            color: #666666;
            margin-bottom: 1.5rem;
        }
        
        .lightbox-description {
            line-height: 1.8;
            font-size: 1rem;
        }
        
        @media (max-width: 768px) {
            .lightbox {
                padding: 1rem;
            }
            
            .lightbox-content {
                max-height: 95vh;
            }
            
            .lightbox-image-container {
                height: 300px;
            }
            
            .lightbox-info {
                padding: 1.5rem;
            }
        }
        
        @media (max-width: 480px) {
            .lightbox-image-container {
                height: 200px;
            }
            
            .lightbox-info {
                padding: 1rem;
            }
        }
    `;
    document.head.appendChild(lightboxStyles);
    
    // ==========================================================================
    // Mobile Menu Toggle (if needed in future)
    // ==========================================================================
    
    // This can be implemented later if a mobile hamburger menu is needed
    // Currently using a simple horizontal nav that works on mobile
    
    console.log('Portfolio website initialized successfully.');
});