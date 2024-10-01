// Createor: Kshitij Negi
// Auto-fill creds when the page loads
chrome.storage.sync.get(['savedUsername', 'savedPassword'], function(data) {
    if (data.savedUsername && data.savedPassword) {
        document.querySelector('input[type="text"]').value = data.savedUsername;
        document.querySelector('input[type="password"]').value = data.savedPassword;
    }
});
  
// Saved creds when sumbit
document.querySelector('form').addEventListener('submit', function() {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    chrome.storage.sync.set({ 
        savedUsername: username, 
        savedPassword: password 
    });
    // Sending msg to backgroung.js to change info in extension
    // chrome.runtime.sendMessage({action: "startChanges"});
});
