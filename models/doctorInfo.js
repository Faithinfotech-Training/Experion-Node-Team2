const Sequelize = require('sequelize');
const db = require('../config/database');

const doctorInfo = db.define('DoctorInfo',
 {
    staffId: {
        type: Sequelize.INTEGER,
        ForeignKey: true,

    },
    docId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    docName: {
        type: Sequelize.STRING,
    }
});

module.exports = doctorInfo;