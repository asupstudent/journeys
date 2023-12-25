const sliderTraining = document.querySelector('[data-swiper="training"]');
const buttonNext = document.querySelector('[data-swiper-training="button-next"]');
const buttonPrev = document.querySelector('[data-swiper-training="button-prev"]');

const setSliderTraining = () => new window.Swiper(sliderTraining, {
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },

  breakpoints: {
    1200: {
      initialSlide: 4,
      slidesPerView: 4,
      spaceBetween: 20,
    },

    768: {
      initialSlide: 4,
      slidesPerView: 3,
      spaceBetween: 20,
    },

    350: {
      initialSlide: 2,
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

const initSliderTraining = () => {
  if (document.body.contains(sliderTraining)) {
    setSliderTraining();
  }
};

export {initSliderTraining};
