const Sequelize = require('sequelize');
const db = require('../config/database');
const Role = require('./roleInfo');


const User = db.define('Users', {
    userID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    roleId : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references:{model:'RoleInfo', key:'roleId'}
    }
})
Role.hasMany(User)

module.exports = User;