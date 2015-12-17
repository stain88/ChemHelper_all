var User = require('../models/user');

function getUsers(req, res) {
  User.find({}, function(err, users) {
    if (err) return res.json({message: 'could not find any users'});

    res.json({users: users});
  });
};

function getUser(req, res) {
  var id = req.params.id;
  User.findById({_id: id}, function(err, user) {
    if (err) return res.json({message: 'could not find user: ' + err});

    res.json({user: user});
  });
};

function userUpdate(req, res) {
  var id = req.body._id;
  User.findById({_id: id}, function(err, user) {
    if (err) return res.json({message: 'could not find user: ' + err});

    user.totalQuestions = req.body.totalQuestions;
    user.correctAnswers = req.body.correctAnswers || user.correctAnswer;

    user.save(function(err) {
      if (err) return res.json({message: 'could not update user: ' + err});

      return res.json({message: 'user successfulluy updated', user: user});
    });
  });
};

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  userUpdate: userUpdate
};