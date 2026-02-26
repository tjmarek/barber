/* ============================================================
   THE GENTLEMEN'S QUARTERS BARBER — main.js
   ============================================================ */

(function () {
  'use strict';

  const NAV_HTML = `
  <nav id="site-nav">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo" aria-label="The Gentlemen's Quarters Home">
        <span class="nav-logo-main">The Gentlemen's Quarters</span>
        <span class="nav-logo-sub">Austin, TX &middot; By Appointment</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="testimonials.html">Reviews</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <a href="booking.html" class="nav-book">Book Now</a>
      <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
 <div class="nav-mobile" role="dialog" aria-modal="true" aria-label="Mobile navigation">
  <button class="nav-mobile-close" aria-label="Close menu">&#x2715;</button>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="gallery.html">Gallery</a>
  <a href="testimonials.html">Reviews</a>
  <a href="contact.html">Contact</a>
  <a href="booking.html" class="nav-mobile-book">Book Appointment</a>
</div>`;

  const FOOTER_HTML = `
  <footer id="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="nav-logo">
            <span class="nav-logo-main">The Gentlemen's Quarters</span>
            <span class="nav-logo-sub">Precision Barbering &middot; Austin, TX</span>
          </div>
          <p>Founded and operated by Cynthia Rivera. Classic barbering traditions, clean modern aesthetic. Appointment only.</p>
        </div>
        <div class="footer-col">
          <h5>Navigate</h5>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Cynthia</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="testimonials.html">Reviews</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Visit</h5>
          <ul>
            <li><a href="https://www.google.com/maps/search/?api=1&query=14005%20US-183%20suite%201200%2C%20Austin%2C%20TX%2078717" target="_blank" rel="noopener">14005 US-183, Suite 1200<br>Austin, TX 78717</a></li>
            <li><a href="sms:+15127719533">(512) 771-9533 &mdash; Text</a></li>
            <li><a href="booking.html">Book an Appointment</a></li>
          </ul>
          <div style="margin-top:18px;">
            <h5>Hours</h5>
            <p style="font-size:0.82rem;color:var(--white-dim);">Mon &ndash; Sat &middot; 8:00am &ndash; 8:00pm<br><em style="color:var(--silver);font-size:0.72rem;">Subject to availability</em></p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&copy; ${new Date().getFullYear()} The Gentlemen's Quarters. All rights reserved.</span>
        <span class="footer-copy">Built by TJ Marek.</span>
      </div>
    </div>
  </footer>`;

  const FLOAT_HTML = `
  <div class="float-group" id="float-group">
    <div class="float-btn-wrap" id="float-book-wrap">
      <button class="float-dismiss" aria-label="Dismiss book button" data-target="float-book-wrap">&#x2715;</button>
      <a href="booking.html" class="float-btn float-btn-book" aria-label="Book Now">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span class="float-label">Book Now</span>
      </a>
    </div>
    <div class="float-btn-wrap" id="float-review-wrap">
      <button class="float-dismiss" aria-label="Dismiss review button" data-target="float-review-wrap">&#x2715;</button>
      <a href="https://www.google.com/search?q=Gentalmens+Quarters#lrd=0xaedd5f7f1925591:0xb78d51d027d85c05,1,,,,"
         target="_blank" rel="noopener" class="float-btn float-btn-review" aria-label="Leave a Google Review">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <span class="float-label">Leave a Review</span>
      </a>
    </div>
  </div>`;

  const LIGHTBOX_HTML = `
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
    <div class="lightbox-inner">
      <button class="lightbox-close" id="lightbox-close" aria-label="Close">&#x2715;</button>
      <img class="lightbox-img" id="lightbox-img" src="" alt="Gallery image" />
    </div>
  </div>`;

  function injectComponents() {
    const navTarget = document.getElementById('nav-placeholder');
    if (navTarget) navTarget.outerHTML = NAV_HTML;
    const footerTarget = document.getElementById('footer-placeholder');
    if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;
    document.body.insertAdjacentHTML('beforeend', FLOAT_HTML);
    document.body.insertAdjacentHTML('beforeend', LIGHTBOX_HTML);
  }

  function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#site-nav .nav-links a, .nav-mobile a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  }

  function initNavScroll() {
    const nav = document.getElementById('site-nav');
    if (!nav) return;
    function update() { nav.classList.toggle('scrolled', window.scrollY > 40); }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function initMobileMenu() {
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileMenu = document.querySelector('.nav-mobile');
    if (!hamburger || !mobileMenu) return;
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
     const closeBtn = document.querySelector('.nav-mobile-close');
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
}
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  function initFloatingDismiss() {
    document.querySelectorAll('.float-dismiss').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const targetId = btn.dataset.target;
        const wrap = document.getElementById(targetId);
        if (wrap) {
          wrap.classList.add('hidden');
          sessionStorage.setItem('dismissed_' + targetId, '1');
        }
      });
    });
    ['float-book-wrap', 'float-review-wrap'].forEach(id => {
      if (sessionStorage.getItem('dismissed_' + id)) {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
      }
    });
  }

  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });
    els.forEach(el => observer.observe(el));
  }

  function initGalleryTabs() {
    const tabs = document.querySelectorAll('.gallery-tab');
    const panels = document.querySelectorAll('.gallery-panel');
    if (!tabs.length) return;
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        const target = document.getElementById(tab.dataset.panel);
        if (target) target.classList.add('active');
      });
    });
  }

  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    if (!lightbox) return;
    function open(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || 'Gallery image';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    }
    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    document.addEventListener('click', e => {
      const item = e.target.closest('.gallery-item[data-lightbox]');
      if (item) {
        const img = item.querySelector('img');
        if (img) open(img.src, img.alt);
      }
    });
  }

  /* ── REVIEW SLIDER ────────────────────────────────────── */
  function initSlider() {
    const track      = document.getElementById('sliderTrack');
    const dotsWrap   = document.getElementById('sliderDots');
    const prevBtn    = document.getElementById('sliderPrev');
    const nextBtn    = document.getElementById('sliderNext');
    if (!track) return;

    const slides = track.querySelectorAll('.slider-slide');
    let current  = 0;
    let autoplayTimer;

    function getSlidesVisible() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768)  return 2;
      return 1;
    }

    function totalSteps() {
      return Math.max(1, slides.length - getSlidesVisible() + 1);
    }

    function buildDots() {
      dotsWrap.innerHTML = '';
      const steps = totalSteps();
      for (let i = 0; i < steps; i++) {
        const dot = document.createElement('button');
        dot.className = 'slider-dot' + (i === current ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
      }
    }

    function updateDots() {
      dotsWrap.querySelectorAll('.slider-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    function goTo(index) {
      const steps = totalSteps();
      current = Math.max(0, Math.min(index, steps - 1));
      const slideWidthPct = 100 / getSlidesVisible();
      track.style.transform = `translateX(-${current * slideWidthPct}%)`;
      updateDots();
    }

    function next() { goTo(current + 1 < totalSteps() ? current + 1 : 0); }
    function prev() { goTo(current - 1 >= 0 ? current - 1 : totalSteps() - 1); }

    function startAutoplay() {
      autoplayTimer = setInterval(next, 5000);
    }
    function stopAutoplay() {
      clearInterval(autoplayTimer);
    }

    nextBtn.addEventListener('click', () => { stopAutoplay(); next(); startAutoplay(); });
    prevBtn.addEventListener('click', () => { stopAutoplay(); prev(); startAutoplay(); });

    // Touch/swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        stopAutoplay();
        diff > 0 ? next() : prev();
        startAutoplay();
      }
    }, { passive: true });

    // Recalculate on resize
    window.addEventListener('resize', () => {
      buildDots();
      goTo(0);
    });

    buildDots();
    goTo(0);
    startAutoplay();
  }

  /* ── INIT ─────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    injectComponents();
    setActiveNav();
    initNavScroll();
    initMobileMenu();
    initFloatingDismiss();
    initReveal();
    initGalleryTabs();
    initLightbox();
    initSlider();
  });

})();
