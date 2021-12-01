const Sequelize = require('sequelize');
const db = require('../config/database');

const adminInfo = db.define('AdminInfo', {
    adminId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    adminName: {
        type: Sequelize.STRING,
        allowNull: false
    },
   
    staffId:{
        type: Sequelize.NUMBER,
        allowNull:false
    }
    
});

module.exports = adminInfo;