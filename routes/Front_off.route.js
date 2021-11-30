const express = require('express');
const router = express.Router();

const Front_off_Controller=require('../controller/Front_off.controller');

router.post('/', Front_off_Controller.add);
router.get('/', Front_off_Controller.find);
router.get('/:Front_off_id', Front_off_Controller.findById);
router.put('/:Front_off_id', Front_off_Controller.update);
router.delete('/:Front_off_id', Front_off_Controller.deleteById);

module.exports = router;