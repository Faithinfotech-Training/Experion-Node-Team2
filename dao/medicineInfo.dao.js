const medicineInfo = require('../models/medicineInfo');

function findAll() {
    return medicineInfo.findAll();
}

function findById(medicineId) {
    return medicineInfo.findByPk(medicineId);
}

function deleteById(medicineId) {
    return medicineInfo.destroy({ where: { medicineId: medicineId } });
}

function create(medicineInfo) {
    var newMedicineInfo = new medicineInfo(medicineInfo);
    return newMedicineInfo.save();
}

function updateMedicine_info(medicineInfo, medicineId) {
    var updateMedicine_info = {
        medicineId : medicineInfo.medicineId,
        medicineName : medicineInfo.medicineName,
        medicineCompany: medicineInfo.medicineCompany,
        amount : medicineInfo.Amount,
        manufactureDate: medicineInfo.manufactureDate,
        expiryDate:medicineInfo.expiryDate,
        medicineDosage:medicineInfo.medicineDosage
    };
    return medicineInfo.update(updateMedicineInfo, { where: { medicineId: medicineId } });
}

var medicineInfoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateMedicine_info: updateMedicine_info
}

module.exports = medicineInfoDao;