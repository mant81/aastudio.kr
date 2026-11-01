(() => {
  const key = 'aastudio-font';
  const normalize = value => value === 'original' ? 'original' : 'minbo';
  let current = 'minbo';
  try { current = normalize(localStorage.getItem(key)); } catch (_) {}
  const apply = value => {
    current = normalize(value);
    document.documentElement.dataset.font = current;
    const select = document.getElementById('font-choice');
    if (select) select.value = current;
  };
  apply(current);
  document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('font-choice');
    if (!select) return;
    select.value = current;
    select.addEventListener('change', () => {
      apply(select.value);
      try { localStorage.setItem(key, current); } catch (_) {}
    });
  });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) apply(event.newValue);
  });
})();
