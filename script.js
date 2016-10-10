$(document).ready(function() {

  cheet('← ↓ ← ↓ ↑', {
    next: function(str, key, num, seq) {
      $('.arrows').removeClass('animated shake');
      $('.arrow-' + num).addClass('correct')
    },

    fail: function(str) {
      if (str[0] === '←') {
        $('span[class^="arrow"]').removeClass('correct');
        $('.arrows').addClass('animated shake');
      }
    },

    done: function() {
      $('#code').hide();
      var $canvas = $('#canvas');
      $canvas.show('fast');
      $canvas.addClass('active');
    }
  });

  cheet('c o l o r', {
    next: function(str, key, num, seq) {
      $('.colors').removeClass('animated shake');
      $('.color-' + num).addClass('correct')
    },

    fail: function(str) {
      if (str[0] === 'c') {
        $('span[class^="color-"]').removeClass('correct');
        $('.colors').addClass('animated shake');
      }
    },

    done: function() {
      $('#color').hide();
      $('#code').show();

      var rgb = [];
      for(var i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * 255));
      }

      $('body').css('background', 'rgb('+ rgb.join(',') +')');
      $('body').css('color', 'white');
    }
  });
});

