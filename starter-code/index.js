const burgerNav = document.getElementById("burger-nav");
const menuOverlay = document.querySelector(".mobile-menu-overlay");
const questions = document.querySelectorAll(".question");
const greenArrows = document.querySelectorAll(".green-arrow");
const options = document.querySelectorAll(".options");

burgerNav.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuOverlay.classList.toggle("nav-active");
  if (menuOverlay.classList[1] === "nav-active") {
    burgerNav.src = "./assets/shared/mobile/icon-close.svg";
  } else {
    burgerNav.src = "./assets/shared/mobile/icon-hamburger.svg";
  }
}

questions.forEach((question) => {
  question.addEventListener("click", increaseOpacity);

  function increaseOpacity() {
    questions.forEach((question) => {
      question.style.opacity = "40%";
      question.querySelector(".question-number").style.color =
        "rgb(51, 61, 75)";
    });
    question.style.opacity = "100%";
    question.querySelector(".question-number").style.color = "#0E8784";
  }
});

greenArrows.forEach((arrow, index) => {
  arrow.addEventListener("click", function () {
    toggleOptions(index);
  });

  function toggleOptions(index) {
    const option = options[index].querySelectorAll(".option");
    option.forEach(element => {
      element.classList.toggle('expand');
    })
    options[index].classList.toggle('expand');
  }
});
