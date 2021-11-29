const express = require('express');
const router = express.Router();
const clinicController = require('../controller/clinicInfo.controller');

router.post('/', clinicController.addClinics);
router.get('/', clinicController.findClinics);
router.get('/:id', clinicController.findClinicById);
router.put('/:id', clinicController.updateClinic);
router.delete('/:id', clinicController.deleteById);

module.exports = router;