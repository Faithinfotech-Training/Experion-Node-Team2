const Sequelize = require('sequelize')
const db = require('../config/database')

const PrescriptionMedicine = db.define('PrescriptionMedicine', {
    prescriptionMedId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    medicineId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dosageFrequency: {
        type: Sequelize.STRING,
        allowNull: false
    },
    noOfDays: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    prescriptionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = PrescriptionMedicine;
