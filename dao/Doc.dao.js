const Doc_Info = require('../models/Doc_Info');
var Doc_Dao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

function findAll() {
    return Doc_Info.findAll();
}

function findById(Doc_id) {
    return Doc_Info.findByPk(Doc_id);
}

function deleteById(Doc_id) {
    return Doc_Info.destroy({ where: { Doc_id: Doc_id } });
}

function create(Doctor) {
    var newDoc = new Doc_Info(Doctor);
    return newDoc.save();
}

function update(Doctor, Doc_id) {
    var updateDoc_info = {
        Doc_id : Doctor.Doc_id,
        Doc_name : Doctor.Doc_name,
       };
    return Doc_info.update(updateDoc_info, { where: { Doc_id: Doc_id } });
}
module.exports = Doc_Dao;