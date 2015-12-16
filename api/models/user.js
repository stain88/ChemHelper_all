var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  facebookId: String,
  score: Number
})

module.exports = mongoose.model('User', userSchema);