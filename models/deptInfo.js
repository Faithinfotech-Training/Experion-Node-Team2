const Sequelize = require('sequelize');
const db = require('../config/database');

const dept = db.define('DeptInfo',
 {
    deptId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    deptName: {
        type: Sequelize.STRING,
    },
});

module.exports = dept;