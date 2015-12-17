var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  facebookId: String,
  githubId: String,
  totalQuestions: {type: Number, default: 0},
  correctAnswers: {type: Number, default: 0}
})

module.exports = mongoose.model('User', userSchema);