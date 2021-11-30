const Lab_Tech_Dao = require('../dao/Lab_Tech.dao');
var Lab_Tech_controller = {
    add: add,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById
}

function add(req, res) {
    let Lab_Tech  = req.body;
    Lab_Tech_Dao.create(Lab_Tech).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findById(req, res) {
    Lab_Tech_Dao.findById(req.params.Lab_Tech_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    Lab_Tech_Dao.deleteById(req.params.Lab_Tech_id).
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
    Lab_Tech_Dao.update(req.body, req.params.Lab_Tech_id).
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
    Lab_Tech_Dao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = Lab_Tech_controller;