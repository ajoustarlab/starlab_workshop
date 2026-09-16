const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  nav?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  nav?.classList.toggle("is-open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 780) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

updateHeader();
