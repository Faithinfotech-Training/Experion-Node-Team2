const express = require('express');
const router = express.Router();

const medicine_infoController = require('../controller/medicine_info.controller');

router.post('/', medicine_infoController.addMedicine_info);
router.get('/', medicine_infoController.findMedicine_infos);
router.get('/:medicine_id', medicine_infoController.findMedicine_infoById);
router.put('/:medicine_id', medicine_infoController.updateMedicine_info);
router.delete('/:medicine_id', medicine_infoController.deleteById);

module.exports = router;