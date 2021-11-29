const appointmentInfo = require('../models/appointmentInfo');
var appointmentDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateAppointment: updateAppointment
}

function findAll() {
    return appointmentInfo.findAll();
}

function findById(id) {
    return appointmentInfo.findByPk(id);
}

function deleteById(id) {
    return appointmentInfo.destroy({ where: { id: id } });
}

function create(appointment) {
    var newAppointment = new appointmentInfo(appointment);
    return newAppointment.save();
}

function updateAppointment(appointment, id) {
    var updateAppointment = {
        appointmentDate: appointment.appointmentDate,
        appointmentTime: appointment.appointmentTime,
        amount:appointment.amount,
        patientId:appointment.patientId,
        doctorId:appointment.doctorId
        
    };
    return appointmentInfo.update(updateAppointment, { where: { id: id } });
}
module.exports = appointmentDao;