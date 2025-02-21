
// document.addEventListener("DOMContentLoaded", function () {

const hamburgerMenu = document.getElementById("ham-menu");
const navMenu = document.getElementById("nav-menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("expanded")

  navMenu.classList.toggle("active")

  // document.addEventListener("click", function (event) { //test
  //   if (!navMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
  //     navMenu.classList.remove("active");
  //     hamburgerMenu.classList.remove("expanded");
  //   }

  if (!navMenu.classList.contains("active")) {

    setTimeout(() => {
      navMenu.style.display = "none";
    }, 500);

  } else {
    navMenu.style.display = "flex";
  }

});


// document.querySelectorAll(".menu-item").forEach(link => {
//   link.addEventListener("click", function () {
//     navMenu.classList.remove("active");
//     hamburgerMenu.classList.remove("expanded");
//   });
// });
// });

// NEW FUNCTION

const dayOfWeek = (new Date).getDay();
const openHours = ["Open today 10.00–15.00", //sunday
  "Closed today", // monday
  "Open today 10.00–18.00", // tuesday
  "Open today 10.00–18.00", // wendsday 
  "Closed today", // thursday
  "Open today 10.00–20.00", // friday
  "Open today 10.00–15.00"] // saturday 

const todayHours = openHours[dayOfWeek];
document.getElementById("openHours").innerHTML = todayHours;