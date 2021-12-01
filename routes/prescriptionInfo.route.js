const express = require('express');
const router = express.Router();

const prescriptionInfoController=require('../controller/prescriptionInfo.controller');

router.post('/', prescriptionInfoController.addPrescription_info);
router.get('/', prescriptionInfoController.findPrescription_infos);
router.get('/:prescription_info_id', prescriptionInfoController.findPrescription_infoById);
router.put('/:prescription_info_id', prescriptionInfoController.updatePrescription_info);
router.delete('/:prescription_info_id', prescriptionInfoController.deleteById);

module.exports = router;