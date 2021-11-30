const Sequelize = require('sequelize');
const db = require('../config/database');

const CMS = db.define('Doctor_info',
 {
    Staff_id: {
        type: Sequelize.INTEGER,
        ForeignKey: true,

    },
    Doc_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Doc_Name: {
        type: Sequelize.STRING,
    },
    Dept_id: {
        type: Sequelize.INTEGER,
        ForeignKey: true,
        allowNull: false
    },
});

module.exports = CMS;