document.addEventListener('DOMContentLoaded', function() { 
  const swiper = new Swiper('.slider-wrapper', 
    { loop: true, 
      grabCursor: true, 
      spaceBetween: 45, 
      pagination: { 
        el: '.swiper-pagination', 
        clickable: true, 
        dynamicBullets: true, }, 
      navigation: { 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', }, 
      breakpoints: 
      { 
        0: { slidesPerView: 1 }, 
        620: { slidesPerView: 2 }, 
        1024: { slidesPerView: 3 } 
      } 
    }); 
  });

  let dayBox = document.getElementById("day-box");
  let hrBox = document.getElementById("hr-box");
  let minBox = document.getElementById("min-box");
  let secBox = document.getElementById("sec-box");
  let endDate = new Date(2025,03,21,00,00);
  let endTime = endDate.getTime();
  
  function countdown{
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    
  }