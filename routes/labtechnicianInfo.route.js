const express = require('express');
const router = express.Router();

const labtechnicianInfoController = require('../controller/labtechnicianInfo.controller');

router.post('/', labtechnicianInfoController.add);
router.get('/', labtechnicianInfoController.find);
router.get('/:labtechnicianId', labtechnicianInfoController.findById);
router.put('/:labtechnicianId', labtechnicianInfoController.update);
router.delete('/:labtechnicianId', labtechnicianInfoController.deleteById);

module.exports = router;