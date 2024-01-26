const burgerNav = document.getElementById("burger-nav");
const menuOverlay = document.querySelector(".mobile-menu-overlay");


burgerNav.addEventListener("click", toggleMenu);


function toggleMenu() {
    menuOverlay.classList.toggle("nav-active");
    if (menuOverlay.classList[1] === "nav-active") {
        burgerNav.src="./assets/shared/mobile/icon-close.svg";
    } else {
        burgerNav.src="./assets/shared/mobile/icon-hamburger.svg";
    }
}