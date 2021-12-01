const Test_info = require('../models/testInfo');
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
        test_info_id: test_info.test_info_id,
        test_id: test_info.test_id,
        range: test_info.range,
        description: test_info.description,
        report_id: test_info.report_id,

    };
    return Test_info.update(updateTest_info, { where: { test_info_id: test_info_id } });
}
module.exports = test_infoDao;