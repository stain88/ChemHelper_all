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

module.exports = {
  getUsers: getUsers,
  getUser: getUser
};