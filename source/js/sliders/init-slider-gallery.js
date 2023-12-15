const sliderGallery = document.querySelector('[data-swiper="gallery"]');
const buttonNext = document.querySelector('[data-swiper-gallery="button-next"]');
const buttonPrev = document.querySelector('[data-swiper-gallery="button-prev"]');

const setSliderGallery = () => {
  return new window.Swiper(sliderGallery, {
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 5,
      },

      1024: {
        slidesPerView: 'auto',
        spaceBetween: 5,
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 5,
      },

      350: {
        slidesPerView: 'auto',
        spaceBetween: 3,
      },
    },
  });
};

const initSliderGallery = () => {
  if (document.body.contains(sliderGallery)) {
    setSliderGallery();
  }
};

export {initSliderGallery};
