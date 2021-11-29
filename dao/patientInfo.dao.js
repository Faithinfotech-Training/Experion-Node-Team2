const patientInfo = require('../models/patientInfo');
var patientDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePatient: updatePatient
}

function findAll() {
    return patientInfo.findAll();
}

function findById(id) {
    return patientInfo.findByPk(id);
}

function deleteById(id) {
    return patientInfo.destroy({ where: { id: id } });
}

function create(patient) {
    var newPatient = new patientInfo(patient);
    return newPatient.save();
}

function updatePatient(patient, id) {
    var updatePatient = {
        patientName: patient.patientName,
        dateOfBirth: patient.dateOfBirth,
        address: patient.address,
        phoneNumber: patient.phoneNumber
        
    };
    return patientInfo.update(updatePatient, { where: { id: id } });
}
module.exports = patientDao;