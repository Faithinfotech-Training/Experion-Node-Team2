const express = require('express');
const router = express.Router();

const Doc_Controller=require('../controller/Doc.controller');

router.post('/', Doc_Controller.add);
router.get('/', Doc_Controller.find);
router.get('/:Doc_id', Doc_Controller.findById);
router.put('/:Doc_id', Doc_Controller.update);
router.delete('/:Doc_id', Doc_Controller.deleteById);

module.exports = router;