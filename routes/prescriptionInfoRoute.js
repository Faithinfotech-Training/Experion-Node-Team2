const express = require('express');
const router = express.Router();

const prescription_infoController=require('../controller/prescription_info.controller');

router.post('/', prescription_infoController.addPrescription_info);
router.get('/', prescription_infoController.findPrescription_infos);
router.get('/:prescription_info_id', prescription_infoController.findPrescription_infoById);
router.put('/:prescription_info_id', prescription_infoController.updatePrescription_info);
router.delete('/:prescription_info_id', prescription_infoController.deleteById);

module.exports = router;