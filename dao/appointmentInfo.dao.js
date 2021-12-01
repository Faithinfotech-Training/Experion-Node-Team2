const appointmentInfo = require('../models/appointmentInfo');

function findAll() {
    return appointmentInfo.findAll();
}

function findById(appointmentId) {
    return appointmentInfo.findByPk(appointmentId);
}

function deleteById(appointmentId) {
    return appointmentInfo.destroy({ where: { appointmentId: appointmentId } });
}

function create(appointment) {
    var newAppointment = new appointmentInfo(appointment);
    return newAppointment.save();
}

function updateAppointment(appointment, appointmentId) {
    var updateAppointment = {
        appointmentDate: appointment.appointmentDate,
        appointmentTime: appointment.appointmentTime,
        amount:appointment.amount,
        patientId:appointment.patientId,
        doctorId:appointment.doctorId
        
    };
    return appointmentInfo.update(updateAppointment, { where: { appointmentId: appointmentId } });
}

var appointmentDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateAppointment: updateAppointment
}

module.exports = appointmentDao;