const openMenu = document.querySelector(".header__menu--open");
const closeMenu = document.querySelector(".header__menu--close");
const nav = document.querySelector(".header__nav");
const navItems = document.querySelectorAll(".header__item");
const heroTitle = document.querySelector(".header__title");

const showMenu = () => {
  nav.classList.add("header__nav--active");
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
  // heroTitle.style.zIndex = "-5";
};

const removeMenu = () => {
  nav.classList.remove("header__nav--active");
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  // heroTitle.style.zIndex = "1";
};

openMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", removeMenu);

navItems.forEach((item) => {
  item.addEventListener("click", removeMenu);
});
