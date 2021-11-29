const Sequelize = require('sequelize');
const db = require('../config/database');

const billInfo = db.define('BillInfo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    billDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    billAmount: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    patientId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
});

module.exports = billInfo;