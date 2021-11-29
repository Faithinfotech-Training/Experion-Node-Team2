const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminInfo.controller');

router.post('/', adminController.addAdmins);
router.get('/', adminController.findAdmins);
router.get('/:id', adminController.findAdminById);
router.put('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteById);

module.exports = router;