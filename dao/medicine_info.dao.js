const Medicine_info = require('../models/Medicine_info');
var medicine_infoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateMedicine_info: updateMedicine_info
}

function findAll() {
    return Medicine_info.findAll();
}

function findById(medicine_id) {
    return Medicine_info.findByPk(medicine_id);
}

function deleteById(medicine_id) {
    return Medicine_info.destroy({ where: { medicine_id: medicine_id } });
}

function create(medicine_info) {
    var newMedicine_info = new Medicine_info(medicine_info);
    return newMedicine_info.save();
}

function updateMedicine_info(medicine_info, medicine_id) {
    var updateMedicine_info = {
        medicine_id : medicine_info.medicine_id,
        medicine_name : medicine_info.medicine_name,
        medicine_company: medicine_info.medicine_company,
        medicine_amount : medicine_info.medicine_amount,
        manufacturing_date: medicine_info.manufacturing_date,
        expiry_date:medicine_info.expiry_date,
        medicine_dosage:medicine_info.medicine_dosage
    };
    return Medicine_info.update(updateMedicine_info, { where: { medicine_id: medicine_id } });
}
module.exports = medicine_infoDao;