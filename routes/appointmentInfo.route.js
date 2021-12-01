const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentInfo.controller');

router.post('/', appointmentController.addAppointments);
router.get('/', appointmentController.findAppointments);
router.get('/:appointmentId',appointmentController.findAppointmentById);
router.put('/:appointmentId', appointmentController.updateAppointment);
router.delete('/:appointmentId', appointmentController.deleteById);

module.exports = router;