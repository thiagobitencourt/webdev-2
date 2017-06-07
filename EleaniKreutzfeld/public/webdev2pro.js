'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController1', function($scope, servicoProdutos) {
  $scope.titulo = "Produtos";

  function carregarProdutos() {
    console.log("Vou buscar os Produtos");
    servicoProdutos.obterProdutos()
    .then(function(resultado) {
      console.log("retornou os Produtos");
      console.log(resultado);
      $scope.produtos = resultado.data;
    })
    .catch(function(resultado) {
      console.log(resultado.status);
      window.open('http://localhost:3000/erro404.html');
    });
    console.log("Busquei os Produtos?");
    console.log($scope.produtos);
  }
  carregarProdutos();

  $scope.adicionarProduto = function() {
    $scope.adicionandoProduto = true;
  }

  $scope.excluirProduto = function() {
    var produtoSelecionado = $scope.produtos.find(function(user, index) {
      return user.selecionado;
    });
    servicoProdutos.excluirProduto(produtoSelecionado)
      .then(function(resultado) {
        console.log('Usuário removido');
        console.log(resultado.data);
        carregarProdutos();
      });
  }

  $scope.editarProduto = function() {
    var produtoEditavel = $scope.produtos.find(function(user, index) {
      return user.selecionado;
    });
    $scope.novoProduto = angular.copy(produtoEditavel);
    $scope.adicionandoProduto = true;
  }

  $scope.salvarNovoProduto = function(produto) {
    servicoProdutos
      .salvarProduto(produto)
      .then(function(resultado) {
        console.log("salvou...");
        console.log(resultado);
        carregarProdutos();
        $scope.novoProduto = undefined;
        $scope.adicionandoProduto = false;
      });
    console.log("Salvar...");
  }

  $scope.selecionaProduto = function(produto) {
    $scope.produtos.forEach(function(user) {
      if(user._id === produto._id) {
        produto.selecionado = !produto.selecionado;
      } else {
        user.selecionado = false;
      }
    })
  }

})
