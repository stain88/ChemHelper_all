var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  facebookId: String,
  score: {type: Number, default: 0}
})

module.exports = mongoose.model('User', userSchema);