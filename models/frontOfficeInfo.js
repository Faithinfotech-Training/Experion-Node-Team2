const Sequelize = require('sequelize');
const db = require('../config/database');

const frontOffice = db.define('FrontOfficeInfo',
 {
    frontId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    frontName: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    staffId: {
        type: Sequelize.INTEGER,
        ForeignKey : true,
        allowNull: false
    },
  });

module.exports = frontOffice;