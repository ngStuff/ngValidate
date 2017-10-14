window.angular && (function () {

  let app = angular.module('ngStuff.docs', [
    'ui.router'
  ]);

  app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/docs');

    $stateProvider
    /***** DOCUMENTATION *****/
    .state('docs', {
      url: '/docs',
      view: null,
      abstract: true
    })
    // Home
    .state('docs.home', {
      url: '',
      templateUrl: 'views/home.html'
    })
    // Validate Async
    .state('docs.async', {
      url: '/validate-async',
      templateUrl: 'views/validate-async.html'
    })
    // Validate Callback
    .state('docs.callback', {
      url: '/validate-callback',
      templateUrl: 'views/validate-callback.html'
    })
    // Match With
    .state('docs.matchwith', {
      url: '/match-with',
      templateUrl: 'views/match-with.html'
    })
    // Validate Email
    .state('docs.email', {
      url: '/validate-email',
      templateUrl: 'views/validate-email.html'
    });
    
  }]);

})();
