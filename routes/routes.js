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
const Front_off=require('./Front_off.route');
const Doctor=require('./Doc.route');
const Dept= require('./Dept.route');



router.use('/admins', adminRoutes);
router.use('/appointments', appoinmentRoutes);
router.use('/bills', billRoutes);
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
router.use('/Front_off_info',Front_off);
router.use('/Doctor_info',Doctor);
router.use('/Dept_info',Dept);

module.exports = router;