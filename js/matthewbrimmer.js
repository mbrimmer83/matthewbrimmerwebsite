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
    strings: ['^300 Welcome<br>'],
    typeSpeed: 75,
    showCursor: false,
    contentType: 'html',
    charTyped: function(){
      $.playSound('./audio/keyboard_key');
    },
    callback: function(){
      $(".myNameIs").typed({
        strings: ['^300 my name is<br>'],
        typeSpeed: 75,
        showCursor: false,
        contentType: 'html',
        charTyped: function(){
          $.playSound('./audio/keyboard_key');
        },
        callback: function() {
          $(".name").typed({
            strings: ['^300 Matthew Brimmer<br>'],
            typeSpeed: 75,
            showCursor: false,
            contentType: 'html',
            charTyped: function(){
              $.playSound('./audio/keyboard_key');
            },
            callback: function() {
              $(".and").typed({
                strings: ['^200 and<br>'],
                typeSpeed: 75,
                showCursor: false,
                contentType: 'html',
                charTyped: function(){
                  $.playSound('./audio/keyboard_key');
                },
                callback: function() {
                  $(".jobTitle").typed({
                    strings: ['^300 I\'m a Full Stack Developer'],
                    typeSpeed: 75,
                    showCursor: false,
                    contentType: 'html',
                    charTyped: function(){
                      $.playSound('./audio/keyboard_key');
                    },
                    callback: function() {
                      $(".and").addClass("andHighlighted");
                      setTimeout(function(){
                        $(".and").removeClass("andHighlighted");
                        $(".and").addClass("andChanged");
                        var pos = $('.and').position();
                        console.log(pos);
                      }, 1500);
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
});
