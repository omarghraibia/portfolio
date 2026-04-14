// On attend que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. Gestion du Mode Sombre / Clair
       ========================================= */
    const themeBtn = document.getElementById('theme-btn');
    
    // Vérifier si l'utilisateur a déjà un thème sauvegardé dans le localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Si un thème est sauvegardé, on l'applique au chargement
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // Écouteur d'événement sur le bouton
    themeBtn.addEventListener('click', () => {
        // On récupère le thème actuel
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        // On bascule (si c'est 'dark' on passe à 'light', sinon on passe à 'dark')
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // On applique le nouveau thème sur la balise <html>
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // On sauvegarde le choix dans le navigateur
        localStorage.setItem('theme', newTheme);
    });


    /* =========================================
       2. Gestion du Menu Burger (Mobile)
       ========================================= */
    const burgerBtn = document.getElementById('burger-btn');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.navbar__link');

    // Afficher / Masquer le menu au clic sur le bouton burger
    burgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('is-active');
    });

    // Fermer le menu automatiquement quand on clique sur un lien (très important pour les One-Page)
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('is-active')) {
                navLinks.classList.remove('is-active');
            }
        });
    });
});