const {app, BrowserWindow, ipcMain} = require('electron');

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

ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg);
    event.reply('asynchronous-message', "pong");
  });

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});