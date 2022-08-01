const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'F@sterTot0',
    database: 'company'
});

module.exports = db;