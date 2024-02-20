document.addEventListener('DOMContentLoaded', function() {
    var logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function() {
      chrome.storage.local.get(["submittedUrl"], function(data) {
        if (data && data.submittedUrl) {
          var updatedUrl = data.submittedUrl.replace("keepalive", "logout");
          chrome.storage.local.set({ "updatedUrl": updatedUrl }, function() {
            console.log("URL updated successfully:", updatedUrl);
            // Redirect to the modified URL
            window.location.href = updatedUrl;
          });
        } else {
          console.log("No URL found in local storage");
        }
      });
    });
  });
  