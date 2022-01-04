const {db} = require('../database/db');

function insert(data){
    return db('registration').insert(data)
}

function getAll(){
    return db('registration');
}

function getFiltered(colName, query){
    return db('registration').where(colName, query);
}

function getById(id){
    return db('registration').where('user_id', id);
}

function findAndUpdate(colName, query, colNameToUpdate, val) {
    return db('registration').where(colName, query).update({ colNameToUpdate: val });
}

function invertVerifBool(id){
    return db('registration').where({user_id: id}).update({
        verified: db.raw('NOT ??',  ['verified'])
    })
}
module.exports = {getAll, getFiltered, getById, insert, findAndUpdate, invertVerifBool}