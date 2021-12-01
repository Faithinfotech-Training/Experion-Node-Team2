const adminInfo = require('../models/adminInfo');

function findAll() {
    return adminInfo.findAll();
}

function findById(adminId) {
    return adminInfo.findByPk(adminId);
}

function deleteById(adminId) {
    return adminInfo.destroy({ where: { adminId: adminId } });
}

function create(admin) {
    var newAdmin = new adminInfo(admin);
    return newAdmin.save();
}

function updateAdmin(admin, adminId) {
    var updateAdmin = {
        adminName: admin.adminName,
        staffId: admin.staffId,
        
    };
    return adminInfo.update(updateAdmin, { where: { adminId: adminId } });
}

var adminDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateAdmin: updateAdmin
}

module.exports = adminDao;