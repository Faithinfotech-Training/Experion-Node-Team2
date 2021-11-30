const dept_info = require('../models/dept_info');
var dept_Dao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

function findAll() {
    return dept_info.findAll();
}

function findById(Dept_id) {
    return dept_info.findByPk(Dept_id);
}

function deleteById(Dept_id) {
    return dept_info.destroy({ where: { Dept_id : Dept_id } });
}

function create(dept) {
    var newdept = new dept_info(dept);
    return newdept.save();
}

function update(dept, Dept_id) {
    var updatedept = {
        Dept_id : dept.Dept_id,
        Dept_Name : dept.Dept_Name,
       };
    return dept_info.update(updatedept, { where: { Dept_id: Dept_id } });
}
module.exports = dept_Dao;