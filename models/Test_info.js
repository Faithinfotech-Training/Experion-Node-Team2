const Sequelize = require('sequelize')
const db = require('../config/database')

const Test_info = db.define('test_info', {
    test_info_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    test_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    range: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    report_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
   
})

module.exports = Test_info;
