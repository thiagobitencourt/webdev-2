'use strict';

var app = angular.module('webdevProduto', []);

app.controller('mainController',['$scope', '$http',function($scope, $http){

  $scope.produtos;

  $scope.adicionarProduto = function(){
    $scope.adicionandoProduto = true;
  }

  $scope.selecionaProduto = function(produto){
    $scope.produtos.forEach(function(prod){
      prod.selecionado = false;
    });
    produto.selecionado = !produto.selecionado;
  }

  $scope.excluirProduto = function(){
    var input =[];
    var id;
    $scope.produtos.forEach(function(produto, index){
      if(produto.selecionado === true){
        id = produto._id;
      }
    });
    var urlDelete = '/produto/' + id;
    $http.delete(urlDelete, input)
    .then(
      function(response){
      },
      function(response){
      }
    );
    $scope.atualizaLista();
    $scope.adicionandoProduto = false;
  }

  $scope.salvarNovoProduto = function(produto){
    var urlPostAdd = '/produto';
    var dataObj = {
      nome : produto.nome,
      codigo : produto.codigo,
      quantidade : produto.quantidade
    };

    if(!produto._id) {
      $http.post('http://localhost:3000/produto', produto);
    } else {
      $http.put('http://localhost:3000/produto/' + produto._id, produto)
    }
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

  $scope.editarProduto = function() {
    var produtoEditavel = $scope.produtos.find(function(user, index) {
      return user.selecionado;
    });
    $scope.novoProduto = angular.copy(produtoEditavel);
    $scope.adicionandoProduto = true;
  }

  var urlGetAll = '/produto';
  $http.get(urlGetAll).then(function(response) {
    $scope.produtos = response.data;
  }, function(err) {
    console.log(err);
  });
}]);
