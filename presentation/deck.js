/* ═══════════════════════════════════════════════════════════════════
   Workshop deck runtime.

   Injects the shared chrome (progress rail, brand mark, prev/next,
   counter, keyboard hint) so each deck file carries only its slides,
   then wires navigation: arrows, Space, PageUp/PageDown, Home/End,
   and keys forwarded by the shell when the iframe isn't focused.

   Each deck sets <body data-brand="…"> for the corner label.
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  var slides = [].slice.call(document.querySelectorAll('[data-slide]'));
  if (!slides.length) return;

  var brandLabel = document.body.getAttribute('data-brand') || '';

  /* ── chrome ── */
  var chrome = document.createElement('div');
  chrome.innerHTML =
    '<div class="deck-progress"><i></i></div>' +
    '<div class="deck-brand">' +
      '<span class="tile" aria-hidden="true">' +
        '<svg viewBox="0 0 24 24"><path d="M15 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" stroke-linecap="round"/>' +
        '<circle cx="8.5" cy="7" r="3.5"/><path d="M18 7.5v5M15.5 10h5" stroke-linecap="round"/></svg>' +
      '</span>' +
      '<b>Telekom&nbsp;CEP</b>' + (brandLabel ? ' · ' + brandLabel : '') +
    '</div>' +
    '<nav class="deck-nav">' +
      '<button class="nav-btn" data-prev aria-label="Previous slide">' +
        '<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<span class="counter"><b data-cur>1</b> / <span data-total></span></span>' +
      '<button class="nav-btn" data-next aria-label="Next slide">' +
        '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
    '</nav>' +
    '<div class="kbdhint">Navigate <kbd>→</kbd> next · <kbd>←</kbd> prev · <kbd>Space</kbd></div>';
  while (chrome.firstChild) document.body.appendChild(chrome.firstChild);

  var bar = document.querySelector('.deck-progress > i');
  var cur = document.querySelector('[data-cur]');
  var prevBtn = document.querySelector('[data-prev]');
  var nextBtn = document.querySelector('[data-next]');
  document.querySelector('[data-total]').textContent = slides.length;

  var i = 0;

  function render() {
    slides.forEach(function (s, n) { s.classList.toggle('is-active', n === i); });
    bar.style.width = (slides.length > 1 ? (i / (slides.length - 1)) * 100 : 100) + '%';
    cur.textContent = i + 1;
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === slides.length - 1;
    if (location.hash.slice(1) !== String(i + 1)) {
      history.replaceState(null, '', '#' + (i + 1));
    }
    /* slides with internal steps listen for this to reset themselves */
    window.dispatchEvent(new CustomEvent('deckslide', { detail: { index: i } }));
  }

  function go(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    render();
  }

  /* A slide can claim the arrow keys by defining window.deckSubStep(dir):
     return true to consume the press, false to let the deck advance. */
  function subStep(dir) {
    return typeof window.deckSubStep === 'function' ? window.deckSubStep(dir) : false;
  }

  nextBtn.addEventListener('click', function () { if (!subStep(1)) go(i + 1); });
  prevBtn.addEventListener('click', function () { if (!subStep(-1)) go(i - 1); });

  function handleKey(key) {
    if (key === 'ArrowRight' || key === ' ' || key === 'PageDown') { if (!subStep(1)) go(i + 1); return true; }
    if (key === 'ArrowLeft' || key === 'PageUp') { if (!subStep(-1)) go(i - 1); return true; }
    if (key === 'Home') { go(0); return true; }
    if (key === 'End') { go(slides.length - 1); return true; }
    return false;
  }

  document.addEventListener('keydown', function (e) {
    if (handleKey(e.key)) e.preventDefault();
  });

  /* the shell forwards keys when focus is still on the outer page */
  window.addEventListener('message', function (e) {
    if (e.data && e.data.deck === 'key') handleKey(e.data.key);
  });

  /* deep link: #3 opens slide 3, on load and on any later hash change */
  function fromHash() {
    var n = parseInt(location.hash.slice(1), 10);
    return (n >= 1 && n <= slides.length) ? n - 1 : null;
  }

  var start = fromHash();
  if (start !== null) i = start;

  window.addEventListener('hashchange', function () {
    var n = fromHash();
    if (n !== null && n !== i) go(n);
  });

  render();
})();
