const Frontoff_Dao = require('../dao/Frontoff.dao');
var Front_Off_controller = {
    add: add,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById
}

function add(req, res) {
    let Front_off  = req.body;
    Frontoff_Dao.create(Front_off).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findById(req, res) {
    Frontoff_Dao.findById(req.params.Front_off_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    Frontoff_Dao.deleteById(req.params.Front_off_id).
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
    Frontoff_Dao.update(req.body, req.params.Front_off_id).
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
    Frontoff_Dao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = Front_Off_controller;