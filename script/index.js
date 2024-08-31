const openBurgerButton = document.querySelector(".burgerbutton__label");
const popupBurger = document.querySelector(".popup");
const closeBurgerButton = document.querySelector(".popup__button-cross");

function openPopup() {
  popupBurger.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscClose);
}
function closePopup() {
  popupBurger.classList.remove("popup_opened");
  document.addEventListener("keydown", handleEscClose);
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
}

openBurgerButton.addEventListener("click", () => {
  openPopup();
});
closeBurgerButton.addEventListener("click", () => {
  closePopup();
});

popupBurger.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup")) {
    closePopup();
  }
});
