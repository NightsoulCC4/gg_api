const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '172.105.121.61',
    user: 'root',
    password: 'aNrwlOvWxG',
    port: '3306',
    database: 'admin_casino'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }

    console.log('Connected to MySQL server');
});