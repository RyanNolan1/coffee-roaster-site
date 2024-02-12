const burgerNav = document.getElementById("burger-nav");
const menuOverlay = document.querySelector(".mobile-menu-overlay");
const questions = document.querySelectorAll(".question");
const greenArrows = document.querySelectorAll(".green-arrow");
const options = document.querySelectorAll(".options");
const preferences = document.getElementsByName("preferences");
const beanType = document.getElementsByName("bean-type");
const quantity = document.getElementsByName("quantity");
const grindOptions = document.getElementsByName("grind-option");
const grindOption = document.getElementById("grind-option");
const deliveries = document.getElementsByName("deliveries");
const asOrUsing = document.getElementById("as-or-using");
const orderTextCoffee = document.getElementById("order-text-coffee");
const orderTextBean = document.getElementById("order-text-bean");
const orderTextWeight = document.getElementById("order-text-weight");
const orderTextGrind = document.getElementById("order-text-grind");
const orderTextDelivery = document.getElementById("order-text-delivery");


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

const greenArrowsArray = Array.from(greenArrows);

// Function to toggle options visibility

function toggleOptions(index) {
  const option = options[index].querySelectorAll(".option");
  option.forEach((element) => {
    element.classList.toggle("expand");
  });
  options[index].classList.toggle("expand");
}

// Function to add options visibility

function showOptions(index) {
  const option = options[index].querySelectorAll(".option");
  option.forEach((element) => {
    element.classList.add("expand");
  });
  options[index].classList.add("expand");
}

preferences.forEach((preference) => {
  preference.addEventListener("click", function () {
    if (preference.value === "Capsules") {
      orderTextCoffee.innerHTML = `${preference.value}`
      asOrUsing.innerHTML = "using";
      grindOption.style.display = "none";
    } else if (preference.value === "Filter" || preference.value === "Espresso" ){
      orderTextCoffee.innerHTML  = `${preference.value}`
      asOrUsing.innerHTML = "as";
      grindOption.style.display = "block";
    }
    showOptions(1);
    if (!greenArrowsArray[1].classList.contains("rotate")) {
      greenArrowsArray[1].classList.add("rotate");
    }
  });
});
beanType.forEach((bean) => {
  bean.addEventListener("click", function () {
    orderTextBean.innerHTML = `${bean.value}`
    showOptions(2);
    if (!greenArrowsArray[2].classList.contains("rotate")) {
      greenArrowsArray[2].classList.add("rotate");
    }
  });
});
quantity.forEach((quantity) => {
  quantity.addEventListener("click", function () {
    orderTextWeight.innerHTML = `${quantity.value}`
    showOptions(3);
    if (!greenArrowsArray[3].classList.contains("rotate")) {
      greenArrowsArray[3].classList.add("rotate");
    }
  });
});
grindOptions.forEach((grind) => {
  grind.addEventListener("click", function () {
    showOptions(4);
    if (!greenArrowsArray[4].classList.contains("rotate")) {
      greenArrowsArray[4].classList.add("rotate");
    }
  });
});
