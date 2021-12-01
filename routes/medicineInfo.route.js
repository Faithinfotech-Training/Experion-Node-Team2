const express = require('express');
const router = express.Router();

const medicineInfoController = require('../controller/medicineInfo.controller');

router.post('/', medicineInfoController.addMedicine_info);
router.get('/', medicineInfoController.findMedicine_infos);
router.get('/:medicine_id', medicineInfoController.findMedicine_infoById);
router.put('/:medicine_id', medicineInfoController.updateMedicine_info);
router.delete('/:medicine_id', medicineInfoController.deleteById);

module.exports = router;