const express = require('express');
const router = express.Router();

const doctorInfoController = require('../controller/doctorInfo.controller');

router.post('/', doctorInfoController.add);
router.get('/', doctorInfoController.find);
router.get('/:doctorId', doctorInfoController.findById);
router.put('/:doctorId', doctorInfoController.update);
router.delete('/:doctorId', doctorInfoController.deleteById);

module.exports = router;