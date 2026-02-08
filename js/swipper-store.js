var swiper = new Swiper(".myNewSwiper", {
    effect: "slide", 
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1, 
    spaceBetween: 20, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 