const Test_detail_info = require('../models/Test_detail_info');
var test_detail_infoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateTest_detail_info: updateTest_detail_info
}

function findAll() {
    return Test_detail_info.findAll();
}

function findById(test_id) {
    return Test_detail_info.findByPk(test_id);
}

function deleteById(test_id) {
    return Test_detail_info.destroy({ where: { test_id: test_id } });
}

function create(test_detail_info) {
    var newTest_detail_info = new Test_detail_info(test_detail_info);
    return newTest_detail_info.save();
}

function updateTest_detail_info(test_detail_info, test_id) {
    var updateTest_detail_info = {
        first_name : test_detail_info.first_name,
        last_name : test_detail_info.last_name,
        email: test_detail_info.email,
        password : test_detail_info.password,
        joining_date : test_detail_info.joining_date,
        mobile_no:test_detail_info.mobile_no
    };
    return Test_detail_info.update(updateTest_detail_info, { where: { test_id: test_id } });
}
module.exports = test_detail_infoDao;