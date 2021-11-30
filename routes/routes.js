const express = require('express');
const router = express.Router();
const adminRoutes = require('./admin.route');
const appoinmentRoutes = require('./appointment.route');
const billRoutes = require('./bill.route');
const clinicRoutes = require('./clinic.route');
const patientRoutes = require('./patient.route');
const roleRoutes = require('./role.route');
const userRoutes = require('./user.route');
const labRoute = require('./labReport.route');
const medicineRoute = require('./labReport.route');
const priscriptionInfoRoute=require('./prescriptionInfoRoute');
const priscriptionMedicineRoute=require('./prescriptionMedicine.route');
const testDetailRoute = require('./testDetails.route');
const testInfoRoute = require('./testInfo.route');
const staff = require('./Staff.route');
const Lab_Tech = require('./Lab_Tech.route');
const frontOffice=require('./frontOffice.route');
const doctor=require('./doctor.route');
const dept= require('./department.route');



router.use('/admin', adminRoutes);
router.use('/appointment', appoinmentRoutes);
router.use('/bill', billRoutes);
router.use('/clinics', clinicRoutes);
router.use('/patients', patientRoutes);
router.use('/roles', roleRoutes);
router.use('/users', userRoutes);
router.use('/labs', labRoute);
router.use('/medicines',medicineRoute);
router.use('/pres',priscriptionInfoRoute);
router.use('/presmedi',priscriptionMedicineRoute);
router.use('/testdetail',testDetailRoute);
router.use('/test',testInfoRoute);
router.use('/Staff_info', staff);
router.use('/Lab_Tech_info',Lab_Tech);
router.use('/frontoffice',frontOffice);
router.use('/doctor',doctor);
router.use('/dept',dept);

module.exports = router;