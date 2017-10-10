jQuery(document).ready(function($){

  /* Sticky footer */
  if ($(window).height() >= $('body').height() ){
    // $('.page').addClass('fixed');
    $('.page > *').addClass('fixed');
    $('.footer').addClass('footer--fixed');
  }


  function initSlider() {
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

  /* Gallery in modal window */
  $('.about-gallery__img-popup, .certificate__title a, .certificate__img, .certificate__link').click( function(e){
    e.preventDefault();
    $('body').css({'overflow':'hidden'});
    // $('.overlay').show(function(){
    //   initSlider();
    // });
    $('.overlay').show();
    initSlider();
  });
  /* Close modal window */
  $('.overlay__bg, .overlay__close').click( function(e){
    e.preventDefault();
    $('body').css({'overflow':'auto'});
    $(this).closest('.overlay').fadeOut(400);
  });


  if ( $(window).width() < 980 ){
    $('.models__title').click(function(e){
      e.preventDefault();
      $(this).closest('.models').find('.models__list').slideToggle();
    });
  }

  if ( $(window).width() < 768 ){
    $('.hamburger').click(function(e){
      e.preventDefault();
      $(this).closest('.nav').find('.nav__list').slideToggle();
    });

    $('.btn--link-more').click(function(e){
      e.preventDefault();
      $(this).closest('.about-common__text').find('p').show();
      $(this).closest('.about-common__text').find('.about-common__btn-wrapper').show();
      $(this).hide();
    });

    var removingBlocks = [
      $('.articles-promo-info'),
      $('.about-promo-info'),
      $('.technology-promo-info'),
      $('.services-promo-info'),
      $('.quality-promo-info'),
      $('.production-promo-info'),
      $('.news-promo-info'),
      $('.single-service-promo-info'),
    ]
    $(removingBlocks).each(function(){
      $(this).prependTo($(this).closest('.promo').next());
    });

  }




});

