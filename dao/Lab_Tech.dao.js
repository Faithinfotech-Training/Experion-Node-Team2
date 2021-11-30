const Lab_Tech_info = require('../models/Lab_Tech_info');
var Lab_Tech_Dao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

function findAll() {
    return Lab_Tech_info.findAll();
}

function findById(Lab_Tech_id) {
    return Lab_Tech_info.findByPk(Lab_Tech_id);
}

function deleteById(Lab_Tech_id) {
    return Lab_Tech_info.destroy({ where: { Lab_Tech_id : Lab_Tech_id } });
}

function create(Lab_Tech) {
    var newlab = new Lab_Tech_info(Lab_Tech);
    return newlab.save();
}

function update(Lab_Tech, Lab_Tech_id) {
    var updateLab = {
        Lab_Tech_id : Lab_Tech.Lab_Tech_id,
        Lab_Tech_name : Lab_Tech.Lab_Tech_name,
       };
    return Lab_Tech_info.update(updateLab, { where: { Lab_Tech_id: Lab_Tech_id } });
}
module.exports = Lab_Tech_Dao;