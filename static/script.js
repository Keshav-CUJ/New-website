document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('upload-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const fileInput = document.getElementById('file-input');
        const file = fileInput.files[0];

        if (!file) {
            alert('Please upload an image file.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            // This is where the image is read
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<p>Processing image...</p>';

            // Fake a prediction result for the prototype
            setTimeout(() => {
                resultDiv.innerHTML = `<p>Prediction: <strong>Tomato Yellow Leaf Curl Virus</strong></p>`;
            }, 1000);
        };

        reader.readAsDataURL(file);
    });
});
