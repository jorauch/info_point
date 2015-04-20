'use strict';

/* Controllers */

var contentControllers = angular.module('contentControllers', []);

contentControllers.controller('ContentListCtrl', ['$scope', 'Item',
  function($scope, Item) {
    console.log("hello");
    $scope.Item = Item.query();
    $scope.orderProp = 'age';
  }]);

contentControllers.controller('ContentDetailCtrl', ['$scope', '$routeParams', 'Item',
  function($scope, $routeParams, Item) {
    $scope.item = Item.get({itemId: $routeParams.itemId}, function(item) {
      $scope.mainImageUrl = item.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
