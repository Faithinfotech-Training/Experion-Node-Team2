const Sequelize = require('sequelize');
const db = require('../config/database');

const doctorInfo = db.define('DoctorInfo',
 {
    staffId: {
        type: Sequelize.INTEGER,
        ForeignKey: true,

    },
    doctorId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    doctorName: {
        type: Sequelize.STRING,
    },
    deptId: {
        type: Sequelize.INTEGER,
        ForeignKey: true,
        allowNull: false
    },
});

module.exports = doctorInfo;