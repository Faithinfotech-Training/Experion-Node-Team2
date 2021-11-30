const express = require('express');
const router = express.Router();

const Lab_Tech_Controller=require('../controller/Lab_Tech.controller');

router.post('/', Lab_Tech_Controller.add);
router.get('/', Lab_Tech_Controller.find);
router.get('/:Lab_Tech_id', Lab_Tech_Controller.findById);
router.put('/:Lab_Tech_id', Lab_Tech_Controller.update);
router.delete('/:Lab_Tech_id', Lab_Tech_Controller.deleteById);

module.exports = router;