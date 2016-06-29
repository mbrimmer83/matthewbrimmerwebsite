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
