const express = require('express');
const router = express.Router();

const docController=require('../controller/doctorInfo.controller');

router.post('/', docController.add);
router.get('/', docController.find);
router.get('/:doctorId', docController.findById);
router.put('/:doctorId', docController.update);
router.delete('/:doctorId', docController.deleteById);

module.exports = router;