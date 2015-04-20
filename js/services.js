'use strict';

/* Services */

var contentServices = angular.module('contentServices', ['ngResource']);

contentServices.factory('Item', ['$resource',
  function($resource){
    return $resource('items/:itemId.json', {}, {
      query: {method:'GET', params:{itemId:'items'}, isArray:true}
    });
  }]);
