const openBurgerButton = document.querySelector(".burgerbutton__label");
const popupBurger = document.querySelector(".popup");
const closeBurgerButton = document.querySelector(".popup__button-cross");

openBurgerButton.addEventListener("click", () => {
  popupBurger.classList.add("popup_opened");
});

closeBurgerButton.addEventListener("click", () => {
  popupBurger.classList.remove("popup_opened");
});

function escKeyHandler() {}

function clickOutside() {}
