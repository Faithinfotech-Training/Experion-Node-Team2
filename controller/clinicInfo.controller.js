
const clinicDao = require('../dao/clinicInfo.dao');
var clinicController = {
    addClinics: addClinics,
    findClinics: findClinics,
    findClinicById: findClinicById,
    updateClinic: updateClinic,
    deleteById: deleteById
}

function addClinics(req, res) {
    let clinic = req.body;
    clinicDao.create(clinic).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findClinicById(req, res) {
    clinicDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    clinicDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Clinic deleted successfully",
                clinic: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateClinic(req, res) {
    clinicDao.updateClinic(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Clinic updated successfully",
                clinic: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findClinics(req, res) {
    clinicDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = clinicController;