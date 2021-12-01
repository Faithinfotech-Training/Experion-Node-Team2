const express = require('express');
const router = express.Router();
const test_infoController = require('../controller/testInfo.controller');

router.post('/', test_infoController.addTest_info);
router.get('/', test_infoController.findTest_infos);
router.get('/:test_info_id', test_infoController.findTest_infoById);
router.put('/:test_info_id', test_infoController.updateTest_info);
router.delete('/:test_info_id', test_infoController.deleteById);

module.exports = router;