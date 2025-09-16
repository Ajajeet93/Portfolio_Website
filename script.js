
var typed = new Typed(".text_role", {
    strings: ["Web Developer", "Programmer", "Frontend Developer","Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});