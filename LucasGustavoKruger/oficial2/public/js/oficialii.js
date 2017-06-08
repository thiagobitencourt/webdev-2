'use strict';

var app = angular.module('oficial-ii', []);
app.controller('mainController', function($scope, service) {
  $scope.hello = service.someFunction();
});