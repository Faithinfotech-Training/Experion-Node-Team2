const test_infoDao = require('../dao/test_info.dao');
var test_infoController = {
    addTest_info: addTest_info,
    findTest_infos: findTest_infos,
    findTest_infoById: findTest_infoById,
    updateTest_info: updateTest_info,
    deleteById: deleteById
}

function addTest_info(req, res) {
    let test_info = req.body;
    test_infoDao.create(test_info).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTest_infoById(req, res) {
    test_infoDao.findById(req.params.test_info_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    test_infoDao.deleteById(req.params.test_info_id).
        then((data) => {
            res.status(200).json({
                message: "test_info deleted successfully",
                test_info: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateTest_info(req, res) {
    test_infoDao.updateTest_info(req.body, req.params.test_info_id).
        then((data) => {
            res.status(200).json({
                message: "test_info updated successfully",
                test_info: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTest_infos(req, res) {
    test_infoDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = test_infoController;