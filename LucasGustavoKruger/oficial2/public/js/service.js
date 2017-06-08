'use strict';

app = angular.module('oficial-ii')
  .service('service', function($http) {

  return {
    someFunction: function() {
      return "Hello world!";
    }
  }

});