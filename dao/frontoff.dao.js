const Front_Off_Info = require('../models/Front_Off_Info');
var Frontoff_Dao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

function findAll() {
    return Front_Off_Info.findAll();
}

function findById(Front_off_id) {
    return Front_Off_Info.findByPk(Front_off_id);
}

function deleteById(Front_off_id) {
    return Front_Off_Info.destroy({ where: { Front_Off_id: Front_off_id } });
}

function create(Front_off) {
    var newFrontoff = new Front_Off_Info(Front_off);
    return newFrontoff.save();
}

function update(Front_off, Front_off_id) {
    var updateFront_off = {
        Front_off_id : Front_off.Front_off_id,
        Front_off_name : Front_off.Front_off_name,
       };
    return Front_Off_Info.update(updateFront_off, { where: { Front_Off_id: Front_Off_id } });
}
module.exports = Frontoff_Dao;