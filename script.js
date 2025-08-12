document.addEventListener("DOMContentLoaded", function() {

    // --- Hamburger Menu Toggle ---
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    // --- Sticky Navbar on Scroll ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    // --- Navbar Active Link on Scroll & Close Menu on Link Click ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        // Close menu when scrolling
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close menu when a link is clicked
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        });
    });

    // --- Typing Text Animation ---
    if (typeof Typed !== 'undefined') {
        const typed = new Typed('.typing-text', {
            strings: ['Frontend Developer','UI/UX Designer','Digital Marketer'],
            typeSpeed: 100, // গতি কমানোর জন্য মান বাড়ানো হয়েছে
            backSpeed: 100, // গতি কমানোর জন্য মান বাড়ানো হয়েছে
            backDelay: 1000,
            loop: true
        });
    } else {
        console.error('Typed.js library not found.');
        const typingElement = document.querySelector('.typing-text');
        if (typingElement) {
            typingElement.textContent = 'Frontend Developer';
        }
    }
    
    // --- Scroll Reveal Animation ---
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            reset: false, // Animation will only run once
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        // Revealing elements from different origins
        sr.reveal('.home-content, .heading', { origin: 'top' });
        sr.reveal('.home-img, .skills-slider, .contact form, .contact-details, .education-container', { origin: 'bottom' });
        sr.reveal('.about-img', { origin: 'left' });
        sr.reveal('.about-content', { origin: 'right' });

    } else {
        console.error('ScrollReveal.js library not found.');
    }
});

