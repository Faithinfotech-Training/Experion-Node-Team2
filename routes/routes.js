const express = require('express');
const router = express.Router();
const adminRoutes = require('./adminInfo.route');
const appoinmentRoutes = require('./appointmentInfo.route');
const billRoutes = require('./billInfo.route');
const doctorRoutes = require('./doctorInfo.route');
const frontofficeRoutes = require('./frontofficeInfo.route');
const labtechnicianRoutes = require('./labtechnicianInfo.route');
const medicineRoutes = require('./medicineInfo.route');
const patientRoutes = require('./patientInfo.route');
const prescriptionRoutes = require('./prescriptionInfo.route');


const roleRoutes = require('./role.route');
const userRoutes = require('./user.route');
const labtechnicianRoutes1 = require('./labreport.route');
const priscriptionMedicineRoute=require('./prescriptionmedicine.route');
const testDetailRoute = require('./testdetails.route');
const testInfoRoute = require('./testinfo.route');
const staffRoutes = require('./staffInfo.route');



router.use('/admins', adminRoutes);
router.use('/appointments', appoinmentRoutes);
router.use('/bills', billRoutes);
router.use('/doctors', doctorRoutes);
router.use('/frontofficers', frontofficeRoutes);
router.use('/labtechs', labtechnicianRoutes);
router.use('/medicines',medicineRoutes);
router.use('/patients', patientRoutes);
router.use('/Prescriptions',prescriptionRoutes);



router.use('/roles', roleRoutes);
router.use('/users', userRoutes);
router.use('/LabReport', labtechnicianRoutes1);


router.use('/PrescriptionMedicine',priscriptionMedicineRoute);
router.use('/TestDetailInfo',testDetailRoute);
router.use('/TestInfo',testInfoRoute);
router.use('/staffs', staffRoutes);




module.exports = router;