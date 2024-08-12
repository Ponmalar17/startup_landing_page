const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollrevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_container h1", {
    ...scrollrevealOption,
});

ScrollReveal().reveal(".header_container .btn", { // **Ensure this selector targets the correct button**
    ...scrollrevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__item", {
    ...scrollrevealOption,
    interval: 500,
});

ScrollReveal().reveal(".stats__image img", {
    ...scrollrevealOption,
    origin: "right",
    interval: 500,
});

ScrollReveal().reveal(".stats__card", { // **Ensure this selector targets the correct card elements**
    interval: 500,
    duration: 500,
    delay: 1000,
});

ScrollReveal().reveal(".blog__card", {
    ...scrollrevealOption,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination", // **Correctly target the Swiper pagination element**
    },
});
