const Sequelize = require('sequelize');
const db = require('../config/database');

const patientInfo = db.define('PatientInfo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    patientName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false
    },

    phoneNumber:{
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = patientInfo;