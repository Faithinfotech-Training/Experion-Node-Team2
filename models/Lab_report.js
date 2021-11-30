const Sequelize = require('sequelize')
const db = require('../config/database')

const Lab_report = db.define('labs', {
    report_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    report_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    report_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    patient_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    doctor_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    clinic_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    lab_techmician_id:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = Lab_report;
