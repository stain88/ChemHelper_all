angular
  .module('ElementsApp')
  .controller('SignupController', SignupController);

SignupController.$inject = ['$auth'];
function SignupController($auth) {
  var self = this;

  self.authenticate = function(provider) {
    $auth.authenticate(provider);
  }

  self.isAuthenticated = function() {
    return $auth.isAuthenticated();
  }

  self.logout = function() {
    return $auth.logout();
  }
}