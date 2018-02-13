var $button = $('.button');
var $input = $('.color_input');
var $box = $('.box');

// task 1
$button.on('click', function (event) {
  event.preventDefault();
  $box.css('background-color', $input.val());
});
// task 2
$input.keypress(function (event) {
  var key = event.which;
  if (key === 13) {
  $box.css('background-color', $input.val());
  }
});
// task 3
var i = 0;
while (i <= 100) {
  var $div = $('<div></div>');
  $div = $div.addClass('square');
  $('body').append($div);
  i++;
}
