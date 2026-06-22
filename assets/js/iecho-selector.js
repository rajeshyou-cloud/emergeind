/* ── IECHO 9-Model Interactive Selector ───────────────── */
(function () {
  const buttons = document.querySelectorAll('.model-btn');
  const panels  = document.querySelectorAll('.model-panel');

  if (!buttons.length) return;

  function activate(id) {
    buttons.forEach(b => b.classList.toggle('active', b.dataset.model === id));
    panels.forEach(p  => p.classList.toggle('active',  p.dataset.model === id));
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => activate(btn.dataset.model));
  });

  // Activate first on load
  if (buttons[0]) activate(buttons[0].dataset.model);
})();
