var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
  name: String,
  inStock: Boolean,
  cost: String
});

module.exports = mongoose.model('SomeThing', ProductSchema);
