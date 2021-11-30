const prescription_infoDao = require('../dao/lab_report.dao');
var prescription_infoController = {
    addPrescription_info: addPrescription_info,
    findPrescription_infos: findPrescription_infos,
    findPrescription_infoById: findPrescription_infoById,
    updatePrescription_info: updatePrescription_info,
    deleteById: deleteById
}

function addPrescription_info(req, res) {
    let prescription_info = req.body;
    prescription_infoDao.create(prescription_info).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPrescription_infoById(req, res) {
    prescription_infoDao.findById(req.params.prescription_info_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    prescription_infoDao.deleteById(req.params.prescription_info_id).
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
    prescription_infoDao.updatePrescription_info(req.body, req.params.prescription_info_id).
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
    prescription_infoDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = prescription_infoController;