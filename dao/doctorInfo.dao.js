const doctorInfo = require('../models/DoctorInfo');

function findAll() {
    return doctorInfo.findAll();
}

function findById(doctorId) {
    return doctorInfo.findByPk(doctorId);
}

function deleteById(doctorId) {
    return doctorInfo.destroy({ where: { doctorId: doctorId } });
}

function create(Doctor) {
    var newDoc = new doctorInfo(Doctor);
    return newDoc.save();
}

function update(Doctor, doctorId) {
    var updateDoctorInfo = {
        doctorId : Doctor.doctorId,
        doctorName : Doctor.doctorName,
       };
    return doctorInfo.update(updateDoctorInfo, { where: { doctorId: doctorId } });
}

var doctorInfoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

module.exports = doctorInfoDao;