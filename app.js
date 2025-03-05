document.addEventListener('DOMContentLoaded', () => {
  initIntersectionObserver();
  initBackToTop();
  initAccordion();
  initMobileMenu();
});

// Intersection Observer
const initIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll('.animate-on-scroll')
    .forEach(observer.observe.bind(observer));
};

// (Back to Top)
const initBackToTop = () => {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const toggleVisibility = () => {
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  };

  window.addEventListener('scroll', toggleVisibility);
  btn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' }),
  );
};

// ✅ (Accordion) event delegation
const initAccordion = () => {
  document.querySelector('.faq-list')?.addEventListener('click', (event) => {
    const button = event.target.closest('.accordion');
    if (!button) return;

    const panel = button.nextElementSibling;
    const isOpen = panel.classList.contains('open');

    document.querySelectorAll('.panel').forEach((p) => {
      p.style.maxHeight = null;
      p.classList.remove('open');
      p.previousElementSibling.classList.remove('active');
    });

    if (!isOpen) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.classList.add('open');
      button.classList.add('active');
    }
  });
};

// ✅ (Mobile Menu)
const initMobileMenu = () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  menuToggle?.addEventListener('click', () =>
    mainNav.classList.toggle('active'),
  );
};
