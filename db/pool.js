const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

module.exports = new Pool({
    host: "localhost",
    user: "jum",
    database: "minimessageboard",
    password: process.env.DATAPASS,
    port: 5432
})