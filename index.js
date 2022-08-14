const $ = (el) => document.querySelectorAll(el);

$(".submenu").forEach((links) => {
  links.addEventListener("click", (e) => {
    e.stopPropagation();
    links.children[0].children[0].classList.toggle("--open");
    links.children[1].classList.toggle("open");
    console.log(links.children[0]);
  });
});

$(".menu")[0].addEventListener("click", () => {
  const nav = $(".navbar__links")[0];
  const menu = $(".menu")[0];
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    menu.src = "./images/icon-close-menu.svg";
  } else {
    menu.src = "./images/icon-menu.svg";
  }
});

$(".submenu__links").forEach((e) =>
  e.addEventListener("click", (e) => {
    e.stopPropagation();
  })
);
