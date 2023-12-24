import {iosVhFix} from './utils/ios-vh-fix';
import {initBurgerMenu} from './burger/init-menu';
import {initSliderHero} from './sliders/init-slider-hero';
import {findVideos} from './video/init-video';
import {initSliderTours} from './sliders/init-slider-tours';
import {initSliderTraining} from './sliders/init-slider-training';
import {initSliderReviews} from './sliders/init-slider-reviews';
import {initSliderFeatures, handleResize} from './sliders/init-slider-features';
import {initSliderGallery} from './sliders/init-slider-gallery';
import {Form} from './modules/form-validate/form';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initBurgerMenu();
    initSliderHero();
    findVideos();
    initSliderTours();
    initSliderTraining();
    initSliderReviews();
    initSliderFeatures();
    handleResize();
    initSliderGallery();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
