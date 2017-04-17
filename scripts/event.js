chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.storage.local.set({'disable_nyancat': request.checked});
    // sendResponse(request);
    // sendResponse(request);
    // if (request.event === 'checkbox') {
    // } else if (request.event === 'store') {
    //   console.log('storing');
    // }
  }
);
