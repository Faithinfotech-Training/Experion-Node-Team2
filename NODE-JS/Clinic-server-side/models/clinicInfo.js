const Sequelize = require('sequelize');
const db = require('../config/database');

const clinicInfo = db.define('ClinicInfo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clinicName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clinicAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clinicPhone:{
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = clinicInfo;