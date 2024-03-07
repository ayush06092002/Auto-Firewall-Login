document.getElementById("saveButton").addEventListener("click", function() {
  saveCredentials();
});

document.addEventListener("DOMContentLoaded", function() {
  checkAndShowSavedMessage();
});

function saveCredentials() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  chrome.storage.local.set({ username, password }, function() {
    console.log('Credentials saved.');
    showSavedMessage();
  });
}


function checkAndShowSavedMessage() {
  chrome.storage.local.get(["username", "password"], function(data) {
    if (data && data.username && data.password) {
      showSavedMessage();
    }
  });
}

function showSavedMessage() {
  const messageContainer = document.getElementById("message");
  messageContainer.textContent = "Credentials saved!";
  messageContainer.classList.add("saved-message");

  setTimeout(function() {
    messageContainer.textContent = "";
    messageContainer.classList.remove("saved-message");
  }, 3000); // Clear the message after 3 seconds
}



