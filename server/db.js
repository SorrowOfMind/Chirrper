const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWD
});

module.exports = pool;