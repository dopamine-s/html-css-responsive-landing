var topBar = document.querySelector('.page-header__top-bar');
var pageHeaderToggle = document.querySelector('.page-header__toggle');

topBar.classList.remove('page-header__top-bar--no-js');

pageHeaderToggle.addEventListener("click", function () {
  topBar.classList.toggle('page-header__top-bar--closed');
  topBar.classList.toggle('page-header__top-bar--opened');
});
