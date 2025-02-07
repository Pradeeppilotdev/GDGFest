document.addEventListener('DOMContentLoaded', function() { 
  const swiper = new Swiper('.slider-wrapper', {
    mousewheel: {
      forceToAxis: true,
      invert: false,
      sensitivity: 1, // Adjust sensitivity to better control scrolling
    },
    cssMode: false, // Disable cssMode for now
    loop: false, 
    grabCursor: true, 
    spaceBetween: 45, 
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true, 
      dynamicBullets: true, 
    }, 
    navigation: { 
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev', 
    }, 
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: { 
      0: { slidesPerView: 1 }, 
      620: { slidesPerView: 2 }, 
      1024: { slidesPerView: 3 },
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

