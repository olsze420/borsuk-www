/**
 * KSK BORSUK Website JavaScript
 * Handles slider functionality and interactive elements
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slider
    initSlider();
    
    // Initialize other interactive elements
    initMobileMenu();
});

/**
 * Slider Functionality
 */
function initSlider() {
    const slider = document.getElementById('slider');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideCount = document.querySelectorAll('#slider img').length;
    
    // Function to go to a specific slide
    function goToSlide(index) {
        currentSlide = index;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active dot
        dots.forEach((dot, i) => {
            if (i === currentSlide) {
                dot.classList.add('bg-opacity-100');
                dot.classList.add('active');
            } else {
                dot.classList.remove('bg-opacity-100');
                dot.classList.remove('active');
            }
        });
    }
    
    // Function to advance to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }
    
    // Set up dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Auto advance slides
    const slideInterval = setInterval(nextSlide, 5000);
    
    // Pause autoplay when hovering over slider
    slider.parentElement.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // Resume autoplay when mouse leaves
    slider.parentElement.addEventListener('mouseleave', () => {
        clearInterval(slideInterval);
        setInterval(nextSlide, 5000);
    });
    
    // Initial slide setup
    goToSlide(0);
}

/**
 * Mobile Menu Functionality
 */
function initMobileMenu() {
    // This can be expanded when implementing a mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    
    // Check if mobile menu button exists
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            // Toggle mobile menu visibility
            const nav = document.querySelector('nav');
            nav.classList.toggle('mobile-open');
        });
    }
}

/**
 * Smooth Scrolling for Anchor Links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Add animation classes on scroll
 * This adds a fade-in effect to elements as they enter the viewport
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('animate-visible');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
}

// Initialize scroll animations when they're added to the HTML
// Uncomment this when you add the animate-on-scroll class to elements
// initScrollAnimations();