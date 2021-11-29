const Sequelize = require('sequelize');
const db = require('../config/database');

const userInfo = db.define('UserInfo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userPassword: {
        type: Sequelize.STRING,
        allowNull: false
    },
    roleId:{
        type: Sequelize.NUMBER,
        allowNull:false}
    
});

module.exports = userInfo;