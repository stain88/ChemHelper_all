angular
  .module('ElementsApp', ['ngResource', 'ui.bootstrap', 'ui.router', 'satellizer'])
  .constant('API', 'http://chemistry-learner.herokuapp.com/api')
  .config(MainRouter)
  .config(oauthConfig);

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    })
    .state('learn', {
      url: '/learn',
      templateUrl: 'views/learn.html'
    });

  $urlRouterProvider.otherwise('/');
}