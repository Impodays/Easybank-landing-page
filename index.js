const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-button");
const heroImg = document.getElementById("hero-img");
const hero = document.getElementById("hero");

menuButton.addEventListener("click", navToggle);

function navToggle() {
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  heroImg.classList.toggle("opacity-20");
  hero.classList.toggle("bg-gradient-to-b");
}
