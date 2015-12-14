var mongoose = require('mongoose');

var elementSchema = new mongoose.Schema({
  name: String,
  number: Number,
  group: String,
  position: Number,
  small: String,
  molar: Number,
  electrons: [],
  facts: [{type: mongoose.Schema.ObjectId, ref: 'Fact'}]
})

module.exports = mongoose.model('Element', elementSchema);