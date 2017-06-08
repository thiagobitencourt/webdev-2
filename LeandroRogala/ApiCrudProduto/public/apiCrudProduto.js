'use strict';

var app = angular.module('apiCrudProduto', []);
app.controller('mainController', function($scope, servicoProdutos){

  $scope.produtos;
  $scope.addProduto;

  function loading(){
    servicoProdutos.getAll().then(function(resultado){
      $scope.produtos = resultado.data;
    })
  };

  loading();

  $scope.addProdutos = function(){
    $scope.addProduto = true;
  };

  $scope.selectProduto = function(produto){
    $scope.produtos.forEach(function(product){
      if(product._id === produto._id){
        produto.selecionado = !produto.selecionado;
      }else{
        product.selecionado = false;
      }
    })
  };

  $scope.saveNewProduto= function(produto){
    servicoProdutos.saveProduto(produto).then(function(resultado){
      loading();
      $scope.newProduto = undefined;
      $scope.addProduto = false;
    })
  };

  $scope.editProduto = function(){
    var produtoEditavel = $scope.produtos.find(function(product, index){
      return product.selecionado;
    });
    $scope.newProduto = angular.copy(produtoEditavel);
    $scope.addProduto = true;
  };

  $scope.deleteProduct = function(){
    var produtoSelecionado = $scope.produtos.find(function(product, index){
      return product.selecionado;
    });
    servicoProdutos.deleteProduto(produtoSelecionado).then(function(resultado){
      loading();
    });
  }

})
