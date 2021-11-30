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

function findById(prescription_med_id) {
    return Prescription_medicine.findByPk(prescription_med_id);
}

function deleteById(prescription_med_id) {
    return Prescription_medicine.destroy({ where: { prescription_med_id: prescription_med_id } });
}

function create(prescription_medicine) {
    var newPrescription_medicine = new Prescription_medicine(prescription_medicine);
    return newPrescription_medicine.save();
}

function updatePrescription_medicine(prescription_medicine, prescription_med_id) {
    var updatePrescription_medicine = {
        prescription_med_id : prescription_medicine.prescription_med_id,
        medicine_id : prescription_medicine.medicine_id,
        dosage_frequency: prescription_medicine.dosage_frequency,
        no_of_days : prescription_medicine.no_of_days,
        prescription_id : prescription_medicine.prescription_id,

    };
    return Prescription_medicine.update(updatePrescription_medicine, { where: { prescription_med_id: prescription_med_id } });
}
module.exports = prescription_medicineDao;