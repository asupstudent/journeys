const sliderHero = document.querySelector('[data-hero-slider="hero-slider"]');
const sliderHeroPagination = document.querySelector('[data-hero-swiper-pagination="hero-swiper-pagination"]');

const setSliderHero = () => {
  return new window.Swiper(sliderHero, {
    pagination: {
      el: sliderHeroPagination,
      clickable: true,
    },
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
  });
};

const initSliderHero = () => {
  if (document.body.contains(sliderHero)) {
    setSliderHero();
  }
};

export {initSliderHero};
