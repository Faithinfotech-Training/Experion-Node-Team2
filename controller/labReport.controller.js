const lab_reportDao = require('../dao/labReport.dao');
var lab_reportController = {
    addLab_report: addLab_report,
    findLab_reports: findLab_reports,
    findLab_reportById: findLab_reportById,
    updateLab_report: updateLab_report,
    deleteById: deleteById
}

function addLab_report(req, res) {
    let lab_report = req.body;
    lab_reportDao.create(lab_report).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findLab_reportById(req, res) {
    lab_reportDao.findById(req.params.report_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    lab_reportDao.deleteById(req.params.report_id).
        then((data) => {
            res.status(200).json({
                message: "lab_report deleted successfully",
                lab_report: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateLab_report(req, res) {
    lab_reportDao.updateLab_report(req.body, req.params.report_id).
        then((data) => {
            res.status(200).json({
                message: "lab_report updated successfully",
                lab_report: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findLab_reports(req, res) {
    lab_reportDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = lab_reportController;