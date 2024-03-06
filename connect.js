const mysql = require('mysql');
const config = require('./config/config');

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    port: config.port,
    database: config.database
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }

    console.log('Connected to MySQL server');
});

connection.end((err) => {
    if (err) {
        console.error('Error closing MySQL connection:', err);
        return;
    }

    console.log('MySQL connection closed');
});