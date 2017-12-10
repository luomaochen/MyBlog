/**
 * Created by st on 2017/12/9.
 */

var mongoose=require('mongoose');
var categoriesSchema=require('../schemas/categories');

module.exports=mongoose.model('Category',categoriesSchema);