const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentInfo.controller');

router.post('/', appointmentController.addAppointments);
router.get('/', appointmentController.findAppointments);
router.get('/:id',appointmentController.findAppointmentById);
router.put('/:id', appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteById);

module.exports = router;