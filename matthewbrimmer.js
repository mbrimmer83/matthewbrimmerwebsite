$(function() {
  $('a').click(function() {
    $('#portfolioModal').removeClass('hide');
    $('#portfolioModal').removeClass('in');
  });
// Portfolio button
	$('.port').click(function(){
    if ($('#portfolio').hasClass('hide')) {
      $('#portfolio').removeClass('hide');
    }
	});
  $('.homeBtn').click(function(){
    $('#portfolio').addClass('hide');
	});
});

$(function() {
  $('#box-1').click(function() {
    $('iframe').removeClass('hide');
    $('iframe').attr('src', '../matthewbrimmer.com/memorygame/index.html');
    $('#box-2').append('<br><button>Close Game</button></br>');
    $('.image').addClass('hide');
    $('#box-2').addClass('gameButton');
  });
});
$(function() {
  $('.gameButton').click(function() {
    $('#box-2').addClass('hide');
    $('iframe').removeAttr('src', '../matthewbrimmer.com/memorygame/index.html');
    $('#box-2').remove('<br><button>Close Game</button></br>');
  });
});
