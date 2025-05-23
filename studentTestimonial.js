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


//Testimonial Data
const testimonials = [
    {
        name: "Paing Soe Oo",
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
        name: "Hninn Pwint Phyu",
        // job: "UI Designer, Affinity Agency",
        image: "img/profile-image-3.png",
        testimonial:
            "Finishing the UFY program helps me realize my strength and interest. Because of this 10 month program I can now apply those skills in my real life.",
    },
    {
        name: "Khin Pyae Sone Linn",
        // job: "CEO, Zeal Wheels",
        image: "img/profile-image-4.png",
        testimonial:
            "ILU has given me the knowledge, confidence and opportunity to achieve my goals. Choosing to attend ILU was the best decision I've ever made.",
    },
    {
        name: "Khin Phyu Phyu Linn",
        // job: "CEO, Zeal Wheels",
        image: "img/profile-image-5.png",
        testimonial:
            "My journey as a Computer Science student has been truly transformative. Throughout my academic years, I not only gained my technical skills in programming, web development, and design approaches but also developed strong problem-solving abilities. Additionally, I gained valuable experience in teamwork and collaboration, which have prepared me to tackle real-world challenges effectively.",
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
