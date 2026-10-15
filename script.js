(() => {
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
