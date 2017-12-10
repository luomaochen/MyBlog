/**
 * Created by st on 2017/12/9.
 */

var mongoose=require('mongoose');
var contentsSchema=require('../schemas/contents');

module.exports=mongoose.model('Content', contentsSchema);