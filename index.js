const $ = (el) => document.querySelectorAll(el);
const dropdown = $(".dropdown");
const nav = $(".navbar__links")[0];
const menu = $(".menu")[0];

// toggle --open for the arrow up transformation
// and "open" for the dropdown
dropdown.forEach((links) => {
  links.addEventListener("click", (e) => {
    e.stopPropagation();
    links.children[0].children[0].classList.toggle("--open");
    links.children[1].classList.toggle("open");
    console.log(links.children[0]);
  });
});

//change the hamburguer image
menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    menu.src = "./images/icon-close-menu.svg";
  } else {
    menu.src = "./images/icon-menu.svg";
  }
});

//just stop the annoying dropdown's behaviour of closing when clicked inside
$(".dropdown__links").forEach((e) =>
  e.addEventListener("click", (e) => {
    e.stopPropagation();
  })
);

// clicking anywhere outside the dropdown area will close it
document.addEventListener("click", (e) => {
  dropdown.forEach((links) => {
    links.children[0].children[0].classList.remove("--open");
    links.children[1].classList.remove("open");
  });
});
