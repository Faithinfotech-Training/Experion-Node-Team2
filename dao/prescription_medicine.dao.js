const Prescription_medicine = require('../models/Prescription_medicine');
var prescription_medicineDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePrescription_medicine: updatePrescription_medicine
}

function findAll() {
    return Prescription_medicine.findAll();
}

function findById(prescription_id) {
    return Prescription_medicine.findByPk(prescription_id);
}

function deleteById(prescription_id) {
    return Prescription_medicine.destroy({ where: { prescription_id: prescription_id } });
}

function create(prescription_medicine) {
    var newPrescription_medicine = new Prescription_medicine(prescription_medicine);
    return newPrescription_medicine.save();
}

function updatePrescription_medicine(prescription_medicine, prescription_id) {
    var updatePrescription_medicine = {
        first_name : prescription_medicine.first_name,
        last_name : prescription_medicine.last_name,
        email: prescription_medicine.email,
        password : prescription_medicine.password,
        joining_date : prescription_medicine.joining_date,
        mobile_no:prescription_medicine.mobile_no
    };
    return Prescription_medicine.update(updatePrescription_medicine, { where: { prescription_id: prescription_id } });
}
module.exports = prescription_medicineDao;