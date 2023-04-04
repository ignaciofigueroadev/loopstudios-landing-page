const openMenu = document.querySelector(".header__menu--open");
const closeMenu = document.querySelector(".header__menu--close");
const nav = document.querySelector(".header__nav");

const showMenu = () => {
  nav.classList.add("header__nav--active");
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
};

const removeMenu = () => {
  nav.classList.remove("header__nav--active");
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
};

openMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", removeMenu);
