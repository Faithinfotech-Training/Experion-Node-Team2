const roleInfo = require('../models/roleInfo');
var roleDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateRole: updateRole
}

function findAll() {
    return roleInfo.findAll();
}

function findById(id) {
    return roleInfo.findByPk(id);
}

function deleteById(id) {
    return roleInfo.destroy({ where: { id: id } });
}

function create(role) {
    var newRole = new roleInfo(role);
    return newRole.save();
}

function updateRole(role, id) {
    var updateRole = {
        roleName: role.roleName
        
        
    };
    return roleInfo.update(updateRole, { where: { id: id } });
}
module.exports = roleDao;