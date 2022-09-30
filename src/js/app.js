const swiper = new Swiper('.swiper-support', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 15,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next-support',
    prevEl: '.swiper-button-prev-support',
  },
});

const swiper1 = new Swiper('.swiper-last', {
  loop: true,
  spaceBetween: 60,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next-last',
    prevEl: '.swiper-button-prev-last',
  },
  slidesPerView: 1.75,
  centeredSlider: true,
  centeredSlides: true,
  grabCursor: true,
});

const swiper2 = new Swiper('.swiper-deleted', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 15,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next-deleted',
    prevEl: '.swiper-button-prev-deleted',
  },
});


const slides = document.querySelectorAll('.swiper-slide')
for (slide of slides){
  slide.addEventListener('click', function (e) {
    e.target.querySelector('.iframe').src += "?autoplay=1";
  })
}
