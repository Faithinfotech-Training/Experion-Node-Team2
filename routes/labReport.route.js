const express = require('express');
const router = express.Router();

const lab_reportController = require('../controller/lab_report.controller');

router.post('/', lab_reportController.addLab_report);
router.get('/', lab_reportController.findLab_reports);
router.get('/:report_id', lab_reportController.findLab_reportById);
router.put('/:report_id', lab_reportController.updateLab_report);
router.delete('/:report_id', lab_reportController.deleteById);

module.exports = router;