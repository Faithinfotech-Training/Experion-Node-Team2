const Doc_Dao = require('../dao/Doc.dao');
var Doc_controller = {
    add: add,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById
}

function add(req, res) {
    let Doctor  = req.body;
    Doc_Dao.create(Doctor).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findById(req, res) {
    Doc_Dao.findById(req.params.Doc_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    Doc_Dao.deleteById(req.params.Doc_id).
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
    Doc_Dao.update(req.body, req.params.Doc_id).
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
    Doc_Dao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = Doc_controller;