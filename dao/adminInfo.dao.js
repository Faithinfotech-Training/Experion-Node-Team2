const adminInfo = require('../models/adminInfo');
var adminDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateAdmin: updateAdmin
}

function findAll() {
    return adminInfo.findAll();
}

function findById(id) {
    return adminInfo.findByPk(id);
}

function deleteById(id) {
    return adminInfo.destroy({ where: { id: id } });
}

function create(admin) {
    var newAdmin = new adminInfo(admin);
    return newAdmin.save();
}

function updateAdmin(admin, id) {
    var updateAdmin = {
        adminName: admin.adminName,
        staffId: admin.staffId,
        
    };
    return adminInfo.update(updateAdmin, { where: { id: id } });
}
module.exports = adminDao;