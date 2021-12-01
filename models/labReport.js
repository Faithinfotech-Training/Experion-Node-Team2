const Sequelize = require('sequelize')
const db = require('../config/database')

const labReport = db.define('LabReport', {
    reportId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    reportTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    reportDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    patientId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    clinicId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    labTechmicianId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = labReport;
