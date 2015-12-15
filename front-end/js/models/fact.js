angular
  .module('ElementsApp')
  .factory('Fact', Fact);

Fact.$inject = ['$resource', 'API'];
function Fact($resource, API) {
  return $resource(API + '/facts/:id', null, {
    'update': {method: "PATCH"}
  });
};