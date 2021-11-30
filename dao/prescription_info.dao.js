const Prescription_info = require('../models/Prescription_info');
var prescription_infoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePrescription_info: updatePrescription_info
}

function findAll() {
    return Prescription_info.findAll();
}

function findById(prescription_info_id) {
    return Prescription_info.findByPk(prescription_info_id);
}

function deleteById(prescription_info_id) {
    return Prescription_info.destroy({ where: { prescription_info_id: prescription_info_id } });
}

function create(prescription_info) {
    var newPrescription_info = new Prescription_info(prescription_info);
    return newPrescription_info.save();
}

function updatePrescription_info(prescription_info, prescription_info_id) {
    var updatePrescription_info = {
        first_name : prescription_info.first_name,
        last_name : prescription_info.last_name,
        email: prescription_info.email,
        password : prescription_info.password,
        joining_date : prescription_info.joining_date,
        mobile_no:prescription_info.mobile_no
    };
    return Prescription_info.update(updatePrescription_info, { where: { prescription_info_id: prescription_info_id } });
}
module.exports = prescription_infoDao;