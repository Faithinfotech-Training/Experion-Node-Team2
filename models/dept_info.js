const Sequelize = require('sequelize');
const db = require('../config/database');

const CMS = db.define('Dept_info',
 {
    Dept_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Dept_Name: {
        type: Sequelize.STRING,
    },
});

module.exports = CMS;