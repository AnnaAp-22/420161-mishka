var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var map = document.querySelector(".contacts__map");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

map.classList.remove("contacts__map--nojs");

var cartlink = document.querySelectorAll(".product-best__order");
var cartPopup = document.querySelector(".modal");
var cartClose = cartPopup.querySelector(".modal__close");
//
//корзина
[].forEach.call(cartlink, function (cartlink) {
  cartlink.addEventListener("click", function (event) {
    event.preventDefault();
    cartPopup.classList.add("modal__content-show");
  });
});
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal__content-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal__content-show")) {
      cartPopup.classList.remove("modal__content-show");
    }
  }
});
