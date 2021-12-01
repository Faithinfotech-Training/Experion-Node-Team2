const frontofficeDao = require('../dao/frontofficeInfo.dao');

function add(req, res) {
    let frontofficer  = req.body;
    frontofficeDao.create(frontofficer).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findById(req, res) {
    frontofficeDao.findById(req.params.frontofficeId).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    frontofficeDao.deleteById(req.params.frontofficeId).
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
    frontofficeDao.update(req.body, req.params.frontofficeId).
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
    frontofficeDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

var frontOfficeController = {
    add: add,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById
}


module.exports = frontOfficeController;