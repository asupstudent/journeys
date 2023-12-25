import '../utils/scroll-lock';
import '../utils/focus-lock';

const button = document.querySelector('[data-menu="burger-button"]');
const mainNav = document.querySelector('[data-menu="main-nav"]');
const logo = document.querySelector('[data-menu="logo"]');
const navList = document.querySelector('[data-menu="nav-list"]');
const navLink = document.querySelectorAll('[data-burger="nav-link"]');
const phone = document.querySelector('[data-menu="phone"]');
const closedIconMenu = document.querySelector('[data-menu="is-closed"]');
const openedIconMenu = document.querySelector('[data-menu="is-opened"]');
const overlay = document.querySelector('[data-burger="overlay"]');

const openBurgerMenu = () => {
  mainNav.classList.remove('nav--is-closed');
  mainNav.classList.add('nav--is-opened');
  navList.style.display = 'flex';
  closedIconMenu.style.display = 'none';
  openedIconMenu.style.display = 'block';
  logo.classList.remove('logo--is-closed');
  logo.classList.add('logo--is-opened');
  phone.classList.remove('nav__phone--is-closed');
  phone.classList.add('nav__phone--is-opened');
  closeBurgerLinksClickAdd();
  overlay.classList.add('is-active');
  window.scrollLock.disableScrolling();
  window.focusLock.lock('[data-menu="main-nav"]', false);
};

const closeBurgerMenu = () => {
  mainNav.classList.remove('nav--is-opened');
  mainNav.classList.add('nav--is-closed');
  navList.style.display = 'none';
  closedIconMenu.style.display = 'block';
  openedIconMenu.style.display = 'none';
  logo.classList.remove('logo--is-opened');
  logo.classList.add('logo--is-closed');
  phone.classList.remove('nav__phone--is-opened');
  phone.classList.add('nav__phone--is-closed');
  closeBurgerLinksClickRemove();
  overlay.classList.remove('is-active');
  document.removeEventListener('click', documentClickHandler);
  window.scrollLock.enableScrolling();
  window.focusLock.unlock();
};

function closeBurgerLinksClickAdd() {
  navLink.forEach((link) => {
    link.addEventListener('click', closeBurgerMenu);
  });
}

function closeBurgerLinksClickRemove() {
  navLink.forEach((link) => {
    link.removeEventListener('click', openBurgerMenu);
  });
}

function documentClickHandler(event) {
  if (!event.target.closest('.nav--is-opened')) {
    closeBurgerMenu();
  }
}

const buttonClick = () => {
  if (mainNav.classList.contains('nav--is-opened')) {
    closeBurgerMenu();
  } else {
    openBurgerMenu();
  }
  document.addEventListener('click', documentClickHandler);
};

const showMenuToResize = () => {
  const width = document.body.clientWidth;

  if (width > 1199) {
    if (mainNav.classList.contains('nav--is-opened')) {
      closeBurgerMenu();
      navList.style.removeProperty('display');
    } else {
      navList.style.removeProperty('display');
    }
  }
};

const initBurgerMenu = () => {
  button.addEventListener('click', buttonClick);
  window.addEventListener('resize', showMenuToResize);
};

export {initBurgerMenu};
