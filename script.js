const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", function() {
    console.log("Button clicked");
    navLinks.classList.toggle("active");
});
