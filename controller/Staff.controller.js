const Staff_Dao = require('../dao/Frontoff.dao');
var Staff_controller = {
    add: add,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById
}

function add(req, res) {
    let Staffs  = req.body;
    Staff_Dao.create(Staffs).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findById(req, res) {
    Staff_Dao.findById(req.params.Staff_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    Staff_Dao.deleteById(req.params.Staff_id).
        then((data) => {
            res.status(200).json({
                message: "Staff deleted successfully",
                dept: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function update(req, res) {
    Staff_Dao. update(req.body, req.params.Staff_id).
        then((data) => {
            res.status(200).json({
                message: "Staff updated successfully",
                Doctor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function find(req, res) {
    Staff_Dao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = Staff_controller;