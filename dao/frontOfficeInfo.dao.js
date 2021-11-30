const frontInfo = require('../models/frontOfficeInfo');
var frontDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

function findAll() {
    return frontInfo.findAll();
}

function findById(frontId) {
    return frontInfo.findByPk(frontId);
}

function deleteById(frontId) {
    return frontInfo.destroy({ where: { frontId: frontId } });
}

function create(frontOffice) {
    var newFrontOffice = new frontInfo(frontOffice);
    return newFrontOffice.save();
}

function update(frontOffice, frontId) {
    var updateFrontOffice = {
        frontId : frontOffice.frontId,
        frontName : frontOffice.frontName,
       };
    return frontInfo.update(updateFrontOffice, { where: {frontId: frontId } });
}
module.exports = frontDao;