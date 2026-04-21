document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. GESTION DU THÈME (Dark / Light Mode)
    // ==========================================
    const themeBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    themeBtn.addEventListener("click", () => {
        // Vérifie le thème actuel
        const currentTheme = htmlElement.getAttribute("data-theme");
        const icon = themeBtn.querySelector("i");

        if (currentTheme === "dark") {
            htmlElement.setAttribute("data-theme", "light");
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            htmlElement.setAttribute("data-theme", "dark");
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });

    // ==========================================
    // 2. EFFET 3D TILT (Cartes Compétences)
    // ==========================================
    /* Explication de l'effet :
       On récupère les coordonnées de la souris sur la carte.
       On calcule le centre de la carte.
       Plus la souris s'éloigne du centre, plus l'angle de rotation (rotateX, rotateY) augmente.
    */
    const tiltCards = document.querySelectorAll(".tilt-card");

    tiltCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            
            // Position de la souris relative à la carte
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            
            // Centre de la carte
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calcul de la rotation (Ajuster les diviseurs pour augmenter/réduire l'inclinaison)
            const rotateX = ((y - centerY) / centerY) * -10; // -10 deg max
            const rotateY = ((x - centerX) / centerX) * 10;  // 10 deg max

            // Application de la transformation avec une perspective pour la profondeur
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = "none"; // Désactive la transition pendant le mouvement pour la fluidité
        });

        // Remise à zéro quand la souris quitte la carte
        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = "transform 0.5s ease"; // Rétablit une animation douce de retour
        });
    });

    // ==========================================
    // 3. BOUTON COPIER L'EMAIL
    // ==========================================
    const copyBtn = document.getElementById("copy-email");
    const emailTextElement = document.getElementById("email-text");
    const monEmail = "contact@tondomaine.com"; // Remplacer par ton vrai mail

    copyBtn.addEventListener("click", () => {
        // Utilisation de l'API Presse-papiers du navigateur
        navigator.clipboard.writeText(monEmail).then(() => {
            // Toast / Feedback visuel
            const icon = copyBtn.querySelector("i");
            icon.className = "fa-solid fa-check";
            icon.style.color = "var(--accent-emerald)";
            emailTextElement.innerText = "Copié !";

            // Remise à l'état initial après 2 secondes
            setTimeout(() => {
                icon.className = "fa-solid fa-envelope";
                icon.style.color = "";
                emailTextElement.innerText = "Email";
            }, 2000);
        });
    });
});