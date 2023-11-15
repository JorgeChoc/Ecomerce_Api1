const mysql = require('mysql2/promise');

const pool = mysql.createPool ({
    host:"mysql-choc.alwaysdata.net",
    user:"choc_iriyc",
    password:"holamundo",
    database: "choc_iriyc71",
    waitForConnections: true,
    queueLimit: 0
});

module.exports = pool;
