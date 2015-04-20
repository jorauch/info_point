'use strict';

/* App Module */

var phonecatApp = angular.module('iph-info_point', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/content-list.html',
        controller: 'ContentListCtrl'
      }).
      when('/content/:phoneId', {
        templateUrl: 'partials/content-detail.html',
        controller: 'ContentDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
