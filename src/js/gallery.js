import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Mousewheel, Keyboard],
  updateOnWindowResize: true,
  spaceBetween: 20,
  mousewheel: {
    invert: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
    preventClicks: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    if (event.shiftKey) {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  }
});

