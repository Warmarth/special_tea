// show current year
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// nav toggle
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-link");

// add listeners
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// smooth scroll
// select links
const scrollLinks = document.querySelectorAll("scroll-link");
scrollLinks.forEach(link => {link.addEventListener("click", e => {
  // prevent default
  e.preventDefault();
  links.classList.remove("show-links");

  const id = e.target.getAttribute("herf").slice(1);
  const element = document.getElementById(id);
 //
  let position = element.offsetTop - 62;
  window.scrollTo({
    left:0,
    // top: element.offsetTop,
    top:position,
    behavior:"smooth"
  });
 });
});
