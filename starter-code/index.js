const burgerNav = document.getElementById("burger-nav");
const menuOverlay = document.querySelector(".mobile-menu-overlay");
const questions = document.querySelectorAll(".question");
const greenArrows = document.querySelectorAll(".green-arrow");
const options = document.querySelectorAll(".options");
const preferences = document.getElementsByName('preferences');

burgerNav.addEventListener("click", toggleMenu);

//Function to toggle the menu overlay on every page

function toggleMenu() {
  menuOverlay.classList.toggle("nav-active");
  if (menuOverlay.classList[1] === "nav-active") {
    burgerNav.src = "./assets/shared/mobile/icon-close.svg";
  } else {
    burgerNav.src = "./assets/shared/mobile/icon-hamburger.svg";
  }
}

// Function to highlight the plan navigation

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

// Function to rotate the green arrows and toggle on click

greenArrows.forEach((arrow, index) => {
  arrow.addEventListener("click", function () {
    arrow.classList.toggle("rotate");
    toggleOptions(index);
  });
});

// Function to toggle options visibility

  function toggleOptions(index) {
    const option = options[index].querySelectorAll(".option");
    option.forEach((element) => {
      element.classList.toggle("expand")
    });
    options[index].classList.toggle("expand");
  }


  preferences.forEach(preference => {
    preference.addEventListener("click", function() {
      toggleOptions(1)
    })
  })