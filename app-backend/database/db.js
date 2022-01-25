const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();

const db = new sqlite3.Database(process.env.DATABASE_FILE);

module.exports = db;
