var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Images = new Schema({
  format:  String,
  width: Number,
  height: Number,
  filename: String,
  id : Number,
  author : String,
  author_url : String,
  post_url : String
});

module.exports = mongoose.model('Images', Images);