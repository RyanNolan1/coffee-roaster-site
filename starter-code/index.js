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
const submitButton = document.getElementById("submit-button");
const subscribeSection = document.getElementById("subscribe-section");
const subscribeAsOrUsing = document.getElementById("subscribe-as-or-using");
const subscribeTextCoffee = document.getElementById("subscribe-text-coffee");
const subscribeTextBean = document.getElementById("subscribe-text-bean");
const subscribeTextWeight = document.getElementById("subscribe-text-weight");
const subscribeGroundAla = document.getElementById("subscribe-ground-ala");
const subscribeTextGrind = document.getElementById("subscribe-text-grind");
const subscribeTextDelivery = document.getElementById(
  "subscribe-text-delivery"
);
const everyWeekPrice = document.getElementById("every-week-price");
const everyTwoWeekPrice = document.getElementById("every-two-week-price");
const everyMonthPrice = document.getElementById("every-month-price");
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
      orderTextCoffee.innerText = `${preference.value}`;
      asOrUsing.innerText = "using";
      grindOption.style.display = "none";
      groundAla.style.display = "none";
      questionsArray[3].style.display = "none";
      deliveryNumber.innerText = "04";
    } else if (
      preference.value === "Filter" ||
      preference.value === "Espresso"
    ) {
      orderTextCoffee.innerText = `${preference.value}`;
      asOrUsing.innerText = "as";
      grindOption.style.display = "block";
      groundAla.style.display = "inline-block";
      questionsArray[3].style.display = "flex";
      deliveryNumber.innerText = "05";
    }
    showOptions(1);
    rotateArrow(1);
    increaseOpacity(1);
    window.location.href = "#bean-type";
  });
});
beanType.forEach((bean) => {
  bean.addEventListener("click", function () {
    orderTextBean.innerText = `${bean.value}`;
    showOptions(2);
    rotateArrow(2);
    increaseOpacity(2);
    window.location.href = "#quantity";
  });
});
quantity.forEach((quantity) => {
  quantity.addEventListener("click", function () {
    orderTextWeight.innerText = `${quantity.value}`;
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
    shippingCost(quantity.value)
  });
});
grindOptions.forEach((grind) => {
  grind.addEventListener("click", function () {
    orderTextGrind.innerText = `${grind.value}`;
    showOptions(4);
    rotateArrow(4);
    increaseOpacity(4);
    window.location.href = "#deliveries";
  });
});

deliveries.forEach((delivery) => {
  delivery.addEventListener("click", function () {
    orderTextDelivery.innerText = `${delivery.value}`;
    window.location.href = "#order-summary-link";
  });
});

submitButton.addEventListener("click", displaySummary);

function displaySummary() {
  subscribeSection.style.opacity = "1";
  subscribeSection.style.visibility = "visible";
  subscribeAsOrUsing.innerText = asOrUsing.innerText;
  subscribeTextCoffee.innerText = orderTextCoffee.innerText;
  subscribeTextBean.innerText = orderTextBean.innerText;
  subscribeTextWeight.innerText = orderTextWeight.innerText;
  subscribeGroundAla.innerText = groundAla.innerText;
  subscribeTextGrind.innerText = orderTextGrind.innerText;
  subscribeTextDelivery.innerText = orderTextDelivery.innerText;
}

function shippingCost(weight) {
  if (weight === "250g") {
    everyWeekPrice.innerText = "$7.20";
    everyTwoWeekPrice.innerText = "$9.60";
    everyMonthPrice.innerText = "$12.00";
  } else if (weight === "500g") {
    everyWeekPrice.innerText = "$13.00";
    everyTwoWeekPrice.innerText = "$17.50";
    everyMonthPrice.innerText = "$22.00";
  } else if (weight === "1000g") {
    everyWeekPrice.innerText = "$22.00";
    everyTwoWeekPrice.innerText = "$32.00";
    everyMonthPrice.innerText = "$42.00";
  }
}