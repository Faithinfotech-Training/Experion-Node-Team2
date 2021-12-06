const express = require('express');
const router = express.Router();

const medicineController=require('../controller/medicineInfo.controller');

router.post('/', medicineController.addMedicine);
router.get('/', medicineController.findMedicine);
router.get('/:medicineId', medicineController.findMedicineById);
router.put('/:medicineId', medicineController.updateMedicine);
router.delete('/:medicineId', medicineController.deleteById);
router.get('/bydate/:dateMedicine',medicineController.findMedicineByDate);

module.exports = router;