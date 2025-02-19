const hamburgerMenu = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");

hamburgerMenu.addEventListener("click", () => {
  console.log("H-menun är klickad på")
  hamburgerMenu.classList.toggle("expanded")

  navMenu.classList.toggle("active")
})