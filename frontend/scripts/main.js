$(document).ready(function () {

  $('.btn-get-started').click(function (e) {

    var tujuan = $(this).attr('href');
    var elemen = $(tujuan);

    $('html').animate({
      scrollTop: elemen.offset().top + 120
    })

    e.preventDefault();
  })


  $(window).scroll(function () {
    var x = $(this).scrollTop();

    // if (x > 80) {
    //   $('.navbar-header').addClass('navbar-fixed-top');
    // } else {
    //   $('.navbar-header').removeClass('navbar-fixed-top');
    // }
  })







})