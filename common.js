/* ============================================================
   田村工業 共通スクリプト
   common.js
   ============================================================ */

/* SPハンバーガーメニュー */
function toggleMenu(forceClose) {
  const overlay = document.getElementById('navMenuOverlay');
  const hamburger = document.getElementById('navHamburger');
  if (!overlay || !hamburger) return;

  if (forceClose === false || (forceClose === undefined && overlay.classList.contains('open'))) {
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  } else if (forceClose === undefined) {
    overlay.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
