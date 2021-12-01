const Sequelize = require('sequelize');
const db = require('../config/database');

const frontOfficeInfo = db.define('FrontOffInfo',
 {
    frontofficeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    frontofficeName: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    staffId: {
        type: Sequelize.INTEGER,
        ForeignKey : true,
        allowNull: false
    },
  });

module.exports = frontOfficeInfo;