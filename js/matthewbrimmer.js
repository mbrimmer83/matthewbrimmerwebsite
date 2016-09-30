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
    strings: ['^300 Welcome <br> ^300 my name is <br> ^300 Matthew Brimmer <br> ^200 and <br> ^300 I\'m a Fill Stock Developer', ' ^300 Welcome <br> ^300 my name is <br> ^300 Matthew Brimmer <br> ^200 and <br> ^300 I\'m a Fill Stock Developer'],
    typeSpeed: 75,
    showCursor: false,
    backSpeed: 20,
    contentType: 'html',
    backspace: function(curString, curStrPos){
      setTimeout(function(){
        if (self.arrayPos == 1){
                self.stopNum = 3;
            }
        else{
                self.stopNum = 12;
            }
      });
    },
    charTyped: function(){
      $.playSound('./audio/keyboard_key');
    }
  });
});
