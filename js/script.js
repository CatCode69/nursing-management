AOS.init({
  once: true,
  duration: 1000,
});
const topNavMenu = document.getElementById("top-nav-menu");
const navToggleEl = document.getElementById("menu-toggle");
topNavMenu.addEventListener("click", function (e) {
  if (!e.target.classList.contains("nav-item")) return;
  navToggleEl.checked = false;
});
