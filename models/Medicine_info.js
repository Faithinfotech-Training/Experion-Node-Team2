const Sequelize = require('sequelize')
const db = require('../config/database')

const Medicine_info = db.define('medicines', {
    medicine_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    medicine_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    medicine_company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    medicine_amount: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    manufacturing_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    expiry_date: {
        type: Sequelize.DATE,
        allowNull: false
    },

    medicine_dosage: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Medicine_info;
