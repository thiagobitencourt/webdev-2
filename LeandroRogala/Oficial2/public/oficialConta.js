'use strict';

var app = angular.module('oficial2', []);
app.controller('mainController', function($scope, serviceConta){

  $scope.contas;

  function loading(){
    serviceConta.getAll().then(function(resultado){
      $scope.contas = resultado.data;

    })
  };

  loading();

});
