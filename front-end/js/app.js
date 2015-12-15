angular
  .module('ElementsApp', ['ngResource', 'ui.bootstrap', 'ui.router'])
  .constant('API', 'http://chemistry-learner.herokuapp.com/api')
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('learn', {
      url: '/learn',
      templateUrl: 'views/learn.html'
    });

  $urlRouterProvider.otherwise('/');
}