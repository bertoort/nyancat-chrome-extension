document.querySelector('input').addEventListener('click', function (event) {
  var message = {event: 'checkbox', checked: this.checked}; 
  chrome.runtime.sendMessage(message, function(response) {
    console.log(response);
  });
});
