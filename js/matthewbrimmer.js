var $root = $('html, body');
// Smooth Scrool
$(document).ready(function(){
  $('a').click(function() {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top-56
      }, 500);
      return false;
  });
  // Bx Slider one
  $('.bxslider.one').bxSlider({
    minSlides: 6,
    maxSlides: 6,
    slideWidth: 170,
    slideMargin: 10,
    ticker: true,
    speed: 10000,
    tickerHover: false,
    autoDirection: 'next',
    useCSS: false
  });
  // Bx slider two
  $('.bxslider.two').bxSlider({
    minSlides: 6,
    maxSlides: 6,
    slideWidth: 170,
    slideMargin: 10,
    ticker: true,
    speed: 10000,
    tickerHover: false,
    autoDirection: 'prev',
    useCSS: false
  });
  // Typing js
  $(".myNameIs").typed({
    strings: ['^300 Matthew Brimmer<br>'],
    typeSpeed: 75,
    showCursor: false,
    contentType: 'html',
    charTyped: function(){
      $.playSound('./audio/keyboard_key');
    },
    callback: function(){
      $(".jobTitle").typed({
        strings: ['^300 Software Engineer<br>'],
        typeSpeed: 75,
        showCursor: false,
        contentType: 'html',
        charTyped: function(){
          $.playSound('./audio/keyboard_key');
        },
      });
    }
  });
});
