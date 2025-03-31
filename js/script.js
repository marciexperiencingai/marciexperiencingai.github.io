document.addEventListener('DOMContentLoaded', function() {
    // Add page transition element
    const transitionElement = document.createElement('div');
    transitionElement.className = 'page-transition';
    document.body.appendChild(transitionElement);

    // Apply entrance animation to elements
    animateContent();
    
    // Handle smooth scrolling for navigation
    setupSmoothScrolling();
    
    // Handle page transitions
    setupPageTransitions();
    
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

// Handle page transitions for navigation
function setupPageTransitions() {
    // Get all navigation links that lead to other pages (not anchor links)
    const pageLinks = document.querySelectorAll('a:not([href^="#"])');
    
    pageLinks.forEach(link => {
        // Skip external links
        if (link.hostname !== window.location.hostname) return;
        
        link.addEventListener('click', function(e) {
            const transitionElement = document.querySelector('.page-transition');
            const targetPage = this.getAttribute('href');
            
            // Don't apply transition to links with target="_blank"
            if (this.getAttribute('target') === '_blank') return;
            
            e.preventDefault();
            
            // Activate transition overlay
            transitionElement.classList.add('active');
            
            // Navigate to the new page after transition completes
            setTimeout(() => {
                window.location.href = targetPage;
            }, 500);
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