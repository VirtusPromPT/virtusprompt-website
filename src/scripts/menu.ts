// Mobile menu (a <details> element): close it after following a link, on Escape, or on a click outside.
const menu = document.querySelector<HTMLDetailsElement>('.mnav');

if (menu) {
  const close = () => { menu.open = false; };
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.open) { close(); menu.querySelector('summary')?.focus(); }
  });
  document.addEventListener('click', (e) => {
    if (menu.open && !menu.contains(e.target as Node)) close();
  });
}
