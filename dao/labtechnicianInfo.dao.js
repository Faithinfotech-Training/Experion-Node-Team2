const labtechnicianInfo = require('../models/labtechnicianInfo');

function findAll() {
    return labtechnicianInfo.findAll();
}

function findById(labtechnicianId) {
    return labtechnicianInfo.findByPk(labtechnicianId);
}

function deleteById(labtechnicianId) {
    return labtechnicianInfo.destroy({ where: { labtechnicianId : labtechnicianId } });
}

function create(labtechnician) {
    var newlab = new labtechnicianInfo(labtechnician);
    return newlab.save();
}

function update(labtechnician, labtechnicianId) {
    var updateLabtech = {
        labtechnicianId : labtechnician.labtechnicianId,
        labtechnicianName : labtechnician.labtechnicianName,
       };
    return labtechnicianInfo.update(updateLabtech, { where: { labtechnicianId: labtechnicianId } });
}

var labtechnicianDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

module.exports = labtechnicianDao;