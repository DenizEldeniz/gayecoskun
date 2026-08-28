const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const loadingStartedAt = performance.now();

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("load", () => {
  const remainingDelay = Math.max(0, 380 - (performance.now() - loadingStartedAt));

  window.setTimeout(() => {
    document.body.classList.remove("is-loading");
    document.body.classList.add("is-loaded");
  }, remainingDelay);
});
