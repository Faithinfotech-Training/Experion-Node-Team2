const Sequelize = require('sequelize');
const db = require('../config/database');

const roleInfo = db.define('RoleInfo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roleName: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = roleInfo;