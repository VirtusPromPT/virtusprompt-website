// Light/dark toggle. Starts from the device setting; a click saves the choice in localStorage ('vp-theme').
const root = document.documentElement;
const btn = document.getElementById('theme-toggle');
const mq = window.matchMedia('(prefers-color-scheme: dark)');

function current(): 'light' | 'dark' {
  const t = root.getAttribute('data-theme');
  if (t === 'light' || t === 'dark') return t;
  return mq.matches ? 'dark' : 'light';
}

function paint() {
  if (!btn) return;
  const mode = current();
  btn.dataset.mode = mode;
  const label = mode === 'dark' ? btn.dataset.toLight : btn.dataset.toDark;
  if (label) { btn.setAttribute('aria-label', label); btn.title = label; }
}

btn?.addEventListener('click', () => {
  const next = current() === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('vp-theme', next); } catch {}
  paint();
});
mq.addEventListener?.('change', paint);
paint();
