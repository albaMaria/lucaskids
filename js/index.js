$(document).ready(function() {
  $('.slider-home').slick({
    autoplay: true,
    autoplaySpeed: 2200,
    dots: true,
    arrows: false,
  });
  AOS.init();

  var scroll = new SmoothScroll('a[href*="#"]');
})
