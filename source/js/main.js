import {iosVhFix} from './utils/ios-vh-fix';
import {initSliderHero} from './sliders/init-slider-hero';
import {Form} from './modules/form-validate/form';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initSliderHero();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
