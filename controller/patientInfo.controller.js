
const patientDao = require('../dao/patientInfo.dao');
var patientController = {
    addPatients: addPatients,
    findPatients: findPatients,
    findPatientById: findPatientById,
    updatePatient: updatePatient,
    deleteById: deleteById
}

function addPatients(req, res) {
    let Patient = req.body;
    patientDao.create(Patient).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPatientById(req, res) {
    patientDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    patientDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Patient deleted successfully",
                patient: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updatePatient(req, res) {
    patientDao.updatePatient(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Patient updated successfully",
                patient: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPatients(req, res) {
    patientDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = patientController;