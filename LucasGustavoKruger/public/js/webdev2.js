'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope, productService) {
  $scope.titulo = "Produtos";

  function carregarProdutos() {
    productService.fetchProducts()
    .then(function(resp) {
      $scope.produtos = resp.data;
    })
    .catch(function(err) {
      window.open('http://localhost:3000/erro404.html');
    });
  }
  carregarProdutos();

  $scope.saveProduct = function() {
    $scope.adicionandoProduto = true;
  }

  $scope.removeProduct = function() {
    var produtoSelecionado = $scope.produtos.find(function(produto, index) {
      return produto.selecionado;
    });
    productService.removeProduct(produtoSelecionado)
      .then(function(resultado) {
        carregarProdutos();
      });
  }

  $scope.editProduct = function() {
    var produtoEditavel = $scope.produtos.find(function(produto, index) {
      return produto.selecionado;
    });
    $scope.produto = angular.copy(produtoEditavel);
    $scope.adicionandoProduto = true;
  }

  $scope.postProduct = function(produto) {
    productService
      .saveProduct(produto)
      .then(function(resultado) {
        carregarProdutos();
        $scope.novoUsuario = undefined;
        $scope.adicionandoUsuario = false;
      });
  }

  $scope.selecionaProduto = function(prod) {
    console.log(prod);
    $scope.produtos.forEach(function(produto) {
      console.log(produto);
      if(produto._id === prod._id) {
        produto.selecionado = !prod.selecionado;
      } else {
        produto.selecionado = false;
      }
    })
  }

});