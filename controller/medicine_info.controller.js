const medicine_infoDao = require('../dao/lab_report.dao');
var medicine_infoController = {
    addMedicine_info: addMedicine_info,
    findMedicine_infos: findMedicine_infos,
    findMedicine_infoById: findMedicine_infoById,
    updateMedicine_info: updateMedicine_info,
    deleteById: deleteById
}

function addMedicine_info(req, res) {
    let medicine_info = req.body;
    medicine_infoDao.create(medicine_info).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMedicine_infoById(req, res) {
    medicine_infoDao.findById(req.params.medicine_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    medicine_infoDao.deleteById(req.params.medicine_id).
        then((data) => {
            res.status(200).json({
                message: "medicine_info deleted successfully",
                medicine_info: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateMedicine_info(req, res) {
    medicine_infoDao.updateMedicine_info(req.body, req.params.medicine_id).
        then((data) => {
            res.status(200).json({
                message: "medicine_info updated successfully",
                medicine_info: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMedicine_infos(req, res) {
    medicine_infoDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = medicine_infoController;