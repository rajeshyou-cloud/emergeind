/* ── Mobile Nav Toggle ─────────────────────────────────── */
(function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Mobile mega-menu accordion
  document.querySelectorAll('.has-mega > a').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth > 900) return;
      e.preventDefault();
      link.closest('.has-mega').classList.toggle('open-mobile');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.site-nav')) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });
})();

/* ── Active Nav Link ───────────────────────────────────── */
(function () {
  const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href')?.replace(/\/$/, '');
    if (href && path.endsWith(href)) a.classList.add('active');
  });
})();

/* ── Smooth scroll for anchor links ───────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
