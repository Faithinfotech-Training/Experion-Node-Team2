const frontDao = require('../dao/frontOfficeInfo.dao');
var frontController = {
    add: add,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById
}

function add(req, res) {
    let frontOffice  = req.body;
    frontDao.create(frontOffice).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findById(req, res) {
    frontDao.findById(req.params.frontId).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    frontDao.deleteById(req.params.frontId).
        then((data) => {
            res.status(200).json({
                message: "Front Office deleted successfully",
                dept: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function update(req, res) {
    frontDao.update(req.body, req.params.frontId).
        then((data) => {
            res.status(200).json({
                message: "Front Office updated successfully",
                Doctor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function find(req, res) {
    frontDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = frontController;