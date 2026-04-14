document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. Mode Sombre / Clair (Dark Mode)
       ========================================= */
    const themeBtn = document.getElementById('theme-btn');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Change l'emoji du bouton
        themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });


    /* =========================================
       2. Menu Mobile (Burger)
       ========================================= */
    const burgerBtn = document.getElementById('burger-btn');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.navbar__link');

    burgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('is-active');
        burgerBtn.classList.toggle('is-active');
    });

    // Fermeture automatique au clic
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('is-active');
            burgerBtn.classList.remove('is-active');
        });
    });

    /* =========================================
       3. Animation au défilement (Scroll Reveal)
       ========================================= */
    // On sélectionne tous les éléments avec la classe .reveal
    const reveals = document.querySelectorAll('.reveal');

    // L'API IntersectionObserver vérifie si un élément entre dans la vue de l'écran
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se déclenche quand 15% de l'élément est visible
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optionnel : on arrête d'observer une fois affiché
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});