const Sequelize = require('sequelize')
const db = require('../config/database')

const Prescription_medicine = db.define('presmedi', {
    prescription_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    medicine_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dosage_frequency: {
        type: Sequelize.STRING,
        allowNull: false
    },
    no_of_days: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    prescription_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Prescription_medicine;
