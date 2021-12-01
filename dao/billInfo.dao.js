const billInfo = require('../models/billInfo');

function findAll() {
    return billInfo.findAll();
}

function findById(billId) {
    return billInfo.findByPk(billId);
}

function deleteById(billId) {
    return billInfo.destroy({ where: { billId: billId } });
}

function create(bill) {
    var newBill = new billInfo(bill);
    return newBill.save();
}

function updateBill(bill, billId) {
    var updateBill = {
        billDate: bill.billDate,
        billAmount: bill.billAmount,
        patientId: bill.patientId
        
    };
    return billInfo.update(updateBill, { where: { billId: billId } });
}

var billDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateBill: updateBill
}

module.exports = billDao;