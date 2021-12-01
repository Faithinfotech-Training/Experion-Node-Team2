const labtechnicianDao = require('../dao/labtechnicianInfo.dao');

function add(req, res) {
    let labTechnician  = req.body;
    labtechnicianDao.create(labTechnician).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findById(req, res) {
    labtechnicianDao.findById(req.params.labtechnicianId).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    labtechnicianDao.deleteById(req.params.labtechnicianId).
        then((data) => {
            res.status(200).json({
                message: "Lab Technician deleted successfully",
                dept: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function update(req, res) {
    labtechnicianDao.update(req.body, req.params.labtechnicianId).
        then((data) => {
            res.status(200).json({
                message: "Lab Technician updated successfully",
                Doctor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function find(req, res) {
    labtechnicianDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}
var labtechnicianInfoController = {
    add: add,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById
}

module.exports = labtechnicianInfoController;