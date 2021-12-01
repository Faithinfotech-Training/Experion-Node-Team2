const database = require('../config/userAuth');

const userInfo = () => {
    const sqlQuery = `
        CREATE TABLE IF NOT EXISTS userInfo (
            id integer PRIMARY KEY,
            userName text UNIQUE,
            password text,
            roleId integer
        )`
    return database.run(sqlQuery);
}
userInfo();

module.exports = database;