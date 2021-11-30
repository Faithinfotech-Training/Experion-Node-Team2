const express = require('express');
const router = express.Router();

const frontController=require('../controller/frontOfficeInfo.controller');

router.post('/', frontController.add);
router.get('/', frontController.find);
router.get('/:frontId', frontController.findById);
router.put('/:frontId', frontController.update);
router.delete('/:frontId', frontController.deleteById);

module.exports = router;