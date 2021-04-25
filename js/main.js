$(function () {

  $('.brgr__btn').on('click', function () {
    $('.brgr__list').toggleClass('brgr__list--active');
  });

  $(".brgr__list a, .menu__list a, .header__usp a, .about a, .footer__menu-list a, .footer__link, .footer__btn-link").on("click", function (e) {

    e.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;
    
    $('body,html').animate({scrollTop: top}, 1500);

  });

});