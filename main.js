const { app, BrowserWindow } = require('electron');
const path = require('path');

// Function to create the main application window
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Optional, if you need to use preload scripts
      nodeIntegration: true,
    },
  });

  // Load the index.html file from the public folder
  mainWindow.loadFile('public/index.html');
}

// App ready to create windows
app.whenReady().then(createWindow);

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Recreate a window if the app is activated (macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

