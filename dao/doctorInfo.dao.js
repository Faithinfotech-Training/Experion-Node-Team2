const docInfo = require('../models/doctorInfo');
var docDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

function findAll() {
    return docInfo.findAll();
}

function findById(doctorId) {
    return docInfo.findByPk(doctorId);
}

function deleteById(doctorId) {
    return docInfo.destroy({ where: { doctorId: doctorId } });
}

function create(doctor) {
    var newDoctor = new docInfo(doctor);
    return newDoctor.save();
}

function update(doctor, doctorId) {
    var updateDoctorInfo = {
        doctorId : doctor.doctorId,
        doctorName : doctor.doctorName,
       };
    return docInfo.update(updateDoctorInfo, { where: { doctorId: doctorId } });
}
module.exports = docDao;