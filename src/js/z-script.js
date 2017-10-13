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

  var myMap;
  ymaps.ready(function () {
    if ( $(window).width() < 768 ){
      myMap = new ymaps.Map("YMapsID", {
        center: [58.051117, 33.483391],
        zoom: 4
      });
    } else {
      myMap = new ymaps.Map("YMapsID", {
        center: [58.051117, 33.483391],
        zoom: 5
      });
    }
    var myPlacemark1 = new ymaps.Placemark([59.854201, 30.444552], {}, {
    });
    var myPlacemark2 = new ymaps.Placemark([55.673940, 37.439050], {}, {
    });
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
  });

  if ( !($('.page').hasClass('page--index')) ){
    $('.nav__item').removeClass('nav__item--active');
  }

});

