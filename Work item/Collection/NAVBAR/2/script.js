document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');
    const navbar = document.querySelector('.navbar');
    let scrollTimeout;

    // Toggle mobile menu
    mobileMenu.addEventListener('click', () => {
        const isActive = navLinks.classList.toggle('active');
        overlay.classList.toggle('active', isActive);
        mobileMenu.setAttribute('aria-expanded', isActive);
        navLinks.setAttribute('aria-hidden', !isActive);
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        mobileMenu.setAttribute('aria-expanded', 'false');
        navLinks.setAttribute('aria-hidden', 'true');
    });

    // Change navbar background on scroll using Intersection Observer
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.intersectionRatio < 1) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { threshold: [1] });

    observer.observe(document.querySelector('header'));

    // Close menu on ESC key press
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            mobileMenu.setAttribute('aria-expanded', 'false');
            navLinks.setAttribute('aria-hidden', 'true');
        }
    });

    // Keyboard navigation: Focus menu items
    navLinks.addEventListener('keydown', (event) => {
        const focusableElements = Array.from(navLinks.querySelectorAll('a'));
        const index = focusableElements.indexOf(document.activeElement);

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            const nextIndex = (index + 1) % focusableElements.length;
            focusableElements[nextIndex].focus();
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            const prevIndex = (index - 1 + focusableElements.length) % focusableElements.length;
            focusableElements[prevIndex].focus();
        }
    });

    // Lazy load images (example)
    const lazyLoadImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyLoadImages.forEach(img => imageObserver.observe(img));

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Debounce scroll events to optimize performance
    const debounce = (func, wait) => {
        return (...args) => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    const handleScroll = debounce(() => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 50);

    window.addEventListener('scroll', handleScroll);
});
