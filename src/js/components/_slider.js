import Swiper, { Navigation, Pagination } from 'swiper';

const swiperHero = new Swiper('.hero-slider', {
  spaceBetween: 20,
  slidesPerView: 2.35,
  autoHeight: true,
  draggable: true,
  grabCursor: true,
  breakpoints: {
    320: {},
    768: {},
    991: {},
  },
});
