'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope, servicoUsuarios) {

  //servicoUsuarios.teste();

  $scope.titulo = "Usuários";
  servicoUsuarios.obterUsuarios().then(function(resultado){
    console.log("resultado");
  })

  $scope.adicionarUsuario = function() {
    console.log("Adicionar usuario");
    $scope.adicionandoUsuario = true;
  }

  $scope.excluirUsuario = function() {
    console.log("Excluir usuario");
    var usuarioSelecionado = $scope.usuarios.find(function(user, index) {
      return user.selecionado;
    });
    servicoUsuarios.excluirUsuario(usuarioSelecionado);
  }

  $scope.editarUsuario = function() {
    console.log("Editar usuario");
    var usuarioSel = $scope.usuarios.find(function(user, index) {
      return user.selecionado;
    });
    $scope.novoUsuario = angular.copy(usuarioSel);
    $scope.adicionandoUsuario = true;
  }

  $scope.salvarNovoUsuario = function(usuario) {
    console.log(usuario);
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
