const express = require('express');
const router = express.Router();

const frontofficeController = require('../controller/frontofficeInfo.controller');

router.post('/', frontofficeController.add);
router.get('/', frontofficeController.find);
router.get('/:frontofficeId', frontofficeController.findById);
router.put('/:frontofficeId', frontofficeController.update);
router.delete('/:frontofficeId', frontofficeController.deleteById);

module.exports = router;