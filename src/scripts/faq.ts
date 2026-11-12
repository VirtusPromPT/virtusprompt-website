// Smooth open/close for the FAQ accordions (plain open/close when the visitor prefers reduced motion).
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll<HTMLDetailsElement>('.faq details').forEach((d) => {
  const summary = d.querySelector('summary');
  const ans = d.querySelector<HTMLElement>('.ans');
  if (!summary || !ans) return;
  let anim: Animation | null = null;

  summary.addEventListener('click', (e) => {
    if (reduce || !ans.animate) return;
    e.preventDefault();
    anim?.cancel();
    const opening = !d.open;
    if (opening) d.open = true;
    const h = ans.scrollHeight;
    anim = ans.animate(
      opening
        ? [{ height: '0px', opacity: 0, transform: 'translateY(-6px)' }, { height: `${h}px`, opacity: 1, transform: 'none' }]
        : [{ height: `${h}px`, opacity: 1, transform: 'none' }, { height: '0px', opacity: 0, transform: 'translateY(-6px)' }],
      { duration: 320, easing: 'cubic-bezier(.2,.7,.2,1)' },
    );
    if (!opening) d.classList.add('closing');
    anim.onfinish = () => {
      if (!opening) { d.open = false; d.classList.remove('closing'); }
      anim = null;
    };
  });
});
