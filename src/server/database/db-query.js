const {ipcMain} = require('electron');
const sqlite3 = require('sqlite3').verbose();

// connect to database
const database = new sqlite3.Database(`./src/server/database/db.sqlite3`, (err) => {
    if (err)
        console.error('Database opening error: ', err);
    else
        console.log('Database opened');
});

// character
ipcMain.on('character', (event, arg) => {
    var sql = '';
    switch(arg[0]) {
        case 'all':
        default:
            sql = 'SELECT * FROM character'
            break;
    }

    database.all(sql, (err, rows) => {
        console.log(err || rows);
        event.reply('character-reply', (err && err.message) || rows);
    });
});