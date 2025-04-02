document.addEventListener('DOMContentLoaded', function() {
    // Create transition overlay
    const transitionOverlay = document.createElement('div');
    transitionOverlay.className = 'page-transition';
    document.body.appendChild(transitionOverlay);

    // Handle all navigation links
    document.querySelectorAll('a[href]:not([target="_blank"])').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Don't handle external links or anchor links
            if (href.startsWith('http') || href.startsWith('#')) {
                window.location.href = href;
                return;
            }

            // Show transition overlay
            transitionOverlay.classList.add('active');
            
            // Navigate after a short delay
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });

    // Handle back/forward navigation
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            // Page was loaded from back-forward cache
            window.location.reload();
        }
    });

    window.addEventListener('popstate', function(event) {
        // Force refresh when using back button
        window.location.reload();
    });

    // Remove transition overlay on page load
    window.addEventListener('load', function() {
        transitionOverlay.classList.remove('active');
    });

    // Apply entrance animation to elements
    animateContent();
    
    // Handle smooth scrolling for navigation
    setupSmoothScrolling();
    
    // Setup lazy loading for images
    setupLazyLoading();
    
    // Handle header opacity on scroll
    handleHeaderOpacity();
});

// Apply entrance animations to elements
function animateContent() {
    // Apply fade-in animation to sections with a slight delay
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.opacity = '0';
        setTimeout(() => {
            section.style.opacity = '1';
            section.classList.add('fade-in');
        }, 100 * index);
    });
    
    // Apply slide-up animation to grid items with staggered delay
    document.querySelectorAll('.grid-item').forEach((item, index) => {
        item.style.opacity = '0';
        setTimeout(() => {
            item.style.opacity = '1';
            item.classList.add('slide-up');
        }, 50 * index);
    });
}

// Setup smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup lazy loading for images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        // Start loading the image
                        img.src = src;
                        img.removeAttribute('data-src');
                        
                        // Add fade-in effect when loaded
                        img.style.opacity = '0';
                        img.onload = function() {
                            img.style.transition = 'opacity 0.5s ease';
                            img.style.opacity = '1';
                        };
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
}

// Handle header opacity based on scroll position
function handleHeaderOpacity() {
    const header = document.querySelector('header');
    let lastScrollPosition = 0;
    
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;
        
        // Make header more transparent when scrolling down
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
            header.style.opacity = '0.85';
        } else {
            header.style.opacity = '1';
        }
        
        lastScrollPosition = currentScrollPosition;
    });
} 