const frontofficeInfo = require('../models/frontofficeInfo');

function findAll() {
    return frontofficeInfo.findAll();
}

function findById(frontofficeId) {
    return frontofficeInfo.findByPk(frontofficeId);
}

function deleteById(frontoffId) {
    return frontofficeInfo.destroy({ where: { frontofficeId: frontofficeId } });
}

function create(frontoffice) {
    var newFrontoffice = new frontofficeInfo(frontoffice);
    return newFrontoffice.save();
}

function update(frontoffice, frontofficeId) {
    var updateFrontoffice = {
        frontofficeId : frontoffice.frontofficeId,
        frontofficeName : frontoffice.frontofficeName,
       };
    return frontofficeInfo.update(updateFrontoffice, { where: { frontofficeId: frontofficeId } });
}

var frontofficeDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

module.exports = frontofficeDao;