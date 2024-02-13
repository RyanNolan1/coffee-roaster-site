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
const groundAla = document.getElementById("ground-ala");
const deliveryNumber = document.getElementById("delivery-number");
const greenArrowsArray = Array.from(greenArrows);
const questionsArray = Array.from(questions);

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

questions.forEach((question, index) => {
  question.addEventListener("click", function () {
    increaseOpacity(index);
    toggleOptions(index);
    rotateArrow(index);
  });
});

function increaseOpacity(questionIndex) {
  questionsArray[questionIndex].style.opacity = "100%";
  questionsArray[questionIndex].querySelector(".question-number").style.color =
    "#0E8784";
}

// Function to rotate the green arrows and toggle on click

greenArrows.forEach((arrow, index) => {
  arrow.addEventListener("click", function () {
    arrow.classList.add("rotate");
    toggleOptions(index);
    increaseOpacity(index);
  });
});

// Function to toggle options visibility

function toggleOptions(index) {
  const option = options[index].querySelectorAll(".option");
  option.forEach((element) => {
    element.classList.add("expand");
  });
  options[index].classList.add("expand");
}

// Function to add options visibility

function showOptions(index) {
  const option = options[index].querySelectorAll(".option");
  option.forEach((element) => {
    element.classList.add("expand");
  });
  options[index].classList.add("expand");
}

// Function to rotate the green arrows

function rotateArrow(index) {
  if (!greenArrowsArray[index].classList.contains("rotate")) {
    greenArrowsArray[index].classList.add("rotate");
  }
}


preferences.forEach((preference) => {
  preference.addEventListener("click", function () {
    if (preference.value === "Capsules") {
      orderTextCoffee.innerHTML = `${preference.value}`;
      asOrUsing.innerHTML = "using";
      grindOption.style.display = "none";
      groundAla.style.display = "none";
      questionsArray[3].style.display = "none";
      deliveryNumber.innerHTML = "04";
    } else if (
      preference.value === "Filter" ||
      preference.value === "Espresso"
    ) {
      orderTextCoffee.innerHTML = `${preference.value}`;
      asOrUsing.innerHTML = "as";
      grindOption.style.display = "block";
      groundAla.style.display = "inline-block";
      questionsArray[3].style.display = "flex";
      deliveryNumber.innerHTML = "05";
    }
    showOptions(1);
    rotateArrow(1);
    increaseOpacity(1);
    window.location.href = "#bean-type";
  });
});
beanType.forEach((bean) => {
  bean.addEventListener("click", function () {
    orderTextBean.innerHTML = `${bean.value}`;
    showOptions(2);
    rotateArrow(2);
    increaseOpacity(2);
    window.location.href = "#quantity";
  });
});
quantity.forEach((quantity) => {
  quantity.addEventListener("click", function () {
    orderTextWeight.innerHTML = `${quantity.value}`;
    if (grindOption.style.display === "none") {
      showOptions(4);
      increaseOpacity(4);
      rotateArrow(4);
      window.location.href = "#deliveries";
    } else {
      showOptions(3);
      increaseOpacity(3);
      rotateArrow(3);
      window.location.href = "#grind-option";
    }
  });
});
grindOptions.forEach((grind) => {
  grind.addEventListener("click", function () {
    orderTextGrind.innerHTML = `${grind.value}`;
    showOptions(4);
    rotateArrow(4);
    increaseOpacity(4);
    window.location.href = "#deliveries";
  });
});

deliveries.forEach((delivery) => {
  delivery.addEventListener("click", function () {
    orderTextDelivery.innerHTML = `${delivery.value}`;
  });
});


// Media query Function to make the classlist "rotate" and "expand" be automatically applied on mobile

function mobileMedia(screenSize) {
  if (screenSize.matches) {
    options.forEach((element) => {
      element.classList.add("expand");
    });
    greenArrows.forEach((arrow) => {
      arrow.classList.add("rotate");
    });
  }
}

var screenSize = window.matchMedia("(max-width: 768px)");

mobileMedia(screenSize);

screenSize.addEventListener("change", function () {
  mobileMedia(screenSize);
});
