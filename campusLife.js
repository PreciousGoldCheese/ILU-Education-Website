// navi

let menu_icons = document.querySelector('.menu-icons'),
nav = document.querySelector('nav');

menu_icons.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// ______________________________________________________
// scroll animationn

document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-fade-in, .scroll-slide-in-left, .scroll-slide-in-right");

    const observerOptions = {
        root: null, 
        threshold: 0.2, 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    scrollElements.forEach(element => {
        observer.observe(element);
    });
});

// _____________________________________________________________

// animation

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 400
});

ScrollReveal().reveal('.animated-left',{delay: 400, origin: 'left'});
ScrollReveal().reveal('.animated-right',{delay: 300, origin: 'right'});
ScrollReveal().reveal('.animated-bottom',{delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.animated-bottom1',{delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.animated-bottom2',{delay: 800, origin: 'bottom'});
ScrollReveal().reveal('.animated-bottom3',{delay: 900, origin: 'bottom'});
ScrollReveal().reveal('.animated-left1',{delay: 500, origin: 'left'});
ScrollReveal().reveal('.animated-left2',{delay: 600, origin: 'left'});
ScrollReveal().reveal('.animated-left3',{delay: 650, origin: 'left'});

// ____________________________________________________