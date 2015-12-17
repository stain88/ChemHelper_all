angular
  .module('ElementsApp')
  .service('TokenService', TokenService);

TokenService.$inject = ['$window', 'jwtHelper'];
function TokenService($window, jwtHelper) {
  var self = this;

  self.getToken = function() {
    return $window.localStorage.getItem('satellizer-token');
  }

  self.removeToken = function() {
    $window.localStorage.removeItem('satellizer-token');
  }

  self.getUser = function() {
    var token = self.getToken();
    return jwtHelper.decodeToken(token);
  }
}