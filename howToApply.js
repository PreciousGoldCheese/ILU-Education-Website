let menu_icons = document.querySelector('.menu-icons'),
nav = document.querySelector('nav');

menu_icons.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// _______________________________________________________________________________________________________________

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 400
});

ScrollReveal().reveal('.animated-left',{delay: 400, origin: 'left'});
ScrollReveal().reveal('.animated-right',{delay: 600, origin: 'right'});
ScrollReveal().reveal('.animated-bottom',{delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.animated-left1',{delay: 500, origin: 'left'});
ScrollReveal().reveal('.animated-left2',{delay: 600, origin: 'left'});
ScrollReveal().reveal('.animated-left3',{delay: 650, origin: 'left'});