var $button = $('.button');
var $input = $('.color_input');
var $box = $('.box');
$button.on('click', function (event) {
  console.log('hello');
  $box.css('background-color', $input.val());
});