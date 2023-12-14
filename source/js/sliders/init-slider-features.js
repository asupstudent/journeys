const sliderFeatures = document.querySelector('[data-swiper="features"]');
const buttonNext = document.querySelector('[data-swiper-features="button-next"]');
const buttonPrev = document.querySelector('[data-swiper-features="button-prev"]');

let featuresSwiper;

const initSliderFeatures = () => {
  if (sliderFeatures && window.innerWidth > 1200) {
    return new window.Swiper(sliderFeatures, {
      loop: true,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      centeredSlides: true,
      breakpoints: {
        1200: {
          spaceBetween: 30,
        },
      },
    });
  }
  return null;
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
