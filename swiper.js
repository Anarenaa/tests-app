const swiper = new Swiper('.swiper', {
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: 1,
  
    pagination: {
      clickable: false,
      el: '.swiper-pagination',
      type: 'fraction'
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    effect: 'cards',
  });