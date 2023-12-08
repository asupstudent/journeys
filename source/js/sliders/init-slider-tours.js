const sliderTours = document.querySelector('[data-swiper="tours"]');
const buttonNext = document.querySelector('[data-swiper="button-next"]');
const buttonPrev = document.querySelector('[data-swiper="button-prev"]');

const setSliderTours = () => {
  return new window.Swiper(sliderTours, {
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
    },
  });
};

const initSliderTours = () => {
  if (document.body.contains(sliderTours)) {
    setSliderTours();
  }
};

export {initSliderTours};
