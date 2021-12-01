const Sequelize = require('sequelize');
const db = require('../config/database');

const appointmentInfo = db.define('AppointmentInfo', {
    appointmenId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    appointmentDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    appointmentTime: {
        type: Sequelize.TIME,
        allowNull: false
    },
    amount:{
        type: Sequelize.NUMBER,
        allowNull: false
    },
    patientId:{
        type: Sequelize.NUMBER,
        allowNull: false
    },
    doctorId:{
        type: Sequelize.NUMBER,
        allowNull: false
    }
    
});

module.exports =appointmentInfo;