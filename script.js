var $button = $('.button');
var $input = $('.color_input');
var $box = $('.box');
$button.on('click', function (event) {
  event.preventDefault();
  $box.css('background-color', $input.val());
});

$input.keypress(function (event) {
  var key = event.which;
  if (key === 13) {
  $box.css('background-color', $input.val());
  }
});