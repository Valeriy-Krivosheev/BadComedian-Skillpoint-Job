const swiper = new Swiper('.swiper-support', {
  slidesPerView: 1.25,
  loop: true,
  spaceBetween: 15,
  speed: 500,
  slideToClickedSlide: false,


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


const select = document.getElementById("select")
const slider = document.getElementById('slider')
const selected = slider.querySelectorAll('.swiper-slide')

const selectHandler = function (e) {
  const currentSlide = e.target.closest('.swiper-slide')
  if (currentSlide.classList.contains('selected')) {
    currentSlide.classList.remove('selected');
  }
  else {
    for (let slide of selected) {
      slide.classList.remove('selected');
      currentSlide.classList.add('selected');
    }
  }
  let text = currentSlide.querySelector('.support__name').textContent.trim();
  for (let option of select.options) {
    option.removeAttribute("selected")
  }
  select.options[currentSlide.id].selected = 'selected'
  let newText = select.options[currentSlide.id].textContent
  newText = text
}
const chooseSlide = function () {
  let selectVal = this.value;
  swiper.slideToLoop(selectVal, 500, true)
  for (item of selected) {
    item.classList.remove('selected');
    if (item.classList.contains('swiper-slide-active')) {
      item.classList.add('selected')
    }
  }
}

select.addEventListener("change", chooseSlide);
slider.addEventListener('click', selectHandler);


const popupBg = document.querySelector('.popup__bg'); 
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.open-popup'); 

openPopupButton.addEventListener('click', (e)=>{
  e.preventDefault();
  popupBg.classList.add('active'); 
  popup.classList.add('active'); 
})
document.addEventListener('click', (e) => { 
  if (e.target === popupBg) { 
    popupBg.classList.remove('active'); 
    popup.classList.remove('active');
  }
});

// Выравнивание стрелок слайдера "Последние выпуски"

const last = document.getElementById('last')
let lastSlideWidth = last.querySelector('.swiper-slide').offsetWidth / 3.3
let margin = (Math.round(lastSlideWidth) + 'px')
const arrowNext = document.querySelector('.swiper-button-next-last')
const arrowPrev = document.querySelector('.swiper-button-prev-last')
arrowNext.style.right = margin
arrowPrev.style.left = margin