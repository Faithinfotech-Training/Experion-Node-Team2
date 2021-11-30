const docDao = require('../dao/doctorInfo.dao');
var docController = {
    add: add,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById
}

function add(req, res) {
    let doctor  = req.body;
    docDao.create(doctor).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findById(req, res) {
    docDao.findById(req.params.doctorId).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    docDao.deleteById(req.params.doctorId).
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
    docDao.update(req.body, req.params.doctorId).
        then((data) => {
            res.status(200).json({
                message: "Doctor updated successfully",
                doctor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function find(req, res) {
    docDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = docController;