/* ── Hero Slider ───────────────────────────────────────── */
(function () {
  const track   = document.querySelector('.slider-track');
  const slides  = document.querySelectorAll('.slide');
  const dots    = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');

  if (!track || !slides.length) return;

  let current = 0;
  let timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  nextBtn?.addEventListener('click', () => { next(); startTimer(); });
  prevBtn?.addEventListener('click', () => { prev(); startTimer(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startTimer(); }));

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { next(); startTimer(); }
    if (e.key === 'ArrowLeft')  { prev(); startTimer(); }
  });

  // Touch swipe
  let touchX = 0;
  track.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); startTimer(); }
  });

  startTimer();
})();
