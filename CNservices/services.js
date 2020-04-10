var  UserModel = require("../model/UserModel");
function getAll(){
    return UserModel.find()
}
function luuAll(){
    return UserModel.find({
        _id:'5e5357a3ecabbb0a3c6af690'
    })
}
function datAll(){
    return UserModel.findOne({username:'ta'})
}
function tolALl(username,password){
    return UserModel.create({
        username:username,
        password:password,
    })
}
function checklogin(username,password){
    return UserModel.find({
        username: username,        
        password: password
    })
}
function suaAll(id,username,password,age){
    return UserModel.updateOne({_id:id},{
        username : username,
        password: password,
        age: age,
    })
}
function themAll(username,password,age){
    return UserModel.create({
        username: username,
        password: password,
        age: age,
    })
}
function xoaAll(id){
    return UserModel.deleteOne({
      _id: id
    })
}
module.exports = {
    getAll: getAll,
    luuAll: luuAll,
    datAll: datAll,
    checklogin: checklogin,
    tolALl: tolALl,
    suaAll: suaAll,
    themAll: themAll,
    xoaAll: xoaAll,

    
}