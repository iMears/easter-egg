var codeLength = 5
var arrows     = ['↑', '↓', '←', '→'];
var randomCode = [];

for (var i = 0; i < codeLength; i += 1) {
  var randomArrow = arrows[Math.floor(Math.random() * arrows.length)];
  randomCode.push(randomArrow);
}

randomCode = randomCode.join(' ');

$(document).ready(function() {

  $('#code').text('type ' + randomCode);

  cheet(randomCode, function() {
    $('#code').hide();
    var $canvas = $('#canvas');
    $canvas.show('fast');
    $canvas.addClass('active');
  });
});