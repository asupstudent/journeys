const sliderGallery = document.querySelector('[data-swiper="gallery"]');
const buttonNext = document.querySelector('[data-swiper-gallery="button-next"]');
const buttonPrev = document.querySelector('[data-swiper-gallery="button-prev"]');

const setSliderGallery = () => new window.Swiper(sliderGallery, {
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
  slidesPerView: 'auto',
  slidesPerGroup: 2,
  loopAddBlankSlides: true,
  loop: true,
});

const initSliderGallery = () => {
  if (document.body.contains(sliderGallery)) {
    setSliderGallery();
  }
};

export {initSliderGallery};
