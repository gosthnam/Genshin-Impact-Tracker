const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3').verbose();

// connect to database
const database = new sqlite3.Database(`./src/server/database/db.sqlite3`, (err) => {
    (err) ? console.error('Database opening error: ', err) : console.log('Database opened');
});

// character
ipcMain.on('request', (event, arg) => {
    var sql = '';
    switch (arg[0]) {
        case 'default_account':
            sql = ` SELECT *
                    FROM account
                    WHERE default_account=1;`;
            break;
        case 'accounts':
            sql = ` SELECT *
                    FROM account;`;
            break;
        case 'characters':
            sql = ` SELECT * 
                    FROM character
                    ORDER BY name;`;
            break;
        case 'character_tracker':
            sql = ` SELECT * 
                    FROM character_tracker
                    ORDER BY character_name;`;
            break;
        default:
            break;
    }

    database.all(sql, (err, rows) => {
        console.log(err || 'ok');
        event.reply('response', (err && err.message) || rows);
    });
});