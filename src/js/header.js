const body = document.body;
const headerOpenBtn = document.querySelector('.header-open-btn');
const headerMobMenu = document.querySelector('.header-mob-menu');
const headerCloseBtn = document.querySelector('.header-close-btn');
const backdrop = document.querySelector('.header-backdrop');
const anchorLinks = document.querySelectorAll('.header-link');
const header = document.querySelector('.header');

headerOpenBtn.addEventListener('click', () => {
  headerMobMenu.classList.add('is-open');
  backdrop.classList.add('is-visible');
  body.classList.add('no-scroll');
});

headerCloseBtn.addEventListener('click', closeMobileMenu);
backdrop.addEventListener('click', closeMobileMenu);

anchorLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const id = link.getAttribute('href').substring(1);
    const target = document.getElementById(id);

    if (target) {
      const isMobile = window.innerWidth <= 1199;
      const headerHeight = isMobile ? header.offsetHeight : 0;

      const topPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }

    closeMobileMenu();
  });
});

function closeMobileMenu() {
  headerMobMenu.classList.remove('is-open');
  backdrop.classList.remove('is-visible');
  body.classList.remove('no-scroll');
}
