const express = require('express');
const router = express.Router();

const roleRoutes = require('./role.route');
const userRoutes = require('./user.route');
const usersRoutes = require('./users.route')
const staffRoutes = require('./staffInfo.route');
const testsRoutes = require('./testsInfo.route');
const labreportRoutes = require('./labreportInfo.route');
const billRoutes = require('./billinfo.route')
const patientRoutes = require('./patientInfo.route')
const medicineRoutes = require('./medicine.route')
const appointmentRoutes = require('./appointmentInfo.route')


router.use('/roles', roleRoutes);
router.use('/users', userRoutes);
router.use('/userss', usersRoutes);
router.use('/staffs', staffRoutes);
router.use('/tests', testsRoutes);
router.use('/reports', labreportRoutes);
router.use('/bills', billRoutes);
router.use('/patients', patientRoutes);
router.use('/medicines', medicineRoutes);
router.use('/appointments',appointmentRoutes);

module.exports = router;