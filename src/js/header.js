const body = document.body;
const openBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const mobMenu = document.querySelector('.mobile-menu');
const anchorLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header');

openBtn.addEventListener('click', () => {
  mobMenu.classList.add('is-open');
  body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', closeMobileMenu);

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
  mobMenu.classList.remove('is-open');
  body.classList.remove('no-scroll');
}
