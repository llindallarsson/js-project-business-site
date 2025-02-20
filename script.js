const hamburgerMenu = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("expanded")

  navMenu.classList.toggle("active")

  if (!navMenu.classList.contains("active")) {

    setTimeout(() => {
      navMenu.style.display = "none";
    }, 500);

  } else {
    navMenu.style.display = "flex";
  }

});