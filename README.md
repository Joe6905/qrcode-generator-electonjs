# Hacker-Themed QR Code Generator

This is a simple QR Code generator web app with a hacker-themed design. Users can input text, generate a QR code, and download the QR code as a JPEG. The UI is inspired by the classic "Matrix" theme, with green and black colors and background animations.

## Features

- Generate QR codes based on user input
- Download the generated QR code as a JPEG image
- Hacker-inspired UI with green and black colors
- Matrix background animation

## Demo

You can see the app live in action by cloning this repository and running it locally.

## Preview

![QR Code Generator Preview](preview_image_link)

## Technologies Used

- HTML
- CSS (Flexbox for layout, custom styles for hacker theme)
- JavaScript (QR Code generation logic, save as JPEG)
- Matrix background animation using JavaScript

## How to Run Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/joe6905/hacker-themed-qrcode-generator.git
   cd hacker-themed-qrcode-generator
   ```

2. **Open `index.html` in your browser:**
   You can open the `index.html` file directly in any modern web browser.

## Usage

1. Enter the text you want to generate a QR code for in the input field.
2. Click the **Generate QR Code** button.
3. The QR code will be displayed in the center of the screen.
4. To save the QR code as a JPEG, click the **Save as JPEG** button.

## Code Explanation

### JavaScript Functionality

- The script uses the `QRCode.js` library to generate a QR code based on user input.
- A download button is provided to save the generated QR code as a `.jpeg` image.
- The matrix-style background animation is written in vanilla JavaScript, inspired by the Matrix movie theme.

### UI Styling

- The overall layout is centered using Flexbox.
- The app has a hacker-inspired color palette (green and black).
- Hover effects are applied to buttons to enhance interactivity.
- The QR code is generated inside a container with a green border, keeping it aligned with the theme.

## Folder Structure

```bash
.
├── index.html          # Main HTML file
├── style.css           # CSS for styling the page
├── script.js           # JavaScript for QR code generation and matrix animation
└── qrcode.min.js       # QR Code generation library
```

## Future Enhancements

- Add error correction level options for the QR code.
- Allow users to choose different themes or customize the colors.
- Implement the option to scan a QR code directly within the app.

## License

This project is open-source and available under the [MIT License](LICENSE).
