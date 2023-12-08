import '../utils/scroll-lock';
import '../utils/focus-lock';

const toggleBurgerMenu = () => {
  const body = document.body;
  const mainNav = document.querySelector('[data-menu="main-nav"]');
  const logo = document.querySelector('[data-menu="logo"]');
  const navLists = document.querySelectorAll('[data-menu="nav-list"]');
  const phone = document.querySelector('[data-menu="phone"]');
  const buttons = document.querySelectorAll('[data-menu="burger-button"]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      mainNav.classList.toggle('nav--is-closed');
      mainNav.classList.toggle('nav--is-opened');
      logo.classList.toggle('logo--is-closed');
      logo.classList.toggle('logo--is-opened');
      phone.classList.toggle('nav__phone--is-closed');
      phone.classList.toggle('nav__phone--is-opened');
      body.classList.toggle('overlay');
      navLists.forEach((navList) => {
        const menuIsClosed = navList.classList.contains('nav__list--is-closed');
        const closedIconMenu = document.querySelector('[data-menu="is-closed"]');
        const openedIconMenu = document.querySelector('[data-menu="is-opened"]');

        if (menuIsClosed) {
          navList.classList.remove('nav__list--is-closed');
          navList.style.display = 'flex';
          closedIconMenu.style.display = 'none';
          openedIconMenu.style.display = 'block';
          window.scrollLock.disableScrolling();
          window.focusLock.lock('[data-menu="main-nav"]', false);
        } else {
          navList.classList.add('nav__list--is-closed');
          navList.style.display = 'none';
          closedIconMenu.style.display = 'block';
          openedIconMenu.style.display = 'none';
          window.scrollLock.enableScrolling();
          window.focusLock.unlock();
        }
      });
    });
  });
};

export {toggleBurgerMenu};
