// script.js
function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const outputDiv = document.getElementById('output');

    const file = fileInput.files[0];
    if (file) {
        // You can handle the file here (e.g., upload to a server, process, etc.)
        outputDiv.innerHTML = `File uploaded: ${file.name}`;
    } else {
        outputDiv.innerHTML = 'Please select a file.';
    }
}
