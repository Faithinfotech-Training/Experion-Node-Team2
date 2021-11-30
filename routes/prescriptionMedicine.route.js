const express = require('express');
const router = express.Router();

const prescription_medicineController=require('../controller/prescription_medicine.controller');

router.post('/', prescription_medicineController.addPrescription_medicine);
router.get('/', prescription_medicineController.findPrescription_medicines);
router.get('/:prescription_id', prescription_medicineController.findPrescription_medicineById);
router.put('/:prescription_id', prescription_medicineController.updatePrescription_medicine);
router.delete('/:prescription_id', prescription_medicineController.deleteById);

module.exports = router;