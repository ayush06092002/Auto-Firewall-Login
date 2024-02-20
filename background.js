chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ username: "", password: "" }, function() {
      console.log('Username and password set.');
    });
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getCredentials") {
      chrome.storage.sync.get(["username", "password"], function(data) {
        sendResponse(data);
      });
      return true;
    }
  });
