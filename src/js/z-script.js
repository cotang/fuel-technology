jQuery(document).ready(function($){


  function initSlider() {
    // галерея "отзывы"
    $('.gallery__list').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  }


  /* 404 - sticky footer */
  // var footerHeight = $('.footer').outerHeight();
  if ($(window).height() >= $('body').height()){
    $('.page').addClass('page--fixed');
    $('.footer').addClass('footer--fixed');
  }


  /* Gallery in modal window */
  $('.about-gallery__link').click( function(e){
    e.preventDefault();
    $('body').css({'overflow':'hidden'});
    $('.overlay').show();
    initSlider();
  });
  /* Close modal window */
  $('.overlay__bg, .overlay__close').click( function(e){
    e.preventDefault();
    $('body').css({'overflow':'auto'});
    $(this).closest('.overlay').fadeOut(400);
  });





});

