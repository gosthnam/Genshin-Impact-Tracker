const {app, BrowserWindow, ipcMain} = require('electron');
require('./database/db-query');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        },
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/../../dist/Genshin-Impact-Tracker/assets/Intertwined_Fate.png`
    });

    win.loadURL(`file://${__dirname}/../../dist/Genshin-Impact-Tracker/index.html`);

    win.on('closed', function() {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});