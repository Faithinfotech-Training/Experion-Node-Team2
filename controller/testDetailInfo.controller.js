const test_detail_infoDao = require('../dao/testDetailInfo.dao');
var test_detail_infoController = {
    addTest_detail_info: addTest_detail_info,
    findTest_detail_infos: findTest_detail_infos,
    findTest_detail_infoById: findTest_detail_infoById,
    updateTest_detail_info: updateTest_detail_info,
    deleteById: deleteById
}

function addTest_detail_info(req, res) {
    let test_detail_info = req.body;
    test_detail_infoDao.create(test_detail_info).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTest_detail_infoById(req, res) {
    test_detail_infoDao.findById(req.params.test_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    test_detail_infoDao.deleteById(req.params.test_id).
        then((data) => {
            res.status(200).json({
                message: "test_detail_info deleted successfully",
                test_detail_info: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateTest_detail_info(req, res) {
    test_detail_infoDao.updateTest_detail_info(req.body, req.params.test_id).
        then((data) => {
            res.status(200).json({
                message: "test_detail_info updated successfully",
                test_detail_info: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTest_detail_infos(req, res) {
    test_detail_infoDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = test_detail_infoController;