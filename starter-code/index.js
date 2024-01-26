const burgerNav = document.getElementById("burger-nav");
const menuOverlay = document.querySelector(".mobile-menu-overlay");


burgerNav.addEventListener("click", toggleMenu);


function toggleMenu() {
    menuOverlay.classList.toggle("nav-active");
}