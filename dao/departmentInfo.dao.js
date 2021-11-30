const deptInfo = require('../models/deptInfo');
var deptDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

function findAll() {
    return deptInfo.findAll();
}

function findById(deptId) {
    return deptInfo.findByPk(deptId);
}

function deleteById(deptId) {
    return deptInfo.destroy({ where: { deptId : deptId } });
}

function create(dept) {
    var newdept = new deptInfo(dept);
    return newdept.save();
}

function update(dept, deptId) {
    var updatedept = {
        deptId : dept.deptId,
        deptName : dept.deptName,
       };
    return deptInfo.update(updatedept, { where: { deptId: deptId } });
}
module.exports = deptDao;