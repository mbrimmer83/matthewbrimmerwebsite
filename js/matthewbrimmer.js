
var $root = $('html, body');
$(document).ready(function(){
  $('a').click(function() {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top-56
      }, 500);
      return false;
  });
});
