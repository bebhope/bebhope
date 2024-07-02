// Auto slider
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navigation bar effect on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle navigation menu
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navbar ul");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
