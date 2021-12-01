const Sequelize = require('sequelize')
const db = require('../config/database')

const testDetailInfo = db.define('TestDetailInfo', {
    testId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    testName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    testDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    testTime: {
        type: Sequelize.TIME,
        allowNull: false
    },
    testUnit: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    testAmount:{
        type:Sequelize.NUMBER,
        allowNull:false
    },
    testDescription:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = testDetailInfo;
