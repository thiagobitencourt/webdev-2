'use strict';

const app = angular.module('webdev-2', []);
  
app.controller('mainController', ($scope) => {

  $scope.usuarios = [];
  
  $scope.selecionarUsuario = (usuario) => {
    $scope.usuarios.forEach(user => {
      if(user._id === usuario._id) {
        usuario.selecionado = !usuario.selecionado;
      } else {
        user.selecionado = false;
      }
    })
  }

  $scope.salvarNovoUsuario = (novoUsuario) => {
    if(!novoUsuario._id) {
      novoUsuario._id = $scope.usuarios.length + 1;
      $scope.usuarios.push($scope.novoUsuario);
      $scope.adicionandoUsuario = false;
      $scope.novoUsuario = undefined;
    } else {
      $scope.usuarios = $scope.usuarios.map(u => {
        return u._id === novoUsuario._id ? Object.assign({}, u, novoUsuario) : u;
      });
      $scope.adicionandoUsuario = false;
      $scope.novoUsuario = undefined;
    }
  }

  $scope.adicionarUsuario = () => {
    $scope.adicionandoUsuario = true;
  }

  $scope.cancelarCriacao = () => {
    $scope.adicionandoUsuario = false;
  }

  $scope.editarUsuario = () => {
    const usuarioEditavel = $scope.usuarios.find(user => user.selecionado);
    $scope.novoUsuario = angular.copy(usuarioEditavel);
    $scope.adicionandoUsuario = true;
  }

  $scope.removerUsuario = () => {
    const currentUser = $scope.usuarios.find(user => user.selecionado);
    if(currentUser) {
      $scope.usuarios.splice($scope.usuarios.indexOf(currentUser), 1);
      return true;
    }
    return false;
  }
});

app.controller('productsController', ($scope) => {
  $scope.produtos = [];

  $scope.selecionarProduto = (produto) => {
    $scope.produtos.forEach(prod => {
      if(prod._id === produto._id) {
        produto.selecionado = !produto.selecionado;
      } else {
        prod.selecionado = false;
      }
    })
  }

  $scope.salvarNovoProduto = (novoProduto) => {
    if(!novoProduto._id) {
      novoProduto._id = $scope.produtos.length + 1;
      $scope.produtos.push(novoProduto);
      $scope.adicionandoProduto = false;
      $scope.novoProduto = undefined;
    } else {
      $scope.produtos = $scope.produtos.map(produto => {
        return produto._id === novoProduto._id ? Object.assign({}, produto, novoProduto) : produto;
      });
      $scope.adicionandoProduto = false;
      $scope.novoProduto = undefined;
    }
  }

  $scope.adicionarProduto = () => $scope.adicionandoProduto = true;

  $scope.cancelarCriacao = () => $scope.adicionandoProduto = false;

  $scope.editarProduto = () => {
    const produtoEditavel = $scope.produtos.find(produto => produto.selecionado);
    $scope.novoProduto = angular.copy(produtoEditavel);
    $scope.adicionandoProduto = true;
  }

  $scope.removerProduto = () => {
    const currentProduto = $scope.produtos.find(produto => produto.selecionado);
    if(currentProduto) {
      $scope.produtos.splice($scope.produtos.indexOf(currentProduto), 1);
      return true;
    }
    return false;
  }
});