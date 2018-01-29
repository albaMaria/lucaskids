$(document).ready(function() {

  /*COOKIES*/
  $('.cookie-message').cookieBar({ closeButton : '.my-close-button' });

  /*SLIDERS*/

  $('.slider-home').slick({
    autoplay: true,
    autoplaySpeed: 2200,
    dots: true,
    arrows: false,
    variableWidth: true,
  });

  $('.slider-secciones').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  });


  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    autoHeight: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  /*AOS js*/

  AOS.init();

  /* SCROLL */

  var scroll = new SmoothScroll('a[href*="#"]');


});

/*Botón elevador*/

window.onload = function() {
var elevator = new Elevator({

  element: document.querySelector('.elevator-button'),
  duration: 1000
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 250) {
    $('.elevator-button').show();
  } else {
    $('.elevator-button').hide();
  }
});

}

/* Carga de contenido de secciones en galeria.html con el menú*/
function cargaContenido(seccion) {
  switch (seccion) {
    case 'seccion-bebe':
      $('.seccion-bebe').css('display', 'block');
      $('.seccion-ninio').css('display', 'none');
      $('.seccion-ninia').css('display', 'none');
      $('.rebajas').css('display', 'none');
      break;
    case 'seccion-ninio':
      $('.seccion-bebe').css('display', 'none');
      $('.seccion-ninio').css('display', 'block');
      $('.seccion-ninia').css('display', 'none');
      $('.rebajas').css('display', 'none');
      break;
    case 'seccion-ninia':
      $('.seccion-bebe').css('display', 'none');
      $('.seccion-ninio').css('display', 'none');
      $('.seccion-ninia').css('display', 'block');
      $('.rebajas').css('display', 'none');
      break;
  }
}
