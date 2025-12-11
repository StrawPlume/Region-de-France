let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

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

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ScrollReveal animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Cible les éléments pour l'animation
ScrollReveal().reveal('.home-content, .heading, .histoire-content, .Chiffres-container, .culture-content', { origin: 'top' });
ScrollReveal().reveal('.home-img, .histoire-img, .Chiffres-box, .joyaux-container, .culture-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .histoire-content h2, .heading', { origin: 'left' });
ScrollReveal().reveal('.home-content p:not(.histoire-text-long), .histoire-content p:not(.histoire-text-long)', { origin: 'right' });



// Cibler le bouton et la case à cocher
const toggleCheckbox = document.getElementById('voir-plus');
const toggleButton = document.getElementById('toggle-btn');

// Ajouter un écouteur d'événement pour changer le texte
toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        toggleButton.textContent = 'Voir moins'; // Texte lorsque le contenu est affiché
    } else {
        toggleButton.textContent = 'Voir plus'; // Texte lorsque le contenu est masqué
    }
});


// Cibler le bouton et la case à cocher pour la section Culture
const toggleCheckboxCulture = document.getElementById('voir-plus-culture');
const toggleButtonCulture = document.getElementById('toggle-btn-culture');

// Ajouter un écouteur d'événement pour changer le texte
toggleCheckboxCulture.addEventListener('change', () => {
    if (toggleCheckboxCulture.checked) {
        toggleButtonCulture.textContent = 'Voir moins'; // Texte lorsque le contenu est affiché
    } else {
        toggleButtonCulture.textContent = 'Voir plus'; // Texte lorsque le contenu est masqué
    }
});
