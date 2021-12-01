const Sequelize = require('sequelize');
const db = require('../config/database');

const appointmentInfo = db.define('AppointmentInfo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    patientName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    doctorName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    appointmentDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    appointmentTime: {
        type: Sequelize.TIME,
        allowNull: false
    }
   
    
    
});

module.exports =appointmentInfo;