const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminInfo.controller');

router.post('/', adminController.addAdmins);
router.get('/', adminController.findAdmins);
router.get('/:adminId', adminController.findAdminById);
router.put('/:adminId', adminController.updateAdmin);
router.delete('/:adminId', adminController.deleteById);

module.exports = router;