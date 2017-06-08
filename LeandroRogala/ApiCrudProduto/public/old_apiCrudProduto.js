'use strict';

var app = angular.module('apiCrudProduto', []);

app.controller('mainController',['$scope', '$http',function($scope, $http){

  $scope.produtos;

  $scope.adicionarProduto = function(){
    $scope.adicionandoProduto = true;
  }

  $scope.selecionaProduto = function(product){
    $scope.produtos.forEach(function(prod){
      prod.selecionado = false;
    });
    product.selecionado = !product.selecionado;
  }

  $scope.excluirProduto = function(){
    var input =[];
    var id;
    $scope.produtos.forEach(function(product, index){
      if(product.selecionado === true){
        id = product._id;
      }
    });
    var urlDelete = '/produto/' + id;
    console.log(urlDelete);
    $http.delete(urlDelete, input)
    .then(
      function(response){
      },
      function(response){
      }
    );
    $scope.atualizaLista();
  }

  $scope.salvarNovoProduto = function(produto){
    var urlPostAdd = '/produto';
    var dataObj = {
      nome : produto.nome,
      codigo : produto.codigo,
      quantidade : produto.quantidade,
      disponivel : produto.disponivel
    };
    $http.post(urlPostAdd, dataObj)
    .then(
      function(response){
      },
      function(response){
      }
    );
    $scope.atualizaLista();
    $scope.novoProduto = null;
    $scope.adicionandoProduto = false;
  }

  $scope.atualizaLista = function(){
    var urlGetAll = '/produto';
    $http.get(urlGetAll).then(function(response) {
      $scope.produtos = response.data;
    }, function(err) {
      console.log(err);
    });
  }

  var urlGetAll = '/produto';
  $http.get(urlGetAll).then(function(response) {
    $scope.produtos = response.data;
  }, function(err) {
    console.log(err);
  });
}]);
