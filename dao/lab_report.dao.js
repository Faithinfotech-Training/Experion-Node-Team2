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
        first_name : lab_report.first_name,
        last_name : lab_report.last_name,
        email: lab_report.email,
        password : lab_report.password,
        joining_date : lab_report.joining_date,
        mobile_no:lab_report.mobile_no
    };
    return Lab_report.update(updateLab_report, { where: { report_id: report_id } });
}
module.exports = lab_reportDao;