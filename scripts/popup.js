// Creator: Kshitij Negi
document.getElementById('clear').addEventListener('click', function() {
    chrome.storage.sync.clear();
    document.getElementById('txt').textContent = "No Creditials are Saved.";
    document.getElementById('clear').style.display = 'None';
});

chrome.storage.sync.get(['savedUsername', 'savedPassword'], function(data) {
    if (data.savedUsername && data.savedPassword) {
        document.getElementById('txt').textContent = "Your Credentials are Saved.";
        document.getElementById('clear').style.display = 'block';
    } else {
        document.getElementById('txt').textContent = "No Credentials are Saved.";
        document.getElementById('clear').style.display = 'none';
    }
});