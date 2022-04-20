var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// Start JS For card-content

let card = document.querySelector('.p');

window.onscroll = function (){
  let Y = window.scrollY;

  card .getElementsByClassName.transform = 'translateY(' + Y / 3 + 'px)'
}