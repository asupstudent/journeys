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
        slidesPerView: 5,
        spaceBetween: 5,
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 5,
      },

      768: {
        slidesPerView: 4,
        spaceBetween: 5,
      },

      350: {
        slidesPerView: 2,
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
