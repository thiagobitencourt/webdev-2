'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope, servicoUsuarios) {
  $scope.titulo = "Usuários";
  $scope.usuarios = servicoUsuarios.obterUsuarios();

  $scope.adicionarUsuario = function() {
    $scope.adicionandoUsuario = true;
  }

  $scope.excluirUsuario = function() {
    var usuarioSelecionado = $scope.usuarios.find(function(user, index) {
      return user.selecionado;
    });
    servicoUsuarios.excluirUsuario(usuarioSelecionado);
  }

  $scope.editarUsuario = function() {
    var usuarioEditavel = $scope.usuarios.find(function(user, index) {
      return user.selecionado;
    });
    $scope.novoUsuario = angular.copy(usuarioEditavel);
    $scope.adicionandoUsuario = true;
  }

  $scope.salvarNovoUsuario = function(usuario) {
    servicoUsuarios.salvarUsuario(usuario);
    $scope.novoUsuario = undefined;
    $scope.adicionandoUsuario = false;
  }

  $scope.selecionaUsuario = function(usuario) {
    $scope.usuarios.forEach(function(user) {
      if(user.id === usuario.id) {
        usuario.selecionado = !usuario.selecionado;
      } else {
        user.selecionado = false;
      }
    })
  }

})
