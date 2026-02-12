(() => {
  const btn = document.querySelector('.nav-toggle');
  const list = document.querySelector('.nav-list');
  if (btn && list){
    btn.addEventListener('click', () => {
      const open = list.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Close menu on click
    list.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        list.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  // Footer dates
  const year = document.getElementById('year');
  const updated = document.getElementById('updated');
  const now = new Date();
  if (year) year.textContent = String(now.getFullYear());
  if (updated) updated.textContent = now.toLocaleDateString(undefined, { year:'numeric', month:'short', day:'2-digit' });
})();
