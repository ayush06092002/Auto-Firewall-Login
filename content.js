chrome.storage.local.get(["username", "password"], function(data) {
  if (data && data.username && data.password) {
    // Listen for changes in the URL
    const checkUrl = setInterval(function() {
      // Check if the URL contains the expected part of the URL
      if (window.location.href.includes("192.168.55.253:1003/keepalive")) {
        // Stop checking the URL
        clearInterval(checkUrl);

        const currentUrl = window.location.href;
        // Save the current URL to local storage
        chrome.storage.local.set({ "submittedUrl": currentUrl });
        //show the saved url in the log
        console.log("The submitted URL is: " + currentUrl);
    // Display popup message
        window.alert("Thanks for signing in using our CRISPR.");
        setTimeout(function() {
          // Redirect to the server URL
          window.location.href = "http://192.168.77.84";
        }, 1000); // Adjust the delay time as needed


      }
    }, 100); // Check the URL every 100 milliseconds
    // Fill the form with saved username and password
    document.getElementById("ft_un").value = data.username;
    document.getElementById("ft_pd").value = data.password;
    // Get the current URL before submitting the form
    // Submit the form programmatically
    document.querySelector("form").submit();



  }
});
