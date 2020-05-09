var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs')

var userSchema = new Schema ({
    email : {type: String , requried : true},
    password : { type : String , requried : true},
});

module.exports = mongoose.model('User', userSchema);