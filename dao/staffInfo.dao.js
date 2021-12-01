const staffInfo = require('../models/staffInfo');

function findAll() {
    return staffInfo.findAll();
}

function findById(staffId) {
    return staffInfo.findByPk(staffId);
}

function deleteById(staffId) {
    return staffInfo.destroy({ where: { staffId : staffId } });
}

function create(Staffs) {
    var newstaff = new staffInfo(Staffs);
    return newstaff.save();
}

function update(staffInfo,staffId) {
    var updatestaff = {
        staffId: staffInfo.staffId,
        Qualification: staffInfo.qualification,
        gender: staffInfo.gender,
        dateOfBirth: staffInfo.dateOfBirth,
        dateOfJoin: staffInfo.dateOfJoin,
        address: staffInfo.address,
        phone: staffInfo.phone,
        email: staffInfo.email,
        experience: staffInfo.experience
        
    };
    return staffInfo.update(updatestaff, { where: { staffId : staffId } });
}
var staffInfoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

module.exports = staffInfoDao;