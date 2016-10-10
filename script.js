$(document).ready(function() {

  cheet('← ↓ → ↓ ↑', {
    next: function(str, key, num, seq) {
      $('.arrow-' + num).addClass('correct')
    },

    fail: function() {
      $('span[class^="arrow"]').removeClass('correct');
    },

    done: function() {
      $('#code').hide();
      var $canvas = $('#canvas');
      $canvas.show('fast');
      $canvas.addClass('active');
    }
  });

  cheet('c o l o r', function() {
    var rgb = [];
    for(var i = 0; i < 3; i++) {
      rgb.push(Math.floor(Math.random() * 255));
    }

    $('body').css('background', 'rgb('+ rgb.join(',') +')');
    $('body').css('color', 'white');
  });
});

