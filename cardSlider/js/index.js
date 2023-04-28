var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop:true,
    loopFillGroupWithBlank:true,
    grabCursor: true,
    centerSlide:true,
    fade:true,
    select:false,
    // keyboard: {
    //   enabled: true,
    // },
    breakpoints: {
      0:{
        slidesPerView:1,
      },
      520: {
        slidesPerView: 2,
      },
      950:{
        slidesPerView:3
      }
    },
   

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
  });