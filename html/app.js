// show current year
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// for nav-bar
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
// disclose nav-bar
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// collapes nav-bar
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
