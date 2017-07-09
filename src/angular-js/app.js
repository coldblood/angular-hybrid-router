angular.module('shellApp', ['ui.router']);

angular.module('shellApp').config(['$stateProvider', '$locationProvider',
  function($stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/src/angular-js/home/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/src/angular-js/about/about.html'
      })
      // Define empty templates for routes controlled by new angular router
      // Needed to clear out the ui-router view after transitioning
      .state('p2p', {
        url:'/p2p',
        template: ''
      })
      .state('dip', {
        url:'/dip',
        template: ''
      });
}]);

