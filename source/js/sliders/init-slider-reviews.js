const sliderReviews = document.querySelector('[data-swiper="reviews"]');
const buttonNext = document.querySelector('[data-swiper-reviews="button-next"]');
const buttonPrev = document.querySelector('[data-swiper-reviews="button-prev"]');

const setSliderReviews = () => new window.Swiper(sliderReviews, {
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
  loop: true,

  breakpoints: {
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 120,
    },

    1024: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },

    350: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

const initSliderReviews = () => {
  if (document.body.contains(sliderReviews)) {
    setSliderReviews();
  }
};

export {initSliderReviews};
