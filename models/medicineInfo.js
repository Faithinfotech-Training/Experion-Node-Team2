const Sequelize = require('sequelize')
const db = require('../config/database')

const medicineInfo = db.define('MedicineInfo', {
    medicineId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    medicineName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    medicineCompany: {
        type: Sequelize.STRING,
        allowNull: false
    },
    medicineAmount: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    manufactureDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    expiryDate: {
        type: Sequelize.DATE,
        allowNull: false
    },

    medicineDosage: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = medicineInfo;
