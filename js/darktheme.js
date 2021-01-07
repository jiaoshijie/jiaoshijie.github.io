const burger = document.querySelector(".burger");

const navMenu = document.querySelector("nav ul");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("open");
});
