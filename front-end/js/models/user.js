angular
  .module('ElementsApp')
  .factory('User', User);

User.$inject = ['$resource', 'API'];
function User($resource, API) {
  return $resource(API + '/users/:id', null, {
    
  })
}