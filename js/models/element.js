angular
  .module('ElementsApp')
  .factory('Element', Element);

Element.$inject = ['$resource', 'API'];
function Element($resource, API) {
  return $resource(API + '/elements/:id', null, {
    'query': {method:"GET", isArray:true, transformResponse: function(data) {
      return angular.fromJson(data).elements;
    }}
  });
};
