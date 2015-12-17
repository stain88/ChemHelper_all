angular
  .module('ElementsApp', ['ngResource', 'ui.bootstrap', 'ui.router', 'satellizer'])
  .constant('API', 'https://chemistry-learner.herokuapp.com/api')
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
    })
    .state('quiz', {
      url: '/quiz',
      templateUrl: 'views/quiz.html'
    });

  $urlRouterProvider.otherwise('/');
};

oauthConfig.$inject = ['API', '$authProvider']
function oauthConfig(API, $authProvider) {
  $authProvider.facebook({
    url: API + '/auth/facebook', 
    clientId: '157948801229043'
  })
  $authProvider.github({
    url: API + '/auth/github',
    clientId: 'ba74c099e806a3426e66'
  })
}