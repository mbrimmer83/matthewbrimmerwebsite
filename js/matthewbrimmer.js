var $root = $('html, body');
$(document).ready(function(){
  $('a').click(function() {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top-56
      }, 500);
      return false;
  });
});
$(document).ready(function(){
  $('ul.sliderUl li.slider:even').addClass('even');
  $('ul.sliderUl li.slider:odd').addClass('odd');

  setTimeout(RotateCarousel, 1500);

  function RotateCarousel() {
      $("ul.sliderUl li.slider:first-child").animate({ marginLeft: -200 }, 1500, 'linear', function () {
          $("ul.sliderUl li.slider:first-child").appendTo('ul.sliderUl');
          $("ul.sliderUl li.slider:last-child").css('margin-Left', 0);
          RotateCarousel();
  });
}
});
$(document).ready(function() {
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
