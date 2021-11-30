const express = require('express');
const router = express.Router();

const deptController=require('../controller/departmentInfo.controller');

router.post('/', deptController.add);
router.get('/', deptController.find);
router.get('/:deptId', deptController.findById);
router.put('/:deptId', deptController.update);
router.delete('/:deptId', deptController.deleteById);

module.exports = router;