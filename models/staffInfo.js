const Sequelize = require('sequelize');
const db = require('../config/database');

const staffInfo = db.define('StaffInfo',
 {
    staffId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    qualification: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DateOfJoin: {
        type: Sequelize.DATE,
        allowNull: false
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    experience: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
  });

module.exports = staffInfo;