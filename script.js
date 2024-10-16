// Matrix animation and QR code generation combined

// --------------------- Matrix Background Animation ---------------------
const canvas = document.getElementById("matrixRain");
const ctx = canvas.getContext("2d");

// Set canvas width and height to cover the entire screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const matrix = matrixChars.split("");

// Font size for the matrix effect
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array for each column to keep track of its drop position
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    // Make the background slightly transparent
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the color of the characters
    ctx.fillStyle = "#00FF00";
    ctx.font = fontSize + "px monospace";

    // Loop over the columns and draw the characters
    drops.forEach((drop, i) => {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drop * fontSize);

        // Randomly reset drop position
        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move the drop down by one position
        drops[i]++;
    });
}

// Run the drawMatrix function every 50ms
setInterval(drawMatrix, 50);

// Adjust canvas size when window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// --------------------- QR Code Generator ---------------------

document.getElementById('generateBtn').addEventListener('click', function() {
    const qrText = document.getElementById('qrText').value;
    const qrCodeDiv = document.getElementById('qrcode');
    const saveBtn = document.getElementById('saveBtn');

    // Clear previous QR code
    qrCodeDiv.innerHTML = '';
    saveBtn.style.display = 'none';  // Hide save button if no QR code generated

    // Generate QR code if the text is not empty
    if (qrText.trim()) {
        const qrCode = new QRCode(qrCodeDiv, {
            text: qrText,
            width: 128,
            height: 128,
            colorDark: "#00FF00",  // Dark color (green)
            colorLight: "#000000"  // Light color (black)
        });

        // Show the save button after the QR code is generated
        saveBtn.style.display = 'inline-block';

        // Save QR code as JPEG
        saveBtn.onclick = function () {
            const qrCanvas = qrCodeDiv.querySelector('canvas');
            const dataUrl = qrCanvas.toDataURL('image/jpeg');

            // Create a temporary link element for downloading the QR code as JPEG
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'qrcode.jpeg';
            link.click();
        };
    } else {
        qrCodeDiv.innerHTML = 'Please enter some text.';
        saveBtn.style.display = 'none';  // Hide save button if no valid text
    }
});
const content = document.getElementById('content');

// Function to toggle fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        content.requestFullscreen().catch(err => {
            alert(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen().catch(err => {
            alert(`Error attempting to exit fullscreen: ${err.message}`);
        });
    }
}

// Listen for keydown event to toggle fullscreen when "F" is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'f' || event.key === 'F') {
        toggleFullscreen();
    }
});

