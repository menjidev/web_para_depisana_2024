document.addEventListener("DOMContentLoaded", function () {
    new Swiper("#swiper-testimonios", {
        slidesPerView: 1, // Muestra un grupo de testimonios por slide
        spaceBetween: 20, // Espacio entre slides
      
        pagination: {
            el: ".swiper-pagination", // Contenedor de los puntos
            clickable: true, // Permite que los puntos sean clicables
        }
    });
});