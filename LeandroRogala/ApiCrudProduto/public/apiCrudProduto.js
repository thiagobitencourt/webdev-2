'use strict';

var app = angular.module('apiCrudProduto', []);

app.controller('mainController',['$scope', '$http',function($scope, $http){


  $scope.produtos;
   var baseUrl = '/produto';
  $scope.adicionarProduto = function(){
    $scope.adicionandoProduto = true;
  }

  $scope.salvarNovoProduto = function(produto){
    $scope.novoProduto = null;
    $scope.adicionandoProduto = false;
  }

  $http.get(baseUrl).then(function(response) {
    $scope.produtos = response.data;
  }, function(err) {
    console.log(err);
  });

}]);
