(() => {
  "use strict";

  /* ---------- Mobile menu ---------- */

  const burger = document.querySelector(".burger");
  const menu = document.getElementById("mobile-menu");
  const overlay = document.querySelector(".menu-overlay");
  const MOBILE_MAX = 720;

  const setMenu = (open) => {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
    overlay.hidden = !open;
    document.body.classList.toggle("menu-open", open);
  };

  if (burger && menu && overlay) {
    burger.addEventListener("click", () => {
      setMenu(burger.getAttribute("aria-expanded") !== "true");
    });

    overlay.addEventListener("click", () => setMenu(false));

    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        burger.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > MOBILE_MAX && burger.getAttribute("aria-expanded") === "true") {
        setMenu(false);
      }
    });
  }

  /* ---------- Stat count-up ---------- */

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const format = (value, decimals, suffix) => value.toFixed(decimals) + suffix;

  const countUp = (el, i) => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const suffix = el.dataset.suffix || "";

    if (reduceMotion) {
      el.textContent = format(target, decimals, suffix);
      return;
    }

    const duration = 1500 + i * 80;
    const delay = 480 + i * 90;

    setTimeout(() => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        el.textContent = format(target * easeOutCubic(t), decimals, suffix);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
  };

  const values = Array.from(document.querySelectorAll(".stat-value"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          countUp(el, values.indexOf(el));
          observer.unobserve(el);
        });
      },
      { threshold: 0.25 }
    );
    values.forEach((el) => io.observe(el));
  } else {
    values.forEach(countUp);
  }
})();
