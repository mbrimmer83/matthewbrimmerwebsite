var $root = $('html, body');
$(document).ready(function(){
  $('a').click(function() {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top-56
      }, 500);
      return false;
  });
});

$(document).ready(function() {
  $(".welcome").typed({
    strings: ['^300 Welcome <br> ^300 my name is <br> ^300 Matthew Brimmer <br> and <br> ^300 I\'m a Full Stack Developer'],
    typeSpeed: 0,
    showCursor: false,
    contentType: 'html'
  });
});
