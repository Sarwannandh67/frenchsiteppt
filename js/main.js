// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100,
        disable: false // Enable on all devices to ensure visibility
    });

    // Navigation scroll effect
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Ensure topic cards are visible
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.style.display = 'flex';
        card.style.opacity = '1';
        card.style.visibility = 'visible';
    });

    // Video modal functionality
    const videoButtons = document.querySelectorAll('.video-btn');
    const videoModal = document.querySelector('.video-modal');
    const videoModalClose = document.querySelector('.video-modal-close');
    const videoIframe = document.querySelector('.video-modal iframe');
    
    if (videoButtons.length > 0 && videoModal) {
        videoButtons.forEach(button => {
            button.addEventListener('click', function() {
                const videoId = this.getAttribute('data-video');
                videoIframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
                videoModal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            });
        });
        
        if (videoModalClose) {
            videoModalClose.addEventListener('click', function() {
                videoModal.style.display = 'none';
                videoIframe.setAttribute('src', '');
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            });
        }
        
        // Close modal when clicking outside the content
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                videoModal.style.display = 'none';
                videoIframe.setAttribute('src', '');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (mobileMenuBtn) {
                        mobileMenuBtn.classList.remove('active');
                    }
                }
            }
        });
    });

    // Fix for topics grid visibility
    const topicsGrid = document.querySelector('.topics-grid');
    if (topicsGrid) {
        topicsGrid.style.display = 'grid';
        topicsGrid.style.opacity = '1';
        topicsGrid.style.visibility = 'visible';
    }

    // GSAP animations for enhanced effects
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section parallax effect
        gsap.to('.hero', {
            backgroundPosition: '50% 30%',
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        // Animate topic cards on scroll
        gsap.utils.toArray('.topic-card').forEach((card, i) => {
            gsap.from(card, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });
    }

    // Topic card hover effects - using the already defined topicCards variable
    topicCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });

    // Handle image loading
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // Add loaded class if image is already cached
        if (img.complete) {
            img.classList.add('loaded');
        }
    });

    // Initialize any custom sliders or carousels
    initializeCustomComponents();
});

// Additional custom components initialization
function initializeCustomComponents() {
    // This function can be expanded to initialize any additional
    // custom components that might be added in the future
    
    // Example: Timeline component initialization
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        timelineItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
        });
    }
}

// Handle escape key for modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const videoModal = document.querySelector('.video-modal');
        const videoIframe = document.querySelector('.video-modal iframe');
        
        if (videoModal && videoModal.style.display === 'flex') {
            videoModal.style.display = 'none';
            if (videoIframe) {
                videoIframe.setAttribute('src', '');
            }
            document.body.style.overflow = 'auto';
        }
    }
});

// Fallback to ensure content is visible even if AOS fails
window.addEventListener('load', function() {
    // Force display of topic cards after a short delay
    setTimeout(function() {
        const topicsGrid = document.querySelector('.topics-grid');
        const fallbackTopicCards = document.querySelectorAll('.topic-card');
        
        if (topicsGrid) {
            topicsGrid.style.display = 'grid';
            topicsGrid.style.opacity = '1';
            topicsGrid.style.visibility = 'visible';
        }
        
        fallbackTopicCards.forEach(card => {
            card.style.display = 'flex';
            card.style.opacity = '1';
            card.style.visibility = 'visible';
            // Remove any AOS attributes that might be causing issues
            card.removeAttribute('data-aos');
            card.removeAttribute('data-aos-delay');
        });
    }, 500);
});
