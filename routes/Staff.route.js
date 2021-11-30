const express = require('express');
const router = express.Router();

const Staff_Controller=require('../controller/Staff.controller');

router.post('/', Staff_Controller.add);
router.get('/', Staff_Controller.find);
router.get('/:Staff_id', Staff_Controller.findById);
router.put('/:Staff_id', Staff_Controller.update);
router.delete('/:Staff_id', Staff_Controller.deleteById);

module.exports = router;