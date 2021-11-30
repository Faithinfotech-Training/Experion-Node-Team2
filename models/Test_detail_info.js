const Sequelize = require('sequelize')
const db = require('../config/database')

const Test_detail_info = db.define('testdetail', {
    test_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    test_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    test_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    test_time: {
        type: Sequelize.TIME,
        allowNull: false
    },
    test_unit: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    test_amount:{
        type:Sequelize.NUMBER,
        allowNull:false
    },
    test_description:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Test_detail_info;
