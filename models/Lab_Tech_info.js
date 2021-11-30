const Sequelize = require('sequelize');
const db = require('../config/database');

const CMS = db.define('Lab_Tech_info',
 {
    Staff_id: {
        type: Sequelize.INTEGER,
        ForeignKey: true,
    },
    Lab_Tech_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Lab_Tech_Name: {
        type: Sequelize.STRING,
    },
    Dept_id: {
        type: Sequelize.INTEGER,
        ForeignKey: true,
        allowNull: false
    },
});

module.exports = CMS;