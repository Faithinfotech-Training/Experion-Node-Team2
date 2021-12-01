const prescriptionInfo = require('../models/prescriptionInfo');

function findAll() {
    return prescriptionInfo.findAll();
}

function findById(prescriptionId) {
    return prescriptionInfo.findByPk(prescriptionId);
}

function deleteById(prescriptionId) {
    return prescriptionInfo.destroy({ where: { prescriptionId: prescriptionId } });
}

function create(prescriptionInfo) {
    var newPrescription = new prescriptionInfo(prescriptionInfo);
    return newPrescription.save();
}

function updatePrescription_info(prescriptionInfo, prescriptionId) {
    var updatePrescription_info = {
       prescriptionId : prescriptionInfo.prescriptionId,
       prescription_date : prescriptionInfo.prescription_date,
       doctor_notes: prescriptionInfo.doctor_notes,
      test_details : prescriptionInfo.test_details,
       medicine_id : prescriptionInfo.medicine_id,
       doctor_id:prescriptionInfo.doctor_id,
       patient_id:prescriptionInfo.patient_id,

    };
    return prescriptionInfo.update(updatePrescription_info, { where: { prescriptionId: prescriptionId } });
}

var prescriptionInfoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePrescription_info: updatePrescription_info
}

module.exports = prescriptionInfoDao;