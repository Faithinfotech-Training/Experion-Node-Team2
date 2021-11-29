const express = require('express');
const router = express.Router();
const billController = require('../controller/billInfo.controller');

router.post('/', billController .addBills);
router.get('/', billController .findBills);
router.get('/:id', billController.findBillById);
router.put('/:id', billController.updateBill);
router.delete('/:id', billController.deleteById);

module.exports = router;