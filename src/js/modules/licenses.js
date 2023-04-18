import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function licenses() {
  if(document.querySelector('.licenses__slider')) {
    const swiper = new Swiper('.licenses__slider', {
      spaceBetween: 20,
      loopedSlides: 1,
      slidesPerView: 4,
      autoHeight: true,
      navigation: {
        nextEl: '.swiper-button-next-licenses',
        prevEl: '.swiper-button-prev-licenses',
      },
      breakpoints: {
        // 320: {
        //   spaceBetween: 0,
        //   loopedSlides: 1,
        //   slidesPerView: 1,
        //   autoHeight: true
        // },
        // 700: {
        //   spaceBetween: 20,
        //   loopedSlides: 1,
        //   slidesPerView: 2
        // },
        // 1024: {
        //   spaceBetween: 30,
        //   loopedSlides: 1,
        //   slidesPerView: 3
        // },
        1440: {
          spaceBetween: 20,
          loopedSlides: 1,
          slidesPerView: 4
        },
      }
    });
  }
}