document.body.onload = function() {
  chrome.storage.sync.get("disable_nyancat", function(items) {
    document.querySelector('input').checked = items.disable_nyancat;
  });
}

document.querySelector('input').addEventListener('click', function (event) {
  chrome.storage.sync.set({'disable_nyancat': this.checked}, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
});
