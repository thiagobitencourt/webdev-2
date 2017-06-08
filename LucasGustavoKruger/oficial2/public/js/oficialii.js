'use strict';

var app = angular.module('oficial-ii', []);
app.controller('mainController', function($scope, service) {
  $scope.title = "Contas bancárias";
  $scope.isViewing = true;
  
  const fetchAccounts = () => {
    service.fetchAccounts().then(function(resp) {
      $scope.contas = resp.data;
    }).catch(function(err) {
      $scope.title = "Erro ao encontrar contas bancarias!";
    });
  }

  fetchAccounts();
});