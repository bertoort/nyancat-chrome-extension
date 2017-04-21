document.body.onload = function() {
  chrome.storage.sync.get("disable_nyancat", function(items) {
    if (!items.disable_nyancat) {
      displayNyan();
    }
  });
}

function displayNyan() {
  $('body').append('<div class="nyan"></div>');
  $('*').css('cursor', 'none');

  var posX = 100, posY = 100, px = 0, py = 0, an = false;
  var nyan = $('.nyan');
  var rainbow = null;
  var tamanhoTela = 4
  var pilha = [];

  for(var i = 0; i < tamanhoTela; i++) {
    var rain = $('<div class="rainbow"/>').css('left', i*9 +'px');
    $('body').append(rain);
  }

  rainbow = $('.rainbow');

  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  rainbow.hide();

  $(document).on('mousemove', function( event ) {
    var tamX = nyan.width()/2,
      tamY = nyan.height()/2;
    px = event.pageX - tamX + 36;
    py = event.pageY - tamY + 10;
    nyan.css({
      left: px + 'px',
      top: py + 'px'
    });
    var qnt = Math.floor(nyan.position().left/9);
    for(var i = 0; i < qnt; i++) {
      var am = (i%2);
      if(an) am = (i%2) ? 0 : 1 ;
      rainbow.eq(qnt-i).css({left: px - ((qnt - i -1)*9) });
    }
  })

  function peidaArcoIris() {
    var qnt = Math.floor(nyan.position().left/9)+2;
    for(var i = 0; i < qnt; i++) {
      var am = (i%2);
      if(an) am = (i%2) ? 0 : 1 ;
      rainbow.eq(qnt-i).css({top: py+am }).show();
    }
  }

  window.setInterval(function(){
    peidaArcoIris();
  }, 10);

  window.setInterval(function(){ an = !an; }, 500);

  var frame = 0;
  window.setInterval(function(){
    frame = frame > 100 ? 0 : frame;
    nyan.css({'background-position': 34*frame+'px'});
    frame++;
  }, 100);
}
