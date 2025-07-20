const navLinks = [...document.querySelectorAll("nav div")];
const sections = document.querySelectorAll("section");
const themeBtn = select(".theme");

// activate first li and section
navLinks[0].classList.add("active");
sections[0].classList.add("active");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    removeActive("nav div.active");
    removeActive("section.active");
    e.target.classList.add("active");
    const section = document.querySelector("nav div.active").dataset.section;
    addActive(`.${section}`);
  });
});

// add title on each section
sections.forEach((sec) => {
  const title = document.createElement("h1");
  title.textContent = sec.dataset.title;
  title.style = "text-transform: capitalize; font-weight: 900";
  sec.prepend(title);
});

// - - - - theme - - - -

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// - - - - helpers - - - -

function select(selector) {
  return document.querySelector(selector);
}

function removeActive(selector) {
  select(selector).classList.remove("active");
}
function addActive(selector) {
  select(selector).classList.add("active");
}
