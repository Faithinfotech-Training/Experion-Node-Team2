const express = require('express');
const router = express.Router();

const lab_reportController = require('../controller/lab_report.controller');
const medicine_infoController = require('../controller/medicine_info.controller');
const prescription_infoController=require('../controller/prescription_info.controller');
const prescription_medicineController=require('../controller/prescription_medicine.controller');
const test_detail_infoController = require('../controller/test_detail_info.controller');
const test_infoController = require('../controller/test_info.controller');

//routes for lab report
router.post('/', lab_reportController.addLab_report);
router.get('/', lab_reportController.findLab_reports);
router.get('/:report_id', lab_reportController.findLab_reportById);
router.put('/:report_id', lab_reportController.updateLab_report);
router.delete('/:report_id', lab_reportController.deleteById);

//routes for medicine info
router.post('/', medicine_infoController.addMedicine_info);
router.get('/', medicine_infoController.findMedicine_infos);
router.get('/:medicine_id', medicine_infoController.findMedicine_infoById);
router.put('/:medicine_id', medicine_infoController.updateMedicine_info);
router.delete('/:medicine_id', medicine_infoController.deleteById);

//routes for prescription info
router.post('/', prescription_infoController.addPrescription_info);
router.get('/', prescription_infoController.findPrescription_infos);
router.get('/:prescription_info_id', prescription_infoController.findPrescription_infoById);
router.put('/:prescription_info_id', prescription_infoController.updatePrescription_info);
router.delete('/:prescription_info_id', prescription_infoController.deleteById);

//routes for prescription medicine info
router.post('/', prescription_medicineController.addPrescription_medicine);
router.get('/', prescription_medicineController.findPrescription_medicines);
router.get('/:prescription_id', prescription_medicineController.findPrescription_medicineById);
router.put('/:prescription_id', prescription_medicineController.updatePrescription_medicine);
router.delete('/:prescription_id', prescription_medicineController.deleteById);

//routes for test detail info
router.post('/', test_detail_infoController.addTest_detail_info);
router.get('/', test_detail_infoController.findTest_detail_infos);
router.get('/:test_id', test_detail_infoController.findTest_detail_infoById);
router.put('/:test_id', test_detail_infoController.updateTest_detail_info);
router.delete('/:test_id', test_detail_infoController.deleteById);

//routes for test info
router.post('/', test_infoController.addTest_info);
router.get('/', test_infoController.findTest_infos);
router.get('/:test_info_id', test_infoController.findTest_infoById);
router.put('/:test_info_id', test_infoController.updateTest_info);
router.delete('/:test_info_id', test_infoController.deleteById);


module.exports = router;