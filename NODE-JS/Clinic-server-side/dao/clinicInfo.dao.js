const clinicInfo = require('../models/clinicInfo');
var clinicDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateClinic: updateClinic
}

function findAll() {
    return clinicInfo.findAll();
}

function findById(id) {
    return clinicInfo.findByPk(id);
}

function deleteById(id) {
    return clinicInfo.destroy({ where: { id: id } });
}

function create(clinic) {
    var newClinic = new clinicInfo(clinic);
    return newClinic.save();
}

function updateClinic(clinic, id) {
    var updateClinic = {
        clinicName: clinic.clinicName,
        clinicAddress: clinic.clinicAddress,
        clinicPhone: clinic.clinicPhone
        
    };
    return clinicInfo.update(updateClinic, { where: { id: id } });
}
module.exports = clinicDao;