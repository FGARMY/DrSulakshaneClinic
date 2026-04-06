/* ========================================
   DR. WEB — Interactive Scripts
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // ——————————————————
  // 1. NAVBAR — Scroll & Glassmorphism
  // ——————————————————
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  function handleNavScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Active link highlighting based on scroll position
  function highlightActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', () => {
    handleNavScroll();
    highlightActiveLink();
  }, { passive: true });

  handleNavScroll();

  // ——————————————————
  // 2. MOBILE MENU
  // ——————————————————
  const navToggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');
  const navCtaEl = document.getElementById('navCta');
  const mobileOverlay = document.getElementById('mobileOverlay');

  function openMobileMenu() {
    navToggle.classList.add('active');
    navLinksEl.classList.add('open');
    navCtaEl.classList.add('open');
    mobileOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    navToggle.classList.remove('active');
    navLinksEl.classList.remove('open');
    navCtaEl.classList.remove('open');
    mobileOverlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', () => {
    if (navLinksEl.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileOverlay.addEventListener('click', closeMobileMenu);

  // Close mobile menu on nav link click
  navLinksEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ——————————————————
  // 3. SCROLL REVEAL ANIMATIONS
  // ——————————————————
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Don't unobserve — keep it simple
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ——————————————————
  // 4. COUNTER ANIMATION
  // ——————————————————
  const counters = document.querySelectorAll('[data-count]');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);

        if (target >= 1000) {
          counter.textContent = current.toLocaleString() + '+';
        } else if (target === 24) {
          counter.textContent = current + '/7';
        } else {
          counter.textContent = current + '+';
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }

      requestAnimationFrame(updateCounter);
    });

    countersAnimated = true;
  }

  // Trigger counters when hero stats are visible
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterObserver.observe(heroStats);
  }

  // ——————————————————
  // 5. FAQ ACCORDION
  // ——————————————————
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked (if it wasn't already open)
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ——————————————————
  // 6. SMOOTH SCROLL for anchor links
  // ——————————————————
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetEl.offsetTop - navHeight - 10;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ——————————————————
  // 7. PARALLAX subtle float for hero decorations
  // ——————————————————
  const heroFloats = document.querySelectorAll('.hero-float');

  window.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    heroFloats.forEach((float, i) => {
      const factor = (i + 1) * 6;
      float.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
  });
});
