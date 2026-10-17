(() => {
  const hero = document.querySelector('.hero');
  const studioVisuals = Array.from(document.querySelectorAll('.blueprint, .intelligence-art, .factory-art'));
  const motionScenes = [hero, ...studioVisuals].filter(Boolean);
  const heroWord = document.querySelector('.hero-word');
  if (heroWord) {
    const letters = Array.from(heroWord.textContent, (letter, index) => {
      const character = document.createElement('span');
      character.className = 'hero-char';
      character.style.setProperty('--char-index', index);
      const glyph = document.createElement('span');
      glyph.className = 'hero-glyph';
      glyph.textContent = letter;
      character.append(glyph);
      return character;
    });
    heroWord.replaceChildren(...letters);
  }
  const motionButton = document.querySelector('.motion-toggle');
  if (motionButton && hero) {
    motionButton.addEventListener('click', () => {
      const paused = !hero.classList.contains('motion-paused');
      motionScenes.forEach(scene => scene.classList.toggle('motion-paused', paused));
      motionButton.setAttribute('aria-pressed', String(paused));
      motionButton.setAttribute('aria-label', paused ? '모션 재생' : '모션 일시정지');
      motionButton.querySelector('span').textContent = paused ? 'OFF' : 'ON';
      motionButton.querySelector('i').textContent = paused ? '▷' : 'Ⅱ';
    });
  }
  if (motionScenes.length) {
    const visibleScenes = new Set(motionScenes);
    const syncMotion = () => motionScenes.forEach(scene => {
      scene.classList.toggle('motion-idle', document.hidden || !visibleScenes.has(scene));
    });
    document.addEventListener('visibilitychange', syncMotion);
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) visibleScenes.add(entry.target);
          else visibleScenes.delete(entry.target);
        });
        syncMotion();
      });
      motionScenes.forEach(scene => observer.observe(scene));
    }
    studioVisuals.forEach(scene => scene.classList.add('is-animated'));
    syncMotion();
  }
  const config = window.AASTUDIO_CONFIG || {};
  const safeUrl = value => {
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; }
    catch { return null; }
  };
  function activate(element, value, label) {
    const url = safeUrl(value);
    if (!url) return false;
    element.href = url;
    element.classList.remove('unavailable');
    element.removeAttribute('aria-disabled');
    element.replaceChildren(document.createTextNode(label + ' '));
    const arrow = document.createElement('span');
    arrow.textContent = '↗';
    element.append(arrow);
    return true;
  }
  activate(document.querySelector('[data-tool="diagram"]'), config.diagramUrl, '도구 열기');
  activate(document.querySelector('[data-tool="database"]'), config.databaseUrl, '도구 열기');
  if (activate(document.getElementById('release-link'), config.releasesUrl, 'AA Studio Free 다운로드')) {
    document.getElementById('release-note').textContent = 'GitHub Releases에서 최신 버전과 설치 파일을 확인하세요.';
    document.querySelector('.download-copy p').innerHTML = '생각을 정리하고, 구조를 설계하는 공간.<br>AA Studio Free와 함께 시작하세요.';
  }
  document.getElementById('year').textContent = new Date().getFullYear();
})();
