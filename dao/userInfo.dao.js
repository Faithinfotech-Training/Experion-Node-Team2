const userInfo = require('../models/userInfo');
var userDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateUser: updateUser
}

function findAll() {
    return userInfo.findAll();
}

function findById(id) {
    return userInfo.findByPk(id);
}

function deleteById(id) {
    return userInfo.destroy({ where: { id: id } });
}

function create(user) {
    var newUser = new userInfo(user);
    return newUser.save();
}

function updateUser(user, id) {
    var updateUser = {
        userName: user.userName,
        userPassword:user. userPassword,
        roleId:user.roleId
        
        
    };
    return userInfo.update(updateUser, { where: { id: id } });
}
module.exports = userDao;