const Staff_Info = require('../models/Staff_Info');
var Staff_Dao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

function findAll() {
    return Staff_Info.findAll();
}

function findById(Staff_id) {
    return Staff_Info.findByPk(Staff_id);
}

function deleteById(Staff_id) {
    return Staff_Info.destroy({ where: { Staff_id : Staff_id } });
}

function create(Staffs) {
    var newstaff = new Staff_Info(Staffs);
    return newstaff.save();
}

function update(Staff_info,Staff_id) {
    var updatestaff = {
        Staff_id: Staff_info.Staff_id,
        Qualification: Staff_info.Qualification,
        Gender: Staff_info.Gender,
        DOB: Staff_info.DOB,
        DOJ: Staff_info.DOJ,
        Address: Staff_info.Address,
        Phone: Staff_info.Phone,
        Email: Staff_info.Email,
        EXP: Staff_info.EXP
        
    };
    return Staff_Info.update(updatestaff, { where: { Staff_id : Staff_id } });
}
module.exports = Staff_Dao;