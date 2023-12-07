import {iosVhFix} from './utils/ios-vh-fix';
import {toggleBurgerMenu} from './burger/init-menu';
import {initSliderHero} from './sliders/init-slider-hero';
import {Form} from './modules/form-validate/form';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    toggleBurgerMenu();
    initSliderHero();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
