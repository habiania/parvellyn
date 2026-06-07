/* =====================
   Parvellyn - Main JS
   ===================== */

'use strict';

// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Close on resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      nav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();

// FAQ Accordion
(function () {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(function (q) {
    q.addEventListener('click', function () {
      const answer = q.nextElementSibling;
      const isActive = q.classList.contains('active');

      // Close all
      questions.forEach(function (other) {
        other.classList.remove('active');
        const otherAnswer = other.nextElementSibling;
        if (otherAnswer) otherAnswer.classList.remove('open');
      });

      // Open clicked if was closed
      if (!isActive) {
        q.classList.add('active');
        if (answer) answer.classList.add('open');
      }
    });
  });
})();

// Smooth scroll for anchor links
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

// Active nav link
(function () {
  const path = window.location.pathname;
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    if (a.getAttribute('href') === path || (path.startsWith(a.getAttribute('href')) && a.getAttribute('href') !== '/')) {
      a.classList.add('active');
    }
  });
})();

// Blog category filter
(function () {
  const catBtns = document.querySelectorAll('.cat-btn');
  const articles = document.querySelectorAll('.article-card[data-cat]');

  catBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const cat = this.dataset.cat;
      catBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      articles.forEach(function (a) {
        if (cat === 'all' || a.dataset.cat === cat) {
          a.style.display = 'block';
        } else {
          a.style.display = 'none';
        }
      });
    });
  });
})();

// Intersection observer for animations
(function () {
  if (!('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll('.article-card, .tool-card, .calc-box');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  targets.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    observer.observe(el);
  });
})();
