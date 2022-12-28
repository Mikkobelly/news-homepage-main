const navButton = document.querySelector('.navigation__toggle-box');
const navPopup = document.querySelector('.nav-popup-section');
const popupContent = document.querySelector('.nav-popup');
const closeButton = document.querySelector('.nav-popup__close');


navButton.addEventListener("click", () => {
    navPopup.style.opacity = 1;
    navPopup.style.visibility = "visible";
    popupContent.style.opacity = 1;
    popupContent.style.visibility = "visible";
    popupContent.style.width = "70%";

})

closeButton.addEventListener("click", () => {
    navPopup.style.opacity = 0;
    navPopup.style.visibility = "hidden";
    popupContent.style.opacity = 0;
    popupContent.style.visibility = "hidden";
    popupContent.style.width = "0%";

})