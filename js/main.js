$(function () {


  // ハンバーガーメニュー

  $('.btn__trigger').on('click', function () {
    $('.btn__trigger').toggleClass('close');
    $('.gnav').fadeToggle(300);
    $('body').toggleClass('noscroll');
  });

  if ($(window).width() <= 768) {
    $('.gnav__text>li>a').on('click', function () {
      $('.gnav').fadeOut(300);
      $('.btn__trigger').removeClass('close');
      $('body').removeClass('noscroll');
    });
  }



  // #のついたaタグへスムーズスクロール

  $('a[href^="#"]').click(function () {
    var time = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var distance = target.offset().top;
    $("html, body").animate({ scrollTop: distance }, time, "swing");
    return false;
  });


});
