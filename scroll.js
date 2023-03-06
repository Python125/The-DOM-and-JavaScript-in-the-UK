$(document).ready(function () {
  let boxes = $(".box.animated");

  // add slide-fade-in class to boxes initially on screen
  boxes.each(function (index) {
    if (isOnScreen($(this))) {
      let animationClass =
        index % 2 == 0 ? "slide-fade-in-left" : "slide-fade-in-right";
      $(this).addClass(animationClass);
    }
  });

  // add or remove slide-fade-in classes to boxes when scrolling
  $(window).scroll(function () {
    boxes.each(function (index) {
      let animationClass =
        index % 2 == 0 ? "slide-fade-in-left" : "slide-fade-in-right";
      if (isOnScreen($(this))) {
        if ($(this).hasClass("fade-out")) {
          $(this).removeClass("fade-out").addClass(animationClass);
        }
      } else {
        if (
          $(this).hasClass("slide-fade-in-left") ||
          $(this).hasClass("slide-fade-in-right")
        ) {
          $(this)
            .removeClass("slide-fade-in-left slide-fade-in-right")
            .addClass("fade-out");
        }
      }
    });
  });

  // check if element is on screen
  function isOnScreen(elem) {
    let windowHeight = $(window).height();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + windowHeight;
    let elemTop = $(elem).offset().top;
    let elemBottom = elemTop + $(elem).outerHeight();
    return elemTop < viewportBottom && elemBottom > viewportTop;
  }
});

$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  $(".img-area img").css({
    width: 100 + scroll / -50 + "%",
  });
});

$(window).scroll(function () {
  $(".banner-text").css("opacity", 1 - $(window).scrollTop() / 250);
});
