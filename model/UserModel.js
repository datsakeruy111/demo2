var mongoose = require('../config/connect');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username :String,
    password :String,
    age :Number,
 },{
     collection:"userTable"
 })
 var UserModel = mongoose.model("userTable",UserSchema);
 module.exports = UserModel;