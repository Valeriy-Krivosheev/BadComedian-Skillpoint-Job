const swiper = new Swiper('.swiper-support', {
  slidesPerView: 1.25,
  loop: true,
  spaceBetween: 15,
  speed: 500,
  slideToClickedSlide: true,

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

for (let box of selected) {
  box.addEventListener('click', function () {
    if (this.classList.contains('selected')) {
      this.classList.remove('selected');
    }
    else {
      for (let slide of selected) {
        slide.classList.remove('selected');
        this.classList.add('selected');
      }
    }
    let currentSlide = slider.querySelector('.selected')
    let text = currentSlide.querySelector('.support__name').innerHTML.trim()
    for (let option of select.options) {
      option.removeAttribute("selected")
    }
    select.options[currentSlide.id].selected = 'selected'
    let newText = select.options[currentSlide.id].textContent
    newText = text
  })
}


select.addEventListener("change", function () {
  let selectVal = this.value;
  swiper.slideToLoop(selectVal, 500, true)
  for (item of selected) {
    item.classList.remove('selected');
    if (item.classList.contains('swiper-slide-active')) {
      item.classList.add('selected')
    }
  }
});







