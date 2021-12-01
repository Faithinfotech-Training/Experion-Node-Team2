const prescriptionInfoDao = require('../dao/prescriptionInfo.dao');

function addPrescription_info(req, res) {
    let prescription_info = req.body;
    prescriptionInfoDao.create(prescription_info).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPrescription_infoById(req, res) {
    prescriptionInfoDao.findById(req.params.prescriptionId).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    prescriptionInfoDao.deleteById(req.params.prescriptionId).
        then((data) => {
            res.status(200).json({
                message: "prescription_info deleted successfully",
                prescription_info: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updatePrescription_info(req, res) {
    prescriptionInfoDao.updatePrescription_info(req.body, req.params.prescriptionId).
        then((data) => {
            res.status(200).json({
                message: "prescription_info updated successfully",
                prescription_info: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPrescription_infos(req, res) {
    prescriptionInfoDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

var prescriptionInfoController = {
    addPrescription_info: addPrescription_info,
    findPrescription_infos: findPrescription_infos,
    findPrescription_infoById: findPrescription_infoById,
    updatePrescription_info: updatePrescription_info,
    deleteById: deleteById
}

module.exports = prescriptionInfoController;