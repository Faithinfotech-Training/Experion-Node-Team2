const Sequelize = require('sequelize');
const db = require('../config/database');

const labtechnicianInfo = db.define('LabTechnicianInfo',
 {
    staffId: {
        type: Sequelize.INTEGER,
        ForeignKey: true,
    },
    labtechnicianId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    labtechnicianName: {
        type: Sequelize.STRING,
    }
});

module.exports = labtechnicianInfo;