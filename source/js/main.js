import {iosVhFix} from './utils/ios-vh-fix';
import {toggleBurgerMenu} from './burger/init-menu';
import {initSliderHero} from './sliders/init-slider-hero';
import {initSliderTours} from './sliders/init-slider-tours';
import {initSliderTraining} from './sliders/init-slider-training';
import {initSliderReviews} from './sliders/init-slider-reviews';
import {Form} from './modules/form-validate/form';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    toggleBurgerMenu();
    initSliderHero();
    initSliderTours();
    initSliderTraining();
    initSliderReviews();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
