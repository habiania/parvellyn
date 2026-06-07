/* =====================
   Parvellyn - Components
   Header & Footer injection
   ===================== */

(function () {
  function getHeader(activePage) {
    return `
<header class="site-header" role="banner">
  <div class="header-inner">
    <a href="/" class="site-logo" aria-label="Parvellyn 홈으로">
      <div class="logo-mark" aria-hidden="true">🌿</div>
      <span class="logo-text">Parvel<span>lyn</span></span>
    </a>
    <nav class="main-nav" role="navigation" aria-label="메인 메뉴">
      <a href="/" ${activePage === 'home' ? 'class="active"' : ''}>홈</a>
      <a href="/blog/" ${activePage === 'blog' ? 'class="active"' : ''}>육아 정보</a>
      <a href="/tools/" ${activePage === 'tools' ? 'class="active nav-cta"' : 'class="nav-cta"'}>계산기 도구</a>
      <a href="/about/" ${activePage === 'about' ? 'class="active"' : ''}>소개</a>
      <a href="/contact/" ${activePage === 'contact' ? 'class="active"' : ''}>문의</a>
    </nav>
    <button class="nav-toggle" aria-label="메뉴 열기" aria-expanded="false" aria-controls="main-nav">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;
  }

  function getFooter() {
    return `
<footer class="site-footer" role="contentinfo">
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="/" class="site-logo" aria-label="Parvellyn 홈">
        <div class="logo-mark" aria-hidden="true">🌿</div>
        <span class="logo-text">Parvel<span style="color:var(--accent)">lyn</span></span>
      </a>
      <p>부모들이 육아 과정에서 필요한 정보를 쉽고 정확하게 확인할 수 있도록 육아 정보와 계산기 도구를 제공하는 정보 플랫폼입니다.</p>
    </div>
    <div class="footer-col">
      <h5>육아 정보</h5>
      <ul>
        <li><a href="/blog/">전체 글</a></li>
        <li><a href="/blog/#newborn">신생아 관리</a></li>
        <li><a href="/blog/#breastfeeding">수유 정보</a></li>
        <li><a href="/blog/#weaning">이유식</a></li>
        <li><a href="/blog/#sleep">수면 관리</a></li>
        <li><a href="/blog/#vaccination">예방접종</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>계산기 도구</h5>
      <ul>
        <li><a href="/tools/baby-age-calculator/">아기 개월수 계산기</a></li>
        <li><a href="/tools/due-date-calculator/">출산예정일 계산기</a></li>
        <li><a href="/tools/weaning-calculator/">이유식 시작일 계산기</a></li>
        <li><a href="/tools/feeding-calculator/">수유량 계산기</a></li>
        <li><a href="/tools/sleep-calculator/">수면시간 계산기</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>사이트 정보</h5>
      <ul>
        <li><a href="/about/">Parvellyn 소개</a></li>
        <li><a href="/contact/">문의하기</a></li>
        <li><a href="/privacy-policy/">개인정보처리방침</a></li>
        <li><a href="/terms-of-service/">이용약관</a></li>
        <li><a href="/sitemap.xml">사이트맵</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Parvellyn. All rights reserved.</p>
    <div style="display:flex;gap:16px;">
      <a href="/privacy-policy/">개인정보처리방침</a>
      <a href="/terms-of-service/">이용약관</a>
      <a href="/contact/">문의</a>
    </div>
  </div>
</footer>`;
  }

  // Expose globally
  window.ParvellynUI = { getHeader: getHeader, getFooter: getFooter };
})();
