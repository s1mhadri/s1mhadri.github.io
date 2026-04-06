/* ============================================================
   main.js — Shared Logic (scroll reveal, transitions, progress)
   ============================================================ */

(function () {
  'use strict';

  /* --- Scroll Progress Bar --------------------------------- */
  const progressBar = document.getElementById('scroll-progress');

  function updateScrollProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* --- IntersectionObserver Scroll Reveal ------------------- */
  const revealElements = document.querySelectorAll('[data-reveal]');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  /* --- Page Entry Transition ------------------------------- */
  const navigatedFlag = sessionStorage.getItem('navigated');

  if (navigatedFlag) {
    document.body.classList.add('page-enter');
    sessionStorage.removeItem('navigated');

    document.body.addEventListener('animationend', function handler() {
      document.body.classList.remove('page-enter');
      document.body.removeEventListener('animationend', handler);
    });
  }

  /* --- Page Exit Transition -------------------------------- */
  const navLinks = document.querySelectorAll('a.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http')) return;

      e.preventDefault();
      sessionStorage.setItem('navigated', 'true');
      document.body.classList.add('page-exit');

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });

  /* --- Mobile Hamburger Toggle ----------------------------- */
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinksContainer = document.querySelector('.nav-links');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinksContainer.classList.toggle('open');
    });

    // Close menu on link click
    navLinksContainer.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinksContainer.classList.remove('open');
      });
    });
  }

  /* --- Dynamic Year --------------------------------------- */
  const yearElements = document.querySelectorAll('.current-year');
  if (yearElements.length > 0) {
    const currentYear = new Date().getFullYear();
    yearElements.forEach((el) => {
      el.textContent = currentYear.toString();
    });
  }
})();
