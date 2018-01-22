$(document).ready(function() {

  $('.cookie-message').cookieBar({ closeButton : '.my-close-button' });

  $('.slider-home').slick({
    autoplay: true,
    autoplaySpeed: 2200,
    dots: true,
    arrows: false,
    variableWidth: true,
  });
  AOS.init();

  var scroll = new SmoothScroll('a[href*="#"]');

})

function cargaContenido(seccion) {
  switch (seccion) {
    case 'seccion-bebe':
      $('.seccion-bebe').css('display', 'block');
      $('.seccion-ninio').css('display', 'none');
      $('.seccion-ninia').css('display', 'none');
      break;
    case 'seccion-ninio':
      $('.seccion-bebe').css('display', 'none');
      $('.seccion-ninio').css('display', 'block');
      $('.seccion-ninia').css('display', 'none');
      break;
    case 'seccion-ninia':
      $('.seccion-bebe').css('display', 'none');
      $('.seccion-ninio').css('display', 'none');
      $('.seccion-ninia').css('display', 'block');
      break;
  }
}
