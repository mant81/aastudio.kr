(() => {
  const preview = document.querySelector('.image-preview');
  if (!preview || typeof preview.showModal !== 'function') return;

  const image = new Image();
  const caption = preview.querySelector('figcaption');
  let trigger;

  document.querySelectorAll('[data-screenshot]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const source = link.querySelector('img');
      trigger = link;
      image.src = link.href;
      image.alt = source.alt;
      preview.querySelector('[data-preview-original]').href = link.href;
      preview.querySelector('figure').prepend(image);
      caption.textContent = link.closest('figure').querySelector('figcaption').textContent;
      preview.showModal();
      document.body.classList.add('preview-open');
    });
  });

  preview.querySelector('[data-preview-close]').addEventListener('click', () => preview.close());
  preview.addEventListener('click', event => {
    if (event.target === preview) {
      const bounds = preview.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom) preview.close();
    }
  });
  preview.addEventListener('close', () => {
    document.body.classList.remove('preview-open');
    if (trigger) trigger.focus({ preventScroll: true });
  });
})();
