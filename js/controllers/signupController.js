angular
  .module('ElementsApp')
  .controller('SignupController', SignupController);

SignupController.$inject = ['$auth', 'User'];
function SignupController($auth, User) {
  var self = this;

  self.user = {};

  self.authenticate = function(provider) {
    $auth.authenticate(provider);
  };

  self.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };

  self.logout = function() {
    return $auth.logout();
  };

  function info() {
    var id = $auth.getPayload()._id;
    User.get({id: id}, function(user) {
      self.user = user.user;
    });
  };

  if (self.isAuthenticated()) {
    info();
  }
}