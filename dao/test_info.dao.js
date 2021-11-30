const Test_info = require('../models/Test_info');
var test_infoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateTest_info: updateTest_info
}

function findAll() {
    return Test_info.findAll();
}

function findById(test_info_id) {
    return Test_info.findByPk(test_info_id);
}

function deleteById(test_info_id) {
    return Test_info.destroy({ where: { test_info_id: test_info_id } });
}

function create(test_info) {
    var newTest_info = new Test_info(test_info);
    return newTest_info.save();
}

function updateTest_info(test_info, test_info_id) {
    var updateTest_info = {
        first_name : test_info.first_name,
        last_name : test_info.last_name,
        email: test_info.email,
        password : test_info.password,
        joining_date : test_info.joining_date,
        mobile_no:test_info.mobile_no
    };
    return Test_info.update(updateTest_info, { where: { test_info_id: test_info_id } });
}
module.exports = test_infoDao;