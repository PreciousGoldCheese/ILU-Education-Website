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

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in, .slide-in");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });
    
    elements.forEach(el => observer.observe(el));
});

// _______________________________________________________________

// title animation

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

// ____________________________________________________

// slider

//Testimonial Data
const testimonials = [
    {
        name: "-Paing Soe Oo",
        // job: "CEO, Fashworks",
        image: "img/profile-img1.png",
        testimonial:
            "After a few years of teaching at ILU, I was overjoyed to win a scholarship to study at Suranaree University of Technology in Thailand to pursue a second Master's Degree.  ILU backed me with hugely valuable Recommendation Letters and documentary evidence all the way.",
    },
    {
        name: "Nyein Hsu Pyae",
        // job: "Developer, TechCrew",
        image: "img/profile-img2.png",
        testimonial:
            "I'm so thankful ILU hired me as a language teacher. The prestige of having worked at ILU helped win me a full scholarship for both a second Master's Degree and a PhD at Sophia University in Japan.  ILU more than kept their promise to help me become a stronger leader!",
    },
    {
        name: "Jae Robin",
        job: "UI Designer, Affinity Agency",
        image: "profile-image-3.png",
        testimonial:
            "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
    },
    {
        name: "Nicola Blakely",
        job: "CEO, Zeal Wheels",
        image: "profile-image-4.png",
        testimonial:
            "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

// Current Slide
let i = 0;
// Total Slides
let j = testimonials.length;

// Selecting elements
let imgElement = document.getElementById("testimonial-img");
let textElement = document.getElementById("testimonial-text");
let nameElement = document.getElementById("testimonial-name");
let jobElement = document.getElementById("testimonial-job");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// Display Function
let displayTestimonial = () => {
    imgElement.src = testimonials[i].image;
    textElement.textContent = testimonials[i].testimonial;
    nameElement.textContent = testimonials[i].name;
    jobElement.textContent = testimonials[i].job;
};

// Button Events
nextBtn.addEventListener("click", () => {
    i = (i + 1) % j;
    displayTestimonial();
});

prevBtn.addEventListener("click", () => {
    i = (i - 1 + j) % j;
    displayTestimonial();
});

// Initial Load
window.onload = displayTestimonial;
