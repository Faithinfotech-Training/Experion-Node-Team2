const express = require('express');
const router = express.Router();

const test_detail_infoController = require('../controller/test_detail_info.controller');

router.post('/', test_detail_infoController.addTest_detail_info);
router.get('/', test_detail_infoController.findTest_detail_infos);
router.get('/:test_id', test_detail_infoController.findTest_detail_infoById);
router.put('/:test_id', test_detail_infoController.updateTest_detail_info);
router.delete('/:test_id', test_detail_infoController.deleteById);

module.exports = router;