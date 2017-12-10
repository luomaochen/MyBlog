/**
 * Created by st on 2017/12/9.
 */

var mongoose=require('mongoose');
var usersSchema=require('../schemas/users');

module.exports=mongoose.model('User',usersSchema);