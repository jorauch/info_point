'use strict';

/* App Module */

var ipointApp = angular.module('ipointApp', [
  'ngRoute',
  'contentAnimations',
  'contentControllers',
  'contentFilters',
  'contentServices'
]);

ipointApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
          templateUrl: 'partials/content-list.html',
          controller: 'ContentListCtrl'
        }).
        when('/items/:itemId', {
          templateUrl: 'partials/content-detail.html',
          controller: 'ContentDetailCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });

      // use the HTML5 History API
      $locationProvider.html5Mode(true);

  }]);
