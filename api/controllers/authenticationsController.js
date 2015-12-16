var jwt             = require('jsonwebtoken'),
    qs              = require('qs'),
    request         = require('request-promise');

var User    = require('../models/user'),
    config  = require('../config/config');

function fblogin(req, res) {
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: process.env.CHEMHELPER_FACEBOOK_SECRET_KEY,
    redirect_uri: config.appUrl + "/"
  };

  request.get({url: config.oauth.facebook.accessTokenUrl, qs: params, json: true})
    .then(function(accessToken) {
      return request.get({ url: config.oauth.facebook.profileUrl, qs: accessToken, json: true });
    })
    .then(function(profile) {
      return User.findOne({email: profile.email})
      .then(function(user) {
        if (user) {
          user.facebookId = profile.id;
          user.picture = user.picture || profile.picture.data.url;
        } else {
          user = new User({
            facebookId: profile.id,
            name: profile.name,
            picture: profile.picture.data.url,
            email: profile.email
          });
        }
        return user.save();
      })
    })
    .then(function(user) {
      var token = jwt.sign(user, config.secret, { expiresIn: '24h' });
      return res.send({ token: token });
    })
    .catch(function(err) {
      console.log(err);
      return res.status(500).json({message: err});
    });
};

module.exports = {
  fblogin: fblogin
}