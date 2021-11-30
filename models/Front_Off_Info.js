const Sequelize = require('sequelize');
const db = require('../config/database');

const CMS = db.define('Front_off_Info',
 {
    Front_Off_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Front_Off_Name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    Staff_id: {
        type: Sequelize.INTEGER,
        ForeignKey : true,
        allowNull: false
    },
  });

module.exports = CMS;