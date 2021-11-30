const Sequelize = require('sequelize')
const db = require('../config/database')

const Prescription_info = db.define('pres', {
    prescription_info_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prescription_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    doctor_notes: {
        type: Sequelize.STRING,
        allowNull: false
    },
    test_details: {
        type: Sequelize.STRING,
        allowNull: false
    },
    medicine_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    doctor_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    patient_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Prescription_info;
