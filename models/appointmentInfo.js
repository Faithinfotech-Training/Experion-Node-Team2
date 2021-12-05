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
        allowNull:false
    },
    patientId:{
        type: Sequelize.INTEGER,
        allowNull:false
       
    },
    doctorName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    appointmentDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    appointmentTime: {
        type: Sequelize.STRING,
        allowNull: false
    }
   
    
    
});

module.exports =appointmentInfo;