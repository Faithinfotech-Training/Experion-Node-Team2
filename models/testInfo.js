const Sequelize = require('sequelize')
const db = require('../config/database')

const testInfo = db.define('TestInfo', {
    testInfoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    testId: {
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
    reportId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
   
})

module.exports = testInfo;
