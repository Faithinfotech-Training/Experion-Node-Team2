const adminDao = require('../dao/adminInfo.dao');
var adminController = {
    addAdmins: addAdmins,
    findAdmins: findAdmins,
    findAdminById: findAdminById,
    updateAdmin: updateAdmin,
    deleteById: deleteById
}

function addAdmins(req, res) {
    let admin = req.body;
    adminDao.create(admin).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAdminById(req, res) {
    adminDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    adminDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Admin deleted successfully",
                admin: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateAdmin(req, res) {
    adminDao.updateAdmin(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Admin updated successfully",
                admin: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAdmins(req, res) {
    adminDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = adminController;