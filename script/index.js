const openBurgerButton = document.querySelector(".burgerbutton__label");
const popupBurger = document.querySelector(".popup");
const burgerButtons = document.querySelectorAll(".burger__nav-link");

function togglePopup() {
  popupBurger.classList.toggle("popup_opened");
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
  togglePopup();
});

popupBurger.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup")) {
    closePopup();
  }
});

burgerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closePopup();
  });
});
