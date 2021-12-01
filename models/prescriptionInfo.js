const Sequelize = require('sequelize')
const db = require('../config/database')

const prescriptionInfo = db.define('PrescriptionInfo', {
    prescriptionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prescriptionDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    doctorNotes: {
        type: Sequelize.STRING,
        allowNull: false
    },
    testDetails: {
        type: Sequelize.STRING,
        allowNull: false
    },
    medicineId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    patientId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = prescriptionInfo;
