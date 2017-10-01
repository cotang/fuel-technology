jQuery(document).ready(function($){

  /* галерея "примеры" */
  $('.examples__gallery').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* галерея "отзыы" */
  $('.reviews__gallery').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  });



  /* 404 - sticky footer */
  // var footerHeight = $('.footer').outerHeight();
  if ($(window).height() >= $('body').height()){
    $('.page').addClass('page--fixed');
    // $('body').css('padding-bottom', footerHeight+'px');
    $('.footer').addClass('footer--fixed');
  }






});

