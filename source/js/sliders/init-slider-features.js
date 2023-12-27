import Swiper from '../../js/vendor/swiper';
const sliderFeatures = document.querySelector('[data-swiper="features"]');
const buttonNext = document.querySelector('[data-swiper-features="button-next"]');
const buttonPrev = document.querySelector('[data-swiper-features="button-prev"]');

let featuresSwiper;

const initSliderFeatures = () => {
  if (sliderFeatures && window.innerWidth > 1200) {
    featuresSwiper = new Swiper(sliderFeatures, {
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      centeredSlides: true,
      breakpoints: {
        1200: {
          initialSlide: 2,
          spaceBetween: 30,
          slidesPerView: 3.585,
        },
      },
    });
  }
};

const convertSwiper = () => {
  if (window.innerWidth <= 1200 && featuresSwiper) {
    featuresSwiper.destroy();
    document.querySelector('.features__swiper').style.display = 'block';
  } else if (featuresSwiper && !featuresSwiper.initialized) {
    initSliderFeatures();
  }
};

const handleResize = () => {
  convertSwiper();
};

window.addEventListener('resize', handleResize);

export {initSliderFeatures, handleResize};
