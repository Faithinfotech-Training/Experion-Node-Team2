const express = require('express');
const router = express.Router();
const adminRoutes = require('./admin.route');
const appoinmentRoutes = require('./appointment.route');
const billRoutes = require('./bill.route');
const clinicRoutes = require('./clinic.route');
const patientRoutes = require('./patient.route');
const roleRoutes = require('./role.route');
const userRoutes = require('./user.route');



router.use('/admins', adminRoutes);
router.use('/appointments', appoinmentRoutes);
router.use('/bills', billRoutes);
router.use('/clinics', clinicRoutes);
router.use('/patients', patientRoutes);
router.use('/roles', roleRoutes);
router.use('/users', userRoutes);

module.exports = router;
