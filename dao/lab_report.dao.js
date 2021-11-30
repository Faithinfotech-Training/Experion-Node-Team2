const Lab_report = require('../models/Lab_report');
var lab_reportDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateLab_report: updateLab_report
}

function findAll() {
    return Lab_report.findAll();
}

function findById(report_id) {
    return Lab_report.findByPk(report_id);
}

function deleteById(report_id) {
    return Lab_report.destroy({ where: { report_id: report_id } });
}

function create(lab_report) {
    var newLab_report = new Lab_report(lab_report);
    return newLab_report.save();
}

function updateLab_report(lab_report, report_id) {
    var updateLab_report = {
        report_id: lab_report.report_id,
        report_title: lab_report.report_title,
        description: lab_report.description,
        report_date: lab_report.report_date,
        patient_id: lab_report.patient_id,
        doctor_id: lab_report.doctor_id,
        clinic_id: lab_report.clinic_id,
        lab_techmician_id: lab_report.lab_techmician_id
    };
    return Lab_report.update(updateLab_report, { where: { report_id: report_id } });
}
module.exports = lab_reportDao;