
const appointmentDao = require('../dao/appointmentInfo.dao');

function addAppointments(req, res) {
    let appointment = req.body;
    appointmentDao.create(appointment).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAppointmentById(req, res) {
    appointmentDao.findById(req.params.appointmentId).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    appointmentDao.deleteById(req.params.appointmentId).
        then((data) => {
            res.status(200).json({
                message: "Appointment deleted successfully",
                appointment: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateAppointment(req, res) {
    appointmentDao.updateAppointment(req.body, req.params.appointmentId).
        then((data) => {
            res.status(200).json({
                message: "Appointment updated successfully",
                appointment: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAppointments(req, res) {
    appointmentDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

var appointmentController = {
    addAppointments: addAppointments,
    findAppointments: findAppointments,
    findAppointmentById: findAppointmentById,
    updateAppointment: updateAppointment,
    deleteById: deleteById
}

module.exports = appointmentController;