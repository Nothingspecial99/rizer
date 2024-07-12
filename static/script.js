document.getElementById('summarize').addEventListener('click', function () {
    const article = document.getElementById('article').value;
    const resultDiv = document.getElementById('result');
    const loadingDiv = document.getElementById('loading');
    const overlayDiv = document.getElementById('overlay');

    // Show loading GIF and overlay
    loadingDiv.style.display = 'block';
    overlayDiv.style.display = 'block';
    resultDiv.innerText = '';  // Clear previous results

    fetch('/summarize', {
        method: 'POST',
        headers: {
            'Content-type': 'text/plain'
        },
        body: article
    })
        .then(response => response.json())
        .then(data => {
            // Hide loading GIF and overlay
            loadingDiv.style.display = 'none';
            overlayDiv.style.display = 'none';
            // Display result
            resultDiv.innerText = data.result;
        })
        .catch(error => {
            // Hide loading GIF and overlay
            loadingDiv.style.display = 'none';
            overlayDiv.style.display = 'none';
            // Display error
            resultDiv.innerText = 'Error: ' + error;
            console.error('Error:', error);
        });
});
