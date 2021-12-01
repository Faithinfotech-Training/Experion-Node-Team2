const billDao = require('../dao/billInfo.dao');

function addBills(req, res) {
    let bill = req.body;
    billDao.create(bill).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findBillById(req, res) {
    billDao.findById(req.params.billId).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    billDao.deleteById(req.params.billId).
        then((data) => {
            res.status(200).json({
                message: "Bill deleted successfully",
                bill: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateBill(req, res) {
    billDao.updateBill(req.body, req.params.billId).
        then((data) => {
            res.status(200).json({
                message: "Bill updated successfully",
                bill: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findBills(req, res) {
    billDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

var billController = {
    addBills: addBills,
    findBills: findBills,
    findBillById: findBillById,
    updateBill: updateBill,
    deleteById: deleteById
}


module.exports = billController;