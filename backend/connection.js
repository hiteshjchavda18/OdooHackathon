// mysql connection module
const mysql = require('mysql2');
const config = require('./config');

// Create a connection pool
const pool = mysql.createPool({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Export the pool for use in other modules
module.exports = pool.promise();