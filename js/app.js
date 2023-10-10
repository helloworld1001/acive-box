$(function () {
  let header = $('#header');
  let intro = $('#intro');
  let introHeight;
  let scrollPos = $(window).scrollTop();

  $(window).on('scroll load resize', function () {
    introHeight = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    console.log(scrollPos);

    if (scrollPos > introHeight) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });
});
