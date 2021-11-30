const express = require('express');
const router = express.Router();

const Dept_Controller=require('../controller/Dept.controller');

router.post('/', Dept_Controller.add);
router.get('/', Dept_Controller.find);
router.get('/:Dept_id', Dept_Controller.findById);
router.put('/:Dept_id', Dept_Controller.update);
router.delete('/:Dept_id', Dept_Controller.deleteById);

module.exports = router;