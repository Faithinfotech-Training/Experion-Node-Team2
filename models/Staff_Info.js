const Sequelize = require('sequelize');
const db = require('../config/database');

const CMS = db.define('Staff_info',
 {
    Staff_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Qualification: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DOB: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DOJ: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Phone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Email: {
        type: Sequelize.Email,
        allowNull: false
    },
    EXP: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
  });

module.exports = CMS;