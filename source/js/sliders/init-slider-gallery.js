const sliderGallery = document.querySelector('[data-swiper="gallery"]');
const buttonNext = document.querySelector('[data-swiper-gallery="button-next"]');
const buttonPrev = document.querySelector('[data-swiper-gallery="button-prev"]');

const setSliderGallery = () => {
  return new window.Swiper(sliderGallery, {
    slidesPerView: 'auto',
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    loop: true,
    // slidesPerGroup: 2,
    // loopAddBlankSlides: true,
  });
};

const initSliderGallery = () => {
  if (document.body.contains(sliderGallery)) {
    setSliderGallery();
  }
};

export {initSliderGallery};
