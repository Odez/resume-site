const footerLastUpdated = document.getElementById("footer-last-updated");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const useLightMotion = prefersReducedMotion || isMobile;
const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

if (footerLastUpdated) {
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();
  footerLastUpdated.textContent = `Last updated: ${month} ${year}`;
}

if (window.AOS && !prefersReducedMotion) {
  AOS.init({
    duration: useLightMotion ? 420 : 600,
    once: useLightMotion,
    offset: useLightMotion ? 24 : 50,
    mirror: !useLightMotion,
  });
}

const nav = document.getElementById("main-nav");

if (nav) {
  const syncNavState = () => {
    nav.classList.toggle("scrolled", window.scrollY > 80);
  };

  syncNavState();
  window.addEventListener("scroll", syncNavState, { passive: true });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetSelector = anchor.getAttribute("href");
    const target = targetSelector ? document.querySelector(targetSelector) : null;

    if (!target) {
      return;
    }

    event.preventDefault();

    if (nav instanceof HTMLElement && isMobile) {
      const navOffset = nav.offsetHeight + 12;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navOffset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: scrollBehavior,
      });
      return;
    }

    target.scrollIntoView({ behavior: scrollBehavior, block: "start" });
  });
});

document.querySelectorAll(".proj-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;

    if (!(panel instanceof HTMLElement)) {
      return;
    }

    const isOpen = panel.classList.toggle("open");
    button.textContent = isOpen ? "\u25BE Projects" : "\u25B8 Projects";
    button.setAttribute("aria-expanded", String(isOpen));
  });
});
