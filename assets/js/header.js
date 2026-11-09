/* ==================================================
   HEADER FUNCTIONALITY STARTED
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".header-nav");
  const toggle = document.querySelector(".header-menu-toggle");
  const backdrop = document.querySelector(".header-nav-backdrop");

  if (!header || !nav || !toggle || !backdrop) return;

  const navLinks = nav.querySelectorAll(".header-nav-link");
  const mobileBreakpoint = window.matchMedia("(max-width: 991px)");
  let previousFocus = null;

  /* Mobile Menu Open */
  const openMenu = () => {
    if (!mobileBreakpoint.matches) return;

    previousFocus = document.activeElement;

    nav.classList.add("is-open");
    backdrop.classList.add("is-visible");

    toggle.setAttribute("aria-expanded", "true");
    nav.removeAttribute("inert");

    document.body.style.overflow = "hidden";

    navLinks[0]?.focus();
  };

  /* Mobile Menu Close */
  const closeMenu = (restoreFocus = true) => {
    nav.classList.remove("is-open");
    backdrop.classList.remove("is-visible");

    toggle.setAttribute("aria-expanded", "false");
    nav.setAttribute("inert", "");

    document.body.style.overflow = "";

    if (restoreFocus && previousFocus instanceof HTMLElement) {
      previousFocus.focus();
    }

    previousFocus = null;
  };

  /* Mobile Menu Toggle */
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  /* Close Menu On Navigation */
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileBreakpoint.matches) {
        closeMenu(false);
      }
    });
  });

  /* Close Menu On Backdrop */
  backdrop.addEventListener("click", () => {
    closeMenu();
  });

  /* Keyboard Navigation */
  document.addEventListener("keydown", (event) => {
    if (!nav.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeMenu();
      return;
    }

    if (event.key === "Tab") {
      const focusable = Array.from(
        nav.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  /* Responsive Menu Reset */
  const handleBreakpointChange = () => {
    if (mobileBreakpoint.matches) {
      if (!nav.classList.contains("is-open")) {
        nav.setAttribute("inert", "");
      }
    } else {
      closeMenu(false);
      nav.removeAttribute("inert");
    }
  };

  mobileBreakpoint.addEventListener("change", handleBreakpointChange);
  handleBreakpointChange();

  /* Sticky Header Scroll State */
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  /* Active Section Navigation Started */
  const sectionLinks = Array.from(navLinks)
    .map((link) => {
      const href = link.getAttribute("href");
      if (!href || !href.includes("#")) return null;

      const id = href.split("#")[1];
      if (!id) return null;

      const section = document.getElementById(decodeURIComponent(id));
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  const updateActiveSection = () => {
    const headerHeight = header.getBoundingClientRect().height;
    const activationLine = headerHeight + 80;
    let activeItem = null;

    sectionLinks.forEach((item) => {
      const rect = item.section.getBoundingClientRect();

      if (rect.top <= activationLine && rect.bottom > activationLine) {
        activeItem = item;
      }
    });

    sectionLinks.forEach(({ link }) => {
      link.removeAttribute("aria-current");
    });

    if (activeItem) {
      activeItem.link.setAttribute("aria-current", "location");
    }
  };

  let scrollScheduled = false;

  const scheduleActiveSectionUpdate = () => {
    if (scrollScheduled) return;

    scrollScheduled = true;

    requestAnimationFrame(() => {
      updateActiveSection();
      scrollScheduled = false;
    });
  };

  window.addEventListener("scroll", scheduleActiveSectionUpdate, {
    passive: true,
  });

  window.addEventListener("resize", scheduleActiveSectionUpdate);

  window.addEventListener("hashchange", scheduleActiveSectionUpdate);

  scheduleActiveSectionUpdate();
  /* Active Section Navigation Ended */
});

/* ==================================================
   HEADER FUNCTIONALITY ENDED
================================================== */
