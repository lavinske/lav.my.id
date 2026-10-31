// Reading Progress Bar (for articles)
const progressBar = document.getElementById('reading-progress-bar');
if (progressBar) {
  let ticking = false;
  const updateProgress = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total > 0) {
      const p = (window.scrollY / total) * 100;
      progressBar.style.width = Math.min(100, Math.max(0, p)) + '%';
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
  updateProgress();
}

// Interactive Code Block Header with Language Tag & Floating Copy Button (Astro Docs style)
document.querySelectorAll('pre').forEach((pre) => {
  if (pre.parentNode.classList.contains('code-block-wrapper')) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'code-block-wrapper';
  pre.parentNode.insertBefore(wrapper, pre);

  // Detect language from data-language, code class, or default
  let lang = pre.getAttribute('data-language') || '';
  if (!lang) {
    const code = pre.querySelector('code');
    if (code && code.className) {
      const match = code.className.match(/language-(\w+)/);
      if (match) lang = match[1];
    }
  }
  if (!lang) lang = 'code';

  const header = document.createElement('div');
  header.className = 'code-block-header';

  const langSpan = document.createElement('span');
  langSpan.className = 'code-block-lang';
  langSpan.textContent = lang.toUpperCase();
  header.appendChild(langSpan);

  const btn = document.createElement('button');
  btn.className = 'copy-code-btn';
  btn.setAttribute('type', 'button');
  btn.setAttribute('aria-label', 'Salin kode ke clipboard');
  btn.setAttribute('title', 'Salin kode');
  btn.innerHTML = `<svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span class="copy-tooltip">Disalin!</span>`;

  btn.addEventListener('click', async () => {
    const codeEl = pre.querySelector('code');
    const codeText = codeEl ? codeEl.innerText : pre.innerText;
    try {
      await navigator.clipboard.writeText(codeText);
      btn.classList.add('copied');
      const icon = btn.querySelector('.copy-icon');
      if (icon) {
        icon.innerHTML = `<polyline points="20 6 9 17 4 12"></polyline>`;
      }
      setTimeout(() => {
        btn.classList.remove('copied');
        if (icon) {
          icon.innerHTML = `<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>`;
        }
      }, 2000);
    } catch (e) {
      // Silently fail if clipboard API unavailable
    }
  });

  header.appendChild(btn);
  wrapper.appendChild(header);
  wrapper.appendChild(pre);
});
