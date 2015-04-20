'use strict';

/* App Module */

var ipointApp = angular.module('ipointApp', [
  'ngRoute',
  'contentAnimations',
  'contentControllers',
  'contentFilters',
  'contentServices'
]);

ipointApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/items', {
          templateUrl: 'partials/content-list.html',
          controller: 'ContentListCtrl'
        }).
        when('/items/:itemId', {
          templateUrl: 'partials/content-detail.html',
          controller: 'ContentDetailCtrl'
        }).
        otherwise({
          redirectTo: '/items'
        });
  }]);
