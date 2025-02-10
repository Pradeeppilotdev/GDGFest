document.addEventListener('DOMContentLoaded', function() { 
  const swiper = new Swiper('.slider-wrapper', {
    mousewheel: false,
    cssMode: false,
    loop: false, 
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: false,
    watchOverflow: true,
    navigation: { 
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    grid: {
      rows: 1,
    },
    breakpoints: { 
      0: { 
        slidesPerView: 1,
        spaceBetween: 20,
        width: null
      }, 
      768: { 
        slidesPerView: 2,
        spaceBetween: 25,
        width: null
      }, 
      1024: { 
        slidesPerView: "auto",
        spaceBetween: 30,
        slidesPerGroup: 1
      }
    }
  });

  const swiperContainer = document.querySelector('.swiper-container');
  
  swiperContainer.addEventListener('mousedown', function() {
    swiperContainer.classList.add('grabbing');
  });
  
  document.addEventListener('mouseup', function() {
    swiperContainer.classList.remove('grabbing');
  });

  swiperContainer.addEventListener('mouseleave', function() {
    swiperContainer.classList.remove('grabbing');
  });
  
  swiperContainer.addEventListener('touchstart', function() {
    swiperContainer.classList.add('grabbing');
  });
  
  document.addEventListener('touchend', function() {
    swiperContainer.classList.remove('grabbing');
  });
});

