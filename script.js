// Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealElements() {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


// Navbar Background

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(10,10,10,0.95)";
    } else {
        nav.style.background = "rgba(10,10,10,0.8)";
    }
});


// Hero Typing Effect

const text = "Data Science Student";
const target = document.querySelector(".line2");

let i = 0;

function typeText() {
    if (i < text.length) {
        target.textContent += text.charAt(i);
        i++;
        setTimeout(typeText, 100);
    }
}

target.textContent = "";
typeText();


// Smooth Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});