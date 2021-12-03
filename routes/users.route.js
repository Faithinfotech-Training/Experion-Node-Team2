const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.controller');

router.post('/registers', usersController.registerUser);
router.post('/logins', usersController.loginUser);
router.get('/', (req, res) => {
    res.status(200).send('This is an authentication server');
});


module.exports = router;