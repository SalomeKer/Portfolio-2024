document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const mobileLinks = document.querySelector('.mobile-links');
    let lastScrollTop = 0;

    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Retirer la classe "active" de toutes les cartes et de leur contenu texte
            cards.forEach(c => {
                c.classList.remove('active');
                c.querySelector('.text-content').classList.remove('active');
                const video = c.querySelector('video');
                if (video) {
                    video.pause(); // Mettre en pause toutes les vidéos
                }
            });
            // Ajouter la classe "active" à la carte cliquée et à son contenu texte
            this.classList.add('active');
            this.querySelector('.text-content').classList.add('active');
            const video = this.querySelector('video');
            if (video) {
                video.play(); // Lancer la vidéo de la carte cliquée si elle existe
            }

            // Récupérer le titre et le sous-titre de la carte sélectionnée
            const title = this.querySelector('h2').innerText;
            const subtitle = this.querySelector('.subtitle').innerText;

            // Mettre à jour les éléments de titre et de sous-titre
            document.getElementById('title').innerText = title;
            document.getElementById('subtitle').innerText = subtitle;
        });
    });

    // Traiter la première carte lors du chargement de la page
    const firstCard = document.querySelector('.card.active');
    if (firstCard) {
        const video = firstCard.querySelector('video');
        if (video) {
            video.play(); // Lancer la vidéo de la première carte active si elle existe
        }
    }

    // Gérer l'activation et la désactivation du menu burger
    menuIcon.addEventListener('click', function() {
        // Toggle la classe "active" pour le menu burger et le menu mobile
        menuIcon.classList.toggle('active');
        mobileLinks.classList.toggle('active');
    });

    // Fermer le menu mobile lorsqu'on clique en dehors du menu
    document.addEventListener('click', function(event) {
        const isClickInsideNavMenu = navMenu.contains(event.target);
        const isClickInsideMenuIcon = menuIcon.contains(event.target);
        if (!isClickInsideNavMenu && !isClickInsideMenuIcon) {
            mobileLinks.classList.remove('active');
            // Enlever la classe "active" pour le menu burger
            menuIcon.classList.remove('active');
        }
    });

    // Fermer le menu mobile lorsqu'on clique sur un lien
    const mobileMenuLinks = document.querySelectorAll('.mobile-links a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileLinks.classList.remove('active');
            // Enlever la classe "active" pour le menu burger
            menuIcon.classList.remove('active');
        });
    });

    // Gérer la disparition et la réapparition de la barre de navigation lors du défilement
    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // Faites défiler vers le bas
            navMenu.style.top = "-100px"; // Modifier cette valeur selon la taille de votre barre de navigation
        } else {
            // Faites défiler vers le haut
            navMenu.style.top = "0";
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pour gérer le défilement vers le haut à partir du haut de la page
    });

    // Animation de la section "container1" et du paragraphe "about-me"
    const container1 = document.querySelector('.container1');
    const aboutMe = document.querySelector('.about-me');

    setTimeout(function() {
        container1.classList.add('show');
    }, 300);

    setTimeout(function() {
        aboutMe.classList.add('show');
    }, 900);
});
