const sqlite3 = require('sqlite3').verbose();

//Create a database object
const database = new sqlite3.Database("./authService.db");

module.exports = database;