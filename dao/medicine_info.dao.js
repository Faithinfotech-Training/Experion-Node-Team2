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
        first_name : medicine_info.first_name,
        last_name : medicine_info.last_name,
        email: medicine_info.email,
        password : medicine_info.password,
        joining_date : medicine_info.joining_date,
        mobile_no:medicine_info.mobile_no
    };
    return Medicine_info.update(updateMedicine_info, { where: { medicine_id: medicine_id } });
}
module.exports = medicine_infoDao;