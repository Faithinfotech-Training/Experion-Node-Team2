const prescription_medicineDao = require('../dao/prescription_medicine.dao');
var prescription_medicineController = {
    addPrescription_medicine: addPrescription_medicine,
    findPrescription_medicines: findPrescription_medicines,
    findPrescription_medicineById: findPrescription_medicineById,
    updatePrescription_medicine: updatePrescription_medicine,
    deleteById: deleteById
}

function addPrescription_medicine(req, res) {
    let prescription_medicine = req.body;
    prescription_medicineDao.create(prescription_medicine).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPrescription_medicineById(req, res) {
    prescription_medicineDao.findById(req.params.prescription_med_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    prescription_medicineDao.deleteById(req.params.prescription_med_id).
        then((data) => {
            res.status(200).json({
                message: "prescription_medicine deleted successfully",
                prescription_medicine: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updatePrescription_medicine(req, res) {
    prescription_medicineDao.updatePrescription_medicine(req.body, req.params.prescription_med_id).
        then((data) => {
            res.status(200).json({
                message: "prescription_medicine updated successfully",
                prescription_medicine: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPrescription_medicines(req, res) {
    prescription_medicineDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = prescription_medicineController;