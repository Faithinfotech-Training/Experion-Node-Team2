const Dept_Dao = require('../dao/dept.dao');
var dept_controller = {
    add: add,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById
}

function add(req, res) {
    let dept  = req.body;
    Dept_Dao.create(dept).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findById(req, res) {
    Dept_Dao.findById(req.params.Dept_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    Dept_Dao.deleteById(req.params.Dept_id).
        then((data) => {
            res.status(200).json({
                message: "Department deleted successfully",
                dept: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function update(req, res) {
    Dept_Dao.update(req.body, req.params.Dept_id).
        then((data) => {
            res.status(200).json({
                message: "Department updated successfully",
                dept: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function find(req, res) {
    Dept_Dao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = dept_controller;