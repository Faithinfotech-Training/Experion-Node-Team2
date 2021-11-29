const billInfo = require('../models/billInfo');
var billDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateBill: updateBill
}

function findAll() {
    return billInfo.findAll();
}

function findById(id) {
    return billInfo.findByPk(id);
}

function deleteById(id) {
    return billInfo.destroy({ where: { id: id } });
}

function create(bill) {
    var newBill = new billInfo(bill);
    return newBill.save();
}

function updateBill(bill, id) {
    var updateBill = {
        billDate: bill.billDate,
        billAmount: bill.billAmount,
        patientId: bill.patientId
        
    };
    return billInfo.update(updateBill, { where: { id: id } });
}
module.exports = billDao;