const express = require('express');
const router = express.Router();
const patientController = require('../controller/patientInfo.controller');

router.post('/', patientController.addPatients);
router.get('/', patientController.findPatients);
router.get('/:id',patientController.findPatientById);
router.put('/:id', patientController.updatePatient);
router.delete('/:id', patientController.deleteById);

module.exports = router;