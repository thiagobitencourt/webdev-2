'use strict';

var app = angular.module('webdev-2', []);
  
app.controller('mainController', ($scope, usuarioService) => {

  function carregarUsuarios() {
    usuarioService.obterUsuarios().then(response => {
      $scope.usuarios = response.data;
    });
  }
  
  carregarUsuarios();

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
    usuarioService.salvarUsuario(novoUsuario).then(response => {
      $scope.novoUsuario = undefined;
      $scope.adicionandoUsuario = false;
      carregarUsuarios();
    }).catch(err => console.log(err));
  }

  $scope.adicionarUsuario = () => {
    $scope.adicionandoUsuario = true;
  }

  $scope.cancelarCriacao = () => {
    $scope.adicionandoUsuario = false;
    $scope.novoUsuario = undefined;
  }

  $scope.editarUsuario = () => {
    const usuarioEditavel = $scope.usuarios.find(user => user.selecionado);
    $scope.novoUsuario = usuarioEditavel ? angular.copy(usuarioEditavel) : undefined;
    $scope.adicionandoUsuario = !!usuarioEditavel;
  }

  $scope.removerUsuario = () => {
    const currentUser = $scope.usuarios.find(user => user.selecionado);
    usuarioService.removerUsuario(currentUser).then(() => {
      carregarUsuarios();
    });
  }
});

app.controller('productsController', ($scope, productService) => {

  function carregarProdutos() {
    productService.obterProdutos().then(response => {
      $scope.produtos = response.data;
    });
  }

  carregarProdutos();

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
    productService.salvarProduto(novoProduto).then(response => {
      $scope.adicionandoProduto = false;
      $scope.novoProduto = undefined;
      carregarProdutos();
    });
  }

  $scope.adicionarProduto = () => $scope.adicionandoProduto = true;

  $scope.cancelarCriacao = () => {
    $scope.adicionandoProduto = false;
    $scope.novoProduto = undefined;
  }

  $scope.editarProduto = () => {
    const produtoEditavel = $scope.produtos.find(produto => produto.selecionado);
    $scope.novoProduto = produtoEditavel ? angular.copy(produtoEditavel) : undefined;
    $scope.adicionandoProduto = !!produtoEditavel;
  }

  $scope.removerProduto = () => {
    const currentProduto = $scope.produtos.find(produto => produto.selecionado);
    productService.excluirProduto(currentProduto).then(response => {
      carregarProdutos();
    });
  }
});