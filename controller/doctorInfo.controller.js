const doctorInfoDao = require('../dao/doctorInfo.dao');

function add(req, res) {
    let Doctor  = req.body;
    doctorInfoDao.create(Doctor).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findById(req, res) {
    doctorInfoDao.findById(req.params.doctorId).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    doctorInfoDao.deleteById(req.params.doctorId).
        then((data) => {
            res.status(200).json({
                message: "Doctor deleted successfully",
                dept: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function update(req, res) {
    doctorInfoDao.update(req.body, req.params.doctorId).
        then((data) => {
            res.status(200).json({
                message: "Doctor updated successfully",
                Doctor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function find(req, res) {
    doctorInfoDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}
var doctorInfoController = {
    add: add,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById
}

module.exports = doctorInfoController;