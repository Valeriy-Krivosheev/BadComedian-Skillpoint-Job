const swiper = new Swiper('.swiper-support', {
  slidesPerView: 1.25,
  loop: true,
  spaceBetween: 15,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next-support',
    prevEl: '.swiper-button-prev-support',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
  768: {
    slidesPerView: 3,
  },
}
});

const swiper1 = new Swiper('.swiper-last', {
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next-last',
    prevEl: '.swiper-button-prev-last',
  },
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlider: true,
  centeredSlides: true,
  grabCursor: true,
  breakpoints: {
    480: {
      spaceBetween: 60,
      slidesPerView: 1.75,
    },
  }
});

const swiper2 = new Swiper('.swiper-deleted', {
  slidesPerView: 1.25,
  loop: true,
  spaceBetween: 15,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next-deleted',
    prevEl: '.swiper-button-prev-deleted',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  }
});

const swiper3 = new Swiper('.swiper-badtrip', {
  slidesPerView: 1.25,
  loop: true,
  spaceBetween: 22,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next-badtrip',
    prevEl: '.swiper-button-prev-badtrip',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  }
});

const slides = document.querySelectorAll('.swiper-slide')
for (slide of slides){
  slide.addEventListener('click', function (e) {
    e.target.querySelector('.iframe').src += "?autoplay=1";
  })
}
