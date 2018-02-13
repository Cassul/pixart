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
// task 4
// $('body').click(function (event) {
//    if ($(event.target).attr('class')  === "square") {
//     $(event.target).css('background-color', 'green');
//   }
// });
// task 5
// $('body').click(function (event) {
//    if ($(event.target).attr('class')  === "square") {
//     $(event.target).css('background-color', $input.val());
//   }
// });
// task 6
$('body').on('mouseover', function (event) {
   if ($(event.target).attr('class')  === "square") {
    $(event.target).css('background-color', $input.val());
  }
});
